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
          <h2 class="font-weight-regular mt-5 black--text text-center pb-4">
            Agregar Discipulador
          </h2>
        </v-col>

        <v-col cols="10">
          <v-autocomplete v-model="memberId" :items="members"  :item-text="item => item.name +' '+ item.lastName + ' - ' + item.ministryName" item-value="id" outlined dense label="Discipulador"></v-autocomplete>
        </v-col>

        <v-col cols="10">
          <v-btn color="primary" @click="assingDiscipler(memberId)" block class="mt-4">Asignar</v-btn>
        </v-col>
      </v-row>
    </v-content>

  </div>
</template>

<script>
export default {
  name: "add_discipler",
  data:()=>({
    members:[],
    memberId:null
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
    assingDiscipler(memberId){
      this.$http.post('assignDiscipler', {memberId}).then(response=>{
        alert('Agregado')
        console.log(response.data.data)
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  mounted() {
    this.getMembers();
  }
}
</script>

<style scoped>

</style>
