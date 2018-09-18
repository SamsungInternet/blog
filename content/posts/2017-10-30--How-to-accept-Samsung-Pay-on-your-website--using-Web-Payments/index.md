---
title: How to accept Samsung Pay on your website, using Web Payments
category: "Web APIs"
cover: img.jpg
author: Winston Chen
authorImg: https://miro.medium.com/fit/c/240/240/1*XJ8E-BWim09Gjsr7MckJSQ.jpeg
---

### How to accept Samsung Pay on your website, using Web Payments

![](https://cdn-images-1.medium.com/max/800/1*MyC8z36t5PznhZGWKTnDPA.png)

Samsung Internet and Samsung Pay make a great team!

Did you know that [Samsung Pay](http://www.samsung.com/samsung-pay/) is accepted at more retail locations than any other mobile payment service? **Now Samsung Pay can be used for mobile web payments too**, to make secure purchases across the web in eligible countries. No more clunky forms and input fields! All you have to do is pay using Samsung Pay and authenticate with your fingerprint, iris scan, or a PIN.

![](https://cdn-images-1.medium.com/max/800/1*iK5ZMheh2rpQN-jcAjYATQ.png)

Samsung Pay dialog, via Samsung Internet

The requirements are Samsung Pay (v2.8+) with Samsung Internet (v5.4+) or Chrome (m61+). Merchants can register their website on the [Samsung Pay Developers Portal](https://pay.samsung.com/developers) and incorporate the W3C standard [Payment Request API](https://www.w3.org/blog/wpwg/2017/09/14/payment-request-api-now-being-implemented-in-all-major-browsers-advances-on-the-recommendation-track/). You can refer to Peter’s [guide on how to set up the Payment Request API here](https://medium.com/samsung-internet-dev/how-to-take-payments-on-the-web-with-the-payment-request-api-a523f6fc7c1f).

![](https://cdn-images-1.medium.com/max/800/1*xFF__RlmHNISyOz-nmcfdA.png)

Payment Request dialog in Samsung Internet

Now let’s take a look at how to incorporate Samsung Pay as an online checkout option.

#### Payment Gateways

Samsung Pay supports two different ways your Payment Gateway (PG) can handle a payment token: either a _Gateway Token_ or a _Network Token_ method.

If you are using a third party service such as Stripe, then you will most likely use the Gateway Token mode. Samsung Pay will make a call to your third party PG on your behalf and return the Gateway Token.

![](https://cdn-images-1.medium.com/max/1000/1*ERNkxT11tdVU4fYRjTbu_g.png)

Gateway Token mode

If you want to handle the payment token yourself or use your own PG to handle the payment token, you can use the Network Token mode.

![](https://cdn-images-1.medium.com/max/1000/1*sbCACAnvJRKWEShk_UJn3g.png)

Network Token mode

For both methods, Samsung Pay encrypts all data between the Samsung Pay servers, merchant website and Payment Gateways. This ensures that transactions are secure. Samsung Pay’s tokenization also means that you do not need to exchange the raw credit card data. This protects your credit card from potential interception and replay attacks.

#### Setting up Samsung Pay for Web Payments

The Payment Request API is designed to allow different payment methods: credit cards, debit cards, prepaid cards and third party payment methods.

To activate Samsung Pay for your site, you can add Samsung Pay as one of the supported payment methods:

let supportedInstruments = \[  
{  
  supportedMethods: \[“[https://spay.samsung.com](https://spay.samsung.com)”\],  
  data: payData  
}  
\];

Then fill out the data field with the relevant Samsung Pay information:

*   `version`: (Required) specifies the data structure being used by the merchant; should always be set to 1 until further notice
*   `productId`: (Required) the Service ID obtained from the Samsung Pay partner portal
*   `allowedCardNetworks`: (Required) specifies the card brands/networks accepted by the merchant and supported by the PG
*   `orderNumber`: (Required) unique value for merchant use as an external reference ID
*   `merchantName`: (Required) the name of your website you registered on the Samsung Pay merchant partner portal. This name will also be displayed in the payment sheet
*   `APIKey`: the Samsung Pay merchant partner portal provides a unique API key for your website
*   `MerchantGatewayParameter`: (Conditional — required for gateway token mode) this is the userId value registered with your PG
*   `userId`: this is used for third-party payment services such as Stripe
*   `PaymentProtocol`: (Optional) defaults to “PROTOCOL_3DS” and this is the only protocol currently supported by Samsung Pay
*   `isRecurring`: (Optional) default is false. Set to true for transactions that are recurring subscriptions
*   `billingAddressRequired`: (Optional) Specifies if the billing address must be filled by the user
*   `Debug`: (Optional)

Here’s an example:

let payData = {  
  “version”: “1”,  
  “productId”: “”, // obtained from Samsung Pay merchant portal  
  “allowedCardNetworks”: \[“AMEX”, “mastercard”, “visa”\],  
  “orderNumber”: "1233123",  
  “merchantName”: “Shop Samsung (demo)”,  
  “Debug”: {  
    “APIKey”: “” // obtained from Samsung Pay merchant portal  
  }  
};

[See here](https://www.samsung.com/us/samsung-pay/compatible-cards/) for the list of compatible cards in Samsung Pay.

Once the payer has confirmed and authenticated via Samsung Pay, the PaymentResponse will be provided to the website. This will contain the kind of data typical to the response to a Payment Request, along with Samsung Pay payment information in the `details` section. This data can be used by the merchant, to process the payment via the PG and complete the transaction. The PaymentResponse will be comprised of:

*   `methodName`: ‘[https://spay.samsung.com](https://spay.samsung.com)’
*   `details`: contains payment credentials (Network Token mode or Gateway Token mode) and payment info, including billing address — see examples below
*   `shippingAddress`: shipping address of the user, if requested
*   `shippingOption`: ID of the selected shipping option, if requested
*   `payerEmail`: email address of the payer, if requested
*   `payerPhone`: telephone number of the payer, if requested
*   `payerName`: name of the payer, if requested

Here are example `details` objects:

/**  
 \* Samsung Pay PaymentResponse \`details\` examples  
 \* GATEWAY TOKEN MODE  
 */  
“details”: {  “paymentCredential”: {  
    “reference”: “tok_1ASCEoYF6yPzJ7F8SE6GRP0i”,  
    “status”: “AUTHORIZED”  
  },  
  paymentInfo {/* payment info, see below for example */}  
}

/**  
 \* NETWORK TOKEN MODE  
 */  
“details: {  
  “method”: “3DS”,  
  “paymentCredential”: {  
    “type”: “S”,  
    “version”: “100”,  
    “data”: “long\_encrypted\_payload_value”,  
  },  
  “paymentInfo”: {  
    “card_last4digits”: “1234”,  
    “cardBrand”: “mastercard”,  
    “orderNumber”: “1233123”,  
    “billingAddress”: {  
      “country”: “USA”,  
      “addressLine”: 1 Main St,  
      “region”: “CA”,  
      “city”: “Mountain View”,  
      “dependentLocality”: “”,  
      “postalCode”: “94043”,  
      “sortingCode”: “”,  
      “languageCode”: “en”,  
      “organization”: “”,  
      “recipient”: “”,  
      “phone”: “”  
    }  
  }  
}

_Editor’s update:_ The [Samsung Pay Developers portal](https://pay.samsung.com/developers) is now accepting registrations for W3C mobile web payments. Please see the [guide here for getting started](https://developer.samsung.com/internet/android/web-payments-guide)! — [Peter](https://medium.com/u/27616666fa21)

Tagged in [Web Payments](https://medium.com/tag/web-payments), [Samsung](https://medium.com/tag/samsung), [Web Development](https://medium.com/tag/web-development), [Samsung Pay](https://medium.com/tag/samsung-pay), [Webapi](https://medium.com/tag/webapi)

By [Winston Chen](https://medium.com/@winstonchen1337) on [October 30, 2017](https://medium.com/p/c2fcd4d26c02).

[Read this article on Medium](https://medium.com/@winstonchen1337/how-to-accept-samsung-pay-on-your-website-using-web-payments-c2fcd4d26c02)
