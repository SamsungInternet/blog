---
title: Reducing the friction of online payments
category: "Web APIs"
cover: img.jpg
author: Peter O'Shaughnessy
authorImg: https://miro.medium.com/fit/c/240/240/1*ky-noIIf_ZZIoGDsvfW3AA.jpeg
---

### Reducing the friction of online payments

#### Why it might be a good time to consider alternatives to advertising — and how the latest web standards can help

_This post is based on_ [_a talk I gave_](https://docs.google.com/presentation/d/1KnPNQ-3bKJwKu72h3OEqnvd9CZHU3HQeIHovXqojHWY/present#slide=id.p) _at_ [_Render Conf_](https://2018.render-conf.com/) _last week. The talk was recorded and should be available_ [_on the website_](https://2018.render-conf.com/) _soon._

* * *

The web is evolving with new features and ideas that could make online payments easier, both for us as developers, and more importantly for our customers. Let’s discuss how we make our money online — and why it’s important.

Revenue is the lifeblood of companies and non-profits, and different organisations have different ways of generating it — with end-users paying indirectly (through advertising or data mining), or directly (through e-commerce, donations and subscriptions).

#### Troubles with advertising

Right now, much of the web is driven by advertising. It’s often our first port of call isn’t it? If we put up a website and start to get a lot of traffic, we need some income to offset our costs. The quickest thing to do is just to add an ad script. But increasingly people are questioning whether this has led major parts of the web to be too balanced in favour of advertisers, as opposed to users.

There’s been a lot of damaging headlines about advertising and advertising-based platforms recently. I’m sure no one has missed [all](https://www.washingtonpost.com/business/technology/russian-operatives-used-facebook-ads-to-exploit-divisions-over-black-political-activism-and-muslims/2017/09/25/4a011242-a21b-11e7-ade1-76d061d56efa_story.html?utm_term=.fc1f0fd8dd39) [the](http://www.businessinsider.com/4-billion-to-5-billion-facebook-ad-revenue-at-risk-cambridge-analytica-2018-3?IR=T) [attention](http://www.bbc.co.uk/news/business-43532948) on whether ad-based networks have been used to spread disinformation and even try to sway voting behaviour. Some big brands have become wary of this and started [pulling ads](http://www.thedrum.com/news/2016/08/10/procter-gamble-pulling-back-targeted-facebook-ads), or [threatening to do so](https://www.marketingweek.com/2018/02/12/unilever-threatens-pull-ad-spend-platforms-breed-division/). We also have GDPR, the new EU privacy regulations, right around the corner, [making some businesses nervous](https://www.forbes.com/sites/adrianbridgwater/2017/04/25/worldwide-climate-of-fear-over-gdpr-data-compliance-claims-veritas-study/#552ae30e680c).

And web users have been seeing many reasons to be nervous of ads recently too — with reports of malicious ad scripts [running cryptocurrency mining in our browsers](https://news.sky.com/story/hackers-take-uk-government-websites-offline-and-infect-thousands-more-worldwide-11246618) and potentially [hijacking data out of our password managers](https://www.theverge.com/2017/12/30/16829804/browser-password-manager-adthink-princeton-research). There’s been an increasing recognition of ads’ potential to be invasive: not just of our screen space, but our privacy, [our data usage](https://www.theguardian.com/media/2016/mar/16/ad-blocking-advertising-half-of-data-used-articles), and even our battery life. Our own tests found that [you could get a 19% boost of your battery life](https://medium.com/samsung-internet-dev/browsing-for-better-battery-life-e9eb2ef88afc) if you block ads.

So it’s not surprising that ad blocker usage is continuing to rise, with ad blockers installed on over 600 million devices now, according to PageFair. Ad blocking [has been called](https://boingboing.net/2017/12/27/fuzz-buster-buster-buster.html) _“the largest consumer revolt in history”_.

![](https://cdn-images-1.medium.com/max/800/1*_vGT-jWZAQVLWqdOYRmo1A.png)

[Stats from PageFair](https://pagefair.com/blog/2017/adblockreport/), [slide by Peter](https://docs.google.com/presentation/d/1KnPNQ-3bKJwKu72h3OEqnvd9CZHU3HQeIHovXqojHWY/present#slide=id.g314761559a_0_23)

We certainly know that not all ads are bad. However, we do want to help protect our users from ads and trackers that are overly invasive — and we’re pro consumer choice. So the Samsung Internet mobile browser [introduced optional support for 3rd party ‘content blockers’ in 2016](https://www.theverge.com/2016/1/31/10880394/samsung-internet-android-ad-content-blocker-adblock-fast) and an [in-built, optional tracking blocker in 2017](https://medium.com/samsung-internet-dev/introducing-our-new-tracking-blocker-powered-by-disconnect-c00f118c1151). We’ve been seeing the arrival of browsers focused on privacy, with tracking blocking enabled by default, such as [Firefox Focus](https://www.mozilla.org/en-US/firefox/mobile/). And even Google, who are reliant on advertising for their core business model, have been moved to follow this trend by [introducing their ad filter](https://arstechnica.com/gadgets/2017/12/chromes-ad-blocker-goes-live-on-february-15th/), based on blocking ads from specific domains that are known to violate the [‘Better Ads’ standards](https://www.betterads.org/).

All in all, if it’s possible to not be quite so reliant on advertising, that could be very beneficial for many businesses.

#### Taking payments

But asking for money directly from our users has traditionally been hard too. From psychology experiments and case studies, we know about the [‘zero price effect’](http://web.mit.edu/ariely/www/MIT/Papers/zero.pdf): as soon as we introduce a cost, even a tiny one, we add friction and tend to lose out on many potential customers.

But we also know from native mobile apps that in-app purchases can be a massive revenue generator — one that now outweighs the revenue made from advertising and apps paid for up-front:

![](https://cdn-images-1.medium.com/max/800/1*_AFPrjq8ODmQja1LbPbLMA.png)

[Stats by Statista](https://www.statista.com/statistics/269025/worldwide-mobile-app-revenue-forecast/), [slide by Peter](https://docs.google.com/presentation/d/1KnPNQ-3bKJwKu72h3OEqnvd9CZHU3HQeIHovXqojHWY/present#slide=id.g3137704e2c_2_42)

One reason that they’ve become so popular is because it’s possible to let people in and try before they buy. We’re more willing to buy 10 alpaca coins after we’ve spent a while playing with cute alpacas.

![](https://cdn-images-1.medium.com/max/600/1*4OiPsCjLArWbuFITEWLgNQ.png)

Alpaca Coin purchase prompt from the ‘Alpaca World’ app

In-app payments can be problematic too though. There’s a burden of responsibility on us as developers to consider the ethics, and not try to tap into addictive behaviours, especially when it comes to children. But focusing on the user experience, what we can we learn from in-app payments’ rise is that reducing friction is so important. Google already have my payment details, so all I have to do to buy my alpaca coins is to tap ‘Buy’ and then confirm my identity — and I can do this easily using the biometric capabilities on modern smartphones. Nowadays we don’t just have fingerprint sensors, but also iris scanners, face ID and a [combination of the two](https://android.gadgethacks.com/how-to/use-intelligent-scan-unlock-your-galaxy-s9-faster-0183275/).

Now if we look back at the traditional check out process on the web, the difference is stark. I’m sure you’ve all come across purchase flows like this too — with pages’ worth of fields to fill out — for billing, contact, payment and shipping details. It’s likely to make us give up, especially when we’re out and about on our phones.

![](https://cdn-images-1.medium.com/max/800/1*F5F_QVPk4MT7fiPW4DyZjw.png)

A typical checkout form on the web

The numbers confirm how big a problem this is. Studies have shown [68% of shopping carts are abandoned on desktop, and a massive 84% on mobile](https://econsultancy.com/blog/64343-checkout-abandonment-mobile-ux-examples-to-help-boost-conversions/), where the process of typing out all that information on a touchscreen is that much harder. This [costs businesses billions in lost revenues](https://baymard.com/lists/cart-abandonment-rate) every year.

It’s time for payments on the Web to catch up — and to try to reduce this friction.

Thankfully that’s been the focus of the [W3C Web Payments group](https://www.w3.org/Payments/WG/), which started to explore this a few years ago…

#### Payment Request API

And the first result of that work is the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API), which provides an in-built payment UI for web browsers. Browser support is pretty good; it’s in Chrome, Edge, Samsung Internet and Brave. It’s also in Safari Tech Preview and Safari in the iOS 11.3 beta, although Safari only supports Apple Pay. And it’s in development for Firefox.

![](https://cdn-images-1.medium.com/max/800/1*fdLt94y8o9A-SlXkIg6kDA.png)

[Slide by Peter](https://docs.google.com/presentation/d/1KnPNQ-3bKJwKu72h3OEqnvd9CZHU3HQeIHovXqojHWY/present#slide=id.g314ace258e_0_41) showing Payment Request API browser support

The idea is that you allow the browser itself to provide the user interface for the checkout process. This can be very useful, especially for your new customers — because the browser is likely to have the users’ payment details remembered already.

![](https://cdn-images-1.medium.com/max/600/1*e7kKx581Zs3KI48zwEhSIA.png)

(Dummy) Payment Request information remembered by the browser

If they’ve used any other website that uses the Payment Request API — and accepted the browser’s request to save those details for next time — then the browser will already have information like their card, delivery and shipping details. So let it auto-populate it for you.

Payment Request is better than standard auto-fill though — because the browser provides the actual UI, it can be totally accurate at filling in the right details into the right input fields. Browsers can also offer capabilities such as integrating with the biometric sensors on the device, to let users confirm their identity securely.

Here’s how it looks in Samsung Internet on Android:

![](https://cdn-images-1.medium.com/max/800/1*rB6dyGYv6BEE-dvPBfXLNg.gif)

Payment Request demo in Samsung Internet browser

When we click ‘Purchase’, it brings up a native browser payment sheet with our card details pre-populated, so all we have to do is tap ‘Pay’, type in the 3 digit code from the back of our card, and then confirm with our fingerprint.

_Unlike my Render Conf talk, in this post, I’ll skip the code samples. However, if you would like to give the API a try, I hope_ [_my earlier article here_](https://www.smashingmagazine.com/2018/01/online-purchase-payment-request-api/#our-first-payment-request) _can help._

The API is not just for taking payment details. You can also request the user’s contact information, shipping address and delivery options — hopefully everything you need for your checkout process (otherwise you can have your own additional steps before/afterwards).

Here’s an example where we’re collecting some extra details. Again, they’re already known by the browser in this case, but the user can go in and edit any of them (and it’s the same UI if they’re inputting them for the first time). This time we’re specifying a delivery method. It’s also possible to update the delivery options dynamically, based on the address that the user enters or selects.

![](https://cdn-images-1.medium.com/max/800/1*SQvjkxvkdAjDGlUg_NWcHg.gif)

Payment Request demo with additional options

Furthermore, it’s possible to call `[canMakePayment](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/canMakePayment)` if you want to know if the user already has a valid payment method set up and ready to go. For example, you might decide that if a new customer already has their card stored in the browser, to go ahead and use the Payment Request API so they can check out as quickly as possible. Then perhaps ask if they’d like to set up an account on your site, after the checkout flow. Otherwise if they don’t already have a card set up, you could decide to funnel them through your existing checkout process instead.

Browsers have designed their Payment Request UIs with the mobile UX very much in mind, but it’s quite similar on desktop — with the checkout form usually displayed in a special panel or popup:

![](https://cdn-images-1.medium.com/max/1000/1*vG2_5StjC68HMZ9F_4m3KA.png)

Payment Requests in Chrome desktop (left) and Edge (right)

Most often, we won’t be processing payments ourselves, but using a third party payment gateway or e-commerce platform. In this case, we can use their platform / JavaScript library / iframe / redirect solution. They’ll probably be the ones to call the Payment Request API and process the response securely, saving us from having to touch the sensitive payment data ourselves.

If you already have a payment gateway, the best way to get started is to check with them how they recommend implementing Payment Requests. Some payment processors / e-commerce platforms that I know of which should support Payment Requests are Stripe, WePay, WooCommerce, Shopify and Braintree. (If you know of others, please let me know!).

We’re starting to hear about the effect that introducing Payment Request is having for businesses. At Chrome Dev Summit last autumn, [Google shared an example](https://youtu.be/1-g1rvkORQ8?t=6m25s) of a clothing company called JCrew who had 50% of their users then using the Payment Request flow, saving a massive 75% in their checkout times.

#### Third-party payment apps

But we can go even faster! Millions of people have their card details saved in mobile payment apps like Samsung Pay, Apple Pay and Google Pay. The Payment Request API is designed to support these kind of payment apps too. They typically work using tokenisation; rather than sending over the raw card data, they generate single-use tokens. This has additional security benefits — and the user doesn’t even have to type in their CVC code from the back of the card, saving an extra step.

Here’s how this looks for Samsung Pay, which we are [opening up for Payment Requests, starting in the US](https://medium.com/samsung-internet-dev/how-to-accept-samsung-pay-on-your-website-using-web-payments-c2fcd4d26c02):

Video showing Samsung Pay being used for a demo purchase on a Shopify site

The regular Payment Request sheet is displayed, but this time, Samsung Pay is available as a payment option. Now when the user taps ‘Pay’, it fires up a sheet from the Samsung Pay app. This has the user’s card details already, so they confirm by just tapping their finger on the fingerprint sensor, or using the iris scanner. It briefly takes them back to the PaymentRequest UI to show the processing completing — and that’s it. They didn’t have to type out anything. Checkout complete.

How do we point the browser to a particular native app, using web standards? The relevant spec is called the [Payment Method Manifest](https://w3c.github.io/payment-method-manifest/), and it’s currently supported in Chrome and our [recent Samsung Internet Beta](https://medium.com/samsung-internet-dev/new-samsung-internet-beta-introduces-protected-browsing-52f1ce7145f6).

But us web developers might be thinking, that’s great, but wouldn’t it be amazing if we could also make web apps that could handle payments too?

The good news is that this is being worked on too, as part of the [Payment Handler API](https://www.w3.org/TR/payment-handler/) — a newer spec, but one that is available behind experimental flags in Chrome, Brave and Samsung Internet Beta. The Payment Handler API provides the ability for you to listen out for a Payment Request in a service worker. Then you can open a window to your web app to act as the payment UI.

Here’s how it looks in Chrome (with the `#service-worker-payment-apps` flag switched on):

![](https://cdn-images-1.medium.com/max/800/1*KJYnIaRAaL9LkUA7PJa53w.gif)

[This Payment Request demo](https://rsolomakhin.github.io/pr/bob/) combined with [this Payment Handler demo](https://bobpay.xyz/)

#### Subscriptions

All in all, we’re making big strides with taking individual payments on the web. But finally, what about subscriptions? A lot of businesses are reliant on taking regular payments from their customers or supporters.

Thankfully there’s been some good news here too. In the last year or two, a lot of organisations have been seeing [an unexpected rise in paid subscriptions](https://medium.com/the-graph/rise-of-subscriptions-and-the-fall-of-advertising-d5e4d8800a49). The Guardian, for example, [now makes more money directly from readers than from advertising](https://www.theguardian.com/membership/2017/oct/26/together-we-are-safeguarding-the-guardians-independent-journalism?CMP=Share_iOSApp_Other), with [half a million regularly-paying supporters](http://www.pressgazette.co.uk/guardian-says-money-from-readers-has-overtaken-advertising-as-it-boasts-500000-paying-supporters-and-subscribers/). Wired recently introduced a paywall, [saying that they work “while advertising increasingly doesn’t”](https://www.recode.net/platform/amp/2018/2/1/16957324/wired-paywall-nick-thompson-magazine-advertising-subscription-peter-kafka-recode-media-podcast). And we’ve seen the rise of platforms like Patreon, designed for fans to pay creators. As an example, Patreon is used by the popular web developer resource [caniuse.com](https://caniuse.com/), allowing you to donate $1+ per month and in return, disable the ads.

Another one to keep an eye on is Brave’s payment system based on [Basic Attention Tokens (or “BAT”)](https://basicattentiontoken.org/). Brave blocks ads by default, but you can choose to reward websites with a monthly contribution, which Brave automatically divides up between the sites you visit, based on your attention time.

![](https://cdn-images-1.medium.com/max/800/1*tJbdsXaEEomWU-17pTg0tA.png)

Brave Payments beta

In the [next stage they’re planning](https://vimeo.com/209336437), it could work the other way around too: you can choose to see ads and get rewarded with a share of the tokens for doing so. BAT is a cryptocurrency and this has a barrier to entry; cryptocurrencies also have some well-reported problems which I’d better not get into here! But I think that it’s an intriguing concept.

Medium (where I’m writing this) previously had an ad-based revenue model, but they [saw that it incentivised click-bait](https://blog.medium.com/renewing-mediums-focus-98f374a960be), so last year they switched to a subscription model. Like Brave’s BAT system, they divide up the revenue between the publications that you visit automatically. However, it’s not just based on reading or attention time, but also the number of ‘claps’ you give to articles.

Now as a user, I don’t like the clap feature; it feels like a burden to me, with little reward or insight to help me calibrate my claps across articles! But, although I think that their UX is a bit flawed, I really like that they’re experimenting with this. I hope that the web as a whole can learn from it; I hope that we can experiment with new user experiences and new business models too.

Because if we can find a way to have more of our customers pay us directly and be less reliant on advertising, perhaps we can focus more on our customers. As [an article on Medium said](https://medium.com/the-graph/rise-of-subscriptions-and-the-fall-of-advertising-d5e4d8800a49):

> “A funny thing happens once you completely focus your business around making paying customers happy: your product gets better”.

By taking a fresh look at how we make money online — using some of the latest web features & experimenting with the UX — perhaps together we can help to make the web a better place.

* * *

[_Peter O’Shaughnessy_](https://peteroshaughnessy.com) _is a Developer Advocate at_ [_Samsung Internet_](https://samsunginter.net)_, Samsung’s mobile web browser. He is on Mastodon at_ [_peter@toot.cafe_](https://toot.cafe/@peter) _and on Twitter at_ [_@poshaughnessy_](https://twitter.com/poshaughnessy)_._

Tagged in [Payments](https://medium.com/tag/payments), [Ecommerce Web Development](https://medium.com/tag/ecommerce-web-development), [Web](https://medium.com/tag/web), [Ecommerce](https://medium.com/tag/ecommerce), [Web Development](https://medium.com/tag/web-development)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [March 28, 2018](https://medium.com/p/b400d65d583e).

[Canonical link](https://medium.com/@poshaughnessy/reducing-the-friction-of-online-payments-b400d65d583e)
