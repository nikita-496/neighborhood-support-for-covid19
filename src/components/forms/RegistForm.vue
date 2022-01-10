<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-form @keyup.native.enter="onSubmit">
          <v-card color="rgb(155, 155, 216)">
            <v-card-title class="text-center">
              <slot name="title"></slot>
            </v-card-title>
            <v-card-text>
              <slot
                :forSubmitting="neighborsSubmitting ? neighborsSubmitting : volunteersForSubmitting"
              >
              </slot>
            </v-card-text>
            <v-card-actions class="ml-6 mr-6 text-center">
              <v-btn @click="onSubmit">Зарегистрироваться</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import signService from "../../services/SignService";
  export default {
    props: {
      neighborsSubmitting: { type: Object },
      volunteersSubmitting: { type: Object },
    },
    methods: {
      onSubmit() {
        if (this.neighborsSubmitting) {
          signService.signUp("neighbors", {
            fields: this.neighborsSubmitting,
          });
        } else {
          signService.signUp("volunteers", {
            fields: this.volunteersSubmitting,
          });
        }
      },
    },
  };
</script>

<style scoped lang="scss"></style>
