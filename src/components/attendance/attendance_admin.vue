<template>
  <v-container fluid>
    <h1 class="font-weight-regular mt-10 text-center">26 de Diciembre 2021</h1>
    <v-row class="mt-5">
      <v-col cols="12" v-for="item in attendances" :key="item.id">
        <v-card elevation="0" outlined @click="editAttendance(item)">
          <v-card-title>
            {{item.name}}
          </v-card-title>

          <v-card-text>
            {{item.date}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn icon dark color="primary" right bottom fixed @click="newAttendanceDialog=true">
      <v-icon size="50" >mdi-plus-circle</v-icon>
    </v-btn>

    <v-dialog v-model="newAttendanceDialog" width="800">
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon color="white" left>mdi-table-edit</v-icon>
          Nueva Asistencia
        </v-card-title>
        <v-card-text>
          <new_member></new_member>
        </v-card-text>
      </v-card>
    </v-dialog>


  </v-container>
</template>

<script>
import new_member from "../members/new_member";
export default {
  name: "attendance_admin",
  components: {new_member},
  data:()=>({
    newAttendanceDialog:false,
    attendances:[
      {
        id:1,
        name:'Reunion semanal',
        date:'25-12-2021'
      },
      {
        id:2,
        name:'Culto Dominical',
        date:'26-12-2021'
      }
    ],
    attendance:{}
  }),
  methods:{
    editAttendance(){
      this.$router.replace('attendance_control')
    }
  }
}
</script>

<style scoped>

</style>
