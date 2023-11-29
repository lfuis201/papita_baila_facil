
<template>
  <v-row class="contenedor-principal">
    <!-- Tarjeta 1 -->
    <v-col v-for="(video, index) in videos" :key="index" cols="12" sm="6" md="4" lg="3" class="canciones_musica">
      <v-card class="mx-auto my-4 pushable mix_tall" elevation=16>
        <!-- Contenedor de video con efecto de elevación -->


        <div class="video-container" @mouseenter="detenerSonido(); reproducirCancion(index)"
          @mouseleave="detenerSonido()">
          <video class="video_edit" autoplay muted loop :src="video.url" type="video/mp4"
            @error="handleVideoError"></video>
        </div>



        <v-card-item>
          <v-card-title>{{ video.cancion }}</v-card-title>

          <v-card-subtitle>
            <span class="me-1">{{ video.autor }}</span>


          </v-card-subtitle>


        </v-card-item>

        <v-card-text>
          <v-row class="mx-0">

            <div class="contenedor_promedio">

              <div class="tiempo-color ms-4">
                Tiempo de aprendizaje:
              </div>
              <div class="text-grey ms-4">
                {{ video.tiempo }}
              </div>

            </div>


            <div class="contenedor_dificultad">
              <div class="tiempo-dificultad">
                Dificultad:
              </div>
              <div v-if="video.dificultad === 'facil'" class="barra-verde-consecutiva">
                <div class="barra-verde"></div>
                <div class="barra-gris"></div>
                <div class="barra-gris"></div>
                <div class="barra-gris"></div>
              </div>
              <div v-else-if="video.dificultad === 'medio'" class="barra-verde-consecutiva">
                <div class="barra-verde"></div>
                <div class="barra-naranja"></div>
                <div class="barra-gris"></div>
                <div class="barra-gris"></div>
              </div>
              <div v-else-if="video.dificultad === 'dificil'" class="barra-verde-consecutiva">
                <div class="barra-verde"></div>
                <div class="barra-naranja"></div>
                <div class="barra-roja"></div>
                <div class="barra-gris"></div>
              </div>
              <div v-else class="barra-gris-consecutiva">
                <div class="barra-gris"></div>
                <div class="barra-gris"></div>
                <div class="barra-gris"></div>
                <div class="barra-gris"></div>
              </div>
            </div>



          </v-row>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Pasos</v-card-title>

        <div class="px-4 px-4_pasos">
          <v-chip-group v-model="selection">
            <v-chip v-for="(paso, i) in video.pasos" :key="i">{{ paso }}</v-chip>
          </v-chip-group>
        </div>

        <v-divider class="mx-4 mb-1"></v-divider>

        <button class="estilo_boton" @click="irAPasosCancion(video.pasosCancion); reproducirSonido()">
          Comenzar
        </button>

      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.contenedor_promedio {
  margin-top: 6px;
  padding-left: 40px;
}


.video-container {
  max-width: 110px;

  /* Establece el ancho máximo deseado para el contenedor del video */
  margin: auto;
  /* Centra el contenedor del video horizontalmente */
  padding-top: 20px;
}



video {
  width: 100%;
  /* Hace que el video ocupe el 100% del ancho del contenedor */
  height: auto;
  /* Mantiene la proporción original del video */
}

.comenzar_button {
  margin-top: 15px;
}

.orange-button {
  background-color: orange;
  color: white;
  margin-bottom: 10px;

}

.pushable:hover {
  filter: brightness(110%);
}

.pushable:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.pushable:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.pushable:focus:not(:focus-visible) {
  outline: none;
}

.me-1 {
  margin-left: 5px;
}

.px-4_pasos {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  /* Agrega estilos específicos según sea necesario */
}

/*boton */

.estilo_boton {
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  appearance: none;
  background-color: transparent;
  border: 0.125em solid #1A1A1A;
  border-radius: 0.9375em;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 2.75em;
  min-width: 0;
  outline: none;
  padding: 0.6em 1.4em;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

button:disabled {
  pointer-events: none;
}

button:hover {
  color: #fff;
  background-color: #f69100;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

button:active {
  box-shadow: none;
  transform: translateY(0);
}

/*Nivel */

/* Estilos para el contenedor del video y el rectángulo negro */
.video-container {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.tiempo-color {
  font-size: 16px;


}

.tiempo-dificultad {
  font-size: 15px;
  font-weight: bold;
}

.contenedor_dificultad {
  margin-top: 6px;
  margin-left: 110px;
  margin-bottom: 8px;
}

/* Dificultad barra */

.barra-verde-consecutiva {
  display: flex;
  gap: 2px;
  /* Puedes ajustar el espacio entre las barras según tus preferencias */
  margin-top: 5px;
}

.barra-gris-consecutiva {
  display: flex;
  gap: 2px;
  /* Puedes ajustar el espacio entre las barras según tus preferencias */
}

.barra-verde {
  width: 25px;
  /* ajusta el ancho según sea necesario */
  height: 5px;
  /* ajusta la altura según sea necesario */
  background-color: green;
  display: inline-block;
}

.barra-naranja {
  width: 25px;
  /* ajusta el ancho según sea necesario */
  height: 5px;
  /* ajusta la altura según sea necesario */
  background-color: orange;
  display: inline-block;
}

.barra-roja {
  width: 25px;
  /* ajusta el ancho según sea necesario */
  height: 5px;
  /* ajusta la altura según sea necesario */
  background-color: red;
  display: inline-block;
}

.barra-blanca {
  width: 25px;
  /* ajusta el ancho según sea necesario */
  height: 5px;
  /* ajusta la altura según sea necesario */
  background-color: rgb(110, 21, 21);
  /* o blanco, según prefieras */
  display: inline-block;
}
</style>

<script>
export default {
  components: {},
  data() {
    return {
      videoUrl: require('@/assets/salsa_fondo.mp4'),
      sonido: null, // Propiedad para almacenar la instancia de Audio
      videos: [
        {
          cancion: 'Talento de Televisión',
          autor: 'Wille Colon',
          tiempo: '06:00',
          url: require('@/assets/video_television/Paso1_Television.mp4'),
          pasos: ['Basico Lineal', 'Basico Lateral', 'Basico Atras'],
          pasosCancion: '/pasoscancionTalento',
          dificultad: 'facil',
        },
        {
          cancion: 'El Dia de mi Suerte',
          autor: 'Los adolescentes',
          tiempo: '05:00',
          url: require('@/assets/video_dia_suerte/video_dia.mp4'),
          pasos: ['Basico', 'Suzie Q', 'Mambo', 'Vuelta-Derecha', 'Menéado'],
          pasosCancion: '/pasoscancionDia',
          dificultad: 'dificil',
        },
        {
          cancion: 'Amores Como el Nuestro',
          autor: 'Los adolescentes',
          tiempo: '03:00',
          url: require('@/assets/video_nuestro_amor/pasos_3__sin_nombre.mp4'),
          pasos: ['Basico', 'Lateral', 'Mambo', 'Abro-Cruzado-Vuelta', 'Vuelta'],
          pasosCancion: '/pasoscancionAmor',
          dificultad: 'medio',
        },
        {
          cancion: 'Yo no se Mañana',
          autor: 'Luis Enrique',
          tiempo: '04:00',
          url: require('@/assets/video_nose_ma/Yo_no_se_sin_nombre.mp4'),
          pasos: ['Basico', 'Diagonales', 'Mambo'],
          pasosCancion: '/pasoscancionNose',
          dificultad: 'medio',
        },
      ],
    };
  },
  methods: {
    reproducirCancion(index) {
      try {
        // Obtener la ruta de la canción actual
        const rutaCancion = this.videos[index].url;

        // Detener la reproducción anterior si existe
        this.detenerSonido();

        // Crear una instancia de Audio
        this.sonido = new Audio(rutaCancion);

        // Reproducir la canción
        this.sonido.play();

        // Agregar un evento para manejar el estado de reproducción
        this.sonido.addEventListener('playing', () => {
          console.log('Canción reproduciéndose');
          // Puedes realizar otras acciones aquí si es necesario
        });

        // Agregar un evento para manejar el estado de pausa
        this.sonido.addEventListener('pause', () => {
          console.log('Canción en pausa');
          // Puedes realizar otras acciones aquí si es necesario
        });

        // Agregar un evento para manejar el estado de finalización
        this.sonido.addEventListener('ended', () => {
          console.log('Canción finalizada');
          // Puedes realizar otras acciones aquí si es necesario
        });
      } catch (error) {
        console.error('Error al reproducir la canción:', error);
      }
    },


    reproducirSonido() {
      try {
        // Ruta al archivo de sonido
        const rutaSonido = require('@/assets/sonido.mp3'); // Ajusta la ruta según tu estructura

        // Detener la reproducción anterior si existe
        this.detenerSonido();

        // Crear una instancia de Audio
        this.sonido = new Audio(rutaSonido);

        // Reproducir el sonido
        this.sonido.play();
      } catch (error) {
        console.error('Error al reproducir la canción:', error);
      }
    },




    detenerSonido() {
      try {
        if (this.sonido && !this.sonido.paused) {
          this.sonido.pause();
          this.sonido.currentTime = 0; // Reiniciar el tiempo de reproducción
        }
      } catch (error) {
        console.error('Error al detener el sonido:', error);
      }
    },

    startAudio() {
      try {
        const videoElement = this.$refs.videoElement;
        // Intenta reproducir el audio solo si el usuario ha interactuado con el elemento de video
        if (videoElement && videoElement.paused) {
          videoElement.muted = false; // Desactiva el modo silencioso
          videoElement.play();
        }
      } catch (error) {
        console.error('Error al reproducir la canción:', error);
      }
    },

    stopAudio() {
      try {
        const videoElement = this.$refs.videoElement;
        if (videoElement) {
          videoElement.pause();
          videoElement.currentTime = 0;
        }
      } catch (error) {
        console.error('Error al reproducir la canción:', error);
      }
    },

    detenerReproduccion() {
      try {
        // Detener la reproducción del video y la canción al salir del mouse
        const videoElement = this.$refs.videoElement;

        // Detener la reproducción del video
        if (videoElement) {
          videoElement.pause();
          videoElement.currentTime = 0;
        }

        // Detener la reproducción de la canción
        this.detenerSonido();
      } catch (error) {
        console.error('Error al reproducir la canción:', error);
      }
    },

    irAPasosCancion(rutaPasosCancion) {
      try {
        // Redirigir a la ruta de los pasos de la canción actual
        this.$router.push(rutaPasosCancion);
      } catch (error) {
        console.error('Error al reproducir la canción:', error);
      }
    },

    beforeUnmount() {
      try {
        // Detener la reproducción del sonido al salir del componente
        this.detenerSonido();
      } catch (error) {
        console.error('Error al reproducir la canción:', error);
      }
    },
    handleVideoError(event) {
      console.error('Error al cargar el video.');

      // Evita que el error se propague al navegador
      event.preventDefault();
    },
  },
};
</script>

