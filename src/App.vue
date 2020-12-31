<template>
  <div id="app">
    <app-navigation></app-navigation>
        <router-view/>
    <FooterNav/>

  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import FooterNav from '@/components/FooterNav';
export default {
    name: 'App',
    components: {
        AppNavigation,
        FooterNav
    }
};
</script>

