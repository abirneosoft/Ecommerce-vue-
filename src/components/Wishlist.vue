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
                
                <td></td>
              </tr>
            </thead>
            <tbody v-for="(item, i) in carts" :key="i">
              <tr>
                <td class="cart_product">
                  <a href="">
                    <img
                      :src="url + item.product_image"
                      width="100"
                      height="50"
                      alt="Card image cap"
                  /></a>
                </td>
                <td class="cart_description">
                  <h4>
                    <a href="">{{ item.product_price }}</a>
                  </h4>
                </td>
                <td>
                    
                </td>

                <td class="cart_quantity">
               
                </td>
              
                <td class="cart_delete">
                  <a class="cart_quantity_delete" @click="removeCart(item.id)"
                    ><i class="fa fa-times"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          
          </table>
        </div>
      </div>
    </section>
    <!--/#cart_items-->
  </div>
</template>

<script>
import {userWishlist} from "@/common/Service";
import {deletewishlist} from "@/common/Service";
export default {
  name: "Wishlist",
  data() {
    return { carts: undefined, url: "http://localhost:8000/products/" };
  },
  
  
  methods:{
    removeCart(id){
      deletewishlist(id).then((res) => {
      this.carts = res.data;
        console.log(res.data);
      location.reload();   

      })
    }

  
  },
 
  mounted() {
     userWishlist()
      .then((res) => {
      this.carts = res.data;
      console.log(res.data);
     

      })
       .catch((error) => {
        console.log("Something went " + error);
      });
  }
};
</script>

<style>
</style>