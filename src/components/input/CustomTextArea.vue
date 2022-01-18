<template>
  <div>
    <v-textarea v-model="content" solo name="input-7-4" label="Solo textarea" autofocus>
    </v-textarea>
    <v-btn @click="save">Создать</v-btn>
    <v-btn @click="cancel">Отмена</v-btn>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        content: "",
      };
    },
    methods: {
      save() {
        this.$emit("saveText", this.content);
        this.$emit("closeTextArea", false);
      },
      cancel() {
        this.$emit("cancelChanges");
      },
    },
  };
</script>
