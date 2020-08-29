// nuxt.js配置文件
module.exports = {
    router:{
        linkActiveClass: 'active',
        // 自定义路由表规则；
        extendRoutes(routes, resolve) {
            
            // 清楚nuxt基于pages目录默认生成的路由表规则
            routes.splice(0);
            routes.push(...[
                {
                path: '/',
                component: resolve(__dirname, 'pages/layout/'),
                children:[
                    {
                        path:'',//默认子路由
                        name:'home',
                        component:resolve(__dirname,'pages/home/')
                    },
                    {
                        path:'/login',//默认子路由
                        name:'login',
                        component:resolve(__dirname,'pages/login/')
                    },
                    {
                        path:'/register',//默认子路由
                        name:'register',
                        component:resolve(__dirname,'pages/login/')
                    },
                    {
                        path:'/profile/:username',//默认子路由
                        name:'profile',
                        component:resolve(__dirname,'pages/profile/')
                    },
                    {
                        path:'/settings',//默认子路由
                        name:'settings',
                        component:resolve(__dirname,'pages/settings/')
                    },
                    {
                        path:'/editor',//默认子路由
                        name:'editor',
                        component:resolve(__dirname,'pages/editor/')
                    },
                    {
                        path:'/article/:slug',//默认子路由
                        name:'article',
                        component:resolve(__dirname,'pages/article/')
                    }

                ]
                }
            ])
          }
    },
    // modules:[
    //     '@nuxtjs/axios',
    //     '@nuxtjs/proxy'
    //   ],
    //   plugins: [
    //     { src: "~plugins/axios.js", ssr: true },
    //   ],
    //   axios: {
    //     proxy: true
    //   },
    
       
      
    //   proxy: [
    //     [
    //       '/api/',//拦截目录
    //       {
    //         target: 'https://conduit.productionready.io', // 代理api主机
    //         pathRewrite: { '^/api/' : '' }
    //       }
    //     ]
    //   ],


    // devServer: {
    //     port: 3000, // 端口号，如果端口号被占用，会自动提升1
    //     host: "localhost", //主机名， 127.0.0.1， 真机 0.0.0.0
    //     https: false, //协议
    //     open: true, //启动服务时自动打开浏览器访问
    //     proxy: {  // 开发环境代理配置
    //         '/api': {  // 意思是当请求是以 dev-api 开头的请求，都走代理
    //             // 目标服务器地址，代理访问：http://localhost:8001
    //             target: 'https://conduit.productionready.io',
    //             changeOrigin: true,   // 开启代理服务器，就会给你代理转发
    //             pathRewrite: {
    //                 // /dev-api/db.json 最终会转发到 http://localhost:8001/db.json
    //                 '^/api': '',  // 就是将请求地址中的 /dev-api 前缀替换成空的
    //             }
    //         }
    //     }
    // },
    // lintOnSave: false, // 关闭格式检查
    // productionSourceMap: false, // 打包时不会生成 .map 文件，加快打包速度

  
    
    
}