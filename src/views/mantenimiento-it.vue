<template>
    <div class="it-maintenance">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Mantenimiento IT</h1>
          <p>Garantiza el rendimiento y la estabilidad de tu infraestructura tecnológica con nuestros servicios de mantenimiento IT proactivos.</p>
          <a href="#contact" class="cta-button">Solicitar Servicio</a>
        </div>
      </section>
  
      <!-- ¿Por qué elegir nuestro servicio de Mantenimiento IT? -->
      <section class="why-choose-us">
        <div class="container">
          <h2>¿Por qué elegir nuestro servicio de Mantenimiento IT?</h2>
          <div class="benefits">
            <div class="benefit-card">
              <h3>Prevención de Fallos</h3>
              <p>Con nuestro mantenimiento preventivo, minimizamos el riesgo de fallos técnicos y optimizamos la operatividad de tus sistemas.</p>
            </div>
            <div class="benefit-card">
              <h3>Soporte Continuo</h3>
              <p>Brindamos soporte técnico de forma continua para asegurar que tus sistemas se mantengan en su máximo rendimiento.</p>
            </div>
            <div class="benefit-card">
              <h3>Escalabilidad</h3>
              <p>Ayudamos a tu infraestructura a crecer de manera ordenada y sin interrupciones, adaptándonos a tus necesidades futuras.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Nuestro Enfoque -->
      <section class="our-approach">
        <div class="container">
          <h2>Nuestro Enfoque</h2>
          <div class="approach-steps">
            <div class="step">
              <h3>1. Auditoría Inicial</h3>
              <p>Realizamos un análisis completo de tus sistemas y procesos tecnológicos para identificar áreas críticas que necesiten atención.</p>
            </div>
            <div class="step">
              <h3>2. Planificación de Mantenimiento</h3>
              <p>Elaboramos un plan personalizado para el mantenimiento de tus equipos y sistemas, alineado con las necesidades y objetivos de tu empresa.</p>
            </div>
            <div class="step">
              <h3>3. Ejecución del Mantenimiento</h3>
              <p>Realizamos el mantenimiento preventivo y correctivo, asegurándonos de que tus sistemas estén operando con máxima eficiencia.</p>
            </div>
            <div class="step">
              <h3>4. Monitoreo y Optimización</h3>
              <p>Monitoreamos el rendimiento de tus sistemas, ajustando y optimizando cualquier área que requiera intervención adicional para mejorar el rendimiento.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Servicios de Mantenimiento IT -->
      <section class="maintenance-services">
        <div class="container">
          <h2>Servicios de Mantenimiento IT</h2>
          <div class="service-cards">
            <div class="service-card">
              <h3>Mantenimiento de Servidores</h3>
              <p>Nos aseguramos de que tus servidores estén funcionando sin interrupciones, realizando mantenimiento preventivo y correctivo.</p>
            </div>
            <div class="service-card">
              <h3>Mantenimiento de Red</h3>
              <p>Optimizamos y mantenemos tus redes IT para asegurar que tus comunicaciones sean rápidas, seguras y sin fallos.</p>
            </div>
            <div class="service-card">
              <h3>Soporte en la Nube</h3>
              <p>Brindamos mantenimiento a tus servicios en la nube, garantizando que estén siempre disponibles y optimizados para tu empresa.</p>
            </div>
            <div class="service-card">
              <h3>Actualizaciones de Software</h3>
              <p>Mantenemos todos tus sistemas actualizados, minimizando vulnerabilidades y mejorando el rendimiento general.</p>
            </div>
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
              <img src="https://via.placeholder.com/350x200" alt="Caso 1">
              <h3>Mantenimiento Preventivo para Empresa Financiera</h3>
              <p>Implementamos un plan de mantenimiento preventivo para una empresa financiera, asegurando la estabilidad y seguridad de sus sistemas durante años.</p>
            </div>
            <!-- Caso 2 -->
            <div class="case-card">
              <img src="https://via.placeholder.com/350x200" alt="Caso 2">
              <h3>Optimización de Red en Multinacional</h3>
              <p>Realizamos mantenimiento a los sistemas de red de una multinacional, mejorando la velocidad de sus comunicaciones y reduciendo tiempos de inactividad.</p>
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
    name: 'ITMaintenancePage',
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
  
  /* Nuestro Enfoque */
  .our-approach {
    padding: 3rem 0;
    background-color: #f5f5f5;
    text-align: center;
  }
  
  .our-approach h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #1e3a5f;
  }
  
  .approach-steps {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .step {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    width: 250px;
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
  
  /* Servicios de Mantenimiento IT */
  .maintenance-services {
    padding: 3rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .maintenance-services h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e3a5f;
  }
  
  .service-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  .service-card {
    background-color: #e5f1fb;
    padding: 2rem;
    border-radius: 8px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .service-card h3 {
    font-size: 1.25rem;
    color: #1e3a5f;
  }
  
  .service-card p {
    font-size: 1rem;
    color: #333;
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
    color: #1e3a5f;
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
  