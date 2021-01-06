<template>

  <div class="blog_listing">
       <app-navigation></app-navigation>
       <div class="loder_main"  v-if="IsLoading">
                <div class="loader_"></div>
       </div> 

         <section class="finance_header is-flex is-align-items-center">
            <div class="columns ">
                <div class="column is-full">
                    <h1 class="cwhite">Finance calculator</h1>
                </div>
            </div>
        </section>

       

        <!-- =================================Banner Section  End=================================   -->

        <section class="blog_cotnainer is-flex is-align-items-center mt-0 fin_shadow position-relative">
            <div class="columns">
                <div class="is-vcentered fix-width finance_tab column two-thirds-tablet">
                    
                        <div class="finance_content_wrapper">
                            <h3 class="common-heading clr_gray">How much can you borrow?</h3>
                            <p class="font18 clr_gray pt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            </p>
                            <p class="font14 clr_gray pt-4">
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt
                            </p>
                        </div>
                        <div class="finance_content_wrapper">
                            <h3 class="common-heading clr_gray">Try our finance calculator</h3>
                            <p class="font14 clr_gray pt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            </p>
                            <p class="font14 clr_gray pt-4">
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt
                            </p>
                        </div>
                        <div class="inner_container_2 finance_range">
                            <div class="is-vcentered ">
                                <div class=" range_slider column has-background-white">
                                    <div class="slider-shadow">
                                        <div class="range_slider_outer pmx-15">
                                            <div class="columns range_slider_col">
                                                <div class="column">
                                                    <div class="control">
                                                        <div class="select w-100">
                                                            <label>Quote me based on</label>
                                                            <select class="w-100 font14 clr_gray p-0">
                                                                <option>Choose a make</option>
                                                                <option>Choose a make</option>
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
                                                <div class="range-slider pt-5">
                                                    <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                                                        <label class="">Credit term</label>
                                                        <label class="range-slider__value">36 months</label>
                                                    </div>

                                                    <input class="range-slider__range" type="range" value="100" min="0" max="1000" />
                                                </div>
                                                <!-- =================================  section  =================================   -->
                                                <div class="range-slider pt-5">
                                                    <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                                                        <label class="">36 months</label>
                                                        <label class="range-slider__value">£1,250</label>
                                                    </div>

                                                    <input class="range-slider__range" type="range" value="1000" min="0" max="15000" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="range_slide_content has-text-centered">
                                        <p class="clr_gray font16 font-600">You could borrow up to</p>
                                        <h1 class="clr-pink">£41,239</h1>
                                        <p class="font12 clr_gray">
                                            Based on Excellent credit rating you can borrow approximately £41,239. Representative APR: 5.91%, Fixed Rate(Per Annum): 3.04%, Cost of Credit: £3,761, Total Repayable: £45,000.
                                        </p>
                                        <a href="#" class="bg-pink cwhite is-inline-block btn margintop60">View available stock</a>
                                    </div>
                                </div>
                            </div>
                            <div class="finance_content_wrapper">
                                <h3 class="clr_gray font16 font-600">Long-form SEO content</h3>
                                <p class="font14 clr_gray pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                </p>
                                <p class="font14 clr_gray pt-4">
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                </p>
                                <p class="font14 clr_gray pt-4">
                                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                 <div class="column is-one-third">
                   <div class="fin_right position-absolute">
                        <div class="has-background-white postion-sticky has-text-center p-0">
                            <div class="card-inner">
                                <div class="finance_header has-text-centered is-flex is-align-items-center is-justify-content-center">
                                    <img src="../assets/img/logo_ftr.svg" alt="" class="img-full-width">
                                </div>
                                <div class="blog_fist position-relative">
                                    <!-- =================================  section  =================================   -->
                                    <div class="control">
                                        <div class="select w-100">
                                            <select class="w-100 font14 clr_gray p-0">
                                                <option>Monthly payments</option>
                                                <option>Monthly payments</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- =================================  section  =================================   -->
                                    <div class="control">
                                        <div class="select w-100">
                                            <select class="w-100 font14 clr_gray p-0">
                                                <option>Monthly payments</option>
                                                <option>Monthly payments</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- =================================  section  =================================   -->
                                    <div class="control">
                                        <div class="select w-100">
                                            <select class="w-100 font14 clr_gray p-0">
                                                <option>Monthly payments</option>
                                                <option>Monthly payments</option>
                                            </select>
                                        </div>
                                    </div>
                                    <a href="#" class="bg-pink-dark cwhite is-inline-block w-100 margintop60 btn has-text-centered">Search</a>

                                </div>

                           
                            <ul class="font16  font-600 fnlisting ">
                                        <li><a href="#" class="clr_gray">How it works</a> </li>
                                       <li><a href="#" class="clr_gray">Help and advice</a></li>
                                       <li><a href="#" class="clr_gray">Finance Calculator</a></li>
                                    </ul>
                                     </div>

                        </div>

                        
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
 
        <FooterNav/>
  </div>
</template>

<script>
//import {HTTP} from '../http-common'
import AppNavigation from "@/components/AppNavigation";
import FooterNav from "@/components/FooterNav";
//import VueRouter from 'vue-router';

export default {
  name: "finance-calculater",
  components: {
    AppNavigation,
    FooterNav,
  },
  data() {
    return {
      IsLoading: false,
    };
  },
};
</script>

