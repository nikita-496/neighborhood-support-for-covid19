<template>
    <sign-up :typeOfRequest="typeOfRequest" :targetOfRequest="targetOfRequest" :detailsOfRequest="detailsOfRequest">
      <template slot="neighbors">
      <label class="text-body-1" for="type">Тип пожелания</label>
      <v-select name="type" dense solo></v-select>
      <label class="text-body-1" for="target">Цель пожелания</label>
      <v-textarea v-model="targetOfRequest" name="target" filled auto-grow value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.">
      </v-textarea>
      <label label class="text-body-1" for="details">Детали пожелания</label>
      <v-textarea v-model="detailsOfRequest" name="details" filled auto-grow value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.">
      </v-textarea>
    </template>
    <v-btn slot="btn-submit" depressed color="primary">Зарегестрироваться</v-btn>
    </sign-up>
</template>

<script>

import SignUp from "../SignUp.vue"

export default ({
	name: "neighbors-sign-up",
  components: {SignUp},
  data: () => ({
    typeOfRequest: "",
    targetOfRequest: "",
    detailsOfRequest: "",
  })
})
</script>
