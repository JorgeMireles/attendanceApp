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
            Transferir Discipulo
          </h1>
        </v-col>

        <v-col cols="10">
          <v-autocomplete :items="disciples" v-model="transfer.discipleId"  :item-text="item => item.memberName +' '+ item.memberLastName + ' - ' + item.ministryName" item-value="discipleId" outlined dense label="Discipulo"></v-autocomplete>
        </v-col>

        <v-col cols="10">
          <v-autocomplete :items="disciplers" v-model="transfer.disciplerId"  :item-text="item => item.name +' '+ item.lastName + ' - ' + item.ministryName" item-value="disciplerId" outlined dense label="Discipulador"></v-autocomplete>
          <v-btn color="primary" block class="mt-4" @click="TransferDisciple">Transferir</v-btn>
        </v-col>


      </v-row>
    </v-content>

  </div>

</template>

<script>
export default {
  name: "transferDisciple",
  data:()=>({
    disciples:[],
    disciplers:[],
    transfer:{
      discipleId:null,
      disciplerId:null
    }
  }),
  methods:{
    getDisciplers(){
      this.$http.get('getDiscipler').then(response=>{
        console.log(response.data)
        this.disciplers = response.data.data
      }).catch(error=>{
        console.log(error)
      })
    },

    getDisciples() {
      this.$http.get('getDisciples').then(response=>{
        console.log(response.data)
        this.disciples = response.data.data
      }).catch(error=>{
        console.log(error)
      })
    },

    TransferDisciple(){
      this.$http.post('transferDisciple',this.transfer).then(response=>{
        console.log(response.data)
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  mounted() {
    this.getDisciplers();
    this.getDisciples();
  }
}
</script>

<style scoped>

</style>
