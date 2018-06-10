---
title: "Web Payments update: new payment apps on their way — and more!"
category: "web payments"
cover: 33893097-e5a70c34-df5a-11e7-8f5e-40e057626770.png
author: Peter O'Shaughnessy
---


# Web Payments update: new payment apps on their way — and more!

Making online payments easier is good for customers — and good for businesses and non-profits. We’re excited for the potential for Web Payments to help online experiences to be as frictionless as possible and reduce the web’s high shopping cart abandonment rate.

That’s why we have been working with other browsers in order to develop the open standards for the last 2 years, including the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API). Payment Requests have been [supported in Samsung Internet since v5](https://medium.com/samsung-internet-dev/announcing-samsung-internet-5-0-1ac2bfc14b78) and [we introduced support for Samsung Pay](https://medium.com/samsung-internet-dev/how-to-accept-samsung-pay-on-your-website-using-web-payments-c2fcd4d26c02) (starting in the US) at [SDC last year](https://www.sdc2017.com/).

![Using Samsung Pay to make an online purchase](https://cdn-images-1.medium.com/max/2000/1*iyaaU_gdfOyo_HXNjz8iCQ.png)*Using Samsung Pay to make an online purchase*

### Samsung Pay news

Since then, the first online stores supporting Samsung Pay have gone live in the US, including any merchant who supports [VISA checkout](https://usa.visa.com/pay-with-visa/visa-checkout.html), [Speedpass](https://www.speedpass.com/) and our own [Samsung Shop](https://www.samsung.com/us/).

Samsung Pay is the [most widely accepted mobile payment wallet](https://www.samsung.com/us/support/owners/app/samsung-pay). If you would like to accept it on your own website, you can register on our [Samsung Pay Developers Portal](https://pay.samsung.com/developers) and follow the [guide for getting started here](http://developer.samsung.com/internet/android/web-payments-guide).

We want to make it easier too. Later this year, merchants will be able to enable Samsung Pay directly via their [Braintree](https://www.braintreepayments.com/) or [Stripe](https://stripe.com) console.

![Braintree and Stripe logos](https://cdn-images-1.medium.com/max/2000/1*NJkzJ_ys3oEor1zzRjPuPw.png)*Braintree and Stripe logos*

We also have branded Samsung Pay buttons that you can include if you want an easy way for customers to check out with Samsung Pay only (i.e. a Payment Request with only Samsung Pay enabled as a payment method. You can check it is available using [canMakePayment](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/canMakePayment) first). Once you have registered on the portal, you can find the [buttons here](https://pay.samsung.com/developers/resource/brand).

![A selection of Samsung Pay buttons — from the [Developer Portal (requires login)](https://pay.samsung.com/developers/resource/brand)](https://cdn-images-1.medium.com/max/2000/1*1r-AWBCXtYGlYCR-WuA7xA.png)*A selection of Samsung Pay buttons — from the [Developer Portal (requires login)](https://pay.samsung.com/developers/resource/brand)*

To make Payment Requests even quicker, if you do not include any options for requesting additional details (such as shipping address) from the customer, then you can bypass the Payment Request sheet altogether and launch the Samsung Pay UI directly.

### 3rd party payment apps

As just announced at [Samsung Create](https://samsungcreate.com/), we’re pleased to share something else too… We are going to support 3rd party payment apps, as well as Samsung Pay. This will arrive in our upcoming Samsung Internet v7.4 in Q2-Q3 this year.

An example is [Tez, Google’s new digital payment app for India](https://tez.google.com/). Tez uses UPI, the Unified Payments Interface, which is a standard payment system in India. (In Samsung Internet version 6, we also introduced some other [handy UPI integrations, described here](https://medium.com/samsung-internet-dev/lets-connect-with-samsung-internet-v6-4-stable-1f197d43a812#b075)). Samsung Internet will introduce Tez support for our users in India.

![Tez by Google](https://cdn-images-1.medium.com/max/2000/1*TuyEYQL0FzuHazZtvNZRHw.png)*Tez by Google*

Third party payment apps will be enabled via the W3C standard called [Payment Method Manifest](https://w3c.github.io/payment-method-manifest/). If you have a payment app that you would like to be supported in Samsung Internet (one of the [top mobile web browsers worldwide](https://medium.com/samsung-internet-dev/think-you-know-the-top-web-browsers-458a0a070175)!), then please contact us at [browser@samsung.com](mailto:browser@samsung.com) or [@samsunginternet](https://twitter.com/samsunginternet) on Twitter.

With the Payment Request API [now supported in Chrome, Edge and Safari, as well as Samsung Internet](https://caniuse.com/#feat=payment-request), Web Payments are a testament to cross-browser collaboration and the work of the [W3C Working Group](https://www.w3.org/Payments/WG/). We’re pleased to be part of the community — and we welcome anyone interested to join us over in [the Web Payments Slack group](https://join.slack.com/t/webpayments/shared_invite/enQtMjQyNDI4Mjg4NjQ2LWIyYjAyMDE1MGM1YTNiYjM4NzI4OThhYzlhZjk2M2RmMDQyODk1ZWY4MzQ2ZGMxZTY0MmMxOWYzNzY3YzNlMDg)!
