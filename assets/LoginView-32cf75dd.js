import{_ as d,o as c,c as m,a as s,f as r,v as l,i as u}from"./index-e79e5e84.js";const{VITE_APP_URL:p}={VITE_APP_PATH:"ken100",VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",BASE_URL:"/hexschool-vue-week6",MODE:"production",DEV:!1,PROD:!0},_={data(){return{loginData:{username:"",password:""}}},methods:{login(){this.$http.post(`${p}/admin/signin`,this.loginData).then(t=>{const{token:o,expired:a}=t.data;document.cookie=`userToken=${o}; expires=${new Date(a)};`,this.$router.push("/admin")}).catch(t=>{alert(t.data.message)})}}},h={class:"container"},f=s("h1",null,"admin",-1),g={class:"row justify-content-center"},w=s("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),v={class:"col-8"},D={id:"form",class:"form-signin"},P={class:"form-floating mb-3"},b=s("label",{for:"username"},"Email address",-1),x={class:"form-floating"},k=s("label",{for:"password"},"Password",-1);function E(t,o,a,V,n,i){return c(),m("div",h,[f,s("div",g,[w,s("div",v,[s("form",D,[s("div",P,[r(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":o[0]||(o[0]=e=>n.loginData.username=e)},null,512),[[l,n.loginData.username]]),b]),s("div",x,[r(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":o[1]||(o[1]=e=>n.loginData.password=e)},null,512),[[l,n.loginData.password]]),k]),s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",onClick:o[2]||(o[2]=u((...e)=>i.login&&i.login(...e),["prevent"]))}," 登入 ")])])])])}const y=d(_,[["render",E]]);export{y as default};