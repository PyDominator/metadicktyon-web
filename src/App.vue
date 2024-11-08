<template>
  <div id="app">
    <!-- Barra de navegación -->
    <Navbar />
    
    <!-- Contenedor principal con margen superior para evitar que el contenido quede oculto debajo de la navbar -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
// Importa el componente Navbar
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar // Registra el componente Navbar
  }
};
</script>

<style>
/* Agregar margen superior al contenido para que no quede debajo de la navbar */
.main-content {
  padding-top: 70px; /* Ajusta este valor según la altura de tu navbar */
}

/* Si la navbar tiene una altura diferente, ajusta este valor */
</style>
