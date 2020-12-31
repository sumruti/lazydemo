<template>
  <div class="manufacturer">
     <!-- =================================Banner Section Start=================================   -->
        <section class="manufacturer_banner is-d-flex is-align-items-center">
            <div class="inner_container_2">
                <div class="columns is-vcentered">
                    <!--  LEFT CONTAINER -->
                    <div class="column cwhite is-two-thirds">
                        <h3 class="common-heading">DS Automobiles</h3>
                        <p class="common-content font18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <!--  RIGHT CONTAINER -->
                    <div class="column is-one-third">
                        <div class="has-background-white postion-sticky has-text-center">
                            <img src="img/ds_logo.png" alt="" />

                            <p class="font18 clr_gray pt-6">We have <strong class="clr_gray"> 37 DS Automobiles vehicles</strong> available.</p>
                            <div class="is-flex-direction-column is-flex is-align-items-center">
                                <ul class="font14">
                                    <li><i class="fas fa-check"></i> Competitive finance</li>
                                    <li><i class="fas fa-check"></i> Free delivery</li>
                                    <li><i class="fas fa-check"></i> 14-day money back</li>
                                </ul>
                            </div>
                            <div class="py-50 price_div has-text-centered">
                                <p class="font14">Your price: £21,074.25</p>
                                <h2 class="is-inline-block font-600 title-price clr-pink">£481.92 <span class="clr_gray font18 is-block has-text-right">Per Month</span></h2>

                                <a href="#" class="bg-pink cwhite is-inline-block btn margintop60">View available stock</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- =================================Banner Section  End=================================   -->

        <!-- =================================Manufacturer-content Section Start=================================   -->
        <section class="manufacturer_content is-d-flex is-align-items-center">
            <div class="inner_container_2">
                <div class="is-vcentered fix-width">
                    <div class="column">
                        <div class="pt-5">
                            <h3 class="font16 clr_gray clr_gray">About DS Automobiles</h3>
                            <p class="font14 clr_gray pt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="pt-5">
                            <h3 class="font16 clr_gray clr_gray">More long-form information</h3>
                            <p class="font14 clr_gray pt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            </p>
                            <p class="pt-4 clr_gray font14">
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                        </div>
                    </div>

                    <div class="column popular_models mt-5">
                        <h3 class="font16 clr_gray clr_gray">Popular models</h3>

                        <table width="100%" class="clr_gray font16">
                            <tbody>
                                <tr>
                                    <td>DS Automobiles Ds 3 Crossback vehicles</td>
                                    <td>More info</td>
                                    <td>View stock</td>
                                </tr>
                                <tr>
                                    <td>DS Automobiles Ds 3 Crossback vehicles</td>
                                    <td>More info</td>
                                    <td>View stock</td>
                                </tr>
                                <tr>
                                    <td>DS Automobiles Ds 3 Crossback vehicles</td>
                                    <td>More info</td>
                                    <td>View stock</td>
                                </tr>
                                <tr>
                                    <td>DS Automobiles Ds 3 Crossback vehicles</td>
                                    <td>More info</td>
                                    <td>View stock</td>
                                </tr>
                                <tr>
                                    <td>DS Automobiles Ds 3 Crossback vehicles</td>
                                    <td>More info</td>
                                    <td>View stock</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="image_gallery">
                            <h3 class="font16 clr_gray">Photos</h3>
                             
                            <div class="center slider" id="img_gallery">
                                <VueSlickCarousel  v-bind="settings" :arrows="true">
                                <div>
                                    <img src="../assets/img/car_1.jpg" />
                                </div>
                                <div>
                                    <img src="../assets/img/car_1.jpg" />
                                </div>
                                <div>
                                    <img src="../assets/img/car_1.jpg" />
                                </div>
                                <div>
                                    <img src="../assets/img/car_1.jpg" />
                                </div>
                                <div>
                                    <img src="../assets/img/car_1.jpg" />
                                </div>
                                <div>
                                    <img src="../assets/img/car_1.jpg" />
                                </div>
                                </VueSlickCarousel >
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="side_wrapper_container w-100 pl-0 fix-width">
                    <div class="right_header">
                        <div class="columns is-justify-content-space-between is-align-items-center">
                            <div class="column">
                                <h3 class="font16 clr_gray sale_title">Current DS Automobiles vehicles for sale</h3>
                            </div>
                        </div>
                    </div>

                    <div class="center slider" id="img_gallery2">
                     <VueSlickCarousel  v-bind="settings1">
                        <div>
                            <div class="card">
                                <div class="postion-relative">
                                    <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                                    <h5 class="cwhite postion-absolute overlay-text font14 font-weight-bold">2 Year Warranty</h5>
                                </div>
                                <div class="card_content">
                                    <div class="is-flex is-align-items-center is-justify-content-space-between">
                                        <h5 class="menu-label font-weight-bold font16 has-text-left postion-relative mb-0 is-capitalized">Toyota C-HR</h5>
                                        <img src="../assets/img/icon5.png" alt="heart" />
                                    </div>
                                    <p class="font14 clr_gray pt-1 pb-1">
                                        1.8 Hybrid Dynamic 5dr CVT<br />
                                        Your price: £21,074.25
                                    </p>
                                    <h2 class="is-inline-block pt-4">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                                </div>
                                <div class="card-footer">
                                    <ul class="is-flex is-justify-content-space-between w-100">
                                        <li class="font12 font-weight-bold">12.9k</li>
                                        <li class="font12 font-weight-bold">2018</li>
                                        <li class="font12 font-weight-bold">Hybrid</li>
                                        <li class="font12 font-weight-bold">1.8L</li>
                                        <li class="font12 font-weight-bold">Automatic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card">
                                <div class="postion-relative">
                                    <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                                    <h5 class="cwhite postion-absolute overlay-text font14 font-weight-bold">2 Year Warranty</h5>
                                </div>
                                <div class="card_content">
                                    <div class="is-flex is-align-items-center is-justify-content-space-between">
                                        <h5 class="menu-label font-weight-bold font16 has-text-left postion-relative mb-0 is-capitalized">Toyota C-HR</h5>
                                        <img src="../assets/img/icon5.png" alt="heart" />
                                    </div>
                                    <p class="font14 clr_gray pt-1 pb-1">
                                        1.8 Hybrid Dynamic 5dr CVT<br />
                                        Your price: £21,074.25
                                    </p>
                                    <h2 class="is-inline-block pt-4">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                                </div>
                                <div class="card-footer">
                                    <ul class="is-flex is-justify-content-space-between w-100">
                                        <li class="font12 font-weight-bold">12.9k</li>
                                        <li class="font12 font-weight-bold">2018</li>
                                        <li class="font12 font-weight-bold">Hybrid</li>
                                        <li class="font12 font-weight-bold">1.8L</li>
                                        <li class="font12 font-weight-bold">Automatic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card">
                                <div class="postion-relative">
                                    <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                                    <h5 class="cwhite postion-absolute overlay-text font14 font-weight-bold">2 Year Warranty</h5>
                                </div>
                                <div class="card_content">
                                    <div class="is-flex is-align-items-center is-justify-content-space-between">
                                        <h5 class="menu-label font-weight-bold font16 has-text-left postion-relative mb-0 is-capitalized">Toyota C-HR</h5>
                                        <img src="../assets/img/icon5.png" alt="heart" />
                                    </div>
                                    <p class="font14 clr_gray pt-1 pb-1">
                                        1.8 Hybrid Dynamic 5dr CVT<br />
                                        Your price: £21,074.25
                                    </p>
                                    <h2 class="is-inline-block pt-4">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                                </div>
                                <div class="card-footer">
                                    <ul class="is-flex is-justify-content-space-between w-100">
                                        <li class="font12 font-weight-bold">12.9k</li>
                                        <li class="font12 font-weight-bold">2018</li>
                                        <li class="font12 font-weight-bold">Hybrid</li>
                                        <li class="font12 font-weight-bold">1.8L</li>
                                        <li class="font12 font-weight-bold">Automatic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card">
                                <div class="postion-relative">
                                    <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                                    <h5 class="cwhite postion-absolute overlay-text font14 font-weight-bold">2 Year Warranty</h5>
                                </div>
                                <div class="card_content">
                                    <div class="is-flex is-align-items-center is-justify-content-space-between">
                                        <h5 class="menu-label font-weight-bold font16 has-text-left postion-relative mb-0 is-capitalized">Toyota C-HR</h5>
                                        <img src="../assets/img/icon5.png" alt="heart" />
                                    </div>
                                    <p class="font14 clr_gray pt-1 pb-1">
                                        1.8 Hybrid Dynamic 5dr CVT<br />
                                        Your price: £21,074.25
                                    </p>
                                    <h2 class="is-inline-block pt-4">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                                </div>
                                <div class="card-footer">
                                    <ul class="is-flex is-justify-content-space-between w-100">
                                        <li class="font12 font-weight-bold">12.9k</li>
                                        <li class="font12 font-weight-bold">2018</li>
                                        <li class="font12 font-weight-bold">Hybrid</li>
                                        <li class="font12 font-weight-bold">1.8L</li>
                                        <li class="font12 font-weight-bold">Automatic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       </VueSlickCarousel>  
                    </div>

                    <div class="right_header">
                        <div class="columns is-justify-content-space-between is-align-items-center">
                            <div class="column">
                                <h3 class="font16 clr_gray sale_title pb-5">How much you can borrow with FairSquare?</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fix-width range_slider column has-background-white">
                    <div class="slider-shadow">
                    <div class="range_slider_outer">
                        <div class="columns range_slider_col">
                            <div class="column">
                                <div class="control">
                                    <div class="select w-100">
                                        <label>Quote me based on</label>
                                        <select class="w-100 font14 clr_gray p-0">
                                            <option>Monthly payments</option>
                                            <option>Monthly payments</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="control">
                                    <div class="select w-100">
                                        <label>My credit rating is</label>
                                        <select class="w-100 font14 clr_gray p-0">
                                            <option>Monthly payments</option>
                                            <option>Monthly payments</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="rang_sec">
                            <div class="range_value_slider pt-5">
                                <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                                    <label class="">Credit term</label>
                                    <label class="">36 months</label>
                                </div>
                                <input class="slider is-fullwidth w-100" step="1" min="0" max="100" value="50" type="range" />
                            </div>
                            <div class="range_value_slider pt-5">
                                <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                                    <label class="">36 months</label>
                                    <label class="">£1,250</label>
                                </div>
                                <input class="slider is-fullwidth w-100" step="1" min="0" max="100" value="50" type="range" />
                            </div>
                        </div>
                    </div>
                </div>

                    <div class="range_slide_content has-text-centered">
                        <p class="clr_gray font16 font-600">You could borrow up to</p>
                        <h1 class="clr-pink">£41,239</h1>
                        <p class="font12 clr_gray">Based on Excellent credit rating you can borrow approximately £41,239. Representative APR: 5.91%, Fixed Rate(Per Annum): 3.04%, Cost of Credit: £3,761, Total Repayable: £45,000.</p>
                        <a href="#" class="bg-pink cwhite is-inline-block btn margintop60">View available stock</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- =================================Manufacturer-content Section  End=================================   -->

        <section class="section_4 mt-0">
            <div class="columns cl_col_2">
                <div class="column is-full">
                    <p class="clr_gray font12">
                        <strong> Legal disclaimer:</strong> Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix
                        verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis reprehendunt. Cibo delectus eu ius, usu veri putent at.His tamquam evertitur appellantur an, eam omnis blandit officiis id, eu nostro tacimates
                        pri. Te vim denique fabellas deseruisse, ad est mandamus neglegentur, vim adhuc consequat an. At putent commodo patrioque pro, nihil reprimique et pro. Et sea graece consulatu conclusionemque. Doctus iudicabit ex
                        eam.
                    </p>

                </div>
            </div>
        </section>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'manufacturer',
    components: { VueSlickCarousel },
    data: () => ({
				settings: {
					"dots": true,
					"slidesToShow": 3,
					"slidesToScroll": 1
            },
            settings1: {
					"dots": true,
					"slidesToShow": 2,
					"slidesToScroll": 1
				}
			}),
  }
</script> 

