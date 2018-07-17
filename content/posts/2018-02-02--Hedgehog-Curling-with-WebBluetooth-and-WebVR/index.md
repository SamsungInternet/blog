---
title: Optimising A-Frame Assets for Faster Starts
category: "Web APIs"
cover: img.jpg
author: Jo Franchetti
authorImg: https://miro.medium.com/fit/c/240/240/1*Z3jj0qvOata1z4xlJPSqOA.jpeg
---

### Hedgehog Curling with WebBluetooth and WebVR

#### We’ll just let this one slide…

![](https://cdn-images-1.medium.com/max/800/1*J2YbvIKmgFsB2XznxYbGlA.gif)

### Purple Nugget # 2: Hedgehog Curling

_Inspired by the_ [_XKCD emoji sports_](https://xkcd.com/1920/)_. Now you can curl your hedgehogs in 3D! (No actual hedgehogs were thrown in the making of this demo)_

#### Finished demo and code

You can [see the demo here](https://hedgehog-curling.glitch.me/) and [get the code here](https://glitch.com/~hedgehog-curling). This demo will only work on a device that has both a Bluetooth connection and a browser that supports web Bluetooth. You can [enable Web Bluetooth in the Samsung Internet browser via a flag](https://samsunginter.net/docs/web-bluetooth).

#### Nugget objective

This purple nugget combines [WebVR](https://samsunginter.net/docs/webvr) and [Web Bluetooth](https://samsunginter.net/docs/web-bluetooth) and shows how we can interact with objects in our virtual environment from the outside world.

### **Ingredients**

*   A text editor ([VS Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), [glitch](https://glitch.com/), …)
*   A way to serve your nugget over HTTPS (I use [glitch](https://glitch.com/))
*   A device with a Bluetooth connection (eg mobile phone, tablet)
*   [A Daydream Controller](https://support.google.com/daydream/answer/7184597?hl=en) (Or your own choice of Bluetooth enabled controller).
*   A browser with Web Bluetooth enabled (Samsung Internet 6+ has it behind a flag, or Chrome)

### Method

Web Bluetooth allows us to connect to and send and receive data from Bluetooth enabled peripheral devices directly from our browser. This means that our users don’t have to download a separate app in order to connect to the device. WebVR lets us display a 3D environment within the browser, creating an engaging and immersive experience.

Combining the two give us a way to interact with a three dimensional object by moving an object in the real world.

We can divide the work into four parts. Creating the scene, styling the scene, writing the rules for the physics and controlling the scene.

#### **WebVR — Creating the scene**

We can use [A-Frame](https://aframe.io/), a JavaScript framework for building VR experiences in the web, to help us set up a scene. The [A-Frame documentation has some code to get you started](https://aframe.io/docs/0.7.0/introduction/) or you can [remix the A-Frame starter on Glitch](https://glitch.com/~aframe).

Our ice rink is made up of a long, flat-ish box with four long narrow boxes either side. You can delete the shapes given in the A-frame starter and replace them with these.

<a-box color="aaa" width="20" depth="60" height="1" position="0 -0.6 -21"></a-box>  
<a-box color="#aaa" width="0.25" height="0.2" depth="50" position="-3 0 -21"></a-box>  
<a-box color="#aaa" width="0.25" height="0.2" depth="50" position="3 0 -21"></a-box>  
<a-box color="#aaa" width="6" height="0.2" depth="0.25" position="0 0 4.13"></a-box>  
<a-box color="#aaa" width="6" height="0.2" depth="0.25" position="0 0 -46"></a-box>

You can use the A-Frame inspect tools to help you edit the position and size of the boxes by pressing Ctrl+Alt+i.

Next up we need our hedgehog! I used [this model from Sketchfab](https://sketchfab.com/models/5fcf8781cc024eeaba416148b89761d4#download).

![](https://cdn-images-1.medium.com/max/800/1*LmBQSlyDFTSn25EXZFI4Vg.png)

Download a hedgehog model of your choice and host it in the same place that you’ll be hosting your scene. We can add a 3D obj model to our A-Frame scene using the <a-entity> element and adding an asset.

<a-assets>  
  <a-asset-item id="hedgy-obj" src="[https://example.com/hedgy.obj](https://poshaughnessy.github.io/hedgehog-tests/models/hedgehog2/hedge.obj)">  
  </a-asset>  
<a-assets>

<a-entity id="hedgehog" obj-model="obj: #hedgy-obj;"></a-entity>

#### **WebVR — Styling the scene**

At the moment it looks a little boring. We add can colour and textures to it using materials. These are image files that are added as assets and then can be passed to our boxes or entities with the `material` attribute. You can create your own textures for your scene or you can use the ones provided in the example at the top. I made this image, which I set as the material for the rink floor.

![](https://cdn-images-1.medium.com/max/800/1*OCgKe0OiMcV2X4UTVJenaw.jpeg)

a curling rink texture

Add the image as an asset in your assets section, and then pass that to your rink floor box.

<a-assets>  
  <a-asset-item id="hedgy-obj" src="[https://example.com/hedgy.obj](https://poshaughnessy.github.io/hedgehog-tests/models/hedgehog2/hedge.obj)">  
  </a-asset>  
  <img id="rink-skin" src="[https://example.com/rink.png](https://cdn.glitch.com/474ca6a4-8118-4d8f-a56d-35eb09a3bd6e%2Fcurling.png?1512402455248)"/>  
<a-assets>

...

<a-box id="rink" material="src: #rink-skin;" width="20" depth="60" height="1" position="0 -0.6 -21" static-body></a-box>

You can create a blue gradient for the a-sky element and do the same thing.

#### **Set up the Physics**

Ice rinks have low friction, we want our hedgehog to slide, we also want it to decelerate eventually and it should rebound if it hits a rink wall (OK, so this isn’t how real curling is played, let me take a _little_ poetic licence).

First off we’re going to include the A-Frame event set component library

<script src="[https://unpkg.com/aframe-event-set-component@3.0.3/dist/aframe-event-set-component.min.js](https://unpkg.com/aframe-event-set-component@3.0.3/dist/aframe-event-set-component.min.js)"></script>

This allows you listen for events and then to edit the properties of your A-Frame components.

We want to give our hedgehog some new properties, firstly a velocity (speed in a direction). We can register a new component called velocity

AFRAME.registerComponent('velocity', {  
  schema: {type: 'vec3'},

init: function() {  
    console.log('Velocity');  
  },  
    
  decelerate: function() {  
    this.data.x *= deceleration;  
    this.data.y *= deceleration;  
    this.data.z *= deceleration;  
  },  
    
  tick: function() {   
    var x = this.data.x;  
    var y = this.data.y;  
    var z = this.data.z;  
      
    this.el.object3D.position.add({x, y, z});  
    this.decelerate();  
  }  
});

We set a variable of deceleration, which will depend on how slippery we want our ice rink to be. I set mine to 0.99 which seemed to give a realistic looking slide. On every tick we update the position values of the element to which we apply this velocity, meaning that it will move inside the scene.

Next up we need to set up the collision detection for the walls of the rink, if the hedgehog hits a wall we want it to bounce back into the rink. First we need to identify which A-Frame components are ‘walls’. This is done by giving each of them a class of ‘wall’ in the HTML. This class is then used as a selector in the collision JS. I’ve used the [reset-on-collision](https://github.com/kennardconsulting/aframe-reset-on-collision/blob/master/README.md) library by Richard Kennard, but instead of reseting the position of the element, we’re going to change its velocity on collision.

#### **Web Bluetooth — Control the Scene**

For this demo I’ve used a Daydream controller, because [this library by MrDoob](https://github.com/mrdoob/daydream-controller.js/) makes connecting the controller to your browser very achievable.

Include the library in your HTML

<script src="daydreamcontroller.js"></script>

We can check whether the user’s browser supports Web Bluetooth by doing a check on `if ('bluetooth' in navigator)` In this case I have added an absolutely positioned overlay with a ‘Connect’ button in my HTML which is set to `display: none` if the browser does not support Bluetooth. If the browser does support Bluetooth then we can start working with it! On click of our ‘Connect’ button we will create a new DaydreamController instance and connect to the controller. The DaydreamController.js library uses `navigator.bluetooth.requestDevice()` which will pop up a dialog asking the user which device they want to connect to and will allow them to select the Daydream controller.

![](https://cdn-images-1.medium.com/max/800/1*8qek_iOmnmmFckg3XZuLwQ.png)

The library also gives us access to the angle at which the controller is being held, along with its current acceleration in the X, Y and Z directions. We can use these values to change the direction and speed that we release our hedgehog at.

We can also find out when buttons on the controller are being pressed, so we can set the velocity attribute on the hedgehog and send it on its way.

In order to follow our hedgehog down the track, we need to apply a velocity to the camera too. This can be done with an A-Frame `<a-animation>` element, which can be added inside A-Frame components to make them move. You will need one for each attribute you want to change. You give it, `to` , `duration` , and `ease` attributes, along with an optional `delay` to create the movement you want. You can trigger an animation with `element.emit('startAnimation')`. The camera animation can then be triggered at the same time that the hedgehog is given velocity, on the button press.

[You can see a full example of the WebBluetooth setup in the example](https://glitch.com/edit/#!/hedgehog-curling?path=js/setup.js:3:2).

![](https://cdn-images-1.medium.com/max/800/1*g9VLzsmV2IsHxK0SGXAY5A.gif)

Screenshot of the game when connected to the daydream controller

### Extras

I wanted to make my hedgehog spin slightly as it glides its way down the rink. I did this with an animation on the rotation attribute.

I hope you have fun making your own hedgehog curling, or another game using Web Bluetooth and WebVR! There are many open source libraries available to connect many different devices to your browser: [a drone](https://github.com/poshaughnessy/web-bluetooth-parrot-drone), [controllable light bulbs](https://github.com/WebBluetoothCG/demos/tree/gh-pages/playbulb-candle), [a printer](https://github.com/WebBluetoothCG/demos/tree/gh-pages/bluetooth-printer), [development kits](https://github.com/NordicPlayground/webapp-nordic-thingy) and [some less safe for work devices](https://github.com/metafetish/lovesense-hush-js-demo). There are also [many](https://free3d.com/3d-models/) [sites](https://poly.google.com/) [with](https://www.turbosquid.com/Search/3D-Models/free) free 3D models available for download. These should give you many points to get started mixing the physical and digital worlds!

If you’ve enjoyed this nugget, why not try [Purple Nugget #1 — Controlling SVG with the Gamepad API](https://medium.com/samsung-internet-dev/gamepad-api-to-control-parts-of-an-svg-3f76892044f6).

![](https://cdn-images-1.medium.com/max/800/1*tO97EhVRTaBjJqy8_K_UBA.gif)

Happy Hedgehog Curling!

Tagged in [JavaScript](https://medium.com/tag/javascript), [Web Bluetooth](https://medium.com/tag/web-bluetooth), [Webvr](https://medium.com/tag/webvr), [Curling](https://medium.com/tag/curling), [Browsers](https://medium.com/tag/browsers)

By [Jo Franchetti](https://medium.com/@jofranchetti) on [February 2, 2018](https://medium.com/p/a9ac7fb2f752).

[Canonical link](https://medium.com/@jofranchetti/hedgehog-curling-with-webbluetooth-and-webvr-a9ac7fb2f752)
