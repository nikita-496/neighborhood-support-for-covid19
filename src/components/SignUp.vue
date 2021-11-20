<template>
 <v-main>
  <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              <v-card-text>
                <v-form>
                  <div v-for="n in 3" :key="n">
                    <label class="text-body-1" 
                          :for="setValue(n, 'for')"> 
                        {{setValue(n)}} 
                    </label>
                    <v-text-field 
                          v-if="n === 1"
                          v-model="name" 
                          :label="setValue(n, 'label')" 
                          :name="setValue(n, 'for')"
                          solo clearable>
                    </v-text-field>
                     <v-text-field 
                          v-if="n === 2"
                          v-model="address" 
                          :label="setValue(n, 'label')" 
                          :name="setValue(n, 'for')"
                          solo clearable>
                    </v-text-field>
                     <v-text-field 
                          v-if="n === 3"
                          v-model="phone" 
                          :label="setValue(n, 'label')" 
                          :name="setValue(n, 'for')"
                          solo clearable>
                    </v-text-field>
                  </div>
                  <slot name="neighbors"></slot>
									<slot name="volunteers"></slot>
                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
										<slot name="neighbors-submit" :neighborsSubmit="neighborsSubmit"></slot>
										<slot name="volunteers-submit" :volunteersSubmit="volunteersSubmit"></slot>
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
  import signService from "../services/SignService"

  export default {
    name: "sign-up",
    props: {
      neigborsData: {type: Object},
      volunteersData: {type: Object}
    },
    data: () => ({
      name: "",
      address: "",
      phone: "",
    }),
    methods:{
       setValue(n, attr){
         switch(attr) {
          case "for":
            return n === 1 ? 'your_name' : n === 2 ? 'address' : 'phone'
          case "label": 
            return n === 1 ? 'введите Ваше имя': n === 2 ? 'введите Ваш адресс': 'введите Ваш номер телефона' 
          default :
            return n === 1 ? "Имя" : n === 2 ?  "Адресс" :"Телефон"
         }
      },
       neighborsSubmit() {
          const neighborsData = {
            "fields": {
            "Name": this.name,
            "Address": this.address,
            "Phone": this.phone,
            "Request type": this.neigborsData.typeOfRequest,
            "Summary request": this.neigborsData.targetOfRequest,
            "Details request": this.neigborsData.detailsOfRequest,
            "Symptom": this.neigborsData.symptoms,
            "Temperature": this.neigborsData.temperature
            }
          };
          signService.signUp("Neighbors", neighborsData);
        },

       volunteersSubmit() {
        const volunteersData = {
          fields: {
            "Address": this.address,
            "Skills More": this.volunteersData.skillsMore,
            "Phone": this.phone,
            "Email": this.volunteersData.email,
            "Share Information": [],
            "Prefered Contact Method": this.volunteersData.prefered,
            "Secondary Skills": this.volunteersData.secondarySkills,
            "Primary Skill": this.volunteersData.primarySkill,
            "Equipment": this.volunteersData.equipment,
            "Name": this.name,
            "Google Cache": ""
          }
      };
      signService.signUp("Volunteers", volunteersData);
    }
  }
}
</script>


