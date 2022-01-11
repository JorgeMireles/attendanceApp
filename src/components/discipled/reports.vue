<template>
  <v-app>
    <v-app-bar
        color=primary
        dark
        dense
        fixed

    >
      <v-toolbar-title>Reporte Discipulado</v-toolbar-title>
      <v-spacer></v-spacer>


    </v-app-bar>
    <v-content class="mt-12 pt-10">
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="11" md="6">
              <v-autocomplete @change="getDisciples()" v-model="report.disciplerId" prepend-icon="mdi-account-tie" :items="disciplers" :item-text="item => item.name +' '+ item.lastName + ' - ' + item.ministryName" item-value="disciplerId" outlined dense label="Discipulador"></v-autocomplete>
              <v-autocomplete v-model="report.discipleId" prepend-icon="mdi-account" :items="disciples" :item-text="item => item.name +' '+ item.lastName + ' - ' + item.ministryName" item-value="id" outlined dense label="Discipulo"></v-autocomplete>
              <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="report.date"
                      outlined
                      dense
                      label="Fecha"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="report.date"
                    color="primary"
                    @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
              <v-select v-model="report.lessonId" outlined label="Lección" dense :items="lessons" item-value="id" item-text="name" prepend-icon="mdi-format-list-numbered"></v-select>
              <v-select v-model="report.goalId" dense outlined label="Meta" :items="goals" item-text="name" item-value="id" prepend-icon="mdi-flag-checkered"></v-select>
              <v-text-field v-model="report.reading" dense outlined label="Lectura" prepend-icon="mdi-book-open-variant"></v-text-field>
              <v-textarea v-model="report.comments" dense outlined label="Comentarios" prepend-icon="mdi-comment-outline"></v-textarea>
              <v-switch :prepend-icon="report.active ? 'mdi-check' : 'mdi-close' " v-model="report.active" :label="report.active ? 'Discipulado Activo':'Discipulado Inactivo'" dense color="primary" inset></v-switch>
              <v-btn color="primary" @click="sendReport"  block>Enviar</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-content>
  </v-app>

</template>

<script>

import fileDownload from "js-file-download";

export default {

  name: "reports",
  data:()=>({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu:false,
    disciplers:[],
    disciples:[],
    report:{
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      disciplerId:null,
      discipleId:null,
      lessonId:null,
      goalId:null,
      reading:null,
      comments:null,
      active:true,
    },
    lessons:[],
    goals:[]
  }),
  methods:{
    sendReport(){
      this.$http.post('report',this.report).then(response=>{
        console.log(response.data.data);
        alert('Reporte Enviado')
      }).catch(error => {
        console.log(error)
      }).finally(()=>{
        console.log('ok')
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

    getDisciples(){
      this.$http.post('getDisciplesByDiscipler',{
        disciplerId:this.report.disciplerId
      }).then(response=>{
        this.disciples = response.data.data
        console.log(response.data)
      }).catch(error=>{
        console.log(error)
      })
    },

    getLessons(){
      this.$http.get('getLessons').then(response=>{
        console.log(response.data)
        this.lessons = response.data.data
      }).catch(error=>{
        console.log(error)
      })
    },
    getGoals(){
      this.$http.get('getGoals').then(response=>{
        console.log(response.data)
        this.goals = response.data.data
      }).catch(error=>{
        console.log(error)
      })
    },

    getExcel(){
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



    /*
        sendReport(){
          let reportFormat =  [];
          reportFormat.push(
              {
                Discipulador:this.report[0].discipler,
                Discipulo: this.report[0].disciple,
                Lección: this.report[0].lesson,
                Meta: this.report[0].goal,
                Lectura: this.report[0].reading,
                Comentarios: this.report[0].comments
              }
          )
          let data = XLSX.utils.json_to_sheet(reportFormat);
           const workbook = XLSX.utils.book_new();
          const filename = "planilla";
          XLSX.utils.book_append_sheet(workbook, data, filename);
          XLSX.writeFile(workbook, `${filename}.xlsx`);
        }
    */
  },
  mounted() {
    this.getDisciplers();
    this.getGoals();
    this.getLessons();
    //this.getExcel();
    //this.sendReport();
  }
}
</script>

<style scoped>

</style>
