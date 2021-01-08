<template>
  <div class="vehicle">
    <div class="loder_main" v-if="IsLoading">
      <div class="loader_"></div>
    </div>
    <app-navigation></app-navigation>
    <section class="vehicle_page">
      <div class="full-widht has-background-white">
        <div class="is-flex">
          <div id="img_gallery" class="w-100">
            <carousel :per-page="3" :mouse-drag="true" v-if="car_detail">
              <slide
                v-for="(item, index) in carimages"
                :key="index"
              >
                <div class="column is-4 p-0">
                  <div class="postion-relative">
                    <img v-bind:src="item" class="w-100" />
                    <div
                      class="w-100 has-text-centered postion-absolute overlay-text"
                      v-if="index == 0"
                    >
                      <h5 class="cwhite font14 font-600 font18">
                        2 Year Warranty
                      </h5>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
        <!-- =================================  columns  =================================  -->
        <div class="item_disc p100">
          <div class="columns">
            <!-- =================================  columns  =================================  -->
            <div class="is-flex is-align-items-center w-100 postion-relative">
              <div
                class="column is-three-quarters is-flex-tablet is-align-items-start"
              >
                <img src="../assets/img/icon5.png" class="pr-6" alt="heart" />
                <div class="clr_gray">
                  <h1 class="font-600">   {{ car_detail.make }} {{ car_detail.model }}</h1>
                  <span class="ve_title is-block pt-5">
                     {{ car_detail.derivative }}    {{ car_detail.colour_spec }}</span
                  >
                </div>
              </div>
              <!-- =================================  columns  =================================  -->
              <div class="column is-one-quarter right-card">
                <div class="card p-lg-6 has-text-centered mt-60">
                  <p class="is-inline-block pt-2 clr_gray font14">
                     Your price: £{{ car_detail.current_price }}
                  </p>
                  <h1 class="is-inline-block pt-4 clr-pink font-600">
                    £{{ monthly_payment}}
                    <span class="clr_gray font18 is-block has-text-right"
                      >Per Month</span
                    >
                  </h1>

                  <div class="range-slider pt-5">
                    <div
                      class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex"
                    >
                      <label class="">Term</label>
                      <label class="range-slider__value">{{term_range}} months</label>
                    </div>
                    <input
                       class="range-slider__range"
                        v-model="term_range"
                        type="range"
                        min="1"
                        max="48"
                        step="1"
                        @change="changetermrange()"

                        style="background: linear-gradient(90deg, rgb(255, 35, 183) 38.9333%, rgb(215, 220, 223) 39.0333%);"
                    />
                  </div>
                  <div class="range-slider pt-5">
                    <div
                      class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex"
                    >
                      <label class="">Deposit</label>
                      <label class="range-slider__value">£{{deposite_range}}</label>
                    </div>
                    <input
                      class="range-slider__range"
                       v-model="deposite_range"
                        type="range"
                        min="1"
                        max="10000"
                        step="1"
                        @change="changeDeposite()"
                    />
                  </div>
                  <div class="is-hidden-tablet">
                    <div class="btn-section">
                      <a href="#" class="call_btn">Call us on 0345 003 0008</a>
                      <a href="#" class="get_started_btn">Get started</a>
                      <a href="#" class="call_now">Have a car to sell?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- =================================  section  =================================  -->
        <div class="bg_gray w-100 cwhite postion-fixed bottom-0 onmobile">
          <div class="columns is-align-items-center v_header_title">
            <div class="column is-half is-hidden-mobile">
              <h5 class="font18 is-flex is-align-items-center">
                <img src="../assets/img/icon5.png" alt="heart" />
                <strong class="cwhite">{{ car_detail.make }} {{ car_detail.model }}</strong>
              </h5>
            </div>

            <div
              class="column is-half-tablet is-flex is-justify-content-flex-end"
            >
              <h4 class="font18 font-600">
                <span class="price">  £{{monthly_payment}} per month</span>
                <a
                  href="#"
                  class="bg-pink cwhite is-inline-block btn is-hidden-mobile"
                  @click="getMyDeal()"
                  >Get my deal</a
                >
                <a
                  href="#"
                  class="bg-pink is-hidden-tablet cwhite is-inline-block btn"
                  >Get started</a
                >
              </h4>
            </div>
          </div>
        </div>
        <!-- =================================  section  =================================  -->
        <div class="bg-black v_process w-100 cwhite">
          <div class="columns is-align-items-center">
            <div class="work-progress w-100">
              <div class="container_inner">
                <div class="work-progress_2 is-d-flex is-align-items-center">
                  <div class="columns">
                    <div class="column is-full postion-relative">
                      <ul
                        class="clr_gray is-flex-tablet has-text-centered pt-5"
                      >
                        <!-- =================================  section  =================================   -->
                        <li class="">
                          <span class="postion-relative w-100 is-inline-block">
                            <span class="rounded border-white">
                              <img
                                src="../assets/img/icon1w.png"
                                class=""
                                alt="icon1.png"
                              />
                            </span>
                            <div class="steps postion-absolute">
                              <img src="../assets/img/step1.png" alt="step1" />
                            </div>
                          </span>
                          <div class="work_inner">
                            <span class="heading cwhite font16 font-600"
                              >Find and finance the perfect car online.</span
                            >
                          </div>
                        </li>
                        <!-- =================================  section  =================================   -->
                        <li class="">
                          <span class="postion-relative w-100 is-inline-block">
                            <span class="rounded border-white">
                              <img
                                src="../assets/img/icon2w.png"
                                class=""
                                alt="icon1.png"
                              />
                            </span>
                            <div class="steps postion-absolute">
                              <img src="../assets/img/step2.png" alt="step2" />
                            </div>
                          </span>
                          <div class="work_inner">
                            <span class="heading cwhite font16 font-600"
                              >Delivere to your door free of charge.</span
                            >
                          </div>
                        </li>
                        <!-- =================================  section  =================================   -->
                        <li class="">
                          <span class="postion-relative w-100 is-inline-block">
                            <span class="rounded border-white">
                              <img
                                src="../assets/img/icon3w.png"
                                class=""
                                alt="icon1.png"
                              />
                            </span>
                          </span>
                          <div class="work_inner">
                            <span class="heading cwhite font16 font-600"
                              >Love it. Keep it. Or return it.</span
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="our_ser">
      <div class="columns cl_col mb-0 pb-0 w-100 is-justify-content-center">
        <!-- =================================  section  =================================  -->
        <div class="column is-one-four-desktop is-6-mobile">
          <div class="img_bloc is-flex-direction-column w-100">
            <img src="../assets/img/icon6.svg" alt="" class="is-fullwidth" />
            <p class="font-600 clr_gray font14 pt-4 is-block">12.9k miles</p>
          </div>
        </div>
        <!-- =================================  section  =================================  -->
        <div class="column is-one-four-desktop is-6-mobile">
          <div class="img_bloc is-flex-direction-column w-100">
            <img src="../assets/img/icon7.svg" alt="" class="is-fullwidth" />
            <p class="font-600 clr_gray font14 pt-4 is-block">{{car_detail.model_year}}</p>
          </div>
        </div>

        <!-- =================================  section  =================================  -->
        <div class="column is-one-four-desktop is-6-mobile">
          <div class="img_bloc is-flex-direction-column w-100">
            <img src="../assets/img/icon8.svg" alt="" class="is-fullwidth" />
            <p class="font-600 clr_gray font14 pt-4 is-block">{{car_detail.fuel_type}}</p>
          </div>
        </div>
        <!-- =================================  section  =================================  -->
        <div class="column is-one-four-desktop is-6-mobile">
          <div class="img_bloc is-flex-direction-column w-100">
            <img src="../assets/img/icon9.svg" alt="" class="is-fullwidth" />
            <p class="font-600 clr_gray font14 pt-4 is-block">1.8L</p>
          </div>
        </div>
        <!-- =================================  section  =================================  -->
        <div class="column is-one-four-desktop is-6-mobile">
          <div class="img_bloc is-flex-direction-column w-100">
            <img src="../assets/img/icon10.svg" alt="" class="is-fullwidth" />
            <p class="font-600 clr_gray font14 pt-4 is-block">{{car_detail.transmission}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="v_serives_section">
      <!-- =================================  section  =================================   -->
      <div class="columns is-vcentered ser_col p-0">
        <div class="column is-full">
          <div
            class="container_min is-flex-tablet is-justify-content-space-between is-align-items-center"
          >
            <div class="inner-block pl-0">
              <div class="content_block">
                <h5 class="font-600">About this vehicle</h5>

                   <div class="font14 pt-4 is-inline-block" v-html="car_detail.description" id="div_html" ></div>
                 
              </div>
            </div>

             <img v-bind:src="car_detail.thumb_url" class="shadow" style="width: 37% !important;"/>
          </div>
        </div>
      </div>
    </section>

    <section class="Specification_seciton">
      <!-- =================================  section  =================================   -->
      <div class="columns is-vcentered ser_col">
        <div class="column is-full p-0">
          <div
            class="container_min is-flex is-justify-content-space-between is-align-items-center"
          >
            <div class="w-100 pl-0">
              <div class="dropdown is-active w-100">
                <div class="dropdown-trigger w-100">
                  <section class="accordions">
                    <article class="accordion is-active font14 font-600">
                      <div class="accordion-header toggle">
                        <p class="font14 font-600 clr_gray">
                          Specification
                          <i class="fas fa-chevron-up is-pulled-right"></i>
                        </p>
                      </div>
                      <div class="accordion-body">
                        <div class="accordion-content">
                          <div class="table-container">
                            <div
                              class="table w-100 is-sdliped font14 font-600 clr_gray"
                            >
                              <dl v-for="item in specification" :key="item">
                                <dd v-if="item">Spec item</dd>
                                <dd v-if="item">{{item}}</dd>
                                <dd v-if="item">Spec item</dd>
                                <dd v-if="item">Spec detail</dd>
                              </dl>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                   
                    <article class="accordion">
                      <div class="accordion-header toggle">
                        <p class="font14 font-600 clr_gray">
                          Interior
                          <i class="fas fa-chevron-up is-pulled-right"></i>
                        </p>
                      </div>
                      <div class="accordion-body">
                        <div class="accordion-content">
                          <div class="table-container">
                            <div
                              class="table w-100 is-sdliped font14 font-600 clr_gray"
                            >
                              <dl v-for="item in specification" :key="item">
                                <dd>Spec item</dd>
                                <dd>{{item}}</dd>
                                <dd>Spec item</dd>
                                <dd>{{item}}</dd>
                              </dl>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="accordion">
                      <div class="accordion-header toggle">
                        <p class="font14 font-600 clr_gray">
                          Exterior
                          <i class="fas fa-chevron-up is-pulled-right"></i>
                        </p>
                      </div>
                      <div class="accordion-body">
                        <div class="accordion-content">
                          <div class="table-container">
                            <div
                              class="table w-100 is-sdliped font14 font-600 clr_gray"
                            >
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="accordion">
                      <div class="accordion-header toggle">
                        <p class="font14 font-600 clr_gray">
                          Technology
                          <i class="fas fa-chevron-up is-pulled-right"></i>
                        </p>
                      </div>
                      <div class="accordion-body">
                        <div class="accordion-content">
                          <div class="table-container">
                            <div
                              class="table w-100 is-sdliped font14 font-600 clr_gray"
                            >
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                              <dl>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                                <dd>Spec item</dd>
                                <dd>Spec detail</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="gradiant quote_section">
      <div class="columns">
        <div class="column is-full">
          <h1 class="cwhite has-text-centered mb-5">Get an example quote</h1>
        </div>
        <!-- =================================  left col  =================================   -->

        <div class="column is-three-fifths clr_gray">
          <div class="has-background-white bxshadow2 p50 h100">
            <div
              class="select w-100 is-flex-tablet is-justify-content-space-between is-align-items-center"
            >
              <!-- =================================  label  =================================   -->
              <div class="column is-half-desktop">
                <label class="font16">My credit rating is</label>
              </div>
              <!-- =================================  select  =================================   -->
              <div class="column is-half-desktop">
                <select
                    class="w-100 font16 font-weight-normal font16 pl-0 rounde-0 clr_gray"
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
            <!-- =================================  select  =================================   -->
            <div class="range-slider pt-5">
              <div
                class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex"
              >
                <label class="">Term</label>
                <label class="range-slider__value">{{term_}} months</label>
              </div>

              <input
                      class="range-slider__range"
                      v-model="term_"
                      type="range"
                      min="1"
                      max="60"
                      step="1"
                      @change="changeTerm_by_rating()"
              />
            </div>

            <div class="range-slider pt-5">
              <div
                class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex"
              >
                <label class="">Deposit</label>
                <label class="range-slider__value">£{{deposit_}}</label>
              </div>

              <input
                  class="range-slider__range"
                  v-model="deposit_"
                  type="range"
                  min="1"
                  max="2000"
                  step="1"
                  @change="changeDeposit_by_rating()"
              />
            </div>

            <!-- =================================  select  =================================   -->
          </div>
        </div>

        <!-- =================================  right col  =================================   -->
        <div class="column is-two-fifths has-text-centered pl-1">
          <div class="has-background-white bxshadow2 py-50 px-30 h100">
            <label class="font16 font-600 clr_gray"
              >You could borrow up to</label
            >
            <h2 class="is-inline-block font-600 w-100 clr-pink pt-2">
              £{{ Math.floor(finance_res.loan_amount)}}
            </h2>
            <p class="font12 clr_gray font-weight-normal"> Based on <span style="text-transform: capitalize;">{{rating_}}</span> credit rating you can borrow approximately £{{finance_res.loan_amount}}. Representative APR: : {{finance_res.apr}}%, Fixed Rate(Per Annum):  {{finance_res.flat_rate}}%, Cost of Credit: £{{finance_res.total_cost}}, Total Repayable: £{{finance_res.total_payable}}.            </p>
            <a @click="getMyDeal()" href="#" class="bg-pink cwhite is-inline-block mt-5 btn"
              >Get my deal</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="listing mt-0 bg-light-white">
      <div class="columns">
        <!--  ============================= aside =============================  -->
        <div class="column is-full has-text-centered">
          <p class="clr_gray">Similar vehicles you might be interested in</p>
        </div>
        <div class="column is-3-desktop column is-6-tablet column is-12-mobile">
          <div class="card">
            <div class="postion-relative">
              <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
            </div>
            <div class="card_content">
              <div
                class="is-flex is-align-items-center is-justify-content-space-between"
              >
                <h5
                  class="menu-label font-weight-bold font16 has-text-left postion-relative mb-0 is-capitalized"
                >
                  Toyota C-HR
                </h5>
                <img src="../assets/img/icon5.png" alt="heart" />
              </div>
              <p class="font14 clr_gray pt-1 pb-1">
                1.8 Hybrid Dynamic 5dr CVT<br />
                Your price: £21,074.25
              </p>
              <h2 class="is-inline-block pt-4">
                £481.92
                <span class="clr_gray font12 is-block has-text-right"
                  >Per Month</span
                >
              </h2>
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

        <!--  ============================= aside =============================  -->
        <div class="column is-3-desktop column is-6-tablet column is-12-mobile">
          <div class="card">
            <div class="postion-relative">
              <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
              <h5
                class="cwhite postion-absolute overlay-text font14 font-weight-bold"
              >
                2 Year Warranty
              </h5>
            </div>
            <div class="card_content">
              <div
                class="is-flex is-align-items-center is-justify-content-space-between"
              >
                <h5
                  class="menu-label font-weight-bold font16 has-text-left postion-relative mb-0 is-capitalized"
                >
                  Toyota C-HR
                </h5>
                <img src="../assets/img/icon5.png" alt="heart" />
              </div>
              <p class="font14 clr_gray pt-1 pb-1">
                1.8 Hybrid Dynamic 5dr CVT<br />
                Your price: £21,074.25
              </p>
              <h2 class="is-inline-block pt-4">
                £481.92
                <span class="clr_gray font12 is-block has-text-right"
                  >Per Month</span
                >
              </h2>
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
        <!--  ============================= aside =============================  -->
        <div class="column is-3-desktop column is-6-tablet column is-12-mobile">
          <div class="card">
            <div class="postion-relative">
              <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
              <h5
                class="cwhite postion-absolute overlay-text font14 font-weight-bold"
              >
                2 Year Warranty
              </h5>
            </div>
            <div class="card_content">
              <div
                class="is-flex is-align-items-center is-justify-content-space-between"
              >
                <h5
                  class="menu-label font-weight-bold font16 has-text-left postion-relative mb-0 is-capitalized"
                >
                  Toyota C-HR
                </h5>
                <img src="../assets/img/icon5.png" alt="heart" />
              </div>
              <p class="font14 clr_gray pt-1 pb-1">
                1.8 Hybrid Dynamic 5dr CVT<br />
                Your price: £21,074.25
              </p>
              <h2 class="is-inline-block pt-4">
                £481.92
                <span class="clr_gray font12 is-block has-text-right"
                  >Per Month</span
                >
              </h2>
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
        <!--  ============================= aside =============================  -->
        <div class="column is-3-desktop column is-6-tablet column is-12-mobile">
          <div class="card">
            <div class="postion-relative">
              <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
              <h5
                class="cwhite postion-absolute overlay-text font14 font-weight-bold"
              >
                2 Year Warranty
              </h5>
            </div>
            <div class="card_content">
              <div
                class="is-flex is-align-items-center is-justify-content-space-between"
              >
                <h5
                  class="menu-label font-weight-bold font16 has-text-left postion-relative mb-0 is-capitalized"
                >
                  Toyota C-HR
                </h5>
                <img src="../assets/img/icon5.png" alt="heart" />
              </div>
              <p class="font14 clr_gray pt-1 pb-1">
                1.8 Hybrid Dynamic 5dr CVT<br />
                Your price: £21,074.25
              </p>
              <h2 class="is-inline-block pt-4">
                £481.92
                <span class="clr_gray font12 is-block has-text-right"
                  >Per Month</span
                >
              </h2>
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
    <FooterNav />
  </div>
</template>

<script>
//import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { HTTP } from "../http-common";
import AppNavigation from "@/components/AppNavigation";
import FooterNav from "@/components/FooterNav";
import VueToast from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";
import Vue from "vue";
import { Carousel, Slide } from "vue-carousel";

import VueCarousel from "vue-carousel";

Vue.use(VueCarousel);
Vue.use(VueToast);

export default {
  name: "vehicle",
  components: {
    //VueSlickCarousel ,
    AppNavigation,
    FooterNav,
    Carousel,
    Slide,
  },
  data: () => ({
    settings: {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    },
    settings1: {
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
    },
    car_detail: [],
    specification: [],
    IsLoading: true,
    term_range: 48,
    monthly_payment: "",
    carimages:[],
    filters_finance:[],
    deposite_range:6000,
    terms_slider:1000,
    rating_:'fair',
    deposit_:1000,
    term_:36,
    finance_res:[]
  }),

  methods: {
    getMyDeal() {
      this.$router.push("/application/" + this.$route.params.car_id);
    },
    GetCarById(car_id) {
      var cardId = car_id.split("_")[0];

      var postData = {
        car_id: car_id,
        loan: {
          deposit: 9000,
          mileage: 25000,
          product: "new_car_pcp",
          term: this.term_range,
        },
        rating: "excellent",
      };
      HTTP.post("api/v2/cars/view/" + cardId, postData).then((response) => {
        if (response.status == 200) {
          this.car_detail = response.data;
          this.specification = this.car_detail.standard_option.split(",");
          this.IsLoading = false;
                var img =  response.data.images;
               
              for(let i =0 ; i < img.length; i++){
                     console.log(img[i].path)
                      if(this.checkImg(img[i].path)){
                        this.carimages.push(img[i].path)
                      }else{
                            this.carimages.push(this.car_detail.thumb_url)
                      }
                  
                    
              }

     console.log(this.carimages)
        } else {
          this.IsLoading = false;
        }
      });
    },

    checkImg(url, callback, timeout) {
            timeout = timeout || 5000;
            var timedOut = false, timer;
            var img = new Image();
            img.onerror = img.onabort = function() {
                if (!timedOut) {
                    clearTimeout(timer);
                   return false;
                }
            };
            img.onload = function() {
                if (!timedOut) {
                    clearTimeout(timer);
                   return true;
                }
            };
            img.src = url;
            timer = setTimeout(function() {
                timedOut = true;
               // callback(url, "timeout");
               console.log(url)
            }, timeout); 
  },

    record(url, result) {

       console.log(url, result)
     }   ,
   

    GetCarMonthlyPayment(car_id) {
      var cardId = car_id.split("_")[0];
      var car_type = car_id.split("_")[1];

      var postData = {
        car_type: car_type,
        deposit: this.deposite_range,
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
            console.log("!he");
            this.monthly_payment = response.data.monthly_payment;
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

    changetermrange() {
      this.GetCarMonthlyPayment(this.$route.params.car_id);
    },
    
     changeDeposite() {
      this.GetCarMonthlyPayment(this.$route.params.car_id);
    },

     applyFill(slider) {
          // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
          const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);

          const settings={
            fill: '#FF23B7',
            background: '#d7dcdf'
          }

          // now we'll create a linear gradient that separates at the above point
          // Our background color will change here
          const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
          slider.style.background = bg;
      },
      
    GetFiltersettings() {
      HTTP.get("api/v2/app/settings").then((response) => {
        console.log(response.data.fields.stocks.makes);
        if (response.status == 200) {
          this.filters_finance= response.data.fields.finance;
          this.IsLoading = false
        } else {
          this.IsLoading = false;
        }

        // commit('SET_CARS', response.data)
      });
    },

    changeTerm_by_rating(){
     this.GetCarMonthlyPayment_by_rating()
    },

    changeDeposit_by_rating(){
      this.GetCarMonthlyPayment_by_rating()
    },

    getRatingFilter(e){
           this.rating_ = e.target.value;
            this.GetCarMonthlyPayment_by_rating()
    },

     GetCarMonthlyPayment_by_rating() {
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



   
  },

  mounted() {
    this.GetCarById(this.$route.params.car_id);
    this.GetFiltersettings();
    this.GetCarMonthlyPayment(this.$route.params.car_id);
    this.GetCarMonthlyPayment_by_rating()

    const sliders = document.querySelectorAll('.range-slider');

      // Iterate through that list of sliders
      // ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
      Array.prototype.forEach.call(sliders,(slider)=>{
        // Look inside our slider for our input add an event listener
      //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
        slider.querySelector('input').addEventListener('input', (event)=>{
          // 1. apply our value to the span
          //slider.querySelector('.range-slider__value').innerHTML = event.target.value;
          // 2. apply our fill to the input
          this.applyFill(event.target);
        });
        // Don't wait for the listener, apply it now!
        this.applyFill(slider.querySelector('input'));
      });



    
  

      
  },
};
</script> 

