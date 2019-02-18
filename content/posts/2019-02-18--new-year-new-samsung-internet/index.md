---
cover: img.jpg
title: "New Year, New Samsung Internet"
description: "We’re excited to be rolling out a big update to our Samsung Internet Beta channel. Along with updating our engine to Chromium 67, our new 9.2 Beta will be the first to feature the OneUI design language. Announced at last year’s Samsung Developer Conference, OneUI is a new smartphone UI that puts a focus on ease of use. As part of the move to OneUI, Samsung Internet is also updating its brand and icon, and these changes will be rolling out slowly wherever you see the Samsung Internet brand. The new icon fits together with the other Samsung OneUI app icons but also maintains our brand consistency."
category: Mobile Web
img: https://cdn-images-1.medium.com/max/1200/1*V108zR40jhDEXcIrJ3xN_Q.jpeg
author: Daniel Appelquist
authorImg: undefined
tags: [Mobile Web, Browsers, Samsung, Antitracking]
---

# New Year, New Samsung Internet

Planet Web: Beta 9.2 introduces our spiffy new branding.

We’re excited to be rolling out a big update to our [Samsung Internet Beta](http://galaxy.store/internetbeta) channel. Along with updating our engine to Chromium 67, our new 9.2 Beta will be the first to feature the **OneUI** design language. Announced at last year’s Samsung Developer Conference, OneUI is a [new smartphone UI](https://www.samsung.com/global/galaxy/apps/one-ui/) that puts a focus on ease of use. As part of the move to OneUI, Samsung Internet is also updating its brand and icon, and these changes will be rolling out slowly wherever you see the Samsung Internet brand. The new icon fits together with the other Samsung OneUI app icons but also maintains our brand consistency.

The new UI shifts a lot of the user-accessible menus and functions to the bottom of the screen, making them more convenient for one-handed operation. There’s also compatibility with the very anticipated “**Night mode**”, which sets the UI on the system wide apps to a dark theme. You can see the updated UI below!

![Samsung Internet in the standard (left) and dark ‘Night mode’ OneUI theme.](https://cdn-images-1.medium.com/max/5968/1*aFzHq16pB99qZ-75gLHPww.jpeg)*Samsung Internet in the standard (left) and dark ‘Night mode’ OneUI theme.*

As a related additional feature, you can turn on “**Dark mode**” for your websites if you are using the OneUI “Night mode”. This feature comes really handy when you are browsing the web at night or in dark places. What it does is that it automatically changes the displayed webpage and renders with a dark theme. As an example, look at the image below of our about page to see how it changes once this option is activated in the settings.

![Difference in presenting a page when using “Dark mode” in Samsung Internet.](https://cdn-images-1.medium.com/max/5968/1*fAElQLTAfHTwyy3FMLoXEg.jpeg)*Difference in presenting a page when using “Dark mode” in Samsung Internet.*

Progressive Web Apps are going to the next level in 9.2 with the introduction of **WebAPK**. WebAPK means that when your PWA is installed the browser will gernate an app APK and install it so that it will appear in the app launcher and be seen by the OS as a more fully-fledged application. More information on WebAPK may be found in [Google’s developer pages](https://developers.google.com/web/fundamentals/integration/webapks).

Also shipping with 9.2 we are excited to debut our experimental new tracking protection technology: **Smart Anti-Tracking**, built in-house by our team in Bangalore.

Privacy and security of user’s data has always been one of the highest priority for Samsung Internet. Recently, cross-site tracking has been revealed as a major threat to user privacy. One of the common visible outcomes of cross-site tracking is targeted ads (where ads for things you’ve previously searched for, for example, seem to follow you around the web). However the effect of tracking can have much larger impact on user privacy as some of these trackers can rebuild majority of user’s browsing profile using the same mechanism. The Smart Anti-Tracking feature has been built to address this privacy concern.

Cross-site tracking is typically performed by third-party websites using scripts, widgets or even invisible images. Most often than not, cookies are used as the storage medium for this purpose. With Smart Anti-Tracking, we use on-device machine learning to identify third-party domains that have the capability to track users. Such domains are denied access to cookies when they appear under other websites as third-parties. By denying access to cookies, we make it harder for such third-party domains to be able to track a user across multiple sites. We also de-prioritize resource loading for such third-party tracker domains so that benign resources load faster.

Our engineer Ancil George described it like this: “we look for tracker signals or features in resource requests made, using these features the pre-trained ML model embedded in Samsung Internet infers at runtime if its a tracker domain.”

Currently you can activate Smart Anti-Tracking via the settings menu:

*Settings *➡️*Privacy and Security *➡️*Smart anti-tracking.*

We’re also keeping our industry-leading content blocking extension framework as well so you can still download and enable extensions such as Disconnect.me, Adblock Fast and Adblock Plus via the add-ons menu.

You can download this new beta [here,](http://galaxy.stire/internetbeta) and let us know what you think!



By Daniel Appelquist on February 18, 2019.

[Canonical link](https://medium.com/samsung-internet-dev/new-year-new-samsung-internet-b74f282e4429)
