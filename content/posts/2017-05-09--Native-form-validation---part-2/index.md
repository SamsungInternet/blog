---
title: Native form validation — part 2
category: "Browser Features"
cover: img.jpg
author: Peter-Paul Koch
authorImg: https://miro.medium.com/fit/c/240/240/1*4VXDobnR6b7kKNiuySyWTQ.jpeg
---

### Native form validation — part 2

In this second part of a three-part article we will continue our study of native form validation in browsers. [Part 1 discussed general UI considerations and CSS](https://medium.com/samsung-internet-dev/native-form-validation-part-1-bf8e35099f1d). Part 3 will discuss the native error messages and offer general recommendations to come to actually usable native form validation.

![](https://cdn-images-1.medium.com/max/800/1*2P0Sz5nKMeBvJ-lboKpV3w.jpeg)

[By Ricky Romero](https://www.flickr.com/photos/rickyromero/1357938629/)

In this part we’re going to take a look at a few HTML features and the JavaScript API.

As usual in my articles, I’m quite vague about exact browser compatibility patterns because I already collated that information in the [inevitable compatibility table](http://quirksmode.org/dom/forms/index.html). You can find the gory details there.

### HTML attributes

HTML supports many potentially useful input types and attributes. I [did the basic research](https://quirksmode.org/html5/inputs/) a while ago, and while some details will have changed, the overall picture is still that most browsers support most features decently.

Here I want to draw attention to two features missing from my old overview: how the `title` attribute affects error messages, and the `novalidate` attribute.

#### title

It’s simple, really. The content of the `title` attribute of a field is added to the field’s error message _only if the field has a_ `_pattern_`. This is useful for giving clues about the exact nature of the pattern; something that is impossible for the browser to determine.

It would also be useful to use the `title` for giving clues about the exact nature of fields that do not have a `pattern`, but, as we see throughout this article series, we can’t have nice things because that would make things nice for us. And we’re born to suffer. So `title` only works on `pattern`.

#### novalidate

The `novalidate` attribute of forms works in most browsers. When present, the attribute tells the browser not to attempt any native validation. In addition to suppressing the native error messages it also suppresses all the rest of validation, so the form is submitted unless an old-fashioned form validation script that you wrote yourself prevents it.

If you want to retain part of native validation, but not the error messages, you have to use the invalid event, which will be explained in part 3.

### The Constraint Validation API

Let’s turn to the JavaScript side of things. We will find an entirely different set of problems than in CSS that preclude useful form validation for entirely different reasons.

The [Constraint Validation API](https://www.w3.org/TR/html5/forms.html#constraints) is part of the HTML5 specification. (Gem: a form field value can be “suffering from being missing.”) Browsers support this API fairly well, with only one method lacking in older browsers. Unfortunately this is exactly the best-designed and most useful method.

Also, the creators of this spec did not pay any attention to what the CSS people were doing with `:invalid`. Here’s an example:

As we saw in part 1, `fieldset:invalid` works in most browsers and kicks in when at least one form field in the fieldset is invalid. The API allows us to use the `checkValidity()` method on fieldsets as well, but it returns `true`, even when the fieldset contains an invalid form field. (To make matters more complicated, several Chromia, but not the latest Google Chrome itself, implement `checkValidity()` on fieldsets correctly.)

Right hand, meet left hand. The two of you should connect one of these days.

#### validity

But anyway. Let’s start with an API feature that actually works. Every form field has a `validity` property that contains a bunch of information about its invalidity. All browsers support nearly all properties, even though only a few are actually useful.

All properties come in the form `formField.validity.propertyName`.

*   `badInput`: value of a `number` field is not a number
*   `patternMismatch`: value does not conform to the `pattern`
*   `rangeOverflow`: value of a `number` field is higher than the `max` attribute
*   `rangeUnderflow`: value of a `number` field is lower than the `min` attribute
*   `stepMismatch`: value of a `number` field does not conform to the `step`attribute
*   `tooLong`: the user has edited a too-long value in a field with `maxlength`
*   `tooShort`: the user has edited a too-short value in a field with `minlength`
*   `typeMismatch`: value of a `email` or `URL` field is not an email address or URL
*   `valid`: value is valid
*   `valueMissing`: `required` field without a value

The properties that deal with `number` fields are useful: they allow us to figure out exactly what kind of error the user made, and to adjust our error messages accordingly.

Unfortunately the other properties are rather pointless. If there’s an error in an `email`, `url`, `required`, or `pattern` field it’s immediately clear what the problem is. The extra properties of `validity` are not necessary.

It would be useful if we’d get more specific data, such as “user hasn’t entered an @ in this email field.” Native error messages in fact do so in some browsers, but the `validity` properties don’t.

At least these properties do not actively harm native form validation UX. You will start to appreciate such slight blessings before we’re done with the API.

#### The tooLong saga

And then there’s the `tooLong` saga. This part of my research took way too long because the browsers saw fit to implement `maxlength` and `minlength` in a way that’s entirely different from all other constraints. I see no reason not to share my pain with you.

Take the following form field, and note it has a default value. If we validate it straight away we get the `validity.typeMismatch` error we would expect:

<input type="URL" value="nonsense">

I did all my tests with this sort of wrong default values because it’s way faster than manually typing in values in five desktop browsers and twenty-five mobile browsers. That works absolutely fine, except with `maxlength` and `minlength`. Lo and behold, the following field is valid:

<input maxlength="5" value="nonsense">

No problem here, no errors to be thrown, and no, the value is certainly not too long, thanks so much for asking. Incidentally, this field also gets `:valid` styles.

[Try it here](https://quirksmode.org/dom/forms/examples_maxlength.html) for yourself. It turns out that `maxlength` and `minlength` only elicit a response from CSS and the API if the user has actually changed the value of the form field. Although this is not a bad idea in itself, it is vastly different from all the other constraints, and that’s what makes it wrong. Obviously, this exception was necessary in order to make our lives as web developers more miserable.

#### Methods

Before we study the three methods the Constraint Validation API offers, it’s a good idea to quickly review what we would actually like to do:

1.  Show a native error message.
2.  Rewrite a native error message with site-specific copy.
3.  Find out if a field is valid or invalid, and, if invalid, what the problem is.

The `validity` properties already allow us to do #3. Nonetheless we are offered an extra method: `checkValidity()`. Personally I don’t see the need for it, especially since it does not tell us what is wrong with the field; it just returns `true` or `false` without further comment.

`reportValidity()` also checks a field’s validity, and if it is invalid the native error message is shown. This is a genuinely useful method. Unfortunately it’s also the worst-supported of the three: Edge and quite a few mobile browsers do not support it.

Finally how do we set the text of a native error message? That is the domain of `setCustomValidity('string')`. If you use it on a form field the error message becomes the content of the string. If you use an empty string as an argument it resets the error message to its default value. And if you use no argument? It gives an error. Obviously. Allowing an undefined argument to default to the empty string behaviour would be good design, and we’re all agreed this API should be as crappy as possible.

Setting the error message text is not the only thing this method does. If you use a string as an argument it also sets the form field’s validity to `false`; if you use the empty string the validity becomes `true`.

The problem here is that these two functionalities, while very useful in themselves, are combined in the same method. Setting the validity of a form field is a good idea; for instance, if it has a constraint other than the standard ones built into the browser. Being able to produce a custom error message is also a good idea. But these two quite different tasks should be the jobs of two different methods.

The current method forces us to jump through complicated hoops if we want to set the error message of a standard constraint, since we can only do so if the field in fact turns out to be invalid. It would become something like this:

var field = \[the field we're checking\];  
if (!field.validity.valid) {  
	field.setCustomValidity('custom error message');  
} else {  
	field.setCustomValidity('');  
}

This is only a few lines of code. The problem is that you should run this code for each individual field every time the form is being readied for validation. That is not impossible, but it’s kludgy and annoying. Above all, it’s bad design.

Anyway, here are the three methods, warts and all:

*   `checkValidity()` checks the validity of an element and returns `true` or `false`
*   `reportValidity()` checks the validity of an element and returns `true` or `false`. If the element is invalid the error message pops open
*   `setCustomValidity('error')` sets the field’s error message to the string and sets the field to invalid.
*   `setCustomValidity('')` sets the field’s error message to its default value and sets the field to valid.
*   `setCustomValidity()`. Error! Hah! You didn’t think you could afford not to send an empty string as an argument, did you?

That concludes part 2. In part 3 we’ll discuss the native error messages, draw some conclusions, and create a list of recommendations for improvement — and boy, will that list be long!

Tagged in [JavaScript](https://medium.com/tag/javascript), [HTML](https://medium.com/tag/html), [Web Development](https://medium.com/tag/web-development), [Browsers](https://medium.com/tag/browsers), [Web Design](https://medium.com/tag/web-design)

By [Peter-Paul Koch](https://medium.com/@pp.koch) on [May 9, 2017](https://medium.com/p/552c78f563b).

[Canonical link](https://medium.com/@pp.koch/native-form-validation-part-2-552c78f563b)
