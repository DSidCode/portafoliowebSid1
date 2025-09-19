# Proyecto: Network Sentinel - Documento de Investigación

## 1. Objetivo del Proyecto

Desarrollar una aplicación ligera y multiplataforma que actúe como un detector de conexiones de red (entrantes y salientes) en un ordenador o dispositivo móvil. El objetivo principal es proporcionar al usuario una visión clara de qué aplicaciones se están conectando a internet, a qué destinos y permitirle diferenciar entre conexiones seguras, sospechosas o no deseadas.

La visión a largo plazo es que sea una herramienta accesible en formato de widget para escritorio (Linux/GNOME), aplicación móvil (Android) y extensión de navegador.

---

## 2. Fase de Investigación

Este apartado documentará los hallazgos clave para determinar la viabilidad y el enfoque técnico del proyecto.

### 2.1. Análisis de Herramientas Existentes

*Aquí se listarán y analizarán las herramientas similares que ya existen en el mercado. El objetivo es entender sus fortalezas, debilidades y el nicho que "Network Sentinel" podría ocupar.*

*   **GlassWire:** (Windows, Android)
    *   **Fortalezas:** Interfaz gráfica muy visual, firewall integrado, monitoreo en tiempo real.
    *   **Debilidades:** Modelo de pago para funciones avanzadas, no disponible para Linux.
    *   **Análisis:** Es un referente en cuanto a UX/UI. La idea de un firewall es potente pero podría ser una fase 2 para Sentinel.

*   **Little Snitch:** (macOS)
    *   **Fortalezas:** Control granular sobre conexiones salientes, notificaciones en tiempo real para aprobar o denegar conexiones.
    *   **Debilidades:** Solo para macOS, de pago.
    *   **Análisis:** El modelo de notificaciones es excelente para el control del usuario.

*   **OpenSnitch:** (Linux)
    *   **Fortalezas:** Open Source, inspirado en Little Snitch, control a nivel de aplicación.
    *   **Debilidades:** La interfaz puede ser menos intuitiva para usuarios no técnicos.
    *   **Análisis:** Es el competidor más directo en el ecosistema Linux. Hay que analizar su código y ver qué se puede mejorar en términos de usabilidad.

*   **NetGuard:** (Android)
    *   **Fortalezas:** Firewall sin necesidad de root, permite bloquear acceso a internet por aplicación.
    *   **Debilidades:** Utiliza una VPN local, lo que puede entrar en conflicto con otras VPNs.
    *   **Análisis:** El enfoque de VPN local es una técnica común en Android para evitar el `root`. Es una vía a investigar.

*   **(Por investigar):** Herramientas de línea de comandos como `netstat`, `lsof`, `nethogs` y cómo sus datos podrían ser la base para una GUI.

### 2.2. Tecnologías Potenciales

*   **Backend / Core Engine (Captura de datos):**
    *   **Python:** Con librerías como `psutil` (para asociar conexiones a procesos) y `Scapy` (para un análisis más profundo de paquetes).
    *   **Go:** Excelente para concurrencia y aplicaciones de red de alto rendimiento.
    *   **Rust:** Ofrece seguridad de memoria, ideal para una herramienta de sistema.

*   **Frontend / Interfaz de Usuario (GUI):**
    *   **Widget para Linux/GNOME:** Investigar librerías como GTK o Qt con bindings para Python (PyGObject) o Go.
    *   **Aplicación Android:** Kotlin (nativo) o un framework como Flutter/React Native.
    *   **Extensión de Navegador:** JavaScript, HTML, CSS, utilizando las APIs `webRequest` o `declarativeNetRequest`.

### 2.3. Consideraciones por Plataforma

*   **Linux (GNOME):**
    *   ¿Cómo obtener permisos para monitorear la red sin requerir `sudo` constantemente? (Posiblemente un servicio que corra con privilegios y una GUI que se comunique con él).
    *   Integración con el sistema de notificaciones de GNOME.

*   **Android:**
    *   El uso de `VpnService` parece ser el estándar para interceptar tráfico sin root. Investigar sus limitaciones.
    *   Optimización de batería es crucial.

*   **Extensión de Navegador:**
    *   Limitado al tráfico del propio navegador. No puede ver conexiones de otras aplicaciones.

---

## 3. Próximos Pasos

1.  **Profundizar en OpenSnitch:** Instalar, usar y analizar su arquitectura.
2.  **Prueba de Concepto (PoC):** Crear un script simple en Python con `psutil` para listar las conexiones activas y los procesos asociados en la terminal.
3.  **Definir el MVP (Producto Mínimo Viable):** ¿Cuál es la funcionalidad más básica que aporta valor? Probablemente, un listado en tiempo real de aplicaciones y sus conexiones en un escritorio Linux.