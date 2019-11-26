---
title: I made my first PR to A-Frame!
category: "Immersive Web"
cover: img.jpg
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### I made my first PR to A-Frame!

> The final demo is here: [https://samsunginternet.github.io/a-frame-demos/racer.html](https://samsunginternet.github.io/a-frame-demos/racer.html)

Recently I have been experimenting with making A-Frame Demos for the GearVR. One of the demos I had been building was a racer which used THREE.js’ fancy water shader.

Specifically this shader: [http://threejs.org/examples/webgl\_shaders\_ocean.html](http://threejs.org/examples/webgl_shaders_ocean.html)

Which I used in A-Frame as a component: [https://github.com/SamsungInternet/a-frame-components/blob/v0.0.1/dist/webgl-ocean-shader.js](https://github.com/SamsungInternet/a-frame-components/blob/v0.0.1/dist/webgl-ocean-shader.js)

And included it in my scene.

![](https://cdn-images-1.medium.com/max/800/1*4SZ_eI61m8c03Kdvyr8RCw.png)

Fancy WebGl ocean shader

It looked really great but it would render as totally dark in Virtual Reality. After unsuccessfully trying to fix it I figured I could replace it with the standard shader and get something almost as pretty.

There are two immediate solutions:

1.  Make an animated wave model and apply a fancy standard material
2.  Use a simple plane geometry and apply a fancy standard material which also has a repeating normal map.

The standard fancy material should have the following properties:

*   Semi-transparent ✔Supported
*   Blue-ish ✔Supported
*   Environment Map based Reflections ✔Supported

Solution 1. is doable out the box but it is very expensive as I have to maintain and animate a large piece of geometry.

Solution 2. unfortunately needs a repeating normal map to work correctly. Which can be hacked into the material using a component but ideally we should be able to handle it with a custom A-Frame material shader. Which should be a very clean solution.

I wanted to base my shader on A-Frames standard shader as it already was very featureful and it supported most of what I needed such as environment maps.

Not knowing where to begin when writing a custom A-Frame material shader I copied the standard shader from the A-Frame source code on Github and started to hack in normal map support.

This was all pretty new to me so I found an example in THREE.js where normal maps had been used: [http://threejs.org/examples/webgl\_materials\_displacementmap.html](http://threejs.org/examples/webgl_materials_displacementmap.html)

![](https://cdn-images-1.medium.com/max/800/1*q-fKy2NyOL6LctkPcSJb9w.png)

This example is a model had maps for Ambient Occlusion, Displacement and Normals.

Taking this demo as an example of how to do it, and extrapolating on A-Frame’s existing shader I was able to load up a normal map defined in the material.

### Setting up the Environment Map

Now I had to make the environment map. Usually environment maps in A-Frame are defined by 6 images arranged in a cube, known as a cube map. But I already had a spherical texture that I wanted to re-use in the form of the one used for the <a-sky> sky sphere. Converting it to a sky-box could be a painstaking process; it would also be another 6 image assets the user would have to download. As laziness is the mother of all invention I set about looking to add support for either automatically generating the sky box or using the existing spherical sky texture.

This was a little more difficult because I was unable to find an existing example of environment maps without using a cube map. I was beginning to put together a few possible ideas for how one could produce a cube map dynamically when the scene was started. But thank fully this was not necessary.

In the end I found out it was already built in to THREE.js when stumbled upon ‘THREE.SphericalReflectionMapping’ in the documentation for Textures. When the mapping of a texture is set to this it allows it to be used as a reflection environment map. Which worked straight away and was quick to implement into the existing Environment Mapping code path.

### Animating the water

By putting all this together I got an ocean which looked pretty good (in photos only, because it still didn’t move).

![](https://cdn-images-1.medium.com/max/800/1*qsrCT2Sj8JdcV19iqiKPuw.png)

Water made using the standard material

The fancy ocean shader I was using before had some nice motion and I wanted to get something similar. I was hoping I could just move and distort the normal map to achieve a similar effect. Which would be simple but I was not sure it would be effective (spoiler: it was.)

By moving the position of the normal map and the strength of the normal map effect separately in the x and y directions I could make it appear to move and sway without having to do anything expensive.

This worked really nicely it felt really natural and was an acceptable compromise.

Here is the code for the ocean component which takes advantage of the new super-standard shader:

AFRAME.registerComponent('wobble-normal', {  
 schema: {},  
 tick: function (t) {  
  this.el.components.material.material.normalMap.offset.x += 0.0001 * Math.sin(t/10000);  
  this.el.components.material.material.normalMap.offset.y += 0.0001 * Math.cos(t/8000);  
  this.el.components.material.material.normalScale.x = 0.5 + 0.5 * Math.cos(t/1000);  
  this.el.components.material.material.normalScale.x = 0.5 + 0.5 * Math.sin(t/1200);  
 }  
})

AFRAME.registerPrimitive('a-ocean-plane', {  
 defaultComponents: {  
  geometry: {  
   primitive: 'plane',  
   height: 10000,  
   width: 10000  
  },  
  rotation: '-90 0 0',  
  material: {  
   shader: 'super-standard',  
   color: '#8ab39f',  
   metalness: 1,  
   roughness: 0.2,  
   normalTextureRepeat: '50 50',  
   normalTextureOffset: '0 0',  
   normalScale: '0.5 0.5',  
   opacity: 0.8  
  },  
  'wobble-normal': {}  
 },  
});

And to use it:

<a-ocean-plane material="normalMap: #water-normal; sphericalEnvMap: #night-sphere;" position="0 -2 0" ></a-ocean-plane>

### Merging Upstream

When I posted the material I had made to have normal map support to the A-Frame slack it was kindly suggested that perhaps the extra properties I used in my shader get merged upstream into the standard shader.

I ported my changes across and added support for ambient occlusion and displacement maps as in the demo of the bust I had found earlier. Then opened a pull request: [https://github.com/aframevr/aframe/pull/1826](https://github.com/aframevr/aframe/pull/1826).

The A-Frame maintainers are really great and got feedback to me straight away. It was a real pleasure to add something to such a great project.

There is a demo of the new shader and the water in action here: [http://samsunginternet.github.io/a-frame-demos/super-standard.html](http://samsunginternet.github.io/a-frame-demos/super-standard.html)

![](https://cdn-images-1.medium.com/max/800/1*5C86U-OZFf4eYedrsIEjqw.png)

New water on the bottom with spherical environment mapping. The bust has Ambient Occlusion, Displacement and Normal Maps.

tl;dr A-Frame is really great, I love the fancy shaders too much, A-Frame now supports some more fancy shading techniques and I can have some pretty water in Virtual Reality.

Tagged in [Webgl](https://medium.com/tag/webgl), [Programming](https://medium.com/tag/programming)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [August 22, 2016](https://medium.com/p/3675d596a2d8).

[Read this article on Medium](https://medium.com/@Lady_Ada_King/i-made-my-first-pr-to-a-frame-3675d596a2d8)
