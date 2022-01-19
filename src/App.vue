<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
  //import SignUp from './components/SignUp.vue';
</script>

<style lang="sass">
  @import "./styles/_mixins/media.sass"
  :root
    //16.012 px at screen 1366px
    font-size: calc(0.147em + 1vw)
    @include responsiveRootFS()
</style>
