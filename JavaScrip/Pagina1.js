// ========== NAVEGACIÓN ISLA FLOTANTE ==========
const indicador = document.querySelector(".indicador");
const botonesPagina = document.querySelectorAll(".botonPag1");

function posicionarIndicador() {
    const botonActivo = document.querySelector(".botonPag1.active");
    
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

// ========== ANIMACIONES AL SCROLL ==========
function animarAlScroll() {
    const elementosAnimacion = document.querySelectorAll('.animacionScroll, .animacionFade');
    
    elementosAnimacion.forEach(elemento => {
        const posicionElemento = elemento.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;
        
        if (posicionElemento < alturaVentana * 0.85) {
            elemento.classList.add('visible');
        }
    });
}

// ========== ANIMACIÓN DE ESCALA PARA TARJETAS ==========
function animarEscalaArtistas() {
    const tarjetasArtistas = document.querySelectorAll('.tarjetaArtista');
    
    tarjetasArtistas.forEach(tarjeta => {
        const rectanguloTarjeta = tarjeta.getBoundingClientRect();
        const centroVentana = window.innerHeight / 2;
        const centroTarjeta = rectanguloTarjeta.top + rectanguloTarjeta.height / 2;
        
        const distancia = Math.abs(centroVentana - centroTarjeta);
        const escalaMaxima = 1.05;
        const escalaMinima = 0.95;
        
        const escala = Math.max(escalaMinima, escalaMaxima - (distancia / 1000));
        
        if (rectanguloTarjeta.top < window.innerHeight && rectanguloTarjeta.bottom > 0) {
            tarjeta.style.transform = `scale(${escala})`;
        }
    });
}

// ========== EFECTO PARALLAX EN HEADER ==========
function efectoParallaxHeader() {
    const header = document.querySelector('.headerPrincipal');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (header) {
            header.style.transform = `translateY(${scrollY * 0.3}px)`;
            header.style.opacity = Math.max(0.3, 1 - (scrollY / 500));
        }
    });
}

// ========== INICIALIZAR TODO ==========
document.addEventListener('DOMContentLoaded', () => {
    animarAlScroll();
    efectoParallaxHeader();
    
    window.addEventListener('scroll', () => {
        animarAlScroll();
        animarEscalaArtistas();
    });
    
    setTimeout(animarAlScroll, 100);
});
