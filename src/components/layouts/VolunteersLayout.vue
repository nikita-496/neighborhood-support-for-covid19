<template>
  <v-app>
    <v-app-bar color="deep-purple" app flat>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-main>
        <section>
          <v-card>
            <v-card-title>
              <h3>Никита Шевкунов</h3>
              <v-card-text>
                <span>nikita@gmail.com</span>
                <span>{{ $route.params.id }}</span>
              </v-card-text>
              <v-card-actions>
                <v-btn>Добавить пользователя</v-btn>
                <v-btn>Чат</v-btn>
              </v-card-actions>
            </v-card-title>
          </v-card>
        </section>
      </v-main>
      <v-spacer></v-spacer>
      <a class="pr-15">Войти</a>
      <a>Присоедениться</a>
    </v-app-bar>
  </v-app>
</template>

<script>
  export default {};
</script>
