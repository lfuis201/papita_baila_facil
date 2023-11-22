<template>
  <v-row>
    <!-- Tarjeta 1 -->
    <v-col v-for="(video, index) in videos" :key="index" cols="12" sm="6" md="4" lg="3">
      <v-card class="mx-auto my-4" max-width="400" elevation=16>
        <!-- Contenedor de video -->
        <div class="video-container">
          <video autoplay muted loop :src="video.url" type="video/mp4"></video>
        </div>

    <v-card-item>
      <v-card-title>{{ video.cancion }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ video.autor }}</span>

        <v-icon
          color="error"
          icon="mdi-music"
          size="small"
        ></v-icon>
      </v-card-subtitle>

      <v-card-subtitle>
        <span class="me-1">{{ video.tiempo }}</span>

        <v-icon
          color="error"
          icon="mdi-timer-music-outline"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="3"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
      
          hover
        ></v-rating>
        

        <div class="tiempo-color ms-4">
        Promedio de aprendizaje:
        </div>
        <div class="text-grey ms-4">
        00:00
        </div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Pasos</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>Paso basico</v-chip>

        <v-chip>Paso Lateral</v-chip>

        <v-chip>Paso cruzado</v-chip>
      </v-chip-group>
    </div>

    <v-btn
      variant="text"
      class="orange-button"
      @click="reproducirSonido"
    >
      Comenzar
    </v-btn>
        <!-- Otras secciones de la tarjeta (rating, descripción, etc.) -->

        <!-- Botón de reserva u otras acciones -->

      </v-card>
    </v-col>
  </v-row>



</template>

<style scoped>
.video-container {
  max-width: 150px; /* Establece el ancho máximo deseado para el contenedor del video */
  margin: auto; /* Centra el contenedor del video horizontalmente */
}

video {
  width: 100%; /* Hace que el video ocupe el 100% del ancho del contenedor */
  height: auto; /* Mantiene la proporción original del video */
}

.orange-button {
  background-color: orange;
  color: white;
  margin-bottom: 10px;
  
}

</style>

<script>

export default {
  components: {
    
  },
  data() {
    return {
        videoUrl: require('@/assets/salsa_fondo.mp4'),

        videos: [
        {
          cancion: 'Me tengo que ir',
          autor: 'Los adolescentes',
          tiempo: '1:00',
          url: require('@/assets/salsa_fondo.mp4')
        },
        {
          cancion: 'Me tengo que ir',
          autor: 'Los adolescentes',
          tiempo: '1:00',
          url: require('@/assets/salsa_fondo.mp4')
        },
        {
          cancion: 'Me tengo que ir',
          autor: 'Los adolescentes',
          tiempo: '1:00',
          url: require('@/assets/salsa_fondo.mp4')
        },
        {
          cancion: 'Me tengo que ir',
          autor: 'Los adolescentes',
          tiempo: '1:00',
          url: require('@/assets/salsa_fondo.mp4')
        },
        ]
    };
  },
  methods: {
    reproducirSonido() {
      // Ruta al archivo de sonido
      const rutaSonido = require('@/assets/sonido.mp3'); // Ajusta la ruta según tu estructura

      // Crear una instancia de Audio
      const sonido = new Audio(rutaSonido);

      // Reproducir el sonido
      sonido.play();

      this.$router.push('/pasoscancion')
    },
  }
};


</script>

<style scoped></style>