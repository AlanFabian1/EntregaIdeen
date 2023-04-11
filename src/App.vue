<template>
  <v-app>
    <v-app-bar
      app
      color="#384FFE"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          src="./assets/tec.png"
          height="50"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/"
        target="_self"
        text
      >
        <span>Inicio</span>
      </v-btn>
      <v-btn
          href="/listas"
          target="_self"
          text
      >
        <span class="mr-xl-12">Lista de materias</span>
      </v-btn>
      <v-btn
          icon
          target="_self"
          @click="cerrarsesion"
          text
      >
        <span class="mr-xl-12"><v-icon>mdi-logout</v-icon></span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import firebase from "firebase/compat/app";
import router from "@/router";

export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods:{

    cerrarsesion(){
      firebase.auth().signOut()
      router.push('/')
    }
  }
};
</script>
