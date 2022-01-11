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
            Retirar Discipulo
          </h1>
        </v-col>

        <v-col cols="10">
          <v-autocomplete :items="disciples" v-model="disciple.discipleId"  :item-text="item => item.memberName +' '+ item.memberLastName + ' - ' + item.ministryName" item-value="discipleId" outlined dense label="Discipulo"></v-autocomplete>
          <v-btn color="primary" block class="mt-4" @click="withdrawDisciples">Retirar Discipulado</v-btn>
        </v-col>
      </v-row>
    </v-content>

  </div>
</template>

<script>
export default {
  name: "withdrawDisciple",
  data:()=>({
    disciples:[],
    disciple:{
      discipleId:null
    }
  }),
  methods:{
    getDisciples() {
      this.$http.get('getDisciples').then(response=>{
        console.log(response.data)
        this.disciples = response.data.data
      }).catch(error=>{
        console.log(error)
      })
    },

    withdrawDisciples(){
      this.$http.post('withdrawDisciple',this.disciple).then(response=>{
        console.log(response.data)
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  mounted() {
    this.getDisciples();
  }
}
</script>

<style scoped>

</style>
