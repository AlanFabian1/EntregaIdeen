<template>
  <v-app>
    <v-app-bar
        app
        color="#384FFE"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            src="../assets/tec.png"
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
        <span>Iniciar sesión</span>
      </v-btn>
      <v-btn
          href="/registro"
          target="_self"
          text
      >
        <span class="mr-xl-12">Registrarse</span>
      </v-btn>

    </v-app-bar>
    <v-container class="text-center">
      <v-row class="text-center">
        <v-col cols="12"><h1 style="color: #384FFE">CREA UNA CUENTA</h1></v-col>
      </v-row>



      <v-dialog v-model="dialog">
        <v-card>
          <v-card-title class="d-flex" style="color: #384FFE">Error</v-card-title>
          <v-card-text class="font-weight-black text--primary">El correo ya existe en la base de datos</v-card-text>
          <div>
            <v-card-actions class="d-flex justify-end">
              <v-btn class="text-md-left" style="color: #384FFE" @click="dialog=false">Cerrar</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-dialog>


      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field
                class="mt-2 mr-3"
                color="blue"
                label="Nombre Completo"
                outlined
                v-model="nombre"
            ></v-text-field>
            <v-text-field
                class="mt-2 mr-3"
                color="blue"
                label="Matrícula"
                outlined
                v-model="matricula"
            ></v-text-field>
            <v-text-field
                class="mt-2 mr-3"
                color="blue"
                label="Carrera"
                :rules="reglacarrera"
                outlined
                v-model="carrera"
            ></v-text-field>
            <v-text-field
                class="mt-2 mr-3"
                color="blue"
                label="Correo Institucional"
                outlined
                :rules="valida_correo"
                v-model="correo_institucional"
            ></v-text-field>
            <v-text-field
                class="mt-2 mr-3"
                color="blue"
                label="Correo Personal"
                :rules="valida_correo"
                outlined
                v-model="correo_personal"
            ></v-text-field>
            <v-text-field
                class="mt-2 mr-3"
                label="Contraseña"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                :rules="reglacontra"
                v-model="contra"
                outlined
            ></v-text-field>
            <v-text-field
                class="mt-2 mr-3"
                label="Confirmar Contraseña"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                :rules="valida_contras_iguales"
                v-model="verifica_contra"
                outlined
            ></v-text-field>
          </v-col>


          <v-row>
            <v-col class="d-flex justify-center align-center">
              <v-checkbox
                  class="lg12"
                  color="blue"
                  label="Acepto términos y condiciones"></v-checkbox>
            </v-col>
          </v-row>
        </v-row>

        <v-row>
          <v-col>
            <v-btn class="pt-3 pb-4 boton" color="#384FFE" style="width: 250px;" @click="onSubmit">Registrarse</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import firebase from "firebase/compat/app";
import router from "@/router";

export default {
name: "registro-usuario",
  data(){
    return{
      nombre:'',
      matricula:'',
      correo_institucional:'',
      correo_personal:'',
      carrera:'',
      reglacarrera:[
        value=>{
          if(value?.length>2) return true
          return 'La contraseña debe tener 3 caracteres minimo'
        },
      ],
      valida_correo:[
          value=>{
            if(/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
            return 'El formato del correo no es el correcto'
          }
      ],
      contra:'',
      reglacontra:[
          value=>{
            if(value?.length>5) return true
            return 'La contraseña debe tener 6 caracteres minimo'
          },
      ],
      verifica_contra:'',
      valida_contras_iguales:[
          valor=>{
            if(valor === this.contra) return true
            return 'Las contraseñas no son iguales'
          }
      ],
      visible:false,
      dialog:false,
      error:false,
    }
  },
  methods:{
    onSubmit(){
      firebase.auth().createUserWithEmailAndPassword(this.correo_institucional,this.contra).then(()=>{
        firebase.auth().signInWithEmailAndPassword(this.correo_institucional,this.contra)
        firebase.firestore().collection('users').doc(this.correo_institucional).set({
          'nombre':this.nombre,
          'matricula':this.matricula,
          'carrera':this.carrera,
          'correo_institucional':this.correo_institucional,
          'correo_personal':this.correo_personal,
        })
        router.push('/iniciosesion')
      })
          .catch(()=>{
            this.dialog=true;
          })
    },
    obtener_datos(){
      let correo = firebase.auth().currentUser.email;
      var info={
        'nombre':'',
        'matricula':'',
        'carrera':'',
        'correo_institucional':'',
        'correo_personal':'',
      }
      firebase.firestore().collection('users').doc(correo).get(info)
    }
  }
}
</script>

<style scoped>
.boton{
  text-transform: none;
  font-weight: bold;
  color: white;
}
</style>