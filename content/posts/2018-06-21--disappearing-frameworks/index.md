---
cover: img.jpg
title: "Disappearing Frameworks"
description: "Frameworks like Angular, React and Ember are par-for-the-course for complex web development these days. Over this decade (Angular was first released in 2010) they have grown to become defacto standards for many of us, helping countless organisations to structure their code, manage state and build complex UIs, based on reusable components."
category: Web Development
img: https://cdn-images-1.medium.com/max/1200/1*kgsg1x5BusOENJEARPQudQ.jpeg
author: Peter O'Shaughnessy
authorImg: https://cdn-images-1.medium.com/fit/c/120/120/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
tags: [Web Development, Framework, JavaScript, Web, Performance]
---

# Disappearing Frameworks

How new web platform features and compile-time frameworks are establishing the next era of web development

![Credit: [Stefan Bucher](https://www.flickr.com/photos/bucher/684595491)](https://cdn-images-1.medium.com/max/2000/1*kgsg1x5BusOENJEARPQudQ.jpeg)*Credit: [Stefan Bucher](https://www.flickr.com/photos/bucher/684595491)*

Frameworks like Angular, React and Ember are par-for-the-course for complex web development these days. Over this decade (Angular was first released in 2010) they have grown to become defacto standards for many of us, helping countless organisations to structure their code, manage state and build complex UIs, based on reusable components.

However, as you might know, JavaScript is [our most expensive web asset](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/) — the most likely to [negatively impact our pages’ interactivity](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/). And we’re shipping [more of it to our users](https://httparchive.org/reports/state-of-javascript) than ever. The average web page [is now over 3MB](https://speedcurve.com/blog/web-performance-page-bloat/), bigger than the size of the [original Doom game](https://www.wired.com/2016/04/average-webpage-now-size-original-doom/)! We may have fast networks and cheap data plans but our users [may](https://twitter.com/poshaughnessy/status/987400541838848000) [well](https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-1/) [not](https://whatdoesmysitecost.com).

As [Alex Russell]() [has calculated](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/), going beyond just **130KB** for *all* our assets can mean failing to load within 5 seconds on a baseline phone and network. Yet some of our favourite frameworks can [take up more than that](https://gist.github.com/Restuta/cda69e50a853aa64912d) *just by themselves*.

Can we have the benefits that we’ve become used to from these frameworks, while avoiding the bloat? A great *Developer Experience* and a great *User Experience*? I believe so. And I believe that we’re entering a new era of web development that will be defined by this... An era where our *frameworks disappear*.

### Svelte

An example of this trend is [Svelte](https://svelte.technology/), “the magical disappearing UI framework”.

![[https://svelte.technology/](https://svelte.technology/) (not to be confused with sveltejs.com :))](https://cdn-images-1.medium.com/max/2648/1*_ye71YWD5pZ4du_HjMDzKg.png)*[https://svelte.technology/](https://svelte.technology/) (not to be confused with sveltejs.com :))*

Svelte is a *compile-time framework*, not a client-side framework. We’re used to sending big JavaScript bundles over to our users, and expecting their browsers to parse and execute the scripts. Svelte doesn’t work like that. Instead, it compiles your application into small, standalone, vanilla JavaScript modules. In other words, by the time it gets to your users, it will have disappeared!

An example of an app that was built using Svelte is [Pinafore](https://pinafore.social/), a Progressive Web App client for the [Mastodon decentralised social network](https://joinmastodon.org/), built by [Nolan Lawson](undefined) from Microsoft. Pinafore gets [a very fast result from Web Page Test](https://www.webpagetest.org/result/180618_CB_d0e10506615eb99ebd4e2a97166070fe/) and a score of 98 for performance from [Lighthouse](https://developers.google.com/web/tools/lighthouse/).

![A [toot](https://toot.cafe/@flakoot/100226502630578333) about pinafore.social, viewed at pinafore.social :)](https://cdn-images-1.medium.com/max/2000/1*9IQptHqvUSyiJ1iNUIRffQ.png)*A [toot](https://toot.cafe/@flakoot/100226502630578333) about pinafore.social, viewed at pinafore.social :)*

Svelte itself is pretty minimal, but it has a related project called [Sapper](https://sapper.svelte.technology/) which builds a whole developer experience on top of it. Inspired by [Next.js](https://github.com/zeit/next.js/), it includes server-side rendering, code-splitting, scoped styling, declarative routing and live reloading with hot-module replacement. Furthermore, the [Sapper starter template](https://github.com/sveltejs/sapper-template) gives you a [PWA](https://developer.mozilla.org/en-US/Apps/Progressive) by default, with a web app manifest and a service worker with automatic resource caching. *(NB. Sapper isn’t invisible on the client-side — it includes [a very small runtime API](https://sapper.svelte.technology/guide#runtime-api) too).*

I asked Nolan how he found using Svelte and Sapper. He told me that he found Svelte “a dream to work with”. Sapper “is a little less mature” and he had [some](https://github.com/sveltejs/svelte/issues/1411) [issues](https://github.com/sveltejs/sapper/issues/242) with it, but he’s happy with it too. I’ve also started using them for a new project and so far the combination of all those developer features along with the super performance really does [feel ideal](https://svelte.technology/blog/sapper-towards-the-ideal-web-app-framework)!

### Stencil

Svelte has also [inspired](https://news.ycombinator.com/item?id=15081241) an alternative project from Ionic: [Stencil](https://stenciljs.com/).

![More magic! — [stencil.js](https://stenciljs.com/)](https://cdn-images-1.medium.com/max/3388/1*CahsIB4jgsl0T2NhhsuKTw.png)*More magic! — [stencil.js](https://stenciljs.com/)*

Again, the goal is to adopt “the best concepts of the most popular frameworks”, but to achieve better performance:
> “With… traditional frameworks and bundling techniques, the team was struggling to meet latency and code size demands for Progressive Web Apps that ran equally well on fast and slow networks, across a diversity of platforms and devices.” — [stenciljs.com](https://stenciljs.com/)

To understand what Stencil consists of, I found this[ introduction from Rob Bearman](https://component.kitchen/blog/posts/a-look-at-stenciljs) useful. There’s also a [video intro here](https://youtu.be/MqMYaT1GlWY) by [Maximilian](https://twitter.com/maxedapps). The output from Stencil is a standard Web Component (more on Web Components below), not specific to Stencil. This means you could use them in conjunction with another framework if you wanted (but this post is about frameworks disappearing, not multiplying! 😉).

*NB. It’s not promoted much in the docs, but it’s also possible to configure Svelte to compile directly to Web Components too ([here’s an example](https://github.com/Rich-Harris/ivy-code-size) — with the ‘customElement’ flag [set here](https://github.com/Rich-Harris/ivy-code-size/blob/master/rollup.config.js#L14) — and [here’s how the resulting output looks](https://gist.github.com/Rich-Harris/ff78dafa2e75bae672e9b3e89259819a#file-custom-element-js-L177-L209)). However, [Rich Harris](undefined), the developer of Svelte (and [Rollup](https://rollupjs.org/guide/en) and other amazing things!) told me that he doesn’t think the benefits of enabling this are that great right now.*

Stencil is also similar to Google’s more well-known [Polymer,](https://www.polymer-project.org/) but it’s intended to fully disappear from the output! I haven’t used either enough to comment too much, but Polymer could be worth another look too. The recent [version 3](https://www.polymer-project.org/3.0/docs/about_30) moved from HTML Imports to ES Modules (more on this below) and from Bower to npm. There’s also a [PWA Starter Kit](https://github.com/Polymer/pwa-starter-kit) that [Alex Russell](undefined) [recommends](https://twitter.com/slightlylate/status/1004777167064985600) as the best place to begin building performant web apps. It gives you the [PRPL pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) (Push, Render, Pre-cache, Lazy-load) out of the box.

### Next-gen Angular

Thanks to Rich Harris for informing me that Angular is following this trend too! [Angular Elements](https://angular.io/guide/elements) — new in Angular 6 — allows you to export Angular components as self-bootstrapping Web Components. Currently, it still requires “a minimal, self-contained version of the Angular framework [to] be injected”, but they are “working on custom elements that can be used by web apps built on other frameworks”.

![(Kind of angular) ivy. Credit: [Auntie P](https://www.flickr.com/photos/auntiep/28551118/)](https://cdn-images-1.medium.com/max/5120/1*TYGLWXZFrIj6C7gVwkm6sQ.jpeg)*(Kind of angular) ivy. Credit: [Auntie P](https://www.flickr.com/photos/auntiep/28551118/)*

Plus Angular’s [next-gen Ivy renderer](https://github.com/angular/angular/issues/21706) is designed to drastically reduce the output code size. (Although worth a look: in the spirit of friendly competition, Rich has created [a comparison of the output](https://github.com/Rich-Harris/ivy-code-size) from Svelte, compiling to Web Components, versus Ivy!).

It’s great that popular frameworks are embracing this approach and making their output leaner too. Hopefully, as more and more web apps transition over, it will have a big impact on web performance.

Furthermore, increasingly we *may not need a framework at all.* Frameworks can of course make development easier and will continue to provide useful additions, but the web platform itself is providing more functionality than ever…

## The web platform as a framework

In her article [“A Rube Goldberg Machine”](https://samsunginter.net/rube-goldberg-article/) and [subsequent talk](https://youtu.be/DCRN1cG7sOA), my colleague [Ada Rose Cannon](undefined) shared how new CSS and JavaScript features can be “thought of as frameworks built into the web platform”. For example, CSS Custom Properties (a.k.a. CSS Variables) might mean you don’t need a CSS precompiler like [Sass](http://sass-lang.com/) anymore. And CSS Grid might now save you from downloading Bootstrap.
> “You don’t need a framework to use CSS Grid. CSS Grid *is* a framework.”
- [Rachel Andrew](https://twitter.com/rachelandrew)

### Web Components

[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) are especially powerful and the key to much of this trend. The features behind them — Custom Elements, Shadow DOM and HTML templates — [aren’t available everywhere](https://caniuse.com/#search=web%20components) yet, but [as Ada says,](https://youtu.be/DCRN1cG7sOA?t=11m31s) they have pretty good support and [there’s a polyfill](https://www.webcomponents.org/polyfills/) which gives them even better support, so you can use them today!

Ada and [Ruth John](undefined) recently developed a music visualisation web app using Web Components and shared [their lessons learned here](https://medium.com/samsung-internet-dev/lessons-learned-making-our-app-with-web-components-bf55379cfcda).

You can feel even safer adopting newer features like Web Components if you use Server-Side Rendering (SSR) and implement your client-side with [Progressive Enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/).
> My personal preference is to build a great SSR experience and then enhance it to a Single Page App.
- [Ada Rose Cannon](https://medium.com/samsung-internet-dev/isomorphic-es-modules-151f0d9a919b)

### Isomorphic ES modules

You can also adopt [ES modules](https://flaviocopes.com/es-modules/) now! Again, browser support is pretty good, and you can support older browsers with [the ‘nomodule’ fallback](https://jakearchibald.com/2017/es-modules-in-browsers/#nomodule-for-backwards-compatibility).

In fact, if you are OK with using the SSR + Progressive Enhancement approach, then you can even use ES modules without needing a bundling tool to [rewrite them](https://www.sitepoint.com/transpiling-es6-modules-to-amd-commonjs-using-babel-gulp/) for other browsers — since older browsers can still function without JavaScript. And by using [a module loader called ESM](https://www.npmjs.com/package/esm), we can also [use these ES modules directly in Node too](https://medium.com/web-on-the-edge/tomorrows-es-modules-today-c53d29ac448c).

This is great, because we get to reuse our scripts across the front-end and back-end (i.e. “isomorphic rendering”) without jumping through hoops. We can structure our front-end code nicely, without having to bundle our scripts together, dump lots of script tags on the page, or introduce client-side module loaders.

This is exactly what Ada demonstrated in her [first Twitch tech talk](https://youtu.be/fe6-HQLBJh8) this month. There is also a [blog post explainer here](https://medium.com/samsung-internet-dev/isomorphic-es-modules-151f0d9a919b).

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/fe6-HQLBJh8" frameborder="0" allowfullscreen></iframe></center>

I hope this post has shared how we’re starting to embark on a new era of web development. An era that is less reliant on traditional UI frameworks, CSS libraries and bundlers. An era where we ship less bytes and load our web apps quicker. An era of *disappearing frameworks*.

*Thank you to Nolan Lawson, Rich Harris and Ada Rose Cannon and for their help and inspiration for this article. This article is [cross-posted here on my personal blog too](https://peteroshaughnessy.com/posts/disappearing-frameworks/).*

*Postscript: I heard [Rich Harris’s JSConf EU](https://youtu.be/qqt6YxAZoOc) talk recommended after writing this. It’s an excellent run through of this topic — highly recommended!*



By Peter O'Shaughnessy on June 21, 2018.

[Canonical link](https://medium.com/samsung-internet-dev/disappearing-frameworks-ed921f411c38)
