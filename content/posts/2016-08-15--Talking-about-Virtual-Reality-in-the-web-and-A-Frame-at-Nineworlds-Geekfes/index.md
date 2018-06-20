---
title: Talking about Virtual Reality in the web and A-Frame at Nineworlds Geekfest
category: ""
cover: img.png
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### Talking about Virtual Reality in the web and A-Frame at Nineworlds Geekfest

I recently spoke at [Nineworlds Geekfest 2016](https://nineworlds.co.uk). The nice thing about speaking there was that the audience was a little different from the usual web developer crowd I speak to. Of the audience only one considered themselves a web developer. Although the majority had had some experience with HTML and 3D graphics.

The talk was to inspire the building of virtual reality. Furthermore to show that by doing it in the mobile web a great many people can be reached.

Here are the slides & notes for the talk: [https://ada.is/getting-started-with-webvr/](https://ada.is/getting-started-with-webvr/)

A-Frame is library for building 3D and VR experiences in a HTML like format. It is modular and extensible. Components for it can be written based on THREE.js and used just like HTML.

The nice thing about A-Frame is that you don’t need to be a master of JavaScript or a Wizard of Three Dimensions. It democratises Virtual Reality the same way the Web does to Videos, Music and Documents.

All you need is a little bit of HTML is all you need to get started.

<html>

<head>  
  <script src="js/a-frame.js"></script>  
</head>

<body>  
  <a-scene>

    <a-sphere position="0 1.25 -1" radius="1.25" color="#EF2D5E"></a-sphere>

    <a-box position="-1 0.5 1" rotation="0 45 0" color="#4CC3D9"></a-box>

    <a-cylinder position="1 0.75 1" radius="0.5" color="#FFC65D"></a-cylinder>

    <a-plane rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>

    <a-sky color="#ECECEC"></a-sky>

  </a-scene>  
</body>

</html>

![](https://cdn-images-1.medium.com/max/800/1*8DOxnssXkvjWqYNh6QvduQ.png)

This scene displays a few primitive shapes, it is the A-Frame hello world.

The other really cool thing about A-Frame is that it handles everything you need for virtual reality including providing the WebVR polyfill so that you can show your virtual reality experiences through Google Cardboard without needing a WebVR capable browser & headset such as Samsung Internet with Samsung’s Gear VR.

### Enabling WebVR on Samsung internet.

Samsung Internet for Gear VR does not come with WebVR enabled by default.

WebVR enables experiences to go fully immersive rather than being contained in the window.

You can test whether it is enabled by going here: [http://threejs.org/examples/webvr_cubes.html](http://threejs.org/examples/webvr_cubes.html) (Tip: If you open up a link in Samsung Internet then plug in the GearVR the web site will be opened automatically in VR)

If it works you can enter a fully immersive environment surrounded by cubes.

![](https://cdn-images-1.medium.com/max/800/0*0ycc1oysTdRwsJ0Q.jpg)

Message when WebVR is not supported

Enable it by opening the VR browser and go here:

internet://webvr-enable

![](https://cdn-images-1.medium.com/max/800/0*uKwzaZkQ7LCMN28S.jpg)

Now WebVR is enabled you can try out some cool VR demos such as those on the A-Frame site:

[https://aframe.io/examples/showcase/videosphere/](https://aframe.io/examples/showcase/videosphere/)

### Getting Building — Resources

To take a look at my slides/notes they are here:

[**Getting Started with WebVR**  
_Touching on A-Frame and tools for authoring content._ada.is](https://ada.is/getting-started-with-webvr/ "https://ada.is/getting-started-with-webvr/")[](https://ada.is/getting-started-with-webvr/)

The github repo:

[**AdaRoseEdwards/getting-started-with-webvr**  
_getting-started-with-webvr - Slides and demos for WebVR with A-Frame_github.com](https://github.com/AdaRoseEdwards/getting-started-with-webvr "https://github.com/AdaRoseEdwards/getting-started-with-webvr")[](https://github.com/AdaRoseEdwards/getting-started-with-webvr)

My notes from when i was learning A-Frame:

[**Learning Aframe**  
_Just to state the angle I am coming from: Developer who studied graphics at university had experience with Maya and…_ada.is](https://ada.is/getting-started-with-webvr/learning-aframe.html "https://ada.is/getting-started-with-webvr/learning-aframe.html")[](https://ada.is/getting-started-with-webvr/learning-aframe.html)

The documentation on A-Frame:

[**A-Frame**  
_A-Frame is a open-source framework for creating 3D and virtual reality experiences on the web. It was built by the…_aframe.io](https://aframe.io/docs/0.2.0/guide/ "https://aframe.io/docs/0.2.0/guide/")[](https://aframe.io/docs/0.2.0/guide/)

Recommended Reading, great, platform independent advice on building scenes:

[https://developer.leapmotion.com/assets/Leap%20Motion%20VR%20Best%20Practices%20Guidelines.pdf](https://developer.leapmotion.com/assets/Leap%20Motion%20VR%20Best%20Practices%20Guidelines.pdf)

[https://developer.oculus.com/documentation/intro-vr/latest/concepts/bp_intro/](https://developer.oculus.com/documentation/intro-vr/latest/concepts/bp_intro/)

Tagged in [Virtual Reality](https://medium.com/tag/virtual-reality), [Webvr](https://medium.com/tag/webvr)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [August 15, 2016](https://medium.com/p/ced3ef17aaa).

[Canonical link](https://medium.com/@Lady_Ada_King/talking-about-vrtual-reality-in-the-web-and-a-frame-at-nineworlds-geekfest-ced3ef17aaa)
