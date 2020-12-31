<template>
  <div class="home">
     <section class="slide-section is-d-flex is-align-items-center">
            <div class="columns is-vcentered">
                <div class="column is-two-fifths">
                    <h1 class="cwhite  ">
                    <span class="is-hidden-mobile">
                        The pain-free <br />
                        way to Finance <br />
                        and Buy a car!</span>
                        <span class="is-hidden-tablet ">
                            Find, finance & <br>free delivery.
                        </span>
                    </h1>


                    <h3 class="cwhite">
                         <span class="is-hidden-mobile">
                        BUY ONLINE, GET IT DELIVERED,<br />
                        LOVE IT OR RETURN IT
                    </span>
                    <span class="is-hidden-tablet ">The easiest way to buy a car online.<br> 14-day money back guarantee.</span>
                    </h3>
                    <a href="#" class="bg-pink-dark cwhite is-inline-block mt-4 btn is-hidden-mobile">Browse all 6,000 cars</a>
                </div>
                <div class="column is-three-fifths">
                    <div class="hero is-white form ml-auto">
                        <nav class="tabs is-boxed is-fullwidth is-large">
                            <div class="container">
                                <ul class="font16">
                                    <li class="tab is-active" onclick="openTab(event,'WebDev')"><a class="">FIND MY CAR</a></li>
                                    <li class="tab" onclick="openTab(event,'WebAud')"><a class="cwhite is-hidden-mobile">FIND MY FINANCE</a><a class="is-hidden-tablet">FIND MY FINANCE</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div id="WebDev" class="content-tab">
                            <div class="hero-foot">
                                <div class="container">
                                    <form method="post" action="stocklist.html">
                                        <!--  ===============================  nav ===============================  -->

                                        <!-- ========================  control ========================   -->
                                        <div class="field">
                                            <!-- ========================  control ========================   -->
                                            <div class="control">
                                                <div class="select w-100">
                                                    <select class="w-100 border-0 font16 clr_gray">
                                                        <option>Choose a make</option>
                                                        <option>With options</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- ========================  control ========================   -->
                                            <div class="control">
                                                <div class="select w-100">
                                                    <select class="w-100 border-0 font16 clr_gray">
                                                        <option>Choose a model</option>
                                                        <option>With options</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- ========================  control ========================   -->
                                            <div class="control">
                                                <div class="select w-100">
                                                    <select class="w-100 border-0 font16 clr_gray">
                                                        <option>Max monthly payments</option>
                                                        <option>With options</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- ========================  control ========================   -->

                                            <div class="field is-grouped px-5 pb-4">
                                                <div class="control w-100">
                                                    <button class="button w-100 font16 my-5 bg-pink-dark is-radiusless">Search now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div id="WebAud" class="content-tab" style="display: none;">
                            <div class="hero-foot">
                                <div class="container">
                                    <form method="post" action="">
                                        <!--  ===============================  nav ===============================  -->

                                        <!-- ========================  control ========================   -->
                                        <div class="field">
                                            <!-- ========================  control ========================   -->
                                            <div class="control">
                                                <div class="select w-100">
                                                    <select class="w-100 border-0 font16 clr_gray">
                                                        <option>Choose a make</option>
                                                        <option>With options</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- ========================  control ========================   -->
                                            <div class="control">
                                                <div class="select w-100">
                                                    <select class="w-100 border-0 font16 clr_gray">
                                                        <option>Choose a model</option>
                                                        <option>With options</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- ========================  control ========================   -->
                                            <div class="control">
                                                <div class="select w-100">
                                                    <select class="w-100 border-0 font16 clr_gray">
                                                        <option>Max monthly payments</option>
                                                        <option>With options</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- ========================  control ========================   -->

                                            <div class="field is-grouped px-5 pb-4">
                                                <div class="control w-100">
                                                    <button class="button w-100 font16 my-5 bg-pink-dark is-radiusless">Search now 2</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- =================================  section  =================================   -->
        <section class="work-progress is-d-flex is-align-items-center">
            <div class="columns">
                <div class="column is-full postion-relative">
                    <ul class="clr_gray is-flex-tablet has-text-centered pt-5">
                        <!-- =================================  section  =================================   -->
                        <li class="">
                            <span class="postion-relative w-100 is-inline-block">
                                <span class="rounded border-blue">
                                    <img src="../assets/img/icon1.png" class="" alt="icon1.png" />
                                </span>
                                <div class="steps postion-absolute">
                                    <span class="steps1"></span>
                                    <span class="steps2"></span>
                                    <span class="steps3"></span>
                                    <span class="steps4"></span>
                                </div>
                            </span>

                            <span class="heading font16 font-600">Find and finance the <br> perfect car online.</span>
                            <span class="font14 pt-2 is-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </li>
                        <!-- =================================  section  =================================   -->
                        <li class="">
                            <span class="postion-relative w-100 is-inline-block">
                                <span class="rounded border-blue">
                                    <img src="../assets/img/icon2.png" class="" alt="icon1.png" />
                                </span>
                                <div class="steps postion-absolute">
                                    <span class="steps1"></span>
                                    <span class="steps2"></span>
                                    <span class="steps3"></span>
                                    <span class="steps4"></span>
                                </div>
                            </span>

                            <span class="heading  font16 font-600">Delivere to your door<br> free of charge.</span>
                            <span class="font14 pt-2 is-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </li>
                        <!-- =================================  section  =================================   -->
                        <li class="">
                            <span class="postion-relative w-100 is-inline-block">
                                <span class="rounded border-blue">
                                    <img src="../assets/img/icon3.png" class="" alt="icon1.png" />
                                </span>
                            </span>

                            <span class="heading font16 font-600">Love it. Keep it.<br>Or return it.</span>
                            <span class="font14 pt-2 is-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="columns has-text-centered our_Ser">
                <!-- =================================  section  =================================   -->
                <div class="column is-one-quarter is-full-mobile">
                    <img src="../assets/img/1.jpg" class="image is-fullwidth" alt=" " />
                    <p class="pt-5 font-weight-bold font-600">Browse City Cars</p>
                </div>
                <!-- =================================  section  =================================   -->
                <div class="column is-one-quarter is-full-mobile">
                    <img src="../assets/img/1.jpg" class="image is-fullwidth" alt=" " />
                    <p class="pt-5 font-weight-bold font-600">Browse Family Cars</p>
                </div>
                <!-- =================================  section  =================================   -->
                <div class="column is-one-quarter is-full-mobile">
                    <img src="../assets/img/1.jpg" class="image is-fullwidth" alt=" " />
                    <p class="pt-5 font-weight-bold font-600">Browse Executive Cars</p>
                </div>
                <!-- =================================  section  =================================   -->
                <div class="column is-one-quarter is-full-mobile">
                    <img src="../assets/img/1.jpg" class="image is-fullwidth" alt=" " />
                    <p class="pt-5 font-weight-bold font-600">Browse Electric/Hybrid Cars</p>
                </div>
            </div>
        </section>

        <!-- =================================  section  =================================   -->
        <section class="serives_section">
            <!-- =================================  section  =================================   -->
            <div class="columns is-vcentered ser_col">
                <div class="column is-full">
                    <div class="is-flex is-align-items-center">
                    <div class="postion-relative is-inline-block mx60">
                        <img src="../assets/img/01.jpg" class="shadow" alt=" " />
                        <div class="overlay is-hidden-mobile">
                            <img src="../assets/img/overlay1.png" class="" alt=" " />
                        </div>
                    </div>
               
                    <div class="inner-block">
                        <p class="font-weight-bold font16 font-600">Poor credit? We have options for you.</p>
                        <p class="font14 pt-4 is-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" class="bg-pink cwhite is-inline-block mt-5 btn">Learn more</a>
                    </div>
                    </div>
                </div>
            </div>
           

            <!-- =================================  section  =================================   -->
            <div class="columns is-vcentered column-left ser_col">
                  <div class="column is-full">
                    <div class="is-flex is-align-items-center">
                     <div class="inner-block">
                        <p class="font-weight-bold font16 font-600">Nationwide wide delivery... FREE!</p>
                        <p class="font14 pt-4 is-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" class="bg-pink cwhite is-inline-block mt-5 btn">See how much you can borrow</a>
                    </div>
                    <div class="postion-relative is-inline-block mx60">
                        <img src="../assets/img/01.jpg" class="shadow" alt=" " />
                        <div class="overlay is-hidden-mobile">
                            <img src="../assets/img/overlay1.png" class="" alt=" " />
                        </div>
                    </div>
               
                   
                    </div>
                </div>
            </div>

            <!-- =================================  section  =================================   -->
          <div class="columns is-vcentered ser_col">
                    <div class="is-flex is-align-items-center">
                    <div class="postion-relative is-inline-block mx60">
                        <img src="../assets/img/01.jpg" class="shadow" alt=" " />
                        <div class="overlay is-hidden-mobile">
                            <img src="../assets/img/overlay1.png" class="" alt=" " />
                        </div>
                    </div>
               
                    <div class="inner-block">
                        <p class="font-weight-bold font16 font-600">14-day money back guarantee.</p>
                        <p class="font14 pt-4 is-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" class="bg-pink cwhite is-inline-block mt-5 btn">Browse cars</a>
                    </div>
                    </div>
          </div>
        </section>
        <!--
=================================  section  ================================= 
 -->
        <section class="client_section">
            <div class="columns cl_col mb-0 pb-0 w-100 is-justify-content-center">
                <div class="inner_container is-flex-tablet is-align-items-center">
                    <div class="column is-one-third-tablet  is-full-mobile">
                        <div class="img_bloc">
                            <img src="../assets/img/logo1.png" alt="" class="is-fullwidth" />
                        </div>
                    </div>
                    <div class="column is-one-third-desktop  is-full-mobile">
                        <div class="img_bloc">
                            <img src="../assets/img/logo2.png" alt="" class="is-fullwidth" />
                        </div>
                    </div>
                    <div class="column is-one-third-desktop  is-full-mobile">
                        <div class="img_bloc">
                            <img src="../assets/img/logo3.png" alt="" class="is-fullwidth" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_4">
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
  name: 'home',
  props: {
    msg: String
  }
}

