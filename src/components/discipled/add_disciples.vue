<template>
  <div>
    <v-app-bar
        color=primary
        dark
        dense

    >
      <v-toolbar-title>Discipulados</v-toolbar-title>
      <v-spacer></v-spacer>


    </v-app-bar>

    <v-content>
      <v-row justify="center">
        <v-col md="12" cols="10">
          <h1 class="font-weight-regular mt-5 black--text text-center pb-4">
            Asignar Discipulo
          </h1>
        </v-col>

        <v-col cols="10">
          <v-autocomplete :items="disciplers" v-model="assign.disciplerId"  :item-text="item => item.name +' '+ item.lastName + ' - ' + item.ministryName" item-value="disciplerId" outlined dense label="Discipulador"></v-autocomplete>

        </v-col>

        <v-col cols="10">
          <v-autocomplete :items="members" v-model="assign.memberId"  :item-text="item => item.name +' '+ item.lastName + ' - ' + item.ministryName" item-value="id" outlined dense label="Discipulo"></v-autocomplete>
          <v-btn color="primary" block class="mt-4" @click="assingDisciple">Asignar</v-btn>
        </v-col>
      </v-row>
    </v-content>

  </div>
</template>

<script>
export default {
  name: "add_disciples",
  data:()=>({
    members:[],
    assign:{
      memberId:null,
      disciplerId:null,
    },
    disciplers:[]
  }),
  methods:{
    getMembers(){
      this.$http.get('getMembers').then(response=>{
        console.log(response.data)
        this.members = response.data.data
      }).catch(error=>{
        console.log(error)
      })
    },
    getDisciplers(){
      this.$http.get('getDiscipler').then(response=>{
        console.log(response.data)
        this.disciplers = response.data.data
      }).catch(error=>{
        console.log(error)
      })
    },
    assingDisciple(){
      this.$http.post('assignDisciple', this.assign).then(response=>{
        alert('Discipulador Asignado')
        console.log(response.data.data)
      }).catch(error=>{
        console.log(error)
      })
    }


  },
  mounted() {
    this.getMembers();
    this.getDisciplers();
  }
}
</script>

<style scoped>

</style>
