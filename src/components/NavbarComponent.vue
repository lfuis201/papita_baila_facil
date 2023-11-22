<template>
  <v-app-bar app color="#f69100">
    <v-btn icon @click="goBack">
      <v-icon class="icon-size">mdi-chevron-left</v-icon>

    </v-btn>
    <v-btn icon @click="goHome">
      <v-icon class="icon-size">mdi-home</v-icon>

    </v-btn>
    <h1>Baila Fácil</h1>

    

    <v-spacer></v-spacer>

    <v-btn icon @click="toggleNightMode">
        <v-icon class="icon-size">mdi-weather-night</v-icon>
    </v-btn>
    
    <v-btn text>Clases</v-btn>
    <v-btn text>Perfil</v-btn>

    
    
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goBack() {
      // Aquí iría la lógica para retroceder
      // Por ejemplo:
      this.$router.go(-1); // Si estás utilizando Vue Router
    },
    goHome() {
      // Agrega la lógica para ir a la página principal
      // Por ejemplo:
      this.$router.push('/clases'); // Ajusta la ruta según tu estructura de ruta
    }
  }
};
</script>
<style>
.icon-size {
  font-size: 50px; /* Tamaño que se ajuste a tus necesidades */
}
</style>
