<template>
  <div>
    <!-- 导航栏顶部 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <!-- <a class="navbar-brand" href="index.html">conduit</a> -->
        <nuxt-link to="/" class="navbar-brand">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <!-- <a class="nav-link active" href="">Home</a> -->
            <nuxt-link to="/" class="nav-link" exact>Home</nuxt-link>
          </li>

          <template v-if="user">
            <li class="nav-item">
              <!-- <a class="nav-link" href="">
                      <i class="ion-compose"></i>&nbsp;New Post
              </a>-->
              <nuxt-link to="/editor" class="nav-link">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="">
                      <i class="ion-gear-a"></i>&nbsp;Settings
              </a>-->
              <nuxt-link to="/settings" class="nav-link">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/profile/123">
                <img class="user-pic" :src="user.image" />{{user.username}}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <!-- <a class="nav-link" href="">Sign up</a> -->
              <nuxt-link to="/register" class="nav-link">Sign up</nuxt-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="">Sign in</a> -->
              <nuxt-link to="/login" class="nav-link">Sign in</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- 子路由 -->
    <nuxt-child />
    <!-- 导航栏底部 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LayoutIndex",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"]),
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
</style>
