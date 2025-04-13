# FASE 3

## Descripción
En esta fase se ha utilizado JavaScript para implementar las siguientes funcionalidades:

1. Crear un sistema que permita agregar productos de forma interactiva con el usuario.
2. Diseñar un formulario con validación dinámica que muestre mensajes de error y éxito según la interacción del usuario.
3. Implementar un sistema de filtros para los productos.
4. Implementar un sistema de carrito.

### Control del formulario
Para realizar el control del formulario, se han utilizado eventos para verificar la corrección de los datos introducidos en los campos de entrada. Esta validación se realiza mediante expresiones regulares y condicionales.

##### Código fuente:
https://github.com/Alejandro-Bravo2/ProyectoSegundoTrimetre/blob/ef23f7825f5d2d48a522cab73b5169a9fd02e55b/js/controlFormulario.js#L2-L144

### Agregar productos de forma dinámica
Para implementar esta funcionalidad, se ha utilizado el almacenamiento local (localStorage) para guardar los productos que se vayan introduciendo. Es importante destacar que el localStorage tiene un límite de 10 MB, por lo que no está diseñado para almacenar una gran cantidad de productos.

El funcionamiento de esta función consiste en capturar la URL de la imagen del producto y convertirla a base64. Esto se debe a que la URL generada inicialmente es temporal y no sería válida tras recargar la página. Además, se almacenan el nombre y el precio del producto en el localStorage, para posteriormente recuperarlos y mostrarlos.

##### Código fuente:
https://github.com/Alejandro-Bravo2/ProyectoSegundoTrimetre/blob/ef23f7825f5d2d48a522cab73b5169a9fd02e55b/js/ocultarContenido.js#L252-L404


### Carrito

Esta función permite agregar productos a un carrito dinámico y calcular el coste total. Se utiliza localStorage para almacenar la información del carrito, asegurando que los datos persistan entre páginas y recargas. El código almacena el nombre y el precio de cada producto en localStorage y lo muestra en el carrito. Se ha implementado un botón para eliminar productos del carrito, lo que implica borrar el producto de localStorage y actualizar el carrito.

##### Código fuente:
https://github.com/Alejandro-Bravo2/ProyectoSegundoTrimetre/blob/9b168560d1544159d11af600bf02216031a21705/js/ocultarContenido.js#L1-L99

### Filtrado

Esta función permite filtrar los productos de la página web por tipo o precio. Se realiza un filtrado de todos los elementos HTML, mostrando únicamente aquellos que cumplen con la condición del filtro. Los productos que no cumplen con el filtro se ocultan.

##### Código fuente:

https://github.com/Alejandro-Bravo2/ProyectoSegundoTrimetre/blob/9b168560d1544159d11af600bf02216031a21705/js/ocultarContenido.js#L100-L227

### Cambios de color de la página web
Esta función permite cambiar el color de toda la página web, alternando entre tonos claros y oscuros. La opción seleccionada se almacenará en el localStorage para guardar la configuración.

##### Código fuente:
https://github.com/Alejandro-Bravo2/ProyectoSegundoTrimetre/blob/9b168560d1544159d11af600bf02216031a21705/js/cambiarColorWeb.js#L1-L30


