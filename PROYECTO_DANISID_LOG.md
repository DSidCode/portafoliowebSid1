# Resumen de Cambios y Estrategia: Proyecto danisid.com

Este documento sirve como bitácora de los cambios, mejoras y decisiones estratégicas aplicadas al sitio web `danisid.com` para transformarlo en un portafolio profesional, escalable y optimizado.

---

## 1. Diagnóstico Inicial y Estrategia

### Estado Inicial
*   **Estructura Desorganizada:** Múltiples archivos HTML (portafolio, varios CVs, proyectos personales) convivían en el directorio raíz.
*   **Recursos Dispersos:** Los archivos CSS, JavaScript e imágenes estaban en carpetas separadas (`css/`, `js/`, `img/`, `limg/`) sin una estructura central.
*   **Contenido Redundante:** La página de inicio (`index.html`) presentaba tres secciones de introducción (`perfil`, `info`, `about`) que generaban confusión.
*   **Navegación Inexistente:** No había una forma clara para que un usuario navegara entre las diferentes "islas" del sitio (del portafolio al CV, por ejemplo).
*   **Potencial de Optimización:** Se identificaron oportunidades para mejorar el rendimiento, la accesibilidad y el SEO.

### Estrategia Propuesta
Se definió un plan de acción en tres fases para abordar estos puntos:
1.  **Fase 1: Reorganización de Archivos:** Limpiar y crear una estructura de carpetas lógica.
2.  **Fase 2: Unificación de Contenido y UX:** Mejorar la experiencia del usuario y la coherencia del sitio.
3.  **Fase 3: Optimización Técnica:** Mejorar el rendimiento, la accesibilidad y el SEO.

---

## 2. Fase 1: Reorganización de Archivos (La Gran Limpieza)

El objetivo fue crear una base sólida y organizada para el proyecto.

*   **Centralización de Recursos (`assets`):**
    *   Se creó una carpeta principal `assets/`.
    *   Dentro de `assets/`, se crearon las subcarpetas `css/`, `js/` e `img/`.
    *   Todos los archivos de estilos, scripts e imágenes fueron movidos a sus respectivas nuevas carpetas.

*   **Organización de Contenido:**
    *   Se creó la carpeta `cv/` para todo lo relacionado con las hojas de vida.
    *   Se movió el CV principal a `cv/cv.html`.
    *   Las versiones alternativas del CV se movieron a una subcarpeta (ej. `cv/versiones/`) y se les añadió la metaetiqueta `<meta name="robots" content="noindex, nofollow">` para evitar problemas de contenido duplicado con el SEO.
    *   Se creó la carpeta `personal/` para alojar proyectos como `To-my-dad.html` y `TarjetaYis.html`.
    *   Se añadió la carpeta `antologia/` para un nuevo proyecto web dedicado a la escritura poética, con funcionalidades como índice, donaciones y biografía.

*   **Actualización de Rutas:**
    *   Se revisaron **todos** los archivos HTML (`index.html`, `cv.html`, `To-my-dad.html`, etc.) para actualizar las rutas de los CSS, JS e imágenes, asegurando que apuntaran a la nueva estructura `assets/`.
    *   Se corrigieron enlaces relativos que se rompieron al mover los archivos a sus nuevas carpetas (ej. `../assets/img/`).

*   **Corrección de Enlaces de Proyectos:**
    *   Se actualizaron los enlaces en `index.html` para los proyectos de diseño gráfico (como "Leyenda Del Dorado") para que apuntaran directamente a sus respectivas galerías en Behance.

---

## 3. Fase 2: Unificación de Contenido y UX

El objetivo fue mejorar la claridad del mensaje y la navegabilidad del sitio.

*   **Página de Inicio (`index.html`):**
    *   Se intentó unificar las tres secciones de "Home" en una sola, pero esto rompió el diseño del `grid`.
    *   **Solución:** Se restauró la estructura original de 4 módulos (`perfil`, `info`, `about`, `skills`) para mantener el diseño visual, pero se redistribuyó el contenido para que fuera más coherente y menos redundante. Se corrigieron las imágenes para que cada módulo mostrara la correcta (`foto1.png`, `foto2.png`, `foto3.png`).

*   **Navegación Global:**
    *   Se mejoró el `footer` de `index.html`.
    *   Se creó un `footer` global y consistente para `cv.html`, incluyendo enlaces a las secciones principales del portafolio (`Inicio`, `Proyectos`, `Contacto`) y a las redes sociales. Esto conecta las "islas" y crea un ecosistema unificado.

---

## 4. Fase 3: Optimización Técnica

El objetivo fue hacer el sitio más rápido, más accesible para todos y amigable para los motores de búsqueda.

### Mejoras de Accesibilidad (a11y)
*   **Formularios:** Se añadieron etiquetas `<label>` (ocultas visualmente) al formulario de contacto para que los lectores de pantalla puedan identificar cada campo correctamente.
*   **Navegación por Iconos:** Se añadió el atributo `aria-label` a los enlaces de navegación que solo usan iconos, proporcionando un contexto textual.
*   **Contraste de Color:** Se ajustó el color del texto en los botones principales para cumplir con los estándares de contraste WCAG, mejorando la legibilidad.
*   **Textos Alternativos:** Se mejoraron los `alt` de las imágenes de "skills" para que fueran más descriptivos.

### Mejoras de Rendimiento
*   **Carga de Imágenes (`Lazy Loading`):** Se añadió el atributo `loading="lazy"` a las imágenes de la sección de proyectos. Ahora solo se descargan cuando el usuario se acerca a ellas, acelerando drásticamente la carga inicial de la página.
*   **Optimización de JavaScript:**
    *   Se eliminó la carga del script redundante `matrix.js`.
    *   Se añadió el atributo `defer` a todas las etiquetas `<script>`. Esto evita que los scripts bloqueen la renderización del contenido visual de la página.
*   **Optimización de Fuentes:** Se cambió la importación de Google Fonts de `@import` en el CSS a etiquetas `<link>` en el `<head>` del HTML. Esto permite que el navegador las descubra y descargue mucho antes.

---

## 5. Estado Actual del Proyecto

Tras estas fases, `danisid.com` ha pasado de ser una colección de archivos a una **plataforma web bien estructurada, optimizada y escalable**.

*   **Organización:** La estructura de carpetas es lógica y fácil de mantener.
*   **Experiencia de Usuario:** La navegación es coherente y la información clave es fácil de encontrar.
*   **Rendimiento:** El sitio carga significativamente más rápido.
*   **Accesibilidad:** Es más inclusivo para usuarios con diversas capacidades.
*   **Escalabilidad:** Añadir nuevos proyectos o secciones es ahora un proceso sencillo y ordenado.
*   **Multifacético:** El sitio ahora integra de manera más clara las diferentes facetas del autor: desarrollador, diseñador y escritor.