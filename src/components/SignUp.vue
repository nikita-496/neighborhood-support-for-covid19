<template>
 <v-main>
  <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              <v-card-text>
                <v-form>
                  <label class="text-body-1" for="your_name">Имя</label>
                  <v-text-field v-model="name" placeholder="введите Ваше имя" name="your_name" solo clearable></v-text-field>
                  <label class="text-body-1" for="address">Адресс</label>
                  <v-text-field  v-model="address" placeholder="введите Ваше адресс" name="address" solo clearable></v-text-field>
                  <label class="text-body-1" for="phone">Телефон</label>
                  <v-text-field v-model="phone" placeholder="введите Ваше номер телефона" name="phone" solo clearable></v-text-field>
                  <slot name="neighbors"></slot>
									<slot name="volunteers"></slot>
                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
										<slot name="neighbors-submit" :neighborsSubmit="neighborsSubmit"></slot>
											<slot name="volunteers-submit" :volunteersSubmit="volunteersSubmit"></slot>
										<!--<v-btn @click="neighborsSubmit" depressed color="primary">Зарегестрироваться</v-btn>-->
                    <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                    Already have an account? <a href="#" class="pl-2" style="color: #000000">Sign In</a>
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-actions class="ml-6 mr-6 text-center">
                <p>By continuing, you agree to Fedorae Education's <a href="#" class="pl-2" style="color: #000000">Policy</a> and <a href="#" class="pl-2" style="color: #000000">Terms of Use</a></p>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
 </v-main>
</template>

<script>
import Airtable from "airtable"

export default{
	name: "sign-up",
	props: {
    typeOfRequest: {type: String},
    targetOfRequest: {type: String},
    detailsOfRequest: {type: String},
		email: {type: String},
		moreInformation: {type: String},
		skills: {type: Array},
		resources: {type: Array},
		prefered: {type: String}
  },
	data: () => ({
		name: "",
    address: "",
    phone: "",
	}),
	 methods:{
    neighborsSubmit() {
      const base = new Airtable({apiKey: 'keyvduBWr1shfzZQs'}).base('appJzrXahAuT6QocL')
      const createUser = async () => {
        await base ("Neighbors").create([
          {
            "fields": {
              "Name": this.name,
              "Address": this.address,
              "Phone": this.phone,
              "Request type": this.typeOfRequest,
              "Summary request": this.targetOfRequest,
              "Details request": this.detailsOfRequest,
              "Symptom": "",
              "Temperature": null
            }
          }
        ], function (err,records) {
          if (err) {
            console.error(err)
            return
          }
          records.forEach(record => {
            console.log(record.getId())
          });
        })
      }
      createUser()
    },
		volunteersSubmit() {
      const base = new Airtable({apiKey: 'keyvduBWr1shfzZQs'}).base('appJzrXahAuT6QocL')
      const createUser = async () => {
        await base ("Volunteers").create([
          {
            "fields": {
              "Name": this.name,
              "Primary Skill": "",
							"Secondary Skills": "",
							"Skills More": this.moreInformation,
							"Equipment": this.resources,
							"Share Information": null,
							"Prefered Contact Method": this.prefered,
							"Address": this.address,
              "Phone": this.phone,
							"Email": this.email,
							"Request Logging Link": "",
							"Google Cache": "",
            }
          }
        ], function (err,records) {
          if (err) {
            console.error(err)
            return
          }
          records.forEach(record => {
            console.log(record.getId())
          });
        })
      }
      createUser()
    }
  }
}
</script>

