---
title: The Gamepad Reloaded
category: "PWA"
cover: img.jpg
author: Diego González
authorImg: https://miro.medium.com/fit/c/240/240/1*3Xf5XjVdx87HHxiRKY8X1Q.jpeg
---

### The Gamepad Reloaded

#### Revision of Gamepad API support in Samsung Internet Beta 5.4

![](https://cdn-images-1.medium.com/max/1000/1*Py918lrnlVHU7xAfK18iiA.png)

I ❤ Gamepad API

A while ago [Ada Rose Edwards](https://medium.com/u/c2890cdd7a64) and myself reported on [the state of the Gamepad API in Samsung Internet 4.0,](https://medium.com/samsung-internet-dev/ready-set-gamepad-27ab8d1d25e6#.24w6gaf9b) and given that time flies when you’re having fun, a prompt update is due. We have recently [released an open beta for the next version of Samsung Internet (5.4)](https://medium.com/samsung-internet-dev/samsung-internet-beta-now-available-without-sign-up-e0d5d4010838#.h0p1rhinm) which, amongst other changes, enhanced our support for gamepads. We are going to retest all the controls from the original tests and add the _joy_ of a special surprise!

We are testing in Samsung Internet version 5.4.00–15 BETA, running on a Galaxy S7 Edge with Android 7.0. In a similar manner to last time, we are using the [HTML5 Gamepad Tester](http://html5gamepad.com/).

![](https://cdn-images-1.medium.com/max/600/1*dMqji-KbBC-beaxzpBXUEg.png)

Xbox Wireless Controller shown in the notifications area in a Galaxy S7.

### Set Up

In order to use the controllers, first you need to pair them with your phone. In order to do so, turn on Bluetooth in your device and scan for nearby devices. Make sure your controller is turned on and discoverable.

Each controller has its own way of pairing. The 8Bitdo requires the “start” button to be pressed, while the Stratus and the Xbox controller have dedicated pairing buttons on the back/top respectively. Once the controller is paired, you should see it in your Bluetooth list of connected devices and listed as an input device.

Once the devices are connected, you will see icons that will represent them on the notifications bar. From here you can jump into their settings and disconnect them as well.

### Reviews

Here we give our thoughts on each controller. At the bottom of the article is a diagram for the complete mappings of these controllers in Samsung Internet Beta.

### SteelSeries Stratus XL

![](https://cdn-images-1.medium.com/max/600/1*GH4zpNRnFZojE70QzaVK5w.png)

[Ada](https://medium.com/u/c2890cdd7a64): The controller which was initially promoted with the Samsung Galaxy GearVR. Great to see it now has all major buttons mapped! I was impressed it could even handle pressure sensitivity on the triggers. A little big and heavy for my taste but a great feeling controller.

[Diego](https://medium.com/u/33cea791460a): One of the better options when using a Bluetooth controller on your device, this gamepad now accurately maps buttons, triggers, analogs and bumpers. This is a great comeback since last review, where inconsistent mappings made it a good yet incomplete option. It now sits at the top alongside other controllers!

Price: ~£45

#### Highlights:

*   Amazing button mapping.
*   Feels comfortable

### 8Bitdo SFC30 — Ada’s Fave

![](https://cdn-images-1.medium.com/max/600/1*PLn3kEWTTk_ABwEIyEZR4g.png)

[Ada](https://medium.com/u/c2890cdd7a64): My personal favourite. Light & small fits in a pocket or purse. Buttons feel great and I love the retro Famicon look. Has multiple modes so it works in a variety of apps and buttons are fully mapped. I like how the D-Pad matches to the Axis-0 and Axis-1 so it can be used for where other gamepads would use an Analogue stick.

[Diego](https://medium.com/u/33cea791460a): Still attractive not only due to nostalgia and form factor, this portable controller can brag that it has all its buttons mapped. Nonetheless, with the excellent mappings now present in the SteelSeries and Xbox One Controller, I can’t seem to justify why the D-Pad is not being mapped accordingly and is instead being mapped to a ‘digital’ thumb stick. The way these buttons are mapped to an axis is inconsistent and behaves in a different manner than expected.

Price: ~£29

#### Highlights:

*   Small form factor
*   Can be recharged

### Microsoft Xbox One Controller — Diego’s Fave

![](https://cdn-images-1.medium.com/max/600/1*YDsuVAM84-Tc7jyxN8o5Jw.png)

[Diego](https://medium.com/u/33cea791460a): There’s something about this controller… maybe it’s the fact that many people consider it the best controller in existence, but being able to use it to play on your mobile device is cool. It is not something new though. We already saw that in our past review of the Gamepad API, but the fact that all of the issues with button mappings have been resolved is something to be excited about. Buttons, triggers, bumpers, analogs and d-pad are all accessible from the browser, with only the “View” button \[B8\] used to navigate back.

[Ada](https://medium.com/u/c2890cdd7a64): It’s a classic controller design. Like the Stratus XL it is too large for my tastes but a great high quality controller. Fantastic to see that the button mappings in Samsung Internet have improved significantly since our last reviews.

Price: ~£42

#### Highlights:

1.  All buttons mapped.
2.  Provides trigger and bumper control.
3.  Many users might already have one.

### Nintendo Switch Joy-Con

![](https://cdn-images-1.medium.com/max/600/1*Sf4TLMwhfzoaBWUMJ2rv_Q.png)

[Ada](https://medium.com/u/c2890cdd7a64): A brand new controller, working in the web straight away! A few buttons don’t work and it is a little laggy but it is impressive none-the-less!!

The controllers are mapped so that when held with the joystick on the left, you have the analogue stick, 3 of the buttons, trigger and SL mapped the same. Home, screenshot, start and select are mapped to different buttons.

[Diego](https://medium.com/u/33cea791460a): Enter Nintendo. Some days ago we saw the release of the Nintendo Switch, and when a few days later we read that the Joy-Cons were being connected to Windows and Macs it immediately brought up the question if they would be picked up by the Gamepad API. And \*voila\*, they are. This being said, the fact that it is one controller being broken to work as two makes for some inconsistencies while trying to use each separate controller as equals. Also, analog sticks mapped to buttons is not exactly what we would like, but hey, it’s a start! And a pretty good one for that matter!

Price: ~£69

#### Pros:

1.  One Switch controller gives you two separate Joy-Con controllers. If coded specifically for these type of controllers we can take advantage of two inputs instead of one.
2.  Since it separates it can have innovative applications for an experience with controls in each hand.

#### Cons:

1.  Few buttons mapped that match any other controller.
2.  More complex to use the pair as a single controller with two joysticks.

### Button Mappings

The following image summarizes all the available button mappings present in Samsung Internet version 5.4.00–15 BETA.

![](https://cdn-images-1.medium.com/max/1000/1*5wIN3eXNctXqGXsErjT3OA.png)

### Takeaways

![](https://cdn-images-1.medium.com/max/800/1*STWtCFunnRFaNAhoNIZ4OA.png)

First of all it’s quite remarkable how much the gamepad situation has improved from our last revision! From different button mappings, supporting 21 mappings (up from 14 last time), to \[B1\] causing our apps to navigate away from the page, we’ve come a long way! (\[B8\] seems to be the default way now to navigate back).

It’s quite exciting to see great support for gamepads like the SteelSeries Stratus XL and the Xbox One Controller, which behave in a similar fashion. This is great news because we are getting consistent trigger, bumper and analog stick support to use in our web applications/games. It is also promising to see how very new devices like the Joy-Con controllers are being picked up by the browser through the Gamepad API, which albeit having a lacklustre mapping configuration, will improve surely for our next revision!

**What does this mean for developers?**

Gamepad support is good, use it. Mappings are getting more consistent but some controllers may have unexpected layouts. By default you can use an expected layout that will mostly work for most controllers but it is important to provide the ability to remap buttons and axes for the comfort of your users.

Feel free to send us any reports on how your gamepad of choice is behaving in the Samsung Internet browser or BETA.

Tagged in [Virtual Reality](https://medium.com/tag/virtual-reality), [Internet](https://medium.com/tag/internet), [Games](https://medium.com/tag/games), [Videogames](https://medium.com/tag/videogames), [Web Development](https://medium.com/tag/web-development)

By [Diego González](https://medium.com/@diekus) on [March 16, 2017](https://medium.com/p/5ba866770003).

[Read this article on Medium](https://medium.com/@diekus/the-gamepad-reloaded-5ba866770003)
