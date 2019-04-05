---
cover: img.jpg
title: "Progressive Web Applications & Internet of Things (part 1 of 4)"
description: "The Internet of Things is a big title for what seems to be a tiny problem for the non-tech person. So What’s the problem?"
category: Raspberry Pi
img: https://cdn-images-1.medium.com/max/1200/1*hZIdfxDnY6jiU82sq2B7dQ.png
author: Nicholas Herriott
authorImg: https://miro.medium.com/fit/c/120/120/0*NK2JRFdcvkOTlVIz.
tags: [Raspberry Pi, IoT, Progressive Web App, Nodejs, Hacking]
---

# Progressive Web Applications & Internet of Things (part 1 of 4)



The Internet of Things is a big title for what seems to be a tiny problem for the non-tech person. So What’s the problem?

The team at Samsung Research UK often build real world physical things that interact with our devices via web applications. This helps us to make quick prototypes that work in the lab and create working demonstrations for talks. One of the main stumbling blocks for me was how to ‘on board’ or ‘setup’ your internet of things ([IoT](https://en.wikipedia.org/wiki/Internet_of_things)) equipment. In some cases your IoT ‘thing’ will have no screen, keyboard or even enough buttons to allow typical connect onto a WiFi network.

### What are the current options for connecting IoT ‘Things’

One solution round this is to have your IoT ‘thing’ present a WiFi access point and your mobile phone connect to it. Once your mobile device is connected to your IoT ‘thing’ access point it can pass credentials of your local WiFi access point . This is normally done by an ‘app’ — hence you now need some [Android](https://en.wikipedia.org/wiki/Android_(operating_system)) or [IOS](https://en.wikipedia.org/wiki/IOS) application to be written, deployed, maintained and so on! Furthermore, the solution is clunky at best.

There isn’t a seamless transition from your setup phase to using the IoT ‘Thing’. Other potential issues could be:

* you update your WiFi router settings;

* your WiFi router is upgraded; or

* you change your broadband provider.

In most internet connect products you’ll have a special ‘reset’ button to use when this happens, but this also requires the person resetting the device to remember where that is and how it works! So is there an alternative (and potentially more seamless) way to access and setup IoT ‘Things’?

### Introducing Bluetooth Low Energy for Connecting IoT Devices?

We now have the following challenge to overcome:

1. How do we pass details of your WiFi access point before the IoT ‘thing’ is able to connect to your WiFi access point.

1. How do we make the whole process less painful? Seamless! Slick! Repeatable!

1. Can we simplify the need to support multiple applications on different operating systems?

To address the challenges, our team have started to experiment with Bluetooth Low Energy ([BLE](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy)) as a secondary way to connect to our IoT device. Hence, to access our IoT ‘thing’ we use a Progressive Web Application ([PWA](https://de.wikipedia.org/wiki/Progressive_Web_App)) using [Web Bluetooth](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API).

### What are the Benefits of Using Bluetooth Low Energy to Connect Devices??

The biggest benefit for using Bluetooth Low Energy within a PWA is that this can then act as a single starting point for the user experience journey. The person who is setting up a specific device, visits a specific URL and sees a seamless experience of ‘setup’, ‘on boarding’ and ‘usage’ of the IoT ‘Thing’. No download and app install required! 😃

Ok! So let’s see what is involved in getting a demo up and running from start to finish. This post is the first in a series where I will guide you through building a small IoT project that uses BLE paired with a PWA to connect, setup and use an IoT Light. In this process, we will take the following steps:

* build a simple IoT light;

* install a BLE service to provide WiFi setup;

* to create a PWA to allow a mobile phone to setup your WiFi credentials;

* setup a web node.js web server to serve up our PWA for mobile; and

* orchestrate the deployment of our application.

There’s lots to cover, so let’s get cracking! So lets get cracking! This blog will give the system overview and details of our IoT light.

### System Overview

To begin, let’s take a high level look at how our system will interact. This first diagram (Fig: 1) shows our mobile phone connecting to a public URL to load the PWA:

1. The phones browser connects to a known IoT ‘Thing’ by looking for a Generic Attributes [(GATT](https://www.bluetooth.com/specifications/gatt/generic-attributes-overview)) name over BLE. In this case our IoT ‘Thing’ is a connected gateway.

1. The IoT gateway returns with a list of Service Set ID [(SSID](https://en.wikipedia.org/wiki/Service_set_(802.11_network)#Service_Set_ID_(SSID))’s) available that are visible to it.

![System Overview (part 1)](https://cdn-images-1.medium.com/max/2000/1*Q1Ms6AkZSqycMJZENMwOHA.png)*System Overview (part 1)*

At this point our PWA app needs to allow a person to select from a drop down selection the appropriate SSID to use and input the password as shown in the ‘System Overview (part 1)’.

4. Our selection is presented in the browser view for the person to select.

5. The IoT ‘Thing’ uses the SSID and password to connect to the local WiFi access point.

6. A redirect can be given via the IoT Gateway to route the browser to an active web interface to our IoT equipment. In the example we will build, it will do nothing and allow the user to write this code and/or redirect. Our example will simply switch the light on or off after connection is established.

![System Overview (part 2)](https://cdn-images-1.medium.com/max/2000/1*KE87V12QVf3ZvRFR80TNIA.png)*System Overview (part 2)*

The IoT ‘Thing’ we will use and build is a [raspberry pi](https://www.raspberrypi.org/products/raspberry-pi-zero-w/) zero connected to a [blinkt LED](https://shop.pimoroni.com/products/blinkt) light for simplicity. So materials will be:

* [blinkt LED](https://shop.pimoroni.com/products/blinkt) (£5.50)

* [Raspberry Pi Zero](https://shop.pimoroni.de/collections/raspberry-pi/products/raspberry-pi-zero-w?src=raspberrypi) W (£10.35)

* [Bulk Head ligh](https://www.ebay.co.uk/itm/LED-Bulkhead-Wall-Light-Black-White-IP65-5-Watt-Compact-Utility-Outdoor/191834461717?hash=item2caa399615:m:mViq6fTepeEMi5ZT4OqF4nQ&var=490870675530)t. (£8.90)

* USB charger with micro USB connection.

* [Some jumper wires.](https://www.ebay.de/i/322893271547?chn=ps) (apprx 2.00)

We are going to connect our blinkt light to the raspberry pi as follows. Pin 4 on our header board goes to +5v, pin 6 is our ground (-ve), pin 16 is our data pin and pin 18 is our clock. I’ve made this explicit as the LED will be in your bulk head fitting, and the raspberry pi zero will be in the electrical connections part of the light. So your jumper wires will map those pins through into the main section of the bulk head light and into your blinkt LED’s. (see below)

![](https://cdn-images-1.medium.com/max/2000/1*mVZOUu6QsWcZ22sKa3SKvg.png)

So far we have an idea of the challenges, the ‘what’ we are trying to build and the hardware we will use to build it. We have described the electrical connections and the list of components.

### How To Build

For our light example we used a simple bulk head light fitting from homebase, you can buy from eBay which I’ve added in our parts link. The light we assembled on a small wooden board.

![Assembled Light On Backing Board](https://cdn-images-1.medium.com/max/8064/1*WO8BzXL0nVc1miOk6FMKtg.jpeg)*Assembled Light On Backing Board*

With the light open you can see how we simply attached our blinkt light with a tie wrap onto the case.

![Light open with component view](https://cdn-images-1.medium.com/max/2560/1*gyndFQ-o-M6dTT18hJ4rOg.jpeg)*Light open with component view*

The most important part of the building of the light is where to put your microcontroller, in our case it’s the Raspberry Pi zero (W) we used. The light in question has a small void where typically the light will have electrical connections.

I’ve removed this and placed the Raspberry Pi in this compartment. I’ve also left a long USB lead so we can plug the light into a USB charger.

![Rear of Light with Raspberry Pi shown](https://cdn-images-1.medium.com/max/2560/1*-DboEsCmw3ZXCTucAnTSTw.jpeg)*Rear of Light with Raspberry Pi shown*

A small amount of cable wrap was used to keep cables neat and together to pass through the bulkhead hole. You will notice we have used jumper wires just as a temporary way for connections, I recommend you make this more permanent if you are making an IoT light that you will actually use long term! :-)

### The LED Light Software

The software to test your light is on the Samsung dev portal and the repo is the [SamsungIoTblinkt](https://github.com/SamsungInternet/SamsungIoTblinkt). This contains the whole [node.js](https://nodejs.org/en/) project and a readme which explains setup. You will of course need your raspberry pi running and a terminal screen open to setup your device. But to install simply do:

    /> mkdir samsung      // Create your project directory
    /> git clone https://github.com/nherriot/SamsungIoTblinkt.git
    /> cd ~ samsung/SamsungIoTblinkt/
    /> npm install

Now you are ready to try your light. There is an examples directory which contains a number of test programs, to try switching on and off do:

    pi@raspberrypi:~/samsung/SamsungIoTblinkt/examples $ node on-off.js 
    Switching on all lights
    *** Switching Lights On ***
    Switching on all lights
    *** Switching Lights Off ***

![Image of Light Off](https://cdn-images-1.medium.com/max/2560/1*liDKvZI1nz7gaaD7JC7pkg.jpeg)*Image of Light Off*

Running the test program you should see the blinkt going from off to on and look something like this:

![Image of Light On](https://cdn-images-1.medium.com/max/2560/1*F6C4XSbAxiLonqSa-UnXtQ.jpeg)*Image of Light On*

This looks slightly harsh, but with the diffuser on the light is quite bright and looks not bad!

![Light and Diffuser](https://cdn-images-1.medium.com/max/2560/1*JGmTZZG_204TFLdIvddSGA.jpeg)*Light and Diffuser*

There are also a number of example programs available for you to try out:
> pi@raspberrypi:~/samsung/SamsungIoTblinkt/examples $ ls -l
total 24
-rw-r — r — 1 pi pi 1703 Jul 8 2018 movingLed.js
-rw-r — r — 1 pi pi 1028 Jul 9 2018 on-off.js
-rw-r — r — 1 pi pi 2064 Jul 9 2018 rainbow.js
-rw-r — r — 1 pi pi 2635 Feb 2 23:59 rainbow-on-off.js
-rw-r — r — 1 pi pi 2876 Sep 3 2018 single_leds.js
-rw-r — r — 1 pi pi 3208 Jul 10 2018 single-thing.js

The simplest program to study is the on/off program

    var Blinkt = require("node-blinkt");
    // Create a blinkt object and set the lights onto a known OFF state
    leds = new Blinkt();
    leds.setup();
    leds.clearAll();
    leds.sendUpdate();
    let onOff = false;       // A variable to set when a light is on or off

    function switchOnOff() {
     console.log('Switching on all lights');
     if (onOff){
      console.log('*** Switching Lights Off ***');
      leds.clearAll();
      onOff = false;
     } else {
      console.log('*** Switching Lights On ***');
      leds.setAllPixels(156, 156, 156, 0.9);
      onOff = true;
     }
     leds.sendUpdate();
    }

    function switchOff() {
     console.log('Switching off all lights')
     leds.clearAll();
     leds.sendUpdate();
    }

    // Set an interval timer which switches the LED lights on every 5 seconds
    const intervalObjOnOff = setInterval(switchOnOff, 5000);

    // A hack to listen on stdin that will never come to keep our process alive.
    process.stdin.resume();

The setting of all pixels on the blinkt light is done with:

    leds.setAllPixels(156, 156, 156, 0.9);

The setAllPixels takes a ‘Red’, ‘Green’ and ‘Blue’ value which can be from ‘0’ which is off, and 255 which is the maximum value for that color. The final value is the intensity, which can be from 1 to 0 in 0.1 steps. There are other functions which will allow you to set individual pixels of the light which are in the example files.

To activate this we use:

    leds.sendUpdate();

With this type of LED light, you set your pixels then you trigger to activate the new color. So kind of like loading the settings into a buffer on the LED, then telling the LED to update to the new color scheme.

We have a small timer function at the end of the program which continually switches the lights on and off every 5 seconds:

    const intervalObjOnOff = setInterval(switchOnOff, 5000);

That’s about it! We are ready now to move on to Bluetooth and Linux services! Next week we will look at setting up the software on the raspberry pi to create our BLE service and to control the lights. For people who can’t wait that long we will be following the software from our [repository here](https://github.com/SamsungInternet/SamsungBluetoothWiFiManager).

Any comments and questions please let me know.😃



By undefined on April 2, 2019.

[Canonical link](https://medium.com/@nicholas.herriot/progressive-web-applications-internet-of-things-part-1-of-4-a9eff5e38f3c)
