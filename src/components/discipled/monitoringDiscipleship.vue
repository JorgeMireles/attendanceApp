<template>
  <v-app>
    <v-app-bar
        color=primary
        dark
        dense
        fixed

    >
      <v-toolbar-title>Monitoreo de Discipulado <v-btn  icon @click="getExcelReport"><v-icon>mdi-download-circle</v-icon></v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>


    </v-app-bar>
    <v-content class="mt-12 pt-10">
      <v-row>
        <v-col cols="12">
          <v-card outlined elevation="1">
            <v-card-text>Discipulador</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card outlined elevation="1">
            <v-card-text>Discipulador</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card outlined elevation="1">
            <v-card-text>Discipulador</v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-content>
  </v-app>

</template>

<script>
import fileDownload from "js-file-download";

export default {
  name: "monitoringDiscipleship",
  methods:{
    getExcelReport(){
      this.$http({
        url: "getExcel",
        method: 'GET',
        responseType: 'blob', // important
      }).then(response => {
        console.log(response)
        fileDownload(response.data, "report.xls");
      }).catch(error => {
        this.$toast.error("Algo salio mal, intente mas tarde")
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>

</style>
