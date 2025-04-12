const imagenFichero = document.getElementById("agregar__producto__entrada");

let imagenAlmacenada = null;
let imagenEnBase64 = "";

imagenFichero.addEventListener("change", function () {
    const imagen = this.files[0];
    if (imagen){
        imagenAlmacenada = imagen;
        console.log("Se ha almacenado una imagen")
        const lector = new FileReader();
        lector.onload = function (imagen) {
            imagenEnBase64 = imagen.target.result; // GUARDAMOS LA IMAGEN EN BASE64
        }
        lector.readAsDataURL(imagen);
    }
});





let claveLocalStorageImagenes = "imagenGuardada"
let inicioContadorClaves = 0


let botonFiltrado = document.getElementById("filtros__boton")
botonFiltrado.addEventListener("click", (event) => {
    console.log("HOLAAA")

    const tipo = document.getElementById("filtros__ropa__id")
    const precio = document.getElementById("filtros__precio__id")

    // Para poner todos visibles para que no se sobreescriban los filtros
    let todosLosArticulos = document.querySelectorAll(".ropa")
    todosLosArticulos.forEach(articloConcreto => {
        articloConcreto.style.display = "block"
    })

    const tituloZapatoVisible = document.getElementById("titulo__zapatos__id")
    tituloZapatoVisible.style.display = "block"

    const tituloCamisetasVisible = document.getElementById("titulo__camisetas__id")
    tituloCamisetasVisible.style.display = "block"

    const tituloSudaderasVisible = document.getElementById("titulo__ropa__id")
    tituloSudaderasVisible.style.display = "block"



    //FILTROS DE PRECIO
    if (precio.value === "filtros__precio__bajo") { // Esto lo tengo que cambiar porque si el elije esto significa que solo quiere este no los demás
        let articulos = document.querySelectorAll(".ropa")

        articulos.forEach(articulo => {
            if (parseInt(articulo.children[1].children[1].innerHTML) < 10 ||  parseInt(articulo.children[1].children[1].innerHTML) > 30){
                articulo.style.display = "none"
            }
        })
    }


    else if (precio.value === "filtros__precio__medio") { // Esto lo tengo que cambiar porque si el elije esto significa que solo quiere este no los demás
        let articulos = document.querySelectorAll(".ropa")

        articulos.forEach(articulo => {
            if (parseInt(articulo.children[1].children[1].innerHTML) < 30 ||  parseInt(articulo.children[1].children[1].innerHTML) > 50){
                articulo.style.display = "none"
            }
        })
    }

    else if (precio.value === "filtros__precio__alto") { // Esto lo tengo que cambiar porque si el elije esto significa que solo quiere este no los demás
        let articulos = document.querySelectorAll(".ropa")

        articulos.forEach(articulo => {
            if (parseInt(articulo.children[1].children[1].innerHTML) < 50){
                articulo.style.display = "none"
            }
        })
    }


    // OCULTAR TITULOS CUANDO ESTEN TODOS SUS HIJOS OCULTOS
    let contenedorRopa = document.getElementById("link__sudaderas")
    let todosOcultos = false
    for (let i = 0; i < contenedorRopa.children.length; i++) {
        const elemento = contenedorRopa.children[i];
        if (elemento.style.display !== "none") {
            todosOcultos = true
        }
    }
    if (todosOcultos === false){
        const tituloRopa = document.getElementById("titulo__ropa__id")
        tituloRopa.style.display = "none"
    }


    let contenedorZapato = document.getElementById("link__zapatos")
    let todosOcultosZapato = false
    for (let i = 0; i < contenedorZapato.children.length; i++) {
        const elemento = contenedorZapato.children[i];
        if (elemento.style.display !== "none") {
            todosOcultosZapato = true
        }
    }
    if (todosOcultosZapato === false){
        const tituloZapato = document.getElementById("titulo__zapatos__id")
        tituloZapato.style.display = "none"
    }



    let contenedorCamisetas = document.getElementById("link__camisetas")
    let todosOcultosCamisetas = false
    for (let i = 0; i < contenedorCamisetas.children.length; i++) {
        const elemento = contenedorCamisetas.children[i];
        if (elemento.style.display !== "none") {
            todosOcultosCamisetas = true
        }
    }
    if (todosOcultosCamisetas === false){
        const tituloCamisetas = document.getElementById("titulo__camisetas__id")
        tituloCamisetas.style.display = "none"
    }


    // FILTROS DE CATEGORIA
    if (tipo.value === "filtros__ropa__sudadera"){
        const tituloZapatoFiltroTitulo = document.getElementById("titulo__zapatos__id")
        tituloZapatoFiltroTitulo.style.display = "none"

        const tituloCamisetasFiltroTitulo = document.getElementById("titulo__camisetas__id")
        tituloCamisetasFiltroTitulo.style.display = "none"

        let contenedorZapatoFiltroTitulo = document.getElementById("link__zapatos")

        for (let i = 0; i < contenedorZapatoFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorZapatoFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none"
        }


        let contenedorCamisetasFiltroTitulo = document.getElementById("link__camisetas")
        for (let i = 0; i < contenedorCamisetasFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorCamisetasFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none"
        }

    }

    else if (tipo.value === "filtros__ropa__camisetas"){
        const tituloSudaderaFiltroTitulo = document.getElementById("titulo__ropa__id")
        tituloSudaderaFiltroTitulo.style.display = "none"

        const tituloZapatosFiltroTitulo = document.getElementById("titulo__zapatos__id")
        tituloZapatosFiltroTitulo.style.display = "none"

        let contenedorZapatoFiltroTitulo = document.getElementById("link__zapatos")

        for (let i = 0; i < contenedorZapatoFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorZapatoFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none"
        }


        let contenedorSudaderasFiltroTitulo = document.getElementById("link__sudaderas")
        for (let i = 0; i < contenedorSudaderasFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorSudaderasFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none"
        }

    }

    else if (tipo.value === "filtros__ropa__zapatos"){
        const tituloSudaderaFiltroTitulo = document.getElementById("titulo__ropa__id")
        tituloSudaderaFiltroTitulo.style.display = "none"


        const tituloCamisetasFiltroTitulo = document.getElementById("titulo__camisetas__id")
        tituloCamisetasFiltroTitulo.style.display = "none"

        let contenedorCamisetasFiltroTitulo = document.getElementById("link__camisetas")
        for (let i = 0; i < contenedorCamisetasFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorCamisetasFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none"
        }


        let contenedorSudaderasFiltroTitulo = document.getElementById("link__sudaderas")
        for (let i = 0; i < contenedorSudaderasFiltroTitulo.children.length; i++) {
            const elementoFiltroTitulo = contenedorSudaderasFiltroTitulo.children[i];
            elementoFiltroTitulo.style.display = "none"
        }
    }

})

// PRUEBA
let botonAgregarProducto = document.getElementById("agregar__producto__boton");
botonAgregarProducto.addEventListener("click", (event) => {
    const agregarProductoBoton = document.getElementById('agregar__producto__boton');
    const nombreInput = document.getElementById('agregar__producto__nombre');
    const precioInput = document.getElementById('agregar__producto__precio');
    const tipoSelect = document.getElementById('agregar__producto__tipo');
    const nombreError = document.getElementById('agregar__producto__nombre__error');
    const precioError = document.getElementById('agregar__producto__precio__error');
    const fileInputError = document.getElementById('agregar__producto__tipo__error');



    let nombreValido = true;
    let precioValido = true;
    let imagenValida = true;

    // Validar el nombre
    if (nombreInput.value.trim() === '') {
        nombreError.textContent = 'Por favor, introduce el nombre del producto.';
        nombreValido = false;
    } else {
        nombreError.textContent = ''; // Limpiar mensaje de error
    }

    // Validar el precio
    if (precioInput.value === '' || isNaN(parseFloat(precioInput.value)) || parseFloat(precioInput.value) < 0) {
        precioError.textContent = 'Por favor, introduce un precio válido (mayor o igual a 0).';
        precioValido = false;
    } else {
        precioError.textContent = ''; // Limpiar mensaje de error
    }

    if (tipoSelect === false || tipoSelect.length === 0){
        fileInputError.textContent = "Por favor, seleccione una imágen antes de agregar el producto";
        imagenValida = false;
    }

    if (nombreValido && precioValido && imagenValida) {
        inicioContadorClaves ++
        clave = claveLocalStorageImagenes + "" + inicioContadorClaves

        const articuloContenedor = document.createElement("article");
        const articuloImagenes = document.createElement("article");
        const articuloInformacion = document.createElement("article");
        const imagenCara = document.createElement("img");
        const tituloProducto = document.createElement("h2");
        const precioProducto = document.createElement("p");
        const botonAgregarProducto = document.createElement("button");


        imagenCara.src = URL.createObjectURL(imagenAlmacenada)

        articuloContenedor.classList.add("ropa");
        articuloImagenes.classList.add("ropa__imagen");
        imagenCara.classList.add("ropa__imagen__agregada__js");
        tituloProducto.classList.add("subtitulo__ropa__informacion")
        precioProducto.classList.add("precio")
        articuloInformacion.classList.add("ropa__informacion")
        botonAgregarProducto.textContent = "Añadir al carrito"

        tituloProducto.textContent = nombreInput.value;
        precioProducto.textContent = precioInput.value;

        articuloImagenes.appendChild(imagenCara);
        articuloInformacion.appendChild(tituloProducto);
        articuloInformacion.appendChild(precioProducto);
        articuloInformacion.appendChild(botonAgregarProducto);


        articuloContenedor.appendChild(articuloImagenes);
        articuloContenedor.appendChild(articuloInformacion);

        console.log(nombreInput.value);

        if (tipoSelect.value === "sudadera") {
            const seccionSudaderas = document.getElementById("link__sudaderas")
            seccionSudaderas.appendChild(articuloContenedor)

            let listaDatosAlmacenables = {
                "tipo": tipoSelect.value,
                "titulo": nombreInput.value,
                "precio" : precioInput.value,
                "imagen" : imagenEnBase64
            }
            localStorage.setItem(clave, JSON.stringify(listaDatosAlmacenables))



        } else if (tipoSelect.value === "camiseta"){
            const seccionCamisetas = document.getElementById("link__camisetas");
            seccionCamisetas.appendChild(articuloContenedor)


            let listaDatosAlmacenables = {
                "tipo": tipoSelect.value,
                "titulo": nombreInput.value,
                "precio" : precioInput.value,
                "imagen" : imagenEnBase64
            }

            localStorage.setItem(clave, JSON.stringify(listaDatosAlmacenables))




        } else if (tipoSelect.value === "zapato"){
            const seccionZapatos = document.getElementById("link__zapatos")
            seccionZapatos.appendChild(articuloContenedor)

            let listaDatosAlmacenables = {
                "tipo": tipoSelect.value,
                "titulo": nombreInput.value,
                "precio" : precioInput.value,
                "imagen" : imagenEnBase64
            }
            localStorage.setItem(clave, JSON.stringify(listaDatosAlmacenables))


        }
        botonFiltrado.click();


    }




})


function obtenerProductosAlmacenados() {
    let sudaderaContenedor = document.getElementById("link__sudaderas")
    let camisetas = document.getElementById("link__camisetas")
    let zapatos = document.getElementById("link__zapatos")

    for (ropa in localStorage){
        //         if (ropa !== "length" && ropa !== "clear" && ropa !== "getItem" && ropa !== "key" && ropa !== "value" && ropa !== "removeItem" && ropa !== "setItem") {
        if (localStorage.hasOwnProperty(ropa) && ropa !== 'theme') {
            const datosImagen = JSON.parse(localStorage.getItem(ropa))
            if (datosImagen.tipo === "sudadera") {
                const articuloContenedor = document.createElement("article");
                const articuloImagenes = document.createElement("article");
                const articuloInformacion = document.createElement("article");
                const imagenCara = document.createElement("img");
                const tituloProducto = document.createElement("h2");
                const precioProducto = document.createElement("p");
                const botonAgregarProducto = document.createElement("button");


                imagenCara.src = datosImagen.imagen;

                articuloContenedor.classList.add("ropa");
                articuloImagenes.classList.add("ropa__imagen");
                imagenCara.classList.add("ropa__imagen__agregada__js");
                tituloProducto.classList.add("subtitulo__ropa__informacion")
                precioProducto.classList.add("precio")
                articuloInformacion.classList.add("ropa__informacion")
                botonAgregarProducto.textContent = "Añadir al carrito"



                tituloProducto.textContent = datosImagen.titulo;
                precioProducto.textContent = datosImagen.precio;

                articuloImagenes.appendChild(imagenCara);
                articuloInformacion.appendChild(tituloProducto);
                articuloInformacion.appendChild(precioProducto);
                articuloInformacion.appendChild(botonAgregarProducto);


                articuloContenedor.appendChild(articuloImagenes);
                articuloContenedor.appendChild(articuloInformacion);

                const seccionSudaderas = document.getElementById("link__sudaderas")
                seccionSudaderas.appendChild(articuloContenedor)

            }
            else if (datosImagen.tipo === "camiseta") {
                const articuloContenedor = document.createElement("article");
                const articuloImagenes = document.createElement("article");
                const articuloInformacion = document.createElement("article");
                const imagenCara = document.createElement("img");
                const tituloProducto = document.createElement("h2");
                const precioProducto = document.createElement("p");
                const botonAgregarProducto = document.createElement("button");


                imagenCara.src = datosImagen.imagen;

                articuloContenedor.classList.add("ropa");
                articuloImagenes.classList.add("ropa__imagen");
                imagenCara.classList.add("ropa__imagen__agregada__js");
                tituloProducto.classList.add("subtitulo__ropa__informacion")
                precioProducto.classList.add("precio")
                articuloInformacion.classList.add("ropa__informacion")
                botonAgregarProducto.textContent = "Añadir al carrito"



                tituloProducto.textContent = datosImagen.titulo;
                precioProducto.textContent = datosImagen.precio;

                articuloImagenes.appendChild(imagenCara);
                articuloInformacion.appendChild(tituloProducto);
                articuloInformacion.appendChild(precioProducto);
                articuloInformacion.appendChild(botonAgregarProducto);


                articuloContenedor.appendChild(articuloImagenes);
                articuloContenedor.appendChild(articuloInformacion);

                const seccionSudaderas = document.getElementById("link__camisetas")
                seccionSudaderas.appendChild(articuloContenedor)

            }
            else if (datosImagen.tipo === "zapato") {
                const articuloContenedor = document.createElement("article");
                const articuloImagenes = document.createElement("article");
                const articuloInformacion = document.createElement("article");
                const imagenCara = document.createElement("img");
                const tituloProducto = document.createElement("h2");
                const precioProducto = document.createElement("p");
                const botonAgregarProducto = document.createElement("button");


                imagenCara.src = datosImagen.imagen;

                articuloContenedor.classList.add("ropa");
                articuloImagenes.classList.add("ropa__imagen");
                imagenCara.classList.add("ropa__imagen__agregada__js");
                tituloProducto.classList.add("subtitulo__ropa__informacion")
                precioProducto.classList.add("precio")
                articuloInformacion.classList.add("ropa__informacion")
                botonAgregarProducto.textContent = "Añadir al carrito"



                tituloProducto.textContent = datosImagen.titulo;
                precioProducto.textContent = datosImagen.precio;

                articuloImagenes.appendChild(imagenCara);
                articuloInformacion.appendChild(tituloProducto);
                articuloInformacion.appendChild(precioProducto);
                articuloInformacion.appendChild(botonAgregarProducto);


                articuloContenedor.appendChild(articuloImagenes);
                articuloContenedor.appendChild(articuloInformacion);

                const seccionSudaderas = document.getElementById("link__zapatos")
                seccionSudaderas.appendChild(articuloContenedor)
            }




        }
    }
}

obtenerProductosAlmacenados();