<template>
  <sign-up :neigborsData="userData">
    <div v-for="n in 5" :key="n + 4" slot="neighbors">
      <label class="text-body-1" for="type">{{ `${setValue(n)}` }}</label>
      <v-select
        v-if="n === 1"
        v-model="userData.typeOfRequest"
        name="type"
        :items="options['event logging']"
        dense
        solo
      ></v-select>
      <v-textarea
        v-else-if="n === 2"
        v-model="userData.targetOfRequest"
        name="target"
        filled
        auto-grow
      />
      <v-textarea
        v-else-if="n === 3"
        v-model="userData.detailsOfRequest"
        name="details"
        filled
        auto-grow
      />
      <v-textarea
        v-else-if="n === 4"
        v-model.number="userData.temperature"
        name="temperature"
        height="50"
        filled
        auto-grow
      />
      <v-textarea
        v-else-if="n === 5"
        v-model="userData.symptoms"
        name="symptoms"
        filled
        auto-grow
      />
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
  import selectListService from "../../services/SelectListService";
  import SignUp from "../SignUp.vue";

  export default {
    name: "neighbors-sign-up",
    components: { SignUp },
    data: () => ({
      userData: {
        id: null,
        typeOfRequest: "",
        targetOfRequest: "",
        detailsOfRequest: "",
        temperature: null,
        symptoms: "",
      },
      options: {
        "event logging": [],
      },
    }),
    methods: {
      setValue(n, attr) {
        switch (attr) {
          case "for":
            return n === 1 ? "your_name" : n === 2 ? "address" : "phone";
          case "label":
            return n === 1
              ? "введите Ваше имя"
              : n === 2
              ? "введите Ваш адресс"
              : "введите Ваш номер телефона";
          default:
            return n === 1
              ? "Тип пожелания"
              : n === 2
              ? "Цель пожелания"
              : n === 3
              ? "Детали пожелания"
              : n === 4
              ? "Температура"
              : "Симптомы";
        }
      },
    },
    mounted() {
      function setOptions(options) {
        // parsed from Observer
        let parsedOptions = JSON.parse(JSON.stringify(options));
        selectListService
          .getOptions(Object.keys(parsedOptions).join(""))
          .then((result) => (options["event logging"] = result));
      }
      setOptions(this.options);
    },
  };
</script>
