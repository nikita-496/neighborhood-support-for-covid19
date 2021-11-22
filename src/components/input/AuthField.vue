<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-form @submit.prevent>
            <v-card>
              <v-card-title class="text-center">
                <slot name="title"></slot>
              </v-card-title>
              <v-card-text>
                <slot name="fields"></slot>
              </v-card-text>
              <v-card-actions class="ml-6 mr-6 text-center">
                <slot name="actions"></slot>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
