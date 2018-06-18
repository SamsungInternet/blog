---
title: Web Audio en distintas plataformas
category: "Web Audio"
cover: img.jpg
author: Diego González
---

### Web Audio en distintas plataformas

#### Un vistazo a los distintos comportamientos del API de Web Audio

_For the english version: “_[_Web Audio on different platforms_](https://medium.com/samsung-internet-dev/web-audio-on-different-platforms-67fc9ffc2c4e)_”._

![](https://cdn-images-1.medium.com/max/1000/1*ISvb8zSLlPIDiYqfocUHKQ.png)

Aplicación de prueba de Web Audio en WebVR (https//samsunginter.net/mobile-web-audio)

Hace unos meses colaboré con la diseñadora de moda Galina Mihaleva en un [proyecto que incluía una experiencia WebVR que criticaba la contaminación sonora en el día a día](https://medium.com/samsung-internet-dev/look-forward-fashion-tech-b47a946ebcd1?source=rss----42759d5da545---4). El projecto fue espectacular, y logramos mostrar una experiencia inmersiva a miles de personas durante su exhibición en París.

Al estar desarrollando esta aplicación WebVR, me topé de frente con ciertas cuestiones relacionadas con el API de Web Audio. Quiero plasmar aquí una explicación del API de Web Audio y algunos consejos sobre su uso dependiendo de la plataforma en la cuál se visualizará dicha experiencia.

### API de Web Audio

audioCtx = new (window.AudioContext || window.webkitAudioContext)()

El API de Web Audio permite manipular audio de una forma versátil y poderosa dentro del navegador: nos provee un contexto de audio que es capaz de crear distintos tipos de nodos. Entre los tipos principales de “nodos” que se pueden crear estan los de entrada, efectos y destino. Cómo sus nombres bien lo indican, entradas representan fuentes de sonido, efectos son modificaciones sobre la señal, y destino se refiere a la salida, que generalmente por defecto serán los auriculares o altavoces pero que también se pueden salvar a un archivo en disco.

![](https://cdn-images-1.medium.com/max/800/1*x2-hLUxYGTFhaP71tBHvQg.jpeg)

Tipos de nodos en el API de Web Audio

Cada categoría de nodo puede ser de distinto tipo también. Por ejemplo, un nodo de entrada puede ser un oscilador (`[OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode "The OscillatorNode interface represents a periodic waveform, such as a sine wave. It is an AudioScheduledSourceNode audio-processing module that causes a specified frequency of a given wave to be created—in effect, a constant tone.")`), un elemento multimedia presente en la página como tal ([MediaElementAudioSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode "A MediaElementSourceNode has no inputs and exactly one output, and is created using the AudioContext.createMediaElementSource method. The amount of channels in the output equals the number of channels of the audio referenced by the HTMLMediaElement used in the creation of the node, or is 1 if the HTMLMediaElement has no audio.")), un buffer de audio (`[AudioBufferSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode "The AudioBufferSourceNode interface is an AudioScheduledSourceNode which represents an audio source consisting of in-memory audio data, stored in an AudioBuffer. It's especially useful for playing back audio which has particularly stringent timing accuracy requirements, such as for sounds that must match a specific rhythm and can be kept in memory rather than being played from disk or the network.")`), o un ‘flujo’ (stream) de datos que provenga del micrófono o la cámara (`[MediaStreamAudioSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode "A MediaElementSourceNode has no inputs and exactly one output, and is created using the AudioContext.createMediaStreamSource method. The number of channels in the output equals the number of channels in AudioMediaStreamTrack. If there is no valid media stream, then the number of output channels will be one silent channel.")`).

De manera similar, un efecto puede ser un nodo que represente algo tan trivial como cambiar el volumen del sonido (`[GainNode](https://developer.mozilla.org/en-US/docs/Web/API/GainNode "The gain is a unitless value, changing with time, that is multiplied to each corresponding sample of all input channels. If modified, the new gain is applied using a de-zippering algorithm in order to prevent unaesthetic 'clicks' from appearing in the resulting audio.")`), o tan complejo como un nodo “panner” (`[**PannerNode**](https://developer.mozilla.org/en-US/docs/Web/API/PannerNode "A PannerNode always has exactly one input and one output: the input can be mono or stereo but the output is always stereo (2 channels); you can't have panning effects without at least two audio channels!")`) que permite crear audio posicionado en el espacio. Sin embargo, uno de los nodos más interesantes del API de Web Audio es el analizador (`[**AnalyserNode**](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode "The AnalyserNode interface represents a node able to provide real-time frequency and time-domain analysis information. It is an AudioNode that passes the audio stream unchanged from the input to the output, but allows you to take the generated data, process it, and create audio visualizations.")`),que permite obtener información del tiempo o la frecuencia del estado actual de la fuente de sonido. Esto es útil para, por ejemplo, crear visualizaciones de sonido.

La idea detrás de este sistema de nodos es que el contexto de audio puede tener un modelo flexible de conexión entre estos nodos que le permite ser tan sencillo como conectar una entrada directamente a una salida, y tan complejo como combinar distintas entradas y aplicar distintos efectos sobre dichas entradas para crear un sonido compuesto.

El API de Web Audio permite un control detallado de audio en el navegador, pero la forma en que se comporta en distintos dispositivos cambia debido a privacidad, seguridad y funcionalidades no implementadas en distintos entornos. Procederemos a dar un vistazo a estos casos específicos y cómo podemos solucionar ciertos inconvenientes para reproducir audio de una manera similar en plataformas de escritorio, móvil y Realidad Virtual.

![](https://cdn-images-1.medium.com/max/800/1*HCah2qfaNXtlc6u107nsiQ.jpeg)

Plataformas en las cuales probamos el API de Web Audio

La aplicación de prueba que desarrollamos para estas pruebas se encuentra en [https://samsunginter.net/mobile-web-audio](https://samsunginter.net/mobile-web-audio). Consiste en tres botones, cada uno configurando un sonido de una fuente diferente para poder invocarlo en plataformas distintas y ver cómo se comporta. Seguidamente puedes ver los botones que vas a encontrar cuando inicias la aplicación.

![](https://cdn-images-1.medium.com/max/800/1*zZd7Qj3lkDKdVlTWkXVKyA.png)

Distintos tipos de nodos de entrada utilizados en la aplicación.

El primer botón configura una fuente desde una etiqueta presente en el código de la página HTML que contiene una referencia a un sonido de un violín. El segundo botón abre un stream desde el micrófono del dispositivo, y el último crea un oscilador con una frecuencia específica por medio segundo. Adicionalmente, cuando se inicia la aplicación tenemos un sonido de un aplauso — nada quedaba mejor con el espectacular fondo 360° de la Opera Garnier en París!

### Navegador de Escritorio

Los navegadores de escritorio son la manera más fácil de utilizar el API de Web Audio. Todo funciona de manera sencilla, basicamente uno debe de crear el contexto de audio, los efectos y luego conectar los nodos al destino.

---archivo HTML  
<audio id="applause" src="audio/applause.wav"></audio>

---archivo JS  
var autoPlayBgSound = function(){  
    var bgSound = document.getElementById('applause');  
    var src = audioCtx.createMediaElementSource(bgSound);  
    var gainNode = audioCtx.createGain();  
    gainNode.gain.value = .5;  
    src.connect(gainNode);  
    gainNode.connect(audioCtx.destination);  
    bgSound.play();  
};

En el ejemplo anterior, hacemos referencia al elemento de audio con `id="applause"` y lo tomamos como fuente de sonido. Luego de esto se crea un nodo tipo ‘gain’ (volumen) y ponemos su valor en 0.5. Ahora se conecta el la fuente (src) al efecto del volumen y este al destino. Finalmente reproducimos el sonido con el método .play.

Si quisiéramos poner esto como sonido de fondo de manera que empiece de manera automática desde el archivo de JavaScript, se reproduciría sin problemas. Sonidos creados mediante un oscilador y ‘flujos’ desde el micrófono también funcionan de manera esperada. Un caso especial es cuando el navegador muestra un diálogo o barra en dónde solicita permisos para acceder al micrófono del dispositivo… si se está en un origen seguro. Cómo se puede ver en la siguiente imagen, Chrome no permite pedir acceso a UserMedia desde un origen inseguro. Va siendo hora de migrar a [HTTPS](http://www.w3.org/2001/tag/doc/web-https)!

![](https://cdn-images-1.medium.com/max/1000/1*09FapsRDln2f4WCIkKcmfQ.png)

el método getUserMedia() no funciona desde orígenes inseguros

> Va siendo hora de migrar a HTTPS.

Probé esto en Microsoft Edge 40, Mozilla Firefox 52 y Google Chrome 59.

### Navegadores Móviles

Si usáramos el mismo código de antes, notaremos que algo se comporta de manera diferente. ¿Lo oyen? Sí. Está todo silencioso. El sonido del aplauso de fondo no está sonando. El violín de la etiqueta de audio tampoco funciona. ¿Qué pasa?

Los casos de uso en móviles son distintos. Hay consideraciones especiales para sonidos dado que estamos tratando con usuarios que (se asume) están en conexiones de datos con límite, a diferencia de estar en un navegador de escritorio. Por esta razón (y otras razones como no tener una pestaña aleatoria que empiece a reproducir sonidos en un entorno móvil) el navegador requiere una interacción por parte del usuario para poder reproducir sonidos. Si depuramos nuestra aplicación en el móvil, toparemos con esta confirmación.

![](https://cdn-images-1.medium.com/max/800/1*D4wgEqbhVORXUZ6GYi4ejg.png)

“API sólo puede ser iniciado con un gesto de usuario”

#### Sonido de Fondo

Entendemos que el sonido de fondo del aplauso no funcionará dado que se requiere un gesto para iniciarlo. Pero… cuando el usuario interacciona con el primer botón, el violín… ¿por qué no se está reproduciendo? El usuario esta de presionando el botón. ¿Verdad?

#### Etiqueta de Multimedia

Resulta que una acción dentro de un entorno WebGL no se considera como un “gesto de usuario”. Podemos leer sobre este comportamiento en [Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=178297), [Chrome para Android](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/vuYEHSeqonM) y [WebKit](https://webkit.org/blog/6784/new-video-policies-for-ios/). Las acciones que se consideran un gesto de usuario son “touchend”, “click”, “doubleclick” y “keydown”.

Una forma fácil de pasar este inconveniente es cargando o reproduciendo el archivo la primera vez que un usuario hace click, toca la pantalla, o presiona una tecla, ya que estas restricciones se quitan la primera vez que se ejecuta exitosamente el método`load()` o `play()`. Una manera de hacer esto es poniendo una pantalla inicial para cargar y “empezar” o preparar el audio en cuando se presiona el botón para entrar en el modo de Realidad Virtual. Esto fuerza al usuario a realizar un gesto en el cual podemos desbloquear las habilidades de reproducción de audio del navegador móvil.

![](https://cdn-images-1.medium.com/max/800/1*uoZ8r8DjDjFrx_APL9aM1w.png)

Pantalla de inicio para la experiencia WebVR “VR Tranquilitie”

Cómo ejemplo, la experiencia WebVR “VR Tranquilitie” utiliza una pantalla de inicio en la cual se pide al usuario seleccionar un lugar a usar para la experiencia como tal, pero también utilizamos dicha acción para iniciar el sonido que utilizamos en la experiencia.

Volviendo a nuestra aplicación de prueba, el principal problema que tenemos con nuestro ejemplo es que el menu está dentro de WebGL (A-Frame). Si este menú fuera en HTML, podríamos ligar el cargar los sonidos al evento de click de cada uno de los botones, lo que nos solucionaría el problema.

#### Oscilador

Podemos ver que el sonido que tiene de fuente el oscilador se reproduce sin problemas, dado que no requiere cargar ni descargar nada.

#### Micrófono

Para la fuente del micrófono, primero tenemos que recordar que [navigator.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia) está obsoleto. Evitemos usarlo. Usemos en su defecto [mediaDevices.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). Esta nueva forma de pedir acceso es una promesa que se resolverá una vez que el usuario conceda acceso a usar ya sea el micrófono o micrófono y cámara. Sin embargo, Samsung Internet no implementa todavía el método navigator.mediaDevices.getUserMedia, así que de momento podemos usar el [adaptador WebRTC](https://github.com/webrtc/adapter) (gracias por el consejo [Peter](https://medium.com/u/27616666fa21)) o (re) envolver el objeto getUserMedia con este hack de [MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) (se muestra en la imagen de abajo, y es el que uso yo para el ejemplo).

![](https://cdn-images-1.medium.com/max/800/1*eJWEYczGDxwkIbz2lhOaRQ.png)

Polyfill para rellenar getUserMedia en navegadores que no lo soportan. Se recomeinda utilizar el adaptador WebRTC.

Una vez que se usa el Polyfill o el Adaptador, _y que el sitio se accede a través de HTTPS_, obtenemos acceso al micrófono. Se recomienda usar audífonos para probar el micrófono.

La versión de Samsung Internet probada es 5.4.00–75.

### Navegador de Realidad Virtual

Una ‘nueva’ plataforma en donde tenemos que tener consideraciones especiales es VR. Dependiendo del hardware que se posea se podrá utilizar uno u otro navegador. En este caso específico, estaré cubriendo el navegador [Samsung Internet para Gear VR](https://www.oculus.com/experiences/gear-vr/849609821813454/) version 5.2.10.3, que está disponible para el casco de Realidad Virtual Gear VR.

Esta versión del navegador se comporta como un navegador tradicional de escritorio para efectos del API de Web Audio. Podemos escuchar el “aplauso” cuando cargamos la página, e interactuar con el botón de la fuente de etiqueta multimedia nos hace escuchar el violín, igual que el botón que corresponde al oscilador.

![](https://cdn-images-1.medium.com/max/800/1*FMizXtg2GJVcZkZFCRJHhw.jpeg)

Aplicación de prueba en Samsung Internet para Gear VR

El botón del medio para el micrófono no funciona, aunque se acceda desde HTTPS, dado que el navegador no implementa las interfaces gráficas necesarias para que el usuario interactúe con distintos sensores del dispositivo. De momento no hay micrófono en VR.

Este ha sido un vistazo rápido para entender como el API de Web Audio funciona en distintos entornos. Hay que tener en mente probar siempre el código de manera adecuada y estar pendientes de recursos como [caniuse](http://caniuse.com/#search=getusermedia) y [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), para asegurar que lo que estamos desarrollando va a correr en la mayor cantidad de plataformas posibles.

Más información sobre Web Audio

Si hay más interés en aprender sobre Web Audio, recomiendo revisar la [introducción a Web Audio](https://www.html5rocks.com/en/tutorials/webaudio/intro/) por Boris Smus. Un vistazo al trabajo de [Ruth John](https://twitter.com/rumyra) que constantemente juega con el API, o escríbenos al equipo de [Samsung Internet](https://twitter.com/samsunginternet). Constantemente estamos ideando nuevas formas divertidas de interactuar con este tipo de tecnologías.

Tagged in [Webaudio](https://medium.com/tag/webaudio), [Realidad Virtual](https://medium.com/tag/realidad-virtual), [Desarrollo Web](https://medium.com/tag/desarrollo-web), [Web](https://medium.com/tag/web), [Samsung Internet](https://medium.com/tag/samsung-internet)

By [Diego González](https://medium.com/@diekus) on [November 28, 2017](https://medium.com/p/1be66cbe4fd7).

[Canonical link](https://medium.com/@diekus/web-audio-en-distintas-plataformas-1be66cbe4fd7)
