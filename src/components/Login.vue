<template>
  <div>
    <section id="form">
      <!--form-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-sm-offset-1">
            <div class="login-form">
              <!--login form-->
              <h2>Login to your account</h2>
              <form @submit.prevent="postLogin()">
                <input
                  type="email"
                  placeholder="Email Address" required
                  v-model="emailLogin"
                />
                <input
                  type="password"
                  placeholder="Email Password" required
                  v-model="passwordLogin"
                />
                <span>
                  <input type="checkbox" class="checkbox" />
                  Keep me signed in
                </span>
                <button type="submit" class="btn btn-default">Login</button>
              </form>
            </div>
            <!--/login form-->
          </div>
          <div class="col-sm-1">
            <h2 class="or">OR</h2>
          </div>
          <div class="col-sm-4">
            <div class="signup-form">
              <!--sign up form-->
              <h2>New User Signup!</h2>
              <form @submit.prevent="postRegister()">
                <input type="text" placeholder="first name" v-model="fname" required />
                <input type="text" placeholder="last name" v-model="lname" required />
                <input
                  type="email"
                  placeholder="Email Address"
                  v-model="emailReg" required
                />
                <input
                  type="password"
                  placeholder="Password"
                  v-model="passwordReg" required
                />
                <button type="submit" class="btn btn-default">Signup</button>
              </form>
            </div>
            <!--/sign up form-->
          </div>
        </div>
      </div>
    </section>
    <!--/form-->
  </div>
</template>

<script>
// import jwt_decode from "jwt-decode";
import { userLogin } from "@/common/Service";
import { userRegister } from "@/common/Service";
import { saveToken } from "@/common/Jwttoken";
import store from "../store/store";
import * as type from "../store/type";
import { mapState } from "vuex";

//import {getToken} from '@/common/JWttoken';
export default {
  computed: mapState({
    msg: (state) => state.opt,
  }),
  name: "Login",

  data() {
    return {
      emailLogin: null,
      passwordLogin: null,
      fname: null,
      lname: null,
      emailReg: null,
      passwordReg: null,
    };
  },
  methods: {
    postLogin() {
      let formData = { email: this.emailLogin, password: this.passwordLogin };
      userLogin(formData)
        .then((res) => {
          if (res) {
            //alert(res.data);
            // console.log(res.data);
            saveToken(res.data.access_token);
            localStorage.setItem("uid", res.data.email);
            console.log(res.data);
            store.dispatch({
              type: type.Opt,
              id: res.data.access_token,
               userId: res.data.email,
            });
            this.$router.push("/");
          }
          
        })
        .catch((err) => {
          console.log("SOmething Wrong " + err);
        });
    },

    postRegister() {
      let formData = {
        first_name: this.fname,
        last_name: this.lname,
        email: this.emailReg,
        password: this.passwordReg,
        status: "active",
      };
      console.log(formData);
      userRegister(formData)
        .then((res) => {
          if (res) {
            console.log(res.data);
            //alert(res.data);
              this.$swal("REGISTER SUCCESS", "", "success");
          }
        })
        .catch((err) => {
          console.log("SOmething Wrong " + err);
        });
    },
  },
};
</script>

<style>
</style>