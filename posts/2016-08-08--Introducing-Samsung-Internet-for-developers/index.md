---
permalink: "/Introducing-Samsung-Internet-for-developers/"
title: Introducing Samsung Internet for developers
category: "Web Development"
cover: img.png
author: Peter O'Shaughnessy
authorImg: https://miro.medium.com/fit/c/240/240/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
---

### Introducing Samsung Internet for developers

[Samsung Internet](http://developer.samsung.com/internet) is the web browser that is pre-installed on Samsung Galaxy phones and phablets. It has a market share of about 10% of all mobile browsing in Europe, [according to StatCounter](http://gs.statcounter.com/#mobile_browser-eu-monthly-201507-201607). Despite that, we’ll be the first to admit that it’s been quite under the radar for most developers up until now. Here’s a quick FAQ to help you get started developing with the browser.

#### Is Samsung Internet the same as the stock Android browser?

No. Samsung Internet has replaced the stock Android browser (also known as the [AOSP](http://www.androidcentral.com/android-z-what-aosp) browser) as the default on Samsung mobile devices since the Galaxy S4. It’s based on Chromium and the Blink rendering engine. The latest major version (at the time of updating this post) is v5.x, which is based on Chromium M51.

#### Why do Samsung have their own browser?

It allows us to optimise the browser as much as possible for our devices. It also means that we can integrate hardware — such as [Gear VR](http://developer.samsung.com/technical-doc/view.do?v=T000000270L) or the new [iris scanner](https://medium.com/samsung-internet-dev/iris-scanning-comes-to-the-web-516b40063622) — into the browsing experience as seamlessly as possible. The browser is of course based on open standards and Samsung are contributors to the specs too. For example, you will spot our esteemed colleague [Jungkee’s](https://twitter.com/jungkees) name in the list of [service workers spec](https://www.w3.org/TR/service-workers/) editors. Samsung are also a key contributor into the [Chomium open source project](http://www.chromium.org/) on which our browser is based.

_Update: Diego wrote more on this topic in his post_ [_‘Many browsers, one web’_](https://medium.com/samsung-internet-dev/many-browsers-one-web-21730352afbc).

#### Which version do I have?

Recent versions have an About page in the Settings:

![](https://cdn-images-1.medium.com/max/800/0*SXQDmB_3JHaK3XMk.)

Or you can try visiting _about://version_:

![](https://cdn-images-1.medium.com/max/800/0*kJQrrED-ltxe842-.)

If you would like to decipher the User Agent string, see the [guide here](http://developer.samsung.com/technical-doc/view.do?v=T000000203).

On older devices, try **Settings** \> **Application Manager** \> **All** > **Internet**:

![](https://cdn-images-1.medium.com/max/800/1*_jtmCff05-3uajNumGhvow.png)

Previously, the app had the blue globe icon above. This is the same icon that was used for the earlier AOSP version, so if you need to tell them apart, the best way might be the [user agent string](http://developer.samsung.com/internet/user-agent-string-format). The purple icon was introduced for version 3, when the app became available in the Play Store. Release notes since version 3 are [available here](http://developer.samsung.com/internet/android/releases).

![](https://cdn-images-1.medium.com/max/800/1*V9qgx9m93r_Wb44I83tFlw.png)

Update: Samsung Internet for Android app icons

#### How do I get hold of the latest version?

Samsung Internet can be downloaded [from the Play Store](https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjJ9ca807HOAhWKPxQKHWWBD8AQFggcMAA&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.sec.android.app.sbrowser%26hl%3Den&usg=AFQjCNHFUtXo9QkFUJjvtZ6AtDq4KpTPYg&sig2=mKDKBXxOnNeLq0_pqzj5_w&bvm=bv.129391328,d.d24) or the Samsung [Galaxy Apps](http://www.samsung.com/global/galaxy/apps/galaxy-apps/) store, if you have a supported Samsung device. The store page contains the full list, but generally speaking, S4 and newer, running Android 5+.

#### How do I debug?

Set up your Samsung device for development in the [usual way](http://stackoverflow.com/a/18103158/396246), i.e. tap the Build number 7 times, then enable USB debugging in the Developer Options.

You can then debug remotely using Chrome on the desktop. Any pages you have open in Samsung Internet should be listed for inspection under _chrome://inspect_:

![](https://cdn-images-1.medium.com/max/800/0*Z2XLtfdmNrSAae0A.)

As Ada [shared here](https://medium.com/@Lady_Ada_King/hi-brian-this-is-how-i-do-remote-debugging-294b286009f9#.4dal2mby9), you can enable port forwarding and connect to a server running on your desktop machine. You will need the Chrome app running on your desktop. If your local URL (127.0.0.1) does not resolve, visit _chrome://inspect_ and ensure port forwarding is enabled. Please note that to establish port forwarding you will need to open the Chrome app on your mobile device too.

_Update: For more information, see the_ [_Remote Debugging docs here_](https://samsunginter.net/docs/remote-debugging.html)_._

#### What if I don’t have a Samsung phone?

Samsung have a [Remote Test Lab](http://developer.samsung.com/remotetestlab/rtlDeviceList.action) that lets you use devices remotely. You can register for a free account. Other cloud device labs such as [TestObject](https://testobject.com/) and [BrowserStack](https://www.browserstack.com) also have Samsung devices with Samsung Internet installed. You might also find one at a local [open device lab](https://opendevicelab.com/).

_Update: Our_ [_new public beta is now available on GED (Nexus/Pixel) phones_](https://medium.com/samsung-internet-dev/samsung-internet-beta-now-available-without-sign-up-e0d5d4010838)_!_

#### Where can I find out more information?

Please see the resources [here on the official site](http://developer.samsung.com/internet) and our [developer hub](https://samsunginter.net/).

#### How do I report bugs or ask questions about the browser?

You can post an issue on our [support repository](https://github.com/SamsungInternet/support). If it’s [a suitable question](http://stackoverflow.com/help/asking) for Stack Overflow, you could also try asking there using the [‘samsung-browser’ tag ](http://stackoverflow.com/questions/tagged/samsung-browser)— we’ll keep an eye out!

We’ll be out meeting and speaking with as many of you as we can. Check our [team events calendar](https://calendar.google.com/calendar/embed?src=ada.is_798flqlnghvdh2abjml9vqc8a0%40group.calendar.google.com&ctz=Europe/London) to see which events we will be attending and speaking at over the coming weeks.

You can also find us on Twitter at [@samsunginternet](https://twitter.com/sbrowserdevrel) or individually at [@torgo](https://twitter.com/torgo), [@Lady\_Ada\_King](https://twitter.com/lady_ada_king), [@diekus](https://twitter.com/diekus) and [@poshaughnessy](https://twitter.com/poshaughnessy).

We hope you enjoy developing with Samsung Internet and we look forward to hearing from you!

#### p.s. Our beta version is now public!

We now have an open beta which, for the first time, is available to download not only Samsung Galaxy devices but also Google devices. Please [see here for further information](https://medium.com/samsung-internet-dev/samsung-internet-beta-now-available-without-sign-up-e0d5d4010838).

Tagged in [Android](https://medium.com/tag/android), [Samsung](https://medium.com/tag/samsung), [Web Development](https://medium.com/tag/web-development), [Browsers](https://medium.com/tag/browsers), [Mobile Web](https://medium.com/tag/mobile-web)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [August 8, 2016](https://medium.com/p/6c3a3be42f72).

[Read this article on Medium](https://medium.com/@poshaughnessy/introducing-samsung-internet-for-developers-6c3a3be42f72)
