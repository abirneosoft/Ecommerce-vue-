<template>
  <section>
    <Slider />
    <section>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              <!-- v-for="pro of proData" :key="pro.id"  -->
              <h2 class="title text-center">Features Items</h2>
              <div class="col-sm-4" v-for="(pro, i) in proData" :key="i" :id="pro.id" :name="pro.product_name"
               :image="pro.product_images" :price="pro.price">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <!-- "`/product/${pro.id}`" -->
                    <div class="productinfo text-center">
                      <router-link :to="`/product/${pro.id}`"> <img
                        class="card-img-top"
                        :src="url + pro.product_images"
                        width="200"
                        height="150"
                        alt="Card image cap"
                        
                      /></router-link>
                     
                      <h2>{{ pro.product_name }}</h2>
                      <p>{{pro.price}}</p>
                      <p>{{pro.description}}</p>
                      <a href="#" class="btn btn-default add-to-cart" @click="addCartBtn(pro)"
                        ><i class="fa fa-shopping-cart"></i>Add to cart</a
                      >
                    </div>
                    <!-- <div class="product-overlay" >
                      <div class="overlay-content">
                        <h2></h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>Add to cart</a
                        >
                      </div>
                    </div> -->
                  </div>
                  <div class="choose">
                    <ul class="nav nav-pills nav-justified">
                      <li>
                        <a @click="postWish(pro)">
                          <i class="fa fa-plus-square"></i>Add to wishlist</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-plus-square"></i>Add to compare</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!--features_items-->

            <div class="category-tab">
              <!--category-tab-->
              <div class="col-sm-12">
                <ul class="nav nav-tabs">
                  <li class="active">
                    <a href="#tshirt" data-toggle="tab">T-Shirt</a>
                  </li>
                  <li><a href="#blazers" data-toggle="tab">Blazers</a></li>
                  <li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
                  <li><a href="#kids" data-toggle="tab">Kids</a></li>
                  <li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
                </ul>
              </div>
              <div class="tab-content">
                <div class="tab-pane fade active in" id="tshirt">
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="blazers">
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="sunglass">
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="kids">
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="poloshirt">
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--/category-tab-->

            <div class="recommended_items">
              <!--recommended_items-->
              <h2 class="title text-center">recommended items</h2>

              <div
                id="recommended-item-carousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="item active">
                    <div class="col-sm-4">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/recommend1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"
                              ><i class="fa fa-shopping-cart"></i>Add to cart</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/recommend2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"
                              ><i class="fa fa-shopping-cart"></i>Add to cart</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/recommend3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"
                              ><i class="fa fa-shopping-cart"></i>Add to cart</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="col-sm-4">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/recommend1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"
                              ><i class="fa fa-shopping-cart"></i>Add to cart</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/recommend2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"
                              ><i class="fa fa-shopping-cart"></i>Add to cart</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/recommend3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"
                              ><i class="fa fa-shopping-cart"></i>Add to cart</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>

import {product_image} from "@/common/Service";
import {userWish} from "@/common/Service";
import Slider from "./includes/Slider.vue";
import Sidebar from "./includes/Sidebar.vue";
export default {
  name: "Main",
  data() {
    return { proData: "", url: "http://localhost:8000/products/",
    carts:[],
    user_mail:localStorage.getItem("uid"),
    cartdata:{
      Id:'',
      name:'',
      price:'',
      image:''
    } ,
    badge: '0',
     quantity: '0',
     totalprice: '0'
    };
  },
  components: {
    Slider,
    Sidebar,
  },
  created() {
    product_image().then((res) => {
      console.log(res.data.pro_img);
      this.proData = res.data.pro_img;
    });
  },
  methods:{

    postWish(pro){
            let obj = {
          user_email:this.user_mail,
          product_id: pro.product_id,
          product_price: pro.price,
          product_name: pro.product_name,
          product_image: pro.product_images,
        };
        console.log(obj);
        userWish(obj)
        .then((res) => {
          if (res) {
            console.log(res.data);
            this.$swal("WISHLIST ADDED SUCCESS", "", "success");
            
          }
        })
         .catch((err) => {
          console.log("SOmething Wrong " + err);
        });

    },
   addCartBtn(pro){

     if (localStorage.getItem("mycart") != undefined) {
        let arr = JSON.parse(localStorage.getItem("mycart"));
        let obj = {
          pro_id: pro.id,
          quantity: 1,
          product_id: pro.product_id,
          price: pro.price,
          name: pro.product_name,
          image_path: pro.product_images,
        };
        const found = arr.some((item) => item.pro_id == pro.id);
        if (found) {
          alert("Product already Added to Cart");
         
         // this.$router.push("/cart");
        } else {
          arr.push(obj);
          localStorage.setItem("mycart", JSON.stringify(arr));
          this.$store.dispatch("addToCart", arr);
          alert("Product Added to Cart");
         // this.$router.push("/cart");
        }
      } else {
        let arr = [];
        let obj = {
          pro_id: pro.id,
          quantity: 1,
          product_id: pro.product_id,
          price: pro.price,
          name: pro.product_name,
          image_path: pro.product_images,
        };
        arr.push(obj);
        localStorage.setItem("mycart", JSON.stringify(arr));
        this.$store.dispatch("addToCart", arr);
        alert("Product Added to Cart");
        this.$router.push("/cart");
      }
    },
       
  },    
  
};
</script>

<style>
</style>