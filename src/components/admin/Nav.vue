<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/admin">admin</router-link>
      <div class="d-flex">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" v-for="item in navList" :key="item.path">
            <router-link class="nav-link" :to="item.path">{{
              item.name
            }}</router-link>
          </div>
        </div>
        <button type="button" class="btn btn-link" @click="logout">登出</button>
      </div>
    </div>
  </nav>
</template>
<script>
const { VITE_APP_APIURL, VITE_APP_APIPATH } = import.meta.env;
export default {
  data() {
    return {
      navList: [
        {
          path: "/admin/productlist",
          name: "商品列表",
        },
        {
          path: "/admin/orderlist",
          name: "訂單列表",
        },
        {
          path: "/",
          name: "回到前台",
        },
      ],
    };
  },
  methods: {
    // 檢查是否登入
    checkLogin() {
      const token = document.cookie.replace(
        // userToken 剛剛定義的Token名稱
        /(?:(?:^|.*;\s*)userToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;
        this.$http
          .post(`${VITE_APP_APIURL}/api/user/check`)
          .then(() => {
            // console.log("check", res);
          })
          .catch((err) => {
            console.log(err);
            // 顯示失敗資訊
            alert(err.data.message);
            // 驗證失敗轉到登入
            this.$router.push("/login");
          });
      } else {
        alert("請先登入");
        this.$router.push("/login");
      }
    },
    logout() {
      this.$http
        .post(`${VITE_APP_APIURL}/logout/`)
        .then((res) => {
          alert(res.data.message);
          document.cookie = "userToken=;expires=;";
          this.$router.push("/login");
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
