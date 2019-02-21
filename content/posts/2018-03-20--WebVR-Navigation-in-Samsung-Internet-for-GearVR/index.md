---
title: WebVR Navigation in Samsung Internet for GearVR
category: "Immersive Web"
cover: img.jpg
author: Winston Chen
authorImg: https://miro.medium.com/fit/c/240/240/1*XJ8E-BWim09Gjsr7MckJSQ.jpeg
---

### WebVR Navigation in Samsung Internet for GearVR

Being able to move from one site to another is a cornerstone of the Web. Samsung Internet for GearVR (v5.6) now supports navigation between WebVR to WebVR scenes.

Developers now have the power to create different WebVR scenes and link to them using URLs. Mozilla added this [feature to Firefox](https://blog.mozvr.com/link-traversal/) last year and added the [Link-Traversal](https://blog.mozvr.com/link-traversal/) feature to their A-Frame framework.

Link Traversal Demo from Ada Rose Cannon

### Background

Navigating between WebVR pages by changing the URL or by using the back and forward buttons is important to the web. This Navigation feature is officially supported in the [WebVR W3C specification](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplayeventreason) and will be further improved on.

This is accomplished by the browser by firing the _vrdisplayactivate_ event if the previous webpage was presenting in WebVR. This is implemented in Samsung Internet for GearVR 5.6. To take advantage of this WebVR pages should include an event listener for the _vrdisplayactivate_ event to immediately begin presenting after a page load.

    window.addEventListener('vrdisplayactivate' function (evt) {    /* A page can now start presenting in the headset */  vrDisplay.requestPresent([{ source: myCanvas }]).then(function () { ... });}

There are some caveats about this feature. One caveat is Samsung Internet exits WebVR presentation before reentering WebVR presentation to provide the user a glimpse of the new URL the user is navigating to. There are security concerns with the user navigating to a new page without knowing the URL.

We plan on improving this in the future and making the navigation more immersive. Another caveat is navigating from a page in WebVR presentation to a 2D page is not supported for now. We plan to implement a solution to this problem. And another caveat is navigating to the previous page requires exiting WebVR before going back to the previous page and then entering WebVR manually. We also plan to improve the user experience navigating to previous WebVR pages.

### Link Traversal

Link Traversal is great for when you want to change what is being displayed to something built in a different environment or in a different domain. It is not as fast as swapping out the content but it allows us to traverse between VR websites built using different technologies. For example a VR Web site built with BabylonJS can link to a different Web Site built with A-Frame and vice versa provided that the `vrdisplayactivate` event is used to enter VR.

### WebVR Navigation with links

As seen in the video at the top, Link Traversal is supported in GearVR. You do not have to use A-Frame to add WebVR Navigation in your projects it will work between any WebVR site which listens for the `vrdisplayactivate` event. You can see some code examples [here](https://github.com/SamsungInternet/WebVR-navigation-demos). And a working demo [here](https://samsunginter.net/WebVR-navigation-demos/links-galaxy.html).

![](https://cdn-images-1.medium.com/max/800/1*NYKBs6VmiVNc7ecHwYyalA.png)

### Deep Linking

Oculus proposed an interesting concept too for WebVR navigation: [Deep Linking](https://developer.oculus.com/documentation/vrweb/latest/concepts/carmel-navigation/). The idea is to use URL parameters to dictate which WebVR page to render and how it should render. This enables one page to render multiple scenes so a user can move between them without needing the `vrdisplayactivate` API.

An example URL as a parameter representing the WebVR State is below.

http://example.com?state=1&x=20&y=40&z=60

The “?” denotes the start of parameters which are key value pairs. The “&” separates each parameter. Each parameter can help determine how a web page displays content to a user.

The next step is saving these states in the browser history with the [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). The three methods of interest are: replaceState(), pushState() and onpopstate. ReplaceState() can update the current history state with a new state. For example, if the user logged into a WebVR game, going back should not log the user out. PushState() can add new URLs and associated states to the browser history to preserve user actions. An example is a user going to a new WebVR scene. Both of these methods simply modifies the URLs and updates the browser history without reloading the page. Onpopstate is an event fired by the browser whenever the user is navigating through their history. WebVR pages should listen to this event to interpret the URL change.

Oculus has a nice [example](https://s3.amazonaws.com/static.oculus.com/carmel/WebVRSamples/Navigation/index.html?depth=1) demonstrating this concept. However, I wanted to build a more complicated example with WebGL scenes to demonstrate this Deep Linking idea.

You can check out the demo [here](https://samsunginter.net/WebVR-navigation-demos/deep-link.html?state=1).

### Future of WebVR

WebVR has been rebranded and improved in a newer specification, [WebXR](https://immersive-web.github.io/webxr/spec/latest/) Device API. This is to cover more technologies related to Augmented Reality and Mixed Reality.

With this amazing new feature on Samsung Internet for GearVR (v5.6), you can build more immersive WebVR applications. Feel free to tweet us (@Samsunginternet) your work!

Tagged in [Virtual Reality](https://medium.com/tag/virtual-reality), [Web Development](https://medium.com/tag/web-development), [Threejs](https://medium.com/tag/threejs), [Webvr](https://medium.com/tag/webvr), [JavaScript](https://medium.com/tag/javascript)

By [Winston Chen](https://medium.com/@winstonchen1337) on [March 20, 2018](https://medium.com/p/3fd88c91e0a6).

[Read this article on Medium](https://medium.com/@winstonchen1337/webvr-navigation-in-samsung-internet-for-gearvr-3fd88c91e0a6)
