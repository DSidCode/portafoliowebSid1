# Del Amor Y Otras Nostalgias

Este es un proyecto web minimalista y elegante que presenta una antología de poemas y escritos personales, diseñado para simular la experiencia de leer un libro digital. El sitio está construido con HTML, CSS y JavaScript puro, lo que garantiza un rendimiento rápido y una gran accesibilidad.

## Características

*   **Navegación Intuitiva:** El diseño se asemeja a un libro, con botones para avanzar y retroceder entre las páginas, y un índice para acceder rápidamente a cualquier poema.
*   **Experiencia de Lectura Inmersiva:** La interfaz se centra en el texto, eliminando distracciones para una experiencia de lectura fluida.
*   **Diseño Responsivo:** El sitio se adapta a diferentes tamaños de pantalla, garantizando una experiencia de usuario óptima en dispositivos móviles, tabletas y ordenadores de escritorio.
*   **Funcionalidades Adicionales:**
    *   Enlaces Sociales: Se incluyen botones para compartir la página actual en redes sociales (X y Facebook).
    *   Sección de Apoyo: Apartados dedicados a la autobiografía del autor y a la posibilidad de realizar donaciones para apoyar su trabajo.
    *   Contacto Directo: Un enlace para que los lectores puedan escribir directamente al autor.

## Estructura del Código

El proyecto está compuesto por un único archivo `index.html` que contiene todo el código:

*   **`head`:** Contiene la configuración básica, la hoja de estilos CSS en línea y la fuente de Font Awesome para los iconos sociales.
*   **`body`:**
    *   **`header`:** La barra de navegación superior que permanece visible al desplazarse, con el título del poemario y los enlaces principales.
    *   **`main`:** El contenedor principal con el diseño de "libro". Cada sección (`<section>`) representa una página del poemario y se muestra u oculta con JavaScript.
    *   **`div.actions`:** El bloque con los botones sociales y de donación, que se encuentra al final de la página.
    *   **`footer`:** El pie de página con información de derechos de autor.
    *   **`<script>`:** El bloque de JavaScript al final del `body` maneja toda la lógica de la aplicación, incluyendo la navegación entre páginas, la actualización del contador de páginas y el manejo de los enlaces para compartir en redes sociales.

## Cómo Usarlo

Simplemente abre el archivo `index.html` en tu navegador web. No se requiere ninguna configuración adicional. Para ver el código, puedes abrir el archivo con cualquier editor de texto.

Este README te proporciona una visión general del proyecto y su funcionamiento. Si deseas realizar cambios, te recomiendo enfocarte en las siguientes áreas:

*   **Contenido:** Puedes añadir más poemas en el HTML siguiendo la estructura de las secciones `<section class="page">`. No olvides actualizar el índice y el JavaScript para que se refleje el nuevo número total de páginas.
*   **Estilo:** La hoja de estilos CSS en el `<head>` te permite personalizar colores, fuentes y el diseño.
*   **Funcionalidad:** La lógica de JavaScript al final del archivo es ideal para añadir nuevas funciones o modificar la navegación.

