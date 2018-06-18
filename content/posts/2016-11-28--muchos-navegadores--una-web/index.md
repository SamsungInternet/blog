---
title: muchos navegadores, una web
category: "Web Development"
cover: img.jpg
author: Diego González
authorImg: https://miro.medium.com/fit/c/240/240/1*3Xf5XjVdx87HHxiRKY8X1Q.jpeg
---

### muchos navegadores, una web

Hace unos meses me incorporé a Samsung para trabajar en un equipo que promueve la plataforma web y ayuda a su desarrollo. Aprendiendo de la dinámica interna de una compañía que desarrolla un navegador y de las enseñanzas e ideología de la comunidad, unas de las preguntas más interesantes a las que he tenido que responder están relacionadas con la existencia de otro navegador. Estas preguntas pueden ser muy simples y complejas a la vez, pues podemos analizar la situación desde distintos ángulos, e independientemente tienden a generar discusión entre puristas y fans por igual. Discutamos sobre la existencia de Samsung Internet.

![](https://cdn-images-1.medium.com/max/800/1*DvSs6N4i3Qnu9Wk2jYyA_A.png)

#### espera… ¿Samsung tiene un navegador web?

[La respuesta corta es _“sí”._](https://medium.com/@torgo/the-big-browser-you-haven-t-heard-of-yet-481a1b48517b#.6lr82ckh8) La web es muy importante para Samsung. Es por eso que la compañía ha decidido no solo desarrollar su propio navegador pero también contribuir activamente al desarrollo de la web.

> La web es muy importante para Samsung

#### ¿Cúal es el navegador?

El navegador se llama \*redoble de tambores\*… “Samsung Internet”. Es el ícono morado con el nombre “Internet” que se encuentra en dispositivos móviles Samsung (teléfonos y tabletas). Su versión actual es la 4.0 ([aunque hay una beta de la 5.0 disponible y quizás te interesaría probarla](https://medium.com/samsung-internet-dev/beta-d0f988fb77fb#.dkd17944d)).

![](https://cdn-images-1.medium.com/max/800/1*wBzqmScsT1UpimGtQgoxag.png)

Logo de Samsung Internet

#### Mmmm… y ¿por qué otro navegador?

Me atrevería a argumentar que la pregunta correcta es “¿por qué no?”, ¿no? Rebobinemos. Samsung Internet esta basado en [Chromium](https://www.chromium.org/Home). No solo esta basado en Chromium sino que [Samsung contribuye activamente a su desarrollo](https://bugs.chromium.org/p/chromium/issues/list?can=2&q=owner%3Asamsung). De hecho es uno de los que más contribuye después de Google. Chromium esta pensado como una base segura, rápida y eficiente para navegadores y hay varios navegadores que están basados en este proyecto de código libre. Cada uno de estos tiene una vision diferente de cómo la experiencia de usuario debe ser. Dicho esto, para Samsung, hay varias razones que justifican tener un navegador:

1.  **Permite ofrecer a los usuarios una mejor experiencia**: personalizada al dispositivo y compatible con estándares. Si pensamos en combinar ciertas funcionalidades únicas en ciertos dispositivos obtenemos por ejemplo el inicio de sesión en sitios web con tecnología biométrica (por medio de huella dactilar o [escáner de iris](https://medium.com/samsung-internet-dev/iris-scanning-comes-to-the-web-516b40063622#.5kj7qo3it)). Por el lado de estándares, no solo los implementamos y promovemos, sino que contribuimos de manera significativa a ellos (por ejemplo, [Service Workers](http://www.w3.org/TR/service-workers/), [WebVR](https://medium.com/samsung-internet-dev/w3c-webvr-workshop-follow-up-bcfe6558ccba#.11nftvmjb), …). Samsung contribuye activamente al desarrollo de Chromium y de estándares web. Esto nos permite ofrecer una mejor experiencia de usaurio.
2.  **Fabricamos hardware**: Samsung fabrica sus propios dispositivos, y esto le da la posibilidad de poder incorporar funcionalidad de sensores del dispositivo dentro del navegador. Mencionamos anteriormente que podemos iniciar sesión en sitios web utilizando el lector biométrico. Otros ejemplos son la incorporación del navegador en experiencias continuas de usuario, como cuando estamos navegando e insertamos el móvil en las gafas de realidad virtual (Gear VR) y continuamos la experiencia en Samsung Internet para Gear VR. También cuando interactuamos con la página por medio de otros dispositivos.
3.  **Tomamos la privacidad muy en serio**: Samsung Internet tiene su propia vision respecto a privacidad. A diferencia de otros navegadores, Samsung Internet no llama a casa ni envía reportes de uso, permite utilizar autenticación biométrica para el modo secreto. Adicionalmente, permite instalar bloqueador de contenidos (mediante el Content Blocking API). Sí, la privacidad es una promesa de la marca del navegador.
4.  **Aplicaciones Web Progresivas (PWA, por sus siglas en inglés):** Samsung Internet es uno de los navegadores que esta liderando el desarrollo del concepto de Aplicaciones Web Progresivas. El navegador soporta ‘instalar’ una aplicación o sitio web directamente en la pantalla de inicio, y provee la infraestructura necesaria para que funcione fuera de línea. Nuestro compañero Jungkee Song forma parte de los editores de la epecificación de ‘Service Workers’ en la W3C, primordiales para permitir PWAs.
5.  **Realidad Virtual (VR) en la web:** No es un secreto que nos gusta la realidad virtual. Con una estimación de 2.3 millones de Gear VR en la calle, [uno de los primeros navegadores web para consumidores en VR](https://www.oculus.com/experiences/gear-vr/849609821813454/) y una integración muy fuerte entre el navegador y el hardware (Gear VR), es bastante certero afirmar que _amamos la realidad virtual_. Tanto que [fomentamos y participamos en su desarrollo en la web](https://www.w3.org/2016/06/vr-workshop/report.html). Queremos ayudar a democratizar la realidad virtual desarrollándola en el medio más democrático que existe: la web.

> Solo mediante la innovación y competencia logramos mantener un ecosistema web sano y fuerte.

#### perfecto, pero, ¿por qué debería desarrollar para este navegador?

No estás desarrollando _para el navegador_. Estás desarrollando _para la web_… y tienes la seguridad de que el navegador tiene excelente compatibilidad con los estándares actuales. Pero bueno, además del hecho de que estás aprovechando la magia de estándares web modernos que te permiten crear aplicaciones web progresivas y experiencias de realidad virtual, te daré un par más de razones:

La quota de mercado de Samsung Internet está creciendo rápidamente en países como [Holanda](http://gs.statcounter.com/#mobile_browser-NL-monthly-201603-201609) y [Alemania](http://gs.statcounter.com/#mobile_browser-DE-monthly-201603-201609). El navegador tiene el tercer puesto en quota de mercado a nivel [europeo](http://gs.statcounter.com/#mobile_browser-eu-monthly-201603-201609) y en [América del Norte](http://gs.statcounter.com/#mobile_browser-na-monthly-201603-201609).

> El navegador de Samsung es ahora el tercer navegador móvil más popular en los mercados más grandes incluyendo Alemania (24.6%), Corea del Sur (18.2%), y Reino Unido (16.5%).”— [DeviceAtlas](https://deviceatlas.com/blog/most-used-mobile-browsers-q3-2016)

> Por ende, ¿no deberían más bien haber más navegadores?

Por ende, ¿no deberían más bien haber más navegadores? Solo mediante la innovación y competencia logramos mantener un ecosistema web sano y fuerte. He llegado a darme cuenta de que hay espacio para otros navegadores; he llegado a darme cuenta de que hay espacio para Samsung Internet y la innovación que trae a la web.

> hay espacio para Samsung Internet y la innovación que trae a la web

Tagged in [Web](https://medium.com/tag/web), [Navegador](https://medium.com/tag/navegador), [Desarrollo Web](https://medium.com/tag/desarrollo-web), [Browsers](https://medium.com/tag/browsers), [Internet](https://medium.com/tag/internet)

By [Diego González](https://medium.com/@diekus) on [November 28, 2016](https://medium.com/p/cc667ecc3e34).

[Canonical link](https://medium.com/@diekus/muchos-navegadores-una-web-cc667ecc3e34)