---
title: Lessons Learned, making our app with Web Components
category: "Progressive Web App"
cover: img.jpg
author: Ada Rose Cannon
---

### Lessons Learned, making our app with Web Components

#### This is a post exploring how we used web components to create a web app and a toolkit to allow novice developers to build visualisations and configure a midi controller in their web site.

This is based on a case study where we built a suite of web components to allow anyone to make music visualisations and VJ for nightclubs. [Introductory article to this project](https://medium.com/samsung-internet-dev/vj-on-the-go-e56666fe55eb).

By [Ruth John](https://twitter.com/rumyra) and [Ada Rose Cannon](https://twitter.com/lady_ada_king)

Introductory Video showing what the project does.

#### Index

*   What are Web Components?
*   Patterns for using Web Components in an App
*   Advantages of Web Components for Controlling Complex APIs
*   Writing Web Components.
*   Documenting Web Components
*   Case Study: VJ-OTG, how to use our web components to make your own Visualisation App

#### What are Web Components?

Web Components are developer defined HTML Elements which work in the browser with other HTML elements like `<p>, <main> or <body>`. By designing our own new elements we can bring new powers to HTML to accomplish tasks previously only managed with JavaScript.

You can tell a Web Component from a regular HTML element because it has a hypen (`-`) in the name. For example:

<special-button></special-button>

Web Components have been in development for a few years but native support is increasing quickly and the polyfill allows us to use them almost anywhere.

This sample web component boiler plate by [Monica Dinculescu](https://meowni.ca/) can be remixed to get started quickly making your own Web Components: [https://glitch.com/edit/#!/simple-custom-element?path=views/index.html:1:0](https://glitch.com/edit/#!/simple-custom-element?path=views/index.html:1:0)

[**Glitch**  
_Combining automated deployment, instant hosting & collaborative editing, Glitch gets you straight to coding so you can…_glitch.com](https://glitch.com/edit/#!/simple-custom-element?path=views/index.html:1:0 "https://glitch.com/edit/#!/simple-custom-element?path=views/index.html:1:0")[](https://glitch.com/edit/#!/simple-custom-element?path=views/index.html:1:0)

#### Patterns for designing Web Components and using them to build an App

The high level goal of building an app primarily with Web Components is moving the app’s initial configuration state out of JSON and JavaScript into the HTML.

This simplifies the consumption of complex APIs and provides a unified interface for components from different authors to work together.

The pattern I use for Web Components is as such:

The HTML is used for **configuration** and sets the initial state of the page.

Custom elements do not need to update their attributes as the user interacts with them.

Custom elements should update their state when their attributes are changed externally using `el.setAttribute`. This allows us to control the elements after first render making them great for integrating into frameworks like React.

Think of the `<input value="some text" id="foo">` element; the attribute `value` does not change when you type into it. But the property `value` does change, allowing us to access the state.

<input id="foo" value="blah">

![](https://cdn-images-1.medium.com/max/800/1*wY6KTsXYm79JZSIk-fRQKg.png)

I have typed in “jkkkkk” previously it said: “blah”

![](https://cdn-images-1.medium.com/max/800/1*7YOWlgUC1pRTfgEDewQUKg.png)

**State** is maintained by each component individually and can be accessed by properties on the object. Sometimes similar elements need to work together and share state. Inspired by `<ul>` and `<li>` tags this is where we would make a wrapper element:

<magic-slider-wrapper>  
  <magic-slider></magic-slider>  
  <magic-slider></magic-slider>  
  <magic-slider></magic-slider>  
</magic-slider-wrapper>

In this case each `magic-slider` can fire events when it is changed or used and the `magic-slider-wrapper` can then maintain the group’s state and handle any changes accordingly.

**Inter-component messaging** is handled by event listeners. In the above example `<magic-slider-wrapper>` can listen for events on all of its children.

Sometimes I will build elements designed to receive a query selector as an attribute where it will listen for events:

<funky-dial min="0" max="100" id="my-dial">

<!\-\- Light bulb starts off maximum brightness but will respond to events fired by #my-dial -->  
<light-bulb value="100" listen-to="#my-dial"></light-bulb>

These elements need to be designed to work together as they have to know what event to listen out for e.g. ‘dial-rotate’ and the format of the event’s detail property i.e. {value: 80}.

Fortunately if two elements are not built to work together but follow this pattern, they can still be hooked together with a little JavaScript:

const dial = document.getElementById('funky-dial');  
const bulb = document.getElementById('light-bulb');

dial.addEventListener(  
  'some-dial-event',  
  function (e) {  
    bulb.setAttribute('value', e.detail.value);  
  }  
)

#### Advantages of Web Components for Controlling Complex APIs

The above patterns are based upon how existing HTML elements work currently, but logically extended for dynamic apps.

An app built with these ideas in mind ends up with a infrastructure looking a lot like traditional web pages from the early days of the web:

*   Styling/Layout performed by CSS
*   Initial state handled by HTML
*   Elements tied together with small, simple JavaScript

We can now much more simply write HTML by hand to describe our app as each functional piece has exactly one element. All of the extra DOM elements for functionality are hidden inside Web Components. So every element on the page should have some syntactic meaning to the author of the app.

We don’t even need to use extra elements for layout because of the powerful new layout API _CSS Grid_.

CSS Grid allows us to layout a page into a grid naturally without the need for endlessly nested `<div>` elements purely for helping with layout.

> Every element on the page should have some syntactic meaning.

The combination of the two results in clear understandable HTML which should be clear to the developer and any that may read the code after them.

The biggest benefit for end-developers who will be using your components is that all implementation details are hidden behind the HTML. The consumer of the component doesn’t really care if it queries the network or uses WebGL or WebRTC. As long as there is a common interface the consumer can plug the elements together and they will work.

#### Writing Web Components.

As linked above there is a great boiler plate you can use here: [https://glitch.com/edit/#!/simple-custom-element?path=views/index.html:1:0](https://glitch.com/edit/#!/simple-custom-element?path=views/index.html:1:0)

I tend to view a web component as 3 parts:

*   A `<template>` with the hidden structure of the Web Component. It may contain one or more `<slot>` for where the component’s descendants get added.
*   A `<style>` in the `<template>` for how the element should appear.
*   A definition `class` in JavaScript which extends from `HTMLElement`

By extending from HTMLElement you are given hooks into the attribute change lifecycle. In `observedAttributes` we define what attributes we listen for.

`attributeChangedCallback` gets fired every time an attribute is changed, or for each attribute set when the element is first instantiated.

class Demo extends HTMLElement {  
  constructor() {  
    super();  
    ...etc  
  }

  static get observedAttributes() { return \['foo'\]; }  
  attributeChangedCallback(attr, oldValue, newValue) {  
    if (attr === 'foo') this.doSomething();  
  }  
}

There are a fair few things I kept rewriting again and again and again, so I made a small framework to assist me. It is a class called `HTMLElementPlus` which extends from `HTMLElement` but provides some additional functionality

![](https://cdn-images-1.medium.com/max/800/1*aET1tKO-NOyaF6sQmb0aFw.png)

Snapshot of the page linked below.

[https://gist.github.com/AdaRoseCannon/60dc448b1124bcfb7be14209b8124f5c](https://gist.github.com/AdaRoseCannon/60dc448b1124bcfb7be14209b8124f5c)

*   It adds a callback `allAttributesChangedCallback` for when all attributes have been parsed. This is useful for not setting up anything with the initial state until all attributes are known.
*   It provides a simple event emitter function.
*   It provides quick access to nodes in the Shadow DOM using the `ref` attribute, based upon React’s behaviour.
*   One can define optional functions to allow you to set default attribute values and to pre-parse attribute values before firing the `allAttributesChangedCallback` event.

You use it by extending it, instead of HTMLElement — it is very useful for writing very complex elements.

#### Documenting Web Components

I couldn’t find an out-of-the-box solution for documenting Web Components so I wrote a plugin for JSDoc to add a new tag, to allow tagging of elements.

Plugin: [https://github.com/SamsungInternet/vj-otg/blob/master/jsdoc/custom-elements.js](https://github.com/SamsungInternet/vj-otg/blob/master/jsdoc/custom-elements.js)

Example:

/**  
 \* [@customelement](http://twitter.com/customelement "Twitter profile for @customelement") vj-otg-source-uniform  
 \* [@description](http://twitter.com/description "Twitter profile for @description")   
 \* Used for defining a special type of uniforms. Textures.   
 \* These can be accessed using the texture sampler in the glsl code.  
 \* [@property](http://twitter.com/property "Twitter profile for @property") name {number} name of the variable in glsl  
 \* [@property](http://twitter.com/property "Twitter profile for @property") src {querySelector} element to use as texture, can be &lt;img&gt; or &lt;video&gt;  
 \* [@property](http://twitter.com/property "Twitter profile for @property") index {number} index for retrieving texture using getSource(index, coordinate); in the glsl code  
 \* [@example](http://twitter.com/example "Twitter profile for @example") <caption>Import an image, name it minnie.</caption>  
 \* <vj-otg-source-uniform src="#minnie" name="minnie" index="1"></vj-otg-source-uniform>  
 */  
class VJOTGSource extends HTMLElementPlus {  
 constructor() {  
  super();  
 }  
...

Output: [https://samsunginter.net/vj-otg/docs/vj-otg-source-uniform.html](about:invalid#zSoyz)

Sorry the full documentation for our web components is not complete yet. I am adding it as I continue developing the project.

#### Case Study: VJ-OTG, how to use our web components to make your own Visualisation App

Demo: [https://samsunginter.net/vj-otg/](https://samsunginter.net/vj-otg/)

Here we have two sets of Web Components:

*   Web Components for handling midi, prefixed with ‘midi-’ e.g. midi-cc.
*   Web Components for doing visualisations using shaders, prefixed with ‘vj-otg-’ like vj-otg-source-uniform.

When used all together, the HTML ends up describing the app almost entirely: [https://github.com/SamsungInternet/vj-otg/blob/master/index.html](https://github.com/SamsungInternet/vj-otg/blob/master/index.html)

Perhaps the greatest challenge of this endeavour was finding an easily configurable way to support midi controllers which can come in a wide variety of formats with many knobs, sliders, pads and buttons.

Custom elements ended up being a really nice way to define the capabilities of our midi hardware in a way that is intuitive to change for other hardware configurations. It may be nice in the future to make an API to generate HTML presets for well known midi hardware.

One of the really clever things Ruth did was to make our midi controller effect the custom CSS properties of the visuals, allowing us to do some effects using CSS: [https://github.com/SamsungInternet/vj-otg/blob/master/fx.js](https://github.com/SamsungInternet/vj-otg/blob/master/fx.js)

The CSS file: [https://github.com/SamsungInternet/vj-otg/blob/master/style/fx.css](https://github.com/SamsungInternet/vj-otg/blob/master/style/fx.css)

This allows us to turn the midi ‘cc’ dials to effect the CSS filter.

**Part 1. Writing**

When building these components we didn’t jump right into making components. First we produced working prototypes of features we wanted and got them working together.

We then isolated individual pieces of functionality and wrapped them in components. E.g. a component for beat detection, a component to emulate a midi pad and another component to run some shader code for visualisations.

This didn’t always work as intended I ended up refactoring twice because I had underestimated the scope of a component.

> I ended up refactoring twice because I had underestimated the scope of a component.

For the first refactor, as we worked on the project, the visualisation component was doing too many things. It was becoming difficult to add new functionality and did not have neat HTML. I split it into 3 components: one for visuals, one for distortion and one for uniforms.

For the second refactor those three components had each grown too big so I separated each of them into a total of 18 components that does one thing each. These small components were neat and it meant I had plenty of examples in case I wanted to quickly add a new component.

Although the two refactors took some time, I don’t regret not separating them from the start. It’s hard to know where to draw the boundary for granularity but in separating them I learnt what functionality they had in common and was able to move lots of the logic into a parent class, making the resulting code pretty neat.

**Part 2. Connecting the Midi Elements to the Visuals Elements**

We have two kinds of visuals in this demo:

*   CSS filters, controlled by custom CSS properties
*   Shaders controlled by _uniforms_ i.e. external variables in the shader code.

**For the CSS filters**, we made a small script to update the custom properties on the visual components whenever they fired an event:

document.addEventListener('midiMsg', function(e) {  
  document.querySelector('vj-otg-visuals')  
    .style.setProperty('--'+e.target.id, e.detail.data\[2\]);                    });

Source: [https://github.com/SamsungInternet/vj-otg/blob/master/fx.js](https://github.com/SamsungInternet/vj-otg/blob/master/fx.js)

filter:  
 invert( calc( var(--pad1) / 127 ) )  
 hue-rotate( calc( var(--pad2) * 2deg ) )  
 brightness( calc(1 + var(--pad3) * 0.05 ) )  
 blur( calc( var(--pad4)*0.1px )  );

Source: [https://github.com/SamsungInternet/vj-otg/blob/master/style/fx.css](https://github.com/SamsungInternet/vj-otg/blob/master/style/fx.css)

**For the shader effects,** they are controlled by the uniforms. Each Web Component for dealing with the shaders creates uniforms in the shader for each attribute. i.e.

<vj-otg-rotate angle="90"></vj-otg-rotate>

Creates a uniform in shader language for the angle attribute:

uniform floatvj\_otg\_rotate\_0\_angle;

When we update the angle attribute the uniform value is updated too. E.g. `document.querySelector('vj-otg-rotate').setAttribute('angle', '20')`

This can be used to control it, although in this situation we usually use a component we made to listen for midi events and update its value accordingly. This allows us to declare the relationship between the shader and the midi controllers in the HTML.

<vj-otg-midi-uniform name="cc4" midi-el="#cc4"></vj-otg-midi-uniform>

**Part 3. Deployment**

Initially my intention was to have a few modules which be could be included as script tags in the head. This makes it easier to explain and build as there is no build step thus keeping the code pretty neat.

However, when I separated the visuals into many components, it felt like there were too many. 18 separate script tags would be unwieldy for the user. So I made a [single js file](https://github.com/SamsungInternet/vj-otg/blob/master/components/visuals/filters.es6.js) to import them with es6 imports.

Ideally if es6 imports were widely supported I would leave it at that, but for now I am compiling them all together with [rollup](https://rollupjs.org/guide/en) as it is quick to set up and has support for es6 imports.

This is what the `<head>` of the HTML file looks like, I have annotated it to describe what each line is:

<!\-\- The stylesheet to make it look good -->  
<link rel="stylesheet" href="./style/style.css">

<!\-\- The web component polyfill -->  
<script src="[https://cdn.rawgit.com/webcomponents/webcomponentsjs/edf84e6e/webcomponents-sd-ce.js](https://cdn.rawgit.com/webcomponents/webcomponentsjs/edf84e6e/webcomponents-sd-ce.js)"></script>

<!\-\- My Web Component helper class -->  
<script src="./components/html-element-plus.js"></script>

<!\-\- The three components for accessing and emulating the midi controller -->  
<script src="./components/midi-controller.js" defer></script>  
<script src="./components/midi-cc.js" defer></script>  
<script src="./components/midi-pad.js" defer></script>

<!\-\- THREE.js is a dependency for the visual filters  -->  
<script src="vendor/three.js/three.min.js"></script>  
<script src="vendor/three.js/Detector.js"></script>

<!\-\- A JavaScript Bundle containing all of the visual components bundled together, made with rollup. -->  
<script src="./components/visuals/filters.js" defer></script>

<!\-\- A javascript file to help with the CSS effects, the CSS file for this is imported in style.css -->  
<script src="./fx.js" defer></script>

Source: [https://github.com/SamsungInternet/vj-otg/blob/master/index.html](https://github.com/SamsungInternet/vj-otg/blob/master/index.html)

#### Conclusion

I am really proud of the work we have accomplished. It’s amazing to show that you can configure the whole app’s state including the complexities of describing a midi controller with HTML and how they can tie together using standard web APIs.

In summary, when building a suite of Web Components I use the following patterns:

*   Use HTML to describe the initial state of the app and describe the relationship between components.
*   Components communicate changes by emitting events. To be listened for with `el.addEventListener`.
*   Components can be updated by setting their attributes.
*   They may provide methods or state information on the object itself to be used in JavaScript.
*   Some elements which work together may have the capability of listening for events on other elements.
*   Use JavaScript for tying together loose ends and binding together elements which aren’t explicitly built to work together.

Thanks for reading! Stay tuned we have more posts on this case study coming soon.

![](https://cdn-images-1.medium.com/max/800/1*49B5hcNekW7WB6t_okZ5Jg.png)

The title for Social Media Purposes ;)

Tagged in [JavaScript](https://medium.com/tag/javascript), [Web Components](https://medium.com/tag/web-components), [React](https://medium.com/tag/react), [Web Development](https://medium.com/tag/web-development), [Samsung Internet](https://medium.com/tag/samsung-internet)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [January 23, 2018](https://medium.com/p/bf55379cfcda).

[Canonical link](https://medium.com/@Lady_Ada_King/lessons-learned-making-our-app-with-web-components-bf55379cfcda)
