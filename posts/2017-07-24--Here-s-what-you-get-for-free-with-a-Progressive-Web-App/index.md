---
permalink: "/Here-s-what-you-get-for-free-with-a-Progressive-Web-App/"
title: Here’s what you get for free with a Progressive Web App
category: "PWA"
cover: img.jpg
author: Peter O'Shaughnessy
authorImg: https://miro.medium.com/fit/c/240/240/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
---

### Here’s what you get for free with a Progressive Web App

#### Add to Home Screen banners, special icons, search engine placements and more…

After writing earlier about [how you’re not forced to use all the components of Progressive Web Apps together](https://medium.com/samsung-internet-dev/progressive-web-apps-are-a-toolkit-not-a-recipe-b2fd68613de5), here’s the counterpoint: if you _do_ follow the PWA recipe, there’s a bunch of added benefits you’ll get from browsers and search engines.

![](https://cdn-images-1.medium.com/max/800/1*U01ubQ9TrE1Zow5pkGHTfw.png)

[The officially unofficial PWA logo](https://medium.com/samsung-internet-dev/we-now-have-a-community-approved-progressive-web-apps-logo-823f212f57c9)

There are [further details here](https://infrequently.org/2016/09/what-exactly-makes-something-a-progressive-web-app/), but in general the base requirements for being recognised as a PWA are:

*   [HTTPS](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https), so it’s served securely.
*   A [service worker](https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API), so your site can still be served from a cache while offline.
*   A [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) with a minimal set of properties and appropriate icons, so your site can be launched like a native app from the home screen.

These are all good and useful features in themselves, but if you combine them together, i.e. make a PWA, you can expect some added bonuses too:

### Add to Home Screen banners

![](https://cdn-images-1.medium.com/max/800/1*bZR6Hin0DFym9SHwz-pF1g.png)

The Add To Home Screen banner in Samsung Internet

Your users _could_ add your web app to their home screen manually, via their mobile browser menu. However, many of them won’t know about or think about this, unless they’re prompted. So browsers like Chrome and Samsung Internet dynamically display a banner like the one above, when they determine:

*   It’s a PWA (criteria above).
*   That the user has found it engaging.

There’s no standard definition for the second point, but roughly speaking it will be when the user makes a return visit within a certain period of time.

### Add To Home Screen shortcuts

![](https://cdn-images-1.medium.com/max/800/1*eZqWrSWi2JuIL60UtODKxA.png)

PWA plus icon a.k.a. ‘ambient badging’ in Samsung Internet

Samsung Internet v5.4 [introduced](https://medium.com/samsung-internet-dev/announcing-samsung-internet-v5-4-stable-fd941e0dcd58#f649) a special ‘+’ icon which dynamically displays in the URL bar (replacing the usual bookmark star icon) when you’re viewing a PWA. Tapping on it provides the ability to quickly add it to your home screen (as well as your bookmarks).

This feature is also known as “ambient badging” and Opera has something very similar [in their Labs build](https://dev.opera.com/blog/pwa-badge-pop/).

As well as the base PWA requirements above, the ‘+’ icon requires that your web app will be displayed as a standalone app, without the URL bar. This means your Web App Manifest ‘display’ property will need to be set to ‘standalone’ or ‘fullscreen’ ([more info here](https://medium.com/samsung-internet-dev/what-does-it-mean-to-be-an-app-ace43eb6b94d)). Unlike the banner though, this one doesn’t have a user engagement check — it will show up from the first visit onwards.

### A DeX app

The ‘+’ icon isn’t just a mobile feature. [Samsung DeX also brings this same ability to the desktop](https://medium.com/samsung-internet-dev/samsung-dex-brings-a-new-dimension-to-the-mobile-web-f80d7edcab29#0bd0). So if you build a responsive PWA, you’ll get a desktop app for free — one that can launch in a standalone window, from a desktop icon:

### A Chromebook app

**Update:** Thanks to [Trond Kjetil Bremnes](https://medium.com/u/28b2b6645d72) for [the comment](https://medium.com/@tkbremnes/youll-also-be-getting-a-desktop-experience-on-chromebooks-not-too-dissimilar-to-the-experience-on-cea7b949d188?source=linkShare-27616666fa21-1500973016). Chrome OS is also introducing similar desktop support for PWAs. You can be prompted to “Add to shelf”. PWAs can then be launched in a standalone window:

### An actual Android app

This one is currently behind a flag, but Chrome’s ‘new and improved’ Add to Home Screen [will actually create an Android app wrapper for you](https://developers.google.com/web/updates/2017/02/improved-add-to-home-screen). This means your PWA will show up in the Android OS Apps screen and Apps settings, just like other native apps:

![](https://cdn-images-1.medium.com/max/800/1*XCwW9Dus6MilTEdilY0O6w.png)

My [Snapwat PWA](https://snapw.at/) showing up in the actual apps list on my Samsung S7

_Note:_ If your website _isn’t_ a PWA, in Android O, your home screen icon is set to be displayed as a lowly Chrome bookmark!

![](https://cdn-images-1.medium.com/max/800/1*wDymlgsts-IX4xKXXn-kgw.jpeg)

Chrome bookmark icons in Android O — screenshot from [Jonathan Cousins](https://twitter.com/evolutionxbox/status/886345504514342913)

Apparently this is the case [even if you’ve defined your own icon via the Web App Manifest](https://twitter.com/poshaughnessy/status/880744604865351680). So if you want your own unsullied icon, it looks like a PWA is the way to go!

### An actual Windows app — and Bing listing

PWAs can also be automatically wrapped as Windows apps for free. Plus, receive placements in the Windows Store and Bing search results:

![](https://cdn-images-1.medium.com/max/800/1*jEvZSGgOzS7wkawNCuQcrQ.jpeg)

Windows Store and Bing PWA placements — from [Aaron Gustafson’s “Progressive Web Apps and the Windows Ecosystem”](https://www.aaron-gustafson.com/notebook/progressive-web-apps-and-the-windows-ecosystem/)

As long as your PWA is indexable on the Web (if you haven’t decided to block their bot with robots.txt) and it passes Microsoft’s quality and popularity checks, it will be [“passively ingested”](https://www.aaron-gustafson.com/notebook/progressive-web-apps-and-the-windows-ecosystem/) into a Windows app container (similar to Microsoft’s ‘Hosted Apps’). This is [starting to happen already](https://twitter.com/AaronGustafson/status/888434255478616065), behind a flag in the Windows Insider version.

This is another great example of PWAs being treated as first class citizens, alongside native apps. I’m sure there will be other examples of app store and search results coming in the future too…

* * *

So there you go: build one PWA, get a bunch of extra appy goodness for free. (If I’ve missed anything, please let me know in the comments!) Not bad for [_“just a handful of new features for the web”_](https://medium.com/samsung-internet-dev/progressive-web-apps-are-a-toolkit-not-a-recipe-b2fd68613de5)_,_ hey?

Tagged in [Web Development](https://medium.com/tag/web-development), [Progressive Web App](https://medium.com/tag/progressive-web-app), [Web](https://medium.com/tag/web), [Mobile](https://medium.com/tag/mobile)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [July 24, 2017](https://medium.com/p/74b7ac5bdb3a).

[Read this article on Medium](https://medium.com/@poshaughnessy/heres-what-you-get-for-free-with-a-progressive-web-app-74b7ac5bdb3a)
