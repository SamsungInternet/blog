---
title: Let’s connect with Samsung Internet v6.4 stable!
category: "Browser Features"
cover: img.jpg
author: Peter O'Shaughnessy
authorImg: https://miro.medium.com/fit/c/240/240/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
---

### Let’s connect with Samsung Internet v6.4 stable!

#### Featuring Web Bluetooth enabled by default, special local features and security updates

![](https://cdn-images-1.medium.com/max/800/1*tmPHc_zQqF7Fqwxy4NW3vw.png)

_“Connected Thinking”_ is a [key theme for Samsung](https://www.samsungdevelopers.com/2017/09/25/plug-into-connected-thinking-at-sdc2017/), so we’re pleased to announce our latest web browser is our most “connected” yet! Following the [beta that we released in January](https://medium.com/samsung-internet-dev/try-our-download-improvements-with-samsung-internet-beta-v6-4-7aa6730b066a) — and hot on the heels of [our new Samsung Internet for Gear VR release](https://medium.com/samsung-internet-dev/dnla-comes-to-the-latest-version-of-samsung-internet-for-gear-vr-4a95f9b1605d) — v6.4 of Samsung Internet for Android is now being rolled out on our Release channel. As usual, it will gradually become available to everyone via the Play Store and Galaxy Apps Store over the next week. Here’s what’s new:

### Connected Devices

v6.4 enables [Web Bluetooth](https://samsunginter.net/docs/web-bluetooth)! We’re excited about this ability for web applications to interact with Bluetooth Low Energy peripherals via a [JavaScript API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API). Our v6.0 release introduced [Web Bluetooth](https://samsunginter.net/docs/web-bluetooth) behind a flag, but now it’s available for developers by default. (Note that this doesn’t mean that Bluetooth is switched on by default, or that you can connect to Bluetooth devices without prompting— it still requires user permission!)

I’ve personally been playing with Web Bluetooth [since 2016](https://peteroshaughnessy.com/posts/web-bluetooth-controlling-the-real-world/) when I made a [web app for controlling a drone](https://github.com/poshaughnessy/web-bluetooth-parrot-drone). Since then, we’ve made further examples that demonstrate Bluetooth integration, such as [Jo](https://medium.com/u/4cf7e97e494e)’s [Hedgehog Curling](https://medium.com/samsung-internet-dev/hedgehog-curling-with-webbluetooth-and-webvr-a9ac7fb2f752) and my [wifi-free slides controller](https://twitter.com/poshaughnessy/status/820009510173573121). Web Bluetooth is definitely a fun technology to try out, but more importantly it has serious applications for connected devices. Here’s [Martin Woolley](https://twitter.com/bluetooth_mdw), from the [Bluetooth Special Interest Group](https://twitter.com/BluetoothSIG):

> “The web browser is arguably the most important of all platforms, especially for enterprise applications. With the release of Bluetooth mesh in the summer of 2017, enterprise applications for Bluetooth are set to rise, especially in smart buildings and smart industry. Web Bluetooth puts Bluetooth APIs in the hands of web developers and I’m delighted to see Samsung support it.”

Martin has written [more about the importance of Web Bluetooth here](https://blog.bluetooth.com/the-web-bluetooth-series).

### Connecting with our users, worldwide

As we [shared in our beta announcement](https://medium.com/samsung-internet-dev/try-our-download-improvements-with-samsung-internet-beta-v6-4-7aa6730b066a), v6.4 makes it easier to monitor and control your downloads. It is now possible to rename files before downloading them. Furthermore, you can now pause, resume and cancel downloads directly in the notification panel and within the new Download History page:

![](https://cdn-images-1.medium.com/max/800/1*ietYWCSvI5VF9oxU-tTGBw.png)

The new download controls in the notification panel (left) and Download History page (right)

This is an example of the power of your feedback; the idea for these improvements came from our Samsung Internet users in India. These additions actually first featured in a special India-only release, v6.3, and we are pleased to now extend it worldwide with v6.4.

The Web is global; it provides an incredible opportunity to develop content that can be accessed by anyone around the world. But we don’t have to give everyone exactly the same experience. The download improvements are an example of how we have been introducing localised user interface features, to provide useful additions based on our users’ local context. We have already been doing this in various ways, for example providing different default search engine options for different regions. We are now pleased to share some additional, special UIs for India and China:

#### India — data saving, unified payments and cricket scores

For our users in India, from v6.3 we have introduced a new **Data Save UI**.  This works on devices having the Ultra Data Saving (UDS) feature, [a popular made-for-India innovation introduced in 2015](https://news.samsung.com/in/heres-why-a-third-of-smartphone-users-in-india-use-a-samsung-galaxy-j), which saves user data at the device level. The Data Save UI is another feature requested by our Indian users, helping to show how much data they are saving in Samsung Internet.

![](https://cdn-images-1.medium.com/max/1000/1*p2c6j9bmgHtUDm2nu32epA.png)

New Data Save UI for users in India

Another neat new feature for our users in India: support for the **Unified Payments Interface (UPI)**. UPI is a standard payment system in India which allows you to transfer money between two parties. Since v6.3, users can securely add their UPI Virtual Payment Address (VPA) to their auto-fill configuration, making it easier to complete UPI transactions online.

![](https://cdn-images-1.medium.com/max/800/1*0kOEgY8lbelV8tZ7XSyS1Q.png)

Adding UPI ID to auto-fill settings

To save you even more time, it can prompt if you would like to save your UPI ID automatically, when you enter it on a webpage. This popup also makes it possible to seamlessly launch the Samsung Pay UPI application, rather than manually switching to it from the browser:

![](https://cdn-images-1.medium.com/max/800/1*GZN3Me8OTAIWhnAXGXFpbA.png)

Save UPI ID popup

Furthermore, on a webpage that requests a UPI ID, you can now tap on the Samsung Pay icon next to the input, to create a UPI ID using Samsung Pay.

![](https://cdn-images-1.medium.com/max/800/1*zb8c8NOCE2pSeW6AiX1fwA.png)

The Samsung Pay bubble appears next to UPI ID input fields, helping users to create a UPI ID through Samsung Pay if they would like to.

Next up… as you might know, **cricket** is the most popular sport in India. So, in partnership with [India Today](https://www.indiatoday.in/) — one of India’s premier media companies — we can now provide live cricket scores! This feature is available via the optional [India Today Cricket extension which can be download separately](https://play.google.com/store/apps/details?id=com.cricketscore.IndiaTodayCricket) and enabled in the Extensions menu.

![](https://cdn-images-1.medium.com/max/1000/1*3NF-GmxBqM6_dgtZ-jfXnQ.png)

To enable cricket updates, [download the extension app](https://play.google.com/store/apps/details?id=com.cricketscore.IndiaTodayCricket) and switch on ‘Live Cricket Score’ in the Extensions menu.

#### China — content partners and a personalised news feed

In China, Samsung Internet provides a special default Start Page, with easily-accessed, local and up-to-date content from partners including [Weibo](http://ir.weibo.com/phoenix.zhtml?c=253076&p=irol-irhome), [Baidu](http://ir.baidu.com/phoenix.zhtml?c=188488&p=irol-homeprofile) and [Tencent](https://www.tencent.com/en-us/index.html). As well as Quick Access icons at the top, it features a personalised news feed. To provide more relevant content, it employs a personalisation engine from local company Toutiao, based on how you use the news feed section. Originally introduced in v5.2, we have enhanced this Start Page in version 6.4, providing further customisation options.

![](https://cdn-images-1.medium.com/max/800/1*idu3zUng8uUO91ibdCl8Yg.png)

Quick Access and News Feed in China

### Security updates

Last but not least, v6.4 includes Chromium patches to mitigate against the [type of attacks known as ‘Spectre’](https://spectreattack.com/). This includes [reducing the timing accuracy of the performance.now() function](https://chromium-review.googlesource.com/c/chromium/src/+/849993) and [adding a small ‘jitter’ to the Date timestamp](https://chromium-review.googlesource.com/c/chromium/src/+/850113).

* * *

Thank you very much to our users who have provided suggestions and feedback, worldwide. We hope that you enjoy the new v6.4 update and — in keeping with the ‘connected’ theme — please let us know if you have any comments!

Tagged in [Web Development](https://medium.com/tag/web-development), [Web](https://medium.com/tag/web), [Samsung](https://medium.com/tag/samsung), [Bluetooth](https://medium.com/tag/bluetooth), [Internet of Things](https://medium.com/tag/internet-of-things)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [February 19, 2018](https://medium.com/p/1f197d43a812).

[Read this article on Medium](https://medium.com/@poshaughnessy/lets-connect-with-samsung-internet-v6-4-stable-1f197d43a812)
