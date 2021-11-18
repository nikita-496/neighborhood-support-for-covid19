<template>
    <sign-up 
        :typeOfRequest="userData.typeOfRequest" 
        :targetOfRequest="userData.targetOfRequest" 
        :detailsOfRequest="userData.detailsOfRequest"
        :temperature="Number(userData.temperature)"
        :symptoms="userData.symptoms">
      <div v-for="n in 5" :key="n+3" slot="neighbors">
      <label class="text-body-1" for="type">{{`${setValue(n)}`}}</label>
      <v-select v-if="n === 1" v-model="userData.typeOfRequest" name="type" :items="options" dense solo></v-select>
      <v-textarea v-else-if="n === 2" v-model="userData.targetOfRequest" name="target" filled auto-grow/>
      <v-textarea v-else-if="n === 3" v-model="userData.detailsOfRequest" name="details" filled auto-grow/>
      <v-textarea v-else-if="n === 4" v-model="userData.temperature" name="temperature" height="50" filled auto-grow/>
      <v-textarea v-else-if="n === 5" v-model="userData.symptoms" name="symptoms" filled auto-grow />
    </div>
    <v-btn slot="neighbors-submit" slot-scope="{neighborsSubmit}"
     @click="neighborsSubmit" color="primary">Зарегестрироваться</v-btn>
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

  export default ({
    name: "neighbors-sign-up",
    components: {SignUp},
    data: () => ({
      userData: {
        typeOfRequest: "",
        targetOfRequest: "",
        detailsOfRequest: "",
        temperature: null,
        symptoms: "",
      },
      options: []
    }),
    methods: {
       setValue(n, attr){
         switch(attr) {
          case "for":
            return n === 1 ? 'your_name' : n === 2 ? 'address' : 'phone'
          case "label": 
            return n === 1 ? 'введите Ваше имя': n === 2 ? 'введите Ваш адресс': 'введите Ваш номер телефона' 
          default :
            return n === 1 ? "Тип пожелания" : n === 2 ?  "Цель пожелания" :  n === 3 ? "Детали пожелания" : n === 4 ? "Температура" : "Симптомы"
         }
      },
    },
    mounted() {
	  const setBaseUrl = (currentTable) => `${url}${airTableBase}${currentTable}`

    const setTypeOfRequestOptions = async () => {
      await fetch(setBaseUrl("Event Logging"), config) 
        .then(res => res.json())
        .then(res => this.options = res.records.map(record => record.fields["Request Type"]))
        .catch(err => console.error("Error:", err)) 
    }
    setTypeOfRequestOptions()
    }
  })
</script>
