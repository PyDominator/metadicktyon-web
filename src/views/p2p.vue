<template>
    <div class="enterprise-products">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Productos para Empresas</h1>
          <p>Impulsa tu negocio con nuestras soluciones tecnológicas innovadoras, diseñadas para optimizar cada área de tu operación.</p>
          <a href="#contact" class="cta-button">Solicitar Demostración</a>
        </div>
      </section>
  
      <!-- ¿Por qué elegir nuestros productos? -->
      <section class="why-choose-us">
        <div class="container">
          <h2>¿Por qué elegir nuestros productos?</h2>
          <div class="benefits">
            <div class="benefit-card">
              <h3>Innovación Constante</h3>
              <p>Mantenemos nuestros productos a la vanguardia de la tecnología, garantizando que tu empresa esté siempre un paso adelante.</p>
            </div>
            <div class="benefit-card">
              <h3>Fácil Integración</h3>
              <p>Diseñamos soluciones que se adaptan perfectamente a tu infraestructura existente, facilitando la integración sin interrupciones.</p>
            </div>
            <div class="benefit-card">
              <h3>Soporte Continuo</h3>
              <p>Te ofrecemos soporte dedicado para maximizar el rendimiento de nuestros productos y garantizar que tu empresa siga operando sin inconvenientes.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Características Destacadas -->
      <section class="featured-features">
        <div class="container">
          <h2>Características Destacadas</h2>
          <div class="feature-cards">
            <div class="feature-card">
              <h3>Escalabilidad Flexible</h3>
              <p>Crece a tu ritmo. Nuestros productos se adaptan fácilmente a tus necesidades cambiantes, asegurando que tu infraestructura esté siempre alineada con el crecimiento de tu empresa.</p>
            </div>
            <div class="feature-card">
              <h3>Seguridad de Nivel Empresarial</h3>
              <p>Protege tus datos con soluciones de seguridad avanzadas que garantizan la protección de tu infraestructura y la tranquilidad de tu negocio.</p>
            </div>
            <div class="feature-card">
              <h3>Optimización Operativa</h3>
              <p>Aumenta la eficiencia y reduce costos operativos con productos que automatizan procesos y mejoran la productividad de tu equipo.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Productos Estrella -->
      <section class="featured-products">
        <div class="container">
          <h2>Productos Estrella</h2>
          <div class="product-cards">
            <!-- Producto 1 -->
            <div class="product-card">
              <img src="https://via.placeholder.com/350x200" alt="Plataforma de Gestión Empresarial">
              <h3>Plataforma de Gestión Empresarial</h3>
              <p>Una solución integral para gestionar tu negocio de manera centralizada. Optimiza todas las áreas de tu empresa con una sola herramienta.</p>
              <a href="#contact" class="cta-button">Ver Más</a>
            </div>
            <!-- Producto 2 -->
            <div class="product-card">
              <img src="https://via.placeholder.com/350x200" alt="Sistema de Seguridad Avanzado">
              <h3>Sistema de Seguridad Avanzado</h3>
              <p>Una solución integral para mantener tu infraestructura segura, con protección en tiempo real contra amenazas cibernéticas.</p>
              <a href="#contact" class="cta-button">Ver Más</a>
            </div>
            <!-- Producto 3 -->
            <div class="product-card">
              <img src="https://via.placeholder.com/350x200" alt="Comunicación Unificada">
              <h3>Solución de Comunicación Unificada</h3>
              <p>Integra todas tus plataformas de comunicación en una única solución para mejorar la colaboración en tiempo real y aumentar la eficiencia del equipo.</p>
              <a href="#contact" class="cta-button">Ver Más</a>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonios -->
      <section class="testimonials">
        <div class="container">
          <h2>Testimonios de Clientes</h2>
          <div class="testimonial-cards">
            <div class="testimonial-card">
              <img src="https://via.placeholder.com/100x100" alt="Cliente 1">
              <p>"Nuestra empresa ha experimentado un crecimiento significativo gracias a la Plataforma de Gestión Empresarial. ¡La transición fue increíblemente fluida!"</p>
              <h4>Juan Pérez, CEO de Innovatech</h4>
            </div>
            <div class="testimonial-card">
              <img src="https://via.placeholder.com/100x100" alt="Cliente 2">
              <p>"El Sistema de Seguridad Avanzado nos ha proporcionado una capa adicional de protección para nuestros datos más sensibles. ¡Recomiendo ampliamente esta solución!"</p>
              <h4>Ana Torres, Directora de IT en GlobalTech</h4>
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
    name: 'EnterpriseProductsPage',
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
  
  /* ¿Por qué elegir nuestros productos? */
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
  
  .benefit-card p {
    font-size: 1.1rem;
    color: #333;
  }
  
  /* Características Destacadas */
  .featured-features {
    padding: 4rem 0;
    background-color: #f5f5f5;
    text-align: center;
  }
  
  .featured-features h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #1e3a5f;
  }
  
  .feature-cards {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  
  .feature-card {
    background-color: #fff;
    padding: 2.5rem;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .feature-card h3 {
    font-size: 1.5rem;
    color: #1e3a5f;
  }
  
  .feature-card p {
    font-size: 1.1rem;
    color: #333;
  }
  
  /* Productos Estrella */
  .featured-products {
    padding: 4rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .featured-products h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #1e3a5f;
  }
  
  .product-cards {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  
  .product-card {
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    width: 350px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .product-card img {
    width: 100%;
    border-radius: 10px;
  }
  
  .product-card h3 {
    font-size: 1.75rem;
    color: #1e3a5f;
    margin-top: 1.5rem;
  }
  
  .product-card p {
    font-size: 1.1rem;
    color: #333;
    margin-top: 1rem;
  }
  
  /* Testimonios */
  .testimonials {
    padding: 4rem 0;
    background-color: #f5f5f5;
    text-align: center;
  }
  
  .testimonials h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #1e3a5f;
  }
  
  .testimonial-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  .testimonial-card {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    width: 350px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .testimonial-card img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  
  .testimonial-card h4 {
    font-size: 1.25rem;
    color: #1e3a5f;
  }
  
  /* Llamada a la Acción */
  .cta {
    padding: 4rem 0;
    background-color: #ffff;
    color: #000;
    text-align: center;
  }
  
  .cta h2 {
    font-size: 2.5rem;
  }
  
  .cta p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
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
  