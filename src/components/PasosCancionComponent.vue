<template>
  <v-row>
    <!-- Columna del Video -->
    <v-col cols="12" md="6">
      <v-card class="mx-auto my-4" max-width="400">
        <!-- Contenedor de video -->
        <div class="video-container">
          <video controls :src="videoUrl" type="video/mp4"></video>
        </div>
      </v-card>
    </v-col>

    <!-- Columna de la Lista de Pasos -->
    <v-col cols="12" md="6">
       <v-list>
          <v-list-item v-for="(paso, index) in listaDePasos" :key="index">
            
            <template v-slot:prepend>
              <v-avatar
              size="150"
              rounded="0">
              <v-img :src="videoThumbnailUrl"  class="mr-2"></v-img>

              </v-avatar>
            </template>
            <v-list-item-content>
              <v-list-item-title>{{ paso }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: require('@/assets/salsa_fondo.mp4'),
      videoThumbnailUrl: require('@/assets/pasos/reproducer/pic1.png'),
      listaDePasos: ["Paso básico", "Paso lateral", "Paso cruzado", /* ... otros pasos ... */]
    };
  }
};
</script>

<style scoped>
.video-container {
  max-width: 75%; /* Ajusta el ancho máximo según tus necesidades */
  margin: auto;
}

video {
  width: 100%;
  height: auto;
}

/* Estilo para el fondo de la imagen */
v-list-item-avatar div {
  width: 40px; /* Ajusta el tamaño de la imagen según tus necesidades */
  height: 40px; /* Ajusta el tamaño de la imagen según tus necesidades */
  background-size: cover;
  background-position: center center;
}
</style>
