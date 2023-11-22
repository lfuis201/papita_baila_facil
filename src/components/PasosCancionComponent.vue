<template>
  <v-row>
    <!-- Columna del Video -->
    <v-col cols="12" md="6">
      <v-card class="mx-auto my-4" max-width="400">
        <!-- Contenedor de video -->
        <div class="video-container">
          <video controls :src="videoUrl" type="video/mp4"></video>
        </div>
      </v-card>
    </v-col>

    <!-- Columna de la Lista de Pasos -->
    <v-col cols="12" md="6">
       <v-list>
          <v-list-item v-for="(paso, index) in listaDePasos" :key="index">
            
            <template v-slot:prepend>
              <v-avatar
              size="150"
              rounded="0">
              <v-img :src="paso.foto"  class="mr-2"></v-img>

              </v-avatar>
            </template>
            <v-list-item-content style="background-color: #f0f0f0;">
              <v-list-item-title class="text-black  text-left">{{ paso.nombre}}</v-list-item-title>
              
              <v-list-item-title class="text-grey text-left">
              {{ paso.minuto}} hasta {{ paso.minuto}}
              <v-icon
                color="error"
                icon="mdi-timer-music-outline"
                size="small"
              ></v-icon>
              </v-list-item-title>
               <v-list-item-title class="text-grey text-left">
             
              <a class="text-black">Tiempo aprendizaje:</a>
              00:00
              </v-list-item-title>
              <v-list-item-title class="text-grey text-left">
             
              <a class="text-red">Dificultad:</a>
              {{ paso.difucultad}}
              </v-list-item-title>

              <v-list-item-title class="text-left">
              <v-btn>
                <v-icon
                  color="red"
                  icon="mdi-play-circle"
                  size="36"
                ></v-icon>
              </v-btn>
              </v-list-item-title>
              
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-btn
        class="text-white ms-4"
        elevation="16"
        color="orange"
        >
          !A BAILAR¡
        </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: require('@/assets/salsa_fondo.mp4'),
      videoThumbnailUrl: require('@/assets/pasos/reproducer/pic1.png'),
      listaDePasos: [
        {
          nombre:"Paso1",
          minuto: "00:00",
          difucultad: "facil",
          foto: require('@/assets/pasos/reproducer/pic1.png'),
        },
        {
          nombre:"Paso2",
          minuto: "00:00",
          difucultad: "intermedio",
          foto: require('@/assets/pasos/reproducer/pic1.png'),
        },
        {
          nombre:"Paso3",
          minuto: "00:00",
          difucultad: "facil",
          foto: require('@/assets/pasos/reproducer/pic1.png'),
        }
      ]
    };
  }
};
</script>

<style scoped>
.video-container {
  max-width: 75%; /* Ajusta el ancho máximo según tus necesidades */
  margin: auto;
}

video {
  width: 100%;
  height: auto;
}

/* Estilo para el fondo de la imagen */
v-list-item-avatar div {
  width: 40px; /* Ajusta el tamaño de la imagen según tus necesidades */
  height: 40px; /* Ajusta el tamaño de la imagen según tus necesidades */
  background-size: cover;
  background-position: center center;
}
</style>
