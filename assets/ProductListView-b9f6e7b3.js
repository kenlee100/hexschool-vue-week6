import{_ as f,o as i,c as l,a as t,t as d,f as I,v as M,g as V,r as p,F as h,e as L,b as u,w as E,h as m,d as g}from"./index-75a156c2.js";import{M as A,P as T}from"./Pagination-9b3eb3bd.js";const{VITE_APP_URL:$,VITE_APP_PATH:x}={VITE_APP_PATH:"ken100",VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},U={data(){return{modal:{},tempContent:{imagesUrl:[]},qty:1}},props:{id:{type:String,default:""},addCart:{type:Function,default(){}},openModal:{type:Function,default(){}}},methods:{closeModal(){this.modal.hide()}},watch:{id(){this.id&&this.$http.get(`${$}/api/${x}/product/${this.id}`).then(n=>{this.tempContent=n.data.product,this.modal.show()}).catch(n=>{alert(`${n.response.data.message}`)})}},mounted(){this.$refs.modal.addEventListener("hidden.bs.modal",()=>{this.qty=1,this.openModal("")}),this.modal=new A(this.$refs.modal,{backdrop:"static",keyboard:!1})}},S={class:"modal fade",ref:"modal"},w={class:"modal-dialog modal-xl",role:"document"},R={class:"modal-content border-0"},D={class:"modal-header bg-dark text-white"},q={class:"modal-title",id:"exampleModalLabel"},B={class:"modal-body"},H={class:"row"},N={class:"col-sm-6"},F=["src"],O={key:1,class:"img-fluid",src:"https://placehold.co/640x480?text=No+Photo",alt:""},j={class:"col-sm-6"},z={class:"badge bg-primary rounded-pill"},G={class:"h5"},J={class:"h6"},K={class:"h5"},Q={class:"input-group"};function W(n,s,c,_,o,a){return i(),l("div",S,[t("div",w,[t("div",R,[t("div",D,[t("h5",q,[t("span",null,d(o.tempContent.title),1)]),t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:s[0]||(s[0]=(...r)=>a.closeModal&&a.closeModal(...r))})]),t("div",B,[t("div",H,[t("div",N,[o.tempContent.imageUrl?(i(),l("img",{key:0,class:"img-fluid",src:o.tempContent.imageUrl,alt:""},null,8,F)):(i(),l("img",O))]),t("div",j,[t("span",z,d(o.tempContent.category),1),t("p",null,"商品描述："+d(o.tempContent.description),1),t("p",null,"商品內容："+d(o.tempContent.content),1),t("div",G,d(o.tempContent.price)+" 元",1),t("del",J,"原價 "+d(o.tempContent.origin_price)+" 元",1),t("div",K,"現在只要 "+d(o.tempContent.price)+" 元",1),t("div",null,[t("div",Q,[I(t("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":s[1]||(s[1]=r=>o.qty=r)},null,512),[[M,o.qty,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-primary",onClick:s[2]||(s[2]=r=>c.addCart(o.tempContent,o.qty))}," 加入購物車 ")])])])])])])])],512)}const X=f(U,[["render",W]]),{VITE_APP_URL:P,VITE_APP_PATH:b}={VITE_APP_PATH:"ken100",VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},Y={data(){return{isLoading:!1,loadingStatus:{loadingItem:""},products:[],pagination:{},tempProduct:{imagesUrl:[]},productId:""}},components:{RouterLink:V,ProductModal:X,Pagination:T},methods:{openModal(n){this.loadingStatus.loadingItem=n,this.productId=n},addCart(n,s=1){this.loadingStatus.loadingItem=n.id,this.$http.post(`${P}/api/${b}/cart`,{data:{product_id:n.id,qty:s}}).then(c=>{this.loadingStatus.loadingItem="";const{message:_,data:{product:o}}=c.data;alert(`${o.title} ${_}`),this.$refs.productModal.closeModal()}).catch(c=>{alert(`${c.response.data.message}`)})},getProducts(n=1){this.$http.get(`${P}/api/${b}/products?page=${n}`).then(s=>{this.products=s.data.products,this.pagination=s.data.pagination,this.isLoading=!1}).catch(s=>{alert(`${s.response.data.message}`)})}},mounted(){this.isLoading=!0,this.getProducts()}},Z=t("h1",null,"Product list",-1),tt={class:"row"},ot={class:"card mb-4"},st=["src","alt"],et={class:"card-body"},nt={class:"badge rounded-pill bg-primary"},dt={class:"card-title"},at={class:"card-text"},it={class:"btn-group btn-group-sm"},lt=["onClick","disabled"],ct={key:0,class:"fas fa-spinner fa-pulse"},rt=["onClick","disabled"],pt={key:0,class:"fas fa-spinner fa-pulse"};function ut(n,s,c,_,o,a){const r=p("router-link"),v=p("ProductModal"),C=p("Pagination"),y=p("VueLoading");return i(),l(h,null,[Z,t("div",tt,[(i(!0),l(h,null,L(o.products,e=>(i(),l("div",{class:"col-4",key:e.id},[t("div",ot,[u(r,{to:`/product/${e.id}`},{default:E(()=>[t("img",{src:e.imageUrl,class:"card-img-top",alt:e.title},null,8,st)]),_:2},1032,["to"]),t("div",et,[t("span",nt,d(e.category),1),t("h5",dt,d(e.title),1),t("p",at,d(e.description),1),t("div",it,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:k=>a.openModal(e.id),disabled:o.loadingStatus.loadingItem===e.id},[o.loadingStatus.loadingItem===e.id?(i(),l("i",ct)):m("",!0),g(" 快速查看 ")],8,lt),t("button",{type:"button",class:"btn btn-outline-danger",onClick:k=>a.addCart(e),disabled:o.loadingStatus.loadingItem===e.id},[o.loadingStatus.loadingItem===e.id?(i(),l("i",pt)):m("",!0),g(" 加到購物車 ")],8,rt)])])])]))),128))]),u(v,{ref:"productModal","temp-content":o.tempProduct,"add-cart":a.addCart,id:o.productId,"open-modal":a.openModal},null,8,["temp-content","add-cart","id","open-modal"]),u(C,{pages:o.pagination,onChangePage:a.getProducts,"get-products":a.getProducts},null,8,["pages","onChangePage","get-products"]),u(y,{active:o.isLoading,"onUpdate:active":s[0]||(s[0]=e=>o.isLoading=e)},null,8,["active"])],64)}const mt=f(Y,[["render",ut]]);export{mt as default};