<template>
  <v-row no-gutters >
    <v-col cols="12">
      <Home_Layout>
        <template v-slot:app-tittle>
          <span>Miembros</span>
          <spacer></spacer>
          <v-btn  icon @click="newMember=true"><v-icon>mdi-plus-circle</v-icon></v-btn>
        </template>
      </Home_Layout>
    </v-col>

    <v-col cols="12">
      <v-select @change="filterByMinistries(ministryId)" v-model="ministryId" dense outlined label="Filtrar por ministerio" :items="ministries" item-text="name" item-value="id"></v-select>

    </v-col>
    <v-col cols="12" md="6" sm="6" xs="6" v-for="item in members" :key="item.id" >

      <v-card elevation="0" outlined @click="editUser(item)">
        <v-card-text class="text-center">
          <v-img class="ma-auto"  width="80" src="../assets/avatar.png"></v-img>
          <span>{{item.name}} {{item.lastName}}</span>

        </v-card-text>



      </v-card>

    </v-col>

    <v-dialog v-model="newMember" width="800">
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon color="white" left>mdi-table-edit</v-icon>
          Nuevo Miembro
        </v-card-title>
        <v-card-text>
          <New_member @addSuccess="addSuccess"></New_member>
        </v-card-text>
      </v-card>
    </v-dialog>


  </v-row>

</template>

<script>
import Home_Layout from "../views/Home_Layout";
import New_member from "./members/new_member";
export default {
  name: "Members",
  components: {New_member, Home_Layout},
  data:()=>({
    ministries:[],
    ministryId:null,
    newMember:false,
    users:[
      {
        id:1,
        name:'Jorge Mireles',
        ministry: 'Sector Master'
      },
      {
        id:1,
        name:'Moises Doblado',
        ministry: 'Sector Master'
      },
      {
        id:1,
        name:'Caro Zamora',
        ministry: 'Sector Master'
      },
      {
        id:1,
        name:'Jorge Mireles',
        ministry: 'Sector Master'
      },
      {
        id:1,
        name:'Moises Doblado',
        ministry: 'Sector Master'
      },
      {
        id:1,
        name:'Caro Zamora',
        ministry: 'Sector Master'
      },
      {
        id:1,
        name:'Jorge Mireles',
        ministry: 'Sector Master'
      },
      {
        id:1,
        name:'Moises Doblado',
        ministry: 'Sector Master'
      },
      {
        id:1,
        name:'Caro Zamora',
        ministry: 'Sector Master'
      }

    ],
    members:[]
  }),
  methods:{
    editUser(item){
      this.$emit('item',item)
    },
    getMembers(){
      this.$http.get('getMembers').then(response=>{
        console.log(response.data)
        this.members = response.data.data
      }).catch(error=>{
        console.log(error)
      })
    },
    addSuccess(){
      this.newMember=false;
      this.getMembers();
    },
    getMinistries(){
      this.$http.get('ministries').then(response=>{
        this.ministries = response.data.data;
        console.log(response.data.data)
      }).catch(error=>{
        console.log(error)
      })
    },
    filterByMinistries(ministryId){
      this.$http.post('getMembersByMinistrie', {ministryId}).then(response=>{
        console.log(response.data.data)
        this.members = response.data.data
      }).catch(error=>{
        console.log(error)
      })
    }

  },
  mounted() {
    this.getMembers();
    this.getMinistries();
  }
}
</script>
<style scoped>

</style>
