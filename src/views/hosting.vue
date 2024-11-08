<template>
    <div class="hosting-infrastructure">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Hosting e Infraestructura</h1>
          <p>Potencia tu negocio con infraestructura de alta disponibilidad, rendimiento y seguridad.</p>
          <a href="#contact" class="cta-button">Solicitar Cotización</a>
        </div>
      </section>
  
      <!-- Nuestros Servicios de Hosting -->
      <section class="hosting-services">
        <div class="container">
          <h2>Servicios de Hosting</h2>
          <div class="services-cards">
            <!-- Servicio 1 -->
            <div class="service-card">
              <h3>Hosting Compartido</h3>
              <p>Una solución económica para sitios web pequeños o medianos, con soporte y mantenimiento incluidos.</p>
            </div>
            <!-- Servicio 2 -->
            <div class="service-card">
              <h3>VPS (Servidor Virtual Privado)</h3>
              <p>Recibe más control, privacidad y recursos dedicados para tu sitio o aplicación con VPS a medida.</p>
            </div>
            <!-- Servicio 3 -->
            <div class="service-card">
              <h3>Hosting Dedicado</h3>
              <p>Ofrecemos servidores dedicados totalmente personalizables, ideales para grandes empresas o sitios con alto tráfico.</p>
            </div>
            <!-- Servicio 4 -->
            <div class="service-card">
              <h3>Hosting en la Nube</h3>
              <p>Infraestructura flexible y escalable en la nube para garantizar el rendimiento y la disponibilidad 24/7.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Infraestructura Escalable -->
      <section class="scalable-infrastructure">
        <div class="container">
          <h2>Infraestructura Escalable</h2>
          <p>Nuestros servicios de infraestructura están diseñados para crecer junto con tu empresa. Ofrecemos soluciones adaptables y seguras, asegurando que tu negocio se mantenga en constante evolución con la tecnología.</p>
          <div class="infrastructure-cards">
            <!-- Card 1 -->
            <div class="infrastructure-card">
              <h3>Infraestructura en la Nube</h3>
              <p>Optimiza tus recursos con soluciones de nube públicas o privadas, adaptadas a las necesidades específicas de tu negocio.</p>
            </div>
            <!-- Card 2 -->
            <div class="infrastructure-card">
              <h3>Redes y Conectividad</h3>
              <p>Construimos redes seguras y rápidas que conectan tu empresa con el mundo, mejorando la comunicación y el acceso a tus sistemas.</p>
            </div>
            <!-- Card 3 -->
            <div class="infrastructure-card">
              <h3>Data Centers de Alta Seguridad</h3>
              <p>Contamos con centros de datos de última tecnología y máxima seguridad, garantizando la protección de tu información.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Seguridad y Fiabilidad -->
      <section class="security-reliability">
        <div class="container">
          <h2>Seguridad y Fiabilidad</h2>
          <p>Garantizamos que tus sistemas y datos estén siempre protegidos con nuestras soluciones de seguridad avanzadas, copias de seguridad automáticas y redundancia de servidores.</p>
          <div class="security-cards">
            <div class="security-card">
              <h3>Seguridad Avanzada</h3>
              <p>Implementamos cortafuegos, cifrado SSL, y monitoreo continuo para proteger tus datos y sistemas.</p>
            </div>
            <div class="security-card">
              <h3>Copias de Seguridad Automáticas</h3>
              <p>Realizamos backups automáticos y programados para que nunca pierdas tu información crítica.</p>
            </div>
            <div class="security-card">
              <h3>Redundancia de Servidores</h3>
              <p>Contamos con soluciones de alta disponibilidad, asegurando que tus sistemas sigan funcionando incluso en caso de fallos.</p>
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
    name: 'HostingInfrastructurePage',
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
  
  /* Servicios de Hosting */
  .hosting-services {
    padding: 3rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .hosting-services h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .services-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .service-card {
    background-color: #e5f1fb;
    padding: 2rem;
    border-radius: 8px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .service-card h3 {
    font-size: 1.5rem;
    color: #1e3a5f;
  }
  
  .service-card p {
    font-size: 1rem;
    color: #333;
  }
  
  /* Infraestructura Escalable */
  .scalable-infrastructure {
    padding: 3rem 0;
    background-color: #f5f5f5;
    text-align: center;
  }
  
  .scalable-infrastructure h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e3a5f;
  }
  
  .infrastructure-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .infrastructure-card {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .infrastructure-card h3 {
    font-size: 1.25rem;
    color: #1e3a5f;
  }
  
  .infrastructure-card p {
    font-size: 1rem;
    color: #333;
  }
  
  /* Seguridad y Fiabilidad */
  .security-reliability {
    padding: 3rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .security-reliability h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e3a5f;
  }
  
  .security-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .security-card {
    background-color: #e5f1fb;
    padding: 2rem;
    border-radius: 8px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .security-card h3 {
    font-size: 1.25rem;
    color: #1e3a5f;
  }
  
  .security-card p {
    font-size: 1rem;
    color: #333;
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
  
  