<template>
  <v-container fluid>
    <v-row class="no-gutters">
      <v-col sm="12" class="fill-height">
        <v-app-bar
            color=primary
            dark
            fixed

        >
          <v-toolbar-title>
            <slot name="app-tittle">
            </slot>
          </v-toolbar-title>
          <v-spacer></v-spacer>


        </v-app-bar>


        <v-main>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-main>

      </v-col>




    </v-row>

      <v-bottom-navigation
          :value="value"
          app
          color="primary"
      >
        <div v-for="item in menu" :key="item.id" >
          <v-btn @click="$router.push(item.name)">
            <span>{{item.name}}</span>

            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </div>



      </v-bottom-navigation>


  </v-container>

</template>

<script>
export default {
  name: "Home_Layout",
  components: {},
  data:() => ({
    dialog:false,
    drawer:null,
    route:null,
    menu:[
      {
        id:1,
        name:'Attendance',
        icon:'mdi-playlist-check'
      },
      {
        id:2,
        name:'Members',
        icon:'mdi-account'
      },
      {
        id:3,
        name:'History',
        icon:'mdi-history'
      }
    ]
  }),
  methods:{

  }
}
</script>

<style scoped>

</style>
