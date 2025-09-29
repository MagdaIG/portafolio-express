# Portafolio Profesional - Express & Handlebars

Un portafolio profesional desarrollado con Express.js y Handlebars, diseñado para mostrar proyectos innovadores en tecnologías emergentes.

## Características

- Servidor Express con configuración profesional
- Motor de plantillas Handlebars (hbs) con partials
- Estructura de carpetas organizada y escalable
- Contenido estático optimizado desde `/public`
- Páginas dinámicas con datos del backend
- Partials reutilizables para header y footer
- Helper personalizado para año actual
- Página de error 404 personalizada
- Diseño responsive y moderno
- Navegación móvil con menú hamburguesa
- Paleta de colores femenina y profesional

## Estructura del Proyecto

```
portafolio-expres/
├── app.js                 # Archivo principal de la aplicación
├── package.json           # Dependencias y scripts
├── public/                # Archivos estáticos
│   ├── css/
│   │   └── style.css     # Estilos principales
│   ├── js/
│   │   └── main.js       # JavaScript del cliente
│   └── images/           # Imágenes del proyecto
├── views/                # Plantillas Handlebars
│   ├── layouts/
│   │   └── main.hbs      # Layout principal
│   ├── partials/
│   │   ├── header.hbs    # Header de navegación
│   │   └── footer.hbs    # Footer
│   ├── home.hbs          # Página de inicio
│   ├── about.hbs         # Página acerca de
│   ├── projects.hbs      # Página de proyectos
│   └── 404.hbs           # Página de error
└── README.md
```

## Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/MagdaIG/portafolio-express.git
   cd portafolio-express
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Ejecutar en producción:**
   ```bash
   npm start
   ```

5. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

## Páginas Disponibles

- **/** - Página de inicio con información personal y proyectos destacados
- **/about** - Información detallada sobre experiencia y habilidades
- **/projects** - Lista completa de proyectos con detalles
- **Cualquier ruta no existente** - Página de error 404

## Tecnologías Utilizadas

- **Backend:** Node.js, Express.js
- **Motor de Plantillas:** Handlebars (hbs)
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Iconos:** Font Awesome
- **Responsive Design:** CSS Grid y Flexbox
- **Paleta de Colores:** Tonos púrpura y rosa profesionales

## Características Técnicas

### Handlebars Helpers
- `getCurrentYear`: Helper personalizado que muestra el año actual en el footer

### Partials
- **Header:** Navegación principal con menú responsive
- **Footer:** Información de contacto y enlaces sociales

### Datos Dinámicos
Los proyectos se renderizan desde un array JavaScript en el backend, permitiendo fácil actualización del contenido. Incluye proyectos innovadores en AI, Blockchain e IoT.

## Personalización

Para personalizar el portafolio:

1. **Información personal:** Edita las variables en `app.js`
2. **Proyectos:** Modifica el array `projects` en `app.js`
3. **Estilos:** Personaliza `public/css/style.css`
4. **Contenido:** Edita las plantillas en `views/`

## Scripts Disponibles

- `npm start` - Ejecuta la aplicación en producción
- `npm run dev` - Ejecuta con nodemon para desarrollo

## Licencia

MIT License - Ver archivo LICENSE para más detalles.
