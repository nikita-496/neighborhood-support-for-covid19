<template>
  <regist-form :volunteersSubmitting="userInfo">
    <template v-slot:title>
      <h2>Регистрация волонтера</h2>
    </template>
    <template v-slot="{ forSubmitting }">
      <v-text-field
        v-for="item in Object.keys(userInfo).slice(0, 4)"
        :key="item"
        v-model="forSubmitting[item]"
        :label="item === 'Email' ? item : `${$t(item)}`"
        solo
      >
      </v-text-field>
      <v-select
        v-for="item in Object.keys(userInfo).slice(4, 6)"
        :key="item"
        v-model="forSubmitting[item]"
        :items="$t(options.skills).split(',')"
        :label="$t(item)"
        solo
      >
      </v-select>
      <v-text-field
        v-model="forSubmitting['Skills more']"
        :label="`${$t(Object.keys(userInfo)[6])}`"
        solo
      >
      </v-text-field>
      <v-select
        v-model="forSubmitting.Equipment"
        :items="$t(options.equipment).split(',')"
        :label="`${$t(Object.keys(userInfo)[7])}`"
        solo
      >
      </v-select>
      <v-checkbox
        v-for="contact in options.contacts.split(',')"
        :key="`${contact} 1`"
        v-model="forSubmitting['Prefered Contact Method']"
        name="prefered"
        color="green"
        :value="contact"
        :label="contact"
        hide-details
      />
    </template>
  </regist-form>
</template>
<script>
  import RegistForm from "../forms/RegistForm.vue";

  export default {
    name: "volunteers-sign-up",
    components: { RegistForm },
    props: {
      options: { type: Object, require: true },
    },
    data: () => ({
      userInfo: {
        Name: "",
        Address: "",
        Phone: "",
        Email: "",
        "Primary skill": "",
        "Secondary skills": "",
        "Skills more": "",
        Equipment: "",
        "Prefered Contact Method": "",
      },
    }),
  };
</script>
