---
title:  Making my first WebVR game using A-Frame
category: "Immersive Web"
cover: img.jpg
author: uve
authorImg: https://miro.medium.com/fit/c/240/240/1*TPm8qJgZ_qpnl4XDOufR4Q.jpeg
---

### Making my first WebVR game using A-Frame

I thought it was about time to try my hand at WebVR. I’ve played with regular old VR before, but for the fun short experiences I like to make, WebVR seemed like a better option because IT’S ON THE INTERNET. You can share it with a link and view it in a browser so you don’t have to jump through the hoops of downloading and installing apps to your computer or phone.

[VRTogether](https://medium.com/samsung-internet-dev/virtual-hackathon-lets-make-vr-together-53f629552764), a 2 month long virtual hackathon was running and it seemed like the perfect time to get started, I hadn’t been to a hackathon in a few weeks so I was in the mood to build something new, that and I had recently joined the Samsung Internet developer advocacy team and I wanted to work more with the web.

[A-Frame](https://aframe.io/) was my framework of choice. The docs are pretty good, it is feature-full and it has a visual inspector you can open up to debug and move things about. The visual inspector reminded me of Unity, a game engine I am comfortable using.

![](https://cdn-images-1.medium.com/max/800/1*5Uia3NKWwsLHmOOYaN_QUA.png)

A-Frames visual inspector

I started by going through the examples on A-Frames site. I skimmed through their code, I made sense of most of it. There are entities which can have parent-child relationships, but I couldn’t get my head around how the scripts work. I went through a few tutorials which helped figure it out, such as [A-Frame-school](https://aframe.io/aframe-school/#/).

I played about with each of the feature I learnt and thought about how I could combine them to make something fun that fits with the hackathon theme, “togetherness”, and would work well as a VR experience. I thought of simple game where you chase around animals until they run into each other.  
That simple idea actually wasn’t simple enough so I took out the parts with animals and moving the player.   
Soon I had an idea that I could actually make:  
A game where you look at 2 rings to make them spin and have to time which rings to set off to get them to overlap.

![](https://cdn-images-1.medium.com/max/800/1*AO6RvPyJDHngfwjL69dvuQ.png)

My first A-Frame game

**You view it here:** [https://samsunginter.net/aframe-ducks/prototype.html](https://samsunginter.net/aframe-ducks/prototype.html)

![](https://cdn-images-1.medium.com/max/800/1*z8OoTJspZ1cIGTfKV5HLPw.gif)

gif of prototype gameplay

That version turned out pretty well. I combined some simple things I found from examples into my own project: a few different animations, a script that changes an object colour when hovered over and displaying text.  
I did have to get some help from [Ada Rose Edwards](https://medium.com/u/c2890cdd7a64) writing a function to check the collision of the two rings because I couldn’t figuring out the syntax.

Now that I had the basics down I could build from them. I wanted to flesh out the basic project I had. I wanted to make use of the 3D space VR provides, add in some cool simple graphics, more animations to make it more interesting and to make the gameplay needlessly harder.

![](https://cdn-images-1.medium.com/max/800/1*iSwb21eAHY2XIYQKtFekGQ.png)

The [current version](https://samsunginter.net/aframe-ducks/)

I used [a-ocean](https://github.com/donmccurdy/aframe-extras/tree/master/src/primitives) to create the water, and used an image to create the sky effect, as a patterned background made it easier to know where you are facing. The ducks are just boxes that have been scaled which orbit around the smaller cubes, which produces a nice movement patterns. The signs are made up from two boxes, and the score is kept and updated through a function I wrote.  
The project and all the code for it is online, so feel free to try it out and build on top of it.

**Go try the final version:** [https://samsunginter.net/aframe-ducks/](https://samsunginter.net/aframe-ducks/)**The code is all online:** [https://github.com/SamsungInternet/aframe-ducks](https://github.com/SamsungInternet/aframe-ducks)

If you want to try out WebVR, you should go for it, it’s not as scary as it first seems, you still have time to enter [VRTogether](https://medium.com/samsung-internet-dev/virtual-hackathon-lets-make-vr-together-53f629552764), and if you get stuck you can join its [slack](https://slack.samsunginter.net) and ask questions.

Tagged in [Virtual Reality](https://medium.com/tag/virtual-reality), [Game Development](https://medium.com/tag/game-development), [A Frame](https://medium.com/tag/a-frame), [Hackathons](https://medium.com/tag/hackathons), [Webvr](https://medium.com/tag/webvr)

By [uve](https://medium.com/@uveavanto) on [June 12, 2017](https://medium.com/p/d8096bfca28).

[Read this article on Medium](https://medium.com/@uveavanto/making-my-first-webvr-game-using-a-frame-d8096bfca28)
