<template>

    <v-container class="fill-height ma-auto">
      <v-row justify="center">
        <v-col sm="12" xs="12">
            <v-img contain width="250" class="ma-auto" src="../assets/IBSN isotipo negro.png"></v-img>
            <Login_fields class="ma-auto"></Login_fields>
        </v-col>

      </v-row>
    </v-container>

</template>

<script>
import Login_fields from "../components/login_fields";
export default {
  name: "Auth_login",
  components: {Login_fields},
  data:() => ({
    imageLogin: "../assets/IBSN isotipo negro.png",
  })
}
</script>

<style scoped>

</style>
