---
title: VJ On The Go
category: "Web APIs"
cover: img.jpg
author: Ruth John
---

### VJ On The Go

### The Story of a Seasonal Party App

**Foreword:** _I feel incredibly privileged to get an opportunity to work with Ruth. I have seen her demonstrate incredible works of creative programming bringing together Audio, Visualisations and People to produce live art! After seeing a recent demo at_ [_JSConfEU_](https://www.youtube.com/watch?v=Lby6fk5gC4k&feature=youtu.be) _I proposed a collaboration: Could we make a website where it was possible use to a Samsung smartphone to make a VJ kit you can carry with you, a portable party pack.—_ [_Ada_](https://medium.com/u/c2890cdd7a64)

### The Proposal

Create an audio visualisation app run entirely in Samsung Internet Browser and use it to project audio reactive visuals using a Samsung S8 phone.

Video promo for VJ on-the-go

### Part One: The App

#### Overview

Ada and I had ten days to put together a progressive web app, to run on a Samsung S8 phone with the ability to project audio reactive visualisations controlled by a MIDI controller.

#### Core components of the app

The app went through different iterations as we were building it, based on what we found worked and what didn’t. However the core components of what constitutes a piece of VJ software always stayed at the forefront. I’ve broken down the writing as per these components, as each tells it’s own story.

We are going to make a post deep-diving into each of these topics and how they can be acomplished today using existing web technology.

#### VJ (Video Jockey) apps similar core functionality:

*   **Media**: You can either import or create media; e.g. Videos, images, 3D models, patterns, signage.
*   **Effects**: These are to be added to the media to manipulate it. Colour changes, distortion, symmetry etc…
*   **Audio analysis**: Basic frequency analysis at the core, you would also then use beat detection, low, mid, high frequencies etc… to manipulate parameters within the software. This functionality uses the [WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode).
*   **MIDI Support**: To control the software use of MIDI controllers. This can be done in some browsers today using the [WebMidi API](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess).

* * *

#### How to prototype

We had _about_ ten days. Just over, but wanted to keep time for inevitable overs, plus these writings, so we planned for ten days of development time.

The first five days was to be our ‘hack’ time. Working with prototyping, which essentially this was, I believe putting a time limit on development is a good idea in the beginning. When you are building something unknown (as in ‘can we do this’ 🤷🏻‍, ‘shall we do it like this’ 🤷🏻‍) when everything is ‘how long is a piece of string’, just sitting down and hacking something together gives you so much insight, as long as you have a stopping point. (Ada and I really could have hacked for weeks!)

_This project is so fun I probably will carry on hacking for weeks!! — Ada_

This gave us a lot of learnings and understandings about what worked and what didn’t and how the end app would materialise. Then we spent the next five days building and fine tuning what we settled on, meaning we have a publishable piece of working code, even if there’s a whole heap of features and bits and bobs we’d like to keep developing!

#### Can I use it?

You sure can! Just go to the [URL for the app right here](https://samsunginter.net/vj-otg/index.html) and start playing!

![](https://cdn-images-1.medium.com/max/800/1*M2-MgQlSQRTcYOVUqP-zNw.png)

Screenshot of VJ on-the-go in action!

Each of the pads & dials on the interface changes whats happening on the screen by fading the media in and out or changing effects. What’s happening under the hood is each is essentially just changing a variable you can set wherever you want within the app. For instance the first four pads set custom properties to change the CSS, the first four dials fade each media item in and out.

#### Notables

Our audience is developers and although the app works stand alone and you can play with it, the real functionality is [forking the code](https://github.com/SamsungInternet/vj-otg) and messing around and having your own custom version to play with.

We made a few, what I’ve dubbed ‘sandbox’ decisions whilst we built. Such as having the app work out of the box with the AKAI LPD8 controller and not a different MIDI device.

Each further article will talk through the code and our decisions.

* * *

#### Come with us, on a journey through space & time…

Over the next few articles we’ll go over all the features of the app in depth, explaining different technologies we tried, and how we settled on the using the incredible features of the web platform we did.

They’ll be audio filters, analysis, canvas 2D & 3D, custom shaders, web components and a sprinkling of MIDI, I mean if you haven’t figured it out yet, there should _always_ be a sprinkling of MIDI 🖲

Now, [go to the URL](https://samsunginter.net/vj-otg/index.html), find yourself a screen & VJ your way through Christmas and the New Year!

Tagged in [Web Development](https://medium.com/tag/web-development), [Webgl](https://medium.com/tag/webgl), [Web Audio Api](https://medium.com/tag/web-audio-api), [Web Midi Api](https://medium.com/tag/web-midi-api), [Mobile Web](https://medium.com/tag/mobile-web)

By [Ruth John](https://medium.com/@rumyra) on [December 20, 2017](https://medium.com/p/e56666fe55eb).

[Canonical link](https://medium.com/@rumyra/vj-on-the-go-e56666fe55eb)
