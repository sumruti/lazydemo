<template>
  <div class="application">
        <div class="loder_main"  v-if="IsLoading">
          <div class="loader_"></div>
        </div> 
    <app-navigation></app-navigation>
    <section class="home_banner">
      <div class="application_front"></div>
      <div class="overlay_box w-100 postion-absolute is-flex m-auto">
        <!--  ==========================  form columns ==========================    -->
        <div class="columns px-0">
          <div class="column is-full is-flex">
            <!--  ==========================  body ==========================    -->
            <div class="img-blog" v-bind:style="{ backgroundImage: 'url(' + car_detail.thumb_url + ')' }" >
                 <!-- <img v-bind:src="car_detail.thumb_url" class="w-100" style="width: 37% !important;"/>-->
            </div>
            <!--  ==========================  body ==========================    -->
            <div
              class="app_form has-background-white is-flex is-align-items-center is-flex-wrap-wrap is-flex-direction-column bxshadow2 p50 h100 clr_gray"
            >
              <h5 class="font32">
                {{ car_detail.make }} {{ car_detail.model }}
              </h5>
              <p class="font16 font-weight-normal">
                {{ car_detail.derivative }}
              </p>
              <!--  ==========================  price_div ==========================    -->
              <div class="py-50 price_div">
                <p class="font14">Your price:£{{ car_detail.current_price }}</p>
                <h2 class="is-inline-block font-600 title-price clr-pink">
                  £{{ monthly_payment }}
                  <span class="clr_gray font18 is-block has-text-right"
                    >Per Month</span
                  >
                </h2>
              </div>
              <!--  ==========================  items ==========================    -->
              <div
                class="is-flex-direction-column is-flex is-align-items-center"
              >
                <ul class="font14">
                  <li><i class="fas fa-check"></i> Competitive finance</li>
                  <li><i class="fas fa-check"></i> Free delivery</li>
                  <li><i class="fas fa-check"></i> 14-day money back</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="cwhite app_footer is-flex is-justify-content-space-between pt-5"
          >
            <div class="column is-8-tablet is-flex">
              <i class="fa fa-info-circle font30" aria-hidden="true"></i>
              <div>
                <p class="font14 font-600">
                  We perform a soft search credit check.
                </p>
                <p class="font14 pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="column is-4-tablet">
              <a
                href="#"
                class="font14 cwhite font14 is-text-decoration-underline font-600 is-pulled-right"
                >Already have an account? Log in.</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-50 help_section">
      <div class="columns mb-0">
        <div class="column">
          <div
            class="inner_div is-flex is-justify-content-space-between is-align-items-center border-bottom padding-bottom-60"
          >
            <h1 class="clr_gray pt-5 font32">
              Get your example lender<br />
              quote in less than <span class="clr-pink"> 1 minute!</span>
            </h1>
            <a href="#" class="clr_gray is-text-decoration-underline"
              >Do you have a referal code?</a
            >
          </div>
        </div>
      </div>
    </section>

    <section class="applicaiton_form">
      <div class="container_min">
        <!--  form -->
        <form method="post" action="stocklist.html" class="font-weight-normal">
          <!--  ===============================  nav ===============================  -->
          <div class="columns px-0 border-bottom padding-bottom-60">
            <div class="column is-half-tablet">
              <div class="field">
                <!-- ========================  control ========================   -->
                <div class="control">
                  <div class="select w-100 px-0 postion-relative">
                    <select class="w-100" v-model="title_">
                      <option value="">Title</option>
                      <option
                        v-for="(option, index) in filters.title"
                        :value="option"
                        :key="index"
                        
                      >
                        {{ option }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- ========================  control ========================   -->
                <div class="control">
                  <div class="w-100 px-0">
                    <input
                      class="input"
                      type="text"
                      name="Name"
                      placeholder="Name"
                      v-model="first_name"
                    />
                  </div>
                </div>
                <!-- ========================  control ========================   -->
                <div class="control">
                  <div class="w-100 px-0">
                    <input
                      class="input"
                      type="text"
                      name="Surname"
                      placeholder="Surname"
                      v-model="last_name"
                    />
                  </div>
                </div>
                <!-- ========================  control ========================   -->
              </div>
            </div>
            <div class="column is-half-tablet half-right">
              <div class="is-flex">
                <i class="fas fa-info-circle"></i>
                <p class="font14">
                  <strong class="is-block mb-2 clr_gray"
                    >Why do we need this?</strong
                  >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <!-- ========================  columns 2 ========================   -->
          <div class="columns px-0 border-bottom padding-bottom-60">
            <div class="column is-half-tablet">
              <div class="field">
                <!-- ========================  control ========================   -->
                <div class="control">
                  <div class="w-100 px-0">
                    <input
                      type="text"
                      name="Contact number"
                      placeholder="Contact number"
                       v-model="mobile"
                    />
                  </div>
                </div>
                <!-- ========================  control ========================   -->
                <div class="control">
                  <div class="w-100 px-0">
                    <input
                      type="date"
                      name="date"
                      data-start-date="10/24/2019"
                       v-model="dob"
                    />
                  </div>
                </div>
                <!-- ========================  control ========================   -->
                <div class="control">
                  <div class="select w-100 px-0 postion-relative">
                    <select class="w-100"  v-model="marital_status">
                      <option value="">Marital Status</option>
                      <option
                        v-for="(option, name) in filters.marital_status"
                        :value="name.title"
                        :key="option"
                      >
                        {{ option }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- ========================  control ========================   -->
              </div>
            </div>
            <div class="column is-half-tablet half-right">
              <div class="is-flex">
                <i class="fas fa-info-circle"></i>
                <p class="font14">
                  <strong class="is-block mb-2 clr_gray"
                    >Why do we need this?</strong
                  >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <!-- ========================  control ========================   -->
          <div class="columns px-0 border-bottom padding-bottom-60">
            <div class="column is-half-tablet">
              <div class="field">
                <!-- ========================  control ========================   -->
                <div class="columns px-0">
                  <div
                    class="control columns is-flex is-justify-content-space-between px-0 is-align-items-center has-text-right"
                  >
                    <div class="px-0 column is-half-tablet">
                      <input
                        class="input"
                        type="text"
                        name="Post-code"
                        placeholder="Post code"
                         v-model="postcode"
                      />
                    </div>
                    <a
                      href="#"
                      class="clr_gray font12 is-text-decoration-underline column is-half-tablet pr-0"
                      >Manually enter address</a
                    >
                  </div>
                </div>

                <!-- ========================  control ========================   -->
                <div class="columns px-0">
                  <div
                    class="control columns is-flex is-justify-content-space-between px-0 is-align-items-center has-text-right pb-0"
                  >
                    <div class="px-0 column is-half-tablet">
                      <div class="control">
                        <div class="select w-100 px-0 postion-relative">
                          <label
                            class="font14 font-weight-bold clr_gray is-pulled-left"
                            >Residential status</label
                          >
                          <select class="w-100"  v-model="residence_status">
                            <option value="">Choose</option>
                            <option
                              v-for="(option, name) in address.residence_status"
                              :value="name.title"
                              :key="option"
                            >
                              {{ option }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="px-0 column is-half-tablet">
                      <label
                        class="font14 font-weight-bold clr_gray is-pulled-left"
                        >Time at address</label
                      >
                      <div class="columns px-0">
                        <div class="column is-half-tablet">
                          <div class="control">
                            <div class="w-100 px-0">
                              <input
                                type="text"
                                name="Years"
                                class="has-text-centered"
                                placeholder="Years"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="column is-half-tablet">
                          <div class="control">
                            <div class="w-100 px-0">
                              <input
                                type="text"
                                name="Months"
                                class="has-text-centered"
                                placeholder="Months"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ========================  control ========================   -->
              </div>
            </div>
            <div class="column is-half-tablet half-right">
              <div class="is-flex">
                <i class="fas fa-info-circle"></i>
                <p class="font14">
                  <strong class="is-block mb-2 clr_gray"
                    >Why do we need this?</strong
                  >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </form>

        <div class="account_create">
          <h2 class="font32">Create your secure account</h2>
          <form
            method="post"
            action="stocklist.html"
            class="font-weight-normal"
          >
            <!-- ========================  control ========================   -->
            <div class="columns px-0">
              <div class="column is-half-tablet">
                <div class="control">
                  <div class="w-100 px-0">
                    <input
                      class="email"
                      type="Email"
                      name="Email address"
                      placeholder="Email address"
                      required=""
                      v-model="email"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-half-tablet">
                <div class="control">
                  <div class="w-100 px-0">
                    <input
                      class="Password"
                      type="text"
                      name="Password"
                      placeholder="Password"
                      required=""
                      v-model="password"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-8-tablet is-flex">
                <i class="fa fa-info-circle font30" aria-hidden="true"></i>
                <div>
                  <p class="font14 font-600">
                    Why do I need to create an account?
                  </p>
                  <p class="font14 pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <!-- ========================  control ========================   -->
          </form>
        </div>

        <div class="ackn_section pt50">
          <h2 class="font32 border-bottom clr_gray">
            Confirmation and acknowledgements
          </h2>
        </div>
        <div class="columns px-0 border-bottom padding-bottom-60">
          <div class="column is-half-tablet">
            <div class="field">
              <!-- ========================  control ========================   -->
              <label class="check_custom font16 clr_gray font-weight-normal"  v-for="(item, index) in terms.checklist" :key="index"
                >{{item}}
                <input type="checkbox"  />
                <span class="checkmark"></span>
              </label>
             
              <p class="clr_gray font16 font-weight-normal"  v-for="(item, index) in terms.acknowledgements" :key="index">
                  {{item}}
              </p>

              <a href="#" @click="getMyExampleLenderQuote()" class="bg-pink cwhite is-inline-block btn margintop60"
                >Get my example lender quote</a
              >
              <!-- ========================  control ========================   -->
            </div>
          </div>
          <div class="column is-half-tablet half-right">
            <div class="is-flex">
              <i class="fas fa-info-circle"></i>
              <p class="font14">
                <strong class="is-block mb-2 clr_gray"
                  >Why do we need this?</strong
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================================  section  =================================   -->
    <section class="section_4 mt-0 bg-light-white">
      <!-- =================================  section  =================================   -->

      <div class="columns cl_col_2">
        <div class="column is-full">
          <p class="clr_gray font12">
            <strong> Legal disclaimer:</strong> Lorem ipsum dolor sit amet,
            solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus
            fuisset intellegam. Per case melius assentior ea. Et scaevola
            insolens eum. Ad vix verear eruditi ancillae, fabulas assentior his
            at, eum no dico euripidis reprehendunt. Cibo delectus eu ius, usu
            veri putent at.His tamquam evertitur appellantur an, eam omnis
            blandit officiis id, eu nostro tacimates pri. Te vim denique
            fabellas deseruisse, ad est mandamus neglegentur, vim adhuc
            consequat an. At putent commodo patrioque pro, nihil reprimique et
            pro. Et sea graece consulatu conclusionemque. Doctus iudicabit ex
            eam.
          </p>
        </div>
      </div>
    </section>
    <!-- =================================  footer  =================================   -->

    <div class="bg_gray w-100 has-text-centered cwhite postion-relative">
      <div class="columns is-align-items-center v_header_title">
        <div class="column is-full has-text-centered">
          <p class="font14">
            Have questions or need help? Call us on<strong class="cwhite">
              0345 003 0008</strong
            >
          </p>
        </div>
      </div>
    </div>
    <FooterNav />
  </div>
</template>
<script>
import { HTTP } from "../http-common";
import AppNavigation from "@/components/AppNavigation";
import FooterNav from "@/components/FooterNav";
import Toasted from 'vue-toasted';

import Vue from 'vue';

Vue.use(Toasted);
export default {
  name: "myStore",
  components: {
    AppNavigation,
    FooterNav,
  },
  data() {
    return {
      filters: [],
      terms:[],
      address: [],
      car_detail: [],
      monthly_payment: [],
      IsLoading: true,
      title_:'',
      first_name:'',
      last_name:'',
      marital_status:'',
      mobile:'',
      dob:'',
      postcode:'',
      residence_status:'',
      email:'',
      password:''
    };
  },

  methods: {
    GetFiltersettings() {
      HTTP.get("api/v2/app/settings").then((response) => {
        if (response.status == 200) {
          this.filters = response.data.fields.personal;
          this.address = response.data.fields.address;
          this.terms = response.data.fields.terms;
        } else {
          this.IsLoading = false;
        }

        // commit('SET_CARS', response.data)
      });
    },
  

  getMyExampleLenderQuote(){
     console.log(this.title_)
       var postData = {
            personal: { 
                dob: this.dob,
                driving_licence: '' ,
                email: this.email,
                first_name:this.first_name,
                gender:'male',
                last_name:this.last_name,
                marital_status:this.marital_status,
                mobile:this.mobile,
                password:this.password,
                title:this.title_
            },
            marketing: {
                 agreed_marketing_options:'',
                 is_email_opt_in:'',
                 is_sms_opt_in:'',
                 lead_medium:'',
                 lead_source:'',
                 promo_code:''
            },
            addresses:[{
                 building_name:'',
                 city:'',
                 county:'',
                 district:'',
                 flat_no:'',
                 house_no:'',
                 id:'',
                 postcode:'',
                 residence_status:'',
                 street:'',
                 time_at_address:'',
                 town:'',
                 type:''
            }]
            };

    HTTP.post("api/v2/account/create", postData)
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          this.monthly_payment = response.data.monthly_payment;
        } else {
          this.IsLoading = false;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 422) {
          if (err.response.data.errors) {
                   this.$toasted.show( err.response.data.errors[0],{
                        type : 'error',
                         duration: 3000,
                        closeOnSwipe:true,

                    })

          }

          // and so on
        }
      });
         
  },

  GetCarById(car_id) {
    var cardId = car_id.split("_")[0];

    var postData = {
      car_id: car_id,
      loan: {
        deposit: 9000,
        mileage: 25000,
        product: "new_car_pcp",
        term: 48,
      },
      rating: "excellent",
    };
    HTTP.post("api/v2/cars/view/" + cardId, postData).then((response) => {
      console.log(response);
      if (response.status == 200) {
        this.car_detail = response.data;
        this.IsLoading = false;
      } else {
        this.IsLoading = false;
      }
    });
  },

  GetCarMonthlyPayment(car_id) {
    var cardId = car_id.split("_")[0];
    var car_type = car_id.split("_")[1];

    var postData = {
      car_type: car_type,
      deposit: 9000,
      id: cardId,
      mileage: 25000,
      product: "new_car_pcp",
      term: this.term_range,
      rating: "excellent",
    };

    HTTP.post("api/v2/cars/price/" + cardId, postData)
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          this.monthly_payment = response.data.monthly_payment;
        } else {
          this.IsLoading = false;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 422) {

            console.log(err.response.data.errors)
          if (err.response.data.errors) {
              
              this.$toasted.show( err.response.data.errors[0],{
                        type : 'error',
                         duration: 3000,
                        closeOnSwipe:true,

                    })
          }

          // and so on
        }
      });
     },
  }, 

  mounted() {
    this.GetFiltersettings();
    this.GetCarById(this.$route.params.car_id);
    this.GetCarMonthlyPayment(this.$route.params.car_id);
    console.log(this.$route.params.car_id);
  },
};
</script>
