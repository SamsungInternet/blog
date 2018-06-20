---
title: 6 myths of Progressive Web Apps
category: "PWA"
cover: img.jpg
author: Peter O'Shaughnessy
authorImg: https://miro.medium.com/fit/c/240/240/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
---

### 6 myths of Progressive Web Apps

Terms like [“Progressive Web Apps”](https://medium.com/@slightlylate/progressive-apps-escaping-tabs-without-losing-our-soul-3b93a8561955) (PWAs) are [useful to help spread concepts](https://fberriman.com/2017/06/26/naming-progressive-web-apps/), but they come with a risk of misuse and misunderstanding. As a fairly new and evolving concept, PWAs may be defined and understood differently by different people. In this post, I’ll share some common myths (IMHO) about PWAs.

![](https://cdn-images-1.medium.com/max/800/1*P-gXz7UCnyazZQHhy43ApQ.png)

[The officially unofficial PWA logo](https://medium.com/samsung-internet-dev/we-now-have-a-community-approved-progressive-web-apps-logo-823f212f57c9)

I’m hoping this post will spur further discussion and help us all to come to a better, shared understanding. We’re continuing to discuss this with our fellow browser vendors too!

#### First, what are PWAs actually?

We should really start with the [definition from Alex Russell](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/), who came up with the term along with Frances Berriman. PWAs are:

> Responsive, connectivity-independent, app-like, fresh, safe, discoverable, re-engageable, installable, linkable web experiences.

That’s quite a lot to remember, already — and that’s before we’ve even gotten to the [checklist style of definition](https://developers.google.com/web/progressive-web-apps/checklist)! So here’s some other ways I like to describe them:

> “Web apps upgraded to be first-class apps”

Or:

> “The best of the web, plus the best of native apps”

Or, in [Alex](https://medium.com/u/fa63e1e8071)’s words again:

> “Just websites that took all the right vitamins”

In other words, they’re about learning from native apps and building — and delivering — the best experiences on the Web. (It’s still the Web, just with added benefits!)

OK now here are my top myths about PWAs:

### Myth 1: PWAs are just browser-specific magic

If you’re new to PWAs, they might seem like browser-specific sorcery (or _“bleeding edge Google-specific weirdness”_, as I read from one developer!). But essentially they’re about _combining_ _some web standards and best practices,_ with the purpose of delivering better experiences.

I think of PWAs as having a simple baseline requirement:

![](https://cdn-images-1.medium.com/max/800/1*2hsAx5q06u4vBKkCQiDi2g.png)

PWA standards

As long as you serve your site over HTTPS, you have a Service Worker with some basic caching, and you register a Web App Manifest with some basic information like the name and at least one icon, your website should be recognised (e.g. by Samsung Internet, see _Myth 2_ for details) as a PWA.

With this combination, in supporting browsers, your users can add your site to their homescreen, launch it in a standalone window (if that’s how you’ve configured it) and re-use it, whether or not they have a data connection. This kind of user experience used to be the preserve of native apps.

Other features such as Push Notifications are often discussed in relation to PWAs (the definition above includes “re-engagement”), but I see these as optional extras. In fact, I like to [think of PWAs as a toolkit](https://medium.com/samsung-internet-dev/progressive-web-apps-are-a-toolkit-not-a-recipe-b2fd68613de5). You don’t have to combine everything altogether, although it can often create the best experience if you do.

The other key aspect of PWAs — aside from the actual web standards involved — is _performance_. Tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse/) can give you a score for this. One of the best ways to get a _real-world_ score is to use [webpagetest.org/easy](https://www.webpagetest.org/easy) and check the box for the Lighthouse audit. This will give you an easily-shared link that your team can use, as well as a controlled environment that you can run your test in (thanks [Alex](https://medium.com/u/fa63e1e8071) for the tip!).

Performance is a big topic in its own right. Our friends at Google include performance metrics in their [“baseline” definition](https://developers.google.com/web/progressive-web-apps/checklist#baseline), but I prefer to see it as outside the scope of the core PWA definition. Otherwise, imagine one day you add another resource to your site and it pushes it beyond a performance metric — suddenly your PWA isn’t a “PWA” anymore! This might be beneficial for encouraging better experiences, but I also think it could be confusing for our definition and I doubt that every browser will want to have the same criteria.

### Myth 2: PWAs are just a buzzphrase for stuff we have already

Here’s the flip side to _Myth 1:_ PWAs are not _only_ a combination of existing standards and practices. Because [_PWAs can be granted special features_](https://medium.com/samsung-internet-dev/heres-what-you-get-for-free-with-a-progressive-web-app-74b7ac5bdb3a)  by browsers, app stores and more.

For example in Samsung Internet we have a feature called [‘ambient badging’](https://medium.com/samsung-internet-dev/what-does-it-mean-to-be-an-app-ace43eb6b94d). If the browser detects you’re viewing a PWA (by recognising the web standards mentioned in _Myth 1 — _[further details here](https://medium.com/samsung-internet-dev/what-does-it-mean-to-be-an-app-ace43eb6b94d)), then it will dynamically update the usual bookmark icon in the URL bar, to a special ‘+’ icon, giving your users an easy shortcut to add it to their homescreens.

![](https://cdn-images-1.medium.com/max/800/1*hZSxhD-0gjxfAYNpkOdRpQ.png)

Samsung Internet’s + icon for PWAs — and the menu that displays when you tap it

_Update:_ _Mozilla are_ [_introducing a similar feature in Firefox v58 on Android_](https://hacks.mozilla.org/2017/10/progressive-web-apps-firefox-android/)_._ [_This has since been released to stable_](https://hacks.mozilla.org/2018/01/firefox-58-the-quantum-era-continues/)_._

Based on engagement metrics determined by your browser ([here are Chrome’s](https://developers.google.com/web/fundamentals/app-install-banners/#what_are_the_criteria)), they may also be shown an Add To Homescreen prompt.

![](https://cdn-images-1.medium.com/max/800/1*qrqCLDakNEugx3sV5sYp7w.png)

Add To Homescreen prompt in Chrome for Android

And in Chrome for Android now, you actually get _a real Android app_ — with their new [WebAPK feature](https://chromium.googlesource.com/chromium/src/+/master/chrome/android/webapk/README). When you install a PWA on your homescreen, it automatically creates a lightweight Android app wrapper, so your app actually appears in the Apps list and is a true first-class citizen.

![](https://cdn-images-1.medium.com/max/800/1*4dxxXBYbp2ab4p5q9x22xw.png)

The Snapwat PWA is now an Android app!

PWAs are even _coming to app stores_ now. Microsoft are introducing [‘passive ingestion’ of PWAs into the Microsoft Store](https://www.aaron-gustafson.com/notebook/progressive-web-apps-and-the-windows-ecosystem/) (although you can opt out if you want). Microsoft will be performing automated quality tests and manual reviews, in order to determine if your PWA is up to scratch. This is already starting to happen in the Windows Insider Preview and it should be in the regular Windows release next year.

There have also been [hints from the Chrome team](https://twitter.com/owencm/status/912480532348284928) that this may be coming to the Play Store in the future too.

We don’t necessarily _need_ our web apps in these app stores — you can still access them via the web of course — but this should be a great bonus, for better discoverability and recognition.

### Myth 3: PWAs are only for offline apps

The next myth is that PWAs are only worthwhile if you particularly need your app to work offline. Service workers are [not just for offline access, they are for making your website function _reliably_](https://infrequently.org/2016/05/service-workers-and-pwas-its-about-reliable-performance-not-offline/), independent of the network conditions.

This is from Henrik who has worked on the [new Starbucks PWA](https://preview.starbucks.com)

I’m sure we’ve all experienced the frustrations of a bad connection, but sometimes it’s too easy to forget about that when we’re developing and testing everything on our super-fast office broadband. As [Jake Archibald](https://medium.com/u/f87cd234b9d9) [says](https://vimeo.com/125479288), don’t treat a poor connection as an error — instead, _treat the network as an enhancement_.

### Myth 4: PWAs are a mobile thing

The next myth is that PWAs are all about mobile and mobile apps. PWAs are not specific to mobile — they’re for desktop too.

For example, [DeX](http://www.samsung.com/global/galaxy/apps/samsung-dex/) is a dock that lets you turn your phone into a desktop experience, plugging in a monitor, keyboard and mouse. As shown in this video, Samsung Internet for DeX provides the same ambient badging feature as Samsung Internet for Android, making it easy to add PWA icons to your desktop and open them in standalone windows:

Progressive Web Apps and Ambient Badging in Samsung Internet for DeX

As shared above, Windows will be gaining full PWA functionality soon too. Plus there’s support on Chrome OS. The FT web app is shown as an example here, receiving an “Add to shelf” banner:

Progressive Web Apps: Great Experiences Everywhere (Google I/O ‘17)

_Update: At Chrome Dev Summit, Google also shared a_ [_preview of PWA functionality coming to the standard desktop Chrome browser in 2018_](https://youtu.be/_sLa0qhuqcA?t=32m31s)_!_

PWAs even go beyond mobile and desktop. They’re also [for _Virtual Reality_](https://docs.google.com/presentation/d/1b27LiMtxkOgReHEI6FZGc8lyuu0wrKjwgQ2ZbDz6yak/edit?usp=sharing). Because if you’re making a cross-platform VR experience using [WebVR](https://samsunginter.net/docs/webvr), why wouldn’t you also want the benefits of a PWA?

![](https://cdn-images-1.medium.com/max/800/1*f-BM1ikNbZdAMyccwB8ewA.png)

[Dan Scott’s WebVR PWA](https://coffeecode.net/truly-progressive-webvr-apps-are-available-offline.html) running in Samsung Internet for Android and Samsung Internet for Gear VR

### Myth 5: PWAs are a Google-only thing

Our friends at Google are doing great work, leading much of the effort around PWAs. However, PWAs are not just a Google thing, they’re a cross-browser collaboration. Their broad level of support was demonstrated well at the PWA Dev Summit last year:

This doesn’t mean to say that all of these browser vendors think about PWAs in the same way. For example, the Add To Homescreen requirements are not a web standard — not yet anyway. Friends at other browsers have expressed reservations about the current lack of a broad consensus around what makes an app ‘installable’. We recognise that this is still a challenge, especially if you’re looking for a simple way to describe the user experience of PWAs across different browsers. We’re continuing these discussions!

If we leave aside these browser-specific treatments for now though, at their core, PWAs are based on web standards. Web standards are inherently a cross-browser effort. As an example, our Samsung colleague [Jungkee Song](https://twitter.com/jungkees) is one of the editors of the Service Worker spec.

The features of PWAs are well supported across many Android and desktop browsers. A good starting point for checking support is [Is Service Worker Ready](https://jakearchibald.github.io/isserviceworkerready/)?

### Myth 6: PWAs are not ready yet

Finally, the misconception that there’s not much point building PWAs until they’re supported on iOS!

Firstly, we recently had the good news that Service Workers are now [in development in WebKit](https://webkit.org/status/#specification-service-workers). _Update: and_ [_now_ _Web App Manifest too_](https://twitter.com/kennethrohde/status/922946632538251264)_! Another update: And now_ [_Service Worker and basic Web App Manifest support are in the stable release of iOS_](https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7)_, hurray!_

Secondly, we have [Progressive Enhancement](https://www.shopify.com/partners/blog/what-is-progressive-enhancement-and-why-should-you-care). You can still give users of browsers without support the same experience they have currently, while taking advantage of PWA features on the platforms and browsers that support them — i.e. ones used by billions of people!

Thirdly, if you hold off too long, you might get left behind! Yes, PWAs will continue to evolve. Aspects like WebAPK and app store recognition are at early stages right now. However, the best way to help their progression is to embrace them and give browser vendors your feedback. In the last few months we’ve seen many big brands release PWAs, including Twitter, Lyft, Uber and Starbucks:

![](https://cdn-images-1.medium.com/max/800/1*lMAM_U8q3xCzJrzYhdqROg.png)

Slide from [Progressive WebVR Apps](https://docs.google.com/presentation/d/1b27LiMtxkOgReHEI6FZGc8lyuu0wrKjwgQ2ZbDz6yak/edit?usp=sharing), a presentation we gave at JS Monthly

* * *

I hope this has helped to clear up some PWA misconceptions, but if not, please leave a comment or [tweet me](https://twitter.com/poshaughnessy). I know we still have work to do as an industry, to align on a clear, shared definition.

Finally, a 140 character summary (no 280 for me yet! 😉):

* * *

_Update: I since gave a presentation based on this article at_ [_London Progressive Web Apps_](https://www.meetup.com/London-Progressive-Web-Apps/events/248498204/)_. You can find_ [_the slides here_](https://docs.google.com/presentation/d/1DveHEej9Z4uV9FNTw6lPDXPOKnuHA4ygK23ksUtVph4/present?slide=id.p) _and_ [_the recording here_](https://skillsmatter.com/skillscasts/11680-6-myths-of-progressive-web-apps)_._

Tagged in [Web Development](https://medium.com/tag/web-development), [Progressive Web App](https://medium.com/tag/progressive-web-app), [Pwa](https://medium.com/tag/pwa), [Web](https://medium.com/tag/web), [Mobile](https://medium.com/tag/mobile)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [October 11, 2017](https://medium.com/p/81e28ca9d2b1).

[Canonical link](https://medium.com/@poshaughnessy/6-myths-of-progressive-web-apps-81e28ca9d2b1)
