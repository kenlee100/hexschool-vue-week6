import{_,r as l,o as n,c as r,a as o,b as c,w as u,d as p,F as m,e as g,t as k,R as b}from"./index-e79e5e84.js";const{VITE_APP_URL:h}={VITE_APP_PATH:"ken100",VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",BASE_URL:"/hexschool-vue-week6",MODE:"production",DEV:!1,PROD:!0},f={data(){return{navList:[{path:"/admin/productlist",name:"商品列表"},{path:"/admin/orderlist",name:"訂單列表"},{path:"/",name:"回到前台"}]}},methods:{checkLogin(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");t?(this.$http.defaults.headers.common.Authorization=t,this.$http.post(`${h}/api/user/check`).then(()=>{}).catch(s=>{console.log(s),alert(`${s.response.data.message}`),this.$router.push("/login")})):(alert("請先登入"),this.$router.push("/login"))},logout(){this.$http.post(`${h}/logout/`).then(t=>{alert(t.data.message),document.cookie="userToken=;expires=;",this.$router.push("/login")}).catch(t=>{alert(`${t.response.data.message}`)})}},mounted(){this.checkLogin()}},x={class:"navbar navbar-expand-lg navbar-light bg-light"},L={class:"container"},A={class:"d-flex"},P={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"};function V(t,s,v,$,d,i){const a=l("router-link");return n(),r("nav",x,[o("div",L,[c(a,{class:"navbar-brand",to:"/admin"},{default:u(()=>[p("admin")]),_:1}),o("div",A,[o("div",P,[(n(!0),r(m,null,g(d.navList,e=>(n(),r("div",{class:"navbar-nav",key:e.path},[c(a,{class:"nav-link",to:e.path},{default:u(()=>[p(k(e.name),1)]),_:2},1032,["to"])]))),128))]),o("button",{type:"button",class:"btn btn-link",onClick:s[0]||(s[0]=(...e)=>i.logout&&i.logout(...e))},"登出")])])])}const E=_(f,[["render",V]]),N={methods:{},components:{RouterView:b,Navbar:E}},T={class:"container"},w={class:"py-4"};function R(t,s,v,$,d,i){const a=l("Navbar"),e=l("router-view");return n(),r(m,null,[c(a),o("div",T,[o("div",w,[c(e)])])],64)}const B=_(N,[["render",R]]);export{B as default};