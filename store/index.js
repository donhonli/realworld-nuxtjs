const cookieparser = process.server ? require('cookieparser') : undefined

// 在服务端渲染期间运行的都是用一个实列
// 防止数据冲突，务必把state定义成一个函数，返回数据对象
export const state = () => {
    return {
        // 当前登录用户登录状态
        user: null
    }
}

export const mutations = {
    setUser (state,data) {
        state.user = data
    }
}
export const actions = {
    // nuxtServerInit是特殊的action方法
    // 这个action 会在服务端渲染期间自动调用
    // 作用：初始化容器数据，传递数据给客户端使用
    nuxtServerInit ({ commit }, { req }) {
        console.log('nuxtServerInit')
        let user = null
        // 如果请求头部有cookie
        if (req.headers.cookie) {
          //  使用cookieparser.parse 把cookie字符串转为js对象
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
            user = JSON.parse(parsed.user)
          } catch (err) {
            // No valid cookie found
          }
        }
        commit('setUser',user)
      }
}