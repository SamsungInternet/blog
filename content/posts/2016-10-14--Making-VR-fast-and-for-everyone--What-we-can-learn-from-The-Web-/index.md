---
title: Making VR fast and for everyone - What we can learn from The Web
category: ""
cover: img.jpg
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### Making VR fast and for everyone: What we can learn from The Web.

#### Why VR is uniquely suited to the web and what we can learn from web development strategies.

VR on the web has been a dream of mine since I was a small child. Virtual worlds in the forms of sci-fi books, TV shows and movies showed me what the future could be. Today VR is coming to the world wide web, can the immersive power of VR join with the powers of The Web to produce this sci-fi VR future? What can traditional single user VR learn from the web’s development practises for a stronger future?

VR as a platform has it’s roots in the design and deployment patterns of video games. This has stayed with it as it has transitioned into the web but the web has some good patterns and practises which VR can learn from.

#### Streaming Content

Traditionally the distribution method for VR and other Graphics heavy content is to download the whole experience before the first frame is rendered.

The web has never been this way. From it’s earliest days pages could still be read as the html was being loaded. You may even be old remember the internet on dial up when you could see each chunk of text content loading.

The same practises apply to websites ‘should’ still be legible before all of the images/fonts/JavaScript has finished downloading.

We can apply this thought processes to VR by first pulling down just the assets needed for the first 5–20 seconds. The rest of the experience can be then downloaded in the background

In the web people are impatient they will drop off from a mobile site if it does not load in 3s, VR gets some leeway because of novelty but to maintain engagement get the headset on the user ASAP, even if they can only see some dummy content whilst the rest of the experience loads.

#### Accessibility

The web as a platform has mostly been accessible by default, it has been designed with accessibility in mind and it would be good to continue that mindset into the world of VR.

The Speech Synthesis APIs should allow us to provide audio descriptions of our scenes.

The Speech Recognition apis could allow a user to navigate the scene without needing a controller in case they cannot use a controller or their hands are occupied.

#### Responsive Design/Progressive Enhancement

Not all devices are made equally. The web is available on a variety of platforms from smart phones through to high end PCs.

The majority of VR users in the web at this point in time are going to be using telephone either through GearVR or a cardboard like headset.

![](https://cdn-images-1.medium.com/max/800/0*CxNt_OkaMx4DWqiJ.jpg)

Smasung GearVR for Samsung smart phones

I would suggest in your first load putting down smaller graphics assets, textures/models and using less resource intensive shaders or physics.

When you detect that the frame rate is running smoothly try to increase the graphical fidelity a bit more.

This also has the advantage of getting your experience interactive faster but can still deliver a triple A experience on higher end devices.

#### Collaboration

VR has tended to be a solo experience up to this point but fortunately the web has a truly excellent network stack.

This can be taken advantage of with technology such as WebRTC and WebSockets you can get your users talking and engaging in the same virtual space.

WebRTC can be used to provide voice chat with multiple participants and peer to peer data streaming.

WebSockets can stream real time data about a shared environment to all users so they can experience it together.

The web has always enabled people to chat and work together. Like shared Minecraft worlds VR can still enable people to build and work together. I would love to see Tilt Brush or Mozilla’s A-Painter become shared creative experiences.

This collaborative approach is what I pictured in the VR future of my youth. VR if it is to succeed in the web should take advantage of the webs powers:

*   Start fast , put the headset on and be immersed, minimal waiting.
*   The virtual reality web should reach as many people as possible. Regardless of the ability of the user and work across a wide range of devices.
*   Shared, the virtual reality web should allow us to engage on a personal level in shared spaces all round the world.

The VR dreams of our childhoods are just around the corner. We can build them together!

Tagged in [Virtual Reality](https://medium.com/tag/virtual-reality), [Web Development](https://medium.com/tag/web-development), [Accessibility](https://medium.com/tag/accessibility), [Streaming](https://medium.com/tag/streaming), [Ready Player One](https://medium.com/tag/ready-player-one)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [October 14, 2016](https://medium.com/p/da4111a572b6).

[Canonical link](https://medium.com/@Lady_Ada_King/making-vr-fast-and-for-everyone-what-we-can-learn-from-the-web-da4111a572b6)
