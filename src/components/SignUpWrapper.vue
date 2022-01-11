<template>
  <neighbors-sign-up
    v-if="signUpType === 'neighbors'"
    :options="inputFormInfo.optionsForNeighbors"
  />
  <volunteers-sign-up v-else :options="inputFormInfo.optionsForVolunteers" />
</template>

<script>
  import dataTableLogService from "../services/DataTableLogService";
  import NeighborsSignUp from "./registration/NeighborsSignUp.vue";
  import VolunteersSignUp from "./registration/VolunteersSignUp.vue";
  export default {
    components: { NeighborsSignUp, VolunteersSignUp },
    data() {
      return {
        //identifier defining which SignUp form to render
        signUpType: this.$route.params.userType,
        inputFormInfo: {
          optionsForNeighbors: "",
          optionsForVolunteers: {
            skills: "",
            equipment: "",
            contacts: "",
          },
        },
      };
    },
    mounted() {
      let typeForm = this.signUpType;
      if (typeForm === "neighbors") {
        getFieldForSelectOption().then(
          (result) => (this.inputFormInfo.optionsForNeighbors = result)
        );
      } else {
        getFieldForSelectOption("skills").then(
          (result) => (this.inputFormInfo.optionsForVolunteers.skills = result)
        );
        getFieldForSelectOption("equipment").then(
          (result) => (this.inputFormInfo.optionsForVolunteers.equipment = result)
        );
        getFieldForSelectOption("contacts").then(
          (result) => (this.inputFormInfo.optionsForVolunteers.contacts = result)
        );
      }

      function getFieldForSelectOption(table) {
        if (table) {
          const dataTableSkills = dataTableLogService.getLogFrom(table);
          return dataTableLogService
            .getOptions(dataTableSkills)
            .then((options) => options.join(","));
        } else {
          const dataTableEventLoggingLog = dataTableLogService.getLogFrom("event logging");
          return dataTableLogService
            .getOptions(dataTableEventLoggingLog)
            .then((options) => options.join(","));
        }
      }
    },
  };
</script>
