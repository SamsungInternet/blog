---
permalink: "/Highlights-from-Google-s-Progressive-Web-Apps-training-in-London/"
title: Highlights from Google’s Progressive Web Apps training in London
category: "Web Development"
cover: img.jpg
author: Peter O'Shaughnessy
authorImg: https://miro.medium.com/fit/c/240/240/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
---

### Highlights from Google’s Progressive Web Apps training in London

Last week, Google kindly invited [Ada Rose Edwards](https://medium.com/u/c2890cdd7a64) and me to join them at [“Building Progressive Web Apps”](https://events.withgoogle.com/building-progressive-web-apps-london/), a 3-day PWA bootcamp at Skills Matter in London. The event was free for attendees — the only “catch” was that they wanted lots of feedback, as it was the first of its kind (yes, a “beta”, but as their joke went, everything at Google is either beta or deprecated!).

With Sarah Clark and [Sam Dutton](https://twitter.com/sw12) leading the teaching and support from their colleagues, we covered a wide range of topics, including service workers, fetch, promises, flexbox, IndexedDB and Web Payments.

#### Why PWAs

First, though, we were encouraged to consider our users and their requirements. When, where and how might they access our content? What are their offline needs — what kinds of connectivity do they have and are they affected by data costs? How could we improve their experience, if we could combine the best of the web and the best of native apps?

Progressive web apps combine the _capability_ of native apps with the _reach_ of the web. Native apps have a very bad long tail problem; discoverability is better on the web.

Another advantage for web apps is reduced friction — there is no need to turn your users away, to say “Why are you here? Go to the app store!”

![](https://cdn-images-1.medium.com/max/800/1*HI-xZiP5wO0FnmVySQGSFA.png)

Image from Jules Jamison via [http://wtfmobileweb.com/](http://wtfmobileweb.com/)

Instead, provide a great experience at your own front door — the web.

> “PWAs are all about removing friction”.

PWAs are not only about removing the friction of having to download an app. They are about removing the friction of having to wait for a site to load — the friction of unresponsive and poorly designed web pages. It’s time for a new era for the web. PWAs should be fast, reliable and work well across platforms.

#### App shells, caching and rendering

Motivated by the potential, we were guided through the building blocks of PWAs. In general, we were advised to consider the separation of our “app shell” — the initial scaffolding that does not change very often — and the actual content which may change all the time. The app shell is a prime candidate for precaching with a service worker. For an app shell example, see Jake Archibald’s [Offline Wikipedia](https://github.com/jakearchibald/offline-wikipedia).

As for server-side vs client-side rendering, Google’s recommended patterns, in order, are:

*   Server-side render (SSR) the app shell and the content for the entry page. Then use JavaScript to fetch the content for other routes and “take over” client-side rendering (CSR).
*   If you can’t do that, server-side render only the app shell and use JavaScript to fetch the content once the shell is loaded.
*   If you can’t do that, server-side render the full page.
*   If you can’t do that, client-side render the full page.

We learned not to precache too much content on install. Just cache the minimum amount that your app needs to start functioning straight away. Other resources may be cached on fetch (but precaching _every_ request for a site may not be feasible).

Another tip is to think of cache entries as URLs, not files. Some examples out there use a variable name such as ‘filesToCache’, but this is confusing. As an example, a problem that people ran into in the workshop was that they needed to add precache entries for both “/” and “/index.html”.

#### Tools

Some of the useful tools that came up frequently were:

*   [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en), a progressive web app auditing tool. Run it against your PWA to see what score it achieves and advice for improvements.
*   [sw-precache](https://github.com/GoogleChrome/sw-precache) is a Node module you can incorporate into your build process, to generate a suitable service worker to precache your resources. Google have a free [Code Lab for learning sw-precache here](https://codelabs.developers.google.com/codelabs/sw-precache/index.html#0).
*   [sw-toolbox](https://github.com/GoogleChrome/sw-toolbox) is a collection of service worker tools that make it easy to implement various caching strategies — see below.

#### Caching strategies

These strategies are all easy to implement with sw-toolbox, including configuring timeouts:

*   “cache first”, then fallback to the network — if it is in the cache, it won’t touch the network.  
    E.g. _toolbox.router.get(‘/images’, toolbox.cacheFirst);_
*   “network first”, then fallback to the cache — if you want to try for up-to-date content first. As an example, it was suggested that a publication such as the FT would probably opt for this strategy.  
    E.g. _toolbox.router.get(‘/api’, toolbox.networkFirst);_
*   “fastest” — set the cache and network off in a race and serve whichever one comes back first. You would expect that this would always be the cache, but Sam mentioned that they saw examples where the network returned faster — perhaps because of network caching.  
    E.g. _toolbox.router.get(‘/profile’, toolbox.fastest);_
*   “network only” — to return fresh data only.
*   “cache only” — when you want to guarantee that no network requests will be made.

#### Web Payments

Somewhat tangential to the core PWA APIs, but another example of reducing friction: Web Payments.

> “Web Payments will make a huge difference to the web”.

66% of purchases on mobile are on the web. I did not realise, but the [PaymentRequest API](https://developers.google.com/web/updates/2016/07/payment-request) is already supported in Chrome for Android since v53. Its aim is to make transactions really easy, especially on mobile.

#### Push Notifications

Another highlight for me was the session on push notifications. This actually comes down to two APIs, the [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) — for displaying notifications and responding to their click and close events — and the [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API), for subscribing to receive push data. Service workers can receive this data in the background and display an appropriate notification, from which (if you have provided something useful or interesting) the user may re-engage with your app.

#### Image Capture

Another new API that got a mention is Image Capture, which specifies methods for takePhoto() and grabFrame(). The [draft W3C spec](https://www.w3.org/TR/image-capture/) and [Chromium thread](https://bugs.chromium.org/p/chromium/issues/detail?id=518807) contain further details. (I’m excited to try this out for [Snapwat](https://medium.com/samsung-internet-dev/things-i-learned-making-a-progressive-web-app-for-super-selfies-49e76d154e4f)!)

#### Lots More

I still only really scratched the surface with this post. The 3 days also covered topics such as responsive design, tooling and analytics. We even had a special guest appearance by Paul Lewis with an impromptu, yet polished, run-through of front-end performance. All-in-all, a thorough and enjoyable journey through all the elements required to develop fast, responsive and engaging web experiences.

Thanks again to Google for inviting us to participate and help out. They even invited Ada up front to give a remote debugging demo and share how to debug other browsers like Samsung Internet. It just shows how open and collaborative everyone is in the web development community ❤.

![](https://cdn-images-1.medium.com/max/800/1*z2Ec3TOCQZ_fDiOHv4q3lg.jpeg)

Google may be considering rolling out similar training sessions in other locations, so if you are interested to attend, keep an eye out for news from Chrome Developers via all [your](https://twitter.com/chromiumdev) [favourite](https://plus.google.com/+GoogleChromeDevelopers/) [channels](https://medium.com/@ChromiumDev). For additional reaction from the event, check the hashtag [#LearningPWA](https://twitter.com/search?q=learningpwa).

Tagged in [Web Development](https://medium.com/tag/web-development), [JavaScript](https://medium.com/tag/javascript), [Progressive Web App](https://medium.com/tag/progressive-web-app), [Mobile Web](https://medium.com/tag/mobile-web)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [September 13, 2016](https://medium.com/p/9856f0876e4f).

[Read this article on Medium](https://medium.com/@poshaughnessy/highlights-from-googles-progressive-web-apps-training-in-london-9856f0876e4f)
