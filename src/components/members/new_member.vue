<template>
  <div>
    <v-row class="mt-2">
      <v-col md="6">
        <v-text-field v-model="member.name" label="Nombre"></v-text-field>
        <v-text-field v-model="member.lastname" label="Apellido"></v-text-field>
        <v-select v-model="member.ministryId" :items="ministries" item-text="name" item-value="id" label="Ministerio"></v-select>
        <v-select v-model="member.roleId" :items="roles" item-text="name" item-value="id" label="Rol"></v-select>
      </v-col>
    </v-row>
    <v-btn color="primary" @click="newMember">Aceptar</v-btn>
  </div>

</template>

<script>
export default {
  name: "new_member",
  data:()=>({
    ministries:[],
    roles:[],
    member:{
      name:null,
      lastname:null,
      ministryId:null,
      roleId:null
    }
  }),
  methods:{
    getMinistries(){
      this.$http.get('ministries').then(response=>{
        this.ministries = response.data.data;
        console.log(response.data.data)
      }).catch(error=>{
        console.log(error)
      })
    },
    getRoles(){
      this.$http.get('roles').then(response=>{
        this.roles = response.data.data;
        console.log(response.data.data)
      }).catch(error=>{
        console.log(error)
      })
    },
    newMember(){
      this.$http.post('newMember',this.member).then(response => {
        console.log(response.data)
        this.$emit('addSuccess');
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  mounted() {
    this.getMinistries();
    this.getRoles();
  }
}
</script>

<style scoped>

</style>
