---
title:  Bringing AR to the Web
category: "Web XR"
cover: img.jpg
author: Winston Chen
authorImg: https://miro.medium.com/fit/c/240/240/1*XJ8E-BWim09Gjsr7MckJSQ.jpeg
---

### Bringing AR to the Web

![](https://cdn-images-1.medium.com/max/800/1*myxAAbmeGphyOWauXbyTaA.jpeg)

The day you can interact with the world through the web is a lot closer than you think.

Today, QR codes are widely used to navigate to a web page on your web browser by scanning a barcode in the real world. QR codes hold text information with URLs being the most popular type of information, because scanning a QR code is easier and quicker than typing a URL into your browser. This is especially true for URLs that contain foreign characters you may not be familiar with. QR codes can be placed strategically around tourist attractions and other public places to help people discover relevant information on the web. [Samsung Internet has a built in QR code reader](https://medium.com/samsung-internet-dev/samsung-internets-qr-code-scanner-what-s-the-deal-20becb76f057#.15q4elot3).

[CloseBy](https://medium.com/samsung-internet-dev/bringing-the-real-world-to-your-browser-with-closeby-830cd162547e#.q37ngar07) makes the discovery of information even more seamless. CloseBy enables a bluetooth beacon based interaction with the real world right from your Samsung Internet Browser. This will allow you to find out more information about your environment.

QR codes and CloseBy are great pieces of technology, but both are very limited. QR codes can only detect matrix barcodes and display limited information. CloseBy requires setting up bluetooth beacons and display limited information as well. AR will enable more complex interaction with the world and display more complex information. For example, at a museum, instead of walking up to a QR code or bluetooth beacon to find out information about a dinosaur fossil on display, you can just aim your camera at the fossil. Then the AR application will detect the fossil and instantly get information about the dinosaur, including a live rendering of the dinosaur.

### The state of AR on the web

Currently, there is no native support for AR on the Samsung Internet Browser, but the browser has all the necessary tools to demonstrate the possibilities of AR on the web. There are several web based AR examples, including this [threex.webar](https://github.com/jeromeetienne/threex.webar) project, which I used as a starting point to create my own AR examples. The results are shown below.

![](https://cdn-images-1.medium.com/max/800/1*XAQPJVKlgGe-u8NoLPxbvQ.gif)

Samsung Logo (png)

![](https://cdn-images-1.medium.com/max/800/1*kkzuHek42Nm0lSIuCtSZVA.gif)

Gear 360 Camera

### Components of the demos

1\. Grabbing the rear view camera

Most modern web browsers already have an [API](https://webrtc.org/) to fetch both the rear view camera and the front facing camera. HTML5rocks has a great [article](https://www.html5rocks.com/en/tutorials/getusermedia/intro/) on grabbing the rear view camera. However, the method used in the article is deprecated and the new method can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) and [here](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices).

2\. AR markers

Object detection is still costly on the web. Facial tracking libraries exist, but the frame-rate drop is noticeable. AR makers is great alternative for detecting objects. There is a great [Javascript AR marker library](https://github.com/jcmellado/js-aruco) on the web.

3\. Three.js

[Three.js](http://threejs.org/) is a great WebGL library that is widely used in many projects including WebVR.

4\. Tying everything together

The [webar extension](https://github.com/jeromeetienne/threex.webar) provided useful insight on transposing the Three.js objects onto the ar marker. Recently, Jerome Etienne released a promising [AR library](https://github.com/jeromeetienne/AR.js) that is worth checking out to get started with AR on the web.

I also built another AR example with [tracking.js](https://trackingjs.com/). Tracking.js is a great library that has built-in camera fetching and object tracking. The demo uses the front facing camera and overlays a jester hat on a detected face.

The demos can be found [here](https://samsunginter.net/ar-demos/) and the source code can be found [here](https://github.com/SamsungInternet/ar-demos). These demos were first shown at the [ARinAction](http://arinaction.org/) event this past January, in which Samsung was one of the sponsors. You can watch Samsung’s talk on AR [here](https://www.youtube.com/watch?v=rBHQufC9Z5s) and [here](https://www.youtube.com/watch?v=5WsQy1FxVjc).

### Future of WebAR

Recently at Google IO, Google announced bringing these ideas even one step further by adding some of the AR technologies to [Chromium](https://github.com/googlevr/chromium-webar) using Tango devices.

A fundamental challenge the AR industry is facing is interoperability and lack of standards. The web is a great way to address these challenges and provide a low friction environment that most people have access to. These AR demos demonstrate that modern web browsers are capable of supporting AR. Consider adding AR features to your web platforms and work with the steadily growing WebAR (and WebVR) communities around the world. You can help move AR forward and change the way people interact with the web.

Tagged in [Qr Code](https://medium.com/tag/qr-code), [Closeby](https://medium.com/tag/closeby), [AR](https://medium.com/tag/ar), [Webar](https://medium.com/tag/webar), [Samsung Internet](https://medium.com/tag/samsung-internet)

By [Winston Chen](https://medium.com/@winstonchen1337) on [June 7, 2017](https://medium.com/p/316b8f20609f).

[Canonical link](https://medium.com/@winstonchen1337/bringing-ar-to-the-web-316b8f20609f)
