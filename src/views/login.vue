<template>

  <div class="login">
         <section class="login_page is-flex is-align-items-center">
            <div class="login_container">
                <div class="">
                   
                    <form class="login">
                         <!-- login header -->
                    <div class=" has-text-centered login_header ">
                        <img src="../assets/img/login_user.svg" alt="">
                        <p class="font16 font-600 clr_gray">Log in to your account</p>
                    </div>
                        <!--  ==========================  header ==========================    -->
                        <div class="login_form">
                        <div class="control">
                            <div class="w-100 px-0">
                                <input type="email" name="Email-Address"  placeholder="Email Address" />
                            </div>
                        </div>
                        <!--  ==========================  header ==========================    -->
                        <div class="control">
                            <div class="w-100 px-0">
                                <input type="password" name="password"  placeholder="password" />
                            </div>
                        </div>

                        <button type="button" class="bg-pink-dark cwhite is-inline-block w-100 margintop60 btn has-text-centered">Search</button>
                        <div class="has-text-centered">
                        <a href="#" class="clr_gray font12 pt-5 is-flex is-justify-content-center">Forgot your password?</a>
                        </div>
                    </div>
                    </form> 

                </div>
            
            </div>   
        
        </section>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {
  },
  data() {
    return {
      IsLoading: false,
    };
  },
};
</script>

