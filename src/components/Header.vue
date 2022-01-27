<template>
  <header id="header">
    <!--header-->
    <div class="header_top">
      <!--header_top-->
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="contactinfo">
              <ul class="nav nav-pills">
                <li>
                  <a href="#"><i class="fa fa-phone"></i> {{conf[0].phone_no}}</a>
                </li>
                <li >
                    <a href="#"><i class="fas fa-envelope"></i>{{conf[0].admin_email}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="social-icons pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header_top-->

    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="logo pull-left">
              <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
            </div>
           
          </div>
          <div class="col-sm-8">
            <div class="shop-menu pull-right">
              <ul class="nav navbar-nav" >
                <li >
                  <router-link to="/profile" 
                    ><i class="fa fa-user" v-if="msg" ></i> Account</router-link>
                    <li><router-link to="/profile" v-if="msg" >My Profile</router-link></li>
                    <li><router-link to="/editprofile" v-if="msg">Edit Profile</router-link></li>
                    <li><router-link to="/changepass" v-if="msg">Change Password</router-link></li>
                  <li >
                  <router-link to="/wish" > Wishlist</router-link>
                </li>
              
                <li>
                  <router-link to="/checkout"
                    ><i class="fa fa-crosshairs" v-if="msg"></i> Checkout</router-link
                  >
                </li>
                <li>
                  <router-link to="/cart"
                    ><i class="fa fa-shopping-cart"></i> Cart {{numInCart}}</router-link
                  >
                </li>
                <li>
                  <router-link to="/" v-if="msg" @click.native="logout()"
                    >Logout
                  </router-link>
                  <router-link to="/login" v-if="!msg">Login </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->

    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="mainmenu pull-left">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li><router-link to="/" class="active">Home</router-link></li>
                <li class="dropdown">
                  <a href="#">Shop<i class="fa fa-angle-down"></i></a>
                  <ul role="menu" class="sub-menu">
                    <li><a href="shop.html">Products</a></li>
                    <li><a href="product-details.html">Product Details</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><router-link to="/cart">cart </router-link></li>
                    <li>
                      <router-link to="/logout" v-if="msg">Logout </router-link>
                      <router-link to="/login" v-if="!msg">Login </router-link>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Explore<i class="fa fa-angle-down"></i></a>
                  <ul role="menu" class="sub-menu">
                    <li v-for="(c, index) in cms" :key="index">
                      <router-link :to="`/cms/${c.id}`">{{c.title}}</router-link>
                    </li>
                  </ul>
                
                </li>
                <li><router-link to="/order" v-if="msg">My order </router-link></li>
                <li>
                  <router-link to="/contact">Contact Us </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="search_box pull-right">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-bottom-->
  </header>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/store";
import * as type from "../store/type";
import { getToken } from "@/common/Jwttoken";
import {cms} from '@/common/Service';
import {configure} from '@/common/Service';
import axios from "axios";
export default {
  name: "Header",
   data(){
    return{cms:[],conf:"",}
  },
  computed: mapState({
    msg: (state) => state.opt,
    inCart() { return this.$store.getters.inCart},
     numInCart() { return this.inCart.length},
      // numInCart() { return this.$store.getters.count},
  }),
  created(){
        configure().then(res=>{
        this.conf=res.data.config;
        console.log(this.conf);

     })
        .catch(error=>{
            console.log("Something Wrong "+error)
        })
  },
  methods: {
    logout() {
      const token = getToken();
      const url = "http://127.0.0.1:8000/api/logout/";
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = token;
      axios.post(url, data, config).then((res) => {
        this.$router.push("/login");
        localStorage.clear();
        store.dispatch({
          type: type.Opt,
          id: null,
          userId: null,
        });
        console.log(res.data.message);
      });
    },
    show() {
      if ("id_token" in localStorage) {
        store.dispatch({
          type: type.Opt,
          id: getToken(),
          userId: localStorage.getItem("uid"),
        });
      }
    },
     showcms() {
      cms()
        .then((res) => {
          this.cms = res.data.cms;
          console.log(this.cms);
        })
        .catch((error) => {
          console.log("Something Wrong " + error);
        });
    },
   
    
    
  },
  mounted() {
    this.show();
     this.showcms(); 
       
     
       
  },
  
   
  
  
     


      
  
};
</script>

<style>
</style>