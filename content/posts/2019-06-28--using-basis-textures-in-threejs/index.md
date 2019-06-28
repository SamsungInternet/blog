---
cover: img.jpg
title: "Using Basis Textures in Three.js"
description: "Basis Universal is a new image format designed to produce very small file sizes and to be decoded on graphics cards instead of on the CPU, making it very fast to decode and perfect for WebGL scenes. Support for this is very new and requires the latest THREE.js 106."
category: Immersive Web
img: https://miro.medium.com/max/1200/1*HF1WfS2x0mTGiKZtRi9-qw.png
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/96/96/1*Dn8pr_cbYLtc_KfmUNhnBA.png
tags: [JavaScript, Webgl, Threejs, Basis Textures, Performance]
---

# Using Basis Textures in Three.js

Basis Universal is a new image format designed to produce very small file sizes and to be decoded on graphics cards instead of on the CPU, making it very fast to decode and perfect for WebGL scenes. Support for this is very new and requires the latest THREE.js 106.

As a demonstration of how efficient Basis is, I bought an 8000×4000px¹ image to be my skybox. Normally this would take a long time to download and take up a lot of texture space. Basis is both smaller to download and takes less space in memory whilst the game is running, allowing games to have 6–8× more textures!

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Thanks to Basis, WebGL apps and games can now have 6-8x more textures 🤩 <a href="https://t.co/0ubxbC3xeo">https://t.co/0ubxbC3xeo</a></p>&mdash; Mr.doob (@mrdoob) <a href="https://twitter.com/mrdoob/status/1131271177735827456?ref_src=twsrc%5Etfw">May 22, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

For the example below the image gets shrunk from 15MB as a PNG to 0.6MB as a Basis file. Letting me have this huge beautiful skybox with only a small very quick file download and without sacrificing all of my precious texture space leaving my lots of room for other game textures.

![](https://cdn-images-1.medium.com/max/4794/1*HF1WfS2x0mTGiKZtRi9-qw.png)

It only took a few minutes to set up Basis but it is really worth it.

### Making Basis Textures

We use the program *basisu* from the [Basis Universal project](https://github.com/binomialLLC/basis_universal) to encode basis files. Unfortunately there are no precompiled binaries for us to use so we need to compile our own.

I tested the instructions for building the image encoder on Linux 64 bit, I personally am using the Linux VM built into Chrome OS.

The first step is to install the Linux dependencies for compiling the basisu binary.

    sudo apt-get install git build-essential cmake make

Then we download Source Code for Basis from Github:

    git clone [https://github.com/BinomialLLC/basis_universal.gi](https://github.com/BinomialLLC/basis_universal.gi)t

    cd basis_universal

Follow the build instructions:

    cmake CMakeLists.txt

    make

Now the binary is build you should be able to use it to encode sRGB PNGs to basis files using the newly compiled binary.

    ./bin/basisu ~/Downloads/ada.png

It may take a few seconds but once it is done it should have then created a file with the same name but with a .basis extension in your current directory. We can load this .basis file into THREE.js

My original ada.png was 1.8MB, the super compressed basis file is only 0.145MB which is even smaller than the equivalent JPEG!

[There are options you can explore](https://github.com/binomialLLC/basis_universal#command-line-compression-tool) to adjust how the image is encoded.

### Using the Basis Texture

This code is largely taken from the [THREE.js basis loader example.](https://threejs.org/examples/webgl_loader_texture_basis.html) This demo was built with THREE.js version 106.

Importing the Basis Texture Loader uses [ES Modules Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) for loading the modules. I have exposed my ‘node_modules’ directory as a static folder. So make sure your script tag has type="module" . Or pre-compile it using your favourite bundler such as webpack or rollup.

```js
import { BasisTextureLoader } from "/node_modules/three/examples/jsm/loaders/BasisTextureLoader.js";
```

Create an object and assign it a texture, we will update the map on this texture later:

```js
const geometry = new THREE.SphereBufferGeometry( 1, 50, 50 );
const material = new THREE.MeshBasicMaterial();
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
```

We can now load the texture:

```js
// Make a new instance of the loader
const basisLoader = new BasisTextureLoader();

// Set the location of the Web Worker Script from THREE.js
basisLoader.setTranscoderPath(
  '/node_modules/three/examples/js/libs/basis/'
);
basisLoader.detectSupport( renderer );

// Load your Basis Image
basisLoader.load( '/ada.basis',
  function (texture) {

    // Once the texture has loaded, update the .map of the material
    texture.encoding = THREE.sRGBEncoding;
    material.map = texture;
    material.needsUpdate = true;
  }, undefined, function ( error ) {
    console.error( error );
  }
);
```

I hope this helps you take advantage of the power of Basis textures. :)

¹ In my final scene I didn’t use the 8000×4000 texture because my Android phone couldn’t load a single texture that large so I used a 4096×4096 texture instead.



By Ada Rose Cannon on June 28, 2019.

[Canonical link](https://medium.com/samsung-internet-dev/using-basis-textures-in-three-js-6eb7e104447d)
