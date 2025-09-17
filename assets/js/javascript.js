/* =============== EMAIL JS ============*/
const   contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault();
    
    // serviceID - templateID - #form - publicKay
    emailjs.sendForm('service_gi6v0na','template_umpgkuo','contact-form','sYgC-7nYnvQHkfqRJ')

    .then(() =>{
        // Mostramos el mensaje de envio
        contactMessage.textContent = 'Tu mensaje ha sido enviado ✔'
        // Eliminamos el mensaje de envio
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)
        //  Reseteamos el formulario
        contactForm.reset()
    }, () => {
        // Mostrat mensaje de error
        contactMessage.textContent = 'Mensaje no Enviado (error de servidor) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail);
/* =============== SHOW SCROLL UP ============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/* =============== SCROLL SECTION ACTIVE LINK ============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive =() =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav_list a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop +sectionHeight){
                sectionClass.classList.add('active-link')
            }else{
                sectionClass.classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive)
/* =============== SCROLL REVEAL ANIMATION ============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, //repeticin de la animacion
})
sr.reveal(`.pefil, .contact_from`)
sr.reveal(`.info`, {origin: 'left', delay:800})
sr.reveal(`.skills`, {origin: 'left', delay:1400})
sr.reveal(`.about`, {origin: 'right', delay:1200})
sr.reveal(`.projects_card, .services_card, .experience_card`, {interval: 100})

// Seleccionar todos los canvases con la clase matrix-effect
const canvases = document.querySelectorAll('.matrix-effect');

// Configuración común
const binary = '01'; // Solo 0 y 1 para simular código binario
const fontSize = 16;

// Función para ajustar el tamaño del canvas al contenedor padre
function resizeCanvas(canvas) {
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
}

// Configurar cada canvas
canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    resizeCanvas(canvas);

    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        // Fondo con opacidad baja para efecto de desvanecimiento
        ctx.fillStyle = 'rgba(26, 26, 30, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Fuente para los números binarios
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = binary.charAt(Math.floor(Math.random() * binary.length));
            const glow = Math.random();

            // Efecto de brillo
            if (glow > 0.95) {
                ctx.fillStyle = '#00D4FF'; // Cian brillante
                ctx.globalAlpha = 1;
            } else if (glow > 0.7) {
                ctx.fillStyle = '#00A3CC';
                ctx.globalAlpha = 0.7;
            } else {
                ctx.fillStyle = '#007A99';
                ctx.globalAlpha = 0.4;
            }

            // Dibujar el carácter
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reiniciar la gota cuando llegue al fondo
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }

        ctx.globalAlpha = 1; // Restaurar opacidad
    }

    // Animación
    setInterval(draw, 35);
});

// Ajustar el tamaño al redimensionar la ventana
window.addEventListener('resize', () => {
    canvases.forEach(canvas => {
        resizeCanvas(canvas);
        const newColumns = Math.floor(canvas.width / fontSize);
        const drops = Array(newColumns).fill(1);
    });
});