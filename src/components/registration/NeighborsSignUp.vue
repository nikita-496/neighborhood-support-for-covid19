<template>
  <regist-form>
    <template v-slot:title>
      <h2>Регистрация изолированного</h2>
    </template>
    <template v-slot:fields>
      <text-field :labelValue="$t(tableFields.Name)"></text-field>
      <v-select
        :items="$t(options).split(',')"
        :label="$t(tableFields['Request type'])"
        solo
      ></v-select>
      <text-field
        :labelValue="`${$t(tableFields.Phone)} или ${$t(tableFields.Address)}`"
      ></text-field>
      <text-field :labelValue="$t(tableFields['Summary request'])"></text-field>
      <text-field :labelValue="$t(tableFields['Details request'])"></text-field>
      <text-field :labelValue="$t(tableFields.Temperature)"></text-field>
      <text-field :labelValue="$t(tableFields.Symptom)"></text-field>
    </template>
    <template v-slot:actions>
      <v-btn>Зарегистрироваться</v-btn>
    </template>
  </regist-form>
</template>

<script>
  import dataTableLogService from "../../services/DataTableLogService";

  import SignUp from "../SignUp.vue";
  import TextField from "../input/TextField.vue";
  import RegistForm from "../forms/RegistForm.vue";

  export default {
    name: "neighbors-sign-up",
    components: { SignUp, RegistForm, TextField },

    data: () => ({
      ui: ["Имя", "Адресс", "Еmail", "Телефон"],
      userInfo: {
        id: null,
        "Request type": "",
        "Summary request": "",
        "Details request": "",
        Temperature: null,
        Symptom: "",
      },
      options: "",
      tableFields: {},
    }),
    created() {
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
