---
title: Samsung and the Polyfill Service
category: "JavaScript"
cover: img.png
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### Samsung and the Polyfill Service

As a developer I love the polyfill service. Using it I have fixed old IE compatibility issues by adding a single script tag.

A polyfill is a script implementing a feature from more recent web specs. For example theArray.from() polyfill will allow even old versions of IE to make use of the Array.from function even though it was only introduced in es2015.

Polyfills are extremely useful if you are transpiling your code because transpilers often just affect the syntax and don’t add the language features.

> See: [\[…new Set(1,2,3)\]](https://babeljs.io/repl/#?evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&code=%5B...new%20Set%281%2C2%2C3%29%5D) uses: Array.from, Array.isArray and Set

The polyfill service sniffs the useragent to only return the polyfills which are required by that browser try opening this link in two different browsers: one new, one old: [https://cdn.polyfill.io/v2/polyfill.js?features=default](https://cdn.polyfill.io/v2/polyfill.js?features=default)

Earlier this week I worked out the features which need polyfilling for the Samsung Internet and added Samsung Internet as a Browser in the service. The Samsung Developer Advocate team will continue to maintain the Samsung bits of the polyfill service so that Samsung Internet 4 and above will always be able to use latest language features not already available in the browser.

Pull Request:

[**Identify the polyfills needed for Samsung Internet 4 by AdaRoseEdwards · Pull Request #783 …**  
_I think this is correct, but would like confirmation. I ran the control test on the device to identify what features…_github.com](https://github.com/Financial-Times/polyfill-service/pull/783/files "https://github.com/Financial-Times/polyfill-service/pull/783/files")[](https://github.com/Financial-Times/polyfill-service/pull/783/files)

Tagged in [JavaScript](https://medium.com/tag/javascript), [ES6](https://medium.com/tag/es6)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [August 4, 2016](https://medium.com/p/d6e70a9f1684).

[Canonical link](https://medium.com/@Lady_Ada_King/samsung-and-the-polyfill-service-d6e70a9f1684)
