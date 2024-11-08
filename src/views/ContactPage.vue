<template>
    <div class="contact">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Contacto</h1>
          <p>Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo.</p>
        </div>
      </section>
  
      <!-- Contact Form -->
      <section class="contact-form">
        <div class="container">
          <h2>Contáctanos</h2>
          <p>Por favor, completa los siguientes campos para que podamos ayudarte de la mejor manera posible.</p>
  
          <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" id="name" v-model="formData.name" required placeholder="Tu nombre completo" />
            </div>
            
            <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <input type="email" id="email" v-model="formData.email" required placeholder="Tu correo electrónico" />
            </div>
            
            <div class="form-group">
              <label for="phone">Teléfono (Opcional)</label>
              <input type="tel" id="phone" v-model="formData.phone" placeholder="Tu número de teléfono" />
            </div>
            
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" v-model="formData.message" required placeholder="Escribe tu mensaje" rows="6"></textarea>
            </div>
  
            <button type="submit" class="btn">Enviar Mensaje</button>
          </form>
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
    name: 'ContactPage',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Aquí puedes agregar la lógica para enviar el formulario
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
        this.resetForm();
      },
      resetForm() {
        this.formData.name = '';
        this.formData.email = '';
        this.formData.phone = '';
        this.formData.message = '';
      }
    }
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
  
  /* Contact Form Section */
  .contact-form {
    padding: 3rem 0;
    background-color: #fff;
    text-align: center;
  }
  
  .contact-form h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e3a5f; /* Azul oscuro */
  }
  
  .contact-form p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: #555;
  }
  
  .form {
    max-width: 600px;
    margin: 0 auto;
    background-color: #fafafa;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    text-align: left;
  }
  
  .form-group label {
    font-size: 1rem;
    color: #333;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
  }
  
  .form-group textarea {
    resize: vertical;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #1e3a5f; /* Azul oscuro */
  }
  
  button[type="submit"] {
    background-color: #1e3a5f;
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.125rem;
    cursor: pointer;
    width: 100%;
    margin-top: 1rem;
  }
  
  button[type="submit"]:hover {
    background-color: #80b3e0; /* Azul claro */
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
  