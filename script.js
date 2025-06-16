// SECCION Switch NAV izquierda (oculto)

function funcionNav() {
    let nav = document.getElementById('elementoNav'); /* NEW */
    nav.classList.toggle('hidden'); /* NEW */

    let boton = document.getElementById('verNav'); /* NEW */
    boton.classList.toggle('oscuro'); /* NEW */
    
    let fondo = document.getElementById('fondo'); /* NEW */
    fondo.classList.toggle('anti-fondo'); /* NEW */
}

// SECCION swiper 
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',  
    loop: true,
    autoplay: {
      delay: 3000,
    },
});

