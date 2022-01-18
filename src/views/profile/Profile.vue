<template>
  <v-app>
    <v-app-bar color="deep-purple" app flat>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <a class="pr-15">Войти</a>
      <a>Присоедениться</a>
    </v-app-bar>
  </v-app>
</template>

<script>
  export default {};
</script>

<style scoped lang="sass">
  @import "../../styles/_variables.sass"
  .v-application
    background-color: $body-color
</style>
