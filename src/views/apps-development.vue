<template>
    <div class="custom-app-development">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Desarrollo de Apps a Medida</h1>
          <p>Transformamos tus ideas en aplicaciones móviles y web personalizadas para llevar tu negocio al siguiente nivel.</p>
          <a href="#contact" class="cta-button">Inicia tu Proyecto</a>
        </div>
      </section>
  
      <!-- ¿Por qué elegirnos? Section -->
      <section class="why-choose-us">
        <div class="container">
          <h2>¿Por qué elegirnos?</h2>
          <div class="benefits">
            <div class="benefit-card">
              <h3>Soluciones Personalizadas</h3>
              <p>Desarrollamos apps que se ajustan a tus necesidades y las de tu negocio.</p>
            </div>
            <div class="benefit-card">
              <h3>Alta Calidad y Escalabilidad</h3>
              <p>Nuestras aplicaciones están hechas para crecer con tu empresa, manteniendo siempre un rendimiento óptimo.</p>
            </div>
            <div class="benefit-card">
              <h3>Soporte Continuo</h3>
              <p>Ofrecemos soporte post-lanzamiento para garantizar el éxito continuo de tu aplicación.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Nuestro Proceso -->
      <section class="our-process">
        <div class="container">
          <h2>Nuestro Proceso</h2>
          <div class="process-steps">
            <div class="step">
              <h3>1. Consulta Inicial</h3>
              <p>Nos reunimos contigo para entender tus objetivos y los requisitos de la app.</p>
            </div>
            <div class="step">
              <h3>2. Diseño y Prototipado</h3>
              <p>Diseñamos la interfaz de usuario (UI) y el flujo de la aplicación para ofrecer una experiencia intuitiva.</p>
            </div>
            <div class="step">
              <h3>3. Desarrollo</h3>
              <p>Desarrollamos la app utilizando las mejores tecnologías y asegurando un rendimiento robusto.</p>
            </div>
            <div class="step">
              <h3>4. Pruebas y Lanzamiento</h3>
              <p>Realizamos pruebas rigurosas para garantizar que la app funcione sin fallos antes de lanzarla.</p>
            </div>
            <div class="step">
              <h3>5. Soporte Post-Lanzamiento</h3>
              <p>Te ofrecemos soporte para resolver cualquier inconveniente y mejorar la app según tus necesidades.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Tecnologías que Usamos -->
      <section class="technologies">
        <div class="container">
          <h2>Tecnologías que Usamos</h2>
          <div class="tech-stack">
            <div class="tech-item">Vue.js</div>
            <div class="tech-item">React Native</div>
            <div class="tech-item">Node.js</div>
            <div class="tech-item">Firebase</div>
            <div class="tech-item">Swift</div>
            <div class="tech-item">Flutter</div>
            <div class="tech-item">MongoDB</div>
            <div class="tech-item">Docker</div>
          </div>
        </div>
      </section>
  
      <!-- Casos de Éxito -->
      <section class="success-cases">
        <div class="container">
          <h2>Casos de Éxito</h2>
          <div class="case-cards">
            <!-- Caso 1 -->
            <div class="case-card">
              <img src="https://via.placeholder.com/350x200" alt="App 1">
              <h3>App de Gestión Empresarial</h3>
              <p>Desarrollamos una app para la gestión interna de una PYME, optimizando procesos y mejorando la productividad.</p>
            </div>
            <!-- Caso 2 -->
            <div class="case-card">
              <img src="https://via.placeholder.com/350x200" alt="App 2">
              <h3>Plataforma de E-commerce</h3>
              <p>Creación de una plataforma e-commerce personalizada con funciones avanzadas de pago y gestión de inventarios.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer Section -->
      <footer class="footer">
        <div class="container footer-content">
          <p>&copy; 2024 Metadicktyon Solutions | Todos los derechos reservados</p>
          <p>Creado por la División de Tecnología de Metadicktyon Solutions | Aprobado por el CEO</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomAppDevelopment',
  };
  </script>
  
  <style scoped>
  /* Global Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }
  
  /* Hero Section */
  .hero {
    background-color: #1e3a5f; /* Azul oscuro */
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .hero p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
  
  .cta-button {
    display: inline-block;
    background-color: #80b3e0;
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    font-size: 1.125rem;
    text-decoration: none;
    margin-top: 2rem;
  }
  
  .cta-button:hover {
    background-color: #1e3a5f;
  }
  
  /* ¿Por qué elegirnos? Section */
  .why-choose-us {
    padding: 3rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .why-choose-us h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .benefits {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  .benefit-card {
    background-color: #e5f1fb;
    padding: 2rem;
    border-radius: 8px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .benefit-card h3 {
    font-size: 1.5rem;
    color: #1e3a5f;
  }
  
  .benefit-card p {
    font-size: 1rem;
    color: #333;
  }
  
  /* Nuestro Proceso */
  .our-process {
    padding: 3rem 0;
    background-color: #f5f5f5;
    text-align: center;
  }
  
  .our-process h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .process-steps {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
  }
  
  .step {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .step h3 {
    font-size: 1.25rem;
    color: #1e3a5f;
  }
  
  .step p {
    font-size: 1rem;
    color: #333;
  }
  
  /* Tecnologías */
  .technologies {
    padding: 3rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .technologies h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .tech-item {
    background-color: #80b3e0;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1.125rem;
  }
  
  /* Casos de Éxito */
  .success-cases {
    padding: 3rem 0;
    background-color: #f5f5f5;
    text-align: center;
  }
  
  .success-cases h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .case-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  .case-card {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 350px;
    text-align: center;
  }
  
  .case-card img {
    width: 100%;
    border-radius: 8px;
  }
  
  .case-card h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  
  .case-card p {
    font-size: 1rem;
    color: #666;
  }
  
  /* Footer */
  .footer {
    background-color: #1e3a5f;
    color: white;
    padding: 2rem 0;
    text-align: center;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>
  