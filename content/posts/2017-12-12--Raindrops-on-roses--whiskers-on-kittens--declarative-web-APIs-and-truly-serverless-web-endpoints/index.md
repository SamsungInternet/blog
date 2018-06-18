---
title: Raindrops on roses, whiskers on kittens, declarative web APIs and truly serverless web endpoints
category: "Wewb Development"
cover: img.jpg
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### Raindrops on roses, whiskers on kittens, declarative web APIs and truly serverless web endpoints

#### Here are a few of my favourite things you may not have heard of.

![](https://cdn-images-1.medium.com/max/800/1*1YF3Hv1dN0yPNyKU9VgkyQ.jpeg)

This article introduces some cool things I have been playing with recently that have excited me. The thread which ties them together is getting communities of sites to work together across domains, but powered by the front end.

The three topics I will cover are:

*   a service: _IndieAuth_
*   a front end library: _Comlink_
*   a pattern: _APIs as Web Components_.

Each one provides a new way to think about how websites and APIs can be built to work together.

### Part 1. Indie Auth

The technology which epitomises the spirit of this blog post is [IndieAuth](https://indieauth.com/). IndieAuth is an authentication service which is based upon the concepts of URL ownership and the humble `<a>` tag and powered by OAuth.

If two websites link to each other using an `<a>`tag with the `rel="me"` attribute set then they are establishing that they both represent the same individual. E.g.

On twitter  
<a rel="me" href="https://ada.is"></a>

On ada.is  
<a rel="me" href="https://twitter.com/lady\_ada\_king"></a>

If one of those sites provides OAuth authentication then a user that can log into one website is also the owner of the other.

E.g. My website [https://ada.is](https://ada.is) links to [https://twitter.com/lady\_ada\_king](https://twitter.com/lady_ada_king) and vice versa. Twitter provides OAuth. So if I can prove I own that Twitter account by signing in with Twitter’s OAuth I also prove I own _ada.is_.

This allows me to authenticate by using my domain name, without exposing any permissions to any of my accounts.

Twitter and github are already set up to do this, check the HTML on twitter for the link back to someone’s website from their profile:

![](https://cdn-images-1.medium.com/max/800/1*9vVSZjyBEGhvJyjcC79zLg.png)

Demo: [https://indie-auth.glitch.me/](https://indie-auth.glitch.me/)

Demo Code: [https://glitch.com/edit/#!/indie-auth?path=index.html:1:0](https://glitch.com/edit/#!/indie-auth?path=index.html:1:0)

### Part 2. Comlink

[Comlink](https://github.com/GoogleChromeLabs/comlink) is a very lightweight library for exposing APIs between threads in the web.

It works by proxying the methods and responses using objects or strings. This can even allow you to **run APIs in a different web page** in an iframe or even on a different computer using WebRTC!!

Comlink enables you to use JavaScript asynchronously between two contexts without worrying about the messaging channel.

1.  You could use it between two threads on the same web page. E.g. Between a web worker and the client.
2.  You could use it between two web pages on the same machine — even a third party website!! E.g. Loading a third party web page in an iframe and use its Comlink-exposed API to control it.
3.  You could use it between two machines with Comlink proxying the data over WebRTC.

There are examples for these use cases on the Github page. But the second option excites me the most.

> Comlink allows you to **build an API exposed through a hidden iframe so it can work when there is no Network by leveraging service workers!!**

An API can be written and exposed on a normal web page and exposed using comlink to be accessed via iframes. This page can be made available offline by caching it in the service worker.

This API can even be used by 3rd party websites because comlink relies on postmessage which works between different origins!

Paul Kinlan from Google describes it in some detail here: [https://paul.kinlan.me/the-web-is-my-api/](https://paul.kinlan.me/the-web-is-my-api/)

I have built a demo on Glitch here you can remix and make your own API: [https://glitch.com/~comlink-template](https://glitch.com/~comlink-template)

[**Glitch**  
_The community that helps you build the app or bot of your dreams_glitch.com](https://glitch.com/~comlink-template "https://glitch.com/~comlink-template")[](https://glitch.com/~comlink-template)

The power of this pattern astounds me. It works well for APIs which can store information locally and expose an API to be used by the same user which is storing the data.

*   User information is kept entirely locally, meaning no need for logins. Users can start using your product straight away, without signing up!
*   Because you are not storing data, no worries under Data Protection. Especially relevant due to the new stringent [EU GDPR directives](https://www.eugdpr.org/).
*   Your API will work even when the user is offline! By using a service worker to cache the web page which contains your comlink endpoint. It can take advantage of background sync if your API also has components which rely on the network.
*   The page which exposes the API can be stored at the edge of CDN making it blazingly fast!!

The kind of API this is useful for is when the user is storing some data on your server for other websites to get. Some potential examples:

*   Gravatar could expose an API to get the currently logged in user’s avatar. So if you make a post on a third party website it can get your publicly available avatar without needing to be provided your email.
*   A website could be used to store commonly used configuration details for Virtual Reality. These settings could then be reused from multiple VR websites so they only have to be set once by the user.

**Be careful!** It is important to balance user privacy and API power.

For example Facebook or Twitter could expose an API to expose the user’s name or online handle to enable seamless integration with third party websites. Information like this maybe harmful to the user if exposed.

When we use Comlink to expose information it is best to write minimal APIs to expose any data, so the API can’t be used by a malicious 3rd party to get information like email addresses or real names.

### Part 3. APIs as Web Components

APIs on the Web may take many forms such as:

*   Traditional REST APIs
*   Web Socket connections
*   WebRTC connections
*   In a Web Worker
*   In an iframe via Post Message (See the section on Comlink)
*   Or just a plain old JavaScript function.

Often the consumer of APIs doesn’t actually care how the API gets its data, they just want a way to interact with it and get some data out.

Web Components allows us to provide a uniform interface to our APIs through HTML. With a common way of configuration, exposing methods and returning data.

**Configuration** can be done by setting **attributes**.

**Methods** can be placed on the Element’s **prototype**.

**Output** can be via emitting custom **events** or by updating the **shadow dom.**

An advantage of using HTML is that authoring HTML has been a problem which has been solved many times since the dawning of the web.

An API exposed as a web component can be integrated into any website whether it is static HTML, a PHP/Ruby/Node backend framework or a complex client side rendering solution like React or Angular.

On a running page JavaScript can be used to attach one API to another, i.e. listen for events on one element and call a method on another.

A complex API which may have a lot of potential configuration can rely on its children to describe it. Much like a `<ul>` element needs to contain `<li>`, a parent API element can change its behaviour based on its children.

A-Frame ([https://aframe.io](https://aframe.io)) is a good example of this. A-Frame is a Web Component abstraction of Three.js, it provides many elements for describing a 3D scene.

The `<a-scene>` element sets up a render loop and a canvas. The child entities such as `<a-cube>` and `<a-light>` don’t have any effect on the DOM but they do add additional elements to the scene and can be dynamically updated using, for example `el.setAttribute('width', '3');` .

There are many 3rd party components for A-Frame. Some make network requests or run complex physics in a web worker but their interface is entirely exposed via HTML. So when we are composing our web page we don’t need to worry about how it works underneath, it is kept behind the scenes.

**Another great example is** [Lea Verou](https://twitter.com/LeaVerou)’s [Mavo](https://mavo.io/) which allows us to make reactive Web Applications using only HTML. This is very powerful as it enables non-developers to produce modern Web Applications just as HTML/CSS enables anyone to produce static web pages.

I have made a very small library I use to help me author Web Components. It provides some callbacks to help with attribute parsing:

[https://gist.github.com/AdaRoseCannon/60dc448b1124bcfb7be14209b8124f5c?ts=2](https://gist.github.com/AdaRoseCannon/60dc448b1124bcfb7be14209b8124f5c?ts=2)

### How we can learn from these

As API authors we can design our APIs to take inspiration from these technologies.

**Allow user privacy,** by limiting the data we gather, we can protect our users and reduce our own liability for holding user data. **Indie Auth** allows us to authenticate a user using only their domain name. **Client Side APIs** allow us to provide APIs which only expose select information without requiring us to give a third party information like our username or email address.

**Working together as a web community,** using **Client Side APIs**, we can let other websites work better with our services. We can lift each other up together by giving more seamless experiences. **With APIs as Web Components** we allow our APIs to be very quickly integrated into _existing CMSs and Frameworks_ because our components are HTML and each web site has their own solution for authoring the HTML.

**Enabling our APIs to work for anyone,** HTML is a very forgiving language and very accessible to new users. By having our API code be small chunks of HTML which can be copy pasted into existing web sites anyone can start using them without needing to be an expert.

Thanks for reading :)

Tagged in [Web Development](https://medium.com/tag/web-development), [React](https://medium.com/tag/react), [Web Components](https://medium.com/tag/web-components), [Indieweb](https://medium.com/tag/indieweb), [Front End Development](https://medium.com/tag/front-end-development)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [December 12, 2017](https://medium.com/p/50d733e6d867).

[Canonical link](https://medium.com/@Lady_Ada_King/raindrops-on-roses-whiskers-on-kittens-declarative-web-apis-and-truly-serverless-web-endpoints-50d733e6d867)

Exported from [Medium](https://medium.com) on June 15, 2018.