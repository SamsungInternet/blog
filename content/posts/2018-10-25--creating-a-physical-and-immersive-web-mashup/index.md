---
cover: img.jpg
title: "Creating a physical and immersive web mashup"
description: "It’s an exciting time for interacting with physical devices via the web — and also for the Immersive Web. The former just received a boost last week with Web Bluetooth support arriving in the stable Chrome browser on Windows. For the latter, last month saw the announcement of the formation of the W3C Immersive Web Working Group, to continue the work bringing high-performance Virtual Reality and Augmented Reality to the open Web."
category: Virtual Reality
img: https://cdn-images-1.medium.com/max/1200/1*kk8MZ4S3L7arH3qGs6z8aA.png
author: Peter O'Shaughnessy
authorImg: https://cdn-images-1.medium.com/fit/c/120/120/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
tags: [Virtual Reality, Internet of Things, Augmented Reality, Web Development, Bluetooth]
---

# Creating a physical and immersive web mashup

Why WebXR and Web Bluetooth make a great combo

![WebVR + Web Bluetooth demo running in a desktop web browser](https://cdn-images-1.medium.com/max/5116/1*kk8MZ4S3L7arH3qGs6z8aA.png)*WebVR + Web Bluetooth demo running in a desktop web browser*

It’s an exciting time for interacting with physical devices via the web — and also for the *Immersive Web*. The former just received a boost last week with [Web Bluetooth support arriving](https://developers.google.com/web/updates/2018/10/nic70) in the stable Chrome browser on Windows. For the latter, last month saw the [announcement](https://www.w3.org/blog/2018/09/announcing-the-immersive-web-working-group/) of the formation of the W3C [Immersive Web Working Group](https://www.w3.org/immersive-web/), to continue the work bringing high-performance Virtual Reality and Augmented Reality to the open Web.

There are also exciting opportunities for combining physical devices and the Immersive Web together. Not only are they both important examples of the larger trend we’re seeing around our physical and digital worlds merging, but they complement each other particularly well. This was the topic that [Diego González](undefined) and I spoke about at the recent [GDG DevFest](https://devfest.gdg.org.ua/) in Ukraine and [Heapcon](https://heapcon.io/) in Serbia.

![Diego and Peter’s “Bridging Realities” talk at Heapcon 2018 — [photo by Mitar Mitrović](https://www.facebook.com/media/set/?set=ms.c.eJxll1muWDEIQ3dUMZlh~%3Bxur7qtU6Z38WgQCwYa4ubStug3rWv3x~%3B0huPMj6b~_TKgJQnTlUfbZqxahM2vg5ENkTi4EcaIhU41fYbkdkU8zreeUWb7kKsTu~%3BfniMWsaJYn2tmujc4tSd4PhGJFk4dYsnSeMM7IG7VDmSBRDhjdRuQqoNnt0H0OtZHmUQW1XCvhudN2rA~_dWH7IOyoeFgw9vTPNW2CNlG0uWBnRj9~_kkj0U8Nm7hHG3AM1DMGzrMFTRfayztNkCjszsoqeJ3jDPXiOMdiU4c5ezjeVszNv6UeJHvOMJAK~_y2bIi76iZ97QRqy8HjZpgnk1M6WS~%3BOTJOi~%3B9jJGVVrzPGD1P0rMb1cYfHbOkkqyIzD38Gqpo~_sOvpYbPo4czRDJERFTjLM6vOOqPMJs~_RUJHxQTr3Gnk16LOsdS6aGvaUCGjxVPfIIQNZpNic~_mZsyB6RZujAlQ4TlXxlC~%3B6x63JwVHQM3kaNaxhOHOniiramemJrzNi7npecJqIinU2UUXtyJ0yZpF3ZErxPu5UyHlsLBhLHXx3bgXxTMYM9moNOKj0BzFHJ1SSO3lOz~_SgaqoeP6h8Hjuzhm9aQ4UssyPSSwST~_lvhUPk6Y6YS7~%3Bywu4JvUU~_vVpvx1OOnqTbV7NVqsqm6UbFc6liV8z6l5Qses7C38sN3T0avNShJjvHO~%3BmThA37VJm2WHKxazKZ65nKJ22k6p3BOsH92niyaue~_zWd3jeeuIvNzhjp3Obacs6SePanPs5~%3BSaJ9PHZp8sDkiGMXo8eRk3zwz~_AvKZuWncLjKpfmncx9KfmXvLvDbZmcmNMY91znS8oOLpseO8qHXEUj6Isar1RP8EgR1eT3S~_uyyodb3JU2TBt~_5wOnDLraL6~%3BXw5UFUyTsbKq4PRa5C7kpuDwo~%3BR~_b~%3B4vmS0YY99lANSZNNXMti4qIf3ZNHTzHToWXqyaPSq9ERP~%3BmHls7wzt0oV2f19XXDq0R~%3B52~%3BPUXjkV8mdYIosn~_tcuZBM7KpNVVeKVNdz09Gy5~_r7Z8MO~%3Bp~%3Bhbl~%3BjLlo7Kr33e66h~_Gv7jNMmK3b~%3B~%3B8l~%3BQjPDp.bps.a.10155865491116485&type=1&__tn__=HH-R)](https://cdn-images-1.medium.com/max/4000/1*rdt0XlynRgrW8AznADJcTA.jpeg)*Diego and Peter’s “Bridging Realities” talk at Heapcon 2018 — [photo by Mitar Mitrović](https://www.facebook.com/media/set/?set=ms.c.eJxll1muWDEIQ3dUMZlh~%3Bxur7qtU6Z38WgQCwYa4ubStug3rWv3x~%3B0huPMj6b~_TKgJQnTlUfbZqxahM2vg5ENkTi4EcaIhU41fYbkdkU8zreeUWb7kKsTu~%3BfniMWsaJYn2tmujc4tSd4PhGJFk4dYsnSeMM7IG7VDmSBRDhjdRuQqoNnt0H0OtZHmUQW1XCvhudN2rA~_dWH7IOyoeFgw9vTPNW2CNlG0uWBnRj9~_kkj0U8Nm7hHG3AM1DMGzrMFTRfayztNkCjszsoqeJ3jDPXiOMdiU4c5ezjeVszNv6UeJHvOMJAK~_y2bIi76iZ97QRqy8HjZpgnk1M6WS~%3BOTJOi~%3B9jJGVVrzPGD1P0rMb1cYfHbOkkqyIzD38Gqpo~_sOvpYbPo4czRDJERFTjLM6vOOqPMJs~_RUJHxQTr3Gnk16LOsdS6aGvaUCGjxVPfIIQNZpNic~_mZsyB6RZujAlQ4TlXxlC~%3B6x63JwVHQM3kaNaxhOHOniiramemJrzNi7npecJqIinU2UUXtyJ0yZpF3ZErxPu5UyHlsLBhLHXx3bgXxTMYM9moNOKj0BzFHJ1SSO3lOz~_SgaqoeP6h8Hjuzhm9aQ4UssyPSSwST~_lvhUPk6Y6YS7~%3Bywu4JvUU~_vVpvx1OOnqTbV7NVqsqm6UbFc6liV8z6l5Qses7C38sN3T0avNShJjvHO~%3BmThA37VJm2WHKxazKZ65nKJ22k6p3BOsH92niyaue~_zWd3jeeuIvNzhjp3Obacs6SePanPs5~%3BSaJ9PHZp8sDkiGMXo8eRk3zwz~_AvKZuWncLjKpfmncx9KfmXvLvDbZmcmNMY91znS8oOLpseO8qHXEUj6Isar1RP8EgR1eT3S~_uyyodb3JU2TBt~_5wOnDLraL6~%3BXw5UFUyTsbKq4PRa5C7kpuDwo~%3BR~_b~%3B4vmS0YY99lANSZNNXMti4qIf3ZNHTzHToWXqyaPSq9ERP~%3BmHls7wzt0oV2f19XXDq0R~%3B52~%3BPUXjkV8mdYIosn~_tcuZBM7KpNVVeKVNdz09Gy5~_r7Z8MO~%3Bp~%3Bhbl~%3BjLlo7Kr33e66h~_Gv7jNMmK3b~%3B~%3B8l~%3BQjPDp.bps.a.10155865491116485&type=1&__tn__=HH-R)*

### Why combine IoT and XR?

The proliferation of connected devices and sensors is leading to a huge rise in the amount of data we’re collecting about the world around us. As it grows, understanding this data will become ever harder. While it’s possible to leave much of the data-crunching to machines, there are [inherent dangers in trusting systems which are inscrutable to humans](https://youtu.be/ajGX7odA87k). It will be much better if we can find enhanced ways to visualise and understand the data ourselves. This is where VR and AR can step in. As “the grandfather of VR” Jaron Lanier has said:
> # “VR is amazing at conveying complexity with lucidity.”

And as neuroscientist Beau Cronin [has described](https://medium.com/@beaucronin/the-oculus-rift-is-an-applied-neuroscience-powerhouse-512e3213f055), there’s nothing more natural for us than a 4-Dimensional world, since we’ve all grown accustomed to inhabiting one since birth. By representing data as virtual worlds, we can unlock our full potential as data detectives, enabling us to better spot anomalies and trends. Augmented and Mixed Reality also have huge potential since they can enhance our real world with key data and controls, in the right place, at the right time.

[Early examples include](https://peteroshaughnessy.com/posts/how-immersive-computing-can-help-solve-our-big-data-explosion/) experiencing investment portfolios as digital cities and stock prices as virtual rollercoasters. Here at Samsung we have also experimented with an [interactive dress and accompanying Virtual Reality experience visualising noise pollution](https://medium.com/samsung-internet-dev/look-forward-fashion-tech-b47a946ebcd1) and a [VR application for visualising and controlling a sensor-laden lego bridge](https://www.artik.io/blog/2017/08/samsung-artik-vmworld-2017/).

### Why the web?

Our regular readers will be familiar with our arguments for web technologies, but for those who might not have considered the web as a potential platform for physical and immersive technologies…

* There are a huge number of web developers out there. The latest Stack Overflow Developer Survey [found that](https://insights.stackoverflow.com/survey/2018/#technology) the top three most popular technologies are JavaScript, HTML and CSS. Empowering web developers to quickly dive into IoT and XR using familiar technologies can help to unlock a vast potential for innovation.

* The Web lets us dive right in, with as little friction as possible. Web applications are only a tap away — all we need is a URL. Using Progressive Enhancement we can cater for all types of devices, even accommodating the literal new dimension of XR.

### Our mashup

For our demonstration, [Diego](undefined) and I created a web-based VR experience which uses real-time sensor data from a [Nordic Thingy](https://www.nordicsemi.com/eng/Products/Nordic-Thingy-52), a small multi-sensor device accessible via Bluetooth Low Energy. In other words, we created a virtual world which adapts in real-time to our physical world.

Here’s how it looks (presented in a laptop browser, but the scene could be viewed in VR too):

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/7_ez5X-_-lM" frameborder="0" allowfullscreen></iframe></center>

The demo includes:

* Dynamic rain linked to the real-world humidity percentage that we obtain from the Thingy 🌧️

* Background lighting which adapts to the values we receive from the light/colour sensor 🔦

* A parrot which nods along according to the Thingy’s orientation data 🐦

* And finally — as a fun bonus — pressing the button on the Thingy makes the parrot sqwawk! 🗯️

The demo is [a website](https://diekus.com/webxr-bt/aframe/), built entirely around open web technologies and emerging standards. Using [A-Frame](https://aframe.io/) allowed us to enable Virtual Reality by default, using [WebVR](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API). Using [Thingy.js](https://github.com/NordicPlayground/Nordic-Thingy52-Thingyjs) allowed us to connect to the Nordic device over [Web Bluetooth](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API) and receive its data.

Although we admit this is probably not the most practical example(!) we hope our demo might give you some ideas for combining physical devices and the Immersive Web together. We can start to think of new ways to visualise and enhance our real-world data — ways that are natural, absorbing and even fun!

[*Here are our slides from GDG DevFest](https://www.slideshare.net/secret/JogKDKMRbFFQOM) and [here are our slides from Heapcon](https://www.slideshare.net/secret/cIybseMqmYvFzO). The [source code for the demo is here](https://github.com/diekus/webxr-bt). The talks were recorded and we’ll share the video links here when they are available. If you have any feedback or ideas or examples you’d like to share with us, please leave a comment! Thank you to [Lars Knudsen](undefined) and [Kenneth Christiansen](undefined) for their help with the Thingy :)*



By Peter O'Shaughnessy on October 25, 2018.

[Canonical link](https://medium.com/samsung-internet-dev/creating-a-physical-and-immersive-web-mashup-b5418f14b982)
