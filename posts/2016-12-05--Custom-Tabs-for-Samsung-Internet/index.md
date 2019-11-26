---
title: Custom Tabs for Samsung Internet
category: "Browser Features"
cover: img.jpg
author: Peter O'Shaughnessy
authorImg: https://miro.medium.com/fit/c/240/240/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
---

### Custom Tabs for Samsung Internet

If you’re developing an Android app and want to launch some external web content, hopefully you’ll have considered using a _custom tab_. This is when you spin up an optimised browser view that can load quicker and integrate more seamlessly with your app. It can make for a nice user experience, because the user won’t be taken away to a separate app and the back button will work as though it’s a page within your app. From the menu, the user still has the option to open the page in the full browser too.

![](https://cdn-images-1.medium.com/max/800/1*euR8TRux2wG1IW5g_basnQ.png)

Samsung Internet custom tab demo — [source code here](https://github.com/SamsungInternet/examples/tree/master/custom-tab-demo)

The other options are launching the full browser straight away, or using your own WebView, but [as Paul Kinlan said](https://developer.chrome.com/multidevice/android/customtabs), _“launching the browser is a heavy context switch that isn’t customizable, while WebViews don’t share state with the browser and add maintenance overhead”_.

Many developers will be familiar with the custom tab feature in Chrome, but did you know it’s [supported in Samsung Internet](http://developer.samsung.com/technical-doc/view.do?v=T000000245&pi=2&ps=10&pb=Y&ct=&sc=) since version 4.0 too? This is good because it gives you another option as a developer, particularly if Samsung Internet is your users’ default browser — meaning that it’s the one they will expect to see. It also retains your users’ existing sessions. For example — as shown in the screenshot above — when this Medium.com custom tab loaded, I was logged in already.

Samsung Internet custom tabs work fundamentally in the same way as Chrome — described well by [Paul Kinlan here](https://developer.chrome.com/multidevice/android/customtabs) and [Joe Birch here](https://labs.ribot.co.uk/exploring-chrome-customs-tabs-on-android-ef427effe2f4). As for the browser choice, you can specify which one to use by setting the appropriate package name on your _ACTION_VIEW_ Intent — for example for Samsung Internet it’s _com.sec.android.app.sbrowser_. However, rather than hardcoding a particular browser, it’s much wiser to determine it by checking which apps the user has which can fulfil the Intent — and hopefully find one that’s been chosen as the default. You can do this with [something like the _getPackageNameToUse_ code here](https://github.com/GoogleChrome/custom-tabs-client/blob/master/shared/src/main/java/org/chromium/customtabsclient/shared/CustomTabsHelper.java#L63) from Google’s Custom Tabs Client. You can also customise the toolbar colour and available menu items if you wish.

I’ve made a quick [code sample here](https://github.com/SamsungInternet/examples/tree/master/custom-tab-demo) that demonstrates this working (the relevant code is here in the [_customtabdemo_ package](https://github.com/SamsungInternet/examples/tree/master/custom-tab-demo/app/src/main/java/com/example/samsunginternet/customtabdemo)). I’ve tested it on a Samsung S7 Edge with Samsung Internet and Chrome (where it launches with Samsung Internet, my default) and on a Nexus 5 (where it launches with Chrome).

![](https://cdn-images-1.medium.com/max/600/1*mc5smFp2g6AQXC5lejokcg.png)

Ninja Cat by [methodshop.com](https://www.flickr.com/photos/methodshop/3206290013) — Garfield sketch by [\_unicorn\_](https://www.sketchport.com/user/5392545660010496/_unicorn_)

Please just bear in mind that my Java is a bit rusty and my Android development skills are less ‘ninja cat’ — more ‘Garfield’! So if you spot any issues with the code, please do raise an issue or a PR. Also, I’d be really interested to hear from you in the comments: are you already using custom tabs? Have you found any resources particularly useful? Do your custom tabs support Samsung Internet? Thanks!

_Update:_ I’ve made a [couple of changes](https://github.com/SamsungInternet/examples/pull/1) after speaking with [Andre Bandarra](https://medium.com/u/a97b3497bd08) and reading his excellent [_Best Practices for Custom Tabs_](https://medium.com/google-developers/best-practices-for-custom-tabs-5700e55143ee).

Tagged in [Android](https://medium.com/tag/android), [Android App Development](https://medium.com/tag/android-app-development), [Samsung Internet](https://medium.com/tag/samsung-internet), [Chrome Custom Tabs](https://medium.com/tag/chrome-custom-tabs)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [December 5, 2016](https://medium.com/p/8563e4754b22).

[Read this article on Medium](https://medium.com/@poshaughnessy/custom-tabs-for-samsung-internet-8563e4754b22)
