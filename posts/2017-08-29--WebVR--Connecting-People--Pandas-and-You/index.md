---
permalink: "/WebVR/"
title: WebVR - Connecting People, Pandas and You
category: "PWA"
cover: img.jpg
author: uve
authorImg: https://miro.medium.com/fit/c/240/240/1*TPm8qJgZ_qpnl4XDOufR4Q.jpeg
---

### WebVR: Connecting People, Pandas and You

![](https://cdn-images-1.medium.com/max/2000/1*dcYcSUzplUqftMfU_-5UTA.png)

On the 22nd of August 2017 myself and [Diego](https://medium.com/u/33cea791460a) gave a talk at JSMonthly about using WebVR to make cool multiplayer games. This post is based off that talk. You can check out the original slides from that [here](https://goo.gl/J9h8Ms). The talk was also recorded, I’ll add a link to the video once it’s uploaded.

### WebVR

Lets start by going over what WebVR is: Virtual Reality, that’s shared and viewed through the web. Just like any other website you open up a browser and type in a URL, but instead of seeing a normal web page you’ll see a 3D environment.

![](https://cdn-images-1.medium.com/max/800/1*TjiJR_8-9GVI3VAEnNto9w.png)

If you don’t have a headset that is fine, most WebVR experiences are also designed to be viewed on a flat screen, you wont get a virtual reality experience when viewing it like this, but you do still get to see the content.

WebVR runs on phones, computers and all sorts of headsets, you can find out exactly which over on [https://webvr.info/](https://webvr.info/)

### Hungry Pandas

This post is going to be around a demo we made called Hungry Pandas, originally based off the game Hungry Hungry Hippos, you are a panda that needs to try and collect more balls than your opponent.

The game is designed to be played on phones and computers with or without a VR headset. You control the panda by clicking and dragging on the screen, or if in a headset tilting/moving your head.

> [https://hungry-pandas.glitch.me/](https://hungry-pandas.glitch.me/)

Open the link and you should spawn in as a panda, if no one else is playing you’ll have to open up it up in another device or tab to get the full experience. If 2 people have already joined then you will spawn in as a spectator.

![](https://cdn-images-1.medium.com/max/800/1*HmQFp0fHFmA-85_d77c4Vg.gif)

Gameplay from a mobile headset

### How did we make this?

We used **alchemy and magic** to combine all the ingredients and tech we wanted into one project.

![](https://cdn-images-1.medium.com/max/2000/1*Oy-bhkVsDEOXkZcov4L0zQ.png)

The ingredients needed for this project

### Ingredient 1: VR

The first thing we needed for the project was VR, specifically WebVR, there are a lot of good frameworks and tools to build for WebVR but we decided to go with A-Frame as we’ve worked with it in the past.

![](https://cdn-images-1.medium.com/max/800/0*x5OELDE13GHFrriR.)

#### A-Frame

[A-Frame](https://aframe.io/) is a WebVR framework. Using HTML’s custom elements you can build WebVR content without worrying about the underlying technologies. It has good documentation and a bunch of tutorials and examples to check out. When you build a project in A-Frame it will run on pretty much all modern browsers, even the ones that don’t fully support WebVR thanks to the polyfill.

![](https://cdn-images-1.medium.com/max/1000/1*QmdLoI1i5VGZpaBFTm2r2Q.png)

A-Frame has a visual inspector that lets you edit the scene in a 3D view

If you want to learn how to use A-Frame my favourite tutorial is [A-Frame School](https://aframe.io/aframe-school/), and interactive guide and some exercises that goes through a bunch of its features.

### Ingredient 2: Multi-User

VR can be a lonely experience, but it doesn’t have to be, we want to have two people to play against each other, and if more people join they should be able to watch.

![](https://cdn-images-1.medium.com/max/800/0*f3C2CwwcK89kvHm5.)

An avatar example using Networked AFrame

#### Networked AFrame

[Networked AFrame](https://github.com/haydenjameslee/networked-aframe) is an A-Frame component you can add to your scene to turn it in to a multi user experience. Give it a template to use for objects such as an avatar.

![](https://cdn-images-1.medium.com/max/800/0*W5whl7JHkEzbzXq7.)

Diagram of how Networked AFrame works

If an object is tagged as networked, it will appear in all other connected instances and move and rotate based on the hosts scene.

### Ingredient 3: Physics

Our game involves balls spawning in, bouncing around and colliding with the users. We could plan our elaborate paths and use animation to do this, or we could simulate some physics.

![](https://cdn-images-1.medium.com/max/800/0*q7uiVaVYIKTdfJBk.)

A demo of A-Frame Physics System

![](https://cdn-images-1.medium.com/max/800/0*8yjnByiCZ1Jm_d0L.)

#### A-Frame Physics System

[A-Frame Physics System](https://github.com/donmccurdy/aframe-physics-system) does exactly what it says. It lets you add physics to your A-Frame scenes, add it to your project then add “static-body” or “dynamic-body” to your entities.

![](https://cdn-images-1.medium.com/max/800/0*8vqk9AdyAasmpWr0.)

_Static bodies are unaffected by physics, but effect others. eg walls, pandas_

_Dynamic bodies are affected by physics and effect other bodies. eg balls._

![](https://cdn-images-1.medium.com/max/800/1*sFEWD7PFAp7HZkCGbZFrNQ.png)

Physics debugging shows red meshes around all the objects with physics

### Ingredient 4: 3D Models

We could use make a game just using primitives (cubes, spheres, cylinders etc) but that would be kind of boring. We want to make our own cool 3D models so you can play as a panda, not a giant cube.

![](https://cdn-images-1.medium.com/max/800/0*TiyRF8r9hBoYWrvj.)

#### Blocks

[Google Blocks](https://vr.google.com/blocks/) is software for the HTC vive and Oculus Rift that let you make 3D models. The concept behind it is that if an object is going to be seen in VR it should be made in VR. It is also a lot easier to pick up and play then traditional modelling programs such as Blender or Maya.

![](https://cdn-images-1.medium.com/max/800/0*147uJVxcWJ9uiGh7.)

Blocks in action

We did end up using blender before putting the model into A-Frame to tidy it up and fine tune it.

![](https://cdn-images-1.medium.com/max/800/1*ub57-fD__5q4jxq6DuYh1Q.gif)

[The panda we made in Blocks](https://vr.google.com/objects/eLl56LFPZO3)

### Ingredient 5: Fish

You might be wondering why fish was an ingredient for this project. You would be right to assume we couldn’t think of any better way to represent the next tool we used.

![](https://cdn-images-1.medium.com/max/800/0*wQBK3I64SX_sRXvd.)

#### Glitch

[Glitch](https://glitch.com/) is a free online IDE, it lets you code in one tab and see your project in another and when you want to share your creation with a friend just give them the URL and they can see it straight away.

![](https://cdn-images-1.medium.com/max/1000/1*kmkFlcxIibl7DEbT7K7L9w.png)

Code in one tab — See the results live in another

This let us host our project and was super useful when we both wanted to work on the code at the same time. It lets us both edit the code and make any changes live straight away.

### Ingredient 6: Magic

Now that we have everything in place we need some magic to get it to all work how we want.

![](https://cdn-images-1.medium.com/max/800/1*NPiO4yLhBGoeLwRc_fzVwg.png)

#### JavaScript

JavaScript lets you define new custom components to A-Frame to make it **BEND TO YOUR WILL.** JavaScript lets us add in custom interactions to our project.

![](https://cdn-images-1.medium.com/max/800/0*okU2qFp8fkN_-ziP.)

\*BOOM\*

We used JavaScript to spawn new balls into the scene.

We first registered an A-Frame component to use as a timer, then call a function that spawns in a ball.

AFRAME.registerComponent('spawn-balls', {  
    schema: {  
      time:{  
        type:'int',  
        default:0  
      },  
      start:{  
        default: false  
      }  
    },  
    tick: function () {  
      if (this.data.start)  
        {  
      var t = this.data.time;  
        if (this.data.time > 1000){  
          this.data.time = 0;  
          createBall();  
        }else {  
        this.data.time++;  
        }  
      }  
    }  
  });

var createBall = function(){  
    var scene = document.querySelector('a-scene');  
    var s = document.createElement('a-sphere')  
    s.setAttribute('position', '0 20 0');  
    s.setAttribute('dynamic-body', '');  
    s.setAttribute('id', 'ball'+Math.round(document.querySelector('a-scene').time));  
    s.setAttribute('networked', 'template:#ball-template;');  
    document.querySelector('a-scene').systems\['boundary-checker'\].registerMe(s);  
    scene.appendChild(s);  
};

You can see that the ball is made from an A-Frame component with attributes added for its starting position, physics and network things. You can check out the full code [here](https://glitch.com/~hungry-pandas).

If you want to add JavaScript to your A-Frame scene the official [docs](https://aframe.io/docs/0.6.0/introduction/javascript-events-dom-apis.html) are a good place to start, [A-Frame School](https://aframe.io/aframe-school/#/9) also covers it well.

### Combining it all together

![](https://cdn-images-1.medium.com/max/1000/1*EdPBBoOjRUmIohhbvaRV7w.png)

Once it’s all put into the same project and once most of the bugs have been squashed you get; a multiplayer virtual experience that runs on all sorts of devices with no need for any extra installations or downloads.

![](https://cdn-images-1.medium.com/max/2000/1*W5-0UC2XdO_3NjodpiyHVw.png)

The full code for the project is up on glitch, feel free to remix and and make it your own. We would love to see what you do with it.

> [https://glitch.com/~hungry-pandas](https://glitch.com/~hungry-pandas)

Thanks for reading, any questions leave a comment here or feel free to get in touch with [myself](https://twitter.com/uveavanto) or [Diego](https://twitter.com/diekus) directly.

Tagged in [Virtual Reality](https://medium.com/tag/virtual-reality), [Web Development](https://medium.com/tag/web-development), [Webvr](https://medium.com/tag/webvr), [Pandas](https://medium.com/tag/pandas), [A Frame](https://medium.com/tag/a-frame)

By [uve](https://medium.com/@uveavanto) on [August 29, 2017](https://medium.com/p/f867cc6829c6).

[Read this article on Medium](https://medium.com/@uveavanto/webvr-connecting-people-pandas-and-you-f867cc6829c6)
