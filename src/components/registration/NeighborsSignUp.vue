<template>
  <regist-form :neighborsSubmitting="userInfo">
    <template v-slot:title>
      <h2>Регистрация изолированного</h2>
    </template>

    <template v-slot="{ forSubmitting }">
      <v-text-field
        v-model="forSubmitting.Name"
        :label="`${$t(Object.keys(userInfo)[0])}`"
        solo
      ></v-text-field>
      <v-select
        v-model="forSubmitting['Request type']"
        :items="$t(options).split(',')"
        :label="`${$t(Object.keys(userInfo)[1])}`"
        solo
      ></v-select>
      <v-text-field
        v-for="item in Object.keys(userInfo).slice(2, 7)"
        :key="item"
        v-model="forSubmitting[item]"
        :label="$t(item)"
        solo
      >
      </v-text-field>
      <v-text-field
        v-model.number="forSubmitting.Temperature"
        :label="`${$t(Object.keys(userInfo)[Object.keys(userInfo).length - 1])}`"
        solo
      >
      </v-text-field>
    </template>
  </regist-form>
</template>

<script>
  import RegistForm from "../forms/RegistForm.vue";

  export default {
    name: "neighbors-sign-up",
    components: { RegistForm },
    props: {
      options: { type: String, require: true },
    },
    data: () => ({
      userInfo: {
        Name: "",
        "Request type": "",
        Address: "",
        Phone: "",
        "Summary request": "",
        "Details request": "",
        Symptom: "",
        Temperature: null,
      },
    }),
  };
</script>
