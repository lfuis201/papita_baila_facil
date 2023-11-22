<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
            <h1>Entrena tu Paso</h1>
          <v-card-title class="headline">
            
            Sube un video con el paso que quieres aprender
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="uploadVideo">
              <v-file-input
                v-model="videoFile"
                accept="video/*"
                label="Subir Video"
                prepend-icon="mdi-video"
                outlined
              ></v-file-input>

              <v-btn type="submit" color="primary" :disabled="!videoFile">
                Subir
                <v-icon right>mdi-cloud-upload</v-icon>
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      videoFile: null,
    };
  },
  methods: {
    uploadVideo() {
      // Aquí implementar la lógica para subir el video
      // Puedes acceder al archivo seleccionado a través de this.videoFile
      console.log("Subir video:", this.videoFile);
      // Lógica para subir el video a tu servidor o servicio de almacenamiento
    },
  },
};
</script>
