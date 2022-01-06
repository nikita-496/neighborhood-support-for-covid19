<template>
  <auth-field>
    <h3 slot="title">Регистрация</h3>
    <template slot="fields">
      <div v-for="n in 4" :key="n">
        <label class="text-body-1" :for="setValue(n, 'for')">
          {{ setValue(n) }}
        </label>
        <v-text-field
          v-if="n === 1"
          v-model="name"
          :label="setValue(n, 'label')"
          :name="setValue(n, 'for')"
          solo
          clearable
        >
        </v-text-field>
        <v-text-field
          v-if="n === 2"
          v-model="address"
          :label="setValue(n, 'label')"
          :name="setValue(n, 'for')"
          solo
          clearable
        >
        </v-text-field>
        <v-text-field
          v-if="n === 3"
          v-model="phone"
          :label="setValue(n, 'label')"
          :name="setValue(n, 'for')"
          solo
          clearable
        >
        </v-text-field>
        <v-text-field
          v-if="n === 4"
          v-model="password"
          :label="setValue(n, 'label')"
          :name="setValue(n, 'for')"
          solo
          clearable
        >
        </v-text-field>
      </div>
      <slot name="neighbors"></slot>
      <slot name="volunteers"></slot>
    </template>
    <template slot="actions">
      <v-btn>Зарегистрироваться</v-btn>
      <p>
        By continuing, you agree to Fedorae Education's
        <a href="#" class="pl-2" style="color: #000000">Policy</a> and
        <a href="#" class="pl-2" style="color: #000000">Terms of Use</a>
      </p>
    </template>
  </auth-field>
</template>

<script>
  import signService from "../services/SignService";
  import AuthField from "./forms/RegistForm.vue";

  export default {
    name: "sign-up",
    components: { AuthField },
    props: {
      neighbors: { type: Object },
      volunteersData: { type: Object },
    },
    data: () => ({
      name: "",
      address: "",
      phone: "",
      password: "",
    }),
    methods: {
      setValue(n, attr) {
        switch (attr) {
          case "for":
            return n === 1 ? "your_name" : n === 2 ? "address" : "phone";
          case "label":
            return n === 1
              ? "введите имя"
              : n === 2
              ? "введите адресс"
              : n === 3
              ? "введите номер телефона"
              : "введите пароль";
          default:
            return n === 1 ? "Имя" : n === 2 ? "Адресс" : n === 3 ? "Телефон" : "Пароль";
        }
      },

      neighborsSubmit() {
        const neighborsData = {
          fields: {
            Name: this.name,
            Address: this.address,
            Phone: this.phone,
            "Request type": this.neigbors.requestType,
            "Summary request": this.neigbors.symmaryRequest,
            "Details request": this.neigbors.detailsRequest,
            Symptom: this.neigbors.symptom,
            Temperature: this.neigbors.temperature,
            Password: this.password,
          },
        };
        signService.signUp("Neighbors", neighborsData);
      },

      async volunteersSubmit() {
        const volunteersData = {
          fields: {
            Address: this.address,
            "Skills More": this.volunteersData.skillsMore,
            Phone: this.phone,
            Email: this.volunteersData.email,
            "Share Information": [],
            "Prefered Contact Method": this.volunteersData.prefered,
            "Secondary Skills": this.volunteersData.secondarySkills,
            "Primary Skill": this.volunteersData.primarySkill,
            Equipment: this.volunteersData.equipment,
            Name: this.name,
            "Google Cache": "",
          },
        };
        return await signService.signUp("Volunteers", volunteersData);
      },
    },
  };
</script>
