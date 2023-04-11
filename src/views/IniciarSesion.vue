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
      <v-dialog v-model="dialog">
        <v-card>
          <v-card-title class="d-flex" style="color: #384FFE;">Error</v-card-title>
          <v-card-text class="font-weight-black">El Usuario o la Contraseña no son correctos</v-card-text>
          <div>
            <v-card-actions class="d-flex justify-end">
              <v-btn class="text-md-left" style="color: #384FFE" @click="dialog=false">Cerrar</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-dialog>


      <v-form>
        <v-container class="text-center">
          <v-row>
            <v-col cols="12">
              <h1 style="color: #384FFE;">INICIO DE SESIÓN</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                  class="mt-2 mr-3"
                  color="blue"
                  label="Correo Institucional"
                  :rules="valida_correo"
                  v-model="correo_institucional"
                  outlined
              ></v-text-field>
              <v-text-field
                  class="mt-2 mr-3"
                  color="blue"
                  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="visible ? 'text' : 'password'"
                  :rules="reglacontra"
                  label="Contraseña"
                  v-model="contra"
                  outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn class="pt-3 pb-4 boton" color="#384FFE" style="width: 250px;" @click="iniciasesion">Iniciar Sesión</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
    <v-container class="align-center">
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
  name: "iniciarSesion",
  data(){
    return{
      correo_institucional:'',
      contra:'',
      visible:false,
      dialog:false,
      error:false,
      valida_correo:[
        value=>{
          if(/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
          return 'El formato del correo no es el correcto'
        }
      ],
      reglacontra:[
        value=>{
          if(value?.length>5) return true
          return 'La contraseña debe tener 6 caracteres minimo'
        },
      ],

    }
  },
  methods:{
    iniciasesion(){
      firebase.auth().signInWithEmailAndPassword(this.correo_institucional,this.contra).then(()=>{
        router.push('/iniciosesion')
      }).catch(()=>{
        this.dialog=true;
      })
    },
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