---
cover: img.jpg
title: "Introducing Llama Vision, a website that detects llamas through your camera"
description: "A few months ago, I first tried out Tensorflow.js, the machine learning library for JavaScript. I took a pre-trained model I found called MobileNet and copied some of the example code. One of the lines said “replace this with your image”, but I thought I’d try it out on a video instead. I grabbed a Creative Commons video of some llamas and… I was astonished!"
category: "Web Development"
img: https://cdn-images-1.medium.com/max/1200/1*eMKq2EB1CZzA4SCMk6dZVw.jpeg
author: Peter O'Shaughnessy
authorImg: https://cdn-images-1.medium.com/fit/c/120/120/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
tags: [TensorFlow, Web Development, Machine Learning, JavaScript, Llamas]
---

# Introducing Llama Vision, a website that detects llamas through your camera

## a.k.a. How I got started using Tensorflow.js

![[https://llama.vision](https://llama.vision) (video shown in the background by [Karen Ihrig](https://vimeo.com/46661900))](https://cdn-images-1.medium.com/max/7116/1*eMKq2EB1CZzA4SCMk6dZVw.jpeg)*[https://llama.vision](https://llama.vision) (video shown in the background by [Karen Ihrig](https://vimeo.com/46661900))*

A few months ago, I first tried out [Tensorflow.js](https://js.tensorflow.org/), the machine learning library for JavaScript. I took a pre-trained model I found called [MobileNet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) and copied some of the [example code](https://github.com/tensorflow/tfjs-models/blob/master/mobilenet/README.md#via-script-tag). One of the lines said *“replace this with your image”*, but I thought I’d try it out on a video instead. I grabbed a [Creative Commons video of some llamas](https://vimeo.com/46661900) and… I was astonished!

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">OMG, just trying out TensorFlow.js for the first time and blown away that with just a few lines of code I can detect llamas in a video in realtime in the browser! 🦙 <a href="https://t.co/24i75RNhuc">pic.twitter.com/24i75RNhuc</a></p>&mdash; Peter O&#39;Shaughnessy (@poshaughnessy) <a href="https://twitter.com/poshaughnessy/status/1015176128460402689?ref_src=twsrc%5Etfw">July 6, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



It gave a probability of over 0.99999 that the video contained a llama. I figured that, to get that level of certainty, perhaps I had just happened to pick one of the exact videos used to train the model. I noticed that the model file was only 31KB. I opened it up and found that it contained a collection that looked like this:

![Some of the text from the [MobileNet JavaScript file](https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@0.1.1). One of the collection’s entries is “llama”.](https://cdn-images-1.medium.com/max/2800/1*fGT2VNDbg0klUoU5bN9pBQ.png)*Some of the text from the [MobileNet JavaScript file](https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@0.1.1). One of the collection’s entries is “llama”.*

Even if I hadn’t been lucky enough to use one of the exact same training videos, I was at least fortunate enough to be trying to detect one of the 1000 objects that this model included (entry 355 from 0 to 999).

Next I wondered if I could switch a pre-recorded video for live camera input, via [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). At first, it didn’t work, giving me the error: *“Requested texture size [0x0] is invalid”*. I wondered at first if it was an intentional restriction. Thankfully, [the solution](https://github.com/tensorflow/tfjs/issues/322) was simply to set the ‘width’ and ‘height’ attributes on the video element. I pointed the camera at a picture of a llama on my screen (as I didn’t have a real llama to hand 😞)… *And it worked!*

Now I’ve added a simple user interface and hosted it up at [https://llama.vision](https://llama.vision), so you can try it too:

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/1z34JIVxLNM" frameborder="0" allowfullscreen></iframe></center>

The source code is [here on Github](https://github.com/poshaughnessy/llama-vision). The key piece of code is small and straightforward — Tensorflow and MobileNet do all the hard work for us:

```javascript
// Load the prediction model
mobilenet.load().then(model => {

  // Now we can keep checking the camera feed at regular intervals, like this:
  model.classify(video).then(predictions => {

    const topResult = predictions[0];

    if (topResult.className === 'llama') {
      // Woo! Llama! NB. We can also get the confidence value from the `probability`
      ...
    }
  });
});
```

One thing to note is that in Android browsers I’ve tried other than Chrome, Tensorflow.js is giving a warning *“Extension WEBGL_lose_context not supported on this browser”* and the model takes a long time to load and calculate (I guess because it fails to use WebGL for better performance). Hopefully I’ll come across a solution for this soon.

And one day I hope to make it to a llama farm — so I can test it out in real life!

*If you’re based near London and interested in machine learning with JavaScript, our friend [Asim Hussain](undefined) runs a regular [AI JavaScript London meetup](https://www.meetup.com/AI-JavaScript-London/). Maybe I’ll see you there!*



By Peter O'Shaughnessy on November 1, 2018.

[Canonical link](https://medium.com/samsung-internet-dev/introducing-llama-vision-a-website-that-detects-llamas-through-your-camera-aa6f16144ac4)
