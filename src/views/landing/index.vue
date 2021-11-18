<template>
	<v-app>
		 <!------------------Панель навигации--------------------------->
    <div>
       <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Система поддержки населения при COVID-19</v-toolbar-title>
      <v-spacer></v-spacer>
      <a class="pr-15" href="/sign/up">Войти</a>
      <a>Присоедениться</a>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
    <!------------------Панель навигации--------------------------->

    <!----------------------Preview-------------------------------->
		<v-main>
			<section class="preview mb-15">
      <v-row>
        <v-col cols="6">
           <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos quia aut officiis ut, 
              voluptatem molestiae quasi qui a, sequi autem dicta atque dolorum sit inventore id 
              voluptates adipisci sapiente!
          </h2>
           <v-btn
              depressed
              color="primary"
           >
              Primary
           </v-btn>
        </v-col>
        <v-col cols="6">
           <v-img
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            ></v-img>
        </v-col>
      </v-row>
    </section>
    <!----------------------Preview-------------------------------->

    <!----------------------Pacibility---------------------->
    <section class="search-neighboor mb-15">
      <!----------------------Search Neighboor---------------------->
      <v-row>
        <v-col cols="6">
         <img src="https://via.placeholder.com/450C/O https://placeholder.com/"/>
        </v-col>
        <v-col cols="6">
           <h2 class="pb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos quia aut officiis ut, 
              voluptatem molestiae quasi qui a, sequi autem dicta atque dolorum sit inventore id 
              voluptates adipisci sapiente!
          </h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus reiciendis beatae porro itaque nemo iure tenetur incidunt architecto officia vero, eligendi ab rem eos ex dicta voluptas corrupti. Earum.</p>
          <v-text-field
            label="Solo"
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <!----------------------Search Neighboor---------------------->
      <!----------------------List of services---------------------->
      <v-row>
         <v-col cols="6">
           <h2 class="pb-10">
             В качестве волонтера вы можете указать перечень навыков и ресурсов, которыми вы обладаете
          </h2>
           <p>Поделитесь своими навыками и ресурсами, которые обязаельно могут быть полезны нуждающимся людям по близости </p>
         </v-col>
         <v-col cols="6">
           <v-chip v-for="skill in previewInfo.skills" :key="skill"
            class="ma-2"
            outlined
           >
            {{skill}}
          </v-chip>
         </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2 class="pb-10">
             В случае если вы изолированный, вам предоставляется возможнсть общать с людьми по близости, а также найти волонтера с необходимыми средствами
          </h2>
           <p>
             Если вы не можете выйти на улицу, система позволит общаться с людьми поблизости, 
             у которых могут быть навыки или ресурсы, необходимые вам. Система позволяет предоставить способ попросить о помощи в вашем районе 
           </p>
        </v-col>
      </v-row>
      <!----------------------List of services---------------------->

      <!----------------------Position. select a position. Volunteer or isolated---------->
      <v-row>
         <v-col cols="6">
         <img src="https://via.placeholder.com/450C/O https://placeholder.com/"/>
        </v-col>
        <v-col>
          <h2 class="pb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos quia aut officiis ut, 
              voluptatem molestiae quasi qui a, sequi autem dicta atque dolorum sit inventore id 
              voluptates adipisci sapiente!
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus reiciendis beatae porro itaque nemo iure tenetur incidunt architecto officia vero, eligendi ab rem eos ex dicta voluptas corrupti. Earum.</p>
        </v-col>
      </v-row>
      <!----------------------Position. select a position. Volunteer or isolated---------->
    </section>
    <!----------------------Pacibility---------------------->
    <!-----------------------site user statistics------------->
    <section class="statistics-user">
      <v-row>
        <v-col cols="12">
          <h2 class="pb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos quia aut officiis ut, 
              voluptatem molestiae quasi qui a, sequi autem dicta atque dolorum sit inventore id 
              voluptates adipisci sapiente!
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus reiciendis beatae porro itaque nemo iure tenetur incidunt architecto officia vero, eligendi ab rem eos ex dicta voluptas corrupti. Earum.</p>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="6">
              <h4>Neighboors</h4>
              <p>Нас уже: {{previewInfo.countNeighbors}}</p>
              <p>В сети: {{previewInfo.countNeighbors}}</p>
            </v-col>
            <v-col>
              <h4>Volunteers</h4>
              <p>Нас уже: {{previewInfo.countVolunteers}}</p>
              <p>В сети: {{previewInfo.countNeighbors}}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <!-----------------------site user statistics------------->
		</v-main>
	</v-app>
</template>

<script>

let Airtable = require('airtable');

export default{
	name: "index",
	data: () => ({
    drawer: false,
    group: null,
    previewInfo: {
      countNeighbors: null,
      countVolunteers: null,
      skills: []

    }
  }),
  mounted() {
   const base = new Airtable({apiKey: 'keyvduBWr1shfzZQs'}).base('appJzrXahAuT6QocL');

   const showCountMembers = async (table) => {
      await base(table).select({
       view: "Grid view"
     }).eachPage(records => table === "Neighbors" 
     ? this.previewInfo.countNeighbors = records.length 
     : this.previewInfo.countVolunteers = records.length)
   }

   const showSkills = async () => {
     await base("Skills").select({
       maxRecords: 4,
        view: "Grid view"
     }).eachPage(records => {
       records.forEach(record => {
         this.previewInfo.skills.push(record.fields.Profession)
       });
     })
   }

   showCountMembers("Neighbors")
   showCountMembers("Volunteers")
   showSkills()
  }
}
</script>
