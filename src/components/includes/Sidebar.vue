<template>
  <div class="col-sm-3">
    <div class="left-sidebar">
      <h2>Category</h2>
      <div class="panel-group category-products" id="accordian">
        <!--category-productsr-->

        <div class="panel panel-default" v-for="cat of catData" :key="cat.id">
          <div class="panel-heading">
            <h4 class="panel-title">
              <router-link :to="`/home/${cat.id}`">{{
                cat.category_name
              }}</router-link>
            </h4>
          </div>
        </div>
      </div>
      <!--/category-products-->

      <div class="brands_products">
        <!--brands_products-->
        <h2>Brands</h2>
        <div class="brands-name">
          <ul class="nav nav-pills nav-stacked">
            <li>
              <a href="#"> <span class="pull-right">(50)</span>Acne</a>
            </li>
            <li>
              <a href="#"> <span class="pull-right">(56)</span>Grüne Erde</a>
            </li>
            <li>
              <a href="#"> <span class="pull-right">(27)</span>Albiro</a>
            </li>
            <li>
              <a href="#"> <span class="pull-right">(32)</span>Ronhill</a>
            </li>
            <li>
              <a href="#"> <span class="pull-right">(5)</span>Oddmolly</a>
            </li>
            <li>
              <a href="#"> <span class="pull-right">(9)</span>Boudestijn</a>
            </li>
            <li>
              <a href="#">
                <span class="pull-right">(4)</span>Rösch creative culture</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!--/brands_products-->

      <!-- <div class="price-range">
							<h2>Price Range</h2>
							<div class="well text-center">
								  <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2"/><br /> 
								 <b class="pull-left">$ 0</b> <b class="pull-right">$ 600</b>
							</div>
						</div> -->

      <div class="shipping text-center">
        <!--shipping-->
        <img src="images/home/shipping.jpg" alt="" />
      </div>
      <!--/shipping-->
    </div>
  </div>
</template>

<script>
import { categories } from "@/common/Service";

export default {
  name: "Sidebar",
  data() {
    return { catData: undefined, };
  },
  created() {
    categories().then((res) => {
      console.log(res.data.cat);
      this.catData = res.data.cat;
    });
  },
};
</script>

<style>
</style>