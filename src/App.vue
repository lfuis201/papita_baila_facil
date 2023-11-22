<template>
  <v-app>
    <v-main>
      <NavbarComponent></NavbarComponent>
      <div id="app" class="content-container">
        <PantallaCargaComponent v-if="isLoading"></PantallaCargaComponent>
        <router-view></router-view>

      </div>
    </v-main>
  </v-app>
  
</template>

<script>

import PantallaCargaComponent from './components/PantallaCargaComponent.vue'; 
import NavbarComponent from './components/NavbarComponent.vue'; 


export default {
  name: 'App',
  components: {
    PantallaCargaComponent,
    NavbarComponent
  },

  data() {
    return {
      isLoading: true, // Inicialmente, la pantalla de carga estará visible
    };
  },
  created() {
    // Simulación de tiempo de carga (por ejemplo, 3 segundos)
    setTimeout(() => {
      this.isLoading = false; // Oculta la pantalla de carga después de 3 segundos
    }, 3000);
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
