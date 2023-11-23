<template>
  <v-row>
    <!-- Columna del Video -->
    <v-col cols="12" md="6">
      <v-card class="mx-auto my-4" max-width="400">
        <!-- Contenedor de video -->
        <div class="video-container">
          <!-- Agrega la referencia al elemento de video -->
          <video ref="miVideo" controls :src="videoUrl" type="video/mp4"></video>
        </div>
      </v-card>
    </v-col>

    <!-- Columna de la Lista de Pasos -->
    <v-col cols="12" md="6">
      <v-list>
        <v-list-item v-for="(paso, index) in listaDePasos" :key="index">
          <template v-slot:prepend>
            <v-avatar size="150" rounded="0">
              <v-img :src="paso.foto" class="mr-2"></v-img>
            </v-avatar>
          </template>
          <v-list-item-content style="background-color: #f0f0f0;">
            <v-list-item-title class="text-black text-left">{{ paso.nombre }}</v-list-item-title>
            <v-list-item-title class="text-grey text-left">
              {{ paso.inicio }} hasta {{ paso.fin }}
              <v-icon color="error" icon="mdi-timer-music-outline" size="small"></v-icon>
            </v-list-item-title>
            <v-list-item-title class="text-grey text-left">
              <a class="text-black">Tiempo aprendizaje:</a>
              02:00
            </v-list-item-title>
            <v-list-item-title class="text-grey text-left">
              <a class="text-red">Dificultad:</a>
              {{ paso.difucultad }}
            </v-list-item-title>
            <v-list-item-title class="text-left">
              <v-btn @click="reproducirVideo(index)">
                <v-icon color="red" icon="mdi-play-circle" size="36"></v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-btn class="text-white ms-4" elevation="16" color="orange">
        !A BAILAR¡
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: require('@/assets/video_television/Paso1_Television_nombres.mp4'),
      videoThumbnailUrl: require('@/assets/pasos/reproducer/pic1.png'),
      listaDePasos: [
        {
          nombre: "1 Basico Lineal",
          inicio: "00:00",
          fin: "00:04",
          difucultad: "facil",
          foto: require('@/assets/pasos/salsa_Televisio_1/Pasa_Lineal.png'),
        },
        {
          nombre: "2 Basico Lateral",
          inicio: "00:05",
          fin: "00:08",
          difucultad: "intermedio",
          foto: require('@/assets/pasos/salsa_Televisio_1/basico_lateral.png'),
        },
        {
          nombre: "3 Basico Atras",
          inicio: "00:09",
          fin: "00:13",
          difucultad: "facil",
          foto: require('@/assets/pasos/reproducer/pic1.png'),
        },
      ],
      videoElement: null,
    };
  },
  methods: {
    reproducirVideo(index) {
      // Obtén el elemento de video usando la referencia
      this.videoElement = this.$refs.miVideo;

      // Asegúrate de que el elemento de video existe
      if (this.videoElement) {
        // Establece el tiempo de inicio y fin según el índice del paso
        const inicio = parseInt(this.listaDePasos[index].inicio.split(":")[1]); // en segundos
        const fin = parseInt(this.listaDePasos[index].fin.split(":")[1]); // en segundos

        // Establece el tiempo actual del video al inicio
        this.videoElement.currentTime = inicio;

        // Reproduce el video
        this.videoElement.play();

        // Configura un temporizador para detener el video después de 'fin' segundos
        setTimeout(() => {
          this.videoElement.pause();
        }, (fin - inicio) * 1000); // Convierte a milisegundos
      }
    },
  },
};
</script>

<style scoped>
.video-container {
  max-width: 75%;
  margin: auto;
}

video {
  width: 100%;
  height: auto;
}

v-list-item-avatar div {
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center center;
}

.bailar {
  margin-top: 80px;
}
</style>
