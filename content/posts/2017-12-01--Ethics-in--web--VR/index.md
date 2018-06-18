---
title: Ethics in (web) VR
category: "Web VR"
cover: img.jpg
author: uve
---

### Ethics in (web) VR

VR content is becoming more accessible to build, with the help of tools such as A-Frame and Unity developers can create VR experiences fast and share them over the internet. The downside this may bring is that nothing is stopping them from creating content without thinking about who consumes it.

#### Content Warnings

Before playing a game, watching a film or consuming any media there are ratings and warnings. Movies have age ratings and video games have a similar rating system. Sometimes these are broken down further, “tagging” what content has caused it to receive that rating.

![](https://cdn-images-1.medium.com/max/800/1*W2XWtCDy_MkWJQLqw3aJXA.png)

Rating from the Steam page of Remember Me

VR content sold through monitored platforms such as Steamworks, the Google Play store or the Oculus store will have to go through a process that will rate and tag it appropriately. WebVR content, on the other hand can be shared with a single link and does not have to go through any vetting process. This leaves the developers to be the ones to add in a content warning.

A popular first person shooter game, Call of Duty had a [controversial level](https://kotaku.com/that-time-call-of-duty-let-you-shoot-up-an-airport-1738376241), where you could shoot people in an airport. When the level was revealed people acted negatively. The creators wanted to keep the level in the game but took in peoples views and so altered it so it could be skipped through a prompt before the mission started.

![](https://cdn-images-1.medium.com/max/800/1*t3ARZDDaZqFKrQ8cVCz_Cw.jpeg)

A prompt to skip a mission from _Call of Duty: Modern Warfare 2_

A content warning for a WebVR experience can be as simple as a splash screen explaining what the game is before you start playing. If you made a horror game with jump scares and violence, tell the player before they put on their headset and start to play. This won’t spoil or ruin your game, it will mean people about to playing will know what to expect.

A Twitter thread by on the need of content warnings in media

[Academics](https://www.gold.ac.uk/research/ethics/) and [doctors](https://en.wikipedia.org/wiki/Medical_ethics) have to abide by codes of ethics but web developers don’t have such things and can produce what they see fit. Developers need to take responsibility for their players. Virtual Reality is a new field with lots of research and development being done around it. We need to make sure the development and research go hand in hand.

> Developers should always be asking themselves whether something /should/ be made before asking whether it /could/ be made. — [Jo Franchetti](https://medium.com/u/4cf7e97e494e)

When building websites and coding things there are “best practices”, which are things that aren’t required for it to function, but have been agreed upon that they make for “good” experiences. The same should be done for VR, in both a UX way and in a way that protects users.

#### Multiplayer Experiences

Virtual reality makes experiences more immersive, this makes everything feel more real such as threats of danger and violence. This carries over and can create a real feeling of intimacy when you interact with others in multi user experiences.

On the flip side this makes harassment a lot more realistic.   
If you look down and see a huge drop in VR it invokes a fear response and makes you jump back, how do you think it feels to have someone grab your body without your permission in VR?

[Jordan Belamire](https://medium.com/u/9159eadce969) wrote up her experiences on the topic, which I recommend reading:

[**My First Virtual Reality Groping**  
_Last week I was groped in virtual reality — did you know that could happen? I didn’t, but now I’m all the wiser._medium.com](https://medium.com/athena-talks/my-first-virtual-reality-sexual-assault-2330410b62ee "https://medium.com/athena-talks/my-first-virtual-reality-sexual-assault-2330410b62ee")[](https://medium.com/athena-talks/my-first-virtual-reality-sexual-assault-2330410b62ee)

#### Stopping Harassment

If you are making a muti-user experience you need to ensure there are systems in place to stop harassment.

If there is voice chat are there options to report people? How close can users get to each other and can they be sexually assaulted or groped? Do you have moderators?

VR chat makes all users agree to [community guidelines](https://vrchat.com/community), which covers language, actions, doxing and a bunch of other things. They enforce this through the use of moderators that are able to ban people who break the rules.

#### Trusted environment

Under “[Security, Privacy, and Comfort Considerations](https://w3c.github.io/webvr/spec/latest/#security)” the W3C specs for WebVR 2.0 include something called a Trusted environment. A way for users to leave the current experience and go to a separate VR scene. This is useful for when content is slow and unbearable to view, flashing random colours, or if overly violent or explicit.

> Badly applied tracking, strobing colors, and content intended to offend, frighten, or intimidate are examples of content which may cause the user to want to quickly exit the VR experience. Removing the VR device in these cases may not always be a fast or practical option. To accommodate this the UA SHOULD provide users with an action, such as pressing a reserved hardware button or performing a gesture, that escapes out of WebVR content and displays the UA’s trusted UI.

It’s up to the web browser to implement and support this trusted environment, but since the WebVR spec has not been finalised and will still change, no browsers have implemented this yet.

WebVR opens a lot of doors and allows us to make and share content in a whole new way, we need to make sure we are making things for the right reasons and putting our users experience first when designing experiences.

#### Resources

[https://www.brookings.edu/blog/techtank/2016/04/18/the-ethical-dilemmas-of-virtual-reality/](https://www.brookings.edu/blog/techtank/2016/04/18/the-ethical-dilemmas-of-virtual-reality/)

“If VR can alter us to make us more empathetic, can it alter us in different ways too?” —   
[https://www.wired.com/2016/09/can-vr-really-make-people-empathetic/](https://www.wired.com/2016/09/can-vr-really-make-people-empathetic/)

“I see a lot of people in tech saying that they’re not responsible for this technology; they’re just developing it” — [https://www.polygon.com/2017/3/24/15055542/vr-government-regulation](https://www.polygon.com/2017/3/24/15055542/vr-government-regulation)

“VR can be used to put people into a constant state of fear “— [https://www.polygon.com/features/2017/4/7/15205366/vr-danger-close](https://www.polygon.com/features/2017/4/7/15205366/vr-danger-close)

[http://vinylmint.com/blog/real-dilemma-ethics-virtual-reality/](http://vinylmint.com/blog/real-dilemma-ethics-virtual-reality/)

[**10 ideas from the Develop VR Conference**  
_Today we’ve been attending the Develop VR conference in London (representing the VR specialisation) and I thought we’d…_medium.com](https://medium.com/virtual-reality-virtual-people/10-ideas-from-the-develop-vr-conference-1ab2ad5fe212 "https://medium.com/virtual-reality-virtual-people/10-ideas-from-the-develop-vr-conference-1ab2ad5fe212")[](https://medium.com/virtual-reality-virtual-people/10-ideas-from-the-develop-vr-conference-1ab2ad5fe212)

[https://motherboard.vice.com/en_us/article/yp3va5/vr-code-of-ethics](https://motherboard.vice.com/en_us/article/yp3va5/vr-code-of-ethics)

Tagged in [Virtual Reality](https://medium.com/tag/virtual-reality), [Webvr](https://medium.com/tag/webvr), [Ethics](https://medium.com/tag/ethics), [Web Development](https://medium.com/tag/web-development), [Game Development](https://medium.com/tag/game-development)

By [uve](https://medium.com/@uveavanto) on [December 1, 2017](https://medium.com/p/e24770b1a5f1).

[Canonical link](https://medium.com/@uveavanto/ethics-in-web-vr-e24770b1a5f1)
