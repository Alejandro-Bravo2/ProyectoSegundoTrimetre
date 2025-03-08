
function nombreTemporadas(){
    const titulos = document.getElementsByClassName("rebajas__nombre__temporada")
    // Selector para seleccionar por nombre de clase

    for (i = 0; i < titulos.length; i++) {
        let temporadaConcreta = titulos[i]
        temporadaConcreta.style.fontWeight = "bold"
    }
}


function cambiarEstiloTitulos(){
    const titulosRopa = document.getElementsByTagName("h2")
    //Selector para seleccionar por el nombre de la etiqueta
    for (let iterador = 0; iterador < titulosRopa.length; iterador++) {
        let titulo = titulosRopa[iterador]
        titulo.style.fontStyle = "italic"
        titulo.style.textDecoration = "underline"
    }

}

nombreTemporadas();

cambiarEstiloTitulos()
