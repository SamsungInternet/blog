---
title: Using Google’s Blocks with A-Frame to make exciting scenes!
category: "Progressive Web App"
cover: img.jpg
author: Ada Rose Cannon
---

#### Using Google’s Blocks with A-Frame to make exciting scenes!

Google has recently launched blocks, blocks is a user friendly tool for 3D modelling, items made in blocks are added to a repository under a Creative Commons license.

Here is how to use these models in A-Frame:

#### 1\. Go to the objects page of blocks: [https://vr.google.com/objects](https://vr.google.com/objects)

![](https://cdn-images-1.medium.com/max/800/1*zDH-6isQ8kCI0c5c_FJDww.png)

#### 2\. Find an object you like

![](https://cdn-images-1.medium.com/max/800/1*K45L_nmQzewIQ07M4jevGw.png)

#### 3\. Download Object

![](https://cdn-images-1.medium.com/max/800/1*2H9bOjihFSxsQNGg5AmJog.png)

#### 4\. Extract files and put them in your project

I am using [https://glitch.com](https://glitch.com) to build my project so I will add them to the assets folder of Glitch.

![](https://cdn-images-1.medium.com/max/800/1*RSbk9uiSaPRo3ctDAvtKBw.png)

#### **5\. Use them**

Make an `<a-assets>` tag if it does not already exist.

To that add `<a-asset-item>` for the material an obj.

Use `obj-model="obj: #obj; mtl: #mtl”` to add the object to an `<a-entity>` In the scene.

<a-assets>  
  <a-asset-item id="mtl" src="[./materials.mtl](https://cdn.glitch.com/b57e6f01-0eed-4775-bd9a-9951d1f0c7ab%2Fmaterials.mtl?1499698177296)"></a-asset-item>  
  <a-asset-item id="obj" src="[./model.obj](https://cdn.glitch.com/b57e6f01-0eed-4775-bd9a-9951d1f0c7ab%2Fmodel.obj?1499698177926)"></a-asset-item>  
</a-assets>  
      
<a-entity obj-model="obj: #obj; mtl: #mtl;"></a-entity>

#### 6\. Oh dear it is tiny and in the floor at our feet.

![](https://cdn-images-1.medium.com/max/800/1*VEVvYJEUjDY-aDtY_s9lmw.png)

#### 7\. Make it bigger, move it up and in front of the camera.

I added position and scale to make it 5x bigger and positioned two units up and 5 units away from the camera.

<a-entity obj-model="obj: #obj; mtl: #mtl;" position="0 2 -5" scale="5 5 5"></a-entity>

![](https://cdn-images-1.medium.com/max/800/1*5547jhGlH1-hD44PEtLylw.png)

#### Final Code for this demo:

<!DOCTYPE html>  
<html lang="en">  
 <head>  
  <title>AFrame Demo</title>  
  <meta charset="UTF-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1">  
  <script src="[https://aframe.io/releases/0.6.0/aframe.min.js](https://aframe.io/releases/0.6.0/aframe.min.js)"></script>  
  <script src="[https://cdn.rawgit.com/feiss/aframe-environment-component/ad57b15d/dist/aframe-environment-component.min.js](https://cdn.rawgit.com/feiss/aframe-environment-component/ad57b15d/dist/aframe-environment-component.min.js)"></script>  
 </head>  
 <body>

<a-scene>  
      
    <a-assets>  
      <a-asset-item id="mtl" src="[https://cdn.glitch.com/b57e6f01-0eed-4775-bd9a-9951d1f0c7ab%2Fmaterials.mtl?1499698177296](https://cdn.glitch.com/b57e6f01-0eed-4775-bd9a-9951d1f0c7ab%2Fmaterials.mtl?1499698177296)"></a-asset-item>  
      <a-asset-item id="obj" src="[https://cdn.glitch.com/b57e6f01-0eed-4775-bd9a-9951d1f0c7ab%2Fmodel.obj?1499698177926](https://cdn.glitch.com/b57e6f01-0eed-4775-bd9a-9951d1f0c7ab%2Fmodel.obj?1499698177926)"></a-asset-item>  
    </a-assets>  
      
    <a-entity obj-model="obj: #obj; mtl: #mtl;" shadow="receive: false;" position="0 2 -5" scale="5 5 5"></a-entity>  
      
  <a-entity environment="shadow: true; shadowSize: 10; preset:default;" ></a-entity>  
 </a-scene>

</body>  
</html>

Tagged in [JavaScript](https://medium.com/tag/javascript)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [July 10, 2017](https://medium.com/p/757b7d3d49fc).

[Canonical link](https://medium.com/@Lady_Ada_King/spice-up-your-vr-scene-with-free-3d-models-from-blocks-757b7d3d49fc)

Exported from [Medium](https://medium.com) on June 15, 2018.