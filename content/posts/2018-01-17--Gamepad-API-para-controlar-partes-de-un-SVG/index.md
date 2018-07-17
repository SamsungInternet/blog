---
title: Gamepad API para controlar partes de un SVG
category: "Web APIs"
cover: img.jpg
author: Diego González
authorImg: https://miro.medium.com/fit/c/240/240/1*3Xf5XjVdx87HHxiRKY8X1Q.jpeg
---

### Gamepad API para controlar partes de un SVG

#### Tan fácil como mover los ojos…

For the English version, [refer here](https://medium.com/samsung-internet-dev/gamepad-api-to-control-parts-of-an-svg-3f76892044f6).

![](https://cdn-images-1.medium.com/max/600/1*twlYEKN6D4YJrY5TH6eP0Q.png)

### Nugget # 1: La panda enojada

_(En caso de que te preguntes por qué está enojada, es porque no ha comido su bambú todavía)_

#### Ejemplo final y código

Ejemplo final está [disponible aquí](https://samsunginter.net/angry-panda). Puedes consultar el [código aquí](https://github.com/samsunginternet/angry-panda). Mírala en acción aquí: [https://twitter.com/diekus/status/952951644043595776](https://twitter.com/diekus/status/952951644043595776)

#### Objetivo del nugget

En nuestro primer ejemplo, vamos a utilizar el Gamepad API para controlar partes de una imagen SVG con transformaciones CSS.

#### Ingredientes

*   Un editor de texto ([VS Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), …).
*   Un servidor web para probar el nugget (yo uso el [http-server](https://www.npmjs.com/package/http-server) de Node).
*   Un navegador que [implemente el API de Gamepad](https://caniuse.com/#search=gamepad).
*   Un [control/mando (gamepad)](https://medium.com/samsung-internet-dev/the-gamepad-reloaded-5ba866770003).
*   Software de edición de SVG (yo personalmente utilizo [Expression Design](https://www.microsoft.com/en-us/download/details.aspx?id=36180), el cual se puede [conseguir gratis aquí](https://www.microsoft.com/en-us/download/details.aspx?id=36180), pero [Inkscape](https://inkscape.org/en/) o [Vectr](https://vectr.com) también sirven).

#### Listos para comenzar!

Este ejemplo combina el uso del Gamepad API con imágenes SVG y transformaciones CSS. Lo interesante del ejemplo como tal es que podemos encasillar interacción y animaciones en una imagen vectorial. SVG generalmente tiene la ventaja de ser más ligero que imágenes basadas en mapas de píxeles (rasters), y escalar sin distorsionarse independientemente del tamaño que requiramos.

Vamos a dividir el ejemplo en tres partes: 1) preparar el SVG, 2) gestionar el control/mando y 3) aplicar las transformaciones CSS.

### Preparación del SVG

![](https://cdn-images-1.medium.com/max/800/1*PbMvOBY8SNZeKxk5nVjSSA.png)

Diseñando la imagen

Para la imagen SVG debemos tener en cuenta con qué es lo que queremos interactuar/animar. Esto es importante porque así agruparemos elementos dentro del DOM del documento para tener control. Para nuestro ejemplo, hemos decidido mover los ojos. Esto lo debemos tener en consideración dado que vamos a asegurarnos que los elementos que forman el ojo estén en un mismo grupo, es decir, que el círculo verde y negro estén anidados dentro de un <g></g>. A cualquier elemento del SVG, incluyendo los grupos, podemos designarles un identificador con el cual podremos invocarlos desde JavaScript. A continuación podemos ver la representación del ojo derecho, el cual es un grupo con un id de “eye_R” y dos paths que corresponden a ambos círculos que mencionamos anteriormente.

<g **id="eye_R**" clip-path="url(#h)">  
  <path fill="#006432" stroke="#006432" stroke-linejoin="round" stroke-width="3" d="M139 78c4 0 7 4 7 9s-3 9-7 9-7-4-7-9 3-9 7-9z"/>  
  <path d="M139 80c3 0 5 3 5 7 0 3-2 6-5 6s-5-3-5-6c0-4 2-7 5-7z"/></g>

### Gestión del control/mando

El Gamepad API nos permite acceder a controles y poder utilizarlos en nuestras aplicaciones. Esto es ideal para juegos en el navegador, o para controlar los ojos de nuestro panda. El Gamepad API mapea hasta 4 ejes y 17 botones por control conectado! Para nuestro ejemplo usaremos los análogos para mover los ojos.

![](https://cdn-images-1.medium.com/max/800/1*OlaRWu6ETV0pag-q7bYA2A.png)

El API de Gamepad implementa dos eventos a nivel del navegador que permiten detectar cuando se conecta o desconecta un control. En estos eventos estamos dando retroalimentación del estado de conexión al usuario (la barra de arriba) y estamos actualizando el color del ícono del mando, la cual se hace con una transición CSS. (Todas las imágenes en este ejemplo son SVG).

window.addEventListener("gamepadconnected", function(e) { gamepadHandler(e, true); }, false);

window.addEventListener("gamepaddisconnected", function(e) { gamepadHandler(e, false); }, false);

Luego de que tenemos el mando conectado, lo usual es crear un ciclo en el cual estaremos preguntando al control su estado y respondiendo de manera acorde. En nuestro caso, cuando detectamos que los análogos se mueven, ajustaremos la posición de los ojos. Para lograr este ciclo se utiliza un [RequestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

### Aplicar las transformaciones CSS

Lo que queda es aplicar las transformaciones CSS a los diferentes elementos del SVG. A estos elementos los podemos referenciar como a cualquier otro elemento del DOM en HTML. Los id’s de “eye\_R” y “eye\_L” que pusimos en el SVG son útiles pare poder hacer precisamente eso.

eye\_l = document.getElementById("eye\_L");

eye\_r = document.getElementById("eye\_R");

Luego procedemos a aplicar una transformación CSS a estos elementos dentro del ciclo que creamos con el RequestAnimationFrame con los valores que obtenemos de los análogos del control, de manera que veremos cómo reaccionan los ojos de nuestra panda acorde.

ax0 = correctSensitivity(gamepad.axes\[0\], 0.25) * 3;  
ax1 = correctSensitivity(gamepad.axes\[1\], 0.25) * 2.5;

(...)

eye_l.setAttribute('transform', 'translate('+ ax0 + ' ' + ax1 +')');

eye_r.setAttribute('transform', 'translate('+ ax2 + ' ' + ax3 +')');

### Otras observaciones

Unas últimas observaciones.

*   Para poder tener acceso al DOM del SVG, el código del dibujo debe estar empotrado dentro del HTML, y no mediante una tag de imagen que referencia a un archivo SVG externo.
*   Al aplicar una transformación en SVG, hay que tener en cuenta que la sintaxis y propiedades pueden cambiar con respecto a HTML. Por ejemplo, SVG utiliza “stroke” y “fill” para definir colores en vez de “color” y “background-color” que utilizan los elementos HTML.
*   Cuando tenemos el SVG que queremos utilizar es aconsejable pasarlo por un optimizador para limpiarlo y hacerlo más pequeño. [SVGOMG](https://jakearchibald.github.io/svgomg/) es una muy buena opción.

Y así termina nuestro primer nugget! Esperamos que traiga ideas creativas a la mesa! Escríbenos para contarnos cómo puedes utilizar esto en tus propios proyectos, y que otros nuggets querrías ver!

Tagged in [SVG](https://medium.com/tag/svg), [Gamepad](https://medium.com/tag/gamepad), [Purplenugget](https://medium.com/tag/purplenugget), [Web Dev](https://medium.com/tag/webdev), [Samsung Internet](https://medium.com/tag/samsung-internet)

By [Diego González](https://medium.com/@diekus) on [January 17, 2018](https://medium.com/p/99fd0b8cc139).

[Canonical link](https://medium.com/@diekus/gamepad-api-para-controlar-partes-de-un-svg-99fd0b8cc139)

