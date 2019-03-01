---
title: Bringing the real world to your browser with CloseBy
category: "WoT"
cover: img.jpg
author: Peter O'Shaughnessy
authorImg: https://miro.medium.com/fit/c/240/240/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
---

### Bringing the real world to your browser with CloseBy

Imagine you’re hurrying towards your bus stop in the pouring rain (not an unlikely scenario here in London 😉). You dive under the shelter, but there’s no digital display board. How long will you have to sit and shiver there before your bus arrives?

![](https://cdn-images-1.medium.com/max/800/1*A8mGxCGHuaXZ-JKhnwMj3A.jpeg)

Photo by [renee_mcgurk ](https://www.flickr.com/photos/51018933@N08/6996313246)— [CC by 2.0](https://creativecommons.org/licenses/by/2.0/)

On previous occasions, you’d resorted to texting a special number displayed on a poster there — and paying for the privilege! But this time, there’s no need. A silent notification is right there on your phone, with a direct link to view the bus times for your specific location. A single tap and — hey that’s pretty good — only 2 minutes to wait for the bus!

> “Walk up and use anything”

This is a [real life example](http://marketingland.com/london-buses-test-first-consumer-experience-physical-web-170529) of [Physical Web](https://google.github.io/physical-web/), an open source project initiated by Google. It boils down to a simple concept: Bluetooth beacons are placed at physical locations and they broadcast relevant URLs. When you’re in the vicinity, your phone detects this and displays details about the webpage, allowing you to access it directly if you wish.

There are [many possible uses](https://blog.beaconstac.com/2016/03/8-ways-eddystone-and-the-physical-web-can-make-your-daily-life-easier/). Imagine you’re arriving at a conference and you need to check the schedule to decide which talk to attend first. No need to dig out the conference URL — it’s being broadcast right there at the front door. Or imagine you want to borrow a car from your car sharing scheme. No need to remember your membership card; once you walk up to the car, a notification is right there on your phone prompting you to access it.

In essence, it’s all about removing friction. _“Everything should be just a tap away”_.

![](https://cdn-images-1.medium.com/max/800/1*vfoQvsj35QbBWQRw8IRKaA.png)

Image from the [Physical Web docs on Github](https://github.com/google/physical-web/blob/master/documentation/introduction.md)

#### CloseBy

Now we are bringing the Physical Web to Samsung’s web browser, [Samsung Internet](http://developer.samsung.com/internet). There is no need for a separate app download; it’s an extension provided directly with the browser, called _CloseBy_.

![](https://cdn-images-1.medium.com/max/800/1*PCTWRAzgrrKoFe4SSXnJAA.png)

Diego and I have been known to carry around our own beacons, to help you spot us (or run away from us) at conferences!

We introduced an early preview of CloseBy with our first [Samsung Internet v5 beta](https://medium.com/samsung-internet-dev/beta-d0f988fb77fb). Now it’s available for a much wider audience with our [newly opened up beta channel](https://medium.com/samsung-internet-dev/samsung-internet-beta-now-available-without-sign-up-e0d5d4010838).

To enable/disable and see the list of beacons around you, you can visit CloseBy via the Extensions menu:

![](https://cdn-images-1.medium.com/max/800/1*twtYnQrRxdzgyzBh8wVbjQ.png)

Samsung Internet v5.4 Extensions menu

But really, you shouldn’t need to do anything manually. CloseBy is designed to identify beacons automatically and display the link ready for if/when you want it:

![](https://cdn-images-1.medium.com/max/800/1*2XyCKZ4ZI8IZydMnUVW7YQ.png)

Hooray, a notification like this means I must be nearby! Maybe you can catch me with a pokeball?

If you would like to try it out with your own beacon, there are many manufacturers out there and it should be easy to search for sites that sell them. You can also use an app like [Beacon Toy](https://play.google.com/store/apps/details?id=com.uriio&hl=en_GB) on Android in order to turn a phone into a beacon!

#### Peace and privacy

It’s important to note that Physical Web is designed to be unobtrusive:

Upon receiving a URL from the Physical Web object, your phone sends that up to our servers in order to find the title of the page and determine whether to show it. However, no personal information is included and our servers do not collect any information about users at all. As my colleagues have [shared previously](https://medium.com/samsung-internet-dev/many-browsers-one-web-21730352afbc#c006), privacy is a brand promise for Samsung Internet and we take it very seriously.

* * *

I’m excited about how the Physical Web can help to bridge the real world and the digital world. As the ecosystem grows, imagine how useful it could be for learning about — and interacting with — the world around us!

> “Every important place, thing and device in our surroundings can have its own website.”  
>  — [bkon.com](https://bkon.com/resources/physical-web/)

If you would like to [give CloseBy a try](https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser.beta&hl=en_GB), please let us know your feedback via [Twitter](https://twitter.com/samsunginternet), [Github](https://github.com/samsunginternet/support/) or [email](mailto:browser@samsung.com)!

**_Update:_** _I since gave a presentation at Nuremberg Web Week with the title “Bringing the Real World to Your Browser” — about connecting your browser to the things around you, using Physical Web, Web Bluetooth and more. If you’d like to see the slides,_ [_they’re here_](https://docs.google.com/presentation/d/1WYeluRHM-qtQSAbWtHb2chIKSVmxo-w6ADhY6bC1J1s/edit?usp=sharing)_!_

Tagged in [Beacons](https://medium.com/tag/beacons), [IoT](https://medium.com/tag/iot), [Physical Web](https://medium.com/tag/physical-web), [Samsung Internet](https://medium.com/tag/samsung-internet), [Browsers](https://medium.com/tag/browsers)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [March 13, 2017](https://medium.com/p/830cd162547e).

[Read this article on Medium](https://medium.com/@poshaughnessy/bringing-the-real-world-to-your-browser-with-closeby-830cd162547e)
