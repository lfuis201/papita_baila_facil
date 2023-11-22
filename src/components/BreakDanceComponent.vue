<template>
  <v-container fluid>
    <v-row>
      <!-- Mitad izquierda: Lista de pasos -->
      <v-col cols="6">
        <div>
          <v-card-title class="text-h5">Lista de Canciones</v-card-title>
          
          <v-list>
            <v-list-item-group v-model="selectedStep">
              <v-list-item v-for="(song, index) in songs" :key="index" @click="selectStep(index)">
                <v-img :src="song.thumbnail" alt="Thumbnail" width="40" height="40"></v-img>
               
                <v-list-item-content>
                  <v-list-item-title>
                    <strong>{{ song.title }}</strong> - {{ song.author }} ({{ song.duration }})
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </v-col>

      <!-- Mitad derecha: Previsualización con imágenes -->
      <v-col cols="6">
        <div>
          <v-card-title class="text-h5">Previsualización</v-card-title>
          <v-img
            v-if="selectedStep !== null"
            :src="getImageUrl(selectedStep)"
            height="300"
            aspect-ratio="1"
            cover
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>

            
          </v-img>

          <v-card-title v-if="selectedStep !== null" class="text-h6 mt-2">
            {{ songs[selectedStep].title }} - {{ songs[selectedStep].author }}
          </v-card-title>
          <v-card-subtitle v-if="selectedStep !== null">
            Duración: {{ songs[selectedStep].duration }}
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-icon class="mdi mdi-skip-backward icon-size" color="#f69100"></v-icon>
              <v-btn
                class="ma-2"
                
                icon=" mdi-play-circle-outline"
                color="#f69100"
              ></v-btn>
              <v-icon  class="mdi mdi-skip-forward icon-size" color="#f69100"></v-icon>
              
            </v-row>
          </v-card-subtitle>
          
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      songs: [
        { title: "Canción 1", author: "Autor 1", duration: "3:30", thumbnail: "url_de_la_imagen_1" },
        { title: "Canción 2", author: "Autor 2", duration: "4:15", thumbnail: "url_de_la_imagen_2" },
        { title: "Canción 3", author: "Autor 3", duration: "2:50", thumbnail: "url_de_la_imagen_3" },
        // Agrega más canciones según sea necesario
      ],
      selectedStep: null // Índice de la canción seleccionada
    };
  },
  methods: {
    selectStep(index) {
      this.selectedStep = index;
    },
    getImageUrl(stepIndex) {
      // Retorna la URL de la imagen basada en el índice de la canción
      return `https://picsum.photos/500/300?image=${stepIndex * 5 + 10}`;
    }
  }
};
</script>
