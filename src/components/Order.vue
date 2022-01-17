<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-9 padding-right">
              <div class="product-information" >
           
               <table class="table table-dark">
  <thead>
    <tr>
      
      <th scope="col">User email</th>
      <th scope="col">Product id</th>
      <th scope="col">Price</th>
      <th scope="col">Qunatity</th>
      <th scope="col">Total</th>


    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,i) in ord " :key="i">
      
      <td>{{item.user_email}}</td>
      <td>{{item.product_id}}</td>
      <td>{{item.price}}</td>
      <td>{{item.quantity}}</td>
      <td>{{item.total}}</td>
    </tr>
  
      
     
     
  </tbody>
</table>
              
          </div>
            </div>
     
        </div>
      </div>
  </section>
</template>

<script>
import { orderDetails } from "@/common/Service.js";
export default {
  name: "Order",
  

  data(){
     return {email:localStorage.getItem('uid'),ord:undefined }
  },
  created(){
      this.order();
  },
  methods:{
    
    order(){
      orderDetails(this.email)
    .then((res) => {
          if (res){
              this.ord=res.data.order;
            console.log(res.data.order); 
          }
        })
        .catch((err) => {
          console.log("SOmething Wrong " + err);
        })

    }
    
  }
}
</script>

<style>
</style>