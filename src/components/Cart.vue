<template>
  <div>
    <section id="cart_items">
      <div class="container">
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>

                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
                <td></td>
              </tr>
            </thead>
            <tbody v-for="(item, i) in carts" :key="i">
              <tr>
                <td class="cart_product">
                  <a href="">
                    <img
                      :src="url + item.image_path"
                      width="100"
                      height="50"
                      alt="Card image cap"
                  /></a>
                </td>
                <td class="cart_description">
                  <h4>
                    <a href="">{{ item.price }}</a>
                  </h4>
                </td>

                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <button
                      class="btn btn-success btn-sm"
                      @click="addItem(item)"
                    >
                      +
                    </button>
                    <input type="text" v-model="item.quantity" />
                    <button
                      class="btn btn-danger btn-sm"
                      @click="subItem(item)"
                    >
                      -
                    </button>
                  </div>
                </td>
                <td class="cart_total">
                  <span>{{
                    parseInt(item.quantity) * parseInt(item.price)
                  }}</span>

                  <p class="cart_total_price">{{ total }}</p>
                </td>
                <td class="cart_delete">
                  <a class="cart_quantity_delete" @click="removeCart(item)"
                    ><i class="fa fa-times"></i
                  ></a>
                </td>
              </tr>
            </tbody>
            <table class="table table-condensed total-result">
              <tr class="shipping-cost">
                <td>Shipping Cost</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{{ check }}</td>
              </tr>
            </table>
          </table>
        </div>
      </div>
    </section>
    <!--/#cart_items-->
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return { carts: undefined, url: "http://localhost:8000/products/" };
  },
  created() {
    this.viewCart();
    //  this.additem(this.carts);
  },
  computed: {
    check() {
      const items = JSON.parse(localStorage.getItem("mycart"));
      var sum = 0;
      items.forEach((item) => {
        sum = sum + item.price * item.quantity;
      });
      return sum;
    },
  },
  methods: {
    viewCart() {
      if (localStorage.getItem("mycart")) {
        this.carts = JSON.parse(localStorage.getItem("mycart"));
        console.log(this.carts);
      }
    },

    addItem(carts) {
      Object.assign(carts, {
        quantity: parseInt(carts.quantity) + 1,
      });
      localStorage.setItem("mycart", JSON.stringify(this.carts));
    },

    subItem(carts) {
      Object.assign(carts, {
        quantity: parseInt(carts.quantity) - 1,
      });
      localStorage.setItem("mycart", JSON.stringify(this.carts));
    },
    removeCart(item) {
      var del = this.carts.indexOf(item);
      this.carts.splice(del, 1);
      localStorage.setItem("mycart", JSON.stringify(this.carts));

      //  localStorage.setItem('cnt',this.carts.length)
      //       this.$store.commit('change');
      //       this.$store.commit('cnt');
    },
  },
  mounted() {
    this.carts = JSON.parse(localStorage.getItem("mycart"));

    console.log(this.carts);
  },
};
</script>

<style>
</style>