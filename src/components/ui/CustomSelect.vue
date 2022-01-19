<template>
  <v-card class="select">
    <v-card-actions class="select__options">
      <v-icon class="select__options-item" @click="changeEditeMode">fas fa-pencil-alt</v-icon>
      <v-icon class="select__options-item ml-4">fas fa-trash</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => {
      return {
        editeMode: false,
      };
    },
    methods: {
      changeEditeMode() {
        this.editeMode = !this.editeMode;
        this.$emit("editeText", this.editeMode);
      },
    },
  };
</script>

<style scoped lang="sass">
  @import "../../styles/_variables.sass"
  .select__options-item
    font-size: $icon-size
    &:hover
      cursor: pointer
</style>
