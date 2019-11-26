---
permalink: "/the-secret-to-devtools-for-mobile-web-developers/"
cover: img.jpg
title: "The “Secret” to DevTools for Mobile Web developers"
description: "A special guest post from Samsung Internet engineering group team member, Adil!"
category: "Web Development"
img: https://cdn-images-1.medium.com/max/1200/1*Nqo4AywwVNvZNWSsBHpB8g.png
author: Adil Aliyev
authorImg: https://cdn-images-1.medium.com/fit/c/120/120/0*KKBun-2tis_5T1XA.jpg
tags: [JavaScript, Devtools, Samsung Internet, Web Development, Mobile Web]
---

# “Secret DevTools recipe” for Mobile Web developers

The “Secret” to DevTools for Mobile Web developers

*A special guest post from Samsung Internet engineering group team member, Adil!*

Developer tools provided by browsers are the constant companion of many web developers. We can use them to inspect our code, tell us about errors and run various audits. DevTools in Chrome can also provide a way for you to adjust your display size to match your mobile device. This feature is used by many developers frequently. One of the helpful points of this feature is that you can choose among popular mobile devices, and DevTools will adjust the screen size to exactly the same as that device. This is how we can test and debug web pages with the size of the mobile device.

![Chrome DevTools in mobile device mode](https://cdn-images-1.medium.com/max/2000/1*Nqo4AywwVNvZNWSsBHpB8g.png)*Chrome DevTools in mobile device mode*

Chrome DevTools is not just for inspecting DOM elements and CSS attributes. We can use it for examination of network requests and access storage-related parameters as well. Moreover, you can run JavaScript code directly and see the messages from the console. Isn’t it amazing?

Now, assume you have a mobile phone in your hand, and specific issues happen, particularly on this device, and you are unable to reproduce the problem using DevTools and the method illustrated above. Or, imagine a situation where your mobile browser has specific API’s, and you want to debug them. In this case, you need DevTools on your mobile phone.

What you may not realize is that you can use desktop DevTools for debugging Blink-based browsers (such as Samsung Internet) on your Android devices as well.

To do so, first, enable “USB Debugging” on your Android device and connect it to your computer.

![](https://cdn-images-1.medium.com/max/2000/1*mPcgDNhNG4w8aTR4B3mr5g.png)

Now for the exciting part. Access the URL “chrome://inspect” and then click on “Devices.” Hooray! You will see the list of active browser sessions from your mobile device.

Click on “Inspect,” and you will see the browser view on your computer. Now you can do any manipulations using DevTools.

![](https://cdn-images-1.medium.com/max/2000/1*OR7ebEIDEpNZ-p3Z9XWFWg.png)

You can access the list of mobile devices also using Remote Devices from the DevTools menu.

Hopefully, you will enjoy using this technique to make debugging on your mobile simpler!



By Adil Aliyev on November 29, 2018.

[Canonical link](https://medium.com/samsung-internet-dev/secret-devtools-recipe-for-mobile-web-developers-3b8a75bfee4b)
