

function cambiarSeccionLugar(){
    let camisetas = document.querySelector(".camisetas")
    //Selector para seleccionar la seccion que tiene la clase camisetas
    const copiaDeCamisetas = camisetas


    let zapatos = document.querySelector(".zapatos")
    //Selector para seleccionar la seccion que tiene la clase zapatos

    zapatos.innerHTML += copiaDeCamisetas.innerHTML

    camisetas.innerHTML = "" // BORRAMOS CAMISETAS
    camisetas += zapatos.innerHTML
    // Apilamos los zapatos con camisetas para que quede abajo de camisetas

}


function agregarSudadera(){
    let contenedorCamisetas = document.getElementById('link__sudaderas');
    // Selector para seleccionar por id


    // Creamos elemento que vamos a añadir posteriormente
    let nuevaCamiseta = document.createElement('article');
    nuevaCamiseta.classList.add('ropa');

    let imagenCamiseta = document.createElement('article');
    imagenCamiseta.classList.add('ropa__imagen');

    let datosImagen = document.createElement('img');
    //Propiedades de la imagen que vamos a introducir
    datosImagen.src = 'assets/img/sudaderaFrente.jpg';
    datosImagen.alt = 'Nueva camiseta cara';
    datosImagen.classList.add('ropa__imagen__articulo');

    let ocultaImagen = document.createElement('img');
    ocultaImagen.src = 'assets/img/espaldaMujer.jpg';
    ocultaImagen.alt = 'Nueva camiseta espalda';
    ocultaImagen.classList.add('ropa__imagen__articulo__oculto');

    imagenCamiseta.appendChild(datosImagen);
    imagenCamiseta.appendChild(ocultaImagen);

    let infoCamiseta = document.createElement('article');
    infoCamiseta.classList.add('ropa__informacion');

    let tituloCamiseta = document.createElement('h2');
    tituloCamiseta.textContent = 'Sudadera';

    let precioCamiseta = document.createElement('p');
    precioCamiseta.classList.add('precio');
    precioCamiseta.textContent = '25$';

    let botonCarrito = document.createElement('button');
    botonCarrito.textContent = 'Añadir al carrito'; // Le damos contenido al texto

    infoCamiseta.appendChild(tituloCamiseta);
    infoCamiseta.appendChild(precioCamiseta);
    infoCamiseta.appendChild(botonCarrito);

    nuevaCamiseta.appendChild(imagenCamiseta);
    nuevaCamiseta.appendChild(infoCamiseta);
    contenedorCamisetas.appendChild(nuevaCamiseta);
}


function agregarSombreadoAImagenes(){
    let imagenes = document.getElementsByClassName("ropa__imagen__articulo")
    //selector para seleccionar por nombre de clase
    for (let iterador = 0; iterador < imagenes.length; iterador++) {
        let camisaConcreta = imagenes[iterador]
        camisaConcreta.style.boxShadow = "2rem 2rem 2rem rgba(0,0,0,3)"

    }
}

cambiarSeccionLugar()

agregarSudadera()

agregarSombreadoAImagenes()

