<template>
  <v-flex class="mt-15" align-self-center>
    <v-card width="600">
      <v-card-text class="pb-15">
        <h4 class="text-center">Кем вы являетесь?</h4>
      </v-card-text>
      <v-card-actions class="d-flex justify-space-around">
        <router-link :to="{ name: 'neighbors-sign-up', params: { userType: 'neighbors' } }">
          Изолированный
        </router-link>
        <router-link :to="{ name: 'volunteers-sign-up', params: { userType: 'volunteers' } }">
          Волонтер
        </router-link>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {};
</script>
