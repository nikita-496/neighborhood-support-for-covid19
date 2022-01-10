<template>
  <regist-form :neighborsSubmitting="userInfo">
    <template v-slot:title>
      <h2>Регистрация изолированного</h2>
    </template>

    <template v-slot="{ forSubmitting }">
      <v-text-field
        v-model="forSubmitting.Name"
        :label="`${$t(tableFields.Name)}`"
        solo
      ></v-text-field>
      <v-select
        v-model="forSubmitting['Request type']"
        :items="$t(options).split(',')"
        :label="$t(tableFields['Request type'])"
        solo
      ></v-select>
      <v-text-field
        v-for="item in Object.keys(userInfo).slice(2, 7)"
        :key="item"
        v-model="forSubmitting[item]"
        :label="`${$t(tableFields[item])}`"
        solo
      >
      </v-text-field>
      <v-text-field
        v-model.number="forSubmitting.Temperature"
        :label="`${$t(tableFields.Temperature)}`"
        solo
      >
      </v-text-field>
    </template>
  </regist-form>
</template>

<script>
  import dataTableLogService from "../../services/DataTableLogService";

  import SignUp from "../SignUp.vue";
  import RegistForm from "../forms/RegistForm.vue";

  export default {
    name: "neighbors-sign-up",
    components: { SignUp, RegistForm },
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
      options: "",
      tableFields: {},
    }),
    mounted() {
      const dataTabNeighborsleLog = dataTableLogService.getLogFrom("neighbors");
      dataTableLogService
        .getTableFields(dataTabNeighborsleLog)
        .then((fields) => (this.tableFields = fields));
      const dataTableEventLoggingLog = dataTableLogService.getLogFrom("event logging");
      dataTableLogService
        .getOptions(dataTableEventLoggingLog)
        .then((options) => (this.options = options.join(",")));
    },
  };
</script>
