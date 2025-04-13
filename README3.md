# FASE 3

## Descripción
En esta fase se ha utilizado javascript para estas funcionalidades:
1. Crear un sistema en el que permita agregar productos de forma interactiva con el usuario
2. Diseñar un formulario con validación dinámica que muestre mensajes de error y éxito según la interacción del usuario.
3. Implementar ub sistema de filtros en los productos.
4. Immplementar un sistema de un carrito


### Control del formulario
Para realizar el control del formulario lo que he hecho es mediante eventos ir comprando si los datos que se ha introducido por el input 
son correctos o no, esto se hace mediante expresiones regulares y condicionales.

##### Código con el que se ha realizado esta función:
https://github.com/Alejandro-Bravo2/ProyectoSegundoTrimetre/blob/ef23f7825f5d2d48a522cab73b5169a9fd02e55b/js/controlFormulario.js#L2-L144


### Agregar productos de forma dinámica
Para realizar esta función lo que he hecho es usar el localStorage para guardar los productos
que se vayan introduciendo, es cierto que el localstorage tiene un limite de 10MB por lo que
no esta diseñado para que se introduzca muchos productos.
El funcionamiento de esta función es capturar la url de la imagen que tenga el usuario descargada
y transformarla en base64 ya que esa url que crea al inicio es temporal y no nos serviría si recargaramos la página.
También guardamos el nombre y el precio del producto en el localstorage y luego lo recuperamos y lo mostramos.

##### Código con el que se ha realizado esta función:
https://github.com/Alejandro-Bravo2/ProyectoSegundoTrimetre/blob/ef23f7825f5d2d48a522cab73b5169a9fd02e55b/js/ocultarContenido.js#L252-L404


### Carrito
Esta función lo que permite es agregar productos a un carrito dinámico y calcular el coste del carrito
para esto se hace uso de localStorage ya que es importante que el carrito no se borre al navegar entre páginas o recargar
la página web. Para esto lo que he hecho es guardar el nombre del producto y el precio en el localStorage y luego
lo pongo en el carrito. También he puesto un botón para borrar el producto del carrito ya que un carrito también debe permitir
borrar sus productos. Y lo que he hecho es borrar directamente el producto del LocalStorage y luego refrescar el carrito
para que no salga el producto borrado.

##### Código con el que se ha realizado esta función:
https://github.com/Alejandro-Bravo2/ProyectoSegundoTrimetre/blob/9b168560d1544159d11af600bf02216031a21705/js/ocultarContenido.js#L1-L99


### Filtrado
Esta función lo que permite es filtrar los productos de la página web. Por tipo o precio.
Se ha realizado esta función realizando un filtrado de todos los elementos del html y quedandose el programa
unicamente con los que cumplan la condición. Y los demás los oculta.

##### Código con el que se ha realizado esta función:
https://github.com/Alejandro-Bravo2/ProyectoSegundoTrimetre/blob/9b168560d1544159d11af600bf02216031a21705/js/ocultarContenido.js#L100-L227


### Cambios de color de la página web
Esta función lo que permite es cambiarle el color a toda la página web intercalando entre tonos claros y oscuros.
La opción escogida se guardará en el localStorage para que se guarde la configuración.

##### Código con el que se ha realizado esta función:
https://github.com/Alejandro-Bravo2/ProyectoSegundoTrimetre/blob/9b168560d1544159d11af600bf02216031a21705/js/cambiarColorWeb.js#L1-L30


