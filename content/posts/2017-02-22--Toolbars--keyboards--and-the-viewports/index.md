---
title: Toolbars, keyboards, and the viewports
category: "Web Development"
cover: img.jpg
author: Peter-Paul Koch
authorImg: https://miro.medium.com/fit/c/240/240/1*4VXDobnR6b7kKNiuySyWTQ.jpeg
---

### Toolbars, keyboards, and the viewports

![](https://cdn-images-1.medium.com/max/800/1*IFNfTRIE6og7IhH5Xnn3hg.jpeg)

Not this kind of viewport ([public domain](https://pixabay.com/en/space-shuttle-earth-clouds-582557/))

All mobile browsers have two viewports. The **layout viewport** constrains your CSS — `width: 100%` means 100% of the layout viewport — while the **visual viewport** describes the area of the page the user is currently seeing. [This visualisation](http://quirksmode.org/mobile/viewports/) of the two viewports might be useful as a reminder.

Today’s article studies what happens when these viewports change size. It also studies the resize event.

Some viewport changes are welcomed, such as the visual viewport resize after an orientation change or a zoom action. Others are esoteric, such as rewriting the meta viewport tag. Still others are seen as an annoyance, notably the appearance and disappearance of browser toolbars and the software keyboard.

### The resize event

The resize event is supposed to fire whenever any of the two viewports is resized, and on desktop it does just that — mostly because both viewports are equal to the browser window, and resizing the browser window fired this event since the days of Netscape 3.

On mobile, things are more complicated. Brownie points for you if the term “browser-dependent” went through your head: you have reached levels of paranoia appropriate to fundamental browser research. Welcome to my world.

The resize event is fairly reliable when an orientation change occurs, or when the browser toolbar enters or leaves the screen. In other situations, not so much.

What do orientation changes and toolbars have in common? I have no clue. It is a mystery to me why exactly these two use cases should be reliable, and other, arguably more important, ones aren’t.

You know where this is going, right? So here you are: [the inevitable compatibility table](http://www.quirksmode.org/dom/events/resize_mobile.html) for your perusing pleasure. Don’t set too much store on logic; the browser differences aren’t really logical. We’ll treat several of the more important ones later in this article.

The biggest problem we’re facing is the lack of a **zoom event**. Where the orientation change has had its own private event for years now, the zoom action, arguably the more important one, hasn’t.

I’ve maintained for six years now that we badly need a zoom event because it would be very useful to know if the user is zooming. Still, very few browsers agree with me, and those who do (basically only Edge) fire a resize event instead, which helps us a little bit but which also fires in other circumstances.

### Common visual viewport changes

The funny thing is: a zoom action and an orientation change both change the dimensions of the visual viewport. Thus you’d say they’d be treated the same — but they aren’t.

All browsers fire a resize event when the user changes orientation. (For those of you who like brain-breakers, consider what happens when the user changes the orientation by 180 degrees. Does this constitute an orientation change? Or a resize?)

However, only Edge, BlackBerry 10, and the Android WebKit WebViews (but not the regular browsers) fire a resize event when the user zooms. Thus, in most browsers it’s impossible to figure out when the user has zoomed — well, you could run a script that checks the visual viewport size every so often, but the performance hit would be … let’s not go there, OK?

Knowing when the user zooms can be important in some situations, notably when you’re using `position: fixed` and are worried the user might not see the entire fixed element. (The theoretical solution here is [position: device-fixed](http://www.quirksmode.org/blog/archives/2010/12/the_fifth_posit.html), but so far it has only been implemented in Edge.)

Detecting zoom has become the more important now that [Apple enabled zoom everywhere](https://webkit.org/blog/7367/new-interaction-behaviors-in-ios-10/). The days of unzoomable web pages are over, but that might mean certain designs need to know about the user zooming in or out. But we still can’t figure that out. Dear browser vendors, please add a zoom event. Thanks.

### Meta viewport change

It is possible to rewrite the meta viewport tag on the fly and force browsers to resize their layout viewport. (It is not possible, though, to remove the tag altogether.) Like this — and yes, this works in all browsers:

var metaViewport = document.querySelector('meta\[name=viewport\]');  
metaViewport.setAttribute('width','380');

Granted, this is a very obscure effect. I discovered it years ago, but in all those years I’ve never yet found a good, practical use case. Also, the effect itself is rather ugly, since the web page abruptly changes, and users might be disoriented.

This resizing of the layout viewport fires a resize event, except for Safari/iOS. Thus, browsers handle this obscure edge case correctly, for what it’s worth.

### Toolbars and keyboards

Now we get to the meat: incoming and outgoing toolbars and keyboards. A typical browser toolbar, which contains a URL bar and maybe Back or Reload buttons, takes about 60px of vertical space. This space is not part of the browser window, so the visual viewport height is 60px less than the screen size would lead you to believe.

Most mobile browsers hide their URL bar when the user scrolls down, and show them when the user scrolls up. Although this is an excellent UI feature, it also constitutes a visual viewport change of about 60px that may cause trouble in some cases.

For instance, as [Jeremy noted](https://adactio.com/journal/11690) recently, `vh` units, which theoretically make a lot of sense in responsive designs, misfire due to this visual viewport change. If you give an element `height: 100vh` (i.e. 100% of the visual viewport height) it initially works perfectly, but as soon as the user scrolls the visual viewport height increases by about 60px, and the element also becomes 60px higher, which might break the page layout.

Jeremy also notes that this problem is impossible to solve with CSS alone. You can use JavaScript, as we’ll see in a bit, but that may slow down your pages. Therefore a solution has to come from the browser vendors themselves.

It appears [the Chrome team is already working on it](https://developers.google.com/web/updates/2016/12/url-bar-resizing). Basically, from Chromium 56 on 100vh will be calculated relative to the maximum visual viewport height, i.e. without toolbars or keyboards, regardless of whether those toolbars and keyboards are currently visible. Meanwhile, `window.innerHeight` will continue to react to incoming or exiting toolbars and thus give the true visual viewport height.

That’s cool, but it may not help you right now, and it doesn’t apply to any other browser but the latest Google Chrome yet. Still, it’s the best solution on offer, and I’m afraid there’s no choice but to have a little more patience.

#### Keyboards in Safari/iOS

In addition iOS has (surprise!) its own unique problem. While in all other browsers the addition of the software keyboard restricts the browser window, and thus the visual viewport, on iOS the software keyboard is an independent layer that’s shown on top of the browser window. The browser window does not react in any way to the appearance or disappearance of the keyboard. The visual viewport does not change, and the resize event does not fire.

I spent more than a day in research, but had to concede defeat: it’s undetectable. Viewport changes, media queries, aspect ratios, other events such as blur, nothing gives any clue that the software keyboard has been opened on Safari.

### Conclusion

Thus, we’re left with a frustratingly incomplete picture. Resizing viewports works most of the time, with the Safari keyboard issue as the most important exception, but current JavaScript events are not sufficient to keep track of all the changes. In particular, we need a zoom event.

If your project requires detailed knowledge of the visual viewport height you’re out of luck. Still, browser vendors are more and more attuned to developers’ needs, so it’s perfectly possible that solutions to the problems sketched above will be forthcoming.

Tagged in [Web Development](https://medium.com/tag/web-development), [Responsive Design](https://medium.com/tag/responsive-design), [Mobile](https://medium.com/tag/mobile), [Web](https://medium.com/tag/web)

By [Peter-Paul Koch](https://medium.com/@pp.koch) on [February 22, 2017](https://medium.com/p/10abcc6c3769).

[Canonical link](https://medium.com/@pp.koch/toolbars-keyboards-and-the-viewports-10abcc6c3769)
