---
title: Wow that was some night in VR!
category: ""
cover: img.jpg
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### Wow that was some night in VR!

Last night I gave a talk on Virtual Reality in Virtual Reality at [London Web Performance](https://ldnwebperf.org/). LDNWebPerf is a monthly talk hosted at the Financial Times in London.

The talk was recorded so if you missed it don’t worry.

![](https://cdn-images-1.medium.com/max/800/0*4ut9NoYbtWVeSb4T.)

Photo by LDNWebPerf’s Perry

100 people sharing the same VR experience powered by A-Frame and Web Sockets. We managed to get the whole audience connected simultaneously and they could see each other looking around in the virtual space.

### Video and Notes

The whole talk was recorded. Here are my talk notes and a video of the event.

Of course you can’t experience the magic of sharing a VR experience with the 100 other audience members it was pretty incredible.

#### Video

[**Getting started with Virtual Reality in the Web**  
_An introduction to how the web enables virtual reality and brief dive into the popular library A-Frame to enable web…_ldnwebperf.org](https://ldnwebperf.org/sessions/getting-started-with-virtual-reality-in-the-web/ "https://ldnwebperf.org/sessions/getting-started-with-virtual-reality-in-the-web/")[](https://ldnwebperf.org/sessions/getting-started-with-virtual-reality-in-the-web/)

#### Notes

[**LDNWebPerf Talk Notes**  
_Introducing A-Frame_medium.com](https://medium.com/samsung-internet-dev/ldnwebperf-talk-notes-6120d6e8e58c "https://medium.com/samsung-internet-dev/ldnwebperf-talk-notes-6120d6e8e58c")[](https://medium.com/samsung-internet-dev/ldnwebperf-talk-notes-6120d6e8e58c)

### How did I do it?

Feel free to fork the repo for a future project if you want:

[**AdaRoseEdwards/metaverse**  
_metaverse - VR Slidedeck for a VR audience_github.com](https://github.com/AdaRoseEdwards/metaverse "https://github.com/AdaRoseEdwards/metaverse")[](https://github.com/AdaRoseEdwards/metaverse)

The main message of my talk last night was that A-Frame enables one to author a VR scene exactly like one would with HTML.

I marked up a simple studio from A-Frame components with a stage and a place for the audience to go.

The HTML file which contains the scene: [https://github.com/AdaRoseEdwards/metaverse/blob/c5059a08561083d218182de0b0d15f61ea3ac871/static/index.html#L49](https://github.com/AdaRoseEdwards/metaverse/blob/c5059a08561083d218182de0b0d15f61ea3ac871/static/index.html#L49)

When I would introduce new content, the server would message every client using websockets. The client would then update the innerHTML of the entity: [https://github.com/AdaRoseEdwards/metaverse/blob/c5059a08561083d218182de0b0d15f61ea3ac871/static/scripts/slides.es6#L20](https://github.com/AdaRoseEdwards/metaverse/blob/c5059a08561083d218182de0b0d15f61ea3ac871/static/scripts/slides.es6#L20)

That is all that is required to add some new content.

### Syncing Users

This was a little more complex because I wanted to ensure that the server could handle unexpected to loads.

In order to minimise over head the server deals only in byte data and does no parsing it just stores it on each websocket object.

60x per second the server concatenates all the raw byte data and sends it down to every client.

The clients then parse the raw byte data to update the position of rotation each avatar with matching IDs to the chunks of data.

If there is an ID without a corresponding Avatar we make a new DOM node use appendChild to add it to the `#avatar-container`

If any avatars have not been updated then using `.removeChild` we remove the avatar from the scene.

There is some redundancy in the data format, allowing me to store some additional data for future use:

4 bytes - ID  
12 bytes - Position  
12 Bytes - Rotation  
4 Bytes - Misc

### Final Thoughts

The night was a huge success! The audience had fun and the VR held up we had over 100 users at peak load and it ran without a hitch!!

I built this over a few days and I couldn’t have done it without [A-Frame](https://aframe.io) which made it very easy to VR without expertise.

Thank you to Perry and the Financial Times for hosting us last night and thanks to Google for the cardboards. It was a really fun talk to give and I am glad it went well!

![](https://cdn-images-1.medium.com/max/2000/1*gfC75MPVxzjW9PDw7keVPQ.png)

Tagged in [Virtual Reality](https://medium.com/tag/virtual-reality), [JavaScript](https://medium.com/tag/javascript)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [January 12, 2017](https://medium.com/p/ba091be38794).

[Canonical link](https://medium.com/@Lady_Ada_King/wow-that-was-some-night-in-vr-ba091be38794)
