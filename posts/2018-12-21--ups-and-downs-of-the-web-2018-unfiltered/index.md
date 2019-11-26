---
cover: img.jpg
title: "Ups and Downs of the Web 2018 (Unfiltered)"
description: "We do a lot of thinking about the web in the Samsung Internet developer advocacy team. And it’s not an understatement that every member of the team has strong opinions about something. Holding strong opinions about the web is kind a prerequisite for this job. So I asked members of the team to come up with some positives and negatives for 2018 and some of the thinking that will be driving our work for next year."
category: "Communities"
img: https://cdn-images-1.medium.com/max/1200/1*U3iVqPTM-u8AsyfTKjphug.png
author: Daniel Appelquist
authorImg: https://miro.medium.com/fit/c/240/240/1*pbg6-ZjCLUyL76n5ja0S5Q.jpeg
tags: [Web Standards, Immersive Web, Ethics, Mobile Web Development, Progressive Web App]
---

# Ups and Downs of the Web 2018 (Unfiltered)



We do a lot of thinking about the web in the Samsung Internet developer advocacy team. And it’s not an understatement that every member of the team has strong opinions about something. Holding strong opinions about the web is kind a prerequisite for this job. So I asked members of the team to come up with some positives and negatives for 2018 and some of the thinking that will be driving our work for next year.

Please note: these are personal views of the team, are not filtered by me or anyone else, and don’t present an official “Samsung opinion.”

![](https://cdn-images-1.medium.com/max/3162/1*EPVT_XvbxLtVLPnTE9nDZw.png)

## Ada

This year has been a harrowing year for living in the web. Many wonderful APIs have landed. These make the web a better place to build for and making it last long into the future.

However there has also been significant damage to the culture of the web which raises the question: is the web a platform worth saving?

### Best

2018 felt like the web as an app development platform took a big step into the future.

To the amazement of many, Progressive Web App technologies have finally landed in Safari and Web Components CSS Grid and Custom CSS Properties are now available in all mobile web browsers. Mobile-first developers can build using the latest CSS and JavaScript features to build fast, responsive and modular websites without needing to transpile JavaScript.

Augmented and virtual reality on the web (“WebXR”), my personal favourite new feature, has made great strides and has become [a W3C working group](https://www.w3.org/immersive-web/) and is feeling very positive. The Immersive Web is really important because it will allow the web to be prepared when VR and AR hardware starts to be more targeted at consumers. Allowing the web to last long in to the future.

I’ve been extremely excited about [Mastodon](https://mastodon.social) and other ways communities have taken control of their platforms. The failings of leadership of many large social media platforms has led mastodon from strength to strength as people move to form their own communities using the open platform.

### Worst

The puritanical right in the USA [pushed through SESTA/FOSTA](https://www.eff.org/deeplinks/2018/03/how-congress-censored-internet) on April 11, 2018. The goals of these were to drive sex workers off the web, they were ostensibly put through to help reduce sex trafficking but instead make it harder to find and stop because now it has been driven under the surface.

The effect on the web was immediate though: Backpage shut down and Craigslist shut down its personals page, preventing sex workers from safely finding clients. In addition people selling videos on Patreon and Etsy and other similar platforms suddenly had their livelihoods shut down.

With SESTA and FOSTA due to be enforced soon, it leads many social media sites open to potential liability. Facebook is now banning any mention of sex and sexuality; which will adversely effect queer communities and queer youths looking for support that they may not be able to find in their offline communities.

<iframe src="https://medium.com/media/2724b13273d35d94f3f5d8902d9f4e62" frameborder=0></iframe>

In addition Tumblr has recently removed all “adult” content, once again having an outsized effect on the extremely large queer communities there. This has been especially biting because it was the largest space for women and queer people to safely express their sexualities.
[**The Tumblr Porn Ban Punishes Sex Workers for No Reason**
*The overzealous crackdown is going to endanger people who are already vulnerable. On Monday, Tumblr announced that it…*www.gq.com](https://www.gq.com/story/tumblr-porn-ban-sex-workers)

These laws have caused some communities to abandon traditional platforms in favour of a more distributed approach. [Switter is one example](https://www.fastcompany.com/90178614/why-sex-workers-are-ditching-twitter-for-switter-and-why-it-matters) of a community that has abandoned Twitter in favour of Mastodon.

This is reminiscent of the shutdown of live journal which lead to the migration to Tumblr in the first place and resulted in the formation of Archive of Our Own (AO3) as a community run and supported space for hosting fan fiction.

I’m hoping that another community run resource, that could replace Tumblr, will rise out of this — perhaps something backed by [ActivityPub](https://activitypub.rocks/), like Mastodon, or maybe something more bespoke.

I think in the long run a trend of retaking the web from large media corporations and hosting our communities ourselves is the key for longevity of the web.

[-Ada Rose Cannon](undefined)

![](https://cdn-images-1.medium.com/max/3162/1*ZLNw30fk9QNfOvWlBXh8FQ.png)

## Amy

Being relatively new to web development it was a hard task to pick my highs and lows of the web for 2018 — there is still so much that I have yet to learn! Nevertheless here are some of my highs and lows of the web this year:

### **The Highs + + +**

### **WCAG 2.1**

One of the biggest bits of news for a11y (accessibility) flavoured folks like me, has been the update to the Web Content Accessibility Guidelines (WCAG) which happened in June this year. The update to 2.1, is an extension of the previous 2.0 guidelines which were published 10 years ago in December 2008. This new documentation aims to improve accessibility guidance overall; but particular attention is given to improving accessibility for people with cognitive or learning disabilities, people with low vision and people with disabilities that impact usage of mobile devices.

The focus on mobile development is especially positive, as more and more people are accessing the web primarily (and sometimes exclusively) through a mobile device — yet accessibility in mobile environments can be very hit and miss. The new guidelines help web developers to understand and navigate this space; covering topics such as [orientation](https://www.w3.org/TR/WCAG21/#orientation), [reflow](https://www.w3.org/TR/WCAG21/#reflow) and [target size](https://www.w3.org/TR/WCAG21/#target-size) — which are all risk areas for accessibility on mobile devices. I can’t tell you how many times I’ve come across inaccessible target sizes for buttons and links on mobile websites this year — it’s 2018 folks, how are you not testing these things for accessibility on your mobile view?!

You can take a look at the [new features of WCAG 2.1 on the W3C website](https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1) that outlines the standard documentation.

If you want to become an a11y champion in 2019 and help people like me in advocating for better accessibility across the board, then you can start by reading [my previous post on web accessibility](https://medium.com/samsung-internet-dev/are-you-accessible-a-primer-on-web-accessibility-7b2ab0ceffe8). I also highly recommend watching the following talks:

* [This is for everyone](https://www.youtube.com/watch?v=qsezvPwzkZE) talk by Bruce Lawson & Seren Davies given as part of [#ID24](https://inclusivedesign24.org/2018/) 2018

* [Developer’s guide to accessibility mechanics](https://www.youtube.com/watch?v=qi0tY60Hd6M) talk by Leonie Watson given at [You Gotta Love Frontend](https://www.lithuania.yglfconf.com/) in 2016

### **The rise of PWAs**

I think the entire team is celebrating the rise of Progressive Web Apps (PWAs) as part of 2018’s best bits. I personally no longer feel the need for everything in my life to be connected all of the time. Whilst I appreciate advancements in technology, I do get frustrated when I can’t use any web based application because my device is currently offline (this makes my journeys on the underground especially boring). PWAs are tackling this issue head on and are a great way of combining the benefits of the web with some of the best bits from native applications.

As Ada mentioned, the support for these has continually grown throughout 2018, which is great news for the PWA community (and for me too — as I am about to embark on building one myself). If you want to see what PWAs might be useful for, you can check out a selection of PWAs in action at [pwa.rocks](https://pwa.rocks/). And for a primer on making PWAs, the wonderful [Arora](undefined) wrote this post [A beginner’s guide to making Progressive Web Apps](https://medium.com/samsung-internet-dev/a-beginners-guide-to-making-progressive-web-apps-beb56224948e) for Samsung Internet last year.

### The Lows - - -

### **Inclusivity in Building the Web**

As the news of Microsoft discontinuing work on the EdgeHTML browser engine is still quite fresh in our social feeds, it would seem almost neglectful to have a post about the positives and negatives of web this year without giving this move a mention. The move goes under my not so great list for one reason — inclusion.

It is true that the spaces in which future developments of the web are discussed suffer a huge lack of representation, in terms of having a voice for all of the people who are actually building stuff for the web. Not only is it important that we improve this representation, but we also desperately need diversity of thought in the conversations that are happening regarding the future of the web. Diversity of tools and ways of doing things is equally as important. We need disagreement, we need to be challenged and we need to be held accountable for the decisions we make — otherwise we end up in territory that the late great Rear Admiral Grace Hopper would deem damaging:
> # The most damaging phrase in the language is: “It’s always been done that way” — Rear Admiral Grace Hopper

I hope that in 2019 we will see a bigger push towards making web standards more accessible to everyone that builds stuff for the web. If you want to start learning more about web standards and how to get involved in the conversation, watch this space for my upcoming post on Web Standards: the What, the Why & the How?

### **Being open and accessible online**

My second not so great point of 2018 is regarding the emotional labour that many people face for having open direct messages on social media platforms.

Just this week I have endured a lecture or two over my direct messages (DMs) that I didn’t ask for. There have been so many occasions where I’ve found myself asking *“now just wait a second, if I were a man would you be saying any of this to me right now?” *Sadly most of the time the answer to this question is no. This point was especially highlighted by a [piece on the UK news recently about the abuse and harassment of women who are public figures](https://twitter.com/5_News/status/1075102933128163328). I’m still finding a way to strike a balance of being approachable, without opening myself up to more of these pointless and sometimes harmful encounters.

This is my biggest negative of the web today. We are more in touch with each other’s lives than ever before; yet it appears we are forgetting to encourage ethical and moral behaviour in our online communities.

Whilst it appears 2018 has brought more awareness of this kind of thing, actions like writing a quick code of conduct aren’t going to miraculously change an online space overnight. That is because a much larger cultural shift is needed to see a behaviour change amongst online communities. It is all of our responsibilities to be good citizens of the world wide web.

**Want to make sure you are being a good online citizen?**

You can make a start by being more aware of own unconscious bias through [implicit association tests](https://implicit.harvard.edu/implicit/uk/) and by employing some“check yourself before you wreck yourself” stages before posting or sending that DM. Such as:

* Ask yourself “Did this person ask for the information I am about to tell them?” In a face to face conversation you wouldn’t just shout your opinion at the top of your voice to a stranger who didn’t ask you for it, so why do it online?

* Check that what you’re about to say hasn’t already been said in the conversation. This can be done by reading everything that has been said in threads on social media or over issues on code reviewing platforms.

* Make a conscious note of what are the positives that can come from your actions. If it doesn’t a) help the reader or b) support someone in a positive way, then why are you writing it? Do you intend to cause harm? Would you be ok with your message being interpreted this way?

* Finally ask yourself, how would I feel/react to this? In other words employ some EMPATHY. Not sure what it means to be empathetic? — check out [Jo](undefined)’s recent [post about empathy in the developer community.](https://medium.com/samsung-internet-dev/the-economics-of-empathy-b4d49362b7b7)

I hope in 2019 that we will see a shift in attitudes toward social responsibility across the web in general; by this I mean better accountability by both organisations who are part of the social web and by the people who are using those platforms. Some platforms, especially those routed in open source and open leadership are already encouraging better community practices and making their users think about their own social responsibility — Mozilla ([see their training series on leading online communities](https://mozilla.github.io/open-leadership-training-series/articles/building-communities-of-contributors/)), GitHub (check out their guide on [building welcoming communities](https://opensource.guide/building-community/) and [other open source guides](https://opensource.guide/)) and Mastodon are a few that come to mind. Here’s to more organisations encouraging better social responsibility in their online communities in 2019!

[-Amy Dickens](undefined)

![](https://cdn-images-1.medium.com/max/3162/1*eBGdLlydLytgB1zVjpaV2g.png)

## Damon

It is the end of the year already?!? I have had my head down on following the developments of the immersive web and how various companies and industry sectors are starting to leverage its power. In this context I am expanding the definition beyond the stellar work being done by the W3C Immersive Web working group to include other factors of immersion I am witnessing happen, including those with our real world. Let me set the stage for what I mean.

**The :)**

* **Putting the 3D World in World Wide Web:** This past year saw the rise of entities and industries related to our built environment using the web as a distribution platform for their 3D data. Having this data ‘web ready’ not only helps those in these industries, but also begins to set a stage for other applications that can use this digital twin of our real world. Examples include displaying data in its geo-location for proper context, providing an accurate model for [AR Cloud](https://venturebeat.com/2018/12/18/the-ar-cloud-will-infuse-meaning-into-every-object-in-the-real-world/) applications, and even assisting autonomous vehicles.

* **Connecting the Digital with the Real via the Web: **This year I witnessed more using web based digital twin models as 3D GUIs for IoT devices, growing interest in the Web of Things, and more examples that showed the potential of the Web Bluetooth API. At our Create conference earlier in the year, we had some great presentations from Wei Xiao ([Mixed Reality: Where the virtual world meets IoT](https://youtu.be/SAuVUBMi5CA)) and Kathy Giori ([Mozilla IoT Framework](https://youtu.be/mWCa6byiPco)) around these topics. Diego Gonzalez & Peter O’Shaughnessy gave a presentation later in the year named ‘[Physical and Immersed](https://youtu.be/69_VdISXoRE)’ that is well worth the watch and discusses the mashup of WebXR and Web Bluetooth.

* **Enhancing how we interact with our realities: **This was definitely a roller coaster year for the virtual reality (VR) and augmented reality (AR) industries. Depending on what industry sectors you follow, 2018 was either a sobering moment of reality (Business to Consumer) or one of steady growth and adoption (Business to Business). From the web perspective, it has been an exciting year to see more VR and AR headsets with web browsers that support WebXR experiences and the progress made by those working on the next version of the Immersive Web specification. In addition to the WebVR/AR frameworks becoming more robust for developers, there were more tools and platforms coming online to enable non-coders to create these experiences as well.

* **Enhancing how we interact with each other: **This was definitely a year of growth and focus around diversity and inclusion initiatives. While the community as a whole has a way to go, great strides were made this year to improve this situation and I applaud all that contributed to addressing this issue.

**The :(**

* **No WebXR spec in 2018: **I understand that great things take time to do well and get right. I also know that the members of the Immersive Web W3C group are working hard and doing an incredible job at developing a great spec that addresses current and future needs. What bums me out is that I will have to wait longer than my impatient self wants to before seeing a stable version available and adoption in commercial browsers.

* **Siloed experiences: **Did you see that PWA that works on a mobile device and desktop with a XR component that interfaces with a browser on a wearable and a TV? Yeah, neither did I. I want to know where the cool mashups are hiding and who is talking about how to design for these types of applications.

* **Security & Data Privacy: **If you have been online in the past year, you are more than familiar with the news around the lack of security & data privacy by online platforms. GDPR is a step in the right direction, but there is still a lot of restructuring and business model tweaking that needs to happen to protect folks to the levels I would like to see.

Overall 2018 was a solid year. I look forward to 2019 and working with a great global community on pushing not only what is possible with the web, but what is possible within ourselves to make our reality the best it can be. Have a great new year! :)

[-Damon Hernandez](undefined)

![](https://cdn-images-1.medium.com/max/3162/1*5kd_dS0UQVF0bx8f0Vishg.png)

## Dan

2018 has been a roller coaster ride but I am definitely seeing some signals that make me upbeat about the future of the web. For one, we have had the rise of progressive webapps and the adoption of PWAs by big web brands. These days, on my Android phone, I am using Twitter, Facebook, Instagram, Starbucks, Uber, Lyft, Mastodon, and Google maps almost exclusively through PWAs.

On the negative side, we’ve seen the rise of notification spam and spammy notification permissions requests. For example, many sites have started to ask for permission to send push notification on first visit. This antipattern has the potential to poison the well for push notifications, as people will quickly experience notification fatigue. Browsers will have to take a stronger role in 2019 in policing who gets to ask you permission, mirroring the role they’ve been playing in blocking web tracking.

Speaking of web tracking — I think it’s positive that we’ve seen tracker blocking becoming mainstream. Samsung Internet shipped this function earlier this year (as an opt in). Firefox on desktop also has started to block some trackers by default and will be doing more in 2019. This reflects the unfortunate truth that the ad tech industry needs to be reined back and people are taking matters into their own hands to do this.

One of the key positive trends I’ve seen this year — in the web but also in the technology community in general — has been the increasing awareness of ethics in technology. We’ve all borne witness to what happens when technology is applied without ethical consideration. Privacy-damaging ad tracking is one great example, especially when that tracking (and subsequent ad retargeting) can be a trigger for a traumatic event or can put members of a marginalised group in danger. I’ve started some work in the [W3C TAG ](https://w3.org/tag)to explore the idea of applying ethical standards to new web technologies while they are in development. This is based on the (radical?) idea that the web should be beneficial to society — not only to business.

I hope that 2019 will be a year when many tech companies and communities look themselves in the mirror and begin to adopt ethical frameworks to ensure that they put human rights and human dignity at the core of their thinking. The web continues to evolve and incorporate new technologies, and we have been privileged to be a part of many of these developments. We need to also ensure these new web technologies enable personal agency and freedom of expression and do not lend themselves to abuse by bad actors.

I’ve also been privileged to be a part of the [ongoing work](https://github.com/nodejs/bootstrap) on merging the [JS Foundation](http://js.foundation) and the [Node JS Foundation](http://foundation.nodejs.org). This is going on in the context of the wider story of JavaScript becoming an ever more mature and stable pillar of the web, in the browser, on the server side, as part of the developer tool chain, and increasingly in connected devices as well. It’s been inspiring to work some of the people who are working in this arena, who are ensuring that the future of the JavaScript ecosystem is [diverse and inclusive](https://github.com/nodejs/bootstrap/blob/master/proposals/hackygolucky-EXPECTATIONS/EXPECTATIONS.md) as well.

Finally, another worrying trend happening on the web is Balkanization. As the New York Times editorial board [wrote about in October](https://www.nytimes.com/2018/10/15/opinion/internet-google-china-balkanization.html), the global nature of the web is increasingly coming up against laws enacted governments who wish to enforce their versions of reality, of societal norms, or of morality on people globally. Ada already wrote about the chilling effects of SESTA/FOSTA in her piece above. Now we are learning to companies such as Slack are overzealously applying what they perceive as US laws on a global stage, [banning users with ties to various countries](https://www.theverge.com/2018/12/20/18150129/slack-iran-deactivated-sanctions-license-cuba-crimea) embargoed under US law. Fortunately, this isn’t the way the web works. The web is inherently resistant to this kind of interference. As centralized platforms exert more control and try to enforce local regulations on a global stage, people will inevitably explore new, more open platforms. The web enables people to vote with their feet. Balkanization in the sense of users abandoning centralized platforms for more distributed systems might actually be a good thing in this context — an immune system response to a threat to the web.

[-Daniel Appelquist](undefined)

![](https://cdn-images-1.medium.com/max/3162/1*wcdaLYihCkOLTyhPe-wg1A.png)

## Diego

It’s that time of the year, when we artificially start recapitulating the past 12 months and look back at all the things we liked, didn’t like, and absolutely will not miss this upcoming year. These are the items on my Naughty or Nice list for the web for 2018.

**Nice**

* **PWA:** It’s actually happening. The Web has a technology (or set of technologies) that can be as good as its native counterpart. The fact that it is actually being adopted by major players and that is used is already a pretty impressive feat. While we need to reinforce that it’s not a single company’s effort, it’s nice to realize that this is shaping up to be the code-once deploy everywhere holy grail that we have been looking for a while.

* **Immersive Web:** While not as mainstream as the previous tech (yes, not many people use this), it is one of the areas that I’m looking forward to, especially because of the features that are coming into the specification ([dioramas](https://github.com/immersive-web/proposals/issues/31) anybody?). Also, some of the work that is being done setting up the stage for a declarative way of creative XR content is looking pretty pretty cool.

* **Web Components:** With Firefox enabling Custom Elements and Shadow DOM this October (and with whatever Microsoft is doing with it’s browser), this neat set of techs can be seen as graduating for high school. Their implications for development based in sweet vanilla JS tech can really change the way we develop and share web stuff. Thumbs up.

* **Grid and Flex:** It was about time for this, but we finally have it: a built-in layout system for the web. It has made our lives easier and we love you flex.

**Naughty**

On the other hand, these will find coal in their holiday stockings.

* **GDPR implementation:** Most of the implementations of the opt-in/out forms that appeared after GDPR are utter annoying garbage that navigate you to another page to see loading screens for hundreds of advertising entities to manually uncheck these boxes. It’s frustrating, it’s bad, it’s ill intentioned… I bet it’s not how it was supposed to work.

* **W3C & diversity:** This year I attended my first TPAC. And it was everything I was told it was by some colleagues: an unfriendly, unpassionate, and very white event. It’s sad to see such lack of representation in the groups of people that define what is coming to the Web.

* **The Edge debacle:** My favorite (besides Samsung Internet obviously) browser is going the Chromium way. And while it’s less work for me because it means that it will automatically support some of the technologies I’m using on my projects, I’m not a fan of the big G gaining more ground with an engine monopoly. I will miss you Edge, You’ll be in my heart.

* **Notifications and permissions:** This is the great power that was left unaccounted for, the great responsibility that is being handled almost as bad as GDPR implementations. Many websites ask for permission to use your location or to send you notifications out of the blue. Not only does this put another prompt between the user and the experience, it just doesn’t make sense most of the time.

So here’s to 2019, a new year, full of promises, that hopefully will resolve into a better, more diverse, less prompt-y and safer web for everyone. Cheers!

[-Diego González](undefined)

![](https://cdn-images-1.medium.com/max/3162/1*wooK_p5KmlyesOCT0C25yQ.png)

## Jo

Even though support for CSS Grid came to the majority of modern browsers by November ’17, it feels to me like 2018 has been the year that developers really got to grips with it, so Grid has to be one of my favourite things to look back on this year. Grid is the layout tool we’d all been waiting for. Developers and designers alike have really fallen in love with it and started creating some beautiful, responsive, editorial style projects. Combining Grid with CSS Shapes, transforms and animations we’ve seen some really beautiful and creative designs that also have semantic, accessible markup. There are some great examples and walkthroughs below:

[https://www.smashingmagazine.com/2018/04/art-directing-web-css-grid/](https://www.smashingmagazine.com/2018/04/art-directing-web-css-grid/)

[https://www.silocreativo.com/en/editorial-design-and-css-grid-inspiration-and-examples/](https://www.silocreativo.com/en/editorial-design-and-css-grid-inspiration-and-examples/)

[https://gridexamples.com/](https://gridexamples.com/)

[http://www.hi.agency/deck/](http://www.hi.agency/deck/)

[https://rachelandrew.co.uk/archives/2018/11/09/editorial-layouts-exclusions-and-css-grid/](https://rachelandrew.co.uk/archives/2018/11/09/editorial-layouts-exclusions-and-css-grid/)

Good news for Grid users too is that Level 2 of the Grid Spec is being worked on as we speak which will hopefully bring us the feature that many of us have been hoping for since we started working with grid; Subgrid. Subgrid allows us to share grid lines with child elements in the grid’s own children. As an example, you’ll be able to align elements inside the <li> for a <ul> that has display: grid; That way we can have nice semantic markup which keeps to our gridlines! Rachel Andrew has written an excellent introduction to what’s coming with Subgrid here [https://www.smashingmagazine.com/2018/07/css-grid-2/](https://www.smashingmagazine.com/2018/07/css-grid-2/)

There has also been a really great focus on performance tools and techniques this year with the uptake of Service Worker to make offline content and the adoption of PWAs by many big brands. We’re seeing more people considering download sizes and offering offline content, and really caring about their users’ experience. With the updates to Houdini and web animations we’re also able to make much smoother, more complicated web animations which don’t impact as much on performance and are as smooth as the CSS animations we’ve all come to love.

An unfortunate side effect of the increase in use of an ‘app like’ experience, combined with the fears of GDPR has caused developers to overuse notifications — bothering, interrupting and sometimes scaring their users into giving them data and access to APIs. This year Firefox released an update that allows users to hide permissions notifications altogether, removing what could have been a great tool to enhance a user’s experience. I’ve seen all kinds of bad practice and dark patterns employed by websites to make users accept tracking, and give powerful permissions like location and camera access right up front, before they’ve even had a chance to explore the site.

Going into 2019 I’d like for us all to be more considerate of our users with regards to permissions and really consider what makes an acceptable notification. We’ve got to stop asking for more permissions than we need, consider whether all of the tracking that we’re allowing is really necessary and remember the rules of a good push notification — make it timely, relevant and clear and precise.

[-Jo Franchetti](undefined)

That’s all from us here at Samsung Internet. What are your best and worst bits of the web in 2018? Feel free to use the comments section to tell us all about them and what you’d like to see happen in 2019. Have a happy holiday and we’ll see y’all in the new year!



By Daniel Appelquist on December 21, 2018.

[Canonical link](https://medium.com/samsung-internet-dev/ups-and-downs-of-the-web-2018-unfiltered-8e484fe828c)
