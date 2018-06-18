---
title: Native form validation — part 1
category: "Web Development"
cover: img.jpg
author: Peter-Paul Koch
authorImg: https://miro.medium.com/fit/c/240/240/1*4VXDobnR6b7kKNiuySyWTQ.jpeg
---

### Native form validation — part 1

After doing [exhaustive research](https://quirksmode.org/dom/forms/) into modern CSS and JavaScript form validation, I present my conclusions in this series of articles. It will discuss native HTML validation messages, the CSS `:invalid` and `:valid` pseudo-classes, and the [Constraint Validation API](https://www.w3.org/TR/html5/forms.html#constraints) that is supposed to make form validation easier but doesn’t really.

![](https://cdn-images-1.medium.com/max/800/1*G2oEQscaQvfh2pacm1I3JA.png)

A small snapshot showing CSS results from the [compatibility table](https://quirksmode.org/dom/forms/)

In this article we will attempt to validate a form in a user-friendly fashion entirely by using existing native HTML, CSS, and JavaScript features, writing a few very light custom scripts to pull some supposedly-easy strings in the Constraint Validation API.

We will fail miserably. We will find that serious design errors were made, and that it’s no wonder web developers don’t use any of these techniques. Specifically, modern form validation suffers from the following problems:

1.  There is no obvious point of connection between the HTML, CSS, and JavaScript specifications. Sometimes they actually work at cross-purposes.
2.  There is no declarative way of adding error messages to individual form fields. (There is a JavaScript method, but it’s badly designed.)
3.  HTML validation messages are impossible to style, and their lousy and inconsistent default behaviour is impossible to influence beyond simple show and hide commands that don’t look like show and hide commands.
4.  The CSS pseudo-classes seem great, but aren’t all that wonderful once you start using them. Besides, they do not have an easy way to add error messages.

These problems are all the more odd since form validation is literally the oldest trick in the JavaScript book: when JavaScript was introduced in Netscape 2 it could basically only do form validation. We’ve had twenty years to get it right, but we didn’t.

As usual in my articles, I’m quite vague about exact browser compatibility patterns because I already collated that information in the [inevitable compatibility table](http://quirksmode.org/dom/forms/index.html). You can find the gory details there.

Oh, and one thing before we start: always validate your forms server-side, whatever you do on the client. If your script fails, and you have no fallback in place, unpleasant things could happen.

OK, so one other thing before we start. Many thanks to [Stéphanie Walter](http://www.stephaniewalter.fr) and [Geoffrey Crofte](https://geoffrey.crofte.fr/) for their extremely useful feedback to a draft of this article.

### Form field validation UI

Before we delve into the depths of APIs and pseudo-classes we should have a clear idea of what we’re trying to achieve. In theory it’s easy: we want to offer the user a good user experience, which amounts to clear, concise error messages that are properly timed and properly placed.

1.  onsubmit, i.e. when the user tries to submit the form.
2.  onblur, i.e. when the user leaves a form field.
3.  onkeypress, i.e. whenever the user changes the value of a form field. (And remember this may occur ten or twenty times before the user is done filling out the field.)

Which of these three is best? [Christian Holst](https://baymard.com/blog/inline-form-validation) treats the UI and customer experience of form validation in detail. His most important recommendations are to show the error messages next to the fields they apply to, and to show them immediately when the user is done filling out the fields. In other words, the onblur timing is best.

Luke Wroblewski [concurs](https://alistapart.com/article/inline-validation-in-web-forms), and adds the important observation that users are best served by persistent error messages, i.e. messages that don’t disappear after a while. (And guess what all browsers except for Firefox on Android do?) The same goes for success messages, by the way.

(Luke also tested a fourth timing option: focus + keypress, that shows messages when the user enters the form field and types. His tests showed conclusively that this is a bad idea.)

[Adrian Roselli](http://adrianroselli.com/2017/01/avoid-messages-under-fields.html) adds one consideration: error messages should be shown above the form field, and not below, because on a tiny mobile phone screen a message below the field could be covered up by the software keyboard or other UI elements.

The counter-argument is that by now users have grown used to error messages next to or below the form field. Since the screen may not be wide enough, placement next to the field is a big no-no on mobile. Error messages below the form do not have that problem.

I will leave it to you to decide between these arguments, but will observe in passing that nearly all browsers place their error messages below the form field, though some mobile ones occasionally break that rule.

So although the error message placement is not entirely clear, the timing has to be onblur, i.e. when the user indicates she’s ready by moving away from a form field. Also, there should be an easy way to add custom error messages to individual form fields.

CSS, the API, and browsers do not implement these simple rules. It is not possible to add error messages in a simple, declarative way. The Constraint Validation API is based on onsubmit timing, while CSS `:invalid` and `:valid` are based on onkeypress timing.

### CSS-only form validation

Pure CSS form validation relies on the `:invalid` and `:valid` pseudo-classes. (There are other pseudo-classes, such as `:out-of-range`, but we’re going to ignore them because they work the same, and are more specific instances of `:invalid`.)

Try the pseudos in the [first example on the test page](https://quirksmode.org/dom/forms/examples_cssvalidation.html). As you will notice, validity is re-evaluated on every key stroke. This is certainly ugly and potentially confusing. The user does not need to know about the state of her value every step along the way; one crisp, clear message when she’s finished is quite enough. (Of course the user doesn’t actually see an error message yet. We’ll get back to that shortly.)

#### Not focus

Fortunately it’s fairly easy to move to onblur timing by using a slightly more complex selector (thanks to [Krijn](https://krijnhoetmer.nl/) for this trick):

input:invalid:not(:focus)

Try it in the [second example on the test page](https://quirksmode.org/dom/forms/examples_cssvalidation.html). Now the invalid and valid styles are only visible when the field is not focused; i.e. when the user is not typing. That’s much better.

#### CSS-only error messages

That solves the timing problem. It does not solve the problem of showing error messages, though. Theoretically speaking, the following ought to be the solution:

input:invalid:not(:focus):before {  
	content: attr(data-error-message);  
}

Show the content of an invalid field’s `data-error-message` attribute just before the field if the user is not currently typing. Sounds great, right?

Alas alas, `:before` and `:after` are not allowed on replaced elements, of which `<input>` is one.

I should amend that. `:before` and `:after` are not _supposed_ to be allowed on replaced elements. However, in Chrome and Safari, `:before` and `:after` work on ranges, checkboxes, and radios. In Chrome and Safari/iOS, but not in Safari/Mac, they also work on the date-related types. (Why these exceptions? I have no effing clue. Probably some browser developers were drunk at the wrong time.)

So this doesn’t work. We have to move the error message outside the form field. Something like this:

span.errorMessage {  
	display: none;  
}  
  
input:invalid:not(:focus) + span.errorMessage {  
	display: block;  
}

This works, but the lack of easily declared error messages is disconcerting. You could argue that they don’t belong in CSS, but as we’ll see HTML and JavaScript don’t offer them, either. This is a fundamental problem with the specifications as they stand right now.

#### The required problem

Although it might seem we’ve come a decent way and CSS-only form validation is within our grasp, it falls apart when we consider required form fields. A required field without a value is invalid.

Try the pseudos in the [third example on the test page](https://quirksmode.org/dom/forms/examples_cssvalidation.html). The problem is that field is already in the invalid state on page load. Telling the users they’ve made a mistake before they even had a chance to interact with the form is bad UX.

You might use this solution that, again, [Krijn](https://krijnhoetmer.nl/) came up with (add a placeholder text of one space!), but it depends on the `:placeholder-shown` pseudo.

:not(:focus):not(:placeholder-shown):invalid

Isn’t this getting a bit ridiculous? I mean, we’re not asking for arcane functionality that only a few form fields need. We just want to wait for the user to signal she’s ready before deciding if a form field is valid.

In other words, CSS-only form validation is not an option if you have required fields — and since most forms will have at least a few of them, CSS validation is not an option, period.

#### :user-invalid and :user-error

This is in fact the one problem that has been recognised by the CSS people. A solution is in the making in the form of the [:user-invalid](https://drafts.csswg.org/selectors/#user-error-pseudo) (W3C) or [:user-error](https://www.w3.org/TR/selectors4/#user-error-pseudo) (WHATWG) pseudo-classes. Both would mean “if a form field is invalid after the user interacted with it,” which would solve most problems mentioned above.

As of this moment neither pseudo-class is supported in any browser, but it is to be assumed that they’ll be implemented eventually and will bring CSS form validation one step closer. The lack of a native, simple error message system will remain a serious problem, though.

#### :valid and :invalid on other elements

It is not generally known that `:invalid` and `:valid` work on more than just `<input>`. Fieldsets and form elements also allow these pseudo-classes, which evaluate to `:invalid` if the fieldset or form contains at least one invalid field.

Even better, fieldsets allow `:before` and `:after`. So this could be a useful technique:

fieldset:invalid {  
	border-color: red;  
}  
  
fieldset:invalid:before {  
	content: attr(data-error-message);  
}

Unfortunately Edge and quite a few older mobile browsers don’t support it.

Also, if fieldsets that contain invalid fields can be invalid, and if forms that contain invalid fields can be invalid, _why can’t labels that contain invalid fields be invalid_? Well, because they can’t. Obviously. Browsers don’t support it. We cannot have nice things because that would make things nice. And we cannot have nice things.

That concludes part 1. In the next article (coming soon) we’ll talk about a few HTML options and the JavaScript API.

Tagged in [Web Development](https://medium.com/tag/web-development), [Browsers](https://medium.com/tag/browsers), [HTML](https://medium.com/tag/html), [CSS](https://medium.com/tag/css), [JavaScript](https://medium.com/tag/javascript)

By [Peter-Paul Koch](https://medium.com/@pp.koch) on [May 2, 2017](https://medium.com/p/bf8e35099f1d).

[Canonical link](https://medium.com/@pp.koch/native-form-validation-part-1-bf8e35099f1d)
