let boton = document.getElementById('verNav');
let boton2 = document.getElementById('ocultarNav');
let nav = document.getElementById('elementoNav');

function funcionNav() {
    if (nav.style.display === 'none' || nav.style.display === '' ) {
        nav.style.display = 'block';
        boton.style.display = 'none';
    } 
}

function Legacy_funcionNav() {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        boton.style.display = 'block';
    } 
}




/* 
function funcionNav() {
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
        boton.textContent = 'Ocultar menú';
    } else {
        nav.style.display = 'none';
        boton.textContent = 'Mostrar menú';
    }
}

else {
        nav.style.display = 'none';
    }

else {
        nav.style.display = 'block';
    }
*/