<template>
  <h1 class="genre-header">Selecciona tu género de baile</h1>

  <div class="nombre_persona">

    <p class="text_name">{{ $route.query.username }}</p>

    <div class="arrow_movimiento">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-down-lines" width="72"
        height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z" />
        <path d="M15 3h-6" />
        <path d="M15 6h-6" />
      </svg>
    </div>

  </div>

  <Carousel wrap-around="true">
    <!-- Slide 1 -->
    <Slide :key="1" @click="goToAnotherComponent(1); reproducirSonido()">

      <div class="carousel__item">
        <video ref="video" autoplay muted loop class="video-background" @mouseover="startAudio($refs.video)"
          @mouseout="stopAudio($refs.video)">
          <source src="@/assets/salsa_fondo.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 class="slide-title">Salsa</h1>
    </Slide>

    <!-- Slide 2 -->
    <Slide :key="2" @click="goToAnotherComponent(2)">
      <div class="carousel__item">
        <h1 class="slide-title">Bachata</h1>
        <video ref="video1" autoplay muted loop class="video-background" @mouseover="startAudio($refs.video1)"
          @mouseout="stopAudio($refs.video1)">
          <source src="@/assets/bachata_fondo.mp4" type="video/mp4" />
        </video>
      </div>
    </Slide>

    <!-- Slide 3 -->
    <Slide :key="3" @click="goToAnotherComponent(4)">
      <div class="carousel__item">
        <h1 class="slide-title">Break Dance</h1>
        <video ref="video2" autoplay muted loop class="video-background" @mouseover="startAudio($refs.video2)"
          @mouseout="stopAudio($refs.video2)">
          <source src="@/assets/break_fondo.mp4" type="video/mp4" />
        </video>
      </div>
    </Slide>

    <!-- Slide 4 -->
    <Slide :key="4" @click="goToAnotherComponent(4)">
      <div class="carousel__item">
        <h1 class="slide-title">Tango</h1>
        <video ref="video3" autoplay muted loop class="video-background" @mouseover="startAudio($refs.video3)"
          @mouseout="stopAudio($refs.video3)">
          <source src="@/assets/tango_fondo.mp4" type="video/mp4" />
        </video>
      </div>
    </Slide>

    <!-- Slide 5 -->
    <Slide :key="5">
      <div class="carousel__item">
        <h1 class="slide-title" background="#f69100">K-pop</h1>
        <video ref="video4" autoplay muted loop class="video-background" @mouseover="startAudio($refs.video4)"
          @mouseout="stopAudio($refs.video4)">
          <source src="@/assets/kpop_fondo.mp4" type="video/mp4" />
        </video>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'ClasesComponent',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  username() {
    return this.$route.query.username;
  },
  data() {
    return {

    };
  },
  methods: {
    goToAnotherComponent(slide) {
      // Redirecciona a la ruta pasos-salsa al hacer clic en el Slide 1
      if (slide === 1) {
        this.reproducirSonido();
        this.$router.push('/video');
      }
    },
    reproducirSonido() {
      try {
        const rutaSonido = require('@/assets/intro_salsa.mp3'); // Ajusta la ruta según tu estructura
        this.detenerSonido();
        this.sonido = new Audio(rutaSonido);
        this.sonido.play();
      } catch (error) {
        console.error('Error al reproducir la canción:', error);
      }
    },
    startAudio(videoElement) {
      // Intenta reproducir el audio solo si el usuario ha interactuado con el elemento de video
      if (videoElement && videoElement.paused) {
        videoElement.muted = false; // Desactiva el modo silencioso
        videoElement.play();
      }
    },

    stopAudio(videoElement) {
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }

    },

    updateCurrentSlideIndex(index) {
      this.currentSlideIndex = index;
    },


  }
}
</script>

<style>
.carousel__item {
  min-height: 65vh;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  /* Asegura que el video no se desborde del contenedor */
}

.video-background {
  width: 40%;
  /* Ajusta el ancho del video al 100% del contenedor */
  height: 70%;
  /* Ajusta la altura del video al 100% del contenedor */
  object-fit: cover;
  position: absolute;
  top: 50%;
  /* Centra verticalmente */
  left: 50%;
  /* Centra horizontalmente */
  transform: translate(-50%, -50%);
  /* Ajusta para centrar correctamente */
  z-index: 22;

}


.content-overlay {
  /* Estilos adicionales para el contenido superpuesto */
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(0, 128, 0, 0.7);
  /* Color verde con opacidad */
}

.carousel__slide {
  padding: 10px;
}

.carousel__item {
  position: relative;
}

.slide-title {
  position: absolute;
  top: 420px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 23;
  font-size: 30px;
  color: #e67e22;
  text-decoration: underline;
  text-transform: uppercase;
}

.genre-header {

  margin-top: 50px;
  color: #d35400;
  text-transform: uppercase;
  font-size: 35px;
  font-family: "Verdana", "Bitstream Vera Serif", serif;
}

/* nombre */

.text_name {
  margin-top: 10px;
  color: #c87742;
  font-size: 30px;
  text-transform: uppercase;
  margin-right: 10px;
  margin-left: 10px;
  font-family: "Roboto", serif;
  position: relative;
  /* Añadir posición relativa para que el subrayado sea relativo a este elemento */
  overflow: hidden;
  /* Ocultar el exceso de línea que aparecerá progresivamente */
}

.text_name::after {
  content: '';
  /* Contenido vacío necesario para que ::after funcione */
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  /* Altura inicial del subrayado (puedes ajustar según sea necesario) */
  width: 0;
  /* Longitud inicial del subrayado */
  background-color: #c87742;
  /* Color del subrayado */
  transition: width 0.3s ease;
  /* Agregar transición para un efecto suave */
}

.text_name:hover::after {
  width: 100%;
  /* Longitud completa del subrayado al pasar el cursor */
}

.nombre_persona {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.arrow_movimiento {
  animation: moveUpDown 0.5s infinite alternate;
  /* 1.5s de duración, infinita y en sentido alterno */
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0);
    /* Posición inicial */
  }

  100% {
    transform: translateY(10px);
    /* Desplazamiento hacia abajo */
  }
}</style>
