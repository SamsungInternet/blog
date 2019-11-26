---
permalink: "/What-does-it-mean-to-be-an-App-/"
title: What does it mean to be an App?
category: "PWA"
cover: img.jpg
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### What does it mean to be an App?

#### Ambient Badging and Importance (or not?) of URLs

We want your feedback.

When building Samsung Internet we want to use Ambient Badging to let users know the website they are browsing may be installable and behave like an app.

The Web App Manifest defines how a website behaves when it is installed as an app. By setting the Display property to ‘Standalone’ or ‘Fullscreen’ when added to the homescreen, the web app will open with no browser Chrome and be indistinguishable from a native app.

Ambient Badging is an icon we show in the URL bar when we detect the webpage is installable as an app, allowing the user to add it to their ‘Home screen’.

![](https://cdn-images-1.medium.com/max/800/1*nA-iavAK6cLQusH3NYG-Ew.png)

The criteria we use to decide if the site is a web app are as follows:

*   On HTTPS
*   Has a Service Worker Registered
*   Has a Web App Manifest
*   The Web App Manifest has `name` or `short_name`
*   The Web App Manifest has `start_url`
*   The Web App Manifest has an icon where size is at least `144x144`
*   The Web App Manifest has `display` set to `standalone` or `fullscreen`

This last point it the controversial point. Both those options hide the URL bar and all of the browser chrome.

By forcing developers to hide the URL bar to get the badge, we ensure that all web apps look and behave exactly like native apps.

But doing so forces developers to sacrifice the power which leaving the URL bar and the browser chrome can afford them.

It is a tricky question and we want to know how developers feel:

Tagged in [Web Development](https://medium.com/tag/web-development), [Mobile](https://medium.com/tag/mobile), [Samsung](https://medium.com/tag/samsung), [Ambient Badging](https://medium.com/tag/ambient-badging), [Progressive Web App](https://medium.com/tag/progressive-web-app)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [March 8, 2017](https://medium.com/p/ace43eb6b94d).

[Read this article on Medium](https://medium.com/@Lady_Ada_King/what-does-it-mean-to-be-an-app-ace43eb6b94d)
