---
permalink: "/dentro-de-la-burbuja/"
title: Dentro de la Burbuja
category: "Immersive Web"
cover: img.jpg
author: Diego González
authorImg: https://miro.medium.com/fit/c/240/240/1*3Xf5XjVdx87HHxiRKY8X1Q.jpeg
---

### dentro de la burbuja

#### O cómo crear fácilmente experiencias inmersivas de fotos 360º en WebVR y PWAs

![](https://cdn-images-1.medium.com/max/800/1*22P0FL363amL-TzSmIS9KA.png)

Hace un par de semanas estaba de vacaciones y mientras tomaba fotos 360º durante el viaje, me di cuenta de algo: no podía compartir esas fotos con mis amigos o familiares porque ellos necesitaban descargar una aplicación para verlas. ¿Qué molesto no?

### no me revienten la burbuja!

Por suerte la solución no fue difícil de implementar, y es compatible con muchos dispositivos de todos los tamaños y formas, sin necesidad de aplicaciones o molestias. Veamos la solución, y más importante, cómo se construyó, y aún más importante, cómo la puedes extender!

> Es una idea simple. ¿por qué es tan complicado compartir este tipo de imágenes?

### Resumen:

*   Utiliza el ‘File’ API para seleccionar una imagen del dispositivo.
*   Crea un URL temporal a esta imagen.
*   Crea dinamicamente una escena en A-Frame y haz que su cielo (a-sky) sea la imagen que se haz cargado.
*   Agrega un ‘_Service Worker_’ para habilitar que la aplicación funcione fuera de línea.

### bubble: un visor de imágenes 360º

![](https://cdn-images-1.medium.com/max/800/1*NnpYb2VsN5NG6RpseXMEkA.png)

bubble: [https://samsunginternet.github.io/bubble/](https://samsunginternet.github.io/bubble/)

Míralo en acción aquí!

bubble desarrollada por Samsung Internet #WebVR #PWA

Primero echemos un vistazo a la aplicación web final. La puedes encontrar [aquí](https://samsunginternet.github.io/bubble/). Consiste de un ‘botón’ que cuando lo presionas te permite seleccionar una imagen 360º y cargarla. La aplicación también te permite ver la imagen con gafas de realidad virtual. No requiere de una conexión a Internet. De hecho solo queremos ver fotos 360º! Es una idea simple. ¿por qué es tan complicado compartir este tipo de imágenes? Si queremos ver otra foto, sólo abrimos la pestaña situada en la parte superior y seleccionamos otra imagen.

### haciendo burbujas… es más fácil de lo que parece!

Para desarrollar ‘bubble’, hemos utilizado [A-Frame](https://aframe.io/). Con ello logramos de una manera fácil crear una escena de realidad virtual (VR) que se ejecuta en un navegador y habilitamos el funcionamiento esperado de WebVR. Por ejemplo, el giroscopio y acelerómetro en un móvil van a activarse cuando lo giramos y actualizará la escena de manera automática. Ahora, dentro de las primitivas que A-Frame ofrece encontramos el ‘[a-sky](https://aframe.io/docs/0.3.0/primitives/a-sky.html)’ (el cual llamaremos de ahora en adelante ‘cielo’). Como dice su documentación, esta primitiva agrega un fondo a una escena, o despliega una foto 360º, que es lo que queremos lograr. Ahí tenemos la mitad del problema resuelto. Lo que requerimos es poder acceder a la imagen desde el sistema de archivos del dispositivo y cargarla en esta primitiva a-sky.

#### Seleccionando la imagen desde el sistema de archivos

Mediante la interface ‘File’ podemos ver información acerca de los archivos en el sistema de archivos. Con JavaScript podemos acceder al contenido de estos archivos. Si utilizamos el [input de tipo file](https://samsunginternet.github.io/loti/) podemos obtener una lista de nombres de archivos del sistema de archivos. Una vez hecho esto, podemos crear un URL temporal que representa el archivo o blob específico. En nuestra aplicación ‘bubble’, una vez el usuario hace click en la interface para seleccionar una imagen , creamos un DOMString que contiene un URL que representa esta imagen. El método **createObjectURL** hace exactamente esto. De hecho podemos ver como utilizamos este URL como fuente para una imagen. Esta es la otra mitad del problema que queremos resolver.

img.src = window.URL.**createObjectURL**(files\[0\]);

#### Mostrando la imagen en 360º

Igual que cualquier imagen a la que especificamos su fuente a través de código, podemos especificar una función de retorno (callback) al evento de carga. Es precisamente aquí cuando vinculamos y cargamos la imagen al cielo. Como mencioné anteriormente, es la primitiva _a-sky_ la que hace esto. Lo que necesitamos es asignar esta imagen que acabamos de cargar al fondo (cielo, a-sky) de nuestra escena. Cuando la fuente de la imagen que acabamos de crear se carga, creamos la escena, la sección de recursos de la escena y el cielo.

img.onload = function() {  
              
            var sky = document.createElement('a-sky');  
            var scene = document.createElement('a-scene');  
            var assets = document.createElement('a-assets');  
            virtualPlaceholder = document.getElementById('virtualArea');  
            virtualPlaceholder.innerHTML = "";  
assets.appendChild(img);  
            sky.setAttribute('src', '#texture');  
            sky.setAttribute('color', '#153453');  
            scene.appendChild(assets);  
            scene.appendChild(sky);  
            virtualPlaceholder.appendChild(scene);  
**window.URL.revokeObjectURL(this.src);**  
        }

Consecuentemente, ponemos la imagen cargada dentro de nuestros recursos, nuestros recursos y el cielo dentro de la escena, la referencia de la imagen cargada como fuente del cielo, y la escena al div que tenemos asignado como contenedor en la página HTML. Es muy importante limpiar el desorden que hayamos creado, por ende, debemos eliminar los URLs temporales que creamos para las imágenes cuando ya no los vamos a usar más.

Es bastante sencillo como pueden observar. El archivo de JavaScript tiene alrededor de unas 50 líneas de código. El resto es un poco de bling para hacer que la aplicación se vea bonita.

#### Una cosa más…

> ‘Ambient Badging’.

![](https://cdn-images-1.medium.com/max/800/1*tHO44wxU0gk_3sflXw09IQ.png)

Ambient Badging en Samsung Internet 5.0

Si estás usando nuestra [beta](https://medium.com/samsung-internet-dev/beta-d0f988fb77fb#.jv0i7qrjd), podrás haber notado que a lado de la barra de direcciones del navegador puedes observar un signo de suma “+”. A esto le llamamos ‘Ambient Badging’ (se reciben sugerencias para traducción). Cuando lo activas, te salen opciones para agregarlo a los marcadores o para agregar la aplicación a la pantalla de inicio. ¿Qué significa esto? Significa que la aplicación ha habilitado la funcionalidad mínima necesaria para ser una Aplicación Web Progresiva (PWA, por sus siglas en inglés), entre las cuales se encuentran que se puede utilizar sin conexión a internet (y que se adapta a distintos diseños… y que es segura… y….). Puedes leer más sobre ejemplos de PWA viendo cómo se desarrollo [Snapwat](https://medium.com/samsung-internet-dev/things-i-learned-making-a-progressive-web-app-for-super-selfies-49e76d154e4f#.39quwkw9n), o leyendo siguiendo estas [recomendaciones](https://medium.com/samsung-internet-dev/highlights-from-googles-progressive-web-apps-training-in-london-9856f0876e4f#.lemxxfbz2). O viendo el código de [Podle](https://github.com/SamsungInternet/podle). O leyendo este artículo de [Smashing Magazine](https://www.smashingmagazine.com/2016/09/the-building-blocks-of-progressive-web-apps/). Hay muchos recursos disponibles. Lo importante es que cuando se instala la aplicación en la pantalla de inicio se puede utilizar fuera de línea como cualquier otra aplicación en el dispositivo. Basicamente vas a un sitio, instalas la aplicación web en tu dispositivo y disfrutas de los beneficios de una aplicación para ver fotos 360º ligera y sin pasar por los enredos de buscar en ‘app stores’ o descargas.

### Vamos, mejórala.

La aplicación es tuya. Úsala. Cópiala. Modifícala. Distribúyela. Hay muchas mejoras que se le pueden hacer. [Descarga el código aquí](https://github.com/SamsungInternet/bubble) y expándela.

Finalmente, si tienes preguntas o sugerencias, contáctanos! Aquí les dejo un par de imágenes para que prueben la aplicación ustedes mismos!

![](https://cdn-images-1.medium.com/max/800/1*Q6gF1WszrlmwgCIuW3mX7Q.jpeg)

Imágen de prueba para bubble (Seúl, Korea)

![](https://cdn-images-1.medium.com/max/800/1*ti0QXvxwqxiw-kxmkrGcRw.jpeg)

Imágen de prueba para bubble (Taller de WebVR, Londres, UK)

By [Diego González](https://medium.com/@diekus) on [December 13, 2016](https://medium.com/p/5dc0358adeba).

[Read this article on Medium](https://medium.com/@diekus/dentro-de-la-burbuja-5dc0358adeba)
