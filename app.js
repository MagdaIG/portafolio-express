const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar Handlebars como motor de vistas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.set('view options', { layout: 'layouts/main' });

// Registrar partials
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Helper personalizado para el año actual
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// Helper para comparar valores (eq)
hbs.registerHelper('eq', (a, b) => {
    return a === b;
});

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Datos de ejemplo para los proyectos
const projects = [
    {
        id: 1,
        title: 'Sistema de Inventario v2.0',
        description: 'Versión mejorada del sistema de inventario con validaciones avanzadas, funciones personalizadas y documentación completa. Aplicando mejores prácticas de desarrollo y arquitectura de bases de datos.',
        technologies: ['PostgreSQL', 'PL/pgSQL', 'Validaciones', 'Git Submodule'],
        image: '/images/project1.jpg',
        github: 'https://github.com/MagdaIG/inventario-v2',
        demo: 'https://magdaig.github.io/portafoliojs/bd-inventario-v2.html'
    },
    {
        id: 2,
        title: 'Gestión de Tareas Kanban',
        description: 'Sistema completo de gestión de tareas con interfaz tipo Kanban. Permite crear, editar, mover entre columnas y eliminar tareas de forma interactiva con drag & drop.',
        technologies: ['JavaScript', 'Supabase', 'HTML5', 'CSS3'],
        image: '/images/project2.jpg',
        github: 'https://github.com/MagdaIG/kanban-tasks',
        demo: 'https://magdaig.github.io/kanban-tasks'
    },
    {
        id: 3,
        title: 'Cute Shop - E-commerce',
        description: 'Tienda online de joyería con catálogo dinámico, carrito de compras y sistema de filtros por categorías. Interfaz moderna y funcional con API externa.',
        technologies: ['JavaScript', 'API REST', 'LocalStorage', 'Responsive Design'],
        image: '/images/project3.jpg',
        github: 'https://github.com/MagdaIG/cute-shop',
        demo: 'https://magdaig.github.io/productos-e-commerce.js/'
    }
];

// Rutas
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Inicio',
        name: 'Magdalena Inalaf',
        description: 'Desarrolladora Full Stack especializada en bases de datos, JavaScript y aplicaciones web modernas',
        projects: projects.slice(0, 3) // Solo mostrar 3 proyectos en home
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Acerca de mí',
        name: 'Magdalena Inalaf',
        bio: 'Soy una Desarrolladora Full Stack con experiencia en bases de datos relacionales, JavaScript y desarrollo web. Me especializo en PostgreSQL, sistemas de gestión de datos, e-commerce y aplicaciones interactivas. Mi enfoque está en crear soluciones robustas y escalables que mejoren la experiencia del usuario.',
        skills: ['JavaScript', 'PostgreSQL', 'PL/pgSQL', 'HTML5', 'CSS3', 'Supabase', 'API REST', 'Git', 'Responsive Design', 'LocalStorage'],
        experience: '3+ años'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Proyectos',
        projects: projects
    });
});

// Página de error 404
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Página no encontrada',
        message: 'Lo siento, la página que buscas no existe.'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
