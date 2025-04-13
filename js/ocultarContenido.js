const imagenFichero = document.getElementById("agregar__producto__entrada");
let imagenAlmacenada = null;
let imagenEnBase64 = "";
let contador = 0;

if (localStorage.getItem("contador") !== null) {
    contador = JSON.parse(localStorage.getItem("contador"));
} else {
    localStorage.setItem("contador", JSON.stringify(contador));
}

imagenFichero.addEventListener("change", function () {
    const imagen = this.files[0];
    if (imagen) {
        imagenAlmacenada = imagen;
        console.log("Se ha almacenado una imagen");
        const lector = new FileReader();
        lector.onload = function (imagen) {
            imagenEnBase64 = imagen.target.result;
        };
        lector.readAsDataURL(imagen);
    }
});

const botonesAgregarCarrito = document.querySelectorAll(".agregar__al__carrrito");

botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', function () {
        const precio = parseFloat(this.dataset.precio);
        const aritucloInformacionProducto = this.parentNode;
        const nombreProductoElemento = aritucloInformacionProducto.querySelector(".subtitulo__ropa__informacion");

        nombreProducto = nombreProductoElemento.textContent;
        contador += 1;
        let diccionarioAlmacenar = {
            "nombre": nombreProducto,
            "precio": precio,
        };
        localStorage.setItem("productoCarrito" + contador, JSON.stringify(diccionarioAlmacenar));
        localStorage.setItem("contador", JSON.stringify(contador));
        console.log(localStorage);
    });
});

const botonMostrarCarrito = document.querySelectorAll(".boton__carrito");
const seccionCarrito = document.getElementById("carrito");
const listaCarrrito = document.querySelector(".carrito__lista");
const precioTotalHTML = document.getElementById("carrito__precio__total");

function mostrarProductosCarrito() {
    listaCarrrito.innerHTML = ''; // Limpiar la lista al mostrar el carrito
    let precioTotal = 0;

    for (datosAlmacenados in localStorage) {
        if (localStorage.hasOwnProperty(datosAlmacenados) && datosAlmacenados !== 'theme' && datosAlmacenados !== 'contador' && /^productoCarrito\d+$/.test(datosAlmacenados)) {
            const productoEnCarrito = JSON.parse(localStorage.getItem(datosAlmacenados));
            const productoLista = document.createElement("li");
            const spanProducto = document.createElement("span");
            const botonBorrarProducto = document.createElement("button");

            botonBorrarProducto.textContent = "❌";
            botonBorrarProducto.classList.add("boton__borrar__carrito");
            botonBorrarProducto.dataset.key = datosAlmacenados;

            spanProducto.textContent = productoEnCarrito.nombre + ", Precio: " + productoEnCarrito.precio + "€  ";
            console.log(productoEnCarrito.nombre + ", Precio: " + productoEnCarrito.precio + "€");
            precioTotal += parseFloat(productoEnCarrito.precio);
            productoLista.appendChild(spanProducto);
            productoLista.appendChild(botonBorrarProducto);
            listaCarrrito.appendChild(productoLista);
        }
    }
    precioTotalHTML.textContent = ": " + precioTotal + "€";
}

botonMostrarCarrito.forEach(boton =>
    boton.addEventListener('click', function() {
        if (seccionCarrito.style.display === "flex") {
            seccionCarrito.style.display = "none";
        } else {
            seccionCarrito.style.display = "flex";
            mostrarProductosCarrito(); // Llamar a la función para mostrar los productos
        }
    })
);

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('boton__borrar__carrito')) {
        const keyToRemove = event.target.dataset.key;
        if (keyToRemove) {
            localStorage.removeItem(keyToRemove);
            const listItemToRemove = event.target.parentNode;
            const listaCarrito = listItemToRemove.parentNode;
            listaCarrito.removeChild(listItemToRemove);
            mostrarProductosCarrito(); // Recargar la visualización del carrito
        }
    }
});

let claveLocalStorageImagenes = "imagenGuardada";
let botonFiltrado = document.getElementById("filtros__boton");

botonFiltrado.addEventListener("click", (event) => {
    const tipo = document.getElementById("filtros__ropa__id");
    const precio = document.getElementById("filtros__precio__id");

    let todosLosArticulos = document.querySelectorAll(".ropa");
    todosLosArticulos.forEach(articloConcreto => {
        articloConcreto.style.display = "block";
    });

    const tituloZapatoVisible = document.getElementById("titulo__zapatos__id");
    tituloZapatoVisible.style.display = "block";
    const tituloCamisetasVisible = document.getElementById("titulo__camisetas__id");
    tituloCamisetasVisible.style.display = "block";
    const tituloSudaderasVisible = document.getElementById("titulo__ropa__id");
    tituloSudaderasVisible.style.display = "block";

    if (precio.value === "filtros__precio__bajo") {
        let articulos = document.querySelectorAll(".ropa");
        articulos.forEach(articulo => {
            if (parseInt(articulo.children[1].children[1].innerHTML) < 10 || parseInt(articulo.children[1].children[1].innerHTML) > 30) {
                articulo.style.display = "none";
            }
        });
    } else if (precio.value === "filtros__precio__medio") {
        let articulos = document.querySelectorAll(".ropa");
        articulos.forEach(articulo => {
            if (parseInt(articulo.children[1].children[1].innerHTML) < 30 || parseInt(articulo.children[1].children[1].innerHTML) > 50) {
                articulo.style.display = "none";
            }
        });
    } else if (precio.value === "filtros__precio__alto") {
        let articulos = document.querySelectorAll(".ropa");
        articulos.forEach(articulo => {
            if (parseInt(articulo.children[1].children[1].innerHTML) < 50) {
                articulo.style.display = "none";
            }
        });
    }

    let contenedorRopa = document.getElementById("link__sudaderas");
    let todosOcultos = false;
    for (let i = 0; i < contenedorRopa.children.length; i++) {
        const elemento = contenedorRopa.children[i];
        if (elemento.style.display !== "none") {
            todosOcultos = true;
        }
    }
    if (todosOcultos === false) {
        const tituloRopa = document.getElementById("titulo__ropa__id");
        tituloRopa.style.display = "none";
    }

    let contenedorZapato = document.getElementById("link__zapatos");
    let todosOcultosZapato = false;
    for (let i = 0; i < contenedorZapato.children.length; i++) {
        const elemento = contenedorZapato.children[i];
        if (elemento.style.display !== "none") {
            todosOcultosZapato = true;
        }
    }
    if (todosOcultosZapato === false) {
        const tituloZapato = document.getElementById("titulo__zapatos__id");
        tituloZapato.style.display = "none";
    }

    let contenedorCamisetas = document.getElementById("link__camisetas");
    let todosOcultosCamisetas = false;
    for (let i = 0; i < contenedorCamisetas.children.length; i++) {
        const elemento = contenedorCamisetas.children[i];
        if (elemento.style.display !== "none") {
            todosOcultosCamisetas = true;
        }
    }
    if (todosOcultosCamisetas === false) {
        const tituloCamisetas = document.getElementById("titulo__camisetas__id");
        tituloCamisetas.style.display = "none";
    }

    if (tipo.value === "filtros__ropa__sudadera") {
        const tituloZapatoFiltroTitulo = document.getElementById("titulo__zapatos__id");
        tituloZapatoFiltroTitulo.style.display = "none";
        const tituloCamisetasFiltroTitulo = document.getElementById("titulo__camisetas__id");
        tituloCamisetasFiltroTitulo.style.display = "none";
        let contenedorZapatoFiltroTitulo = document.getElementById("link__zapatos");
        for (let i = 0; i < contenedorZapatoFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorZapatoFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none";
        }
        let contenedorCamisetasFiltroTitulo = document.getElementById("link__camisetas");
        for (let i = 0; i < contenedorCamisetasFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorCamisetasFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none";
        }
    } else if (tipo.value === "filtros__ropa__camisetas") {
        const tituloSudaderaFiltroTitulo = document.getElementById("titulo__ropa__id");
        tituloSudaderaFiltroTitulo.style.display = "none";
        const tituloZapatosFiltroTitulo = document.getElementById("titulo__zapatos__id");
        tituloZapatosFiltroTitulo.style.display = "none";
        let contenedorZapatoFiltroTitulo = document.getElementById("link__zapatos");
        for (let i = 0; i < contenedorZapatoFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorZapatoFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none";
        }
        let contenedorSudaderasFiltroTitulo = document.getElementById("link__sudaderas");
        for (let i = 0; i < contenedorSudaderasFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorSudaderasFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none";
        }
    } else if (tipo.value === "filtros__ropa__zapatos") {
        const tituloSudaderaFiltroTitulo = document.getElementById("titulo__ropa__id");
        tituloSudaderaFiltroTitulo.style.display = "none";
        const tituloCamisetasFiltroTitulo = document.getElementById("titulo__camisetas__id");
        tituloCamisetasFiltroTitulo.style.display = "none";
        let contenedorCamisetasFiltroTitulo = document.getElementById("link__camisetas");
        for (let i = 0; i < contenedorCamisetasFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorCamisetasFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none";
        }
        let contenedorSudaderasFiltroTitulo = document.getElementById("link__sudaderas");
        for (let i = 0; i < contenedorSudaderasFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorSudaderasFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none";
        }
    }
});

// ***** VALIDACIÓN EN TIEMPO REAL (cambios mínimos) *****
const nombreInput = document.getElementById('agregar__producto__nombre');
const precioInput = document.getElementById('agregar__producto__precio');
const nombreError = document.getElementById('agregar__producto__nombre__error');
const precioError = document.getElementById('agregar__producto__precio__error');

nombreInput.addEventListener("input", function() {
    if (nombreInput.value.trim() === '') {
        nombreError.textContent = 'Por favor, introduce el nombre del producto.';
    } else {
        nombreError.textContent = '';
    }
});

precioInput.addEventListener("input", function() {
    if (precioInput.value === '' || isNaN(parseFloat(precioInput.value)) || parseFloat(precioInput.value) < 0) {
        precioError.textContent = 'Por favor, introduce un precio válido (mayor o igual a 0).';
    } else {
        precioError.textContent = '';
    }
});
// ******************************************************

let botonAgregarProducto = document.getElementById("agregar__producto__boton");
botonAgregarProducto.addEventListener("click", (event) => {
    const agregarProductoBoton = document.getElementById('agregar__producto__boton');
    // Se obtienen de nuevo los elementos pero sin afectar las validaciones en tiempo real
    const nombreInput = document.getElementById('agregar__producto__nombre');
    const precioInput = document.getElementById('agregar__producto__precio');
    const tipoSelect = document.getElementById('agregar__producto__tipo');
    const nombreError = document.getElementById('agregar__producto__nombre__error');
    const precioError = document.getElementById('agregar__producto__precio__error');
    const fileInputError = document.getElementById('agregar__producto__tipo__error');

    nombreError.style.color = "red";
    precioError.style.color = "red";

    let nombreValido = true;
    let precioValido = true;
    let imagenValida = true;

    if (nombreInput.value.trim() === '') {
        nombreError.textContent = 'Por favor, introduce el nombre del producto.';
        nombreValido = false;
    } else {
        nombreError.textContent = '';
    }

    if (precioInput.value === '' || isNaN(parseFloat(precioInput.value)) || parseFloat(precioInput.value) < 0) {
        precioError.textContent = 'Por favor, introduce un precio válido (mayor o igual a 0).';
        precioValido = false;
    } else {
        precioError.textContent = '';
    }

    if (nombreValido && precioValido && imagenValida) {
        contador++;
        clave = claveLocalStorageImagenes + "" + contador;

        const articuloContenedor = document.createElement("article");
        const articuloImagenes = document.createElement("article");
        const articuloInformacion = document.createElement("article");
        const imagenCara = document.createElement("img");
        const tituloProducto = document.createElement("h2");
        const precioProducto = document.createElement("p");
        const botonCarrito = document.createElement("button");

        imagenCara.src = URL.createObjectURL(imagenAlmacenada);

        articuloContenedor.classList.add("ropa");
        articuloImagenes.classList.add("ropa__imagen");
        imagenCara.classList.add("ropa__imagen__agregada__js");
        tituloProducto.classList.add("subtitulo__ropa__informacion");
        precioProducto.classList.add("precio");
        articuloInformacion.classList.add("ropa__informacion");
        botonCarrito.textContent = "Añadir al carrito";
        botonCarrito.classList.add("boton__carrito");
        botonCarrito.dataset.precio = precioInput.value;

        tituloProducto.textContent = nombreInput.value;
        precioProducto.textContent = precioInput.value;

        articuloImagenes.appendChild(imagenCara);
        articuloInformacion.appendChild(tituloProducto);
        articuloInformacion.appendChild(precioProducto);
        articuloInformacion.appendChild(botonCarrito);

        articuloContenedor.appendChild(articuloImagenes);
        articuloContenedor.appendChild(articuloInformacion);

        if (tipoSelect.value === "sudadera") {
            const seccionSudaderas = document.getElementById("link__sudaderas");
            seccionSudaderas.appendChild(articuloContenedor);
            let listaDatosAlmacenables = {
                "tipo": tipoSelect.value,
                "titulo": nombreInput.value,
                "precio": precioInput.value,
                "imagen": imagenEnBase64
            };
            localStorage.setItem("contador", JSON.stringify(contador));
            localStorage.setItem(clave, JSON.stringify(listaDatosAlmacenables));
        } else if (tipoSelect.value === "camiseta") {
            const seccionCamisetas = document.getElementById("link__camisetas");
            seccionCamisetas.appendChild(articuloContenedor);
            let listaDatosAlmacenables = {
                "tipo": tipoSelect.value,
                "titulo": nombreInput.value,
                "precio": precioInput.value,
                "imagen": imagenEnBase64
            };
            localStorage.setItem("contador", JSON.stringify(contador));
            localStorage.setItem(clave, JSON.stringify(listaDatosAlmacenables));
        } else if (tipoSelect.value === "zapato") {
            const seccionZapatos = document.getElementById("link__zapatos");
            seccionZapatos.appendChild(articuloContenedor);
            let listaDatosAlmacenables = {
                "tipo": tipoSelect.value,
                "titulo": nombreInput.value,
                "precio": precioInput.value,
                "imagen": imagenEnBase64
            };
            localStorage.setItem("contador", JSON.stringify(contador));
            localStorage.setItem(clave, JSON.stringify(listaDatosAlmacenables));
        }
        botonFiltrado.click();
    }
});

function obtenerProductosAlmacenados() {
    let sudaderaContenedor = document.getElementById("link__sudaderas");
    let camisetas = document.getElementById("link__camisetas");
    let zapatos = document.getElementById("link__zapatos");

    for (ropa in localStorage) {
        if (localStorage.hasOwnProperty(ropa) && ropa !== 'theme' && ropa !== 'contador' && !/^productoCarrito\d+$/.test(ropa)) {
            const datosImagen = JSON.parse(localStorage.getItem(ropa));
            const articuloContenedor = document.createElement("article");
            const articuloImagenes = document.createElement("article");
            const articuloInformacion = document.createElement("article");
            const imagenCara = document.createElement("img");
            const tituloProducto = document.createElement("h2");
            const precioProducto = document.createElement("p");
            const botonCarrito = document.createElement("button");

            imagenCara.src = datosImagen.imagen;
            articuloContenedor.classList.add("ropa");
            articuloImagenes.classList.add("ropa__imagen");
            imagenCara.classList.add("ropa__imagen__agregada__js");
            tituloProducto.classList.add("subtitulo__ropa__informacion");
            precioProducto.classList.add("precio");
            articuloInformacion.classList.add("ropa__informacion");
            botonCarrito.textContent = "Añadir al carrito";
            botonCarrito.classList.add("boton__carrito");
            botonCarrito.dataset.precio = datosImagen.precio;
            tituloProducto.textContent = datosImagen.titulo;
            precioProducto.textContent = datosImagen.precio;

            articuloImagenes.appendChild(imagenCara);
            articuloInformacion.appendChild(tituloProducto);
            articuloInformacion.appendChild(precioProducto);
            articuloInformacion.appendChild(botonCarrito);
            articuloContenedor.appendChild(articuloImagenes);
            articuloContenedor.appendChild(articuloInformacion);

            if (datosImagen.tipo === "sudadera") {
                sudaderaContenedor.appendChild(articuloContenedor);
            } else if (datosImagen.tipo === "camiseta") {
                camisetas.appendChild(articuloContenedor);
            } else if (datosImagen.tipo === "zapato") {
                zapatos.appendChild(articuloContenedor);
            }
        }
    }
}

obtenerProductosAlmacenados();
seccionCarrito.style.display = "none";
