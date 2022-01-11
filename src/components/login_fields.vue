<template>
    <v-form>
      <v-text-field v-model="userData.username" label="Username"></v-text-field>
      <v-text-field v-model="userData.password" label="Password" type="password"></v-text-field>
      <v-btn class=" mt-8" block color="primary" @click="login()">Iniciar Sesión</v-btn>
    </v-form>
</template>

<script>
  export default {
    name: 'login_fields',

    data: () => ({

      userData:{
        username:null,
        password:null,
      }

    }),
    methods:{
      login:function(){
          this.$http.post('login',this.userData).then(response => {
                if (response.status == 200){
                  console.log(response)
                  console.log(response.data.data);
                  this.$store.dispatch("name", response.data.data.name)
                  this.$store.dispatch("lastname", response.data.data.lastname)
                  this.$store.dispatch("token", response.data.token)
                  this.$http.defaults.headers["Authorization"] = "Bearer " + response.data.token;
                  this.$router.replace('/report')
                }

                if (response.data.code == 400){
                  this.$toast.error("Usuario o contraseña Invalidos")

                }

              })
              .catch(error => {
                console.log(error)

              })
              .finally(() =>  this.$store.dispatch('working',false))
      },


    }
  }
</script>
