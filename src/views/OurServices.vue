<template>
  <div class="services">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Servicios de Metadicktyon Solutions</h1>
        <p>Brindamos soluciones tecnológicas de calidad para empresas colombianas.</p>
      </div>
    </section>

    <!-- Servicios -->
    <section class="our-services">
      <div class="container">
        <h2>Nuestros Servicios</h2>
        <div class="service-cards">
          <!-- Tarjeta 1: Implementación de Apps de Terceros -->
          <div class="service-card">
            <h3>Implementación de Apps de Terceros</h3>
            <p>Integramos las mejores aplicaciones del mercado en tu empresa para optimizar tus procesos.</p>
            <a href="/services/tercerization" class="btn">Ver Más</a>
          </div>
          <!-- Tarjeta 2: Integración de Equipos Tecnológicos -->
          <div class="service-card">
            <h3>Integración de Equipos Tecnológicos</h3>
            <p>Conectamos tus equipos tecnológicos para mejorar la eficiencia operativa de tu empresa.</p>
            <a href="/services/integration-teams" class="btn">Ver Más</a>
          </div>
          <!-- Tarjeta 3: Servidores P2P para Empresas -->
          <div class="service-card">
            <h3>Servidores P2P para Empresas</h3>
            <p>Ofrecemos soluciones de servidores peer-to-peer para empresas, garantizando seguridad y rendimiento.</p>
            <a href="/services/p2p" class="btn">Ver Más</a>
          </div>
          <!-- Tarjeta 4: Hosting y Gestión de Infraestructura -->
          <div class="service-card">
            <h3>Hosting y Gestión de Infraestructura</h3>
            <p>Te proporcionamos servicios de hosting y gestión de infraestructura para asegurar la operación continua de tu empresa.</p>
            <a href="/services/hosting" class="btn">Ver Más</a>
          </div>
          <!-- Tarjeta 5: Consultoría Tecnológica -->
          <div class="service-card">
            <h3>Consultoría Tecnológica</h3>
            <p>Te asesoramos en la implementación de soluciones tecnológicas personalizadas que impulsan tu negocio.</p>
            <a href="/services/consultoria" class="btn">Ver Más</a>
          </div>
          <!-- Tarjeta 6: Desarrollo de Aplicaciones a Medida -->
          <div class="service-card">
            <h3>Desarrollo de Aplicaciones a Medida</h3>
            <p>Desarrollamos aplicaciones específicas para las necesidades de tu empresa, mejorando tus procesos internos.</p>
            <a href="/services/apps-dev" class="btn">Ver Más</a>
          </div>
          <!-- Tarjeta 7: Gestión de Proyectos IT -->
          <div class="service-card">
            <h3>Gestión de Proyectos IT</h3>
            <p>Te ayudamos a gestionar proyectos tecnológicos desde su inicio hasta su ejecución exitosa.</p>
            <a href="/services/proyects-it" class="btn">Ver Más</a>
          </div>
          <!-- Tarjeta 8: Soporte y Mantenimiento IT -->
          <div class="service-card">
            <h3>Soporte y Mantenimiento IT</h3>
            <p>Ofrecemos soporte y mantenimiento continuo para asegurar el buen funcionamiento de tus sistemas.</p>
            <a href="/services/maintenance-it" class="btn">Ver Más</a>
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
  name: 'ServicesPage',
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

/* Servicios Section */
.our-services {
  padding: 3rem 0;
  background-color: #fff;
  text-align: center;
}

.our-services h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1e3a5f; /* Azul oscuro */
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 tarjetas por fila */
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}

.service-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e3a5f; /* Azul oscuro */
}

.service-card p {
  font-size: 1rem;
  color: #666;
}

.service-card .btn {
  display: inline-block;
  background-color: #1e3a5f;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 1rem;
}

.service-card .btn:hover {
  background-color: #80b3e0; /* Azul claro en hover */
}

/* Footer Section */
.footer {
  background-color: #1e3a5f; /* Azul oscuro */
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.footer p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.social-links {
  margin-top: 1rem;
}

.social-icon {
  margin: 0 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
}

.social-icon:hover {
  color: #80b3e0; /* Azul claro en hover */
}
</style>
