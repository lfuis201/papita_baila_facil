<template>
  <div class="loading-screen" v-if="isLoading">
    <img src="@/assets/images/body-scan.png" style="width: 20%; height: auto;" class="fade" />
    <div class="spinner"></div>
    <p>Aleja la camara para detectar todo tu cuerpo</p>
  </div>
</template>

<script>
export default {
  name: 'PantallaCargaCamComponent',
  data() {
    return {
      isLoading: true, // Define una variable para controlar la visibilidad del componente de carga
    };
  },
  // Podrías utilizar métodos, eventos o propiedades para controlar la variable `isLoading`
};
</script>

<style>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); /* Fondo semi-transparente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Asegúrate de estar sobre otros elementos */
}

.spinner {
  /* Estilos del spinner, por ejemplo, un spinner animado o un gif */
  /* Aquí puedes agregar un spinner de carga o una animación CSS */
  /* Por ejemplo: */
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
