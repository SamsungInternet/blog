---
title: W3C WebVR Workshop Follow Up
category: "Immersive Web"
cover: img.jpg
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### W3C WebVR Workshop Follow Up

#### I just had the most intense two days of my life!

![](https://cdn-images-1.medium.com/max/2000/1*tbKF2WAH2fnotC5mPVptbA.jpeg)

[360 degree group photo of the participants!](http://webvrassets.com/w3c-vr/index.html)

I attended the [W3C WebVR workshop in](https://www.w3.org/2016/06/vr-workshop/) in San Jose. It was the first workshop on WebVR and was an incredible experience, many of the leaders in VR for the web took part to discuss how WebVR will evolve in the future.

The workshop had these goals:

*   Share experiences between practitioners in VR and related fields.
*   Discuss how to solve for VR use cases that are difficult or impossible today on the Web.
*   Identify potential future standards and establish timelines to enable the Web to be a successful VR platform.

[Laszlo Gombos](https://twitter.com/laszlogombos), [Mike Blix](https://twitter.com/mkeblx) and [I](https://twitter.com/lady_ada_king) have written up our thoughts about some of the topics raised at the workshop.

My thoughts about the future of WebVR are at the bottom.

### Breakout Takeaways

I sat in the following two breakout sessions: Semantic WebVR and Declarative 3D

#### **Semantic WebVR**

WebVR should also be a progressive enhancement to the current web, introducing new tags and/or 3D css to enable a VR as an extension of the current web.

This may involve:

*   Tags for embedding 3D content (probably glTF format) into a traditional web page.
*   The browser should probably have support for gamepad api peripherals to assist navigation when viewing a 2D web page in a VR space.
*   Pages could use 3D CSS to add enhancements to 2D pages in a VR space.
*   Perhaps a VR browser @media query, fov of metrics for CSS, i.e. arc size of the viewport.
*   New forms of markup for marking up VR scenes. Perhaps providing geometric primitives much in the way A-Frame does. Allowing simple immersive scenes.

#### **WebVR Browsers**

Until recently Samsung Internet was the only WebVR browser but now with Google bringing Chrome to VR, Servo from Mozilla and the Carmel browser doing WebVR too, albeit more focused on Standalone experiences there is a lot more competition and variety.

Now is an optimal time for browsers to experiment to work out what works for a VR web browser.

![](https://cdn-images-1.medium.com/max/800/1*n8J53t41_L_FYVrPzZqA-Q.jpeg)

Samsung Internet for GearVR

*   New APIs for controlling the browsing environment e.g. [Samsung Sky Box APIs](https://medium.com/samsung-internet-dev/control-the-world-with-the-skybox-api-6e8ca213f171#.e5uaynjut)
*   What form should the viewport take? and how should it be speced?
*   What extra meta data needs to be added to enhance the browser with 3D assets? favicon.gltf? Providing skyboxes for previews?
*   Tags for 3D in the document?
*   How can viewports be layed out to make the most of the environment whilst still being accessible?
*   Some kind of ability to securely render dom for WebGL, so the 2D web can be included in immersive scenes.

#### **Declarative 3D**

Libraries such as A-Frame, X3D, GLAM allow Declarative 3D scenes vs programmatic like ReactVR.

These libaries are gaining popularity for producing VR content. Should the browser handle them? Are geometric primitives something the browser should be aware of?

> Postscript and RIB will still render, because these are descriptions rather than code.

Declarative VR has an advantage that it can be reinterpreted by different engines. This is why [HTML from 1997](http://www.warnerbros.com/archive/spacejam/movie/jam.htm) still works great across a wide variety of browsers and devices which did not exist when it was developed.

> Another challenge associated with the programmatic approach is that a program can only do what it does, whereas content can be reused and open to reinterpretation.

The difficulty here is drawing the line between what should be the scope of the browser engine vs that of 3rd party libraries.

E.g. should the browser provide rendering hooks and event listeners or does it need to be aware of concepts like ray-tracing, geometry and cameras?

This could be a non-visual interpretation or an interpretation for people with additional accessibility needs. Audio only, enhanced visuals etc..

#### **Accessibility**

I did not attend this session but it is important, I am going to include the break out notes, as this needs to be present:

*   APIs to allow assistive technology to get descriptions of objects, scenes etc. for Visual impairments, unanswered question How to get these descriptions and how detailed do they need to be?
*   APIs to allow color shift to help color blindness
*   APIs to allow audio shifts to help partially deaf
*   Add accessibility metadata to any VR object that could be reused will help for discoverability
*   VR systems should be able to adapt for users with limited mobility.
*   Privacy concerns must be addressed so users who use certain accessibility features are not identified
*   Allow multiple ways to interact with the VR environment, and conversely multiple ways to extract information from it

#### **Link traversal, are we there yet?**

Navigation and link traversal (hyperlinking) is an important aspect of the web and the details on how this would work in VR is still being worked out. The solution would need to maintain user control, security and interoperability with the existing web.

Entering VR presentation mode requires an explicit user action to opt in into the experience. This could be pressing a button or placing a mobile device into an HMD. Jumping between web experiences that are presenting should not require an explicit user action for each navigation — only the first VR experience. This however requires that the user is safely informed where the navigation is heading to avoid potential phishing attacks.

### What would I like additional discussion on?

**Dealing With Distressing Content**

VR Gives whole new worlds for content which can distress the user. Because there is a sense of personal space in VR that can be violated by intrusive content or harassment from other users.

[This issue arose recently around the game QuiVR. The developers stepped in to give extra powers to help with this issue.](http://uploadvr.com/dealing-with-harassment-in-vr/)

But in the web we can’t expect the content creators to help because often harassment in the web goes ignored.

This could result in the ability for VR to really affect people becoming a double edge sword and leaving people with negative experiences.

It is important that users in the VR space feel safe and that they have agency in the web.

How can we give control back to the user for hiding or removing this content? Is it something the browser should address or something left to 3rd parties like current content blocking solutions like Ad Blockers.

*   An option of personal Invisibility for shared spaces.
*   ‘disintegrator ray’ for removing or reporting avatars or people?
*   Hands over visor, I can’t see you so you can’t see me. (peak through fingers mode?) — could also be used for hiding content when monitoring what another player is doing e.g. parent — child.

A lot of these offences come under someone ‘trying to get your attention in a negative way usually for negative impact’ jump scares, offensive material, attention dividing elements such as ads and intrusive Players or AI avatars. These all have a larger effect in VR than on the web so perhaps dealing with them needs to become part of the platform.

### The future of webVR

WebVR has made a very strong start but I believe the state it is in today will not be the majority of the future VR Web. This is how I see the platform evolving in the mid to long term.

WebVR is currently based around a single layer of WebGL displayed to the user to have total control of everything that is shown. Much like the way libraries like THREE.js are used for 3D currently.

WebVR is the way it is today because it is the fastest route to getting VR on the web. It has done an amazing job of showing what will be possible on the web without a 2D VR Browser.

Virtual Reality Web Browsers such as Samsung Internet for Gear VR and others coming out soon such as Mozilla’s Servo and Chrome for Day Dream should allow VR to act as a progressive enhancement for the traditional web. Literally giving depth to our pages.

Allowing elements to be brought out or displayed in 3 dimensions. Whilst still sitting in the flow of the document.

Much like watching embedded videos can be displayed fullscreen, media (interactive and otherwise) can be presented fully to the user removing any other UI elements giving fully immersive scene. (How webvr is used today)

The ability to maintain a personal state between domains would also be valuable so one can travel from one presented experience to another without glitches or loss of immersion. This concept is currently known as the metaverse.

Payment APIs will make shopping in VR simple and easy without requiring the user to remove their headset.

I find it amazing that the metaverse of the web is growing out of my favourite platform.

![](https://cdn-images-1.medium.com/max/600/0*zWV7b4G7YvByBlnf.)

The 2D web has been around 25 years and still works on a variety of platforms. The VR web, like the mobile web, is just another platform the web can display it’s content on whilst providing another set of features to be taken advantage of.

The VR Web will probably be slightly remixed again for the Augmented Reality web.

And again for what ever comes after

And again

And again; but it will still be the web.

And it will still work for everyone.

Tagged in [Virtual Reality](https://medium.com/tag/virtual-reality), [Webvr](https://medium.com/tag/webvr), [Samsung](https://medium.com/tag/samsung), [Gearvr](https://medium.com/tag/gearvr)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [October 31, 2016](https://medium.com/p/bcfe6558ccba).

[Read this article on Medium](https://medium.com/@Lady_Ada_King/w3c-webvr-workshop-follow-up-bcfe6558ccba)