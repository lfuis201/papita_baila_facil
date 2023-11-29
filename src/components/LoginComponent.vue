<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-8" elevation="12">
          <!-- Coloca aquí el logo de tu página -->
          <img src="@/assets/dancing.png" style="max-width: 50%; height: auto;" class="fade" />
          <p class="text-h6 me_baila">Baila Facil</p>


        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="2" md="4">
        <v-card class="pa-9" elevation="12">
          <div class="texttitle">
            Ingresa tu nombre
          </div>

          <v-form>
            <v-text-field v-model="message" :append-icon="message" :prepend-icon="icon" variant="filled"
              clear-icon="mdi-close-circle" clearable label="nombre" type="text" @click:append-inner="toggleMarker"
              @click:append="sendMessage" @click:prepend="changeIcon" @click:clear="clearMessage"
              class="custom-label-color"></v-text-field>
            <!-- Botón de ingresar -->
            <v-btn @click="login" color="#d27300" class="mt-2" elevation="16">
              Ingresar
            </v-btn>
          </v-form>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      message: '',
      marker: true,
      iconIndex: 0,
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
    };


  },
  computed: {
    icon() {
      return this.icons[this.iconIndex]
    },
  },

  methods: {
    login() {
      console.log('Before setting username:', this.username);
      if (this.message.trim() !== '') {
        this.username = this.message.trim();
        console.log('After setting username:', this.username);
        this.$router.push({ path: '/clases', query: { username: this.username } });
        console.log('Iniciar sesión con el nombre de usuario:', this.username);
      } else {
        console.error('El nombre de usuario no puede estar vacío.');
      }
    },
    toggleMarker() {
      this.marker = !this.marker
    },
    sendMessage() {
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
    resetIcon() {
      this.iconIndex = 0
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? this.iconIndex = 0
        : this.iconIndex++
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.text-h6 {
  color: #fc4b08;
  /* Color naranja oscuro */
  font-weight: bold;
  font-family: 'Danza', sans-serif;
  /* Cambia 'Danza' por la fuente que desees */
}

.texttitle {
  color: #fc4b08;
  font-weight: bold;
}

/*nombre */

.me_baila{
  margin-top: 20px;
}
</style>
