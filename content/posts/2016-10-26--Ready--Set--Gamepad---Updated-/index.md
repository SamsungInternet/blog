---
title: Ready. Set. Gamepad. \[Updated\]
category: "Virtual Reality"
cover: img.jpg
author: Diego González
---

### Ready. Set. Gamepad. \[Updated\]

Gamepads are an essential part of gaming, and can provide another type of input device for your web application or experience. Today, [Ada Rose Edwards](https://medium.com/u/c2890cdd7a64) and I are examining the support of 3 popular game controllers that can be paired via Bluetooth with a Galaxy phone and work in the browser: the [8Bitdo SFC30 gamepad](http://www.8bitdo.com/sfc30/), [SteelSeries StratusXL controller](https://steelseries.com/gaming-controllers/stratus-xl-for-windows-and-android) and [Xbox One controller](http://www.xbox.com/en-GB/xbox-one/accessories/controllers/xbox-wireless-controller). We access these controllers from the browser through the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API).

![](https://cdn-images-1.medium.com/max/800/1*vIapORHJRQfU6wxH1RKhvg.png)

The controllers were tested using the [http://html5gamepad.com](http://html5gamepad.com) site running in Samsung Internet 4.0.

![](https://cdn-images-1.medium.com/max/800/1*rGtGg54vbATetJkApJq-pQ.png)

StratusXL, 8Bitdo SFC30 and Xbox One Gamepads in Samsung Internet

8bitdo Gamepad in Samsung Internet for GearVR

### Set up

In order to use the controllers, first you need to pair them with your phone. In order to do so, turn on Bluetooth in your device and scan for nearby devices. Make sure your controller is turned on and discoverable. Each controller has its own way of pairing. The 8Bitdo requires the “start” button to be pressed, while the Stratus and the Xbox controller have dedicated pairing buttons on the back/top respectively. Once the controller is paired, you should see it in your Bluetooth list of connected devices and listed as an input device.

![](https://cdn-images-1.medium.com/max/800/1*tVvOEhjyvK6AX-lx5VWMgw.png)

Gamepads showing in the connected Bluetooth devices

### SteelSeries Stratus XL

![](https://cdn-images-1.medium.com/max/600/1*dHakGmUoCfAbJzCcDP1vlg.png)

[Ada](https://medium.com/u/c2890cdd7a64): This is the controller recommend for the GearVR in the Samsung promotional materials. It is heavy and feels robust. Reminds me of the old xbox controllers.

[Diego](https://medium.com/u/33cea791460a): With a design that’s a mix of Xbox and PlayStation, this controller might be more attractive to seasoned players due to the inclusion of triggers and dual analog sticks. Sadly triggers are not mapped to any buttons and one one analog stick works with the Gamepad API. Also, not an ideal button mapping as the “B” button is associated with a back action, so pressing it navigates to a previous page in the browser or closes the application.

Price: ~£42/55€

**Pros:**

1.  Maps both bumpers on the controller.
2.  Maps clicking the analog sticks.

**Cons:**

1.  Triggers not mapped.
2.  Maps only the left analog stick.

### 8Bitdo SFC30 — Ada’s Fave

![](https://cdn-images-1.medium.com/max/600/1*gywngakl5js4mFt8VZaA1w.png)

[Ada](https://medium.com/u/c2890cdd7a64): I was recommended this controller from Twitter, and it is great fun. Even though it has fewer buttons all the buttons work and have the same coverage as the Steel series. It is light and portable. Has rechargeable batteries and is very nostalgic.

[Diego](https://medium.com/u/33cea791460a): Small, retro and definitely portable. I like the fact that pretty much every button is mapped in the Gamepad API — it just feels complete! Not a fan of the pairing process between different devices — it’s not straightforward nor obvious.

Price: ~£25/30€

**Pros:**

1.  Every button is mapped.
2.  Cheap.

**Cons:**

1.  Not so easy to use/pair with several devices.
2.  Lacks triggers.
3.  Lacks analog sticks.

### Microsoft Xbox One Controller — Diego’s Fave

![](https://cdn-images-1.medium.com/max/600/1*kQB71h8YTm_po9fpA3O2Jg.png)

[Ada](https://medium.com/u/c2890cdd7a64): The XBOX controller is a classic and is great because a lot of people probably have one lying about. Unfortunately the amount of buttons which are readable is quite low. But due to the amount of people that already have one it makes it a good controller to target!

[Diego](https://medium.com/u/33cea791460a): No need for introductions here. In my opinion the best gamepad out there. It’s very exciting to see that the new Xbox One Controller features bluetooth and can be paired to your phone. It behaves in a similar way to the Steelbox and that has its pros and cons. The “B” button serves as a back action on the browser so it will navigate away from the page. Button mapping is odd, but both analog sticks are recognized which provides an interesting mechanism of interaction for several experiences that require manipulation of objects in WebVR.

Price: ~£45/50€

**Pros:**

1.  Maps both analog sticks.
2.  Proved ergonomics.

**Cons:**

1.  Few buttons available.
2.  Triggers not mapped.
3.  Awkward \[B1\] and \[B3\] mappings.

### Button Mappings

Samsung Internet handles the button mappings of each controller differently. The following image summarizes all the available button mappings present in Samsung Internet version 4.0.20.

![](https://cdn-images-1.medium.com/max/800/1*77CwwoJ-jJelZnE-nxtYRg.png)

### Take aways

First of all, let’s remember that the Gamepad API has not been stabilized. There are different button configurations that are mapped per controller and even so not all buttons are mapped. _This is not bad_. We think it is very exciting to be able to utilize any of these controllers as an input device for a Web _or_ WebVR experience directly from a browser. What we recommend is to use the controller that best adapts to your current needs (and to always have a default fallback). All controllers feature more than 5 buttons that are accessible right now for developers to use. Having said that, if we want to broaden our app reach we should target buttons \[B0\], \[B2\], \[B3\], \[B6\], \[B7\] and the main Axes 0 and 1.

More specifically, the 8Bitdo is a solid contender that feels complete and that works great for most scenarios. It maps the d-pad to the axes so it allows basic motion control (since they are mapped to discreet 0 and 1 values only). The StratusXL adds an analog stick and bumpers for a more advanced scenario, and the Xbox One Controller is great for VR experiences where manipulation of objects can be done with both joysticks, which suit great to provide a couple of degrees of freedom.

One of the shortcomings at the time of writing is the behavior of mapping \[B1\] (marked with an * in the diagram), which in Samsung Internet behaves as a back command in the browser, causing it to navigate away or close the window.

**Update:** [by preventing the back event](https://jsbin.com/xasuxi/edit?html,css,js,output), [Ada](https://medium.com/u/c2890cdd7a64) has managed to enable \[B1\] interaction. This hack allows all 4 buttons to work:

window.addEventListener('keydown', function (e) {  
 e.preventDefault();  
 console.log(e.keyCode);  
 document.getElementById('keyboard').textContent = 'keyCode: ' + e.keyCode;  
});

var title = 'Gamepad Demo';  
var url = location.href;

// Prevent back events  
window.history.pushState({}, title, url);

window.addEventListener('popstate', function () {  
 // Prevent back events  
 document.getElementById('back-interceptor').textContent = 'Back Intercepted: ' + Date.now();  
 window.history.pushState({}, title, url);  
});

We encourage you to experiment and play around with these or any other Gamepads out there, and share and report back on your findings. We ourselves are working in some examples and will be sharing soon! We will also promptly update on any change in the status of the Gamepad API in Samsung Internet! **Game on!**

Tagged in [Virtual Reality](https://medium.com/tag/virtual-reality), [Gamepad](https://medium.com/tag/gamepad), [Web](https://medium.com/tag/web), [Webvr](https://medium.com/tag/webvr), [Gaming](https://medium.com/tag/gaming)

By [Diego González](https://medium.com/@diekus) on [October 26, 2016](https://medium.com/p/27ab8d1d25e6).

[Canonical link](https://medium.com/@diekus/ready-set-gamepad-27ab8d1d25e6)
