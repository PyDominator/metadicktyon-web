<template>
    <div class="about">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Acerca de Metadicktyon Solutions</h1>
          <p>Innovación, tecnología y soluciones para el sector industrial colombiano</p>
        </div>
      </section>
  
      <!-- Quiénes Somos -->
      <section class="who-we-are">
        <div class="container">
          <h2>¿Quiénes Somos?</h2>
          <p>Metadicktyon Solutions es una empresa tecnológica emergente dedicada a brindar soluciones innovadoras y accesibles para la transformación digital del sector industrial colombiano. Con un equipo comprometido y soluciones tecnológicas de alta calidad, buscamos optimizar los procesos y hacer crecer a las PYMES del país.</p>
        </div>
      </section>
  
      <!-- Nuestro Equipo -->
      <section class="team">
        <div class="container">
          <h2>Conoce a Nuestro Equipo</h2>
          <div class="team-cards">
            <!-- Tarjeta 1 -->
            <div class="team-card">
              <img src="https://via.placeholder.com/150" alt="CEO" class="team-img">
              <h3>Mateo Lopez</h3>
              <p>CEO</p>
            </div>
            <!-- Tarjeta 2 -->
            <div class="team-card">
              <img src="https://via.placeholder.com/150" alt="CTO" class="team-img">
              <h3>Camila Vazques</h3>
              <p>CTO</p>
            </div>
            <!-- Tarjeta 3 -->
            <div class="team-card">
              <img src="https://via.placeholder.com/150" alt="COO" class="team-img">
              <h3>Fernando Gomez</h3>
              <p>COO</p>
            </div>
            <!-- Tarjeta 4 -->
            <div class="team-card">
              <img src="https://via.placeholder.com/150" alt="CFO" class="team-img">
              <h3>Gilberto Martínez</h3>
              <p>CFO</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Misión y Visión Section -->
      <section class="mission-vision">
        <div class="container">
          <h2>Nuestra Misión y Visión</h2>
          <div class="mission-vision-cards">
            <!-- Misión Card -->
            <div class="card">
              <h3>Misión</h3>
              <p>Apoyar al sector industrial colombiano con soluciones tecnológicas robustas y económicas, contribuyendo al crecimiento y competitividad de las PYMES del país.</p>
            </div>
            <!-- Visión Card -->
            <div class="card">
              <h3>Visión</h3>
              <p>Ser, para el 2030, una empresa líder en tecnología de calidad para PYMES colombianas, brindando soluciones de vanguardia que ayuden a transformar y modernizar el panorama industrial del país.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Historia de la Empresa -->
      <section class="history">
        <div class="container">
          <h2>Nuestra Historia</h2>
          <p>Metadicktyon Solutions nació hace un año con la misión de transformar la industria colombiana mediante el uso de tecnologías avanzadas y soluciones económicas. A lo largo de este primer año, hemos trabajado arduamente para ofrecer soluciones innovadoras a las PYMES, ayudándolas a integrar herramientas tecnológicas que optimizan sus procesos y potencian su competitividad en el mercado. Nuestro equipo está comprometido con el desarrollo tecnológico del país y con la misión de apoyar a las empresas en su camino hacia la transformación digital.</p>
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
    name: 'AboutPage',
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
  
  /* Quiénes Somos Section */
  .who-we-are {
    padding: 3rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .who-we-are h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .who-we-are p {
    font-size: 1.125rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* Team Section */
  .team {
    padding: 3rem 0;
    background-color: #e5f1fb; /* Azul claro */
    text-align: center;
  }
  
  .team h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #1e3a5f; /* Azul oscuro */
  }
  
  .team-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .team-card {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  
  .team-img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  .team-card h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #1e3a5f; /* Azul oscuro */
  }
  
  .team-card p {
    font-size: 1rem;
    color: #666;
  }
  
  /* Misión y Visión Section */
  .mission-vision {
    padding: 3rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .mission-vision h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e3a5f; /* Azul oscuro */
  }
  
  .mission-vision-cards {
    display: flex;
    justify-content: center; /* Centra las tarjetas horizontalmente */
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .card {
    background-color: #e5f1fb; /* Azul claro */
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 250px; /* Establece un tamaño fijo para las tarjetas */
  }
  
  .card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1e3a5f; /* Azul oscuro */
  }
  
  .card p {
    font-size: 1.125rem;
    color: #333;
  }
  
  /* Historia Section */
  .history {
    padding: 3rem 0;
    background-color: #e5f1fb; /* Azul claro */
    text-align: center;
  }
  
  .history h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e3a5f; /* Azul oscuro */
  }
  
  .history p {
    font-size: 1.125rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* Footer */
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
  