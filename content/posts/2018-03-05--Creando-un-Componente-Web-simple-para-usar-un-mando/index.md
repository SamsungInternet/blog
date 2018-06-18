---
title: Creando un Componente Web simple para usar un mando
category: "Gamepad API"
cover: img.jpg
author: Diego González
---

### Creando un Componente Web simple para usar un mando

#### Componentes Web 101

For the English version, [click here](https://medium.com/samsung-internet-dev/making-a-simple-gamepad-web-component-23b2ac262f56).

![](https://cdn-images-1.medium.com/max/2000/1*xVG7RPsOTpsPOpIpdZuZdQ.png)

estados del componente <game-pad>

Recientemente empecé a desarrollar un demo que utiliza WebXR con capacidad de adaptarse a distintas plataformas y configuraciones de hardware. El reto está en utilizar de la mejor manera los recursos que tenemos disponibles, aprovechando dispositivos que pueden ser más comunes de lo que creemos, y que nos pueden ayudar a dar una mejor experiencia de usuario. Uno de mis dispositivos favoritos a la hora de crear experiencias en la web es el mando (control). Lo encuentro tan interesante porque no es difícil encontrar uno a mano, tienen un buen soporte entre los navegadores, vienen en muchas formas y tamaños, y poseen un modelo de interacción que es conocido por muchas personas (generalmente presionas un botón y pasa algo).

![](https://cdn-images-1.medium.com/max/800/1*3lHL9u3M8VUuy_qHof3j1Q.png)

Mandos. Son más comunes de lo que imaginamos!

Estas características hacen que los mandos sean buenos dispositivos para incorporar en aplicaciones inmersivas. Ahora, si bien utilizar el mando es relativamente sencillo, sería aún mejor abstraer la inicialización del mismo y hasta proveer un indicador del estado de la conexión en la interfaz gráfica.

Viendo la multitud de buzzwords y frameworks que hay ahora mismo, es difícil a veces identificar una buena opción que pueda conllevar el paso de tecnologías y tiempo. Y mientras trataba de pensar cómo podía hacer este ejemplo, me acordé de una charla por [Gil Fink](https://medium.com/u/b727bf477338) sobre Componentes Web que escuché el año pasado, y decidí tratar de utilizarlos para empaquetar la funcionalidad del API e incluir un indicador de conexión en la interfaz gráfica. Todo esto estaría empaquetado de forma que sólo se requeriría poner en una página HTML y funcionaría sin problema.

> Bienvenidos a Haciendo un Componente Web para principiantes.

Habiendo explicado la idea general, quiero decir que este es mi primer encuentro con dichas tecnologías, y estoy ansioso por ver si [quizás yo también debería apostar en Componentes Web](https://medium.com/@gilfink/why-im-betting-on-web-components-and-you-should-think-about-using-them-too-8629396e27a). Bienvenidos a “Haciendo un Componente Web para principiantes”.

### El componente web <game-pad>

Empecemos por definir que es un ‘Componente Web’. Son una serie de tecnologías que permiten crear componentes reutilizables de interfaz gráfica o comportamiento. Estas tecnologías son ["Custom Elements", "Shadow DOM", ""HTML Templates" y "HTML Imports"](https://developer.mozilla.org/es/docs/Web/Web_Components).

Si pensamos en nuestro ejemplo, estamos creando un componente web que inicializa el API de Gamepad en una página y nuestra un indicador gráfico que refleja el estado de la conexión del mismo. Este indicador será una silueta blanca de un mando con un fondo en verde (conectado), amarillo (esperando conexión) o rojo (API no soportado).

![](https://cdn-images-1.medium.com/max/800/1*ciIYRDaW4cDsOowkjbLKrQ.png)

elemento <game-pad> en una página web esperando conexión

"Custom Elements" (Elementos Personalizados)permiten crear un elemento que encapsula funcionalidad. [Puedes leer sobre ellos aquí](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), pero para lo que nos interesa lo que necesitamos saber es que esta es la tecnología que nos permite crear nuestros elementos con una etiqueta personalizada (por ejemplo, la etiqueta <game-pad>). Como dato útil, debemos saber que los nombres asignados a estas etiquetas deben tener al menos un guion "-".

Siguiendo con "Shadow DOM" (DOM Oculto), esta es la técnica que permite crear una estructura DOM asociada a un elemento, de manera que es una estructura separada del documento principal. Para nuestro ejemplo, esta estructura consiste de un div y una imagen (icono SVG que representa un gamepad). Este árbol DOM asociado también incluye los estilos que cambian el color del fondo de nuestro componente. [Puedes leer de Shadow DOM aquí](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM).

En este primer ejemplo, no utilizaremos "Templates" (Plantillas), sin embargo, esta es una manera poderosa de crear componentes más complejos. Nosotros no los utilizaremos dado que nuestro componente requiere únicamente un div y una imagen. En un artículo futuro expandiremos este ejemplo para mostrar un indicador por cada mando conectado al navegador. En ese ejemple tendrá sentido utilizar plantillas dado que tendremos interfaz gráfica que se repite (un indicador por mando detectado) en la página. [Puedes leer de templates y slots aquí](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots).

Por último, no entraremos a discutir "HTML Imports", dado que no hay un consenso en el estándar como tal, así que de momento todo el componente que crearemos estará encapsulado en un solo archivo JavaScript. En todo caso, para tener soporte de estas tecnologías que estamos usando en navegadores que no las implementan podemos incluir el [WebComponent Polyfill](https://github.com/WebComponents/webcomponentsjs).

### Cómo crear el componente <game-pad>

Para crear nuestro componente web, debemos crear una clase que define su comportamiento y su apariencia. Para ello, he creado una clase llamada 'GamepadWrapper', que extiende un HTMLElement.

class GamepadWrapper extends HTMLElement

En esta clase le añadiremos un “ShadowRoot” (elemento raíz de la estructura de nuestro componente) y construiremos en ella la estructura de nuestro elemento. Esto lo haremos en el constructor de la clase.

constructor(){  
    super();  
    let shadow = this.attachShadow({mode:'open'});  
    (...)  
}

Cuando hemos adjuntado el ShadowRoot en el elemento, podemos crear la estructura deseada, en nuestro caso, un div, una imagen, y los estilos asociados. [Puedes ver el código aquí](https://github.com/SamsungInternet/game-pad/blob/master/js/gamepad-comp.js#L8). Podemos fijarnos en que la forma de crear la estructura es idéntica a la forma en que creamos elementos de forma dinámica con JavaScript. He incluido en el componente código que revisa si el API es soportado por el navegador, además de los eventos que monitorean si un mando se conecta o desconecta. Estos eventos los usaremos para actualizar el color de fondo de la interfaz gráfica del componente, utilizando transiciones entre classes CSS.

Procedemos a “registrar” el elemento personalizado, con un nombre que tiene al menos un [guion](https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name), como lo requiere la [especificación](http://w3c.github.io/webcomponents/spec/custom/#custom-elements-autonomous-example). También necesitaremos la clase que creamos anteriormente.

customElements.define('game-pad', GamepadWrapper);

El primer argumento es el nombre del componente y el segundo el nombre de la clase asociada.

#### Usando el componente <game-pad>

![](https://cdn-images-1.medium.com/max/600/1*NcjLliRIG3paSIoOV6t9GA.png)

Componente <game-pad> corriendo en Samsung Internet con mando connectado

Podemos probar localmente que una pagina web con el código fuente mostrado abajo.

<body>  
    <game-pad></game-pad>  
</body>

Teniendo en cuenta que la especificación está muy verde todavía y que no todas las tecnologías están soportados en todos los navegadores, usamos el [webcomponentsjs polyfill](https://github.com/webcomponents/webcomponentsjs). Para utilizar este polyfill incluimos el archivo JavaScript en el encabezado del archivo HTML. Nótese que hay varios tipos de polyfills que ayudaran con distintos tipos de deficiencias en distintos navegadores. De momento, recomiendo usar ‘ [webcomponents-sd-ce.js](https://github.com/webcomponents/webcomponentsjs/blob/master/webcomponents-sd-ce.js)’ dado que incluye shady DOM que permite poner estilos con alcance limitado (lo malo es que es un poco más grande en tamaño que los otros).

<script src="js/gamepad-comp.js"></script>

El componente como tal se encarga de inicializar el API de Gamepad, y establece un objeto llamado “gamepads” que tiene una referencia a los mandos conectados. Con esto puedes revisar dentro de un ciclo de RequestAnimationFrame el estado de los mandos conectados, incluyendo botones y análogos, y así controlar tu aplicación web.

#### En resumen…

Desde el punto de vista de alguien que apenas experimenta con Componentes Web, estoy felizmente sorprendido de que tan fácil y rápido es construir uno. Es satisfactorio pensar en que este es código que puedo seguir reutilizando, y que mantenerlo actualizado puede ser más fácil que ir actualizando cada instancia. Los Componentes Web son una idea que espero llegue (de manera estándar) dentro de poco! Si quieres ver el [código del ejemplo, está aquí](https://github.com/SamsungInternet/game-pad).

Si te interesa más información, puedes ver que aprendieron [Ruth](https://medium.com/u/1bf712acd447) y [Ada](https://medium.com/u/c2890cdd7a64) cuando construyeron su aplicación de [DJ en la web](https://medium.com/samsung-internet-dev/lessons-learned-making-our-app-with-web-components-bf55379cfcda) con componentes. También escribiré una continuación de este artículo que expande la personalización de la interfaz de este componente al permitir cambiar tamaño y poner tu propio ícono.

Tagged in [Componentes Web](https://medium.com/tag/componentes-web), [Mando](https://medium.com/tag/mando), [Control](https://medium.com/tag/control), [Desarrollo Web](https://medium.com/tag/desarrollo-web)

By [Diego González](https://medium.com/@diekus) on [March 5, 2018](https://medium.com/p/4f9d0f7bf084).

[Canonical link](https://medium.com/@diekus/creando-un-componente-web-simple-para-usar-un-mando-4f9d0f7bf084)

Exported from [Medium](https://medium.com) on June 15, 2018.