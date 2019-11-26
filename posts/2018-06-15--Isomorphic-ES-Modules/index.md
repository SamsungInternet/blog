---
permalink: "/Isomorphic-ES-Modules/"
title: Isomorphic ES Modules
category: "Web Development"
cover: img.jpg
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### Isomorphic ES Modules

Earlier I demonstrated how to build a Single Page App which shares templates with the Server Side Code. (See the video below.)

We share the web app’s templates to enable the first page load to be pre-rendered on the server. This practice lets Web Apps start faster and be more resilient to network failure.

![](https://cdn-images-1.medium.com/max/600/1*9utC7ugklGeMjQoU_MluQQ.png)

ES Modules can be shared with your Server code and the code run in the Web Browser.

In the live coding session we use the new EcmaScript (ES) Modules because it allows us to share code directly without using work-arounds such as making bundles using WebPack or Browserify.

ES Modules have really high level of browser support in spite of being so new. Support for ES Modules is now up to 70%! And support for Samsung Internet will be coming in a release in the near future.

> Final source code from the video demo: [https://glitch.com/edit/#!/ada-isomorphic?path=server.js:2:20](https://glitch.com/edit/#!/ada-isomorphic?path=server.js:2:20)

#### Defining the terms ES Modules and Isomorphic

*   [**ES Modules**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)— _Noun._

You may already be using a module system in the way you work. If you are a web developer who works in _node_ there is a good chance you have encountered CommonJS modules. CommonJS modules allow you to acquire snippets of JavaScript from other JavaScript files. For example:

`const formatDate = require('./time-utils/format-date.js');`

There is also the ability to pull JavaScript code from files provided by the _npm_ packaging system.

`const express = require('express');`

These examples also can be used in the browser by using bundling tools like _rollup_, _browserify_ or _webpack_. This can result in shipping a large bundle of code to the browser rather than loading them when they are needed unless one sets your development environment to split your code automatically.

ES Modules,  are similar to CommonJS modules in that they allow us to acquire snippets of JavaScript from other JavaScript files, except this time it is designed to work in the browser, over the network. For example:

`<script type="module">   
  import formatDate from 'https://site.com/time-utils/format.js';  
  formatDate(Date.now());  
</script>`
or from a local URL:

`<script type="module">  
  import formatDate from './time-utils/format.js';  
  formatDate(Date.now());  
</script>`

We will explore some the differences between CommonJS modules and ES modules throughout this article.

*   **Isomorphic**— _Adjective._

Code written in an isomorphic fashion has the property of being able to perform its function in both a node server and in the web browser.

This has the benefit of not having to reimplement logic which needs to happen on both the client and the server. Having to rewrite logic in two different languages can result in differing behaviour, or the logic slowly diverging over time as changes are made to each file independently.

#### Using ES Modules to write a Single Page Application with Server Side Rendering for the first load.

I will use the shorthand _SSR_ to refer to Server Side Rendering and _SPA_ to refer to Single Page Apps throughout this article .

An ideal web app experience is one which starts fast and then becomes a seamless native-like experience. One which responds quickly to interactions, has seamless transitions between pages and never needs to reload the page.

A website built as a SPA behaves beautifully but often requires a large JavaScript bundle to be downloaded before the first render can happen. Server Side Rendering allows us to display the content the user needs before the JavaScript has downloaded.

> **NB!** This can have a side effect of having a website which looks loaded but is unresponsive because the JavaScript is still being downloaded and parsed. Therefore it is important that all [links](#) on your web site work and go to another page which can then be rendered on the server.

This is my plan for building the app in this fashion:

1.  Setup Client Side Rendering.
2.  Get the Client Side Rendering to update the page when I press links.
3.  Import the client side templates on the server.
4.  Get the server to render the same pages at the same URLs.

If you are doing this yourself it doesn’t matter whether you do the client side first or the server side. My personal preference is to build a great SSR experience and then enhance it to a Single Page App.

In this example I start of making a SPA and give it fast loading through SSR as an enhancement, because today many developers like to start off with the client side first and I wanted this to be representative of their experience. _(Also it puts the more complex parts for SSR at the end, thus bringing this article to a satisfying conclusion.)_

#### 1\. Setup Client Side Rendering

Our first task here is to pick an appropriate framework (or none if you’d prefer.) For our purposes it must have the following properties: be able to run on the client and the server and be able to be loaded via ES modules.

Since ES Modules are still very new, there isn’t universal support for them yet; many libraries only provide CommonJS or UMD modules. Fortunately many larger, well supported projects provide both CommonJS modules and an ES module version.

We are going to go with [HyperHTML](https://github.com/WebReflection/hyperHTML) for this example but hopefully the problems we encounter and solve are applicable to your framework of choice. Of course this gets even simpler if you have no framework at all.

I like HyperHTML because it is very fast, it is very tiny (4.6kb minified and compressed) and there is a compatible library for the server called ViperHTML which we can use there.

So first we install HyperHTML via npm:

`npm install --save hyperhtml`

Now we have to access it in the web browser. To do this I have to expose the files via my web server. In this case I am using _express_:

`app.use('/node\_modules/', express.static('./node\_modules'));`

Now I can access any file in my `node_modules` directory on the client. I can import HyperHTML from the `esm` directory on the server:

```
<script type="module">
  // \`wire\` is used for making templates in HyperHTML  
  // \`bind\` is for writing those templates to the DOM  
  import {wire, bind} from '/node_modules/hyperhtml/esm/index.js';

  // HyperHTML describes its templates using template literals  
  const myTemplate = wire()`<h1>My Template</h1>`;

  // We use \`bind\` to render it.  
  const render = bind(document.body);  
  render\`This is my template: ${myTemplate}\`;  
</script>
```

The code we will share between the client and the server is the templates. They will contain logic to fetch information and display it in lists. I will store it in a seperate `.js` file to be referenced by both the client and the server:

```
// in `templates.js`
```

import {wire} from '/node_modules/hyperhtml/esm/index.js';

const myTemplate = wire()`<h1>My Template</h1>`;

export {  
  myTemplate  
};`

We can then import this file as usual in our script:

```
<!\-\- In main.html -->

<script type="module">  
  import { bind } from '/node_modules/hyperhtml/esm/index.js';  
  import { myTemplate } from './templates.js';

  const render = bind(document.body);  
  render\`This is my template: ${myTemplate}\`;  
</script>
```

#### 2\. Responding to click events.

Once we have written templates from our app we probably have links which should change the URL and render something different.

These links should include the appropriate app state information to allow us to do server side rendering later. Even though it is a Single Page App, something page-like should result in changing the ‘/path’ and state should be passed via query parameters.

> **NB!** In addition the URL shouldn’t just be a hash url. i.e. `<a href="#search">Search</a>` because a URL like that won’t trigger the page load needed for server side rendering in case the script hasn’t loaded or has an error.

Once one of the ‘a’ tags are clicked we can intercept it and respond appropriately:

```
window.addEventListener('click', e => {  
  if (e.target.tagName === 'A' && e.target.href) {  
    const url = new URL(e.target.href);  
    const parameters = new URLSearchParams(url.search);

    // ... Some logic to check to see if this should be handled  
    // within the Single Page App ...

    render`${someTemplate(someData)}`

    // Prevent the page from reloading  
    e.preventDefault();  
  }  
});
```

If you are using `<form>` tags for traversing the site, e.g. search functionalities, then you will need to intercept and handle those too.

They can be a little more complex since you will need to validate the form and respond appropriately but the principal is the same as for handling link clicks. Remember the `e.preventDefault()` otherwise the page will reload anyway.

But now we should have a basic Single Page App using our templates.

Unfortunately users are unable to refresh the page or share the URL because we have not updated the URL bar so we should added some logic to handle that.

```
window.addEventListener('click', e => {

    // ... Our click handling logic ...

    // Update the URL Bar  
    history.pushState({feed}, 'Some title', e.target.href);

    render`${someTemplate(someData)}`

    // Prevent the page from reloading  
    e.preventDefault();  
  }  
});

window.addEventListener('popstate', function () {  
  if (history.state) {  
     renderToMain`${myTemplate(history.state.feed)}`;  
  }  
});
```

The history handling logic is the simplest possible case. If you are relying on some kind of asynchronous operation which may fail, like network events, the logic may be more complicated to handle returning to the old URL if the async operation fails.

#### 3\. Using ES Modules in the Node Server

Node modules by default use CommonJS for importing modules. If you try using `import` in node you will get an error because node doesn’t yet understand ES Modules.

Fortunately there is solution. The node module [_esm_](https://www.npmjs.com/package/esm)  allows us to use imports in the browser just by changing the way we launch the app.

npm install --save esm

Then we can change our start script to invoke `node` with `-r esm`. For example this is how I start node in my `package.json`:

```
"scripts": {  
  "start": "node -r esm server.js"  
},
```

Esm allows us to use ES modules side by side with CommonJS. These two commands are equivalent:

```
const path = require('path');

import path from 'path';
```


So let’s import our templates:

`import { myTemplate } from './static/templates.js'`

This would normally work great for JavaScript dependencies in the same directory but in the case of depending on files from our `/node_modules` directory node will try to find that by the path `/node_modules` which is not a real directory along side the script. It is actually somewhere else.

As a result importing our template.js file is going to error because `./static/templates.js` is depends on `/node_modules/hyperhtml/esm/index.js`, which doesn’t resolve to a valid path in node.

In addition, on the server we want to use _viperhtml_, the node version of _hyperhtml._

In the video above, I solve this by creating a proxy file `/static/scripts/hyper/index.js` which gets loaded in node:

```
import {wire, bind} from 'viperhtml';  
export {  
  wire, bind  
}
```

When I try to load `/static/scripts/hyper/*` on the client side, express intercepts the route and returns `/node_modules/hyperhtml/esm/index.js` as before.

This works, but is a little messy. Fortunately since recording the video, [Andrea Giammarchi](https://twitter.com/webreflection) has come up with a neater solution by creating an additional loader which changes the path to rewrite `import module from '/m/module/index.js'` to `import module from 'module/index.js'` which works on the node side.

[**esm-iso**  
_Isomorphic ESM Loader_www.npmjs.com](https://www.npmjs.com/package/esm-iso "https://www.npmjs.com/package/esm-iso")[](https://www.npmjs.com/package/esm-iso)

In case you prefer to use `/node_modules/` for your URL to access node modules like I do in my examples, I forked it to map `import module from '/node_modules/module/index.js'` to `import module from 'module/index.js'`

[**slash-node-modules-loader**  
_Use with -r slash-node-modules-loader to be able to require from require('/node_modules/:somedir/somefile.js') to have…_www.npmjs.com](https://www.npmjs.com/package/slash-node-modules-loader "https://www.npmjs.com/package/slash-node-modules-loader")[](https://www.npmjs.com/package/slash-node-modules-loader)

There is an example demo showing how to use this here: [https://glitch.com/edit/#!/isomorphic?path=server.js:19:0](https://glitch.com/edit/#!/isomorphic?path=server.js:19:0)

These modules allow, any imports to `/m/something` or `/node_modules/something` to resolve correctly. Without needing to do any clever rewrites.

We still have to do a redirect for the case where the node library and the browser library are different. In this situation our JavaScript module should require the server side version, we can then add a route in the networking to redirect to the client side version when it is tried to be loaded.

// main.js

// This works fine when loaded on the server  
import myLibrary from '/node_modules/node-my-library';

On the server we instead of serving `node-my-library` we serve `browser-my-library` instead so the browser version uses the correct file.

```
// server.js  
...  
app.use(  
  '/node_modules/`node-my-library`',  
   express.static(`'/node_modules/browser-my-library`')  
)

app.use(  
  '/node_modules',  
  express.static('./node_modules')  
)
```

#### 4\. Using the templates on the server

This step will vary depending on the framework you are using, but here is how we render with viperHTML on the server:

{% raw %}
```
import {myTemplate} from './static/templates.js';  
import viperHTML from 'viperhtml';  
import fetch from 'node-fetch';

// Make the browser fetch work in node  
global.fetch = fetch;

// Async version of bind() for writing to the network  
const asyncRender = viperHTML.async();

  
const indexFile = fs.readFileSync('./static/index.html', 'utf8').split('<!-- render here -->');

app.get('/', (req,res) => {

  // Set the content type header  
  res.set({ 'content-type': 'text/html; charset=utf-8' });

  // Use viperhtml's to render and pipe over the network  
  (asyncRender(chunk => res.write(chunk))`  
    ${{html: indexFile\[0\]}}  
    ${myTemplate(req.query.foo)}  
    ${{html: indexFile\[1\]}}  
  `)  
  .then(() => res.end())  
});
```
{% endraw %}

We render the template according to what the url’s query parameter was by passing the foo query parameter into the template `req.query.foo`

Final source code from the video demo: [https://glitch.com/edit/#!/ada-isomorphic?path=server.js:2:20](https://glitch.com/edit/#!/ada-isomorphic?path=server.js:2:20)

#### Thanks for reading

This article tries to compress a lot of complex ideas into short paragraphs. I also gloss over details not relating to using ES Modules, You can see more detail and the logic grow more organically by watching the video.

Thank you to [Andrea Giammarchi](https://twitter.com/webreflection) for helping with HyperHTML and coming up with the node rewriting module. I hope we’ll see a lot more usage of ES Modules in the browser and on the server soon.

Tagged in [JavaScript](https://medium.com/tag/javascript), [Node](https://medium.com/tag/node), [Nodejs](https://medium.com/tag/nodejs), [Web Development](https://medium.com/tag/web-development), [Isomorphic Applications](https://medium.com/tag/isomorphic-applications)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [June 15, 2018](https://medium.com/p/151f0d9a919b).

[Read this article on Medium](https://medium.com/@Lady_Ada_King/isomorphic-es-modules-151f0d9a919b)
