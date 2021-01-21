<template>
  <div class="column is-one-third">
          <div class="fin_right position-absolute">
            <div
              class="has-background-white postion-sticky has-text-center p-0"
            >
              <div class="card-inner card_inner_blog">
                <div
                  class="finance_header has-text-centered is-flex is-align-items-center is-justify-content-center"
                >
                  <img
                    src="../assets/img/logo_ftr.svg"
                    alt=""
                    class="img-full-width"
                  />
                </div>
                <div class="o-hidden">
                  <div class="blog_fist position-relative">
                    <!-- =================================  section  =================================   -->
                    <div class="control">
                      <div class="select w-100">
                        <select class="w-100 border-0 font16 clr_gray"   v-model="make">
                            <option value="">Choose a make</option>
                                    <option v-for="(option, name) in filters_make" :value="name" :key="option">{{ option }}</option>

                        </select>
                      </div>
                    </div>
                    <!-- =================================  section  =================================   -->
                    <div class="control">
                      <div class="select w-100">
                        <select class="w-100 border-0 font16 clr_gray"  v-model="modal">
                            <option  value="">Choose a model</option>
                            <option  value="any">Any</option>
                        </select>
                      </div>
                    </div>
                    <!-- =================================  section  =================================   -->
                    <div class="control">
                      <div class="select w-100">
                        <select class="w-100 border-0 font16 clr_gray"   v-model="payment">
                            <option value="monthly_payment">Max monthly payments</option>
                            <option value="price">Price</option>
                        </select>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="bg-pink-dark cwhite is-inline-block w-100 margintop60 btn has-text-centered"
                       @click="search($event)" >Search</a
                    >
                  </div>
                  <ul class="font16 font-600 fnlisting">
                    <li><a href="#" class="clr_gray">How it works</a></li>
                    <li><a href="#" class="clr_gray">Help and advice</a></li>
                    <li><a href="#" class="clr_gray">Finance Calculator</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import {HTTP} from '../http-common'

export default {
  name: 'SearchBox',
  components: {
    },
  data () {
    return {
      msg: 'Welcome to my Vuex Store',
      filters_make:[],
      modals_filter:[],
      IsLoading:true,
      make:'',
      modal:'',
      payment:'monthly_payment'
      
    }
  },


   methods: {
     
        GetFiltersettings(){
            
               HTTP.get('api/v2/app/settings')
                .then(response => {
                    if(response.status == 200){
                            this.filters_make = response.data.fields.stocks.makes;
                            this.modals_filter = response.data.fields.stocks.makes;
                            this.IsLoading = false;
                            
                    }else{  
                        this.IsLoading = false;
                        
                    }
                    
                // commit('SET_CARS', response.data)
                })
        },

        


        search(){
            // if(this.make && this.modal && this.payment){
                   this.$router.push('/cars?make='+this.make+'&modal='+this.modal+'&payment='+this.payment) 
           
        }
    },
 
  mounted() {
        this.GetFiltersettings();
  }
  
}
</script>

