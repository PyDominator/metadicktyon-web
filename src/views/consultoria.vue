<template>
    <div class="consulting">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Consultoría Tecnológica</h1>
          <p>Impulsa tu negocio con soluciones tecnológicas personalizadas que optimizan procesos y aumentan la competitividad.</p>
          <a href="#contact" class="cta-button">Inicia tu Proyecto</a>
        </div>
      </section>
  
      <!-- ¿Por qué elegir nuestra consultoría? -->
      <section class="why-choose-us">
        <div class="container">
          <h2>¿Por qué elegir nuestra consultoría?</h2>
          <div class="benefits">
            <div class="benefit-card">
              <h3>Soluciones Estratégicas</h3>
              <p>Te ayudamos a tomar decisiones tecnológicas informadas para alinear la tecnología con los objetivos de tu negocio.</p>
            </div>
            <div class="benefit-card">
              <h3>Expertos en Transformación Digital</h3>
              <p>Brindamos asesoría integral para transformar digitalmente tu empresa, desde la infraestructura hasta la automatización de procesos.</p>
            </div>
            <div class="benefit-card">
              <h3>Enfoque Personalizado</h3>
              <p>Cada solución que ofrecemos es adaptada a las necesidades específicas de tu empresa y tu sector.</p>
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
              <p>Realizamos un análisis exhaustivo de tu infraestructura tecnológica y procesos para identificar áreas de mejora.</p>
            </div>
            <div class="step">
              <h3>2. Desarrollo de Estrategia</h3>
              <p>Crearemos una estrategia tecnológica a medida para alcanzar tus objetivos de negocio de manera eficiente y sostenible.</p>
            </div>
            <div class="step">
              <h3>3. Implementación</h3>
              <p>Desarrollamos e implementamos las soluciones acordadas, asegurándonos de su correcta integración en tu empresa.</p>
            </div>
            <div class="step">
              <h3>4. Evaluación y Ajustes</h3>
              <p>Monitoreamos los resultados obtenidos, realizando ajustes para mejorar y asegurar el éxito de la solución implementada.</p>
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
              <h3>Infraestructura IT</h3>
              <p>Te ayudamos a optimizar tu infraestructura tecnológica para mejorar la eficiencia y escalabilidad de tu empresa.</p>
            </div>
            <div class="specialization-card">
              <h3>Automatización de Procesos</h3>
              <p>Desarrollamos soluciones que automatizan tareas repetitivas, liberando tiempo y recursos para proyectos estratégicos.</p>
            </div>
            <div class="specialization-card">
              <h3>Transformación Digital</h3>
              <p>Te guiamos en el proceso de digitalización de tus operaciones para estar a la vanguardia tecnológica.</p>
            </div>
            <div class="specialization-card">
              <h3>Consultoría en Cloud Computing</h3>
              <p>Implementamos soluciones en la nube para que tu empresa sea más ágil, segura y escalable.</p>
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
              <img src="https://via.placeholder.com/350x200" alt="Consultoría Empresa 1">
              <h3>Optimización de Infraestructura en PYME</h3>
              <p>Mejoramos la infraestructura de una PYME para reducir costos operativos y mejorar la capacidad de crecimiento.</p>
            </div>
            <!-- Caso 2 -->
            <div class="case-card">
              <img src="https://via.placeholder.com/350x200" alt="Consultoría Empresa 2">
              <h3>Automatización de Procesos Logísticos</h3>
              <p>Desarrollamos soluciones de automatización para optimizar la cadena de suministro de una empresa logística.</p>
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
    name: 'ConsultingPage',
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
  