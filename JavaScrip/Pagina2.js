const indicador = document.querySelector(".indicador");
const botonesPagina = document.querySelectorAll(".botonPag2");

function posicionarIndicador() {
    const botonActivo = document.querySelector(".botonPag2.active");
    
    if (botonActivo) {
        // Deshabilitar transición temporalmente
        indicador.style.transition = 'none';
        
        const indiceBoton = Array.from(botonesPagina).indexOf(botonActivo);
        const desplazamiento = indiceBoton * 70;
        indicador.style.transform = `translateX(${desplazamiento}px)`;
        
        // Reactivar transición después de posicionar
        setTimeout(() => {
            indicador.style.transition = 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        }, 50);
    }
}

window.addEventListener('load', posicionarIndicador);

function animarAlScroll() {
    const elementos = document.querySelectorAll('.animacionFade, .bloqueBiografia, .bloquePasiones, .bloqueReflexion');
    elementos.forEach(elemento => {
        const posicion = elemento.getBoundingClientRect().top;
        const ventana = window.innerHeight;
        if (posicion < ventana * 0.85) {
            elemento.classList.add('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    animarAlScroll();
    window.addEventListener('scroll', animarAlScroll);
    setTimeout(animarAlScroll, 100);
});