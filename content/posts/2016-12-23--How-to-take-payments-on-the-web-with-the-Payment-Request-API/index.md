---
title: How to take payments on the web with the Payment Request API
category: "Progressive Web App"
cover: img.jpg
author: Peter O'Shaughnessy
---

### How to take payments on the web with the Payment Request API

#### A simple demo and how to get real

Paying for things online can be a pain, can’t it? You keep having to type out the same card details and contact details. It’s especially a pain on mobile — when was the last time you gave up filling out a form on your phone? (For me it was last night!)

It’s also a pain for us web developers, having to keep re-implementing complex checkout forms.

Thankfully, it’s about to get easier...

In [our latest Samsung Internet release](https://medium.com/samsung-internet-dev/announcing-samsung-internet-5-0-1ac2bfc14b78), we introduced support for the [_Payment Request API_](https://www.w3.org/TR/payment-request/). It provides an easy-to-use, native UI that you can use to collect your users’ payment — their card details, shipping options, even their address and contact details.

![](https://cdn-images-1.medium.com/max/800/1*9PMpVeIf7p2hbsVwCyG4Dw.png)

[A simple Payment Request demo](https://samsunginter.net/examples/payment-request-demo-simple/)

Our users can now have a more consistent, faster checkout experience. They can save their payment details securely in their browser, ready to use again on any supporting web app.

And as developers, we may no longer need to spend such time and money developing and maintaining a whole checkout process ourselves.

#### How does it work?

The core of the API is the new _PaymentRequest_ method. First we should check if it's supported in this browser:

if (window.PaymentRequest) {  
  // We're good to go...  
} else {  
  // Alas! Use your legacy checkout form...  
}

Then when the user taps your pay/donate button…

// Basic example

var paymentMethods = \[  
  // We'll accept regular credit and debit cards  
  {supportedMethods: \['basic-card'\]}  
\];      

var details = {  
  total: {  
    label: 'Something that costs money',   
    amount: {currency: 'GBP', value: '9.99'}  
  }  
};

// Show a native Payment Request UI and handle the result  
new PaymentRequest(paymentMethods, details)  
  .show()  
  .then(function(uiResult) {  
    processPayment(uiResult);  
  })  
  .catch(function(error) {  
    handlePaymentError(error);  
  });

_NB. This code sample has been updated since the original post, to use the newer_ `_basic-card_` _format (introduced in Samsung Internet v5.4)._ [_Further details here_](https://groups.google.com/a/chromium.org/d/msg/blink-dev/IYRjdUKxCoM/8B-jp4g9AgAJ)_. For further demos, see_ [https://github.com/SamsungInternet/examples](https://github.com/SamsungInternet/examples).

For now, we are just going to simulate the actual payment processing with a 2 second delay. With just a quick sprinkling of HTML and CSS, we now have a demo that looks like this:

![](https://cdn-images-1.medium.com/max/800/1*akAY0KgE2sSfVS6sE6CrNw.gif)

You can [try this demo out for yourself here](https://samsunginter.net/examples/payment-request-demo-simple/). There are [more examples and source code here](https://github.com/SamsungInternet/examples).

We can also request customers’ contact details configure things like shipping options and more. If you’re looking for further examples, the Chrome team have [some here](https://googlechrome.github.io/samples/paymentrequest/). There’s also a [nice guide by Ruadhán O’Donoghue here](https://mobiforge.com/design-development/mobile-payments-with-the-payment-request-api).

This should be enough to get started developing your own payment UI — oh except, please remember that (for good reason) the API is only available in [secure contexts](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts)!

#### Getting real

_“A demo is all well and good”_, you may be thinking, _“but how do we take_ **_real_** _payments?”_ Good question…

Most of us won’t be working at organisations where we handle payments ourselves. Processing real payment data is not something to undertake lightly; there are a lot of checks and balances to put in place to ensure the data remains secure. Card providers have a required standard for this called [PCI](https://en.wikipedia.org/wiki/Payment_Card_Industry_Data_Security_Standard).

Thankfully, many companies provide this as a service. They’re called [_payment gateways_](https://en.wikipedia.org/wiki/Payment_gateway) because they’re the interface between those of us doing the selling (the “merchant”) and the banks.

Payment gateways are starting to introduce easier facilitation for Payment Requests. Some may provide iframe or redirect solutions, so you do not need to handle the sensitive data yourself. If you need more control, some may provide custom checkout services where you make the _PaymentRequest_ call and are responsible for passing on the data to them securely. The payment gateway should be able to give you more specific information – and if you’re unsure, please seek further advice!

#### Pay today

You can start using the Payment Request API today! It’s supported [in Samsung Internet](https://samsunginter.net/docs/web-payments), [Chrome for Android](https://developers.google.com/web/updates/2016/07/payment-request), [Edge](https://blogs.windows.com/msedgedev/2016/12/15/payment-request-api-edge/#fF73ya8DCjvHDzDU.97) and [Opera](https://www.chromestatus.com/feature/5639348045217792). _Update:_ It’s also available in [Chrome on the desktop](https://blog.chromium.org/2017/08/chrome-61-beta-javascript-modules.html) and [Safari Tech Preview](https://webkit.org/blog/7877/release-notes-for-safari-technology-preview-38/). For real applications (as per usual), just be sure to [progressively enhance](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/) and ensure you have another method in place for browsers without support yet.

Payment Requests are part of a wider effort to improve payments on the web. Did you know [66%](https://developers.google.com/web/updates/2016/07/payment-request) of mobile purchases are made through the web, rather than native apps? Yet we know there’s more work to do. There’s more to come!

Let us know what you think. _Ha-pay holidays!_

Tagged in [Payments](https://medium.com/tag/payments), [Ecommerce](https://medium.com/tag/ecommerce), [Mobile](https://medium.com/tag/mobile), [Samsung](https://medium.com/tag/samsung), [Web Development](https://medium.com/tag/web-development)

By [Peter O'Shaughnessy](https://medium.com/@poshaughnessy) on [December 23, 2016](https://medium.com/p/a523f6fc7c1f).

[Canonical link](https://medium.com/@poshaughnessy/how-to-take-payments-on-the-web-with-the-payment-request-api-a523f6fc7c1f)
