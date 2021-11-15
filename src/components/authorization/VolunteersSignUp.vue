<template>
 <sign-up >
  <template slot="volunteers">
    <label class="text-body-1" for="email">Email</label>
    	<v-text-field v-model="email" placeholder="введите Ваш Email" name="email" solo clearable></v-text-field>
		<label class="text-body-1" for="primary skills">Основной навык</label>
			<v-select name="primary skills" :items="skills" dense solo></v-select>
		<label class="text-body-1" for="primary skills">Второстепененные навыки</label>
			<v-select name="primary skills" :items="skills" dense solo></v-select>
		<label class="text-body-1" for="more information">Дополнительная информация</label>
			<v-textarea v-model="moreInformation" name="more information" filled auto-grow></v-textarea>
		<label class="text-body-1" for="resources">Ресурсы</label>
			<v-select name="resources" :items="resources" dense solo></v-select>
		<label class="text-body-1" for="prefered">Предпочтительный способ связи</label>
		 <v-checkbox v-model="prefered" name="prefered" color="red" value="По сосседству" label="По сосседству" hide-details></v-checkbox>
		 <v-checkbox v-model="prefered" name="prefered" color="red" value="Email" label="Email" hide-details></v-checkbox>
		 <v-checkbox v-model="prefered" name="prefered" color="red" value="Телефон" label="Телефон" hide-details></v-checkbox>
		 <v-checkbox v-model="prefered" name="prefered" color="red" value="ВКонтакте" label="ВКонтакте" hide-details></v-checkbox>
		 <v-checkbox v-model="prefered" name="prefered" color="red" value="Instagram" label="Instagram" hide-details></v-checkbox>
		 <v-checkbox v-model="prefered" name="prefered" color="red" value="Другой" label="Другой" hide-details></v-checkbox>
  </template>
	 <v-btn slot="volunteers-submit" slot-scope="{volunteersSubmit}"
     @click="volunteersSubmit" color="primary">Зарегестрироваться</v-btn>
 </sign-up>
</template>

<script>
let Airtable = require('airtable');

import SignUp from "../SignUp.vue"

export default ({
 name: "volunteers-sign-up",
 components: {SignUp},
 data: () => ({
	 email:"",
	 moreInformation:"",
	 skills: [],
	 resources: [],
	 prefered: ""
 }),
 mounted() {
	 const base = new Airtable({apiKey: 'keyvduBWr1shfzZQs'}).base('appJzrXahAuT6QocL');

	 const setSkillsOptions = async () => {
     await base("Skills").select({
        view: "Grid view"
     }).eachPage(records => {
       records.forEach(record => {
         this.skills.push(record.fields.Profession)
       });
     })
   }
	  const setResourcesOptions = async () => {
     await base("Equipment").select({
        view: "Grid view"
     }).eachPage(records => {
       records.forEach(record => {
         this.resources.push(record.fields.Name)
       });
     })
   }

	 setSkillsOptions()
	 setResourcesOptions()

 }
})
</script>
