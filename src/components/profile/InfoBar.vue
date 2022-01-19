<template>
  <aside class="aside">
    <v-card class="card rounded-sm pa-4" color="grey lighten-3" flat>
      <custom-select v-if="openSelect" />
      <v-card-title class="card-title d-flex justify-space-between">
        <h3 class="text-title title">Биография</h3>
        <v-icon class="icon-title__item" @click="changeSelectState"> fas fa-ellipsis-h</v-icon>
      </v-card-title>
      <custom-text-area v-if="this.$store.state.editMode" @saveText="changeText" />
      <p v-else class="card__biography-content-text">{{ biography }}</p>
      <v-card-actions class="card__more">
        <custom-button>
          <span class="card__link-text" slot="text">Читать далее</span>
          <v-icon class="card__link-item ml-2" slot="icon">fas fa-caret-down</v-icon>
        </custom-button>
      </v-card-actions>
      <hr />
      <!------------------------------------------Contacts-------------------------->
      <v-card-title class="card-title">
        <h3 class="text-title title">Контактные данные</h3>
      </v-card-title>
      <v-card-text class="card__contacts-content">
        <div class="card__contact-items mb-5">
          <v-icon class="card__contact-icon">fas fa-map-marker-alt</v-icon>
          <span class="card__contact-text ml-4">Адрес</span>
        </div>
        <div class="card__contact-items mb-5">
          <v-icon class="card__contact-icon">fas fa-phone-square-alt</v-icon>
          <span class="card__contact-text ml-4">Телефон</span>
        </div>
        <div class="card__contact-items mb-5">
          <v-icon class="card__contact-icon">fas fa-envelope</v-icon>
          <span class="card__contact-text ml-4">Email</span>
        </div>
        <div class="card__contact-items">
          <v-icon class="card__contact-icon">fas fa-asterisk</v-icon>
          <span class="card__contact-text ml-4">Предпочтительный способ связи</span>
        </div>
      </v-card-text>
      <hr />
      <!------------------------------------------Opportunities-------------------------->
      <v-card-title class="card-title">
        <h3 class="text-title title">Возможности</h3>
      </v-card-title>
      <v-card-text class="card__opportunities-content">
        <div class="card__opportunities-items mb-5">
          <h4 class="card__opportunities-title">Навыки</h4>
          <v-chip class="card__opportunities-primary" color="primary">Primary Skill</v-chip>
          <v-chip class="card__opportunities-secondary">Secondary Skills</v-chip>
        </div>
        <div class="card__opportunities-items mb-5">
          <h4 class="card__opportunities-title">Средства в наличии</h4>
          <v-chip class="card__opportunities-primary" color="primary">Primary Skill</v-chip>
        </div>
        <div class="card__opportunities-items">
          <h4 class="card__opportunities-title">Инофрмация о навыках</h4>
          <span class="card__opportunities-text"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minus praesentium
            corrupti quod blanditiis, quae ad rerum magni assumenda voluptatum autem minima amet
            veritatis. Dignissimos nostrum mollitia doloribus fuga libero?</span
          >
        </div>
      </v-card-text>
    </v-card>
  </aside>
</template>

<script>
  import customTextArea from "../input/CustomTextArea.vue";
  import customButton from "../ui/CustomButton.vue";
  import customSelect from "../ui/CustomSelect.vue";

  export default {
    components: { customButton, customSelect, customTextArea },
    data: () => {
      return {
        openSelect: false,
        biography: "",
      };
    },

    methods: {
      change() {
        this.$store.commit("changeEditMode");
      },
      changeSelectState() {
        this.openSelect = !this.openSelect;
        if (this.$store.state.editMode) {
          this.$store.commit("changeEditMode");
        }
      },
      changeText(event) {
        this.biography = event;
      },
    },
  };
</script>

<style scoped lang="sass">
  @import "../../styles/_variables.sass"
  @import "../../styles/_mixins.sass"
  .card
    .card-title
      .icon-title__item
        font-size: $icon-size
        cursor: pointer
        @include links($gray-color, $black-gray-color)
    .card__more
      .v-btn__content
        .card__link-text
          text-transform: lowercase
          color: $primary-link
        .card__link-item
          font-size: $icon-size
    .card__contacts-content
     .card__contact-items
      .card__contact-icon
        font-size: 18px
    .card__opportunities-content
      .card__opportunities-secondary
        background-color: rgb(137,207,240)
        color: #ffff
      .card__opportunities-title
        &:before
          content:"\2796"
          font-size: 20px
          width: 50px
</style>
