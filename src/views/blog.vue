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
                                 <select
                                       class="w-100 font14 clr_gray p-0"
                                          v-model="make_"
                                          @change="getMakeFilter($event)"
                                          >
                                          <option value="">Choose a make</option>
                                          <option
                                             v-for="(option, index) in filters_stocks.makes"
                                             :value="option"
                                             :key="index"
                                          >
                                             {{ option }}
                                          </option>
                                       </select>
                              </div>
                           </div>
                        </div>
                        <div class="column  border-bottom">
                           <div class="control">
                              <div class="select w-100">
                                 <label>My credit rating is</label>
                                 <select
                                       class="w-100 font14 clr_gray p-0"
                                          v-model="rating_"
                                          @change="getRatingFilter($event)"
                                          >
                                          <option value="">Choose a rating</option>
                                          <option
                                             v-for="(option, name) in filters_finance.credit_rating"
                                             :value="name"
                                             :key="name"
                                          >
                                             {{ option }}
                                          </option>
                                       </select>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="rang_sec">
                        <div class="range-slider pt-5">
                              <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                                 <label class="">Credit term</label>
                                 <label class="range-slider__value">{{term_}} months</label>
                              </div>

                                       <input
                                             class="range-slider__range"
                                             v-model="term_"
                                             type="range"
                                             min="1"
                                             max="60"
                                             step="1"
                                             @change="changeTerm()"
                                       />
                           </div>
                           <!-- =================================  section  =================================   -->
                           <div class="range-slider pt-5">
                                 <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                                    <label class="">Deposit</label>
                                    <label class="range-slider__value">£{{deposit_}}</label>
                                 </div>

                                 <input
                                    class="range-slider__range"
                                    v-model="deposit_"
                                    type="range"
                                    min="1"
                                    max="60000"
                                    step="1"
                                    @change="changeDeposit()"
                                 />
                           </div>
                        </div>
                  </div>
               </div>
               <div class="range_slide_content has-text-centered">
                     <p class="clr_gray font16 font-600">You could borrow up to</p>
                     <h1 class="clr-pink">£{{finance_res.loan_amount}}</h1>
                     <p class="font12 clr_gray">
                        Based on <span style="text-transform: capitalize;">{{rating_}}</span> credit rating you can borrow approximately £{{finance_res.loan_amount}}. Representative APR: : {{finance_res.apr}}%, Fixed Rate(Per Annum):  {{finance_res.flat_rate}}%, Cost of Credit: £{{finance_res.total_cost}}, Total Repayable: £{{finance_res.total_payable}}.
                     </p>
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
import { HTTP } from "../http-common";
import AppNavigation from "@/components/AppNavigation";
import FooterNav from "@/components/FooterNav";
import "vue-toast-notification/dist/theme-sugar.css";
import Vue from "vue";
import VueToast from "vue-toast-notification";


Vue.use(VueToast);

export default {
  name: "finance-calculater",
  components: {
    AppNavigation,
    FooterNav,
  },
  data() {
    return {
      filters_finance: [],
      filters_stocks:[],
      rating_:'fair',
      make_:'',
      term_:'60',
      deposit_:'2000',
      finance_res:[],
      IsLoading:true
    } 
  },

  methods: {


    GetFiltersettings() {
      HTTP.get("api/v2/app/settings").then((response) => {
        console.log(response.data.fields.stocks.makes);
        if (response.status == 200) {
          this.filters_finance= response.data.fields.finance;
          this.filters_stocks =  response.data.fields.stocks;
          this.IsLoading = false
        } else {
          this.IsLoading = false;
        }

        // commit('SET_CARS', response.data)
      });
    },

    getRatingFilter(e){
           this.rating_ = e.target.value;
           this.GetCarMonthlyPayment()
    },

    getMakeFilter(e){
          this.make_ = e.target.value;
          
    },

    changeTerm(){
          this.GetCarMonthlyPayment()
    },

    changeDeposit(){
        this.GetCarMonthlyPayment()
    },

   GetCarMonthlyPayment() {

      var postData = {
        monthly_budget: this.deposit_,
        loan_term: this.term_,
        self_rating: this.rating_
      };

      HTTP.post("/api/v2/finance/get-estimate", postData)
        .then((response) => {
          if (response.status == 200) {
             this.finance_res = response.data;
             this.IsLoading = false
          } else {
            this.IsLoading = false;
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 422) {
            if (err.response.data.errors) {
              console.log(
                "First name errors: " + err.response.data.errors.join(",")
              );
              Vue.$toast.open({
                message: err.response.data.errors.join(","),
                type: "error",
                // all of other options may go here
              });
            }

            // and so on
          }
        });
    },


    applyFill(slider) {
      // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
      const percentage =
        (100 * (slider.value - slider.min)) / (slider.max - slider.min);

      const settings = {
        fill: "#FF23B7",
        background: "#d7dcdf",
      };

      // now we'll create a linear gradient that separates at the above point
      // Our background color will change here
      const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${
        settings.background
      } ${percentage + 0.1}%)`;
      slider.style.background = bg;
    },
  },

  mounted() {
   
    this.GetFiltersettings();
    this.GetCarMonthlyPayment();

    const sliders = document.querySelectorAll(".range-slider");

    // Iterate through that list of sliders
    // ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
    Array.prototype.forEach.call(sliders, (slider) => {
      // Look inside our slider for our input add an event listener
      //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
      slider.querySelector("input").addEventListener("input", (event) => {
        // 1. apply our value to the span
        //slider.querySelector('.range-slider__value').innerHTML = event.target.value;
        // 2. apply our fill to the input
        this.applyFill(event.target);
      });
      // Don't wait for the listener, apply it now!
      this.applyFill(slider.querySelector("input"));
    });
  },
};
</script>

