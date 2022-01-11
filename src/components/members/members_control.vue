<template>
  <v-container >

    <Members @item="editUser"></Members>

    <v-dialog v-model="editUserDialog" width="800">
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon color="white" left>mdi-table-edit</v-icon>
          Editar Miembro
        </v-card-title>
        <v-card-text>
          <v-row class="mt-2">
            <v-col md="6">
              <v-text-field v-model="user.name" label="Nombre"></v-text-field>
              <v-text-field v-model="user.ministry" label="Ministerio"></v-text-field>
            </v-col>



          </v-row>
          <v-btn  color="primary">Aceptar</v-btn>

        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="newUserDialog" width="800">
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon color="white" left>mdi-table-edit</v-icon>
          Nuevo Miembro
        </v-card-title>
        <v-card-text>
          <v-row class="mt-2">
            <v-col md="6">
              <v-text-field v-model="user.name" label="Nombre"></v-text-field>
              <v-text-field v-model="user.ministry" label="Ministerio"></v-text-field>
            </v-col>



          </v-row>
          <v-btn color="primary">Aceptar</v-btn>

        </v-card-text>
      </v-card>
    </v-dialog>



    <v-btn icon dark color="primary" @click="user={},newUserDialog=true" right bottom fixed>
      <v-icon size="50" >mdi-plus-circle</v-icon>
    </v-btn>

  </v-container>
</template>

<script>
import Members from "../Members";
export default {
  name: "members_control",
  components: {Members},
  data:() => ({
    editUserDialog:false,
    newUserDialog:false,
    user:{},
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
      }

    ]
  }),
  methods:{
    editUser(item){
      this.editUserDialog = true;
      this.user = item;
    }
  }
}
</script>

<style scoped>

</style>
