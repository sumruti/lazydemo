<template>

  <div class="blog_listing">
       <app-navigation></app-navigation>
       <div class="loder_main"  v-if="IsLoading">
                <div class="loader_"></div>
       </div> 
         <section class="finance_header is-flex is-align-items-center">
            <div class="columns">
                <div class="column is-full">
                    <h1 class="cwhite">Help and advice</h1>
                </div>
            </div>
        </section>

        <!-- =================================Banner Section  End=================================   -->

        <section class="blog_cotnainer is-flex is-align-items-center mt-0 fin_shadow position-relative">
            <div class="columns">
                <div class="is-vcentered fix-width finance_tab column two-thirds-tablet">
                    <div class="finance_content_wrapper">
                        <h3 class="common-heading clr_gray">Advice and topics</h3>
                        <p class="font18 clr_gray pt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        </p>
                        <p class="font14 clr_gray pt-4">
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        </p>
                    </div>
                    <!--  =================================  finc_card_wrapper  =================================  -->
                    <div class="finc_card_wrapper">
                        <div class="columns">
                            <!--  =================================  finc_card columns  =================================  -->
                            <div class="column is-half-tablet is-one-quarter-widescreen has-text-centered fin_box">
                                <div class="finc_card">
                                    <img src="../assets/img/help_img.svg" alt="help_img" />
                                    <p class="font14 font-600 clr_gray">Lorem ipsum dolor sit amet</p>
                                    <p class="font14 clr_gray disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <!--  =================================  finc_card columns  =================================  -->
                            <div class="column is-half-tablet is-one-quarter-widescreen has-text-centered fin_box">
                                <div class="finc_card">
                                    <img src="../assets/img/help_img.svg" alt="help_img" />
                                    <p class="font14 font-600 clr_gray">Lorem ipsum dolor sit amet</p>
                                    <p class="font14 clr_gray disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <!--  =================================  finc_card columns  =================================  -->
                            <div class="column is-half-tablet is-one-quarter-widescreen has-text-centered fin_box">
                                <div class="finc_card">
                                    <img src="../assets/img/help_img.svg" alt="help_img" />
                                    <p class="font14 font-600 clr_gray">Lorem ipsum dolor sit amet</p>
                                    <p class="font14 clr_gray disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <!--  =================================  finc_card columns  =================================  -->
                            <div class="column is-half-tablet is-one-quarter-widescreen has-text-centered fin_box">
                                <div class="finc_card">
                                    <img src="../assets/img/help_img.svg" alt="help_img" />
                                    <p class="font14 font-600 clr_gray">Lorem ipsum dolor sit amet</p>
                                    <p class="font14 clr_gray disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <!--  =================================  finc_card columns  =================================  -->
                            <div class="column is-half-tablet is-one-quarter-widescreen has-text-centered fin_box">
                                <div class="finc_card">
                                    <img src="../assets/img/help_img.svg" alt="help_img" />
                                    <p class="font14 font-600 clr_gray">Lorem ipsum dolor sit amet</p>
                                    <p class="font14 clr_gray disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <!--  =================================  finc_card columns  =================================  -->
                            <div class="column is-half-tablet is-one-quarter-widescreen has-text-centered fin_box">
                                <div class="finc_card">
                                    <img src="../assets/img/help_img.svg" alt="help_img" />
                                    <p class="font14 font-600 clr_gray">Lorem ipsum dolor sit amet</p>
                                    <p class="font14 clr_gray disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <!--  =================================  finc_card columns  =================================  -->
                            <div class="column is-half-tablet is-one-quarter-widescreen has-text-centered fin_box">
                                <div class="finc_card">
                                    <img src="../assets/img/help_img.svg" alt="help_img" />
                                    <p class="font14 font-600 clr_gray">Lorem ipsum dolor sit amet</p>
                                    <p class="font14 clr_gray disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <!--  =================================  finc_card columns  =================================  -->
                            <div class="column is-half-tablet is-one-quarter-widescreen has-text-centered fin_box">
                                <div class="finc_card">
                                    <img src="../assets/img/help_img.svg" alt="help_img" />
                                    <p class="font14 font-600 clr_gray">Lorem ipsum dolor sit amet</p>
                                    <p class="font14 clr_gray disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="finance_content_wrapper">
                        <h3 class="common-heading clr_gray">Frequently asked questions</h3>
                        <p class="font14 clr_gray pt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        </p>
                        <p class="font14 clr_gray pt-4">
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        </p>
                    </div>

                    <ul class="help_tabs">

                         <li v-for="(item, index) in faq" :key="index">
                            <a to="#" @click="getQuite(item)">
                                {{item}}&nbsp; <span><i class="fas fa-arrow-right"></i></span>
                            </a>
                        </li>
                    </ul>
                  <div v-html="content" id="div_html" ></div>

                </div>

                <div class="column is-one-third">
                    <div class="fin_right position-absolute">
                        <div class="has-background-white has-text-center p-0">
                            <div class="card-inner card_inner_blog">
                                <div class="finance_header has-text-centered is-flex is-align-items-center is-justify-content-center">
                                    <img src="../assets/img/logo_ftr.svg" alt="" class="img-full-width" />
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
                                    <a href="#" class="bg-pink-dark cwhite is-inline-block w-100 margintop60 btn is-hidden-mobile has-text-centered">Search</a>
                                </div>
                            </div>
                        </div>

                        <ul class="font16 font-600 fnlisting">
                            <li><a href="#" class="clr_gray">How it works</a></li>
                            <li><a href="#" class="clr_gray">Help and advice</a></li>
                            <li><a href="#" class="clr_gray">Finance Calculator</a></li>
                        </ul>
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
import axios from 'axios';


export default {
  name: "help-advise",
  components: {
    AppNavigation,
    FooterNav,
  },
  data() {
    return {
      IsLoading: true,
      content:'',
      faq:[]
    };
  },

   methods: {
     
        GetFiltersettings(){
            
               axios.get('https://content.fairsquare.com/wp-json/wp/v2/pages?slug=faqs&fields=id,title.rendered,link,content.rendered,slug,acf,yoast')
                .then(async response => {
                   
                    if(response.status == 200){
                            
                                this.content = await response.data[0].content.rendered;



                                setTimeout(async () => {
                                        this.faq= await this.stringBuilder(document.querySelector('.s-article__pink-list'));
                                        document.getElementById("div_html").style.display = "none";
                                        this.IsLoading = false;
                                },3000);

                                     
                                

                            
                           
                           
                            
                    }else{  
                        this.IsLoading = false;
                        
                    }
                    
                })
        },

        stringBuilder(ul, prefix) {
            prefix = prefix || '';
             console.log(ul)
            var arr = Array.prototype.slice.call(ul.children);
           
            var stringArr = arr.map(function (li) {
                if (li.children.length > 1) {
                   // return stringBuilder(li.querySelector('ul'), prefix + li.querySelector('a').textContent + '/');
                } else {
                    return prefix + li.querySelector('a').textContent;
                }
            });
            return [].concat.apply([], stringArr);
        },

        getQuite(item){

                console.log(item.split(' ').join('-'))
                this.$router.push('/help-and-advice-content/'+item.split(' ').join('-')) 
        }

        


    },
 
  mounted() {
        this.GetFiltersettings();
        

  }
};
</script>

