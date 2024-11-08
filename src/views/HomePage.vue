<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Metadicktyon Solutions</h1>
        <p>Innovación y soluciones tecnológicas para el futuro de tu empresa</p>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about-us">
      <div class="container">
        <h2>¿Quiénes somos?</h2>
        <p>En Metadicktyon Solutions, somos líderes en el desarrollo e implementación de soluciones tecnológicas avanzadas para empresas. Nos especializamos en integración de aplicaciones de terceros, optimización de equipos tecnológicos y creación de infraestructuras digitales robustas para empresas de todos los tamaños.</p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <div class="container">
        <h2>Servicios</h2>
        <div class="services-list">
          <div class="service-card">
            <h3>Implementación de Apps de Terceros</h3>
            <p>Integramos aplicaciones de terceros a tu infraestructura, adaptándolas a las necesidades de tu negocio.</p>
            <router-link to="/services" class="cta-btn">Ver más</router-link>
          </div>
          <div class="service-card">
            <h3>Integración de Equipos Tech</h3>
            <p>Conectamos tus equipos tecnológicos para optimizar el flujo de trabajo y mejorar la eficiencia empresarial.</p>
            <router-link to="/services" class="cta-btn">Ver más</router-link>
          </div>
          <div class="service-card">
            <h3>Servidores Peer-to-Peer</h3>
            <p>Proporcionamos soluciones de servidores P2P que permiten una comunicación y transferencia de datos más rápida y segura.</p>
            <router-link to="/services" class="cta-btn">Ver más</router-link>
          </div>
          <div class="service-card">
            <h3>Hosting de Alto Rendimiento</h3>
            <p>Ofrecemos servicios de hosting confiables y escalables, garantizando la máxima disponibilidad de tus servicios online.</p>
            <router-link to="/services" class="cta-btn">Ver más</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Weekly Quote Section -->
    <section class="weekly-quote">
      <div class="container">
        <h2>Frase Semanal del CEO</h2>
        <p class="quote-text">"La tecnología es el pilar fundamental para la innovación, y la innovación es lo que nos permite avanzar como sociedad."</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <h2>Contacto</h2>
        <p>Si deseas más información sobre nuestros servicios, contáctanos hoy mismo para una consulta gratuita.</p>
        <a href="mailto:contacto@metadicktyon.com" class="cta-btn">Contáctanos</a>
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
  name: 'HomePage',
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

/* About Us Section */
.about-us {
  padding: 3rem 0;
  background-color: #fff;
  text-align: center;
}

.about-us h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about-us p {
  font-size: 1.125rem;
  max-width: 800px;
  margin: 0 auto;
}

/* Services Section */
.services {
  padding: 3rem 0;
  background-color: #e5f1fb; /* Azul claro */
  text-align: center;
}

.services h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1e3a5f; /* Azul oscuro */
}

.services-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e3a5f; /* Azul oscuro */
}

.service-card p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.cta-btn {
  background-color: #1e3a5f; /* Azul oscuro */
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.125rem;
  margin-top: auto;
}

.cta-btn:hover {
  background-color: #123c58; /* Azul más oscuro */
}

/* Weekly Quote Section */
.weekly-quote {
  padding: 3rem 0;
  background-color: #1e3a5f; /* Azul oscuro */
  color: white;
  text-align: center;
}

.weekly-quote .quote-text {
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 1rem;
}

/* Contact Section */
.contact {
  padding: 3rem 0;
  background-color: #fff;
  text-align: center;
}

.contact h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1e3a5f; /* Azul oscuro */
}

.contact p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.cta-btn {
  background-color: #1e3a5f; /* Azul oscuro */
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.125rem;
}

.cta-btn:hover {
  background-color: #123c58; /* Azul más oscuro */
}

/* Footer Styles */
.footer {
  background-color: #1e3a5f; /* Azul oscuro */
  color: white;
  padding: 2rem 0;
  text-align: center;
  margin-top: 3rem;
}

.footer p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.social-links {
  margin-top: 1rem;
}

.social-icon {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.2rem;
}

.social-icon:hover {
  color: #80b3e0; /* Azul claro en hover */
}
</style>
