<template>
    <nav class="navbar">
      <div class="navbar-container">
        <!-- Logo de la empresa, alineado a la izquierda y clickeable -->
        <router-link to="/" class="logo-container">
          <img src="@/assets/logo.png" alt="Metadicktyon Solutions Logo" class="logo" />
        </router-link>
        
        <!-- Links de navegación -->
        <ul class="nav-links">
          <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/about">Sobre Nosotros</router-link></li>
          <li><router-link to="/services">Servicios</router-link></li>
          <li><router-link to="/contact">Contacto</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  /* Estilos generales para el Navbar */
  .navbar {
    background-color: #ffffff; /* Fondo blanco */
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between; /* Espaciado entre el logo y los links */
    align-items: center;
    padding: 10px 20px;
  }
  
  .logo-container {
    text-align: left; /* Alinea el logo a la izquierda */
    cursor: pointer; /* Añade el cursor pointer para indicar que el logo es clickeable */
  }
  
  .logo {
    width: 50px;
    height: 50px;
    object-fit: contain; /* Mantiene las proporciones del logo */
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
  }
  
  .nav-links li {
    margin: 0 15px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px;
    transition: color 0.3s ease-in-out;
  }
  
  .nav-links a:hover {
    color: #007BFF; /* Color azul para el hover */
  }
  
  /* Media query para responsividad */
  @media (max-width: 768px) {
    .navbar-container {
      flex-direction: column;
      text-align: center;
    }
  
    .nav-links {
      flex-direction: column;
    }
  
    .nav-links li {
      margin: 10px 0;
    }
  }
  </style>
  