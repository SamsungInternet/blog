---
cover: img.jpg
title: "How to use WebDriver and ChromeDriver to automate Samsung Internet"
description: "Good news! Since v8 of Samsung Internet, now available in Beta, it is possible to automate the browser using ChromeDriver, the Selenium WebDriver protocol implementation for Chromium browsers."
category: Web Development
img: img.jpeg
author: Peter O'Shaughnessy
authorImg: https://cdn-images-1.medium.com/fit/c/120/120/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
tags: [Web Development, Framework, JavaScript, Web, Performance]
---

# How to use WebDriver and ChromeDriver to automate Samsung Internet

Good news! Since v8 of Samsung Internet, [now available in Beta](https://medium.com/samsung-internet-dev/hello-samsung-internet-8-2-beta-521e4b215fb3), it is possible to automate the browser using [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/), the Selenium WebDriver protocol implementation for Chromium browsers.

We’ve had requests for this from companies who wish to incorporate Samsung Internet into their automated testing suites, so we’re pleased to share how you can help to ensure your web properties work well in one of the [most popular](http://gs.statcounter.com/browser-market-share/mobile/worldwide/#monthly-201707-201807) mobile browsers worldwide!

ChromeDriver versions match up with particular versions of the Chromium engine. Samsung Internet v8.x is based on Chromium M63. This means that you will need to use [ChromeDriver v2.36](https://chromedriver.storage.googleapis.com/index.html?path=2.36/) (which supports v63–65).

Here is a basic Python script example which shows how to configure ChromeDriver to use Samsung Internet (from [our examples repository on Github](https://github.com/SamsungInternet/chromedriver-examples)):

<iframe src="https://medium.com/media/9f215185ea3c69c1a756b522214bd223" frameborder=0></iframe>

For full instructions, [please see the README](https://github.com/SamsungInternet/chromedriver-examples). Here’s what should happen when you run it — the browser will be launched and controlled automatically:

![Samsung Internet being controlled by ChromeDriver](https://cdn-images-1.medium.com/max/2000/1*2TUPEi_EfiBKQAZwtEg8Zw.gif)*Samsung Internet being controlled by ChromeDriver*

If you are interested in the ChromeDriver change required to make this possible, [here is the patch](https://chromium-review.googlesource.com/c/chromium/src/+/924441) made by our Samsung colleagues to make it more extensible. Thank you to the wider ChromeDriver community for their support. If you require any support using ChromeDriver for Samsung Internet, you can [raise an issue](https://github.com/SamsungInternet/support/issues) or contact us by [email](mailto:webadvocacy@samsung.com) or [Twitter](https://twitter.com/samsunginternet).

### One more thing…

We also have [a new and improved Cloud Device Farm](https://program.developer.samsung.com/cloud-device-farm-lp/) for remote testing real Samsung mobile devices, part of the free [Samsung Developers Program](https://program.developer.samsung.com/dashboard/cloud-device-farm/). You might find this useful if you want to try out your websites and apps on Samsung hardware too. (Remember that you don’t necessarily need a Samsung device to try out Samsung Internet anymore though - nowadays it’s available for all Android 5+ from the [Play Store](https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en) or Galaxy Apps Store!)


By Peter O'Shaughnessy on September 13, 2018.

[Canonical link](https://medium.com/samsung-internet-dev/how-to-use-webdriver-and-chromedriver-to-automate-samsung-internet-e1249814823e)
