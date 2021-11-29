<template>
  <sign-up :neigbors="users">
    <div v-for="field in tableFields" :key="field" slot="neighbors">
      <label class="text-body-1" :for="field">{{ translateField(field) }}</label>
      <v-select
        v-if="field === 'Request type'"
        v-model="users[field]"
        :items="options['event logging']"
        :name="field"
        dense
        solo
      ></v-select>
      <v-textarea
        v-else-if="field === 'Temperature'"
        v-model="users[field]"
        :name="field"
        @keydown="test"
        height="50"
        filled
        auto-grow
      ></v-textarea>
      <v-textarea v-else v-model="users[field]" :name="field" filled auto-grow></v-textarea>
    </div>
    <v-btn
      slot="neighbors-submit"
      slot-scope="{ neighborsSubmit }"
      @click="neighborsSubmit"
      color="primary"
      >Зарегестрироваться</v-btn
    >
  </sign-up>
</template>

<script>
  import { getAllJson, API } from "../../services/http";
  import selectListService from "../../services/SelectListService";
  import SignUp from "../SignUp.vue";

  export default {
    name: "neighbors-sign-up",
    components: { SignUp },
    data: () => ({
      users: {
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
      tableFields: [],
    }),
    methods: {
      translateField(filed) {
        switch (filed) {
          case "Request type":
            return "Тип пожелания";
          case "Summary request":
            return "Цель пожелания";
          case "Details request":
            return "Детлаи пожелания";
          case "Temperature":
            return "Тепература";
          case "Symptom":
            return "Симптомы";
        }
      },
    },
    created() {
      function setOptions(options) {
        // parsed from Observer
        const parsedOptions = JSON.parse(JSON.stringify(options));
        selectListService
          .getOptions(Object.keys(parsedOptions).join(""))
          .then((result) => (options["event logging"] = result));
      }
      const getTableFields = async (getData) => {
        await getData(API.neighbors)
          .then((res) => res.json())
          .then((result) => (this.tableFields = Object.keys(result.records[18].fields)));
        this.tableFields = this.tableFields.filter((data) =>
          Object.keys(this.users).includes(data)
        );
      };
      getTableFields(getAllJson);
      setOptions(this.options);
    },
  };
</script>
