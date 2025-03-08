function cambioBordeAPatrocinadores() {
    const listaImagenes = document.querySelectorAll('.patrocinadores__imagen');
    // Selector para seleccionar todos los elementos con esa clase
    for (let iterador = 0; iterador < listaImagenes.length; iterador++) {
        let imagen = listaImagenes[iterador];
        imagen.style.borderRadius = '10%';
    }
}


function cambioEstiloParrafoGracias(){
    const parrafo = document.querySelector('.patrocinadores__descripcion');
    //Selector para seleccionar la clase del parrafo de gracías...
    parrafo.style.fontStyle = 'italic';
    parrafo.style.fontWeight = 'bold';
}

cambioEstiloParrafoGracias();
cambioBordeAPatrocinadores();