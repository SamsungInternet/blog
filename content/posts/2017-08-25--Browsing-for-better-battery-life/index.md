---
title: Browsing for better battery life
category: "Browser Features"
cover: img.jpg
author: YONGHA LEE
---

### **Browsing for better battery life**

As [many](http://www.phonearena.com/news/Survey-shows-battery-life-to-be-the-single-main-gripe-of-todays-mobile-phone-user_id49818) [surveys](https://www.theguardian.com/technology/2014/may/21/your-smartphones-best-app-battery-life-say-89-of-britons) [have](http://www.smh.com.au/technology/technology-news/battery-life-the-big-issue-for-mobile-phone-users-20170303-guqbjh.html) [shown](http://www.ctvnews.ca/sci-tech/battery-life-trumps-all-other-smartphone-features-for-consumers-survey-1.1821084), the single most important feature for smartphone users is _battery life_. Web browsing is one of the ways phones are frequently used, so it is important that the mobile browser uses the battery efficiently.

We’ve managed to cut down power consumption of the browser to make the battery last **19% longer** just by removing adverts.

Unwanted adverts can be a major cause of battery drain in the browser. They can make unexpected network requests or use battery-draining graphics. If you use Samsung Internet, you can surf websites longer using a special feature: content blocking! Content blocking extensions, [usable today in Samsung Internet](https://medium.com/samsung-internet-dev/human-friendly-colours-using-hsl-4944bcdb6e27), allow you to browse the web without unwanted content such as adverts cluttering your screen.

![](https://cdn-images-1.medium.com/max/800/1*Pc7U_IClh_iH3woV39rwpg.png)

Content Blocker settings menu in Samsung Internet v6.2

We have been conducting research into the relationship between power consumption and this feature. And we would like to share the results of our research with you.

Our testing method was as follows:

First of all, we recorded the 30 [Alexa top sites](http://www.alexa.com/topsites) using [WPR (web-page-replay tool)](https://github.com/chromium/web-page-replay), to help reduce network and content variation.

Then, we hooked a stock Galaxy S8+ up to a power monitor and performed the following test cycle on the Samsung Internet (6.0.00–56): for each website, we navigated to the page and selected 4 links inside it, then scrolled up and down on each link.

These tests were measured using the [Telemetry tool](https://catapult.gsrc.io/telemetry) which is part of the Chromium open source project.

![](https://cdn-images-1.medium.com/max/800/1*btD4N-cM76qpoKYK0VnGyA.jpeg)

> Our preliminary results show a 19% gain.

Under these lab conditions, our preliminary results show a **19% gain** in usage time of device, compared to no content blocking. In other words, users can use their device almost **an hour and a half longer**. (For reference, we calculated this usage time increase based on continual use of Samsung Internet).

So if you use Samsung Internet with a content blocking extension, not only can you surf the web without seeing annoying adverts, but you can use your device for much longer!

The content blocking extensions are also available in Progressive Web Apps, so if you use apps like [Twitter Lite,](https://mobile.twitter.com) you can save power there too.

If you would like to enable content blocking, see the [instructions here](http://www.samsung.com/global/galaxy/apps/samsung-internet/) under ‘How to use extensions’. We hope you enjoy your better battery life!

Tagged in [Ad Blocking](https://medium.com/tag/ad-blocking), [Web Development](https://medium.com/tag/web-development), [Web](https://medium.com/tag/web), [Battery](https://medium.com/tag/battery), [Power](https://medium.com/tag/power)

By [YONGHA LEE](https://medium.com/@yongha78.lee) on [August 25, 2017](https://medium.com/p/e9eb2ef88afc).

[Read this article on Medium](https://medium.com/@yongha78.lee/browsing-for-better-battery-life-e9eb2ef88afc)
