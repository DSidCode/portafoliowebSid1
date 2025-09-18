# Informe de Avance del Proyecto Web

Este documento resume las mejoras y acciones realizadas en el proyecto `danisid.com`.

### 1. Análisis y Planificación

- Se analizó la estructura de archivos y los logs del servidor.
- Se detectó tráfico de bots buscando vulnerabilidades de WordPress (`xmlrpc.php`) y una estructura de archivos desorganizada.
- Se creó un plan de acción documentado en `PLAN_DE_MEJORAS.md`.

### 2. Mejoras de Seguridad

- **Bloqueo de Bots**: Se creó un archivo `.htaccess` en la raíz del proyecto.
- Se añadió una regla para denegar todas las peticiones al archivo `xmlrpc.php`, eliminando eficazmente el tráfico de bots y reduciendo la carga innecesaria del servidor.

### 3. Organización de Archivos

- **Limpieza del Directorio Raíz**: Se reorganizaron los archivos HTML que estaban sueltos en la carpeta principal para mejorar la estructura del proyecto.
- Se creó una nueva carpeta `cv/`.
- Se movieron todos los archivos relacionados con los currículums (`cv.html`, `cv-diseno-dev-v1.html`, etc.) a la carpeta `cv/`.
- Se movieron los archivos personales (`Dani.html`, `To-my-dad.html`, etc.) a la carpeta `personal/` existente.

### 4. Corrección de Enlaces Rotos

- Se buscaron los enlaces que se rompieron debido a la reorganización de archivos.
- Se identificaron y corrigieron dos enlaces en `index.html` que apuntaban a la antigua ubicación de `cv.html`, actualizándolos a la nueva ruta `cv/cv.html`.

### 5. Integración con Git y GitHub

- **Inicialización de Repositorio**: Se inicializó un repositorio de Git local en el directorio del proyecto.
- **Archivo `.gitignore`**: Se creó un archivo `.gitignore` para excluir la carpeta `logs/` del control de versiones.
- **Primer Commit**: Se añadieron todos los archivos del proyecto y se realizó un commit inicial para establecer una línea base del proyecto.
- **Conexión a GitHub**: 
    - Se intentó conectar y subir el proyecto al repositorio remoto `https://github.com/DSidCode/portafoliowebSid1.git`.
    - Se diagnosticó un fallo de autenticación debido a la falta de un gestor de credenciales en el entorno.
    - Se cambió la estrategia de autenticación de HTTPS a SSH.
- **Configuración de Clave SSH**: Se guio al usuario para generar una clave SSH y añadirla a su cuenta de GitHub.
- **Subida Exitosa**: Se cambió la URL del repositorio remoto a su versión SSH (`git@github.com:DSidCode/portafoliowebSid1.git`) y se subió con éxito todo el proyecto a GitHub.

**Estado Actual**: El proyecto está ahora más seguro, mejor organizado y completamente versionado en GitHub.