<template>
    <v-row>
      <!-- Columna del Video -->
      <v-col cols="12" md="6">
        <v-card class="mx-auto my-4 sombreado_video pasos-card_video" max-width="400">
          <!-- Contenedor de video -->
          <div class="video-container">
            <!-- Agrega la referencia al elemento de video -->
            <video ref="miVideo" controls :src="videoUrl" type="video/mp4"></video>
          </div>
        </v-card>
      </v-col>
  
      <!-- Columna de la Lista de Pasos -->
      <!-- Columna de la Lista de Pasos -->
      <v-col cols="12" md="6">
        <v-card class="pasos-card">
          <v-list>
            <v-list-item v-for="(paso, index) in listaDePasos" :key="index">
              <template v-slot:prepend>
                <v-avatar size="150" rounded="0">
                  <v-img :src="paso.foto" class="mr-2"></v-img>
                </v-avatar>
              </template>
              <v-list-item-content class="pasos_linea" style="background-color: #f0f0f0;">
                <v-list-item-title class="text-black text-left">{{ paso.nombre }}</v-list-item-title>
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
        </v-card>
      </v-col>
    </v-row>
  
  
    <button class="boton_baile_ir"> A Bailar !!!
    </button>
  </template>
    
  <script>
  export default {
    data() {
      return {
        videoUrl: require('@/assets/video_nuestro_amor/pasos_3_nombre.mp4'),
        videoThumbnailUrl: require('@/assets/pasos/reproducer/pic1.png'),
        listaDePasos: [
          {
            nombre: "1. Basico",
            inicio: "00:00",
            fin: "00:05",
            difucultad: "facil",
            foto: require('@/assets/pasos/salsa_Televisio_1/Group_1.png'),
          },
          {
            nombre: "2. Lateral",
            inicio: "00:05",
            fin: "00:09",
            difucultad: "intermedio",
            foto: require('@/assets/pasos/salsa_Televisio_1/Group_2.png'),
          },
          {
            nombre: "3. Mambo",
            inicio: "00:09",
            fin: "00:12",
            difucultad: "facil",
            foto: require('@/assets/pasos/salsa_Televisio_1/Group_3.png'),
          },
          {
            nombre: "4. Abro-Cruzado-Vuelta",
            inicio: "00:12",
            fin: "00:14",
            difucultad: "facil",
            foto: require('@/assets/pasos/salsa_Televisio_1/Group_3.png'),
          },
          {
            nombre: "5. Vuelta",
            inicio: "00:14",
            fin: "00:29",
            difucultad: "facil",
            foto: require('@/assets/pasos/salsa_Televisio_1/Group_3.png'),
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
  .sombreado_video {
    -webkit-box-shadow: 21px 16px 14px 0px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 21px 16px 14px 0px rgba(0, 0, 0, 0.61);
    box-shadow: 21px 16px 14px 0px rgba(0, 0, 0, 0.61);
  
  }
  
  .video-container {
  
    max-width: 60%;
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
  
  
  
  .pasos_linea::after {
    content: "";
    /* Necesario para crear un elemento pseudo ::after */
    display: block;
    /* Hace que el elemento pseudo sea un bloque */
    border-bottom: 2px solid rgb(196, 196, 196);
    /* Establece una línea en la parte inferior con 2 píxeles de grosor y color rojo */
    margin-top: 10px;
    /* Ajusta el espacio entre el contenido y la línea inferior */
  }
  
  .bailar {
    margin-top: 80px;
  }
  
  /*Boton Bailar */
  
  .boton_baile_ir {
    margin-top: 35px;
    color: #ecf0f1;
    padding: 0.7em 5em;
    font-size: 25px;
    border-radius: 0.5em;
    background: #f39c12;
    border: 1px solid #e8e8e8;
    transition: all .3s;
    box-shadow: 6px 6px 12px #c5c5c5,
      -6px -6px 12px #ffffff;
  }
  
  .boton_baile_ir:hover {
    border: 1px solid #c0392b;
  }
  
  .boton_baile_ir:active {
    box-shadow: 4px 4px 12px #c5c5c5,
      -4px -4px 12px #ffffff;
  }
  
  .pasos-card_video {
    max-height: 500px;
  }
  
  .pasos-card {
    margin-top: 30px;
    margin-right: 80px;
    max-height: 430px;
    /* Establece la altura máxima deseada */
    overflow-y: auto;
    /* Agrega desplazamiento vertical si excede la altura máxima */
  }
  </style>
    