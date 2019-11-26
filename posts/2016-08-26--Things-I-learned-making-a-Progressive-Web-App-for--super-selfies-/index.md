---
title: Things I learned making a Progressive Web App for “super selfies”
category: "PWA"
cover: img.jpg
author: Peter O'Shaughnessy
authorImg: https://miro.medium.com/fit/c/240/240/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
---

### Things I learned making a Progressive Web App for “super selfies”

[Snapwat](https://snapw.at) is a web app for emoji-fying and doodling on your selfies, because there’s no photo that isn’t improved by the addition of pugs and top hats.

![](https://cdn-images-1.medium.com/max/800/1*JL84isfTpBO_BRwQrZRSYw.png)

Here’s how it works:

It’s very simple right now, but I’ll add useful things like undo and redo soon, plus the ability to use an existing photo. Perhaps later you’ll be able to record videos too — and have things track your face as you move around.

I developed it as a quick demo of a [Progressive Web App](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/), combining the best of the web and the best of apps. Like native apps, Snapwat can be installed on your home screen, launch full screen and work offline. Unlike native apps, you can launch it directly from a URL and start using it straight away.

Some of these new features I had only dabbled with before, so I learned a bunch of things which I would like to share:

#### 1\. It’s easy to generate your service worker caching list, but you may not need to…

Snapwat has a set of emoji SVGs. I started off listing each one to cache in my service worker onInstall event.

const RESOURCES = \[    
  '/',    
  '/css/styles.css',    
  '/build/bundle.js',    
  '/images/emojione/1f354.svg',    
  '/images/emojione/1f369.svg',  
  ...  
\];

// Cache pre-defined assets on installation

self.addEventListener('install', event => {     
  function onInstall () {       
    return caches.open('cache-v1')  
      .then(cache => {          
        cache.addAll( RESOURCES );          
      });    
  }     
  event.waitUntil(onInstall(event));  
});

This quickly became ridiculous as the emoji count rose to around 400!

I was already using [Rollup](http://rollupjs.org/) for bundling the JavaScript for the rest of the app (which I’m new to, but I really like — and make sure [you read this](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/) if you’re using Webpack or Browserify). So I asked its creator [Rich Harris](https://twitter.com/Rich_Harris) if he had any tips for using Rollup to generate a file list based on patterns and he very kindly [made an example](https://gitlab.com/Rich-Harris/rollup-cache-manifest-example) that uses a ‘virtual module’.

// rollup.config.sw.js

export default {    
  entry: 'src/sw.js',    
  plugins: \[      
    // \\0 is a plugin convention indicating a 'virtual module'   
    // as opposed to stuff from the filesystem      
    generateCacheManifest({        
      id: '\\0cache-manifest',  
      patterns: \[  
        '.',  
        'build/bundle.js',  
        'css/styles.css',  
        'images/**/*.svg',  
        'images/**/*.png',  
        'sounds/**/*.wav'  
      \]  
    })  
  \]  
};

// sw.js

import filesToCache from '\\0cache-manifest'; 

self.addEventListener('install', event => {     
  function onInstall () {       
    return caches.open('cache-v1')  
      .then(cache => {          
        cache.addAll( filesToCache );          
      });    
  }     
  event.waitUntil(onInstall(event));  
});

This worked great, except it appeared to slow down the loading time of the app significantly! I realised that I didn’t really need to cache all the icons up-front. Having all of them available is not essential for the initial function of the app, so it is not necessary to ensure they are cached immediately. As [Ada Rose Edwards](https://medium.com/u/c2890cdd7a64) told me: _“don’t cache loads of stuff on install!”._ I was already caching responses on fetch anyway, so depending on the timing of the service worker initialisation, they should get cached as they are fetched anyway. I decided to strip down the onInstall caching to just the bare minimum — and use the fetch handler for everything else. (I am still making use of Rich’s virtual module for generating the emoji file list for the app itself though).

#### 2\. There be dragons, trying to save client-side images

_Update: This spawned a_ [_WICG discussion on mobile “save image” features_](https://discourse.wicg.io/t/save-image-feature-on-mobile-platforms/1676/1)_._

The issue that stumped me for longest was trying to save your generated image at the tap of a button. It’s easy to generate an anchor tag with the _src_ attribute set to a _data-uri_ representing your image. You can then simulate a click on that link and hey presto, it will download straight away. However, some browsers like Samsung Internet have a restriction that you can only download ‘http’ or ‘https’ URLs.

![](https://cdn-images-1.medium.com/max/800/1*XhNGo3mBfQJdRIU0H-J7Kg.png)

No problem, I thought — I can use a service worker to intercept an http/https URL and serve the data-uri client-side! Alas, that does not work for <a download> links in Chromium-based browsers right now due to [this Chromium bug](https://bugs.chromium.org/p/chromium/issues/detail?id=468227#c13) (thanks to Jake Archibald for pointing me to this).

In the end, I decided to just invite users to long-tap and save the image manually if they wish. It’s also possible to share it directly to Twitter, using [hello.js oAuth](https://adodson.com/hello.js/).

One further issue though: in Samsung Internet, the long tap menu is disabled when the app is running in standalone mode, i.e. when it’s launched full screen from the home screen icon. So for now, you may wish to simply use the app in the regular browser mode. Hey, you still get a lovely coloured status bar at the top, thanks to [theme-color](https://developers.google.com/web/updates/2015/08/using-manifest-to-set-sitewide-theme-color?hl=en)!

#### 3\. Better support for <input type=”color”> and getUserMedia would be good

I had naively thought that HTML5 elements like <input type=”color”> would be well supported by now, but iOS Safari still just shows an ugly text input in its place.

[html5please](http://html5please.com/) recommends the polyfill [Spectrum](https://github.com/bgrins/spectrum), but it’s a JQuery plugin and I’m loathe to introduce a library just for this.

It’s not ideal, but for the moment I’m “solving” this by simply displaying a substitute placeholder by default and switching to <input type=”color”> if it is supported ([here’s the code](https://github.com/SamsungInternet/snapwat/blob/master/src/shared/inputColour.js)). If anyone knows of — or fancies making — a simple low-dependency polyfill, please let me know!

Similarly, [getUserMedia](https://developer.mozilla.org/en/docs/Web/API/Navigator/getUserMedia) — which Snapwat needs to access your camera — is also not supported yet in iOS. At the moment I am simply displaying a message to inform the user. It’s possible to still use the app to doodle! However, soon I will add an <input type=”file”> option which should allow iOS users to select a photo from their camera roll or snap a new photo. They won’t get to draw over a live camera feed, but it’s the next best thing.

![](https://cdn-images-1.medium.com/max/800/1*uLrclX0tUykfMPNqpKwflg.png)

#### 4\. If it looks good in Chrome, it’ll probably look good in Samsung Internet

Before diving into Samsung Internet recently, I wondered how similar the browser’s rendering would be to Chrome. The good news is that, since they are both based on the Blink engine, it should be pretty much the same. Admittedly Snapwat is a small, simple app, but I haven’t noticed any differences in layout or visual appearance across the two yet.

![](https://cdn-images-1.medium.com/max/800/1*_yWhzQd_I2llzevBFgMkGg.png)

#### 5\. Client-side for the win

Finally, I learned that — despite some image download niggles — it is possible to develop social apps that are completely client-side. Snapwat is simply static content, hosted on Github Pages (plus a hello.js oAuth proxy). Snapwat does not store your photos, or indeed anything, except the cache on your own device. How you share your photos with your friends (or not) is completely up to you.

Could “serverless” be a new model for privacy-friendly social apps? Could Snapwat be just the beginning? I don’t know, but even if it doesn’t start a revolution, at least it lets you snap selfies with top hats and pugs on your shoulder.

* * *

The first version of Snapwat is hosted at [https://snapw.at](https://snapw.at) and the source code is [here on Github](https://github.com/SamsungInternet/snapwat/). If you give it a try, don’t forget to share your super selfies with us, [hashtag snapwat](https://twitter.com/search?q=%23snapwat&src=typd)!

_I’m continuing to work on improving and extending Snapwat and I’m still running into issues and learning new things, so I hope to add further thoughts soon…_

Tagged in [JavaScript](https://medium.com/tag/javascript), [Web Development](https://medium.com/tag/web-development), [Progressive Web App](https://medium.com/tag/progressive-web-app), [Mobile Web Apps](https://medium.com/tag/mobile-web-apps), [Selfies](https://medium.com/tag/selfie)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [August 26, 2016](https://medium.com/p/49e76d154e4f).

[Read this article on Medium](https://medium.com/@poshaughnessy/things-i-learned-making-a-progressive-web-app-for-super-selfies-49e76d154e4f)