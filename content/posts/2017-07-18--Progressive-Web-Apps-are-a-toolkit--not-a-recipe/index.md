---
title:  Progressive Web Apps are a toolkit, not a recipe
category: "PWA"
cover: img.jpg
author: Peter O'Shaughnessy
authorImg: https://miro.medium.com/fit/c/240/240/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
---

### Progressive Web Apps are a toolkit, not a recipe

#### Update: OK, they are a recipe too, but hear me out…

![](https://cdn-images-1.medium.com/max/800/1*h4GXyKSbj8wz0emAfqElFg.jpeg)

By [Italian_Bicycles](https://commons.wikimedia.org/wiki/File:Campagnolo_Tool_Kit_Super_Record_Wooden_Box_Nr._16.jpg)

The term ‘Progressive Web App’ is generally interpreted as a recipe for a bunch of features that must be combined together:

> “…from what I understand, a PWA is a mobile web site with a service worker (ok), a home screen icon (this is not new) and push notifications (which nobody wants)”  
> \- [Progressive Web Apps — Yeh or Meh?](http://developer.telerik.com/topics/web-development/progressive-web-apps-yeh-meh/)

But as always with the Web, these technologies are optional and it’s up to you to combine them in the best way you see fit.

If you want to make a web experience that can respond offline and can have its own homescreen icon on mobile, that’s great. If browsers [detect this](https://medium.com/samsung-internet-dev/what-does-it-mean-to-be-an-app-ace43eb6b94d), they might help to encourage your users to save your app to their homescreen by showing [special icons](https://samsunginter.net/docs/ambient-badging) and [banners](https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/).

This doesn’t mean that you’re forced into applying a whole set of features though. It’s not all-or-nothing; you’re free to cherry-pick. For example, if you don’t want to introduce push notifications, you don’t need to! The only reasons that push notifications are mentioned so often in terms of PWAs are:

*   When used appropriately, they can be very effective for re-engaging users. See the stats and case studies [here](https://www.pwastats.com/) and [here](https://developers.google.com/web/showcase/), for example.
*   They’re an example of the new kinds of functionality that are powered by _service workers_ — a fundamental feature transforming what’s possible on the Web. As well as letting web apps work offline and respond to push messages, they also lay the groundwork for other great features such as [background sync](https://developers.google.com/web/updates/2015/12/background-sync).

#### UX over checklists

Tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse/) are great, but there’s a risk that we focus too much on ticking all the items off the [checklist](https://developers.google.com/web/progressive-web-apps/checklist) and too little on our user experience. Instead of getting caught up around a set of features that specific tools or browsers recognise in different ways, it’s better to consider which features can enhance the experience for your users.

Apply those that make sense for you, not just those you think will make it a ‘PWA_’_. As [Frances Berriman said](https://fberriman.com/2017/06/26/naming-progressive-web-apps/) about the terminology: _“worrying about it is a distraction from just building things that work better for everyone”_.

#### A toolkit, not a recipe

Instead of thinking of PWAs as a _recipe_, let’s think of them as a _toolkit_. A toolkit that contains the key capabilities of native apps. A toolkit we can use to improve people’s experiences on the web.

> “…my main complaint with PWAs: that they’re marketed as some brand new great thing, when really it’s just a handful of new features for the web”  
> \- [Progressive Web Apps — Yeh or Meh?](http://developer.telerik.com/topics/web-development/progressive-web-apps-yeh-meh/)

PWAs may be “just” a handful of new features for the web, but it’s a powerful new set. We think they deserve to start a new chapter for the Web.

**_Update:_** _After being involved in this_ [_thread with Alex Russell and Sacha Grief_](https://twitter.com/poshaughnessy/status/887789652140331009)_, I wanted to add that some browsers and tools do check for a PWA ‘recipe’; they provide additional features if you combine the basic technologies (essentially service worker + web app manifest) together. I’ve since written about this in_ [_“Here’s what you get for free with a Progressive Web App”_](https://medium.com/samsung-internet-dev/heres-what-you-get-for-free-with-a-progressive-web-app-74b7ac5bdb3a)_. Hopefully together these posts provide a broader perspective: you don’t have to follow the recipe, but if you do,_ [_this is what you’ll get_](https://medium.com/samsung-internet-dev/heres-what-you-get-for-free-with-a-progressive-web-app-74b7ac5bdb3a)_._

Tagged in [Web Development](https://medium.com/tag/web-development), [Progressive Web App](https://medium.com/tag/progressive-web-app)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [July 18, 2017](https://medium.com/p/b2fd68613de5).

[Canonical link](https://medium.com/@poshaughnessy/progressive-web-apps-are-a-toolkit-not-a-recipe-b2fd68613de5)
