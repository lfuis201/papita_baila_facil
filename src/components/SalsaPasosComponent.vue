<template>
  <PantallaCargaComponent v-if="isLoading"></PantallaCargaComponent>
  <div class="center-container">
    <h2>Pasos de salsa</h2>
    
    <div class="grid-container">
      <!-- Step 1 -->
      <div class="grid-item">
        <div class="background-square"></div>
        <div class="icon-container">
          <video ref="video1" autoplay muted loop class="icon">
            <source src="@/assets/salsa_fondo.mp4" type="video/mp4" />
          </video>
          <v-icon class="play-icon" @click="redirigirRuta" >mdi-play-circle-outline</v-icon>

        </div>
        <div class="step-info">
          <h3>Paso Basico</h3>
          <h4>Gitana</h4>
          <span>Willie Colon</span>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="grid-item">
        <div class="background-square"></div>
        <div class="icon-container">
          <video ref="video2" autoplay muted loop class="icon">
            <source src="@/assets/salsa_fondo.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="step-info">
          <h3>Paso Lateral</h3>
          <h4>El dia de mi suerte</h4>
          <span>Hector Lavoe  Willie Colon</span>
        </div>
      </div>

      <div class="grid-item">
        <div class="background-square"></div>
        <div class="icon-container">
          <video ref="video2" autoplay muted loop class="icon">
            <source src="@/assets/salsa_fondo.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="step-info">
          <h3>Salsa Choke</h3>
          <h4>Swagga</h4>
          <span>Cali Flow Latino ft Dj Sammy Barbosa</span>
        </div>
      </div>

      <div class="grid-item">
        <div class="background-square"></div>
        <div class="icon-container">
          <video ref="video2" autoplay muted loop class="icon">
            <source src="@/assets/salsa_fondo.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="step-info">
          <h3>Chocolateo</h3>
          <h4>ORLENIS22K</h4>
          <span>Rowa music sessions#2</span>
        </div>
      </div>

     

      <!-- Add more steps as needed -->

    </div>
  </div>
</template>
<script>
import PantallaCargaComponent from '@/components/PantallaCargaComponent.vue';
export default {
  name: 'SalsaPasosComponent',

  components: {
    PantallaCargaComponent
  },
  data() {
    return {
      steps: [
        { title: 'Paso Basico', cancion:"Gitana", autor: 'Willie Colon'  ,videoSrc: './assets/salsa_fondo.mp4'},
        { title: 'Paso Lateral', cancion:"El dia de mi suerte", autor: 'Hector Lavoe & Willie Colon' },
        { title: 'Salsa Choke', cancion:"La murga", autor: 'Hector Lavoe & Willie Colon' },
        { title: 'Chocolateo', cancion:"Eso tilin Remix", autor: 'Tilin' }        // Agrega más pasos según sea necesario
      ],
       isLoading: true,
    };
  },

  methods: {
    redirigirRuta() {
      this.$router.push('/leccion')
    }
  },

  

  created() {
    // Simulación de tiempo de carga (por ejemplo, 3 segundos)
    setTimeout(() => {
      this.isLoading = false; // Oculta la pantalla de carga después de 3 segundos
    }, 3000);
  },
  
};
</script>

<style scoped>
/* Estilos específicos del componente, si es necesario */
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.grid-item {
  position: relative;
  text-align: center;
}

.background-square {
  position: absolute;
  top: 10px; /* Ajusta el margen superior según tus necesidades */
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black; /* Color gris para el fondo */
  border-radius: 8px; /* Agrega bordes redondeados según tus preferencias */
  z-index: -1; /* Coloca el fondo detrás del contenido */
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 10px; /* Ajusta el margen superior según tus necesidades */
}

.icon {
    margin-top: 20px;
  border-radius: 8px;
  height: 280px; /* Ajusta la altura según tus necesidades */
  width: 280px; /* Ajusta el ancho para que sea cuadrado */
  z-index: 10;
}

.step-info {
  text-align: center;
  margin-bottom: 10px; /* Ajusta el margen inferior según tus necesidades */
}

h3 {
  margin-bottom: 5px; /* Ajusta el margen inferior según tus necesidades */
}

span {
  display: block;
}
.play-icon {
  position: absolute;
  font-size: 48px;
  color: white;
  cursor: pointer;
  z-index: 15;
  transition: opacity 0.3s;
}

.play-icon:hover {
  opacity: 0.8;
}
</style>
