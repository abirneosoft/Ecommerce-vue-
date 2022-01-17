<template>
  <section id="slider">
    <!--slider-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div id="slider-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
							<li data-target="#slider-carousel" data-slide-to="1"></li>
							<li data-target="#slider-carousel" data-slide-to="2"></li>
            </ol>
            
            
            <div class="carousel-inner">
              <div class="item active">
                <div class="col-sm-6" >
                  <h1><span>E</span>-SHOPPER</h1>
                  <h2>100% Responsive Design</h2>
                  
                  <button type="button" class="btn btn-default get">
                    Get it now
                  </button>
                </div>
                <div class="col-sm-6">
                  <img :src="url + banner[0].banner_image"
                        width="200"
                        height="200"
                        alt="Card image cap"
                      />
              
                </div> 
              </div>
              <div class="item" v-for="(ban, i) in banner.slice(1)" :key="i">
								<div class="col-sm-6" >
									<h1><span>E</span>{{ban.title}}</h1>
									<h2>100% Responsive Design</h2>
									<p>{{ban.description}} </p>
									<button type="button" class="btn btn-default get">Get it now</button>
								</div>
								<div class="col-sm-6">
									<img src="images/home/girl2.jpg" class="girl img-responsive" alt="" />
									<img src="images/home/pricing.png"  class="pricing" alt="" />
								</div>
							</div>
             
            </div> 
          </div>
          <a
            href="#slider-carousel"
            class="left control-carousel hidden-xs"
            data-slide="prev"
          >
            <i class="fa fa-angle-left"></i>
          </a>
          <a
            href="#slider-carousel"
            class="right control-carousel hidden-xs"
            data-slide="next"
          >
            <i class="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


import { banner } from "@/common/Service";



export default {
  name: "Slider",
  data() {
    return { banner: "", url: "http://127.0.0.1:8000/uploads/" };
  },
  created() {
    banner().then((res) => {
      console.log(res.data.ban);
      this.banner = res.data.ban;
    });
  },
};
</script>

<style>
</style>