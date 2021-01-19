<template>
   <footer class="bg-light position-relative" id="FooterNav">
            <div class="columns">
                <div class="column is-one-five-tablet order2">
                    <div class="pr-4">
                        <img src="../assets/img/logo_ftr.svg" class="is-hidden-tablet mob_logo" alt="" />
                        <img src="../assets/img/logo_2.png" class="is-hidden-mobile" alt="" />
                        <p class="pt-4 pr-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore <br>et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div class="column is-one-fifth links1 order3">
                    <p class="font-weight-bold">Navigation</p>
                    <ul class="pt-2">
                        <li><a href="#">Home</a></li>
                        <li><router-link to="/cars">Browse cars</router-link></li>
                        <li><a href="#">Sell my car</a></li>
                        <li><router-link to="/how-it-work">How it works</router-link></li>
                        <li><a href="#">Contact us</a></li>
                        <li><router-link to="/to">Log in</router-link></li>
                        <li></li>
                    </ul>
                </div>

                <div class="column is-one-fifth links2 order4">
                    <p class="font-weight-bold">Help and Advice</p>
                    <ul class="pt-2">
                        <li><router-link to="/help-advise">FAQs</router-link></li>
                        <li><a href="#">Finance</a></li>
                        <li><a href="#">products</a></li>
                        <li><router-link to="/how-it-work">How it works</router-link></li>
                        <li><a href="#">Cancellation</a></li>
                        <li><router-link to="/blog">Blog</router-link></li>
                        <li></li>
                    </ul>
                </div>
               <div class="column is-one-five">
                    <textarea class="textarea" placeholder="REVIEW WIDGET"></textarea>
                </div>
            </div>
        </footer>
</template>

<script>
export default {
    name: 'FooterNav',
     
};
</script>

