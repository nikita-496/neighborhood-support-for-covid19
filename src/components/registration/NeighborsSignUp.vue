<template>
  <regist-form>
    <template v-slot:title>
      <h2>Регистрация изолированного</h2>
    </template>
    <template v-slot:fields>
      <text-field :labelValue="$t(tableFields.Name)"></text-field>
      <v-select :items="ui" :label="$t(tableFields['Request type'])" solo></v-select>
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
  import { getAllJson, API } from "../../services/http";
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
      options: {
        "event logging": [],
      },
      tableFields: {},
    }),
    created() {
      const dataTable = getDataTable();
      getTableFields(dataTable).then((fields) => (this.tableFields = fields));

      function getDataTable() {
        return getAllJson(API.table.neighbors).then((result) => result);
      }

      async function getTableFields(table) {
        let tableRecords = await table.then((res) => res);
        //think over a case when there is no data in the table
        //and also how to get the fields differently
        let fields = tableRecords.records.map((record) => {
          return Object.keys(record.fields);
        });
        let numberOfFields = fields.map((field) => field.length);
        let sortedFields = implementSorting(numberOfFields);
        let filteredFields = fields.filter(
          (item) => item.length === sortedFields[[sortedFields.length - 1]]
        )[0];
        return convertToObject(filteredFields);
      }

      function implementSorting(sortable) {
        return sortable.sort(function compare(a, b) {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
      }

      function convertToObject(arr) {
        return arr.reduce((newObj, item) => {
          newObj[item] = item;
          return newObj;
        }, {});
      }
    },
  };
</script>
