import { Component } from '@angular/core';
import { Header } from '../../layouts/header/header';
import { Footer } from '../../layouts/footer/footer';

interface Technology {
  name: string;
  color: string; // Código Hex del color de la marca
}

interface Project {
  title: string;
  type: string; // Ej: Full Stack, Frontend, Mobile
  description: string;
  image?: string; // Opcional, por si algún proyecto no tiene imagen aún
  repoLink: string;
  technologies: Technology[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[]; // Lista de logros
}

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  readonly skills: string[] = [
    'Kotlin',
    'Android',
    'Angular',
    'TypeScript',
    'Java',
    'Spring Boot',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Tailwind CSS',
    'SQL',
    'Git'
  ];

  readonly projects: Project[] = [
    {
      title: 'NutriZulia - Gestión de Citas Médicas',
      type: 'Full Stack Web + Mobile App',
      description: 'Solución Full Stack distribuida que implementa una arquitectura cliente-servidor robusta. El núcleo es una API RESTful desarrollada con Spring Boot (Java) que orquesta la lógica de negocio y seguridad. El frontend administrativo está construido con Angular para una experiencia SPA reactiva, mientras que el acceso para nutricionistas se realiza mediante una aplicación nativa Android. Todo el ecosistema garantiza la integridad de datos y una experiencia de usuario fluida entre plataformas.',
      image: 'nutrizulia.png',
      repoLink: 'https://github.com/andresmtataseo/NutriZulia',
      technologies: [
        { name: 'HTML5', color: '#E34F26' },
        { name: 'CSS3', color: '#1572B6' },
        { name: 'Bootstrap', color: '#7952B3' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Angular', color: '#DD0031' },
        { name: 'Kotlin', color: '#7F52FF' },
        { name: 'Android', color: '#3DDC84' },
        { name: 'SQLite', color: '#003B57' },
        { name: 'Java', color: '#007396' },
        { name: 'Spring Boot', color: '#6DB33F' },
        { name: 'PostgreSQL', color: '#336791' },
        { name: 'JWT', color: '#000000' }
      ]
    },
    {
      title: 'Calibarber - Sistema de Reservas',
      type: 'Full Stack Web',
      description: 'Sistema integral de gestión de citas diseñado para optimizar la operatividad de barberías modernas. Cuenta con una arquitectura desacoplada donde el Frontend (Angular) ofrece una interfaz interactiva para clientes y administradores, mientras que el Backend (Spring Boot) gestiona la lógica de disponibilidad, asignación de barberos y catálogo de servicios de forma segura y escalable.',
      image: 'calibarber.png',
      repoLink: 'https://github.com/andresmtataseo/Calibarber',
      technologies: [
        { name: 'Angular', color: '#DD0031' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Tailwind CSS', color: '#38B2AC' },
        { name: 'Spring Boot', color: '#6DB33F' },
        { name: 'Java', color: '#007396' },
        { name: 'PostgreSQL', color: '#336791' },
        { name: 'JWT', color: '#000000' }
      ]
    }
  ];

  experiences: Experience[] = [
    {
      company: 'Corporación VETTAL C.A.',
      role: 'Analista de TI',
      period: 'Oct 2025 — Actualidad',
      description: [
        'Diseño y desarrollo soluciones Full Stack para la automatización de procesos operativos, orquestando la integración eficiente entre bases de datos y APIs REST.',
        'Ejecuto el mantenimiento preventivo y correctivo del parque informático, realizando diagnósticos avanzados de hardware para garantizar la continuidad operativa de las estaciones de trabajo.',
        'Aseguro la integridad de la red corporativa gestionando identidades, permisos y políticas de grupo (GPO) mediante Active Directory.',
        'Brindo soporte técnico, diagnosticando y resolviendo incidencias críticas de hardware y software para minimizar tiempos de inactividad.'
      ]
    },
    {
      company: 'Corporación VETTAL C.A.',
      role: 'Prácticas profesionales (Internship)',
      period: 'Ago 2025 — Oct 2025',
      description: [
        'Colaboré en el desarrollo de módulos auxiliares para el sistema de gestión, facilitando la transición digital de la empresa.',
        'Ejecuté planes de mantenimiento preventivo y correctivo de la infraestructura tecnológica.',
        'Participé en la documentación técnica de procesos y manuales de usuario para las nuevas herramientas implementadas.'
      ]
    }
  ];

  readonly fecha = new Date().getFullYear();

}
