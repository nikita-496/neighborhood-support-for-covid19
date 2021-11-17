<template>
 <sign-up 
 				:email="userData.email"
				:primarySkill="userData.primarySkill"
				:secondarySkills="userData.secondarySkills"
				:skillsMore="userData.skillsMore"
				:equipments="userData.equipments"
				:prefered="userData.prefered">
  <div slot="volunteers">
    <label class="text-body-1" for="email">Email</label>
    <v-text-field v-model="userData.email" placeholder="введите Ваш Email" 
			name="email" solo clearable>
		</v-text-field>
		<label class="text-body-1" for="primary skills">Основной навык</label>
		<v-select name="primary skill" v-model="userData.primarySkill" 
			:items="skills" dense solo>
		</v-select>
		<label class="text-body-1" for="secondary skill">Второстепененный навык</label>
		<v-select name="secondary skills" v-model="userData.secondarySkills" 
			:items="skills" dense solo>
		</v-select>
		<label class="text-body-1" for="skillsMore">Дополнительные навыки</label>
		<v-textarea v-model="userData.skillsMore" 
			name="skillsMore" filled auto-grow>
		</v-textarea>
		<label class="text-body-1" for="equipments">Ресурсы</label>
		<v-select name="equipments" v-model="userData.equipments" 
		:items="equipments" dense solo>
			</v-select>
		<label class="text-body-1" for="prefered">Предпочтительный способ связи</label>
		<v-checkbox v-for="contact in contacts" :key="contact"	
			 v-model="userData.prefered" 
			 name="prefered" color="green" 
			 :value="contact" :label="contact"
			 hide-details
		/>
  </div>
	 <v-btn slot="volunteers-submit" slot-scope="{volunteersSubmit}"
     @click="volunteersSubmit" color="primary">Зарегестрироваться</v-btn>
 </sign-up>
</template>

<script>
	import SignUp from "../SignUp.vue"

	import API_TOKEN from "../../config/api-token"
	const url = "https://api.airtable.com/v0/"
	const airTableBase = "appJzrXahAuT6QocL/" 

	const config = {
		headers: {
			Authorization: "Bearer " + API_TOKEN,
		}
	}
	const setBaseUrl = (currentTable) => `${url}${airTableBase}${currentTable}`

	export default ({
		name: "volunteers-sign-up",
		components: {SignUp},
		data: () => ({
			userData: {
				email:"",
				skillsMore:"",
				primarySkill: "",
				secondarySkills: "",
				equipments: "",
				prefered: ""
			},
			skills: [],
			equipments: [],
			contacts: []
		}),
		mounted() {
		
		const setOptions = async (tabel) => {
				await fetch (setBaseUrl(tabel), config)
				.then(res => res.json())
				.then(res => {
						switch(tabel) {
							case "Additional": 
								return this.contacts = res.records.map(record => record.fields["Contact form"])
							case "Skills":
								return this.skills = res.records.map(record => record.fields.Profession)
							case "Equipment": 
								return this.equipments = res.records.map(record => record.fields.Name)
						}
				}).catch(err => console.error("Error:", err)) 
		}
			setOptions("Additional")
			setOptions("Skills")
			setOptions("Equipment")
		}
	})
</script>
