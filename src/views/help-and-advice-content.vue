<template>

  <div class="blog_listing">
       <app-navigation></app-navigation>
       <div class="loder_main"  v-if="IsLoading">
                <div class="loader_"></div>
       </div> 
        <section class="finance_header is-flex is-align-items-center">
         <div class="columns">
            <div class="column is-full">
               <h1 class="cwhite">{{title}}</h1>
            </div>
         </div>
      </section>
      <!-- =================================Banner Section  End=================================   -->
      <section class="blog_cotnainer is-flex is-align-items-center mt-0 fin_shadow position-relative">
         <div class="columns">
            <div class="is-vcentered fix-width help_tab column two-thirds-tablet">
               <div class="help_content_wrapper">
                  <div class="back_pager">
                     <router-link to="/help-advise" class="clr_gray font12 font-600 is-inline-block w-100 pb-5 pt-4"><span class="mr-3"><i class="fas fa-arrow-left"></i></span> Back to help and advice</router-link>
                  </div>
                  <div class="margintop60 pb-4">
                     <h3 class="common-heading clr_gray">{{title}}</h3>
                    <!-- <p class="font18 clr_gray pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                     </p>-->
                     <div class="font14 clr_gray">
                       <div v-html="content_html" id="div_html_1" ></div>
                     </div>
                  </div>
               </div>
               <!--  =================================  finc_card_wrapper  =================================  -->
               <div class="finc_card_wrapper">
                  <h3 class="common-heading clr_gray">Other topics</h3>
                  <div class="columns">
                     <!--  =================================  finc_card columns  =================================  -->
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

      <div v-html="content" id="div_html" ></div>
 
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
  name: "help-and-advice-content",
  components: {
    AppNavigation,
    FooterNav,
  },
  data() {
    return {
      IsLoading: true,
      content:'',
      title:'',
      content_html:''
    };
  },

  methods: {
     
        GetFiltersettings(){
            
               axios.get('https://content.fairsquare.com/wp-json/wp/v2/pages?slug=faqs&fields=id,title.rendered,link,content.rendered,slug,acf,yoast')
                .then(async response => {
                   
                    if(response.status == 200){
                            
                                this.content = await response.data[0].content.rendered;

                                  




                                setTimeout(async () => {
                                       // this.faq= await this.stringBuilder(document.querySelector('.s-article__pink-list'));
                                       var content_html = await document.getElementById('fair_'+this.$route.params.id);
                                       this.content_html = content_html.innerHTML;
                                       this.title = content_html.getElementsByTagName('h2')[0].innerText;
                                       document.getElementById("div_html").style.display = "none";
                                        
                                        this.IsLoading = false;
                                },3000);

                                     
                                

                            
                           
                           
                            
                    }else{  
                        this.IsLoading = false;
                        
                    }
                    
                })
        },

       

        


    },
 
  mounted() {
        this.GetFiltersettings();
       
        window.scrollTo(0,0);
        

  }
};
</script>

