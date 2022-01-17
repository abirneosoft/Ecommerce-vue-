<template>
  <div>
    <section id="cart_items">
      <div class="container">
        <!--/checkout-options-->

        <div class="register-req">
          <p>
            Please use Register And Checkout to easily get access to your order
            history, or use Checkout as Guest
          </p>
        </div>
        <!--/register-req-->

        <div class="shopper-informations">
          <div class="row">
            <div class="col-sm-3">
              <div class="shopper-info">
                <p>Billing Information</p>
                <form>
                  <input
                    type="text"
                    placeholder="First Name *"
                    v-model="fname"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    v-model="lname"
                  />
                </form>
              </div>
            </div>
            <div class="col-sm-5 clearfix">
              <div class="bill-to">
                <p>Billing</p>
                <div class="form-one">
                  <form>
                    <input
                      type="text"
                      placeholder="Mobile Phone"
                      v-model="phone"
                    />
                  </form>
                </div>

                <div class="form-two">
                  <form>
                    <input
                      type="text"
                      placeholder="Address 1 *"
                      v-model="address1"
                    />
                    <input
                      type="text"
                      placeholder="Address 2"
                      v-model="address2"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="order-message">
                <p>Shipping Order</p>
                <textarea
                  name="message"
                  placeholder="Notes about your order, Special Notes for Delivery"
                  rows="16"
                ></textarea>
                <label
                  ><input type="checkbox" /> Shipping to bill address</label
                >
              </div>
            </div>
          </div>
        </div>

        <div class="table-responsive cart_info"></div>
        <div class="payment-options"></div>
        <div class="review-payment">
          <h2>Review & Payment</h2>
        </div>

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
                    <a>{{ item.price }}</a>
                  </h4>
                </td>

                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <a>{{ item.quantity }}</a>
                  </div>
                </td>
                <td class="cart_total">
                  <span>{{
                    parseInt(item.quantity) * parseInt(item.price)
                  }}</span>

                  <!-- <p class="cart_total_price">{{ total }}</p> -->
                </td>
              </tr>

              <tr class="shipping-cost mx-auto"></tr>
            </tbody>
            <tr>
              <td>
                <input type="text" v-model="code" />
                <button type="submit" @click="applyCoupon()">
                  Apply coupon
                </button>
              </td>
            </tr>
            <span>
              <tr>
                <td class="text-primary">Discount</td>
                <td>{{discount}}</td>
              </tr>
              <tr>
                <td class="text-primary">Total</td>
                <td>{{ total }}</td>
              </tr>
            </span>
            <span
              class="d-flex align-items-end flex-column"
              style="height: 200px"
            >
              <a class="btn btn-primary" @click="orderout()">Continue</a>
            </span>
          </table>
        </div>
      </div>
    </section>
    <!--/#cart_items-->
  </div>
</template>

<script>
import { userDetail } from "@/common/Service";
import { orderDetail } from "@/common/Service";
import { coupons } from "@/common/Service";

export default {
  name: "Checkout",
  data() {
    return {
      email: localStorage.getItem("uid"),
      carts: [],
      total:0,
      discount:0,
      url: "http://localhost:8000/products/",
      cartdata: {
        price: "",
        quantity: "",
        product_id: "",
        coupons: "",
      },
    };
  },

  created() {
    this.viewCart();
    this.check();
  },
  computed: {
   
   
  },

  methods: {
      check() {
      const items = JSON.parse(localStorage.getItem("mycart"));
      var sum = 0;
      items.forEach((item) => {
        sum = sum + item.price * item.quantity;
      });
      return this.total=sum;
    },
    viewCart() {
      if (localStorage.getItem("mycart")) {
        this.carts = JSON.parse(localStorage.getItem("mycart"));
        console.log(this.carts);
      }
    },
    applyCoupon(){
      
      coupons(this.code).then((res)=>{
        console.log(res.data);
       if(res.data){
          this.details = res.data.coupon;
          console.log(this.details)
            if(this.details.type=='fixed'){
              this.discount=this.details.value;
              this.total=this.total-this.details.value;
            }
            else{
           this.discount=this.total*(this.details.value/100);
             this.total=this.total-this.discount;
             }
      
        }else{
          console.log("invalid ");
        }
        })
      
    },
    orderout() {
      const items = JSON.parse(localStorage.getItem("mycart"));
      items.forEach((item) => {
        let obj = {
          user_email: this.email,
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
          total: this.total,
          coupon_id:this.details.id,
          coupon_code:this.details.code
        };
        console.log(obj);
        orderDetail(obj).then((res) => {
          if (res) {
            console.log(res.data);
          }
        });
      });

      let formData = {
        email: this.email,
        first_name: this.fname,
        last_name: this.lname,
        phone: this.phone,
        address: this.address1,
        address2: this.address2,
      };
      console.log(formData);
      userDetail(formData).then((res) => {
        if (res) {
          console.log(res.data);
        }
      });
      this.$swal("ORDER PLACE SUCCESS", "", "success");

      this.$router.push("/")
      .catch((err) => {
        console.log("SOmething Wrong " + err);
      });
    },
  },
};
</script>

<style>
.ship {
  float: right;
  margin-left: 80px;
}
</style>