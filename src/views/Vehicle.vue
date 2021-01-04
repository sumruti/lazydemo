<template>
  <div class="vehicle">
        <div class="loder_main"  v-if="IsLoading">
      <div class="loader_"></div>
     </div> 
    <section class="vehicle_page">
      <div class="full-widht has-background-white">
        <div class="is-flex">
          <div id="img_gallery" class="w-100">
            <VueSlickCarousel v-bind="settings    " :arrows="true" >
              <!--  ============================= aside =============================  -->
              <div class="column is-4 p-0"  v-for="item in car_detail.images" :key="item.path">
                <div class="postion-relative">
                 
                    <img v-bind:src="item.path" class="w-100" />
                  <div
                    class="w-100 has-text-centered postion-absolute overlay-text"
                  >
                    <h5 class="cwhite font14 font-600 font18">
                      2 Year Warranty
                    </h5>
                  </div>
                </div>
              </div>

             
            </VueSlickCarousel>
          </div>
        </div>
        <!-- =================================  columns  =================================  -->
        <div class="item_disc p100">
          <div class="columns">
            <!-- =================================  columns  =================================  -->
            <div class="is-flex is-align-items-center w-100 postion-relative">
              <div
                class="column is-three-quarters is-flex is-align-items-start"
              >
                <img src="../assets/img/icon5.png" class="pr-6" alt="heart" />
                <div class="clr_gray">
                  <h1 class="font-600"> {{ car_detail.make }}{{ car_detail.model }}</h1>
                  <span class="ve_title is-block pt-5">
                   {{ car_detail.derivative }} </span
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
                    £{{ car_detail.monthly_payment }}
                    <span class="clr_gray font18 is-block has-text-right"
                      >Per Month</span
                    >
                  </h1>

                  <div class="range_value_slider pt-5">
                    <div
                      class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex"
                    >
                      <label class="op7">Term</label>
                      <label class="op7">32 months</label>
                    </div>
                    <input
                      class="slider is-fullwidth w-100"
                      step="1"
                      min="0"
                      max="100"
                      value="50"
                      type="range"
                    />
                  </div>
                  <div class="range_value_slider pt-4">
                    <div
                      class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex"
                    >
                      <label class="op7">Deposit</label>
                      <label class="op7">£4,000</label>
                    </div>
                    <input
                      class="slider is-fullwidth w-100"
                      step="1"
                      min="0"
                      max="100"
                      value="50"
                      type="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- =================================  section  =================================  -->
        <div class="bg_gray w-100 cwhite postion-relative">
          <div class="columns is-align-items-center v_header_title">
            <div class="column is-half">
              <h5 class="font18 is-flex is-align-items-center">
                <img src="../assets/img/icon5.png" alt="heart" />
                <strong class="cwhite">Toyota C-HR 1.8</strong> Hybrid Dynamic
                5dr CVT
              </h5>
            </div>

            <div class="column is-half is-flex is-justify-content-flex-end">
              <h4 class="font18 font-600">
                £481.92 per month
                <a href="#" class="bg-pink cwhite is-inline-block btn"
                  >Get my deal</a
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
                <div class="column is-full postion-relative p100">
                  <ul
                    class="clr_gray is-flex-desktop has-text-centered pt-3 w-100"
                  >
                    <!-- =================================  section  =================================   -->
                    <li class="w-100 px-2">
                      <span class="postion-relative w-100 is-inline-block mb-1">
                        <span class="rounded border-white">
                          <img
                            src="../assets/img/icon1w.png"
                            class=""
                            alt="icon1.png"
                          />
                        </span>
                        <span class="steps postion-absolute">
                          <span class="steps1"></span>
                          <span class="steps2"></span>
                          <span class="steps3"></span>
                          <span class="steps4"></span>
                        </span>
                      </span>

                      <span class="heading font-600 cwhite font16 mt-5">
                        Find and finance the<br />
                        perfect car online.
                      </span>
                    </li>
                    <!-- =================================  section  =================================   -->
                    <li class="w-100 px-2">
                      <span class="postion-relative w-100 is-inline-block mb-1">
                        <span class="rounded border-white">
                          <img
                            src="../assets/img/icon2w.png"
                            class=""
                            alt="icon1.png"
                          />
                        </span>
                        <span class="steps postion-absolute">
                          <span class="steps1"></span>
                          <span class="steps2"></span>
                          <span class="steps3"></span>
                          <span class="steps4"></span>
                        </span>
                      </span>

                      <span class="heading font-600 cwhite font16 mt-5">
                        Delivered to your door<br />
                        free of charge.
                      </span>
                    </li>
                    <!-- =================================  section  =================================   -->
                    <li class="w-100 px-2">
                      <span class="postion-relative w-100 is-inline-block mb-1">
                        <span class="rounded border-white">
                          <img
                            src="../assets/img/icon3w.png"
                            class=""
                            alt="icon1.png"
                          />
                        </span>
                      </span>

                      <span class="heading font-600 cwhite font16 mt-5">
                        Love it. Keep it.<br />
                        return it.
                      </span>
                    </li>
                  </ul>
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
        <div class="column is-one-four-desktop is-full-mobile">
          <div class="img_bloc is-flex-direction-column w-100">
            <img src="../assets/img/icon6.svg" alt="" class="is-fullwidth" />
            <p class="font-600 clr_gray font14 pt-4 is-block">12.9k miles</p>
          </div>
        </div>
        <!-- =================================  section  =================================  -->
        <div class="column is-one-four-desktop is-full-mobile">
          <div class="img_bloc is-flex-direction-column w-100">
            <img src="../assets/img/icon7.svg" alt="" class="is-fullwidth" />
            <p class="font-600 clr_gray font14 pt-4 is-block">{{car_detail.model_year}}</p>
          </div>
        </div>

        <!-- =================================  section  =================================  -->
        <div class="column is-one-four-desktop is-full-mobile">
          <div class="img_bloc is-flex-direction-column w-100">
            <img src="../assets/img/icon8.svg" alt="" class="is-fullwidth" />
            <p class="font-600 clr_gray font14 pt-4 is-block">{{car_detail.fuel_type}}  </p>
          </div>
        </div>
        <!-- =================================  section  =================================  -->
        <div class="column is-one-four-desktop is-full-mobile">
          <div class="img_bloc is-flex-direction-column w-100">
            <img src="../assets/img/icon9.svg" alt="" class="is-fullwidth" />
            <p class="font-600 clr_gray font14 pt-4 is-block">1.8L</p>
          </div>
        </div>
        <!-- =================================  section  =================================  -->
        <div class="column is-one-four-desktop is-full-mobile">
          <div class="img_bloc is-flex-direction-column w-100">
            <img src="../assets/img/icon10.svg" alt="" class="is-fullwidth" />
            <p class="font-600 clr_gray font14 pt-4 is-block">{{car_detail.transmission}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="v_serives_section">
      <!-- =================================  section  =================================   -->
      <div class="columns is-vcentered ser_col">
        <div class="column is-full p-0">
          <div
            class="container_min is-flex is-justify-content-space-between is-align-items-center"
          >
            <div class="inner-block pl-0">
              <div class="content_block">
                <h5 class="font-600">About this vehicle</h5>
                <p class="font14 pt-4 is-inline-block">
                {{ car_detail.description }}
                </p>
              </div>
            </div>

           <img v-bind:src="car_detail.thumb_url" class="w-100" style="width: 37% !important;"/>
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
                            <table
                              class="table w-100 is-striped font14 font-600 clr_gray"
                            >
                              <tr  v-for="item in specification" :key="item">
                                <td>{{item}}</td>
                              </tr>
                             
                            </table>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="accordion">
                      <div class="accordion-header toggle">
                        <p class="font14 font-600 clr_gray">
                          Specification
                          <i class="fas fa-chevron-up is-pulled-right"></i>
                        </p>
                      </div>
                      <div class="accordion-body">
                        <div class="accordion-content">
                          <div class="table-container">
                            <table
                              class="table w-100 is-striped font14 font-600 clr_gray"
                            >
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                            </table>
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
                            <table
                              class="table w-100 is-striped font14 font-600 clr_gray"
                            >
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                            </table>
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
                            <table
                              class="table w-100 is-striped font14 font-600 clr_gray"
                            >
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                            </table>
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
                            <table
                              class="table w-100 is-striped font14 font-600 clr_gray"
                            >
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                              <tr>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                                <td>Spec item</td>
                                <td>Spec detail</td>
                              </tr>
                            </table>
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
              class="select w-100 is-flex is-justify-content-space-between is-align-items-center"
            >
              <!-- =================================  label  =================================   -->
              <div class="column is-half-desktop">
                <label class="font16">My credit rating is</label>
              </div>
              <!-- =================================  select  =================================   -->
              <div class="column is-half-desktop">
                <select
                  class="w-100 font16 font-weight-normal font16 pl-0 rounde-0 clr_gray"
                >
                  <option>Excellent</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
            <!-- =================================  select  =================================   -->
            <div class="range_value_slider pt50 column is-full">
              <div
                class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex"
              >
                <label class="font16">Credit term</label>
                <label class="font16">36 months</label>
              </div>
              <input
                class="slider is-fullwidth w-100 mt-2"
                step="1"
                min="0"
                max="100"
                value="50"
                type="range"
              />
            </div>
            <!-- =================================  select  =================================   -->
            <div class="range_value_slider pt50 column is-full">
              <div
                class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex"
              >
                <label class="font16">Mileage</label>
                <label class="font16">£4000</label>
              </div>
              <input
                class="slider is-fullwidth w-100 mt-2"
                step="1"
                min="0"
                max="100"
                value="50"
                type="range"
              />
            </div>
          </div>
        </div>

        <!-- =================================  right col  =================================   -->
        <div class="column is-two-fifths has-text-centered pl-1">
          <div class="has-background-white bxshadow2 py-50 px-30 h100">
            <label class="font16 font-600 clr_gray"
              >You could borrow up to</label
            >
            <h2 class="is-inline-block font-600 w-100 clr-pink pt-2">
              £481.92
            </h2>
            <p class="font12 clr_gray font-weight-normal">
              Based on Excellent credit rating you can borrow approximately
              £41,239. Representative APR: 5.91%, Fixed Rate(Per Annum): 3.04%,
              Cost of Credit: £3,761, Total Repayable: £45,000.
            </p>
            <a href="#" class="bg-pink cwhite is-inline-block mt-5 btn"
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
              <img
                src="../assets/img/car1.jpg"
                class="w-100"
                alt="Toyota C-HR"
              />
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
                <li class="font12 font-weight-bold">{{car_detail.model_year}}</li>
                <li class="font12 font-weight-bold">{{car_detail.fuel_type}}</li>
                <li class="font12 font-weight-bold">1.8L</li>
                <li class="font12 font-weight-bold">{{car_detail.transmission}}</li>
              </ul>
            </div>
          </div>
        </div>

        <!--  ============================= aside =============================  -->
        <div class="column is-3-desktop column is-6-tablet column is-12-mobile">
          <div class="card">
            <div class="postion-relative">
              <img
                src="../assets/img/car1.jpg"
                class="w-100"
                alt="Toyota C-HR"
              />
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
                <li class="font12 font-weight-bold">{{car_detail.model_year}}</li>
                <li class="font12 font-weight-bold">{{car_detail.fuel_type}}</li>
                <li class="font12 font-weight-bold">1.8L</li>
                <li class="font12 font-weight-bold">{{car_detail.transmission}}</li>
              </ul>
            </div>
          </div>
        </div>
        <!--  ============================= aside =============================  -->
        <div class="column is-3-desktop column is-6-tablet column is-12-mobile">
          <div class="card">
            <div class="postion-relative">
              <img
                src="../assets/img/car1.jpg"
                class="w-100"
                alt="Toyota C-HR"
              />
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
                <li class="font12 font-weight-bold">{{car_detail.model_year}}</li>
                <li class="font12 font-weight-bold">{{car_detail.fuel_type}}</li>
                <li class="font12 font-weight-bold">1.8L</li>
                <li class="font12 font-weight-bold">{{car_detail.transmission}}</li>
              </ul>
            </div>
          </div>
        </div>
        <!--  ============================= aside =============================  -->
        <div class="column is-3-desktop column is-6-tablet column is-12-mobile">
          <div class="card">
            <div class="postion-relative">
              <img
                src="../assets/img/car1.jpg"
                class="w-100"
                alt="Toyota C-HR"
              />
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
                <li class="font12 font-weight-bold">{{car_detail.model_year}}</li>
                <li class="font12 font-weight-bold">{{car_detail.fuel_type}}</li>
                <li class="font12 font-weight-bold">1.8L</li>
                <li class="font12 font-weight-bold">{{car_detail.transmission}}</li>
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
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import {HTTP} from '../http-common'

export default {
  name: "vehicle",
  components: { VueSlickCarousel },
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
    car_detail:[],
    specification:[],
     IsLoading: true
  }),

  methods: {
    GetCarById(car_id) {

        var postData = {
                car_id: car_id,
                loan: {
                        deposit: 9000,
                        mileage:25000,
                        product: 'new_car_pcp',
                        term:'48',
                },
                rating: "excellent"
      };
      HTTP.post("api/v2/cars/view/"+car_id,postData).then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          this.car_detail = response.data;
          this.specification =  this.car_detail.standard_option.split(",");
          this.IsLoading = false;
          console.log(this.specification)
        } else {
          this.IsLoading = false;
        }

      });
    },

 
  },

  mounted() {
       console.log(this.$route.params.car_id);
    this.GetCarById(this.$route.params.car_id);
  },
};
</script> 

