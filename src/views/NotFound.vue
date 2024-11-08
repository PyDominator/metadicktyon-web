<template>
    <div class="not-found">
      <div class="container">
        <div class="content">
          <h1 class="error-code">404</h1>
          <h2 class="error-message">Página no encontrada</h2>
          <p class="description">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <router-link to="/HomePage" class="cta-button">
            Regresar al inicio
          </router-link>
        </div>
        <div class="background-overlay"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style scoped>
  .not-found {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0d1f2d; /* Color oscuro con un toque de azul */
    color: white;
    font-family: 'Arial', sans-serif;
  }
  
  .container {
    position: relative;
    text-align: center;
  }
  
  .error-code {
    font-size: 10rem;
    font-weight: bold;
    color: #ff3b3f; /* Un color rojo vibrante para el código de error */
    margin-bottom: 20px;
  }
  
  .error-message {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .description {
    font-size: 1.2rem;
    max-width: 500px;
    margin: 0 auto 30px;
    color: #b0b0b0;
  }
  
  .cta-button {
    background-color: #ff3b3f;
    color: white;
    padding: 10px 20px;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #e32a2e; /* Efecto hover para el botón */
  }
  
  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://via.placeholder.com/1600x900/1A2C3C/FFFFFF?text=Metadicktyon+Solutions') center/cover no-repeat; /* Imagen de fondo con un toque digital */
    opacity: 0.4;
    z-index: 0;
  }
  </style>
  