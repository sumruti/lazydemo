<template>

  <div class="blog_listing">
       <app-navigation></app-navigation>
       <div class="loder_main"  v-if="IsLoading">
                <div class="loader_"></div>
       </div> 

       
       <!-- =================================Banner Section Start=================================   -->
      <section class="blog is-flex is-align-items-flex-end position-relative ">
         <div class="inner_container_2 ">
            <div class="columns is-vcentered">
               <!--  LEFT CONTAINER -->
               <div class="column cwhite is-two-thirds pb60">
                  <h3 class="common-heading">Lorem ipsum dolor sit amet</h3>
                  <p class="common-content font18 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>
               <!--  RIGHT CONTAINER -->
               <div class="column is-one-third postion-absolute right0">
                  <div class="has-background-white postion-sticky has-text-center p-0">
                     <img src="../assets/img/bnr.jpg" alt="" class="img-full-width" />
                     <div class="card-inner">
                        <div class="blog_fist position-relative">
                           <p class="font16 clr_gray font-600">Find, finance and free delivery. The FairSquare way.</p>
                           <p class="clr_gray font14 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                           <a href="#" class="bg-pink cwhite is-inline-block btn mt-4">Find a car</a>
                        </div>
                        <div class="blog_fist inner2 position-relative">
                           <p class="font16 clr_gray font-600">Find, finance and free delivery. The FairSquare way.</p>
                           <p class="clr_gray font14 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                           <a href="#" class="bg-pink cwhite is-inline-block btn mt-4">Find a car</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="share-fixed cwhite position-fixed has-text-centered">
            <span class="bg-pink-dark"><i class="fas fa-share-alt"></i></span>
            <p class="is-block font12 clr_gray font-600 text-share pt-2"> SHARE</p>
         </div>
      </section>
      <!-- =================================Banner Section  End=================================   -->
      <!-- =================================Manufacturer-content Section Start=================================   -->
      <div class="blog_overlay_cotanienr">
         <!--  AUTHOR SECTION -->
         <div class="autohor_section position-relative column is-two-thirds-tablet">
            <div class="is-flex is-align-items-center is-justify-content-space-between" >
               <div class="is-flex is-align-items-center position-relative">
                  <img src="../assets/img/user_img.png" alt="">
                  <span class="font12 clr_gray font-600">Author: Name Surname</span>
               </div>
               <div class="content_blog">
                  <span class="font12 clr_gray font-600">Published: 00/00/00</span>
               </div>
            </div>
         </div>
      </div>
      <section class="blog_cotnainer is-flex is-align-items-center mt-0">
         <div class="inner_container_2">
            <div class="is-vcentered fix-width">
               <div class="column">
                  <div class="pt-5">
                     <h3 class="font16 clr_gray clr_gray">Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
                     <p class="font14 clr_gray pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                     </p>
                     <p class="font14 clr_gray pt-5"> mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </p>
                     <ul class="font14 clr_gray pt-4">
                        <li>Lorem ipsum dolor sit amet </li>
                        <li>Consectetur adipiscing elit sed do eiusmod tempor</li>
                        <li> Incididunt ut labore et dolore magna aliqua</li>
                     </ul>
                     <div class="position-relative ">
                        <h1 class="clr_gray is-italic font48 relative_border">"Lorem ipsum dolor sit amet consectetur adipiscing elit"</h1>
                        <p class="font14 clr_gray pt-5"> mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <img src="../assets/img/img_golf.jpg" class="img-golf" alt="">
                        <p class="font14 clr_gray pt-5"> mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="work-progress page_blog is-flex is-align-items-center p-0">
         <div class="inner_container_2">
            <div class="columns fix-width">
               <div class="column is-full postion-relative">
                  <ul class="clr_gray is-flex-tablet has-text-centered ">
                     <!-- =================================  section  =================================   -->
                     <li class="">
                        <span class="postion-relative w-100 is-inline-block">
                           <span class="rounded border-blue">
                           <img src="../assets/img/icon1.png" class="" alt="icon1.png">
                           </span>
                           <div class="steps postion-absolute">
                              <img src="../assets/img/step1.png" alt="step1">
                           </div>
                        </span>
                        <div class="work_inner">
                           <span class="heading font16 font-600 clr_gray mt-5">Find and finance the <br> perfect car online.</span>
                        </div>
                     </li>
                     <!-- =================================  section  =================================   -->
                     <li class="">
                        <span class="postion-relative w-100 is-inline-block">
                           <span class="rounded border-pink-light">
                           <img src="../assets/img/icon2.png" class="" alt="icon1.png">
                           </span>
                           <div class="steps postion-absolute">
                              <img src="../assets/img/step2.png" alt="step2">
                           </div>
                        </span>
                        <div class="work_inner">
                           <span class="heading  font16 font-600 clr_gray  mt-5">Delivere to your door<br> free of charge.</span>
                        </div>
                     </li>
                     <!-- =================================  section  =================================   -->
                     <li class="">
                        <span class="postion-relative w-100 is-inline-block">
                        <span class="rounded border-pink-dark">
                        <img src="../assets/img/icon3.png" class="" alt="icon1.png">
                        </span>
                        </span>
                        <div class="work_inner">
                           <span class="heading font16 font-600 clr_gray  mt-5">Love it. Keep it.<br>Or return it.</span>
                        </div>
                     </li>
                  </ul>
                  <div class="has-text-centered">
                     <a href="#" class="bg-pink cwhite is-inline-block btn mt-5">Find and finance a car through FairSquare</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div class="inner_container_2">
         <div class="is-vcentered fix-width">
            <div class="right_header">
               <div class="columns is-justify-content-space-between is-align-items-center">
                  <div class="column">
                     <h3 class="font16 clr_gray sale_title pb-5">How much you can borrow with FairSquare?</h3>
                  </div>
               </div>
            </div>
            <div class="range_slider column has-background-white blog_shadow">
               <div class="slider-shadow">
                  <div class="range_slider_outer pmx-15">
                     <div class="columns range_slider_col">
                        <div class="column  border-bottom">
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
                        <div class="column  border-bottom">
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
                           <input class="range-slider__range" type="range" value="12" min="0" max="36">  
                        </div>
                        <div class="range-slider pt-5">
                           <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                              <label class="">36 months</label>
                              <label class="range-slider__value">£1,250</label>
                           </div>
                           <input class="range-slider__range" type="range" value="12" min="0" max="36">  
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
      </div>
      <!-- =================================Manufacturer-content Section  End=================================   -->
      <div class="columns is-hidden-desktop">
         <div class="column is-one-third m-auto">
            <div class="has-background-white has-text-center box-shadow p-0">
               <img src="../assets/img/bnr.jpg" alt="" class="img-full-width" />
               <div class="card-inner">
                  <div class="blog_fist position-relative">
                     <p class="font16 clr_gray font-600">Find, finance and free delivery. The FairSquare way.</p>
                     <p class="clr_gray font14 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                     <a href="#" class="bg-pink cwhite is-inline-block btn mt-4">Find a car</a>
                  </div>
                  <div class="blog_fist inner2 position-relative">
                     <p class="font16 clr_gray font-600">Find, finance and free delivery. The FairSquare way.</p>
                     <p class="clr_gray font14 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                     <a href="#" class="bg-pink cwhite is-inline-block btn mt-4">Find a car</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
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
import AppNavigation from '@/components/AppNavigation';
import FooterNav from '@/components/FooterNav';
//import VueRouter from 'vue-router';


export default {
  name: 'blog',
  components: {
        AppNavigation,
        FooterNav
    },
  data () {
    return {
      IsLoading:false,
    }
  },


  
  
}
</script>

