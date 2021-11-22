<template>
  <sign-up :volunteersData="userData">
    <div slot="volunteers">
      <label class="text-body-1" for="email">Email</label>
      <v-text-field
        v-model="userData.email"
        placeholder="введите Ваш Email"
        name="email"
        solo
        clearable
      >
      </v-text-field>
      <label class="text-body-1" for="primary skills">Основной навык</label>
      <v-select
        name="primary skill"
        v-model="userData.primarySkill"
        :items="options.skills"
        dense
        solo
      >
      </v-select>
      <label class="text-body-1" for="secondary skill">Второстепененный навык</label>
      <v-select
        name="secondary skills"
        v-model="userData.secondarySkills"
        :items="options.skills"
        dense
        solo
      >
      </v-select>
      <label class="text-body-1" for="skillsMore">Дополнительные навыки</label>
      <v-textarea v-model="userData.skillsMore" name="skillsMore" filled auto-grow> </v-textarea>
      <label class="text-body-1" for="equipment">Ресурсы</label>
      <v-select name="equipment" v-model="userData.equipment" :items="options.equipment" dense solo>
      </v-select>
      <label class="text-body-1" for="prefered">Предпочтительный способ связи</label>
      <v-checkbox
        v-for="contact in options.contacts"
        :key="contact"
        v-model="userData.prefered"
        name="prefered"
        color="green"
        :value="contact"
        :label="contact"
        hide-details
      />
    </div>
    <v-btn
      slot="volunteers-submit"
      slot-scope="{ volunteersSubmit }"
      @click="volunteersSubmit"
      color="primary"
      :to="`/volunteers/${userData.id}`"
    >
      Зарегистрироваться</v-btn
    >
  </sign-up>
</template>

<script>
  import selectListService from "../../services/SelectListService";
  import SignUp from "../SignUp.vue";

  export default {
    name: "volunteers-sign-up",
    components: { SignUp },
    data: () => ({
      userData: {
        email: "",
        skillsMore: "",
        primarySkill: "",
        secondarySkills: "",
        equipment: "",
        prefered: "",
      },
      options: {
        skills: [],
        equipment: [],
        contacts: [],
      },
    }),
    mounted() {
      function setOptions(options) {
        // parsed from Observer
        let parsedOptions = JSON.parse(JSON.stringify(options));

        for (let option in parsedOptions) {
          selectListService.getOptions(option).then((result) => (options[option] = result));
        }
      }
      console.log(this.userData.id);
      setOptions(this.options);
    },
  };
</script>
