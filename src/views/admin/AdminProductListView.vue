<template>
  <!-- TODO: modal 功能待調整 -->
  <h1>商品列表</h1>
  <div class="text-end mt-4">
    <button class="btn btn-primary" @click="openModal('new')">
      建立新的產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-end">{{ item.origin_price }}</td>
        <td class="text-end">{{ item.price }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-danger" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              data-bs-target="#productModal"
              data-bs-toggle="modal"
              @click="openModal('edit', item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              data-bs-target="#delProductModal"
              data-bs-toggle="modal"
              @click="openModal('delete', item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <AdminProductModal
    ref="modal"
    :temp-content="temp"
    :open-modal="openModal"
    :id="productId"
  ></AdminProductModal>
  <Pagination
    :pages="pagination"
    @change-page="getProducts"
    :get-products="getProducts"
  ></Pagination>
</template>
<script>
const { VITE_APIURL, VITE_APIPATH } = import.meta.env;
import AdminProductModal from "@/components/admin/AdminProductModal.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  data() {
    return {
      // 初始商品資料
      products: [],
      temp: {
        imagesUrl: [],
      },
      pagination: {},
      isNew: false,
      productId: "",
      // isLoading: false,
    };
  },
  components: {
    Pagination,
    AdminProductModal,
  },
  methods: {
    // 取得目前頁碼商品資料
    getProducts(num = 1) {
      // this.isLoading = true;
      this.$http
        .get(`${VITE_APIURL}/api/${VITE_APIPATH}/admin/products/?page=${num}`)
        .then((res) => {
          // console.log("res", res);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          // this.isLoading = false;
        })
        .catch((err) => {
          // this.isLoading = false;
          // 顯示失敗資訊
          alert(err.data.message);
        });
    },
    openModal(productMethod, item) {
      if (productMethod === "new") {
        this.isNew = true;

        // productModalContainer.show();
        this.temp = { imagesUrl: [] };
      } else if (productMethod === "edit") {
        this.isNew = false;
        this.temp = JSON.parse(JSON.stringify(item));
        // productModalContainer.show();
      } else if (productMethod === "delete") {
        this.temp = JSON.parse(JSON.stringify(item));
        // delProductModalContainer.show();
      }
    },
    closeModal(target) {
      if (target === "#productModal") {
        // productModalContainer.hide();
      } else if (target === "#delProductModal") {
        // delProductModalContainer.hide();
      }
    },
  },
  mounted() {
    this.getProducts();
    console.log(this.$refs.modal);
  },
};
</script>
