<template>
    <header class="mb-0 has-background-white w-100">
            <div class="columns mb-0">
                <div class="column is-full">
                    <nav class="navbar py-2" aria-label="main navigation">
                        <div class="navbar-brand column is-one-fifth pl-0 is-hidden-mobile">
                            <a class="navbar-item pl-0 is-hidden-mobile" href="#">
                                <img src="../assets/img/logo_1.png" alt="" />
                            </a>
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
                                <a class="navbar-item" href="/cars?f=used"> Used Cars </a>

                                <a class="navbar-item" href="/cars?f=new">New Cars</a>
                                <a class="navbar-item">Finance Calculator</a>
                                <a class="navbar-item">How it works</a>
                                <a class="navbar-item">Help & advice</a>
                                <a class="navbar-item">Blog</a>
                                <a class="navbar-item bg-pink cwhite mx-4">0345 003 0008</a>
                                <a href="#" class="navbar-item border-0">
                                    <img src="../assets/img/user.png" alt="like">
                                    <span class="pl-3"> Log in</span>
                                </a>
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
    name: 'AppNavigation',
     
};
</script>

