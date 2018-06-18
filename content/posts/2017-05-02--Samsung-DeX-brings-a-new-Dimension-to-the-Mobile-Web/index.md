---
title: Samsung DeX brings a new Dimension to the Mobile Web
category: "DeX"
cover: img.jpg
author: Ada Rose Cannon
---

### Samsung DeX brings a new Dimension to the Mobile Web

With the release of the popular S8 we are going to focus on one of its extra special features: Desktop Experience mode, DeX for short.

![](https://cdn-images-1.medium.com/max/800/1*mAPAUBANl5j_ckV4J_6YXQ.png)

Dex Running on a Galaxy S8

The hardware for DeX is a dock which you mount your phone in, it has all the sockets you would typically find on a laptop:

*   HDMI Output
*   2 USB Ports for keyboard, mouse and USB drives.
*   LAN Socket for Wired Internet
*   Charging Port

![](https://cdn-images-1.medium.com/max/600/1*vGFbDPRC87bvIZlIA34OsQ.jpeg)

This allows you to plug in your phone and immediately start using it for your day-to-day activities like a normal Desktop computer.

It comes with some useful apps out the box the one we are going to be focusing on is Samsung Internet, the Web Browser.

When Samsung Internet is used in DeX mode it looks and behaves like the Web Browser you would expect on a Desktop computer but it has all your bookmarks and data from the mobile phone. Allowing a seamless transition from working on the go to working at a desk!

It retains the polished UI and powerful features one would expect from Samsung Internet such as Ad-Blocking and Progressive Web Apps.

#### Progressive Web Apps in DeX Mode

Through DeX mode Progressive Web Apps such as [Twitter Lite](https://mobile.twitter.com) are coming through to the Desktop.

They are treated like first class Apps on the device. They get an icon in the tray and on the Desktop, plus their own window which is fully resizable like all DeX mode compatible apps.

Installing a Progressive Web App

For installing Progressive Web Apps, the [ambient badging behaviour](https://medium.com/samsung-internet-dev/what-does-it-mean-to-be-an-app-ace43eb6b94d) pioneered on the mobile browser is available here too. If you see the ‘+’ in the address bar, press it to install the Web App to the home screen.

![](https://cdn-images-1.medium.com/max/800/1*kv8X7noSzt_SIFnsp-dkxg.png)

The + in the URL bar shows this Website can be installed as a Progressive Web App

If you use a Progressive Web App regularly in the browser, we will prompt you to install it on the third day of using it in two weeks.

#### Optimising your site for DeX mode

We have tested 1000 of the most popular websites and most of them work perfectly already, so you may not need to do anything.

We looked out for anything which may be broken by a website thinking it is running on a mobile browser, when the user is really using a mouse and keyboard:

1.  Mouse Event Handling
2.  Cursor Shape
3.  Desktop format layout
4.  Correct Handling of Keyboard Input

Unfortunately 5% of websites failed these tests. This is usually where there has been a mismatch between feature detection and the actual features.

> We found that some sites are assuming that “if this web browser supports touch events, then it shouldn’t support mouse events at the same time.” e.g. Apple.com and Wells Fargo.

> — SeoJin Kim, Principal Engineer for Samsung Internet

Other websites were looking at the user-agent string and seeing ‘Samsung’ so were treating it as a mobile browser. This led to a poor experience in DeX.

In an ideal world the same website would work on Desktop and Mobile using responsive design, but sometimes user-agent sniffing is unavoidable. So to enable you to give the correct experience in DeX we have changed the user-agent in DeX mode to allow you to provide the correct Desktop experience.

On DeX mode we remove the terms ‘_SAMSUNG_’, ‘_Mobile_’ and the phone model number from the UA string. It still contains the string ‘_SamsungBrowser_’ to show it is Samsung Internet so if you see ‘_SamsungBrowser_’ without ‘_SAMSUNG_’ then it is running in DeX mode. E.g.

Example Mobile Browser UA String:

Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-G935F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/5.0 Chrome/51.0.2704.106 Mobile Safari/537.36

Example DeX Browser UA String:

Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/5.2 Chrome/51.0.2704.106 Safari/537.36

We hope you enjoy a browsing the web from a full desktop experience powered by your Galaxy phone!

This blog post was written from my S8 in DeX mode!!

Tagged in [Web Development](https://medium.com/tag/web-development), [Mobile](https://medium.com/tag/mobile), [Samsung](https://medium.com/tag/samsung), [Samsung Dex](https://medium.com/tag/samsung-dex), [Progressive Web App](https://medium.com/tag/progressive-web-app)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [May 2, 2017](https://medium.com/p/f80d7edcab29).

[Canonical link](https://medium.com/@Lady_Ada_King/samsung-dex-brings-a-new-dimension-to-the-mobile-web-f80d7edcab29)
