<template>
<v-container>
  <v-row class="text-center">
    <v-col cols="12"><h1 align="center" style="color: #384FFE">MATERIAS INSCRITAS</h1></v-col>
  </v-row>

  <v-dialog v-model="dialog" width="500">
    <v-card style="border-radius: 25px" color="white" elevation="3">
      <v-card-title class="d-flex justify-center align-center" style="color: #384FFE">Título de la materia</v-card-title>
      <v-card-text class="font-weight-black"><br> Profesor: Cristiano Ronaldo<br><br>
        Salón: La congeladora<br><br>
        Días: Lunes, Miércoles & Virnes<br><br>
        Horario: 7:00pm - 9:00pm
      </v-card-text>
      <div>
        <v-card-actions class="d-flex justify-end">
          <v-btn class="text-md-left" style="color: #384FFE" @click="dialog=false">Cerrar</v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>


  <v-row align="center" justify="center">
    <v-col v-for="(item,index) in items" :key="index" cols="12" class="d-flex align-center justify-center">
      <v-card rounded="lg" width="800">
      <v-card-title style="color: #384FFE">{{item.title}}</v-card-title>
      <v-card-subtitle class="font-weight-black">{{item.subtitle}}</v-card-subtitle>
      <v-card-actions class="d-flex justify-end">
        <v-btn style="color: #384FFE; text-transform:none" color="transparent" @click="dialog = true"><span>Ver detalles</span></v-btn>
      </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "ListAlumnos",
  data(){
    return{
      items:[
        {title:'Titulo de la materia',subtitle:'Profesor: Cristiano Ronaldo'},
        {title:'Titulo de la materia',subtitle:'Profesor: Cristiano Ronaldo2'},
        {title:'Titulo de la materia',subtitle:'Profesor: Cristiano Ronaldo3'},
        {title:'Titulo de la materia',subtitle:'Profesor: Cristiano Ronaldo4'},
        {title:'Titulo de la materia',subtitle:'Profesor: Cristiano Ronaldo5'}
      ],
      dialog: false
    }
  }
}
</script>
<style scoped>
</style>