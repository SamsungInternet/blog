---
cover: img.jpg
title: "A Crisis of Permissions"
description: "I ❤ the internet. By visiting a URL I can have access to information, learn new skills, interact with friends, shop, watch movies, play games, you name it. Not only that but new APIs are constantly being created to allow us to interact with the web in new and exciting ways."
category: Web Development
img: img.jpeg
author: Jo Franchetti
authorImg: https://miro.medium.com/fit/c/240/240/1*Z3jj0qvOata1z4xlJPSqOA.jpeg
tags: [Web Development, Framework, JavaScript, Web, Performance]
---
# A Crisis of Permissions

A Crisis of Permissions

I ❤ the internet. By visiting a URL I can have access to information, learn new skills, interact with friends, shop, watch movies, play games, you name it. Not only that but new APIs are constantly being created to allow us to interact with the web in new and exciting ways.

Developers can now access users’ personal data, their location, use their hardware and connect to external devices. We can now create truly personalised, captivating, even immersive experiences on the web. In order to use these new, powerful APIs, websites and apps must ask for permission. Being blocked from services until permission is given is absolutely vital, not only to protect the privacy of our users but also to safeguard their trust in the service on offer. Much of the value of our products and the web as a whole is dependent on this trust.

How and why to ask for permission is where our problems begin. As things stand, there is currently no standard for permission requests. The Permissions API gives us a consistent programmatic way to discover the **status** of the user’s permissions without needing to interrupt the user, but when the permission needs to be requested, the method depends on the specific API. Each API has its own method and each developer their own way of implementing it. This has lead us into a crisis of permissions, where sites show dialogues asking for access to a user’s location before they even know the service on offer, where permissions requests are 100s of checkboxes long, where users’ trust and patience is eroding swiftly.

It has been proven that, without a sensible standard, whether through malice or misunderstanding, or at the behest of someone else in the business, developers are not making ethical decisions when it comes to permissions. We should be asking ourselves; ‘Are we the baddies?’

![](https://cdn-images-1.medium.com/max/2000/0*GaltbKQUTlAKdj7c)

**Let’s take a look at some bad examples**

There is a lot of bad behaviour happening with regards to permissions (especially in the EU with new laws regarding GDPR). Here’s a list of some of the most common transgressions.

### Jumping out from behind

Asking for permissions as soon as the user has landed on the page, often for the first time is an all too common anti-pattern. Many websites ask permission to send notifications as soon as the page has loaded. Especially if this is their first visit, users will have no context on why the browser is prompting for permission and in some cases, they won’t even know what the website is for. Asking for permissions instantly, especially location information is likely to get the request denied, and will reduce the users’ trust in the site. In some cases it makes users leave altogether. I won’t name and shame because the list is endless, but it definitely is a thorn in our sides.

<iframe src="https://medium.com/media/8a5875de05a8b52e2ccccf6a2e289cce" frameborder=0></iframe>

<iframe src="https://medium.com/media/9b632a721dc31a64bc368fefeb8b5245" frameborder=0></iframe>

### Ambiguous wording
> Check here to say no to not sharing your location!

Misleading copy, double negatives, and obfuscation of what is being agreed to are more ways that we’re souring our relationship with our users.

![Is payment going to stop the cookies, the ads and the data collection or just one?](https://cdn-images-1.medium.com/max/2000/1*o9YXAil2Qj3rQxgf1oDYBg.png)*Is payment going to stop the cookies, the ads and the data collection or just one?*

### Bundled/Implied/Inherited permissions
> Simply uncheck the 200+ options to deny the request!

When managing permissions is unpleasant, then their being granted becomes much less likely. Users aren’t going to scroll through long lists of checkboxes, they’re going to leave. If users are tricked into granting permissions that they don’t understand then it is no wonder that they lose trust in the product eventually, and maybe even the web as a platform.

<iframe src="https://medium.com/media/900f7cf2731d3c067d231a99b5539e33" frameborder=0></iframe>

When a user accepts a permission request, they don’t necessarily expect that permission to be passed on to third parties.

On the other hand, having standardised bundles could make permissions management more user friendly. Take WebAR as an example -

Augmented Reality is very powerful but can require lots of information about a user’s surroundings. Which as you can imagine is a privacy minefield. In it’s simplest form, AR overlays graphics on to a camera image. Which requires a permission request even if the image is not being read, just used as a backdrop to the graphics.

An advanced AR interface in the web would require complex permissions:

* The ability to locate points and planes in real space

* Accurately know the position of the device

* Estimate the level of light in the scene

Each permission would need to be a separate request. Which may require the user pressing accept 3 or more times.

The temptation is to offer a combined prompt. This however sets up a bad precedent of encouraging users to accept large amounts of permissions. Or putting them off too quickly beause it looks suspicious.

A developer, if they see that users are not clicking accept on the permissions request, may choose to not use the platform at all and use a polyfill. Although they maybe built into the platform, each of these can be polyfilled using the camera and a large amount (MBs large) of computer vision code. Since the user is more likely to accept a single camera permission than something more complex or with more required clicks; the developer may opt for the polyfill even though it gives the user a worse experience over all.

### Blocking content

Full page takeovers, opening new windows and blocking content until permissions are granted is a pattern that doesn’t look out for a user’s best interest. Presenting a user with a wall of text, while informative is also daunting and in many cases will cause the user to leave rather than do the leg work of reading all that text.

![The Tumblr full page cookie management popup](https://cdn-images-1.medium.com/max/2000/0*14kLHRofgX5kkVEq)*The Tumblr full page cookie management popup*

### Asking for unnecessary permissions

It is easy to think that while you’ve got your user’s attention you may as well get permissions for other services too. Asking for permissions that aren't legitimately required by the site or app to function is another way to reduce your user’s trust. The more permissions asked for, the more likely it is that the request will be denied and the user will try another product.

### And many more

GDPR in particular requires that when consent is granted that the user must be informed how long the data will be retained and for what purposes. In current practice there is often no mention of how long permissions are granted for nor any explanation given for the reasons that permissions are being requested (or for secondary use).

There are also real ‘dark’ patterns such as using the microphone to listen for background sounds, or using the camera to read the ambient light in the room.

![](https://cdn-images-1.medium.com/max/2000/0*ZgGWaCqhegz8nUOa)

The web needs to be naturally resistant to these kinds of abuse, harassment and privacy violation. Anti-abuse measures must be built into a permissions standard to stop bad actors.

**Suggested Further Work**

* A unified permissions request UI. In an unobtrusive way, inform that a permission is necessary before requesting the permission.

* Encourage/standardise clearer wording and UI to explain reasons for permissions and how long permissions will be granted.

* Clarify that permissions will be granted ‘Only while using this app’.

* Clearer tooling from browsers/OS for permissions management.

* Design standard permissions bundles to provide context to more complex permissions when all are required to complete a single task, i.e. “This website would like to do Augmented Reality, this may allow example.com to know your location and record and produce 3D models of your surroundings.”

* Usage based trust score to calculate the expiry of the granted permission. Based on time spent on site and/or number of times visited site.

* A baseline standard for private browsing. Users expect that private browsing keeps them safe but there is no standard for what private browsers offer.


By Jo Franchetti on September 4, 2018.

[Read this article on Medium](https://medium.com/samsung-internet-dev/a-crisis-of-permissions-80cf3b2c802e)
