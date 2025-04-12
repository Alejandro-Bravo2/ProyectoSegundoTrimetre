const botonCambiarColor = document.getElementById('boton__cambiar__color__tema');
const body = document.body;

botonCambiarColor.addEventListener('click', () => {
    body.classList.toggle('dark');
    // Guarda la preferencia en localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    body.classList.toggle('dark');
}


const botonCambiarColorDesplegable = document.getElementById('boton__cambiar__color__tema__desplegable');


botonCambiarColorDesplegable.addEventListener('click', () => {
    body.classList.toggle('dark');
    // Guarda la preferencia en localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
