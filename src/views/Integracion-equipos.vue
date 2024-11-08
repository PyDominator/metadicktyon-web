<template>
    <div class="it-team-integration">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Integración de Equipos IT</h1>
          <p>Optimiza tus operaciones con un equipo de TI integrado, eficiente y alineado a tus objetivos de negocio.</p>
          <a href="#contact" class="cta-button">Solicitar Cotización</a>
        </div>
      </section>
  
      <!-- ¿Por qué elegirnos para la integración de equipos IT? -->
      <section class="why-choose-us">
        <div class="container">
          <h2>¿Por qué elegirnos para la integración de equipos IT?</h2>
          <div class="benefits">
            <div class="benefit-card">
              <h3>Equipos Altamente Calificados</h3>
              <p>Contamos con expertos en diversas áreas de TI para garantizar que tu equipo esté completamente capacitado y alineado a tus necesidades.</p>
            </div>
            <div class="benefit-card">
              <h3>Mejora en la Colaboración</h3>
              <p>Creamos un entorno colaborativo, mejorando la comunicación y productividad entre los distintos equipos dentro de tu empresa.</p>
            </div>
            <div class="benefit-card">
              <h3>Adaptabilidad a tu Empresa</h3>
              <p>Nos ajustamos a la estructura de tu negocio, integrando equipos IT que sean capaces de adaptarse a cualquier desafío que se presente.</p>
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
              <h3>1. Diagnóstico Inicial</h3>
              <p>Analizamos la estructura actual de tu equipo IT y las necesidades de tu empresa para identificar las áreas de mejora.</p>
            </div>
            <div class="step">
              <h3>2. Planificación</h3>
              <p>Diseñamos un plan estratégico para integrar y optimizar los equipos IT, alineándolo con los objetivos de negocio de tu empresa.</p>
            </div>
            <div class="step">
              <h3>3. Implementación</h3>
              <p>Integramos y ajustamos los equipos IT para que trabajen en sinergia, mejorando los procesos y operaciones.</p>
            </div>
            <div class="step">
              <h3>4. Capacitación y Soporte Continuo</h3>
              <p>Proporcionamos formación continua y soporte post-integración para asegurar que tu equipo TI se mantenga actualizado y eficiente.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Áreas de Especialización -->
      <section class="specializations">
        <div class="container">
          <h2>Áreas de Especialización</h2>
          <div class="specialization-cards">
            <div class="specialization-card">
              <h3>Integración de Infraestructura</h3>
              <p>Optimizamos la infraestructura tecnológica de tu empresa para asegurar un rendimiento confiable y escalable.</p>
            </div>
            <div class="specialization-card">
              <h3>Gestión de Proyectos TI</h3>
              <p>Te ayudamos a gestionar y coordinar proyectos tecnológicos, asegurando una implementación efectiva y dentro de los plazos.</p>
            </div>
            <div class="specialization-card">
              <h3>Automatización de Procesos</h3>
              <p>Mejoramos la eficiencia de tu equipo TI a través de la automatización de tareas repetitivas y la optimización de flujos de trabajo.</p>
            </div>
            <div class="specialization-card">
              <h3>Soporte y Mantenimiento</h3>
              <p>Proveemos soporte continuo y mantenimiento preventivo para garantizar que tus equipos TI funcionen de manera óptima.</p>
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
              <h3>Integración Exitosa de Equipo TI en Start-up</h3>
              <p>Mejoramos la eficiencia operativa de una start-up mediante la integración de un equipo TI cohesionado y adaptado a sus necesidades.</p>
            </div>
            <!-- Caso 2 -->
            <div class="case-card">
              <img src="https://via.placeholder.com/350x200" alt="Caso 2">
              <h3>Optimización de Equipos IT en Empresa de Software</h3>
              <p>Rediseñamos y optimizamos el equipo TI de una empresa de desarrollo de software, mejorando su capacidad para enfrentar desafíos de crecimiento.</p>
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
    name: 'ITTeamIntegrationPage',
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
  
  /* Áreas de Especialización */
  .specializations {
    padding: 3rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .specializations h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e3a5f;
  }
  
  .specialization-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  .specialization-card {
    background-color: #e5f1fb;
    padding: 2rem;
    border-radius: 8px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .specialization-card h3 {
    font-size: 1.25rem;
    color: #1e3a5f;
  }
  
  .specialization-card p {
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
  