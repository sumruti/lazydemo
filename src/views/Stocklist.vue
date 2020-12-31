<template>
  <div class="stocklist">
    <div class="full-widht bg-gray pt-4 collapsible">
         <a href="#" class="show-collapsed">
            <h2>Change search criteria</h2>
         </a>
         <div class="columns">
            <!--  ============================= aside =============================  -->
            <div class="menu column is-one-quarter ">
               <!-- Content Wrapper -->
               <div class="side_bar_outer collapsed">
                  <!--  ============================= radio =============================  -->
                  <h5 class="menu-label font-600 clr_gray font16 has-text-left postion-relative mb-0 is-capitalized">Your finance details</h5>
                  <div class="aside_wrapper pt-5">
                     <h6 class="is-capitalized mb-3 header-inner font-600">Finance type</h6>
                     <form action="#" class="is-flex is-justify-content-space-between">
                        <div class="columns is-variable bd-klmn-columns is-3">
                           <div class="input-group column is-6 pt-0 font14">
                              <input type="radio" id="HP" name="rsvp" checked />
                              <label for="HP">HP</label>
                           </div>
                           <div class="input-group column is-6 pt-0 font14">
                              <input type="radio" id="PCP" name="rsvp" />
                              <label for="PCP">PCP</label>
                           </div>
                        </div>
                     </form>
                  </div>
                  <!--  ============================= radio =============================  -->
                  <div class="aside_wrapper pt-5">
                     <h6 class="is-capitalized mb-3 header-inner font-600">Search by</h6>
                     <div class="is-flex is-justify-content-space-between">
                        <div class="columns is-variable bd-klmn-columns is-3">
                           <div class="input-group column is-6 pt-0 font14">
                              <input type="radio" id="monthly_budget" name="rsvp" checked />
                              <label for="monthly_budget">Monthly budget</label>
                           </div>
                           <div class="input-group column is-6 pt-0">
                              <input type="radio" id="Car-price" name="rsvp" />
                              <label for="Car-price">Car price</label>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- =================================  section  =================================   -->
                  <div class="range-slider pt-5">
                     <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                        <label class="">Minimum</label>
                        <label class="range-slider__value">£1,000</label>
                     </div>
                     <input class="range-slider__range" type="range" value="100" min="0" max="1000">
                  </div>
                  <!-- =================================  section  =================================   -->
                  <div class="range-slider pt-5">
                     <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                        <label class="">Maximum</label>
                        <label class="range-slider__value">£15,000</label>
                     </div>
                     <input class="range-slider__range" type="range" value="1000" min="0" max="15000">
                  </div>
                  <!-- =================================  section  =================================   -->
                  <div class="range-slider pt-5">
                     <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                        <label class="">Term</label>
                        <label class="range-slider__value">32 months</label>
                     </div>
                     <input class="range-slider__range" type="range" value="5" min="0" max="12">
                  </div>
                  <!-- =================================  section  =================================   -->
                  <div class="range-slider pt-5">
                     <div class="font12 range_value font-weight-bold clr_gray is-justify-content-space-between is-flex">
                        <label class="">Mileage</label>
                        <label class="range-slider__value">8,000 miles</label>
                     </div>
                     <input class="range-slider__range" type="range" value="1000" min="0" max="8000">
                  </div>
                  <hr />
                  <!--  ============================= radio =============================  -->
                  <h5 class="menu-label font-weight-bold font16 has-text-left postion-relative mb-0 is-capitalized">What are you looking for?</h5>
                  <div class="is-flex is-justify-content-space-between">
                     <div class="columns is-variable bd-klmn-columns is-3 pt-5">
                        <div class="input-group column is-6 pt-0 font14">
                           <input type="radio" id="New" name="New" />
                           <label for="New">New</label>
                        </div>
                        <div class="input-group column is-6 pt-0 font14">
                           <input type="radio" id="Used" name="rsvp" />
                           <label for="Used">Used</label>
                        </div>
                     </div>
                  </div>
                  <div class="control">
                     <div class="select w-100">
                        <select class="w-100 font14 clr_gray pr-0">
                           <option>Make</option>
                           <option>With options</option>
                        </select>
                     </div>
                  </div>
                  <div class="control">
                     <div class="select w-100">
                        <select class="w-100 font14 clr_gray pr-0">
                           <option>Model</option>
                           <option>With options</option>
                        </select>
                     </div>
                  </div>
                  <div class="control">
                     <div class="select w-100">
                        <select class="w-100 font14 clr_gray pr-0">
                           <option>Mileage</option>
                           <option>With options</option>
                        </select>
                     </div>
                  </div>
                  <div class="control">
                     <div class="select w-100">
                        <select class="w-100 font14 clr_gray pr-0">
                           <option>Age</option>
                           <option>With options</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
            <div class="column column is-three-quarters main_content">
               <div class="right_header">
                  <div class="columns is-flex is-justify-content-space-between is-align-items-center">
                     <div class="column">
                        <h6 class="clr_gray font-600">We have found 340 cars for you...</h6>
                     </div>
                     <div class="column">
                        <div class="is-flex is-align-items-center is-justify-content-flex-end">
                           <div class="value cwhite bg-pink-dark has-text-centered mr-3"><i class="fas fa-heart"></i> 2</div>
                           <div class="control is-flex is-align-items-center">
                              <h6 class="clr_gray font12">Sort by:</h6>
                              <div class="select">
                                 <select class="w-100 font12 font-weight-bold clr_gray pr-4 op7 border-0 font16 clr_gray">
                                    <option>Lowest price</option>
                                    <option>Lowest price</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="columns">
                  <!--  ============================= aside =============================  -->
                  <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                     <div class="card">
                        <div class="postion-relative">
                           <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                           <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                           <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                        </div>
                        <div class="card-footer">
                           <ul class="is-flex is-justify-content-space-between w-100">
                              <li class="font12 font-600">12.9k</li>
                              <li class="font12 font-600">2018</li>
                              <li class="font12 font-600">Hybrid</li>
                              <li class="font12 font-600">1.8L</li>
                              <li class="font12 font-600">Automatic</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <!--  ============================= aside =============================  -->
                  <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                     <div class="card">
                        <div class="postion-relative">
                           <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                           <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                           <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                        </div>
                        <div class="card-footer">
                           <ul class="is-flex is-justify-content-space-between w-100">
                              <li class="font12 font-600">12.9k</li>
                              <li class="font12 font-600">2018</li>
                              <li class="font12 font-600">Hybrid</li>
                              <li class="font12 font-600">1.8L</li>
                              <li class="font12 font-600">Automatic</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <!--  ============================= aside =============================  -->
                  <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                     <div class="card">
                        <div class="postion-relative">
                           <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                           <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                           <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                        </div>
                        <div class="card-footer">
                           <ul class="is-flex is-justify-content-space-between w-100">
                              <li class="font12 font-600">12.9k</li>
                              <li class="font12 font-600">2018</li>
                              <li class="font12 font-600">Hybrid</li>
                              <li class="font12 font-600">1.8L</li>
                              <li class="font12 font-600">Automatic</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <!--  ============================= aside =============================  -->
                  <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                     <div class="card">
                        <div class="postion-relative">
                           <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                           <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                           <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                        </div>
                        <div class="card-footer">
                           <ul class="is-flex is-justify-content-space-between w-100">
                              <li class="font12 font-600">12.9k</li>
                              <li class="font12 font-600">2018</li>
                              <li class="font12 font-600">Hybrid</li>
                              <li class="font12 font-600">1.8L</li>
                              <li class="font12 font-600">Automatic</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <!--  ============================= aside =============================  -->
                  <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                     <div class="card">
                        <div class="postion-relative">
                           <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                           <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                           <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                        </div>
                        <div class="card-footer">
                           <ul class="is-flex is-justify-content-space-between w-100">
                              <li class="font12 font-600">12.9k</li>
                              <li class="font12 font-600">2018</li>
                              <li class="font12 font-600">Hybrid</li>
                              <li class="font12 font-600">1.8L</li>
                              <li class="font12 font-600">Automatic</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <!--  ============================= aside =============================  -->
                  <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                     <div class="card">
                        <div class="postion-relative">
                           <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                           <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                           <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                        </div>
                        <div class="card-footer">
                           <ul class="is-flex is-justify-content-space-between w-100">
                              <li class="font12 font-600">12.9k</li>
                              <li class="font12 font-600">2018</li>
                              <li class="font12 font-600">Hybrid</li>
                              <li class="font12 font-600">1.8L</li>
                              <li class="font12 font-600">Automatic</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- =================================  section  =================================  -->
               <div class="benifits_section gradiant is-desktop-flex is-align-items-center mt-60">
                  <div class="columns is-vcentered benifits_inner">
                     <div class="container_inner is-flex is-align-items-center w-100">
                        <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                           <div class="card">
                              <div class="postion-relative">
                                 <img src="../assets/img/car1.jpg" class="w-100" alt="toyota" />
                                 <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
                              </div>
                              <div class="card_content">
                                 <div class="is-flex is-align-items-center is-justify-content-space-between">
                                    <h5 class="menu-label font-weight-bold font16 has-text-left postion-relative mb-0 is-capitalized">Toyota C-HR</h5>
                                    <img src="../assets/img/icon5.png" alt="heart" />
                                 </div>
                                 <p class="font14 clr_gray pt-1 pb-1">
                                    1.8 Hybrid Dynamic 5dr CVT<br /> Your price: £21,074.25
                                 </p>
                                 <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                              </div>
                              <div class="card-footer">
                                 <ul class="is-flex is-justify-content-space-between w-100">
                                    <li class="font12 font-600">12.9k</li>
                                    <li class="font12 font-600">2018</li>
                                    <li class="font12 font-600">Hybrid</li>
                                    <li class="font12 font-600">1.8L</li>
                                    <li class="font12 font-600">Automatic</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="column is-8-desktop is-6-tablet cwhite is-flex-direction-column is-flex is-align-items-center">
                           <h3 class="font-600">The FairSquare Way</h3>
                           <ul class="font14 pt-4">
                              <li><i class="fas fa-check"></i> Over 6,000 cars to choose from</li>
                              <li><i class="fas fa-check"></i> Competitive finance - no matter your credit</li>
                              <li><i class="fas fa-check"></i> Free delivery to your door</li>
                              <li><i class="fas fa-check"></i> 14-day money back guarantee</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- =================================  section start =================================  -->
               <div class="listing">
                  <div class="columns">
                     <!--  ============================= aside =============================  -->
                     <div class="container_inner is-flex is-align-items-center is-flex-wrap-wrap">
                        <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                           <div class="card">
                              <div class="postion-relative">
                                 <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                                 <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                                 <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                              </div>
                              <div class="card-footer">
                                 <ul class="is-flex is-justify-content-space-between w-100">
                                    <li class="font12 font-600">12.9k</li>
                                    <li class="font12 font-600">2018</li>
                                    <li class="font12 font-600">Hybrid</li>
                                    <li class="font12 font-600">1.8L</li>
                                    <li class="font12 font-600">Automatic</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <!--  ============================= aside =============================  -->
                        <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                           <div class="card">
                              <div class="postion-relative">
                                 <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                                 <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                                 <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                              </div>
                              <div class="card-footer">
                                 <ul class="is-flex is-justify-content-space-between w-100">
                                    <li class="font12 font-600">12.9k</li>
                                    <li class="font12 font-600">2018</li>
                                    <li class="font12 font-600">Hybrid</li>
                                    <li class="font12 font-600">1.8L</li>
                                    <li class="font12 font-600">Automatic</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <!--  ============================= aside =============================  -->
                        <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                           <div class="card">
                              <div class="postion-relative">
                                 <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                                 <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                                 <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                              </div>
                              <div class="card-footer">
                                 <ul class="is-flex is-justify-content-space-between w-100">
                                    <li class="font12 font-600">12.9k</li>
                                    <li class="font12 font-600">2018</li>
                                    <li class="font12 font-600">Hybrid</li>
                                    <li class="font12 font-600">1.8L</li>
                                    <li class="font12 font-600">Automatic</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <!--  ============================= aside =============================  -->
                        <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                           <div class="card">
                              <div class="postion-relative">
                                 <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                                 <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                                 <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                              </div>
                              <div class="card-footer">
                                 <ul class="is-flex is-justify-content-space-between w-100">
                                    <li class="font12 font-600">12.9k</li>
                                    <li class="font12 font-600">2018</li>
                                    <li class="font12 font-600">Hybrid</li>
                                    <li class="font12 font-600">1.8L</li>
                                    <li class="font12 font-600">Automatic</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <!--  ============================= aside =============================  -->
                        <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                           <div class="card">
                              <div class="postion-relative">
                                 <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                                 <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                                 <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                              </div>
                              <div class="card-footer">
                                 <ul class="is-flex is-justify-content-space-between w-100">
                                    <li class="font12 font-600">12.9k</li>
                                    <li class="font12 font-600">2018</li>
                                    <li class="font12 font-600">Hybrid</li>
                                    <li class="font12 font-600">1.8L</li>
                                    <li class="font12 font-600">Automatic</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <!--  ============================= aside =============================  -->
                        <div class="column is-4-desktop column is-6-tablet column is-12-mobile">
                           <div class="card">
                              <div class="postion-relative">
                                 <img src="../assets/img/car1.jpg" class="w-100" alt="Toyota C-HR" />
                                 <h5 class="cwhite postion-absolute overlay-text font14 font-600">2 Year Warranty</h5>
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
                                 <h2 class="is-inline-block font-600">£481.92 <span class="clr_gray font12 is-block has-text-right">Per Month</span></h2>
                              </div>
                              <div class="card-footer">
                                 <ul class="is-flex is-justify-content-space-between w-100">
                                    <li class="font12 font-600">12.9k</li>
                                    <li class="font12 font-600">2018</li>
                                    <li class="font12 font-600">Hybrid</li>
                                    <li class="font12 font-600">1.8L</li>
                                    <li class="font12 font-600">Automatic</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="column is-11 stocklist_content is-flex is-align-items-center m-auto is-12-mobile">
                           <img src="../assets/img/search.svg"  class="pr-5 " alt="Search" />
                           <p class="pt-6 pb-5">
                              <strong class="font-600">Can't find what you are looking for? </strong>We are connected to dealerships throughout the UK. Call the team on <a href="#">01234 567 890</a> and we can try to source exactly what you are looking for in
                              no time at all.
                           </p>
                        </div>
                        <div class="column is-12 is-justify-content-space-between font16 is-flex stocklist_btn has-text-centered is-12-mobile">
                           <a href="#" class="btn cwhite bg-gray-light">Previous page</a>
                           <a href="#" class="btn cwhite bg-pink">Next page</a>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- =================================  section end =================================  -->
               <!-- =================================  section  =================================   -->
               <section class="work-progress stocklist_prg is-d-flex is-align-items-center">
                  <div class="columns">
                     <div class="column is-full postion-relative">
                        <div class="column container_inner is-flex is-align-items-center is-flex-wrap-wrap">
                           <ul class="clr_gray is-flex-desktop has-text-centered pt-5 w-100">
                              <!-- =================================  section  =================================   -->
                              <li class="w-100 px-2">
                                 <span class="postion-relative w-100 is-inline-block">
                                 <span class="rounded border-blue">
                                 <img src="../assets/img/icon1.png" class="" alt="icon1.png" />
                                 </span>
                                 <span class="steps postion-absolute">
                                 <span class="steps1"></span>
                                 <span class="steps2"></span>
                                 <span class="steps3"></span>
                                 <span class="steps4"></span>
                                 </span>
                                 </span>
                                 <span class="heading font-600 font16">
                                 Find and finance the<br />
                                 perfect car online.
                                 </span>
                              </li>
                              <!-- =================================  section  =================================   -->
                              <li class="w-100 px-2">
                                 <span class="postion-relative w-100 is-inline-block">
                                 <span class="rounded border-blue">
                                 <img src="../assets/img/icon2.png" class="" alt="icon1.png" />
                                 </span>
                                 <span class="steps postion-absolute">
                                 <span class="steps1"></span>
                                 <span class="steps2"></span>
                                 <span class="steps3"></span>
                                 <span class="steps4"></span>
                                 </span>
                                 </span>
                                 <span class="heading font-600 font16">
                                 Delivered to your door<br />
                                 free of charge.
                                 </span>
                              </li>
                              <!-- =================================  section  =================================   -->
                              <li class="w-100 px-2">
                                 <span class="postion-relative w-100 is-inline-block">
                                 <span class="rounded border-blue">
                                 <img src="../assets/img/icon3.png" class="" alt="icon1.png" />
                                 </span>
                                 </span>
                                 <span class="heading font-600 font16">
                                 Love it. Keep it.<br />
                                 return it.
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- =================================  section  =================================   -->
               <section class="stocklist_ser">
                  <!-- =================================  ser_col  =================================   -->
                  <div class="columns is-vcentered ser_col">
                     <div class="column is-full p-0">
                        <div class="is-flex is-align-items-center">
                           <div class="postion-relative is-inline-block mx60">
                              <img src="../assets/img/01.jpg" class="shadow" alt=" ">
                              <div class="overlay is-hidden-mobile">
                                 <img src="../assets/img/overlay1.png" class="" alt=" ">
                              </div>
                           </div>
                           <div class="inner-block">
                              <div class="content_block">
                                 <p class="font-weight-bold font16 font-600">Poor credit? We have options for you.</p>
                                 <p class="font14 pt-4 is-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                 <a href="#" class="bg-pink cwhite is-inline-block mt-5 btn">Learn more</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- =================================  section  =================================   -->
            </div>
         </div>
      </div>
      <!-- =================================  section  =================================  -->
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



export default {
    
  name: 'stocklist',
  props: {
    msg: String
  }
}

