<template>
  <v-text-field :label="labelValue" single-line solo></v-text-field>
</template>

<script>
  export default {
    props: {
      labelValue: { type: String, require: true },
    },
  };
</script>
