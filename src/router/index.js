// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import OurServices from '@/views/OurServices.vue';
import NotFound from '@/views/NotFound.vue';
import Tercerizacion from '@/views/Tercerizacion.vue';
import p2p from '@/views/p2p.vue';
import proyectosIt from '@/views/proyectos-it.vue';
import hosting from '@/views/hosting.vue';
import appsDevelopment	 from '@/views/apps-development.vue';
import consultoria from '@/views/consultoria.vue';
import IntegracionEquipos from '@/views/Integracion-equipos.vue';
import mantenimientoIt from '@/views/mantenimiento-it.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/services',
    name: 'OurServices',
    component: OurServices
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/services/apps-dev',
    name: 'Desarrollo de Aplicaciones a Medida',
    component: appsDevelopment
  },
  {
    path: '/services/consultoria',
    name: 'Consultoría Tecnológica',
    component: consultoria
  },
  {
    path: '/services/hosting',
    name: 'Hosting y Gestión de Infraestructura',
    component: hosting
  },
  {
    path: '/services/integration-teams',
    name: 'Integración de Equipos Tecnológicos',
    component: IntegracionEquipos
  },
  {
    path: '/services/maintenance-it',
    name: 'Soporte y Mantenimiento IT',
    component: mantenimientoIt
  },
  {
    path: '/services/p2p',
    name: 'Servidores P2P para Empresas',
    component: p2p
  },
  {
    path: '/services/proyects-it',
    name: 'Gestión de Proyectos IT',
    component: proyectosIt
  },
  {
    path: '/services/tercerization',
    name: 'Implementación de Apps de Terceros',
    component: Tercerizacion
  },
];

const router = createRouter({
    history: createWebHistory('/'), // Usa '/' como la base URL directamente si no necesitas 'process.env.BASE_URL'
    routes
  });
  

export default router;
