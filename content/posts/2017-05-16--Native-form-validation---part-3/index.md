---
title: Native form validation — part 3
category: "Android"
cover: img.jpg
author: Peter-Paul Koch
authorImg: https://miro.medium.com/fit/c/240/240/1*4VXDobnR6b7kKNiuySyWTQ.jpeg
---

### Native form validation — part 3

In this third part of a three-part article we will conclude our study of native form validation in browsers. [Part 1](https://medium.com/samsung-internet-dev/native-form-validation-part-1-bf8e35099f1d) discussed general UI considerations and CSS. [Part 2](https://medium.com/samsung-internet-dev/native-form-validation-part-2-552c78f563b) studied a few HTML properties and the JavaScript API.

In this part we will consider the native error messages and offer general recommendations to come to actually usable native form validation.

As usual in my articles, I’m quite vague about exact browser compatibility patterns because I already collated that information in the [inevitable compatibility table](http://quirksmode.org/dom/forms/index.html). You can find the gory details there.

![](https://cdn-images-1.medium.com/max/800/1*3E4lGskZg83wp4GoJM9SPg.jpeg)

[Kendell Geers](https://commons.wikimedia.org/wiki/File:Kendell_Geers_-_T-error_%282003%29_sans_T.jpg)

### The error messages

So far we have been ignoring the details of the native error messages the browsers produce. The time has come to study them, and we will find these error messages also suffer from serious problems.

One point has to be made at the outset: these messages are not stylable (though they once were in Chrome). So there. By now we’re expecting this kind of thing.

Also, native form validation messages do not appear in Firefox 53. This is a [confirmed bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1358487) that does not occur in either 52 or 54. The rest of this article ignores the bug, and you should not run any tests in Firefox 53.

#### Showing error messages

When do browsers show native error messages? It turns out that there are only two triggers: if the user submits the form, and if `reportValidity()` is called on an invalid form field. That’s not unreasonable. In both cases we want to warn the user about possible validation problems.

Of course, what neither trigger does is show a success message if a field has a valid value. Success messages are completely ignored in the API, where CSS at least has `:valid`.

In part 1 we saw that onblur validation, i.e. showing an error message as soon as the user leaves the field, is the best timing. So the best way of triggering native error messages seems obvious:

field.onblur = function () {  
	this.reportValidity()  
}

Seems simple, right? Unfortunately this misfires in a truly horrific way in Chrome and Safari, because in those browsers `reportValidity()`, in addition to showing the error message, puts the focus on the offending field. Even worse, if a field receives the focus the error message is hidden. So what happens now is the following:

1.  User leaves invalid field, blur event handler kicks in.
2.  Error message pops up.
3.  Field is focused.
4.  Error message disappears.

[Try the effect here](https://quirksmode.org/dom/forms/examples_blurvalidity.html). First use Firefox or Edge for the proper version, then use Chrome or Safari for the buggy version.

The net result is that it appears to the user that she cannot leave the form field for unspecified reasons. This is truly horrible UX, and it leaves the user clueless as to what’s going on.

Firefox handles this better. It does not put the focus on the form field, and thus continues to show the error message and allows the user to understand what’s going on. Unfortunately it has one bizarre bug: it only shows the error message if the user clicks entirely outside any form field or puts the focus on the next form field. If the focus is moved to any form field but the next, the error message is not shown at all. Very weird.

As to Edge, it does not support `reportValidity()` so this bit of code won’t work. Maybe Edge actually has the best implementation here.

#### Hiding error messages

When are error messages hidden? Most importantly, when the field is focused. This makes sense in some situations; sometimes the field gains the focus because the user starts editing the value. Sometimes it doesn’t make sense, though; the error message also disappears when the a field gains the focus programmatically, as we saw in the onblur example above.

All Chromium-based browsers, both desktop and mobile, hide the error message after five seconds have elapsed. I’m not sure this is a good idea: the user could miss the error message if she’s distracted during those five seconds, or needs some extra time to understand it.

Edge, Firefox, Safari, and most Chromia on mobile hide the error message when the user scrolls. This is not a very good idea: why wouldn’t the user be allowed to scroll?

#### More than one error

If the user submits the form and thus triggers native error messages, it is quite possible that the form contains more than one error. What happens then? Nothing nice, as by now you’ll be able to guess for yourself. We cannot have nice things.

If the form is submitted the browser goes through all form fields in order, and if it finds an invalid field it stops and shows the proper error message. That may sound logical, but it has a few unexpected consequences in Chrome and Safari. (Firefox and Edge handle this better, as we’ll see later on.) [Try it here](https://quirksmode.org/dom/forms/examples_iossubmit.html) to see exactly what happens.

Chrome and Safari show the first error message and put the focus on the offending form field. The user corrects the value. Now what? The user thinks she’s ready and submits the form again, only to see a new error message pop up. This is bad UX. You shouldn’t be required to submit the form several times in order to find all error messages.

Firefox and Edge handle this better: they give all invalid fields, and not just the first one, a red outline to denote that they are invalid. This is pretty much mandatory, and Chrome and Safari should implement it forthwith.

(And what about colour blindness? The red colour will not work, but the outline is still a little thicker than the usual form border. I am not aware of any research that proves or disproves that this works, so we have to trust the Mozilla and Microsoft browser teams here.)

In addition, Edge on desktop (but not on mobile) and Firefox on Android (but not on Windows or Mac) pop up an error message every time the user focuses on an invalid field. This, now, is a really, genuinely, well thought-out helpful feature. The user sees a red outline and understands the field is invalid. But why? Click on it and you’ll see the reason. Perfect! All browsers should implement this behaviour everywhere. Of course they won’t because Reasons.

### The invalid event

Let’s talk about the invalid event for a bit. The invalid event? Yes, it exists. Even better, it turns out that all browsers support it. It fires, unsurprisingly, when a form field is found to be invalid — that is to say, when `checkValidity()`or `reportValidity()` find an invalid field, or when the submit process does so.

We can suppress the native error message by returning `false` or using `event.preventDefault()`. This is something you may want to do.

Next problem: the invalid event does not bubble up. Why not? Because browsers are weird.

Fortunately, there is [an ancient trick](https://www.quirksmode.org/blog/archives/2008/04/delegating_the.html) that comes to our rescue. We have to set an invalid event handler on the form in the capturing phase, like this:

document.forms\[0\].addEventListener('invalid',function (e) {  
	e.preventDefault();  
},**true**);

This bit of code suppresses all native error messages, but the outline still appears in Firefox and Edge, and the form is not submitted. It is likely the most useful bit of code you’ll find in this entire series of articles.

#### The valid event

If there’s an invalid event it would make sense if there were also a valid event, right? It fires whenever a form field is validated and found to be valid. It would lead to simple scripts like this:

document.forms\[0\].addEventListener('invalid',function (e) {  
	e.target.showErrorMessage();  
},true);  
document.forms\[0\].addEventListener('valid',function (e) {  
	e.target.hideErrorMessage();  
},true);

It would be wonderful, and logical, if this event would actually work. Obviously, it doesn’t. Browsers are not impressed by our pathetic attempts at logic and stubbornly refuse to play along. We counter by not being impressed by browsers. That doesn’t help, but at least it makes us feel good.

### Conclusion

That concludes our exhaustive and unsatisfying review of native CSS and JavaScript form validation in modern browsers. You want a conclusion? You’ll get one.

It doesn’t work.

Let me slightly qualify that. It’s perfectly fine for you to cherry-pick one or two good features and use them in your own custom script. However, this article set out to create a good form validation UX using _only_ native features. That failed because the native features are lousy.

Every good idea in the Constraint Validation API or in CSS is offset by several very bad ones, and browsers make things even more messy by ignoring sensible UX precautions such as allowing the user to see form validation messages in all circumstances.

Despite having been implemented years ago, these features are still not ready for prime time. Your users are much better served by an old-fashioned JavaScript form validation we’ve been writing for the past twenty years.

### Recommendations

On the off chance that anyone from a browser vendor or standards body who actually cares about helping users and web developers reads this, here are my recommendations for native form validation that actually works:

*   Support `:user-error` or `:user-invalid`, so that form fields are only judged after the user has had the opportunity to do something. (Of all the recommendations I am making, this is the only one that’s likely to be implemented.)
*   CSS `:valid` and `:invalid` should be triggered by a blur, and not a keypress. Users don’t want to be bothered while they’re filling out a form field. Show the results when they’re done.
*   In addition to `fieldset:invalid` and `form:invalid`, `label:invalid` should also work.
*   `maxlength` and `minlength` should validate default values in the same way as all other constraints. (That may mean that all other constraints also wait for a user action; I don’t care. It’s consistency that I’m after.)
*   Take a bloody decision on `input:before/after`. Supporting it would clearly be the best solution, but even consistent non-support would be preferable over the current nonsense in Chrome and Safari.
*   Add an attribute such as `error-message` to form fields, and an `input:error-message` to style it. (Maybe add language-specific variants, such as `error-message-en-us`, `error-message-fr`, and so on, which take their cue from the defined document language?)
*   Or maybe just make `title` contain the error message? In any case stop the current nonsense about `title` only working on `pattern`ed fields. Consistency!
*   Split `setCustomValidity()` into two methods: one to set the field’s error message text, and one to set the field’s validity to true or false.
*   Remove the automatic focus from `reportValidity()`.
*   Implement a valid event in addition to the invalid event. Also, make them bubble. Not allowing for event bubbling here is nonsense.

Also, the native error messages should be overhauled massively:

*   Add success messages — in part 1 we saw that they can be important in some situations, such as the user correcting a mistake.
*   Onsubmit, browsers should show all error messages at once.
*   Do not hide error messages when the user scrolls. In fact, only hide them when the user is done re-entering a value (onblur, in other words).
*   Copy the Edge/Firefox behaviour that gives all invalid fields a red outline.
*   Copy the Edge/Firefox behaviour of showing an error message when the user focuses on an invalid field.
*   Create methods that explicitly show and hide native error messages and do nothing else.
*   Allow for a simple, declarative way of rewriting default error messages. In fact, extend this to all form fields, even simple `text` ones.

Until these changes have been made, let’s quietly forget about native form validation. It’s more trouble than it’s worth.

Tagged in [UX](https://medium.com/tag/ux), [Web Browser](https://medium.com/tag/web-browser), [Web Development](https://medium.com/tag/web-development), [JavaScript](https://medium.com/tag/javascript), [HTML](https://medium.com/tag/html)

By [Peter-Paul Koch](https://medium.com/@pp.koch) on [May 16, 2017](https://medium.com/p/8e643e1dd06).

[Canonical link](https://medium.com/@pp.koch/native-form-validation-part-3-8e643e1dd06)
