---
title: Web Audio on different platforms
category: "Web APIs"
cover: img.jpg
author: Diego González
authorImg: https://miro.medium.com/fit/c/240/240/1*3Xf5XjVdx87HHxiRKY8X1Q.jpeg
---

### Web Audio on different platforms

#### Taking a look at different behaviors of the Web Audio API

_Para la versión en español: “_[_Web Audio en distintas plataformas_](https://medium.com/samsung-internet-dev/web-audio-en-distintas-plataformas-1be66cbe4fd7)_”._

![](https://cdn-images-1.medium.com/max/1000/1*GrFkeXbd1AebqAw73pNQhA.png)

Test Web Audio WebVR application (https://samsunginter.net/mobile-web-audio)

Recently I collaborated with fashion designer Galina Mihaleva in a [project that included a WebVR experience that was a criticism about noise pollution](https://medium.com/samsung-internet-dev/look-forward-fashion-tech-b47a946ebcd1?source=rss----42759d5da545---4). The project was amazing, we were able to deliver an immersive experience to thousands of people during the exhibition. But upon developing the WebVR app, I ran into some unexpected hiccups when dealing with the Web Audio API. Here’s a brief explanation of the Web Audio API and some tips on differences per platform that will come in handy.

### Web Audio API

audioCtx = new (window.AudioContext || window.webkitAudioContext)();

The Web Audio API is a powerful and versatile way to manage audio inside the web browser. Put simply, it provides an audio context that is able to create different types of nodes. The main “types” of nodes you can create are input, effects, and destination nodes. Inputs represent sounds sources, effects are different modifications that can be applied to the sound, and destination is generally the output, which defaults to the device’s speakers but can also be saved to a file.

![](https://cdn-images-1.medium.com/max/800/1*dM-BIzHlL11_S8lieRDyKQ.jpeg)

Types of nodes in the Web Audio API

Each category of node can be of different kinds. For example, an input node can be an oscillator (`[OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode "The OscillatorNode interface represents a periodic waveform, such as a sine wave. It is an AudioScheduledSourceNode audio-processing module that causes a specified frequency of a given wave to be created—in effect, a constant tone.")`), a media element on the page ( `[MediaElementAudioSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode "A MediaElementSourceNode has no inputs and exactly one output, and is created using the AudioContext.createMediaElementSource method. The amount of channels in the output equals the number of channels of the audio referenced by the HTMLMediaElement used in the creation of the node, or is 1 if the HTMLMediaElement has no audio.")`), an audio buffer (`[AudioBufferSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode "The AudioBufferSourceNode interface is an AudioScheduledSourceNode which represents an audio source consisting of in-memory audio data, stored in an AudioBuffer. It's especially useful for playing back audio which has particularly stringent timing accuracy requirements, such as for sounds that must match a specific rhythm and can be kept in memory rather than being played from disk or the network.")`), or a stream coming from the microphone or camera (`[MediaStreamAudioSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode "A MediaElementSourceNode has no inputs and exactly one output, and is created using the AudioContext.createMediaStreamSource method. The number of channels in the output equals the number of channels in AudioMediaStreamTrack. If there is no valid media stream, then the number of output channels will be one silent channel.")`).

In a similar way, an effect can be a node that represents something as trivial as the volume (`[GainNode](https://developer.mozilla.org/en-US/docs/Web/API/GainNode "The gain is a unitless value, changing with time, that is multiplied to each corresponding sample of all input channels. If modified, the new gain is applied using a de-zippering algorithm in order to prevent unaesthetic 'clicks' from appearing in the resulting audio.")`), or as complex as a panner node (`[**PannerNode**](https://developer.mozilla.org/en-US/docs/Web/API/PannerNode "A PannerNode always has exactly one input and one output: the input can be mono or stereo but the output is always stereo (2 channels); you can't have panning effects without at least two audio channels!")`) that allows spatialized audio. One of the most interesting nodes in the Web Audio API is the Analyser node (`[**AnalyserNode**](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode "The AnalyserNode interface represents a node able to provide real-time frequency and time-domain analysis information. It is an AudioNode that passes the audio stream unchanged from the input to the output, but allows you to take the generated data, process it, and create audio visualizations.")`), which allows you to get the time or frequency data from the current state of an audio source. This is handy for creating audio visualizations.

The idea behind the node system is to allow the audio context to have a flexible plug and play model that can be as simple as connecting a source to a destination, or that can apply and combine different sources and effects in order to create a composite sound.

The Web Audio API allows for a detailed control of audio in the browser, but the way it behaves in different devices changes due to privacy, security and unimplemented features in different environments. We will now look into these specific cases and see how can we deal with them in order to play sounds in a similar way on desktop, mobile and VR browsers.

![](https://cdn-images-1.medium.com/max/800/1*bJFwJb2mRuOoNYg_hhFe7g.jpeg)

Different platforms where we tested the WebAudio API interactions

The sample application where we can test this is located in [https://samsunginter.net/mobile-web-audio](https://samsunginter.net/mobile-web-audio). The app itself consists of three buttons, each setting up sound from a different source in order to test how it works in each specific platform. Below you can see the buttons that you’ll encounter when entering the app.

![](https://cdn-images-1.medium.com/max/800/1*Qu3wr4myOldTdrPGGA8MsA.png)

Different types of input nodes used in the application.

The first button is setting up a source from an audio tag featuring a violin in the HTML file. The second button gets a stream from the device’s microphone, and the last one creates an oscillator with a specific frequency for half a second. Additionally, we try to play an audio with an “applause” sound when the app starts. Nothing fits better with the background picture of the beautiful Opera Garnier in Paris!

### Desktop Browser

Desktop browsers are the easiest and least complicated way of using the Web Audio API. Everything is pretty straightforward, you create the audio context, the effects and then connect all the nodes to the destination.

---HTML file  
<audio id="applause" src="audio/applause.wav"></audio>

---JS file  
var autoPlayBgSound = function(){  
    var bgSound = document.getElementById('applause');  
    var src = audioCtx.createMediaElementSource(bgSound);  
    var gainNode = audioCtx.createGain();  
    gainNode.gain.value = .5;  
    src.connect(gainNode);  
    gainNode.connect(audioCtx.destination);  
    bgSound.play();  
};

In the previous example, we are getting the audio element with `id="applause"` and using it to create a media element source. After this we are creating a gain node (volume) and setting its value to 0.5 (half loudness). We are then connecting the source (src) to the volume effect (gainNode) to the destination. Finally, we are playing the audio with the .play method.

If we were to put this as a background sound to start automatically from the JavaScript file, it would play without any problems. Oscillator created sounds and microphone streams also worked correctly, with the special case of the browser showing the permission prompt to request access to the microphone for the latter… if you’re on a secure origin. As you can see in the image below, Chrome no longer allows to request UserMedia from an unsecure origin. Time to move on to [HTTPS](http://www.w3.org/2001/tag/doc/web-https)!

![](https://cdn-images-1.medium.com/max/1000/1*dIZ_x9ALaDuah4v1CtJj5Q.png)

getUserMedia() no longer works on insecure origins

> Time to move on to HTTPS.

I tested this on Microsoft Edge 40, Mozilla Firefox 52 and Google Chrome 59.

### Mobile Browser

If we were to use the same code as before, we would notice something behaving differently. Can you hear it? Yeah. Its quiet. The background applause is not playing. The violin from the audio tag isn’t working either. What could have possibly go wrong?

Mobile scenarios are different. Special considerations for sounds apply since we are generally dealing with a user on a metered data connection. And unlike the traditional desk/laptops, the connection is generally limited. For this (and other reasons like not having a tab playing sounds out of the blue in a mobile environment) the browser requires user input in order to play sounds. If we debug our app on the phone, we get this confirmation.

![](https://cdn-images-1.medium.com/max/800/1*aL6ED_V6Oh3_WoeImoOfAQ.png)

“API can only be initiated by a user gesture”.

#### Background Audio

Right. It’s understandable for the background “applause” that we were trying to start automatically. But… when the user stares and selects the sound on the first button, the violin… why isn’t it playing? The user _is_ actually tapping or selecting this button. Right?

#### Media Tag

Turns out that an action inside a WebGL environment is not considered a “user gesture”. We can read more about this behavior in [Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=178297), [Chrome for Android](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/vuYEHSeqonM) and [WebKit](https://webkit.org/blog/6784/new-video-policies-for-ios/). Actions considered as a user gesture are “touchend”, “click”, “doubleclick” and “keydown”.

An easy way to bypass this issue is by loading or playing a file the first time the user clicks, touches or presses a key, since the restrictions are removed in the first successful `load()` or `play()`. One way that this can be done is by putting a splash screen to load and “start” or setting up the audio in the button that triggers VR mode. This will force the user to perform a gesture where we can unlock the audio playing capabilities of the mobile browser.

![](https://cdn-images-1.medium.com/max/600/1*V3DYWdoP8CF-GMSsAn9V9g.png)

Screenshot for VR Tranquilitie WebVR experience

As an example, the “VR Tranquilitie” WebVR experience uses a splash screen to prompt the user into selecting a location to set up the subsequent visuals, but it also initializes the “tapping” sound used in the experience.

The main problem that we have with the Mobile Web Audio example is that the menu or splash that appears is an element inside WebGL (A-Frame). If the menu were HTML, then the “click” event on these button images would suffice to setup and play the audio file.

#### Oscillator

Notice that the sound with the oscillator source plays without issues, since it does not require any downloading or loading at all.

#### Microphone

For the microphone source, we first need to remember [navigator.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia) is deprecated. So avoid it at all costs. Use the newer [mediaDevices.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). This new way of accessing stream data is a promise that will be resolved successfully once the user grants permission to use the feature (camera and/or microphone). Nonetheless, Samsung Internet does not implement yet the navigator.mediaDevices.getUserMedia, so either use [WebRTC adapter](https://github.com/webrtc/adapter) (thanks for the tip [Peter](https://medium.com/u/27616666fa21)!) or (re)wrap the getUserMedia object with this hack from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) (pictured below, and the version I am using to keep it all in the same file).

![](https://cdn-images-1.medium.com/max/800/1*Uj0iy-Te_4GMM1mtCXSIIQ.png)

Polyfill to cope with getUserMedia in older browsers. WebRTC Adapter recommended though.

Once the adapter or simple polyfill is in place, _and the website is accessed over HTTPS_, you get access to the microphone. It is recommended to use headphones if trying the microphone feature.

The tested version of Samsung Internet is 5.4.00–75.

### VR Browser

One ‘new’ platform where we should take special considerations is the VR Browser. Now, depending on the hardware that you have you can use several different browsers. In this specific post I’ll be covering [Samsung Internet for Gear VR](https://www.oculus.com/experiences/gear-vr/849609821813454/) version 5.2.10.3, which is available for the Gear VR mobile headset.

In this version the browser is behaving like a traditional desktop browser. You can hear upon loading the webpage the “applause”, and hovering over the media tag (violin) and oscillator work perfectly fine.

![](https://cdn-images-1.medium.com/max/800/1*DA4t-Um7auzhacNDfA79TQ.jpeg)

Mobile Web Audio test app in Samsung Internet for Gear VR

The middle microphone button will not work, even if it accessed over HTTPS, since the VR browser lacks the permissions UX required for the user to engage with different sensors in the device, so no microphone for now in VR mode.

This has been a quick post on understanding how the Web Audio works in different environments. Remember to test accordingly your code and always check resources like [caniuse](http://caniuse.com/#search=getusermedia) and [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), just to make sure your experience works in as many browsers as possible.

#### More on Web Audio

If you are interested in learning more about the Web Audio API, do check Boris Smus’ intro to Web Audio [here](https://www.html5rocks.com/en/tutorials/webaudio/intro/). [Ruth](https://twitter.com/rumyra) [John](https://twitter.com/rumyra) is also an amazing developer playing with the API, so be sure to look up what she’s up to, or ping back at us in the [Samsung Internet team](https://twitter.com/samsunginternet). We’re always up to all sorts of good fun with web tech.

Tagged in [JavaScript](https://medium.com/tag/javascript), [Web Audio Api](https://medium.com/tag/web-audio-api), [Web Development](https://medium.com/tag/web-development), [Browsers](https://medium.com/tag/browsers), [Virtual Reality](https://medium.com/tag/virtual-reality)

By [Diego González](https://medium.com/@diekus) on [July 24, 2017](https://medium.com/p/67fc9ffc2c4e).

[Canonical link](https://medium.com/@diekus/web-audio-on-different-platforms-67fc9ffc2c4e)
