<template>
  <div class="blog_listing">
    <app-navigation></app-navigation>
    <div class="loder_main" v-if="IsLoading">
      <div class="loader_"></div>
    </div>
    <section class="finance_header is-flex is-align-items-center">
      <div class="columns">
        <div class="column is-full">
          <h1 class="cwhite">How it works</h1>
        </div>
      </div>
    </section>

    <!-- =================================Banner Section  End=================================   -->

    <section
      class="how_work_section is-flex is-align-items-center mt-0 fin_shadow position-relative"
    >
      <div class="columns">
        <div
          class="is-vcentered fix-width finance_tab column is-two-thirds-tablet"
        >
          <!-- column left  -->
          <div class="column">
            <div class="how_work_card is-align-items-center is-flex col-left">
              <!--  image left -->
              <img src="../assets/img/h1.jpg" class="w-100" alt="how it work" />

              <!--  content -->
              <div class="word_blog">
                <h3 class="common-heading clr_gray">
                  Pick your perfect car from the comfort of your home.
                </h3>
                <p class="font14 clr_gray pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>

          <!-- column right  -->
          <div class="column">
            <div class="how_work_card is-align-items-center is-flex col-right">
              <!--  content -->
              <div class="word_blog">
                <h3 class="common-heading clr_gray">
                  Get approved for finance in less time than it takes to make a
                  coffee.
                </h3>
                <p class="font14 clr_gray pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <!--  image left -->
              <img src="../assets/img/h2.jpg" class="w-100" alt="how it work" />
            </div>
          </div>

          <!-- column left  -->
          <div class="column">
            <div class="how_work_card is-align-items-center is-flex col-left">
              <!--  image left -->
              <img src="../assets/img/h1.jpg" class="w-100" alt="how it work" />

              <!--  content -->
              <div class="word_blog">
                <h3 class="common-heading clr_gray">
                  Pick your perfect car from the comfort of your home.
                </h3>
                <p class="font14 clr_gray pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>

          <!-- column right  -->
          <div class="column">
            <div class="how_work_card is-align-items-center is-flex col-right">
              <!--  content -->
              <div class="word_blog">
                <h3 class="common-heading clr_gray">
                  Get approved for finance in less time than it takes to make a
                  coffee.
                </h3>
                <p class="font14 clr_gray pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <!--  image left -->
              <img src="../assets/img/h1.jpg" class="w-100" alt="how it work" />
            </div>
          </div>
        </div>

        <SearchBox/>
      </div>
    </section>

    <!-- =================================Manufacturer-content Section  End=================================   -->

    <Disclaimer />

    <FooterNav />
  </div>
</template>

<script>
//import {HTTP} from '../http-common'
import AppNavigation from "@/components/AppNavigation";
import FooterNav from "@/components/FooterNav";
import Disclaimer from "@/components/disclaimer";
import SearchBox from "@/components/searchBox";

//import VueRouter from 'vue-router';

export default {
  name: "how-it-work",
  components: {
    AppNavigation,
    FooterNav,
    Disclaimer,
    SearchBox
  },
  data() {
    return {
      IsLoading: false,
    };
  },
};
</script>

