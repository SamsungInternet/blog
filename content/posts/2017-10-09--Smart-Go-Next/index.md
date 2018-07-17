---
title: Smart Go Next
category: "Browser Features"
cover: img.jpg
author: AJITH KUMAR V
---

### **Smart Go Next**

#### Introducing a neat new browser feature that makes filling out forms easier

**Entering data** is a frequent user action during web browsing (e.g. for logging in, registering, booking etc.). The primary way of entering data inside the browser is through forms. Form-filling is an important activity, but it is comparatively difficult on mobile devices.

#### **Typical Form-Filling Scenario**

![](https://cdn-images-1.medium.com/max/800/1*wJVp9Fs-aQij9Zukie1Vqg.png)

An incomplete form (the password still needs to be confirmed)

Traditionally, the virtual keyboard on mobile has a default “Go” key at the bottom-right, to let the user submit the form. On the above screen, we can see that we didn’t yet complete the form. At this point, the only option for the user to conclude the editing of the _current_ field is to either touch on the _next_ field manually, or press the “Go” key. However, **the** **“Go” key** **tends to submit the form and we didn’t complete the form** **yet**.

While the user is in the middle of filling out the form, if upcoming form fields  are **below the virtual keyboard**, then to reach those fields, the user has to either **close the virtual keyboard** or **scroll the page** and bring the required field on the screen to continue filling out the form. At the same time, if the user presses the “Go” key it can simply issue a network request or execute local Javascript and throw an error that the form is incomplete, perhaps pointing to the error field. This scenario would also clear any already-entered passwords in the form. This is a waste of time and an annoyance for the user, as well as potentially introducing an additional network request.

When there are multiple elements inside a form, it’s better to navigate through all the elements before concluding the entire form, because there may be additional fields that we need to input. If we know that there are more fields to be filled in before submitting the form to the server, the **“Go” key is irrelevant** at this stage. It is a blind attempt to submit the form, without analysing the form contents.

If instead we can control the “Go” or “Enter” button during form-filling, we can make a better experience for the user. Rather than showing “Go”, if we can show **“Next”** when there are still-unfilled input fields, then the user can more easily navigate to those subsequent fields.

#### **Motivation**

[Samsung Internet](http://developer.samsung.com/internet) already has a **Smart Form Navigation** feature, enhancing the virtual keyboard by including **“Previous” and “Next”** buttons on top. This is to **ease the navigation** between form control elements (input, textarea and select elements).

![](https://cdn-images-1.medium.com/max/800/1*uNLSkC4tFXQh9-0gVY5GaQ.png)

The ‘Smart Form Navigation’ previous and next buttons

The above screen shows how Smart Form Navigation is helpful to the user. There are form fields before and after the currently-focused form field. “Next” will take the user to the next focusable, editable field — and “Prev” to the previous — without having to manually focus on the target field.

Chromium  wanted to stabilise virtual keyboard attributes and posted a feature request [here on the Chromium bug tracker](https://bugs.chromium.org/p/chromium/issues/detail?id=410785). Since Samsung also works on a similar area, we had shown interest to extend our contribution to this feature in Chromium.

Since Samsung Internet  is now  available in the Play Store to a majority of non-Samsung devices (including HTC, Nexus, Pixel, LG, Motorola, Xiaomi, Sony etc), it’s hard to support Smart Form Navigation, because those device-specific virtual keyboards won’t support “Next” and “Previous” buttons on top of the keyboard.

With **Smart Go Next**, we can now bring smart form navigation to any standard Android-compatible virtual keyboard with more or less the same accuracy. Even on a Samsung device, if the user wanted to use a different virtual keyboard other than the default Samsung one, with Smart Go Next  they can get a similar experience.

#### **A typical form-filling scenario with _Smart Go Next_**

![](https://cdn-images-1.medium.com/max/800/1*yig_e7h_vHPe2Oi37MI_Pg.png)

Typical form-filling scenario with Smart Go Next

With Smart Go Next, we help the user to navigate to the next input fields. Basically we replace the “Go”/”Enter” key with the “Next” key wherever possible. Only when the user reaches the last field of the form, will we show the “Go” key. For example, on the screen on the right, the user has completed the form and there are no further elements to be addressed. Hence the “Go” key is very much suitable at this point.

In a nut shell, this feature targets form control elements inside any web page, including login forms, registration forms, payment forms etc. This feature is enabled by default in Chromium by now on **all Android devices** along with **all keyboards** which comply with Android virtual keyboard standards.

#### **Future Scope**

Due to Android’s virtual keyboard limitation of not allowing there to be both “Next” and “Go”/“Enter” keys displayed together, we can only show one of these keys at a time.

Currently this feature is **restricted to editable form control** elements (i.e. input text, textarea, content editable). So other focusable form control elements (e.g. select element, button etc.) will be ignored.

#### **Availability**

Smart Go Next will be **shipped in Chrome 62** **stable** channel after the current trial of Chrome 62 beta channel.

**Samsung Internet based on Chromium 62** will get this feature too. This means that non-Samsung devices will be able to experience Samsung Internet’s Smart Form Navigation using **Smart Go Next**.

Tagged in [Chromium](https://medium.com/tag/chromium), [Samsung](https://medium.com/tag/samsung), [Samsung Internet](https://medium.com/tag/samsung-internet), [UX](https://medium.com/tag/ux), [Mobile](https://medium.com/tag/mobile)

By [AJITH KUMAR V](https://medium.com/@ajith211) on [October 9, 2017](https://medium.com/p/3a09077da7fb).

[Canonical link](https://medium.com/@ajith211/smart-go-next-3a09077da7fb)
