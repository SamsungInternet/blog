---
title: Leaving Samsung
category: "Communities"
cover: img.jpg
author: Jungkee Song
authorImg: https://miro.medium.com/fit/c/240/240/0*DWkUq6eXPPDR7UuI.
---

### Leaving Samsung

_Editor’s Note: Jungkee Song has had such a large impact on what has become the Samsung Internet browser, and on the evolution of Progressive Web Apps. We’re sorry to see him go but we wish him best of luck in future endeavors and we hope to keep working with him on the future of the web platform. — _[_Daniel_](https://medium.com/u/c14ea4c7e1fd)

Today, the 30th of April, 2018, is my last day at Samsung. It was twelve years and seven months. In the Korean educational system, children spend six years in elementary school. I remember that six years — it seemed like a really long time. Comparatively, the last twelve years went too fast. I was fortunate to have been able to carry out various projects with so many talented colleagues during that time. And most of all, I have been able to find out what I really want to continue to do for a long long time. Yes, it’s the web.

![](https://cdn-images-1.medium.com/max/800/1*7knC-gIse6kIyaxtAKCIbA.jpeg)

Can’t believe I’m not going to be back in the campus from tomorrow

#### **My early days before joining the web group**

Prior to joining the web group, I worked on several development projects, including porting a network stack to the embedded operating system, developing the [conditional access](https://en.wikipedia.org/wiki/Conditional_access) module for mobile TV services, and developing [Bada](https://en.wikipedia.org/wiki/Bada) platform network SDKs, etc. The 80 days I spent in beautiful Rome to launch [our first DVB-H phone](https://www.gsmarena.com/samsung_p910-1440.php) didn’t seem to be over that time, but now it’s been an unforgettable memory.

#### **Into the web**

I joined the web group in January 2011. At the time, the group was working on the Tizen web profile. The web OS platform provided seemingly super powered HTML5 and the device APIs seemed like the future I had to be pulled into. In this group, I met [Wonsuk Lee](https://twitter.com/Wonsuk73), Senior Researcher at [ETRI](https://www.etri.re.kr/eng/main/main.etri) (my former boss at Samsung). This was the biggest turning point in my career. Wonsuk helped me get into the W3C and the web standards community. I had worked on the [Pick Media Intent](http://www.w3.org/TR/2014/NOTE-gallery-20140114/) spec that was based on the [Web Intents](http://www.w3.org/TR/web-intents/) work in Device APIs Working Group. Although it ended as a Group Note, it was a good time for me to understand how web standards development works. I miss the time I had with [Robin](https://twitter.com/robinberjon), [Kenneth](https://twitter.com/kennethrohde), [Ansi](https://twitter.com/anssik), [Rich](https://twitter.com/richtibbett), and so many friends.

#### **SysApps WG and Service Workers**

Since the second half of 2012, Samsung, Google, Intel and Mozilla have cooperated with each other to create [System Applications WG](http://www.w3.org/2012/sysapps/) for standardization of their Web OS. Although Google wasn’t active in the later stage, they were one of the members who initiated it. The group made relatively good progress on the device APIs work, but it lacked momentum on the runtime and security model part of it. Sadly, as a result, this group’s work was eventually discontinued. But by this time, I found out some other colleagues were working on a foundation of the web application runtime from totally different angle, namely [Service Workers](https://github.com/w3c/ServiceWorker).

#### **Small things make it begin**

I met [Daniel Appelquist](https://twitter.com/torgo), Director of [Samsung Internet Developer Advocacy team](https://samsunginter.net/team) and a co-chair of [W3C TAG](https://www.w3.org/2001/tag/), through the System Applications WG activity. At the time, Dan was working on Firefox OS at Telefonica. Dan and I planned a demo to show interoperability between Tizen and Firefox OS. We put on the demo on the stage during the plenary day of [TPAC 2013](https://www.w3.org/wiki/TPAC/2013), Shenzhen. (Darn it! I missed my son started toddling during this time.) [Jonas](https://twitter.com/SickingJ) helped us by being on the stage together.

![](https://cdn-images-1.medium.com/max/800/1*jYQ4XG0YjYqoP_LcaGl13A.jpeg)

Demo at TPAC 2013 for Tizen and Firefox OS

The scenario was to install a simple game web app both on Tizen and Firefox OS and show them launching from the home screen icons and running side by side. Dan and I sometimes recall the stinging memory that the server went down about 30 minutes before the demo and recovered just before we got on the stage. During the demo, Tim Berners-Lee asked me a question, and I remember I was so nervous about it. Fortunately, I got the point and responded well I guess.

This demo got me another piece of luck. On the last day of the TPAC, when I passed by [Alex Russell](https://twitter.com/slightlylate), Senior Staff Software Engineer at Google, in the hall, he came to me and told me that he had seen the demo, and asked for a card. I think, at the time, Alex was already having a picture of [PWAs](https://developer.mozilla.org/en-US/Apps/Progressive) based on Service Workers and Micro-Manifest, the [web app manifest](https://w3c.github.io/manifest/) in his words around that time.

#### **Service Workers for extension**

I was also prototyping the web push capability with Wonsuk and the team in 2013. We’d encountered the very inherent problem of the web that if the page that registered a push request is closed it loses the whole context to receive the push events. It now sounds a very basic premise that we receive push events on service workers, but then it wasn’t designed to get other extended events yet. We thought that Service Workers could be a solution for this. I first saw [Jake Archibald](https://twitter.com/jaffathecake), Developer Advocate for Google Chrome, in person when Chrome Dev Rel team visited Seoul for their developer events in the fall of 2013. I asked Jake if it would be possible to have Service Workers receive push events, and he said he had already discussed it with folks and was very positive about that kind of extension. Now we have not only [_fetch_](https://w3c.github.io/ServiceWorker/#service-worker-global-scope-fetch-event) and [_push_](https://w3c.github.io/push-api/#dfn-push) but [_sync_](https://wicg.github.io/BackgroundSync/spec/#sync-event), [_notificationclick_](https://notifications.spec.whatwg.org/#dom-serviceworkerglobalscope-onnotificationclick), [_canmakepayment_](https://w3c.github.io/payment-handler/#dom-canmakepaymentevent), [_paymentrequest_](https://w3c.github.io/payment-handler/#the-paymentrequestevent) events. I’m excited to see more extensions in the future.

#### **Getting on board Team Web for Service Workers**

Since then, I had looked deeper into [the service workers work on the GitHub repo](https://github.com/w3c/ServiceWorker). The further I figured it out, the clearer I could see it would be a truly groundbreaking piece for the web. [The idea](https://w3c.github.io/ServiceWorker/#motivations) wasn’t a novel invention in and of itself, but it was something we hadn’t brought into the web for such a long time until then. The folks in the [GitHub repository](https://github.com/w3c/ServiceWorker) were working on the explainer documents, the issues, and the prototypes in typescript but didn’t have a normative spec yet. I put together a spec draft and proposed it to Alex at the end of November. Alex replied to me in the early December. It was another huge turning point in my career. Alex suggested we work on the spec together.

#### **Service Workers work**

On the 8th of May, 2014 — Parents’ day in Korea — we published [the First Publish Working Draft of Service Workers](http://www.w3.org/TR/2014/WD-service-workers-20140508/). Since then, I’ve been working on Service Workers with many talented and friendly colleagues. In the beginning, I had a hard time due to my lack of experience around the spec work. The well-established web standards corpus was there so I could refer to much from it, but Service Workers had a lot of [unique design points](https://github.com/w3c/ServiceWorker/blob/master/explainer.md). For instance, the lifecycle of service workers and registrations is totally different from that of pages, so there were many new things we had to define. I thank [Anne](https://twitter.com/annevk) and [Domenic](https://twitter.com/domenic) for having helped me with thorough comments and inspiring feedback during the spec work. Indeed, all the Service Workers colleagues (implementers, spec authors, and web developers — yes all of you who gave invaluable input!) who have been together for the past four plus years are really a great team. It’s so wonderful to have seen [all the major browsers shipped Service Workers](https://jakearchibald.github.io/isserviceworkerready/) and made a good foundation for the PWA development. I truly appreciate and congratulate everyone.

#### **Samsung Internet story**

We started to build the Samsung browser (which replaced the Android stock browser) for the Galaxy devices from 2012. We started the work based on [WebKit](https://webkit.org/) in the beginning and switched to [Chromium](https://www.chromium.org/) in the early 2013. Later that year, we shipped it on [Galaxy S4](https://en.wikipedia.org/wiki/Samsung_Galaxy_S4) for the first time. The biggest change since then was that we released it through app stores (from v3.2) started in August 2015. It came with a name, _Internet for Samsung Galaxy_, and was limited to a few devices including [Galaxy S6 series](https://en.wikipedia.org/wiki/Samsung_Galaxy_S6) and [Note5](https://en.wikipedia.org/wiki/Samsung_Galaxy_Note_5). In March 2016, we rolled out the next version v4.0 to the [Play Store](https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en) branding it as [_Samsung Internet_](https://developer.samsung.com/internet#android-overview) covering wider range of devices. This version had a special meaning to me that it was developed based on Chromium M44 and shipped Service Workers as part of Samsung Internet for the first time. We had eagerly merged the Service Workers features up to about M47 in that version. I was so happy to have made it although there was not much public interest about service workers yet. (I had to use the famous Jake’s [Trained-to-thrill](https://jakearchibald.github.io/trained-to-thrill/) demo whenever I was selling it. [Paul](https://twitter.com/Paul_Kinlan)’s wonderful [Air Horn](https://airhorner.com/) came out even later than that in my memory.)

Since that time, we kept making progress by starting [the public beta channel](https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser.beta&hl=en_US) (from v5.4) in March 2017 and expanded the device coverage to all Android 5.0 and above devices (from v6.2) in October 2017. Finally, we made Samsung Internet one of the evergreen browsers. I think that most of the things I said in [the interview](https://www.smashingmagazine.com/2016/10/whats-the-deal-with-the-samsung-internet-browser/) with [Peter-Paul Koch](https://twitter.com/ppk) — web developer, consultant, and trainer — came true. Thanks a lot, PPK. Working with you helped us to think over many fundamental aspects.

#### **Was happy with Samsung Internet; Achieve higher goal**

[The v7.2 beta](https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser.beta&hl=en_US) is currently underway. This is a collaborative effort between Samsung HQ, US, India, and UK team.

![](https://cdn-images-1.medium.com/max/800/1*SnNfPm2-Sb7nLxJSFInXvA.jpeg)

Samsung Internet Developer Advocacy team

I believe now most of you know what Samsung Internet is thanks to the immense efforts that our [developer advocacy](https://twitter.com/samsunginternet) team have made.

![](https://cdn-images-1.medium.com/max/800/1*JqKID_7eym2zo2_qFFMHQA.png)

Samsung Internet peeps

I am so proud that we all together have moved Samsung Internet here. I believe that this effort has not been over yet and hope it continuously gets to more users. Go Samsung Internet team!

#### **This is not the end of the story**

I’m so happy that I can continue my work on the web under my new employer’s support! I really look forward to my next journey. I’m planning to spend some time with my family for a bit before the new start. (Oh my! My wife and son are throwing me a surprise party this evening. I have to go :).) I’ll be back in a month!

Tagged in [Web Development](https://medium.com/tag/web-development), [Samsung Internet](https://medium.com/tag/samsung-internet), [Service Worker](https://medium.com/tag/service-worker), [Leaving](https://medium.com/tag/leaving), [Pwa](https://medium.com/tag/pwa)

By [Jungkee Song](https://medium.com/@jungkees) on [April 30, 2018](https://medium.com/p/3b3c362870dd).

[Canonical link](https://medium.com/@jungkees/leaving-samsung-3b3c362870dd)
