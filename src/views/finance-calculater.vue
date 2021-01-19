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
                                                <div class="column">
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
                                                        <label class="range-slider__value">£{{priceFormat(deposit_)}}</label>
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
                                        <h1 class="clr-pink">£{{priceFormat(finance_res.loan_amount)}}</h1>
                                        <p class="font12 clr_gray">
                                            Based on <span style="text-transform: capitalize;">{{rating_}}</span> credit rating you can borrow approximately £{{priceFormat(finance_res.loan_amount)}}. Representative APR: : {{finance_res.apr}}%, Fixed Rate(Per Annum):  {{priceFormat(finance_res.flat_rate)}}%, Cost of Credit: £{{priceFormat(finance_res.total_cost)}}, Total Repayable: £{{priceFormat(finance_res.total_payable)}}.
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
     priceFormat(x) {
          if(x){
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          }
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

