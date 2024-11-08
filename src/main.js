import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa la configuración de las rutas

createApp(App)
  .use(router) // Usa el enrutador
  .mount('#app');


