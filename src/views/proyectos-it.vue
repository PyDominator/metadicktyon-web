<template>
    <div class="it-projects">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Proyectos IT</h1>
          <p>Transforma tu infraestructura tecnológica con proyectos IT a medida, diseñados para llevar a tu empresa al siguiente nivel.</p>
          <a href="#contact" class="cta-button">Inicia tu Proyecto</a>
        </div>
      </section>
  
      <!-- ¿Por qué elegir nuestros proyectos IT? -->
      <section class="why-choose-us">
        <div class="container">
          <h2>¿Por qué elegir nuestros proyectos IT?</h2>
          <div class="benefits">
            <div class="benefit-card">
              <h3>Soluciones a Medida</h3>
              <p>Diseñamos y ejecutamos proyectos IT que se alinean con los objetivos estratégicos de tu negocio, asegurando su éxito a largo plazo.</p>
            </div>
            <div class="benefit-card">
              <h3>Implementación Ágil</h3>
              <p>Contamos con un proceso ágil y eficiente para implementar soluciones IT sin interrumpir tus operaciones diarias.</p>
            </div>
            <div class="benefit-card">
              <h3>Escalabilidad Garantizada</h3>
              <p>Creemos en soluciones que crecen con tu negocio, permitiendo que tu infraestructura se adapte a las necesidades futuras de la empresa.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Metodología de Trabajo -->
      <section class="our-approach">
        <div class="container">
          <h2>Nuestra Metodología</h2>
          <div class="approach-steps">
            <div class="step">
              <h3>1. Diagnóstico y Planificación</h3>
              <p>Realizamos un análisis detallado de tus necesidades y objetivos, para diseñar un proyecto que maximice el rendimiento de tu infraestructura.</p>
            </div>
            <div class="step">
              <h3>2. Diseño del Proyecto</h3>
              <p>Elaboramos una estrategia que cubra cada aspecto del proyecto, desde la infraestructura hasta la integración de sistemas.</p>
            </div>
            <div class="step">
              <h3>3. Ejecución y Desarrollo</h3>
              <p>Nos encargamos de la implementación del proyecto, asegurando la calidad y la integración exitosa de todas las soluciones.</p>
            </div>
            <div class="step">
              <h3>4. Evaluación y Ajustes</h3>
              <p>Monitoreamos los resultados, optimizando los procesos y ajustando las soluciones para mejorar la efectividad de las implementaciones.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Proyectos Realizados -->
      <section class="completed-projects">
        <div class="container">
          <h2>Proyectos Realizados</h2>
          <div class="project-cards">
            <!-- Proyecto 1 -->
            <div class="project-card">
              <img src="https://via.placeholder.com/350x200" alt="Proyecto 1">
              <h3>Implementación de Plataforma ERP</h3>
              <p>Desarrollamos y ejecutamos un proyecto de implementación de un sistema ERP para optimizar los procesos internos de una gran empresa manufacturera.</p>
            </div>
            <!-- Proyecto 2 -->
            <div class="project-card">
              <img src="https://via.placeholder.com/350x200" alt="Proyecto 2">
              <h3>Modernización de Infraestructura IT</h3>
              <p>Rediseñamos la infraestructura tecnológica de una empresa para mejorar la capacidad de escalabilidad y aumentar la seguridad de los sistemas.</p>
            </div>
            <!-- Proyecto 3 -->
            <div class="project-card">
              <img src="https://via.placeholder.com/350x200" alt="Proyecto 3">
              <h3>Desarrollo de Soluciones en la Nube</h3>
              <p>Implementamos una solución en la nube para una empresa global, permitiendo la automatización de sus procesos y mejorando su colaboración remota.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonios -->
      <section class="testimonials">
        <div class="container">
          <h2>Lo que dicen nuestros clientes</h2>
          <div class="testimonial-cards">
            <div class="testimonial-card">
              <img src="https://via.placeholder.com/100x100" alt="Cliente 1">
              <p>"Gracias al equipo de Metadicktyon, logramos transformar nuestra infraestructura IT en algo mucho más robusto y escalable. ¡Su experiencia es invaluable!"</p>
              <h4>Laura Gómez, Directora de IT en TecnoCorp</h4>
            </div>
            <div class="testimonial-card">
              <img src="https://via.placeholder.com/100x100" alt="Cliente 2">
              <p>"El proyecto de modernización IT que desarrollaron para nosotros nos permitió ser más eficientes y seguros. Lo recomendaríamos a cualquier empresa."</p>
              <h4>Raúl Martínez, CEO en Fintech Solutions</h4>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
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
    name: 'ITProjectsPage',
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
    font-size: 4rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .hero p {
    font-size: 1.5rem;
    margin-top: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .cta-button {
    display: inline-block;
    background-color: #80b3e0;
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    font-size: 1.25rem;
    text-decoration: none;
    margin-top: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .cta-button:hover {
    background-color: #1e3a5f;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
  
  /* ¿Por qué elegir nuestros proyectos? */
  .why-choose-us {
    padding: 4rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .why-choose-us h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #1e3a5f;
  }
  
  .benefits {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  
  .benefit-card {
    background-color: #e5f1fb;
    padding: 2.5rem;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .benefit-card h3 {
    font-size: 1.75rem;
    color: #1e3a5f;
  }
  
  /* Metodología */
  .our-approach {
    padding: 4rem 0;
    background-color: #f8f8f8;
  }
  
  .our-approach h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #1e3a5f;
  }
  
  .approach-steps {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
  
  .step {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 23%;
  }
  
  .step h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #1e3a5f;
  }
  
  .step p {
    font-size: 1rem;
    color: #666;
  }
  
  /* Proyectos Realizados */
  .completed-projects {
    padding: 4rem 0;
    background-color: #fff;
  }
  
  .completed-projects h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #1e3a5f;
  }
  
  .project-cards {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
  
  .project-card {
    background-color: #e5f1fb;
    padding: 2rem;
    border-radius: 8px;
    width: 30%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .project-card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .project-card h3 {
    font-size: 1.75rem;
    margin-top: 1rem;
  }
  
  .project-card p {
    font-size: 1rem;
    color: #666;
    margin-top: 1rem;
  }
  
  /* Testimonios */
  .testimonials {
    padding: 4rem 0;
    background-color: #f8f8f8;
  }
  
  .testimonials h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #1e3a5f;
  }
  
  .testimonial-cards {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  
  .testimonial-card {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .testimonial-card p {
    font-size: 1.2rem;
    color: #666;
  }
  
  .testimonial-card h4 {
    margin-top: 1rem;
    font-size: 1rem;
    color: #1e3a5f;
  }
  
  /* CTA */
  .cta {
    padding: 4rem 0;
    background-color: #1e3a5f;
    color: white;
    text-align: center;
  }
  
  .cta h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .cta p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    background-color: #80b3e0;
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    font-size: 1.25rem;
    text-decoration: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .cta-button:hover {
    background-color: #1e3a5f;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
  
  /* Footer */
  .footer {
    padding: 2rem;
    background-color: #1e3a5f;
    color: white;
    text-align: center;
  }
  
  .footer-content p {
    font-size: 1rem;
  }
  </style>
  