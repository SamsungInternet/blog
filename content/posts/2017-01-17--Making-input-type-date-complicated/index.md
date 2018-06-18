---
title: Making input type=date complicated
category: "Web Development"
cover: img.jpg
author: Peter-Paul Koch
authorImg: https://miro.medium.com/fit/c/240/240/1*4VXDobnR6b7kKNiuySyWTQ.jpeg
---

### Beyond the Browser

![](https://cdn-images-1.medium.com/max/800/1*nPkvOE6F1x1rvmkhbN1TnA.jpeg)

By [Carlos](https://www.flickr.com/photos/armadillo444/) \- via [Flickr](https://www.flickr.com/photos/armadillo444/2901378790)

_It’s 2017 — a decade on from the launch of the iPhone. What has become of the web, and what is it becoming? That was the topic of my talk this week at_ [_London JS_](https://www.meetup.com/London-JavaScript-Community/events/235924973/)_. Here’s the short version..._

As we know, it’s been a decade of dramatic change, with mobile [eating the world](http://ben-evans.com/benedictevans/2015/6/19/presentation-mobile-is-eating-the-world) and overtaking desktop worldwide:

![](https://cdn-images-1.medium.com/max/800/1*k-CoxjWVZVD7o5EISTYivw.png)

[“Mobile and tablet internet usage exceeds desktop worldwide”](http://gs.statcounter.com/press/mobile-and-tablet-internet-usage-exceeds-desktop-for-first-time-worldwide) \- StatCounter

As the [hype pendulum](https://hackernoon.com/the-hype-pendulum-of-web-development-33f500723f31) has swung back and forth, I’m sure we all remember headlines like these about the mobile web:

> “Why Facebook ditched the Mobile Web”  
> \- [ReadWriteWeb](http://readwrite.com/2012/08/23/how-facebook-ditched-the-mobile-web-went-native-with-its-new-ios-app/)

> “Why LinkedIn dumped HTML5”  
> \- [VentureBeat](http://venturebeat.com/2013/04/17/linkedin-mobile-web-breakup/)

The worry for the web is that the majority of all that extra time users are spending on their mobiles has gone to native apps:

![](https://cdn-images-1.medium.com/max/800/1*xRAhtr5EoTo9L-jNqX_mTA.jpeg)

[2015 U.S. Mobile App Report ](http://www.slideshare.net/VictorKongCisneros/the-2015-us-mobile-app-report-by-comscore)— comScore

Some [reports](http://venturebeat.com/2013/04/03/the-mobile-war-is-over-and-the-app-has-won-80-of-mobile-time-spent-in-apps/) [suggest](http://flurrymobile.tumblr.com/post/127638842745/seven-years-into-the-mobile-revolution-content-is) 80–90% of time is spent in apps, versus the browser. We could argue about how much those native apps are made up of web content, but let’s be honest: this sounds bad for the web. Some have even called it [a crisis](https://medium.com/@stopsatgreen/the-crisis-facing-the-web-platform-4ab47515ed42).

It must be noted though, that it’s only a handful of apps that are getting most of the attention. A report suggested mobile users spend [80% of their time in just 5 apps](http://marketingland.com/report-mobile-users-spend-80-percent-time-just-five-apps-116858) — and results in the US suggest [half of users download zero apps per month](http://www.recode.net/2016/9/16/12933780/average-app-downloads-per-month-comscore):

![](https://cdn-images-1.medium.com/max/800/1*7DjoIxOFRgiS_O-Z9kx6QA.png)

Data from [comScore](http://www.comscore.com/), via [Recode.net](http://www.recode.net/2016/9/16/12933780/average-app-downloads-per-month-comscore)

And if you look at the charts for overall audience reach, it feels like the opposite story:

![](https://cdn-images-1.medium.com/max/800/1*DyCZ8LvlH_mJVheViSX2ig.png)

[2016 U.S. Mobile App Report](http://www.comscore.com/Insights/Presentations-and-Whitepapers/2016/The-2016-US-Mobile-App-Report) - comScore

The web kicks ass when it comes to discoverability and distribution. Audiences can find you in any search engine. The reduced friction of just tapping on a link and having the experience load straight away — not having to go to a store and download something first — is extremely valuable. The overall reach that you can get with the web is still unparalleled.

So wouldn’t it be amazing if we could combine the two? To take the things that we love about websites and combine that with the features and performance that we now expect from native apps?

![](https://cdn-images-1.medium.com/max/800/1*PnQFKun6w6CpDRquVTTNYw.png)

[Beyond the Browser](https://poshaughnessy.github.io/london-js-beyond-browser-2017/) — slides from my [London JS presentation](https://www.meetup.com/London-JavaScript-Community/events/235924973/)

Thankfully, someone’s thought of this already and they’re called [_Progressive Web Apps_](https://www.smashingmagazine.com/2016/09/the-building-blocks-of-progressive-web-apps/)!

![](https://cdn-images-1.medium.com/max/800/1*lBNGJFP8FENFXMxvnzOIPw.jpeg)

Believe it or not, this is [not the official logo](https://twitter.com/poshaughnessy/status/786694539285323777)!

It’s taken longer than many would have liked and there have been a few good, ahem, [learning experiences](http://alistapart.com/article/application-cache-is-a-douchebag) along the way, but the web is now closing in on feature parity with native. (Disclaimer: I’m talking about standard features and about the majority of major browsers). [Paul Kinlan](https://medium.com/u/a7bf6b8f7cd0) conveyed this well in his [Chrome Dev Summit talk](https://youtu.be/YJwrBbze_Ec) last year:

![](https://cdn-images-1.medium.com/max/800/1*AOEiV9PWdICMqcy-h6I31A.jpeg)

[What Comes Next for the Web?](https://youtu.be/YJwrBbze_Ec) — Paul Kinlan

#### Beyond network connectivity

Let’s start with probably the most important item in the list: ‘Offline’. [Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) to the rescue! Making a web app function offline is now wholly achievable using this powerful new feature — essentially a programmable network proxy. Using [sw-toolbox](https://github.com/GoogleChrome/sw-toolbox) and depending on your needs, it could be as easy as something like this:

if (navigator.serviceWorker) {  
  navigator.serviceWorker.register('/service-worker.js');  
}

// service-worker.js  
importScripts('/sw-toolbox/sw-toolbox.js');

toolbox.precache(\['/', '/an-image.png', '/some-styles.css'\]);

toolbox.router.get('/*', toolbox.networkFirst);

_(Update: It’s of course worth reading up and experimenting more about service workers before going full-steam ahead in production though! Especially to understand caching and updates. There is_ [_a list of useful resources here_](https://jakearchibald.github.io/isserviceworkerready/resources.html) _which should provide a good starting point.)_

Service workers [are now supported](https://jakearchibald.github.io/isserviceworkerready/) in Chrome, Firefox, Opera and Samsung Internet. It’s also [in development in Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/serviceworker/). Despite that, the question that always comes back straight away is:

![](https://cdn-images-1.medium.com/max/800/1*c0ROSsHqT42-M_FDu7xl9Q.png)

[Beyond the Browser](https://poshaughnessy.github.io/london-js-beyond-browser-2017/) — slides from my [London JS presentation](https://www.meetup.com/London-JavaScript-Community/events/235924973/)

The answer is what we (should be) always doing anyway: [progressive enhancement](http://alistapart.com/article/understandingprogressiveenhancement). Check if service workers are supported and if so, you can provide the best experience in that browser. As [Jake Archibald](https://medium.com/u/f87cd234b9d9) [put it](https://youtu.be/qDJAz3IIq18):

> “If you use Service Worker and suddenly your stuff has more features or become faster in Chrome and Firefox than it does in Safari, then that would give Apple more reason to implement Service Worker. As web developers, you are in control of the future of the web here.”

#### Beyond the browser tab

Service workers aren’t just capable of offline support though. They now allow our code to live on beyond the lifetime of the open tab. This provides the basis for powerful features that were previously the preserve of native apps. Features like [push notifications](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/) and [background syncing](https://developers.google.com/web/updates/2015/12/background-sync).

![](https://cdn-images-1.medium.com/max/800/1*KLme81bRWPtV3nY80tYZIw.png)

Web push notification from [Podle](https://podle.audio)

We’re also able to go _beyond the browser tab_ using [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest). This enables our users to add our web apps to their homescreen, for easy access like native apps — and (if we desire) launch them as standalone ‘apps’ outside of a browser tab. This has been possible with [browser-specific methods](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) before, but the nice thing about Web App Manifest is it’s an open standard, with support already from Chrome, Opera and Samsung Internet (and full support from Firefox [on the way](https://bugzilla.mozilla.org/show_bug.cgi?id=1285858)).

Here’s a quick video of my [Snapwat](https://snapw.at) PWA that demonstrates adding a web app to the homescreen and using it offline. It also uses <input type=’file’> for camera support:

Demo of [https://snapw.at](https://snapw.at)

Progressive web apps are starting to show some very promising results for users and for businesses. Google’s [Web Showcase](https://developers.google.com/web/showcase/) has some great case studies — for example [Flipkart Lite](https://developers.google.com/web/showcase/2016/flipkart) which resulted in 3x more time spent on site and a 70% increase in conversions!

#### Beyond the digital world

The Web isn’t stopping at mobile apps though. It’s expanding beyond the digital world and starting to reach out into the physical world around us.

The [Physical Web](https://google.github.io/physical-web/) is an open standard for Bluetooth beacons. Beacons broadcast URLs (using the [Eddystone-URL](https://github.com/google/eddystone/tree/master/eddystone-url) format) which browsers or other apps can detect, when they’re in the vicinity of the device. Users can then get handy information about what’s around them. For example, a [bus timetable](http://marketingland.com/london-buses-test-first-consumer-experience-physical-web-170529) or a conference schedule.

You don’t need to buy a beacon to try it out yourself — using an app like [Beacon Toy](https://play.google.com/store/apps/details?id=com.uriio) you can make a phone act like a beacon itself. You can then try detecting it in our own Samsung Internet if you like; we introduced support for Physical Web in our v5.2 [beta](https://medium.com/samsung-internet-dev/beta-d0f988fb77fb#.4x9xnjrur) with an extension called _CloseBy:_

![](https://cdn-images-1.medium.com/max/800/1*FCQwQ29KfCO6oIevevbOtA.png)

CloseBy feature in Samsung Internet v5.2 beta

So now our browser can detect Bluetooth beacons. What about actually interacting with Bluetooth devices? This is also possible — with [Web Bluetooth](https://www.w3.org/community/web-bluetooth/). The standard is at a comparatively early stage right now, but it’s already available to try out in Chrome as an [origin trial](https://docs.google.com/forms/d/e/1FAIpQLSfO0_ptFl8r8G0UFhT0xhV17eabG-erUWBDiKSRDTqEZ_9ULQ/viewform?entry.631548922&entry.1000000&entry.1000001&entry.1999497328=Web+Bluetooth+%28Experimenting+until+late+January+2017%29&entry.1000005) \[_update_: it’s now [officially in Chrome 56](http://www.androidpolice.com/2017/02/02/chrome-56-adds-official-web-bluetooth-api-support-new-tab-page-changes-experimental-webvr-apk-download/)\].

Here’s a Web Bluetooth demo I made a while back, for controlling a drone from the browser!

I was also using Web Bluetooth to control my slides. It was easy to set this up using [bleno](https://github.com/sandeepmistry/bleno) along with a simple local web sockets server on my laptop. I then just needed to make a quick PWA with Web Bluetooth in order to connect from my phone. (Note the Flight Mode icon — no need to rely on conference wifi on your phone, as long as you’re in Bluetooth range of your laptop!):

These are just a couple of examples, but with more smart devices launching all the time, I’m excited about the web browser becoming a remote control for the world around us.

#### Beyond reality

The web isn’t stopping there either though. It’s now even reaching out into _virtual reality_ and _augmented reality_.

The new [WebVR](https://webvr.info/) API is turning the web into an exciting platform for VR apps and content. It enables web apps to connect with an attached VR headset, read the orientation data and display content in a fully immersive, stereoscopic way. This could be on anything from a high-end desktop-based unit like an HTC Vive, to a mobile setup like our Samsung Gear VR or even (using a polyfill) a Google Cardboard.

One of my favourite WebVR examples is [A-Painter](https://blog.mozvr.com/a-painter/), Mozilla’s Tilt Brush-esque web app for the HTC Vive:

It was made using [A-Frame](https://aframe.io/), which is a great library for easily creating WebVR apps using HTML and JavaScript. The brilliant thing about it being the web is that sharing your digital creation is as easy as just sharing a URL! If the recipient doesn’t have a VR headset to hand, they can still view it on their mobile or desktop screen as normal.

My colleague [Ada Rose Edwards](https://medium.com/u/c2890cdd7a64) also used A-Frame — along with Web Sockets — to develop the amazing multi-user telepresence demo that she [shared with 100 people live at London Web Performance](https://medium.com/samsung-internet-dev/wow-that-was-some-night-in-vr-ba091be38794#.mgg0bir7p) this month!

Microsoft announced a while back that they’re working on WebVR too, with an eye on using it for Hololens. So we could soon start to see WebVR being adapted to augmented reality too. Just imagine the potential for the AR web!

#### Beyond the browser

I hope that this has shared some of the ways that browsers are going way beyond just being ‘browsers’.

Of course, we can still _browse_ websites — tap on links and type out URLS. The hypertext basis of the web should still be cherished! It’s one of the great strengths of the web that the [very first web page continues to work](https://twitter.com/poshaughnessy/status/797030606869856256) in browsers to this day.

Yet, the web is becoming capable of so much more too. Previously, I wondered if ‘browser’ was [still the right word](https://medium.com/samsung-internet-dev/is-browser-still-the-right-word-6815f93b866c). Now I like to think of it as being the same as the word ‘phone’. Of course our mobile phones can still make telephone calls, but they now have many additional powers too. So next time you hear the word ‘browser’, why not sound smart and say _“Ah! A_ [_somewhat anachronistic linguistic holdover_](http://english.stackexchange.com/questions/72520/word-that-means-outdated-name)_!”_ 😉

#### Getting involved

We can all help to shape the future of browsers. This year, I’m hoping to get more involved in web standards myself. If you’re excited about where the web is heading — or if you have frustrations that could be solved — please get involved too!

A good place to start is the [WICG](https://wicg.io/) — there is a [discussion forum here](https://discourse.wicg.io/) that you can join. We also have a page about [contributing to Chromium here](http://samsung.github.io/Chromium/), including a link to ‘good first bugs’.

Together we can help to evolve the web. First, we can help it to meet the high expectations that have been set by native mobile apps. Then, perhaps, we can go _beyond!_

![](https://cdn-images-1.medium.com/max/800/1*0dWgKnJyTcyyg-ItRg6ceQ.jpeg)

By [Kevin Harber](https://www.flickr.com/photos/kevharb/3065077415/)

* * *

_The_ [_slides from my presentation are available here_](https://poshaughnessy.github.io/london-js-beyond-browser-2017/) _(source code_ [_here_](https://github.com/poshaughnessy/london-js-beyond-browser-2017)_) and_ [_here is the recording_](https://youtu.be/ZSOhY1r8dwI)_. Thanks again to London JS and Just Eat for hosting my presentation and to all the attendees!_

_I’m keen to update this presentation and share it with attendees at future events too. If you are interested in such a topic at your event, please_ [_get in touch_](mailto:peter@oshaughnessy.io) _😃_

Tagged in [Web Development](https://medium.com/tag/web-development), [Mobile](https://medium.com/tag/mobile), [Samsung](https://medium.com/tag/samsung), [Browsers](https://medium.com/tag/browsers), [Progressive Web App](https://medium.com/tag/progressive-web-app)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [January 19, 2017](https://medium.com/p/3690a589bf7c).

[Canonical link](https://medium.com/@poshaughnessy/beyond-the-browser-3690a589bf7c)
