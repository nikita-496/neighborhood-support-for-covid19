<template>
  <v-app>
    <v-app-bar class="header" color="deep-purple" app flat>
      <v-app-bar-nav-icon v-if="mobileScreen" @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <a class="pr-15">Войти</a>
      <a>Присоедениться</a>
    </v-app-bar>
    <v-main class="profile-main">
      <div class="profile-main__wrapper">
        <v-row class="profile-main__row">
          <v-col v-if="!mobileScreen" class="profile-main__navigation-col py-0" cols="3">
            <info-bar></info-bar>
          </v-col>
          <v-col class="profile-main__content-col py-0" cols="6">
            <info-bar></info-bar>
          </v-col>
          <v-col class="profile-main__info-col py-0" cols="3">
            <info-bar></info-bar>
          </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import InfoBar from "../../components/profile/InfoBar.vue";
  export default {
    components: { InfoBar },
    computed: {
      mobileScreen() {
        return this.$vuetify.breakpoint.width < 712 ? true : false;
      },
    },
  };
</script>

<style scoped lang="sass">
  @import "../../styles/_variables.sass"
  @import "../../styles/_mixins/media.sass"
  .v-application
    background-color: $body-color
  .profile-main__wrapper
    max-width: 1290px
    margin-top: 40px
    margin-left: auto
    margin-right: auto
    @include responsiveWrapper()
</style>
