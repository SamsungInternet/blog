---
permalink: "/Updating-the-polyfill-service-/"
title: Optimising A-Frame Assets for Faster Starts
category: "Web Development"
cover: img.jpg
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### Updating the polyfill service.

Samsung has a web browser.

V5 of that web browser came out recently:

[**Announcing Samsung Internet 5.0**  
_As some of you may know we have been testing a public beta release for the next major version of Samsung Internet. We…_medium.com](https://medium.com/samsung-internet-dev/announcing-samsung-internet-5-0-1ac2bfc14b78 "https://medium.com/samsung-internet-dev/announcing-samsung-internet-5-0-1ac2bfc14b78")[](https://medium.com/samsung-internet-dev/announcing-samsung-internet-5-0-1ac2bfc14b78)

Time to update [the Polyfill Service](https://cdn.polyfill.io) so that people using v5 don’t receive polyfills they do not require.

Firstly, see what polyfills are required.

#### 1\. Open up Chrome’s Inspector

paste into your url bar: _chrome://inspect_

![](https://cdn-images-1.medium.com/max/800/1*JtF_QUt4S-YV88zHPOFf9w.png)

Chrome inspector for debugging devices

#### 2\. Click inspect on an open tab:

![](https://cdn-images-1.medium.com/max/800/1*1ZsQXZ7Y20UYx_AP8uLZdg.png)

Inspecting gives you a preview and a developer console

#### 3\. Open up the polyfill.io targeted tests

Paste into the url bar: [https://polyfill.io/test/director?mode=targeted](https://polyfill.io/test/director?mode=targeted)

This runs all the targeted tests on the device so we can see what polyfills it has been given.

These correspond to the Polyfills needed for v4 which is more than we need.

You can explore the results by entering `global_test_results` into the console.

Array.from  
Array.of  
Array.prototype.@@iterator  
Array.prototype.contains  
Array.prototype.entries  
Array.prototype.fill  
Array.prototype.find  
Array.prototype.findIndex  
Array.prototype.includes  
Array.prototype.keys  
Array.prototype.values  
DOMTokenList.prototype.@@iterator  
Element.prototype.after  
Element.prototype.append  
Element.prototype.before  
Element.prototype.prepend  
Element.prototype.replaceWith  
Event.hashchange  
IntersectionObserver  
Intl  
NodeList.prototype.@@iterator  
Number.isInteger  
Object.assign  
String.prototype.contains  
Symbol  
Symbol.hasInstance  
Symbol.isConcatSpreadable  
Symbol.iterator  
Symbol.match  
Symbol.replace  
Symbol.search  
Symbol.species  
Symbol.split  
Symbol.toPrimitive  
Symbol.toStringTag  
Symbol.unscopables  
URL  
console.exception  
setImmediate

#### 4\. Work out which polyfills are required

Paste into the URL bar: [https://polyfill.io/test/director?mode=control](https://polyfill.io/test/director?mode=control)

This runs the test for every feature with no polyfills loaded. The tests which fail are the ones which are required.

They are listed under: `global_test_results.failingSuites`

Array.prototype.contains  
Element.prototype.after  
Element.prototype.append  
Element.prototype.before  
Element.prototype.prepend  
Element.prototype.replaceWith  
IntersectionObserver  
Intl  
String.prototype.contains  
console.exception  
setImmediate

As you can see the new version of Samsung Internet has greater support for new methods.

#### 5\. Compare to see what needs to be changed

There are none which need to be added. It’s to be expected but good to confirm there are no regressions.

These are no longer required:

Array.from  
Array.of  
Array.prototype.@@iterator  
Array.prototype.entries  
Array.prototype.fill  
Array.prototype.find  
Array.prototype.findIndex  
Array.prototype.includes  
Array.prototype.keys  
Array.prototype.values  
DOMTokenList.prototype.@@iterator  
Event.hashchange  
NodeList.prototype.@@iterator  
Number.isInteger  
Object.assign  
Symbol  
Symbol.hasInstance  
Symbol.isConcatSpreadable  
Symbol.iterator  
Symbol.match  
Symbol.replace  
Symbol.search  
Symbol.species  
Symbol.split  
Symbol.toPrimitive  
Symbol.toStringTag  
Symbol.unscopables  
URL

#### 6\. Clone the Polyfill service and make changes

Github Repo: [https://github.com/Financial-Times/polyfill-service](https://github.com/Financial-Times/polyfill-service)

We are editing the `config.json` of each polyfill to say where it is required:

![](https://cdn-images-1.medium.com/max/800/1*q48Mi-HgnGb6hiSvKneDtw.png)

Screenshot of git diff, showing ‘*’ replaced by ‘<5’

In this case Array.from is needed for versions less than 5. As version 5 is where it is fixed.

#### 7\. Test

Install the dependecies and then run the development envrionment

npm install  
npm run dev

Open up the test suite on the phone

[http://127.0.0.1:3000/test/director?mode=all](http://127.0.0.1:3000/test/director?mode=all)

If it doesn’t work make sure you have port forwarding enabled in the inspector by clicking the ‘Port forwarding…’ button:

![](https://cdn-images-1.medium.com/max/800/1*Je_d3xTF9cfih-xmgEIuHw.png)

Screenshot of Chrome showing that port forwarding is enabled. :3000 is shown in green.

#### 8\. Make Pull Request

[**Update polyfills config for Samsung Internet 5 by AdaRoseEdwards · Pull Request #1067 · Financial…**  
_This PR is to update the configuration of the polyfills to account for the recently released Samsung Internet 5.0. This…_github.com](https://github.com/Financial-Times/polyfill-service/pull/1067 "https://github.com/Financial-Times/polyfill-service/pull/1067")[](https://github.com/Financial-Times/polyfill-service/pull/1067)

#### 9\. Party

![](https://cdn-images-1.medium.com/max/800/1*IQ4Mnr_vqVwlJyc1kv1ogw.gif)

Tagged in [JavaScript](https://medium.com/tag/javascript), [ES6](https://medium.com/tag/es6), [Polyfills](https://medium.com/tag/polyfill), [Financial Times](https://medium.com/tag/financial-times), [Samsung](https://medium.com/tag/samsung)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [January 19, 2017](https://medium.com/p/33453bf3a2d5).

[Read this article on Medium]a(https://medium.com/@Lady_Ada_King/updating-the-polyfill-service-33453bf3a2d5)
