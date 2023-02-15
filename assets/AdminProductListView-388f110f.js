import{M as T,P as M}from"./Pagination-f5d00663.js";import{_ as P,o as i,c as d,a as e,f as c,v as m,F as C,e as y,t as h,h as V,j as A,d as v,r as g,b as f}from"./index-e79e5e84.js";const{VITE_APP_URL:b,VITE_APP_PATH:w}={VITE_APP_PATH:"ken100",VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",BASE_URL:"/hexschool-vue-week6",MODE:"production",DEV:!1,PROD:!0},x={data(){return{modal:{},newTempContent:{imagesUrl:[]}}},props:{tempContent:{type:Object,default(){}},isNew:{type:Boolean,default:!1}},watch:{tempContent(){this.newTempContent=this.tempContent}},methods:{closeModal(){this.modal.hide()},openModal(){this.modal.show()},createImage(){let l=null;this.newTempContent.imagesUrl&&(l=this.newTempContent.imagesUrl.length);const t={id:new Date().getTime(),num:l+=1};this.newTempContent.imagesUrl?this.newTempContent.imagesUrl.push(t):(this.newTempContent.imagesUrl=[],this.newTempContent.imagesUrl.push(t))},deleteImage(l){this.newTempContent.imagesUrl.forEach((t,a)=>{t.id===l.id&&this.newTempContent.imagesUrl.splice(a,1)})},uploadFile(l){const t=new FormData;if(l==="main-file"){const a=this.$refs[l];t.append(a.name,a.files[0]),this.$http.post(`${b}/api/${w}/admin/upload/`,t).then(p=>{this.newTempContent.imageUrl=p.data.imageUrl}).catch(p=>{alert(p.response.data.message)})}else{const a=this.$refs[l][0],p=parseInt(a.dataset.num);t.append(a.name,a.files[0]),this.$http.post(`${b}/api/${w}/admin/upload/`,t).then(s=>{this.newTempContent.imagesUrl[p].imageUrl=s.data.imageUrl}).catch(s=>{alert(s.response.data.message)})}},async updateProduct(){let l=`${b}/api/${w}/admin/product`,t="post";this.isNew||(l=`${b}/api/${w}/admin/product/${this.newTempContent.id}`,t="put"),this.$http[t](l,{data:this.newTempContent}).then(a=>{this.$emit("update-data"),this.closeModal(),alert(a.data.message)}).catch(a=>{alert(a.response.data.message)})}},mounted(){this.$refs.modal.addEventListener("hidden.bs.modal",()=>{this.newTempContent={imagesUrl:[]}}),this.modal=new T(this.$refs.modal,{backdrop:"static",keyboard:!1})}},E={ref:"modal",class:"modal fade"},L={class:"modal-dialog modal-xl"},I={class:"modal-content border-0"},D={class:"modal-header bg-dark text-white"},$={id:"productModalLabel",class:"modal-title"},N={key:0},R={key:1},O={class:"modal-body"},F={class:"row"},H={class:"col-sm-4"},S={class:"mb-2"},B={class:"mb-3"},j=e("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),J={class:"input-group"},q=["src"],z={key:1,class:"img-fluid",src:"https://placehold.co/640x480?text=No+Photo",alt:""},G={class:"mb-3"},K={key:0,class:"d-flex flex-column overflow-auto"},Q={class:"form-label"},W={class:"form-group"},X=["placeholder","onUpdate:modelValue"],Y=["name","onChange","data-num"],Z=["src"],ee={key:1,class:"img-fluid",src:"https://placehold.co/640x480?text=No+Photo",alt:""},te=["onClick"],oe={class:"col-sm-8"},se={class:"mb-3"},ne=e("label",{for:"title",class:"form-label"},"標題",-1),le={class:"row"},ae={class:"mb-3 col-md-6"},ie=e("label",{for:"category",class:"form-label"},"分類",-1),de={class:"mb-3 col-md-6"},re=e("label",{for:"price",class:"form-label"},"單位",-1),ce={class:"row"},me={class:"mb-3 col-md-6"},pe=e("label",{for:"origin_price",class:"form-label"},"原價",-1),ue={class:"mb-3 col-md-6"},he=e("label",{for:"price",class:"form-label"},"售價",-1),_e=e("hr",null,null,-1),ge={class:"mb-3"},fe=e("label",{for:"description",class:"form-label"},"產品描述",-1),be={class:"mb-3"},we=e("label",{for:"content",class:"form-label"},"說明內容",-1),Ce={class:"mb-3"},Pe={class:"form-check"},ve=e("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Te={class:"modal-footer"};function ye(l,t,a,p,s,n){return i(),d("div",E,[e("div",L,[e("div",I,[e("div",D,[e("h5",$,[a.isNew?(i(),d("span",N,"新增產品")):(i(),d("span",R,"編輯產品"))]),e("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=(...o)=>n.closeModal&&n.closeModal(...o))})]),e("div",O,[e("div",F,[e("div",H,[e("div",S,[e("div",B,[j,c(e("input",{type:"text",class:"form-control",placeholder:"請輸入主要圖片連結","onUpdate:modelValue":t[1]||(t[1]=o=>s.newTempContent.imageUrl=o)},null,512),[[m,s.newTempContent.imageUrl]]),e("div",J,[e("input",{type:"file",class:"form-control",name:"main-file-upload",onChange:t[2]||(t[2]=o=>n.uploadFile("main-file")),ref:"main-file"},null,544)]),s.newTempContent.imageUrl?(i(),d("img",{key:0,class:"img-fluid",src:s.newTempContent.imageUrl,alt:""},null,8,q)):(i(),d("img",z))])]),e("div",G,[e("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=(...o)=>n.createImage&&n.createImage(...o))}," 新增其他圖片欄位 ")]),Array.isArray(s.newTempContent.imagesUrl)?(i(),d("div",K,[(i(!0),d(C,null,y(s.newTempContent.imagesUrl,(o,u)=>(i(),d("div",{key:o.id,class:"py-3 border-bottom"},[e("label",Q,"圖片 "+h(o.num),1),e("div",W,[c(e("input",{type:"text",class:"form-control",placeholder:"請輸入圖片"+o.num+"連結","onUpdate:modelValue":_=>s.newTempContent.imagesUrl[u].imageUrl=_},null,8,X),[[m,s.newTempContent.imagesUrl[u].imageUrl]]),e("input",{type:"file",class:"form-control",name:"file-upload-"+(u+1),ref_for:!0,ref:"ref-file-"+(u+1),onChange:_=>n.uploadFile("ref-file-"+(u+1)),"data-num":u},null,40,Y),o.imageUrl?(i(),d("img",{key:0,class:"img-fluid",src:o.imageUrl,alt:""},null,8,Z)):(i(),d("img",ee))]),e("div",null,[e("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:_=>n.deleteImage(o)}," 刪除圖片 "+h(o.num),9,te)])]))),128))])):V("",!0)]),e("div",oe,[e("div",se,[ne,c(e("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":t[4]||(t[4]=o=>s.newTempContent.title=o)},null,512),[[m,s.newTempContent.title]])]),e("div",le,[e("div",ae,[ie,c(e("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":t[5]||(t[5]=o=>s.newTempContent.category=o)},null,512),[[m,s.newTempContent.category]])]),e("div",de,[re,c(e("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":t[6]||(t[6]=o=>s.newTempContent.unit=o)},null,512),[[m,s.newTempContent.unit]])])]),e("div",ce,[e("div",me,[pe,c(e("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":t[7]||(t[7]=o=>s.newTempContent.origin_price=o)},null,512),[[m,s.newTempContent.origin_price,void 0,{number:!0}]])]),e("div",ue,[he,c(e("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":t[8]||(t[8]=o=>s.newTempContent.price=o)},null,512),[[m,s.newTempContent.price,void 0,{number:!0}]])])]),_e,e("div",ge,[fe,c(e("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":t[9]||(t[9]=o=>s.newTempContent.description=o)},`\r
                `,512),[[m,s.newTempContent.description]])]),e("div",be,[we,c(e("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":t[10]||(t[10]=o=>s.newTempContent.content=o)},`\r
                `,512),[[m,s.newTempContent.content]])]),e("div",Ce,[e("div",Pe,[c(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[11]||(t[11]=o=>s.newTempContent.is_enabled=o)},null,512),[[A,s.newTempContent.is_enabled]]),ve])])])])]),e("div",Te,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[12]||(t[12]=(...o)=>n.closeModal&&n.closeModal(...o))}," 取消 "),e("button",{type:"button",class:"btn btn-primary",onClick:t[13]||(t[13]=(...o)=>n.updateProduct&&n.updateProduct(...o))}," 確認 ")])])])],512)}const Ue=P(x,[["render",ye]]),{VITE_APP_URL:ke,VITE_APP_PATH:Me}={VITE_APP_PATH:"ken100",VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",BASE_URL:"/hexschool-vue-week6",MODE:"production",DEV:!1,PROD:!0},Ve={props:{tempContent:{type:Object,default(){}}},methods:{deleteItem(l){this.$http.delete(`${ke}/api/${Me}/admin/product/${l}`).then(t=>{this.$emit("update-data"),this.closeModal(),alert(t.data.message)}).catch(t=>{alert(`${t.response.data.message}`)})},closeModal(){this.modal.hide()},openModal(){this.modal.show()}},mounted(){this.modal=new T(this.$refs.modal,{backdrop:"static",keyboard:!1})}},Ae={ref:"modal",class:"modal fade"},xe={class:"modal-dialog"},Ee={class:"modal-content border-0"},Le={class:"modal-header bg-danger text-white"},Ie=e("h5",{id:"delProductModalLabel",class:"modal-title"},[e("span",null,"刪除產品")],-1),De={class:"modal-body"},$e={class:"text-danger"},Ne={class:"modal-footer"};function Re(l,t,a,p,s,n){return i(),d("div",Ae,[e("div",xe,[e("div",Ee,[e("div",Le,[Ie,e("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=(...o)=>n.closeModal&&n.closeModal(...o))})]),e("div",De,[v(" 是否刪除 "),e("strong",$e,h(a.tempContent.title),1),v(" 商品(刪除後將無法恢復)。 ")]),e("div",Ne,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[1]||(t[1]=(...o)=>n.closeModal&&n.closeModal(...o))}," 取消 "),e("button",{type:"button",class:"btn btn-danger",onClick:t[2]||(t[2]=o=>n.deleteItem(a.tempContent.id))}," 確認刪除 ")])])])],512)}const Oe=P(Ve,[["render",Re]]),{VITE_APP_URL:Fe,VITE_APP_PATH:He}={VITE_APP_PATH:"ken100",VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",BASE_URL:"/hexschool-vue-week6",MODE:"production",DEV:!1,PROD:!0},Se={data(){return{isLoading:!1,products:[],temp:{imagesUrl:[]},pagination:{},isNew:!1,productId:""}},components:{Pagination:M,AdminProductModal:Ue,AdminDeleteModal:Oe},methods:{getProducts(l=1){this.$http.get(`${Fe}/api/${He}/admin/products/?page=${l}`).then(t=>{this.products=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1}).catch(t=>{alert(`${t.response.data.message}`),this.isLoading=!1})},openModal(l,t){l==="new"?(this.isNew=!0,this.$refs.productModal.openModal(),this.temp={imagesUrl:[]}):l==="edit"?(this.isNew=!1,this.temp=JSON.parse(JSON.stringify(t)),this.$refs.productModal.openModal()):l==="delete"&&(this.temp=JSON.parse(JSON.stringify(t)),this.$refs.deleteProductModal.openModal())}},mounted(){this.isLoading=!0,this.getProducts()}},Be=e("h1",null,"商品列表",-1),je={class:"text-end mt-4"},Je={class:"table mt-4"},qe=e("thead",null,[e("tr",null,[e("th",{width:"120"},"分類"),e("th",null,"產品名稱"),e("th",{width:"120"},"原價"),e("th",{width:"120"},"售價"),e("th",{width:"100"},"是否啟用"),e("th",{width:"120"},"編輯")])],-1),ze={class:"text-end"},Ge={class:"text-end"},Ke={key:0,class:"text-success"},Qe={key:1,class:"text-danger"},We={class:"btn-group"},Xe=["onClick"],Ye=["onClick"];function Ze(l,t,a,p,s,n){const o=g("AdminProductModal"),u=g("AdminDeleteModal"),_=g("Pagination"),U=g("VueLoading");return i(),d(C,null,[Be,e("div",je,[e("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=r=>n.openModal("new"))}," 建立新的產品 ")]),e("table",Je,[qe,e("tbody",null,[(i(!0),d(C,null,y(s.products,r=>(i(),d("tr",{key:r.id},[e("td",null,h(r.category),1),e("td",null,h(r.title),1),e("td",ze,h(r.origin_price),1),e("td",Ge,h(r.price),1),e("td",null,[r.is_enabled?(i(),d("span",Ke,"啟用")):(i(),d("span",Qe,"未啟用"))]),e("td",null,[e("div",We,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:k=>n.openModal("edit",r)}," 編輯 ",8,Xe),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:k=>n.openModal("delete",r)}," 刪除 ",8,Ye)])])]))),128))])]),f(o,{ref:"productModal","temp-content":s.temp,"is-new":s.isNew,onUpdateData:n.getProducts},null,8,["temp-content","is-new","onUpdateData"]),f(u,{ref:"deleteProductModal","temp-content":s.temp,onUpdateData:n.getProducts},null,8,["temp-content","onUpdateData"]),f(_,{pages:s.pagination,onChangePage:n.getProducts,"get-products":n.getProducts},null,8,["pages","onChangePage","get-products"]),f(U,{active:s.isLoading,"onUpdate:active":t[1]||(t[1]=r=>s.isLoading=r)},null,8,["active"])],64)}const ot=P(Se,[["render",Ze]]);export{ot as default};
