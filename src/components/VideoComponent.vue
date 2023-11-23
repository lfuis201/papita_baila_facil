
<template>
  <v-row class="contenedor-principal">
    <!-- Tarjeta 1 -->
    <v-col v-for="(video, index) in videos" :key="index" cols="12" sm="6" md="4" lg="3" class="canciones_musica">
      <v-card class="mx-auto my-4 pushable" max-width="400" elevation=16>
        <!-- Contenedor de video con efecto de elevación -->
        <div class="video-container" @mouseenter="reproducirCancion(index)" @mouseleave="detenerSonido()">
          <video autoplay muted loop :src="video.url" type="video/mp4"></video>
          <!-- Agregamos las clases para el efecto de elevación -->
          <div class="front"></div>
          <div class="shadow"></div>
        </div>


        <v-card-item>
          <v-card-title>{{ video.cancion }}</v-card-title>

          <v-card-subtitle>
            <span class="me-1">{{ video.autor }}</span>


          </v-card-subtitle>


        </v-card-item>

        <v-card-text>
          <v-row class="mx-0">
            <!--
        <v-rating
          :model-value="3"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
      
          hover
        ></v-rating>
        -->
            <div class="contenedor_promedio">

              <div class="tiempo-color ms-4">
                Promedio de aprendizaje:
              </div>
              <div class="text-grey ms-4">
                02:00
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

        <button class="estilo_boton" @click="reproducirSonido">
          Comenzar
        </button>


        <!-- Otras secciones de la tarjeta (rating, descripción, etc.) -->

        <!-- Botón de reserva u otras acciones -->

      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.contenedor_promedio {
  padding-left: 60px;
}

.video-container {
  max-width: 150px;
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
  margin-top: 15px;
  margin-bottom: 15px;
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
  min-height: 3.75em;
  min-width: 0;
  outline: none;
  padding: 1em 2.3em;
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
          tiempo: '00:13',
          url: require('@/assets/video_television/Paso1_Television.mp4'),
          pasos: ['Basico Lineal', 'Basico Lateral', 'Basico Atras'],
        },
        {
          cancion: 'Me tengo que ir',
          autor: 'Los adolescentes',
          tiempo: '1:00',
          url: require('@/assets/salsa_fondo.mp4'),
          pasos: ['Basico Linaseal', 'Paso Lateral', 'Paso cruzado'],
        },
        {
          cancion: 'Me tengo que ir',
          autor: 'Los adolescentes',
          tiempo: '1:00',
          url: require('@/assets/salsa_fondo.mp4'),
          pasos: ['Basico asA', 'Paso Lateral', 'Paso cruzado'],
        },
        {
          cancion: 'Me tengo que ir',
          autor: 'Los adolescentes',
          tiempo: '1:00',
          url: require('@/assets/salsa_fondo.mp4'),
          pasos: ['Basico as', 'Paso Lateral', 'Paso cruzado'],
        },
      ],
    };
  },
  methods: {
    reproducirCancion(index) {
      // Obtener la ruta de la canción actual
      const rutaCancion = this.videos[index].url;

      // Detener la reproducción anterior si existe
      this.detenerSonido();

      // Crear una instancia de Audio
      this.sonido = new Audio(rutaCancion);

      // Reproducir la canción
      this.sonido.play();
    },

    reproducirSonido() {
      // Ruta al archivo de sonido
      const rutaSonido = require('@/assets/sonido.mp3'); // Ajusta la ruta según tu estructura

      // Detener la reproducción anterior si existe
      this.detenerSonido();

      // Crear una instancia de Audio
      this.sonido = new Audio(rutaSonido);

      // Reproducir el sonido
      this.sonido.play();

      this.$router.push('/pasoscancion');
    },

    detenerSonido() {
      // Detener la reproducción del sonido si existe
      if (this.sonido) {
        this.sonido.pause();
        this.sonido.currentTime = 0; // Reiniciar el tiempo de reproducción
      }
    },
  },
  startAudio() {
    const videoElement = this.$refs.videoElement;
    // Intenta reproducir el audio solo si el usuario ha interactuado con el elemento de video
    if (videoElement && videoElement.paused) {
      videoElement.muted = false; // Desactiva el modo silencioso
      videoElement.play();
    }
  },

  stopAudio() {
    const videoElement = this.$refs.videoElement;
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  },

  detenerReproduccion() {
    // Detener la reproducción del video y la canción al salir del mouse
    const videoElement = this.$refs.videoElement;

    // Detener la reproducción del video
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }

    // Detener la reproducción de la canción
    this.detenerSonido();
  },

  irAPasosCancion() {
    // Navegar a la ruta '/pasoscancion'
    this.$router.push('/pasoscancion');
  },
  beforeUnmount() {
    // Detener la reproducción del sonido al salir del componente
    this.detenerSonido();
  },
};
</script>

<style scoped></style>