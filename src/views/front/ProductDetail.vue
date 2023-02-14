<template>
  <h1>{{ productItem.title }}</h1>
  <div class="row">
    <div class="col-sm-6">
      <img
        v-if="productItem.imageUrl"
        class="img-fluid"
        :src="productItem.imageUrl"
        alt=""
      />
      <img
        v-else
        class="img-fluid"
        src="https://placehold.co/640x480?text=No+Photo"
        alt=""
      />
    </div>
    <div class="col-sm-6">
      <span class="badge bg-primary rounded-pill">{{
        productItem.category
      }}</span>
      <p>商品描述：{{ productItem.description }}</p>
      <p>商品內容：{{ productItem.content }}</p>
      <div class="h5">{{ productItem.price }} 元</div>
      <del class="h6">原價 {{ productItem.origin_price }} 元</del>
      <div class="h5">現在只要 {{ productItem.price }} 元</div>
      <div>
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            min="1"
            v-model.number="qty"
          />
          <button
            type="button"
            @click="addCart(productItem)"
            class="btn btn-primary"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
    <!-- col-sm-6 end -->
  </div>
</template>
<script>
const { VITE_APP_APIURL, VITE_APP_APIPATH } = import.meta.env;
export default {
  data() {
    return {
      productItem: {},
      qty: 1,
    };
  },
  methods: {
    getProductItem(id) {
      this.$http
        .get(`${VITE_APP_APIURL}/api/${VITE_APP_APIPATH}/product/${id}`)
        .then((res) => {
          console.log(res.data);

          this.productItem = res.data.product;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addCart(content, qty = 1) {
      console.log(content, qty);
      // 賦予讀取狀態id
      // this.loadingStatus.loadingItem = content.id;
      this.$http
        .post(`${VITE_APP_APIURL}/api/${VITE_APP_APIPATH}/cart`, {
          data: {
            product_id: content.id,
            qty,
          },
        })
        .then((res) => {
          // 將讀取狀態清空
          // this.loadingStatus.loadingItem = "";
          //解構賦值
          const {
            message,
            // 取出內層的資料
            data: { product },
          } = res.data;
          alert(`${product.title} ${message}`);
          // this.$refs.modal.closeModal();
          // this.getCartList();
        })
        .catch((err) => {
          alert(`${err.data.message}`);
        });
    },
  },
  mounted() {
    console.log(this.$route.query);
    console.log(this.$route.params);
    this.getProductItem(this.$route.params.id);
  },
};
</script>
