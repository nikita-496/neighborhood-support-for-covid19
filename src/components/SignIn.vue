<template>
  <auth-field>
    <h3 slot="title">Вход в систему</h3>
    <template slot="fields">
      <v-label class="text-body-1" for="userName">Имя пользователя</v-label>
      <v-text-field name="userName" solo placeholder="введите имя" clearable></v-text-field>
      <v-label class="text-body-1" for="password">Пароль</v-label>
      <v-text-field name="password" solo placeholder="введите пароль" clearable></v-text-field>
    </template>
    <v-btn slot="actions"> Войти </v-btn>
  </auth-field>
</template>

<script>
  import AuthField from "./input/AuthField.vue";
  export default {
    components: {
      AuthField,
    },
  };
</script>
