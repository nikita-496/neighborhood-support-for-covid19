<template>
  <v-app>
    <v-app-bar class="header" color="deep-purple" app flat>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <a class="pr-15">Войти</a>
      <a>Присоедениться</a>
    </v-app-bar>
    <v-main class="pa-0">
      <v-row>
        <v-col cols="2">
          <info-bar></info-bar>
        </v-col>
        <v-col cols="6">
          <info-bar></info-bar>
        </v-col>
        <v-col cols="3">
          <info-bar></info-bar>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
  import InfoBar from "../../components/profile/InfoBar.vue";
  export default {
    components: { InfoBar },
  };
</script>

<style scoped lang="sass">
  @import "../../styles/_variables.sass"
  .v-application
    background-color: $body-color
  .v-main
    margin-top: 140px
</style>
