<template>
    <header class="mb-0 has-background-white w-100">
            <div class="columns mb-0">
                <div class="column is-full">
                    <nav class="navbar py-2" aria-label="main navigation">
                        <div class="navbar-brand column is-one-fifth pl-0 is-hidden-mobile">
                            <router-link class="navbar-item pl-0 is-hidden-mobile" to="/">
                                <img src="../assets/img/logo_1.png" alt="" />
                            </router-link>
                        </div>
                        <div class="is-hidden-desktop is-flex is-align-items-center is-justify-content-space-between">
                            <a class="mobile-icon is-hidden-desktop" href="/"> FAIR<span>SQUARE</span> </a>
                            <div class="is-flex">
                                <a class="call is-hidden-desktop"><i class="fas fa-phone-alt"></i></a>
                                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>
                        <div id="navbarBasicExample" class="navbar-menu column is-four-fifths pr-0">
                            <div class="navbar-end">

                                <router-link :class="activeIndex == '/cars?f=used' ? 'navbar-item active': 'navbar-item'"  to="/cars?f=used"  > Used Cars </router-link>

                                
                                <router-link :class="activeIndex == '/cars?f=new' ? 'navbar-item active': 'navbar-item'"  to="/cars?f=new" >New Cars</router-link>
                                <router-link :class="activeIndex == '/finance-calculater' ? 'navbar-item active': 'navbar-item'"  to="/finance-calculater">Finance Calculator</router-link>
                                <router-link  to="/how-it-work"  :class="activeIndex == '/how-it-work' ? 'navbar-item active': 'navbar-item'">How it works</router-link>
                                <router-link :class="activeIndex == '/help-advise' ? 'navbar-item active': 'navbar-item'"   to="/help-advise">Help & advice</router-link>
                                <router-link :class="activeIndex == '/blog' ? 'navbar-item active': 'navbar-item'"   to="/blog" >Blog</router-link>
                                <router-link class="navbar-item bg-pink cwhite mx-4" to="#">0345 003 0008</router-link>
                                <router-link to="/login" class="navbar-item border-0">
                                    <img src="../assets/img/user.png" alt="like">
                                    <span class="pl-3"> Log in</span>
                                </router-link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <nav class="nav-mobile"></nav>
        </header>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      activeIndex: false,
    };
  },

  methods: {

  },
  

   mounted() {
        this.activeIndex = this.$route.fullPath;
         window.scrollTo(0,0);
       
  }
};
</script>

