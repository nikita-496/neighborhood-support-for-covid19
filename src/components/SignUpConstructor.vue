<template>
  <h1>Привет</h1>
</template>

<script>
  import dataTableLogService from "../services/DataTableLogService";
  export default {
    data() {
      return {
        //identifier defining which SignUp form to render
        signUpType: this.$route.params.userType,
        inputFormInfo: {
          tableFields: {},
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
      getFieldForLabelName().then((result) => (this.inputFormInfo.tableFields = result));
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

      function getFieldForLabelName() {
        const dataTableLog = dataTableLogService.getLogFrom(typeForm);
        return dataTableLogService.getTableFields(dataTableLog).then((fields) => fields);
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
