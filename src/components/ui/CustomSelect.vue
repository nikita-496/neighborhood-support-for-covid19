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
    methods: {
      changeEditeMode() {
        this.$store.commit("changeEditMode");
        console.log(this.$store.state.editMode);
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
