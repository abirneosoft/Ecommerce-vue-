<template>
  <div id="contact-page" class="container">
    <div class="bg">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="title text-center">Contact <strong>Us</strong></h2>
          <div id="gmap" class="contact-map"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="contact-form">
            <h2 class="title text-center">Get In Touch</h2>
            <div class="status alert alert-success" style="display: none"></div>
            <form @submit.prevent="postcontact()"
              
            >
              <div class="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Name" v-model="nameCon"
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  
                  placeholder="Email" v-model="emailcon"
                />
              </div>
              <div class="form-group col-md-12">
                <input
                  type="text"
                  name="subject"
                  class="form-control"
                
                  placeholder="Subject" v-model="subcon"
                />
              </div>
              <div class="form-group col-md-12">
                <textarea
                  name="message"
                  id="message"
                  
                  class="form-control"
                  rows="8"
                  placeholder="Your Message Here" v-model="messagecon"
                ></textarea>
              </div>
              <div class="form-group col-md-12">
                <input
                  type="submit"
                  name="submit"
                  class="btn btn-primary pull-right"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="contact-info">
            <h2 class="title text-center">Contact Info</h2>
            <address>
              <p>E-Shopper Inc.</p>
              <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
              <p>Newyork USA</p>
              <p>Mobile: +2346 17 38 93</p>
              <p>Fax: 1-714-252-0026</p>
              <p>Email: info@e-shopper.com</p>
            </address>
            <div class="social-networks">
              <h2 class="title text-center">Social Networking</h2>
              <ul>
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import {userContact} from '@/common/Service';

export default {
  name: "Contact",
data(){
  return {
    nameCon:null,
    emailcon:null,
    subcon:null,
    messagecon:null
  }
},
methods:{
postcontact(){
 
    let formData={name:this.nameCon,email:this.emailcon,subject:this.subcon,message:this.messagecon};
         console.log(formData);
        userContact(formData)
        .then(res=>{
            if(res){
              console.log(res.data);
            this.$swal("CONTACT ADDED SUCCESS", "", "success");
               
            }
           
        })
        .catch(err=>{
            console.log("SOmething Wrong "+err)
        })
    },
}



};
</script>

<style>
</style>