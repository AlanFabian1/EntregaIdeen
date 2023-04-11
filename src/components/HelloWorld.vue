<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div>
          <h1 class="azul">INFORMACIÓN DEL ALUMNO</h1>
        </div>
        <v-avatar color="grey"
                  size="200px"
        ><v-img
            :src="'https://firebasestorage.googleapis.com/v0/b/tarea-jala-porfa.appspot.com/o/juan-escutia2.jpeg?alt=media&token=d95ecb37-40d6-4e79-a73b-7becebff9d71'"
        />
        </v-avatar>
      </v-col>
    </v-row>

    <v-row>
      <v-container >

        <v-row align="center" justify="center">
          <v-col cols="6" sm="3">
            <h3 class="azul">Nombre Completo</h3>
            <p class="griss">Juan Escutia</p>
          </v-col>
          <v-col cols="6" sm="3">
            <h3 class="azul">
              Matrícula
            </h3>
            <p class="griss">A01361234</p>
          </v-col>
        </v-row>


        <v-row align="center" justify="center">
          <v-col cols="6" sm="3">
            <h3 class="azul">
              Correo Institucional
            </h3>
            <p class="griss">A01361234@tec.mx</p>
          </v-col>
          <v-col cols="6" sm="3">
            <h3 class="azul">
              Carrera
            </h3>
            <p class="griss">ISC</p>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="6" class="mx-auto">
            <h3 class="azul">Correo Personal</h3>
            <p class="griss">murioporlapatria@gmail.com</p>
          </v-col>
        </v-row>

      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  name:'HelloWorld',
  mounted() {
    this.obtener_datos();
  },
  data(){
   return{
     info:[
       {primero:"Nombre Completo",segundo:"Juan Escutia"},
       {primero:"Matrícula",segundo:"A01361234"},
       {primero:"Correo Institucional",segundo:"A01361234@tec.mx"},
       {primero:"Carrera",segundo:"ISC"},
       {primero:"Correo personal",segundo:"murioporlapatria@gmail.com"}
     ],
     info2:['nombre']
   }
  },methods:{
    obtener_datos(){
      let email = firebase.auth().currentUser.email
      console.log(email);
      let document = firebase.firestore().collection('users').where('email','===',email).get();
      console.log(document)
      for (let doc in document) {
        console.log(doc)
      }
    }
  }
}
</script>

<style scoped>
 .azul{
  color: #384FFE;
}
 .griss{
   color:#787C9D;
 }
</style>
