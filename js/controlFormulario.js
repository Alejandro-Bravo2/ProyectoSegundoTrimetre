// Seleccionamos los elementos del DOM
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let telefono = document.getElementById('telefono');
let genero = document.getElementById('genero');


let nombreEscritura = document.getElementById('nombre__formulario__comprobar');
let apellidoEscritura = document.getElementById('apellido__formulario__comprobar');
let emailEscritura = document.getElementById('email__formulario__comprobar');
let telefonoEscritura = document.getElementById('telefono__formulario__comprobar');
let generoEscritura = document.getElementById('genero__formulario__comprobar');


let botonEnviar = document.getElementById('formulario__boton__enviar');
botonEnviar.disabled = true;

nombreEscritura.style.color = 'red';
apellidoEscritura.style.color = 'red';
emailEscritura.style.color = 'red';
telefonoEscritura.style.color = 'red';
generoEscritura.style.color = 'red';



let comprobacionNombre = false
let comprobacionApellido = false
let comprobacionEmail = false
let comprobacionTelefono = false
let comprobacionGenero = false

// Validación para el nombre
function validarNombre(event) {
    const value = event.target.value;
    if (value.length < 8) {
        nombreEscritura.textContent = 'El nombre debe tener un tamaño mínimo de 8 caracteres';
        comprobacionNombre = false
    } else {
        nombreEscritura.textContent = '';
        comprobacionNombre = true
    }
    comprobacionCampos()

}

// Validación para el Apellido
function validarApellido(event) {
    const value = event.target.value;
    if (value.length < 8) {
        apellidoEscritura.textContent = 'El apellido debe tener un tamaño mínimo de 8 caracteres';
        comprobacionApellido = false
    } else {
        apellidoEscritura.textContent = '';
        comprobacionApellido = true
    }
    comprobacionCampos()

}

// Validación de email
function validarEmail() {
    const valor = email.value;
    const cumpleNumeros = /[0-9]{2,}/.test(valor);
    const cumpleCaracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(valor);
    const cumpleMayusculas = /[A-Z]/.test(valor);
    const cumpleArroba = valor.indexOf("@") !== -1;
    const cumpleLongitudMinima = valor.length >= 8;
    let errores = "Debes de cumplir: ";
    let requisitos = [];
    if (cumpleNumeros && cumpleCaracteresEspeciales && cumpleMayusculas && cumpleArroba && cumpleLongitudMinima) {
        emailEscritura.textContent = "";
        comprobacionEmail = true
    } else {
        if (!cumpleNumeros){
            requisitos.push("2 números");
        }
        if (!cumpleCaracteresEspeciales) {
            requisitos.push("1 caracter especial");
        }
        if (!cumpleMayusculas){
            requisitos.push("1 mayúscula");
        }
        if (!cumpleArroba) {
            requisitos.push("@");
        }
        if (!cumpleLongitudMinima) {
            requisitos.push("8 caracteres");
        }
        errores += requisitos.join(", ");
        emailEscritura.textContent = errores;
        comprobacionEmail = false
    }
    comprobacionCampos()

}


function validarTelefono() {
    let valor = telefono.value;
    if (valor.length !== 9) {
        telefonoEscritura.textContent = "Debes de cumplir: 9 números"
        comprobacionTelefono = false
    }
    else{
        if (!/[0-9]{9}/.test(valor.trim())) {
            telefonoEscritura.textContent = 'Debes de cumplir: solo números'
            comprobacionTelefono = false
        } else {
            telefonoEscritura.textContent = '';
            comprobacionTelefono = true
        }
    }
    comprobacionCampos()

}


function validarGenero() {
    let valor = genero.value;
    if (valor != 'Hombre' && valor != 'Mujer') {
        generoEscritura.textContent = "Generos posibles: Mujer, Hombre";
        comprobacionGenero = false
    } else {
        generoEscritura.textContent = '';
        comprobacionGenero = true
    }
    comprobacionCampos()

}


function comprobacionCampos(){
    if (comprobacionTelefono == true && comprobacionApellido == true && comprobacionGenero == true && comprobacionEmail == true && comprobacionNombre == true) {
        botonEnviar.disabled = false;
    }
}

// Asignamos los event listeners a cada campo
nombre.addEventListener('input', validarNombre);
apellido.addEventListener('input', validarApellido);
email.addEventListener('input', validarEmail);
telefono.addEventListener('input', validarTelefono);
genero.addEventListener('input', validarGenero);


