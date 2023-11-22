import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import EnterenarPasoComponent from './components/EntrenarPasoComponent.vue';

import SalsaPasosComponent from './components/SalsaPasosComponent.vue';
import ClasesComponent from './components/ClasesComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import LeccionComponent from './components/LeccionComponent.vue';
import KpopComponent from './components/KpopComponent.vue';
import BreakDanceComponent from './components/BreakDanceComponent.vue';
import BachataComponent from './components/BachataComponent.vue';
import VideoComponent from './components/VideoComponent.vue';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
 
import { aliases, mdi } from "vuetify/iconsets/mdi";
// make sure to also import the coresponding css
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
  
})


const routes = [
  { path: '/', component: LoginComponent},
  { path: '/salsa-pasos', component: SalsaPasosComponent },
  { path: '/clases', component:  ClasesComponent} ,
  { path: '/leccion', component: LeccionComponent },
  { path: '/kpop', component:  KpopComponent },
  { path: '/entrenar-paso', component:  EnterenarPasoComponent },
  { path: '/breakdance', component:  BreakDanceComponent },
  { path: '/bachata', component:  BachataComponent },
  { path: '/video', component:  VideoComponent },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

app.use(router)

app.use(vuetify)

app.mount('#app')
