# 30 days of MDN

Goal: every day have a peruse through the [MDN list of Web APIs](https://developer.mozilla.org/en-US/docs/Web/API), pick one, have a read about it, give it a shot!

## Day 1, Jan 28th 2018: [`AnalyserNode`](https://ijmccallum.github.io/30-days-of/MDN/AnalyserNode/)

From the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). Audi processing happens within an [audio context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) - it's a graph of [Audio Nodes](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that do various things. One of those things is to process the audio data, for that we have the [AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode).

## Day 2, Jan 29th 2018: [`Float32Array`](https://ijmccallum.github.io/30-days-of/MDN/Float32Array/)

One of the [Globals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) available to JS. Specifically a type of [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) which can be used to "see" into a [buffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (a fixed length array of raw binary). Also to edit buffers. Seems to be all about buffers really!

## Day 3, Jan 30th 2018: [`CustomEvent`](https://ijmccallum.github.io/30-days-of/MDN/CustomEvent/)

It is what it's named, a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent). One good use would be to [replace JS callbacks for UI component events](https://css-tricks.com/custom-events-are-pretty-cool/). Eg `document.getElementById('modal').addEventListener('modalOpened', () => { /* disable scrolling! */ })` as opposed to asking the modal JS to call a callback you pass it.

## Day 4, Jan 31st 2018: [`requestIdleCallback`](https://ijmccallum.github.io/30-days-of/MDN/requestIdleCallback/)

You've got some non-priority JS to run, pop it in a function and pass that to [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback). It's like saying, hey browser - whenever you've got time, no pressure, give that a bash. (They're also cancelable! Which I find cool :)

## Day 5, Feb 1st 2018: [`requestAnimationFrame`](https://ijmccallum.github.io/30-days-of/MDN/requestAnimationFrame/)

Pass it some animatino code, it tries to run it 60 times a second. Note that although MDN says it will match the frame rate I'm pretty sure it won't for 120fps screens - because if it did, old things might break (old things that assume 60fps).

## Day 6, Feb 2nd 2018: [`pageEvents`](https://ijmccallum.github.io/30-days-of/MDN/pageEvents/)

Just scroll through the [events list on MDN](https://developer.mozilla.org/en-US/docs/Web/Events) - it's a little bit bonkers. I pulled out a few that would be of interest to performance work. The others will just have to wait for their turn!

## Day 7, Feb 3rd 2018: [`mini-site-generator`](https://www.npmjs.com/package/mini-site-generator/)

That's not an MDN thing! Nope, you're right. I got sucked into building a static site generator! One of those shower ideas struck and I couldn't help myself. Giving myself an MDN pass for today, that was some good work!

## Day 8, Feb 4th 2018: [`performance`](https://ijmccallum.github.io/30-days-of/MDN/performance/)

Another MDN pass day. After building that static site generator yesterday it would seem pretty silly not to use it for my own static site. So over from [Harp](http://harpjs.com/) it goes. Then into performance I dive, have a look at [the results](https://ijmccallum.github.io/30-days-of/MDN/performance)!

## Day 9, Feb 5th 2018 [`Notifications`](https://ijmccallum.github.io/30-days-of/MDN/Notifications/)

Desktop [notifications](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API) - those annoying things that all the websites now want to ask your permission for. Well we can do them too!

## Day 10, Feb 6th 2018 [`Channel_Messaging_API`](https://ijmccallum.github.io/30-days-of/MDN/Channel_Messaging_API/)

Having a parent page and an iframe chat to each other through the [Channel_Messaging_API](https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API). Apparently this can happen through a shared web worker too... Will have to give web aorkers their own day then maybe circle back to this messaging api!

## Day 11, Feb 7th 2018 [`Element`](https://ijmccallum.github.io/30-days-of/MDN/Element/)

The base class from which all other elements inherit (eg, the `<html>` element or the `<svg>`). Pretty fundamental! The code here is just grabbing an element and looking at what the properties actually return.

## Day 12, Feb 8th 2018 [`Worker`](https://ijmccallum.github.io/30-days-of/MDN/Worker/)

Super quick set up with a [`Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Worker). As front end work gets more interesting I'll be sure to start using these more - that was so easy! Been on the todo list to try for a while... check!

## Day 13, Feb 9th 2018 [`SharedWorker`](https://ijmccallum.github.io/30-days-of/MDN/SharedWorker/)

Haven't got this one quite working yet. Tricky little one. It's an interesting one but support is low, implementation seems a bit shaky, and debugging is quite difficult. Gave it a good shot but it doesn't seem my test is going anywhere. Ah well! Seems they might be on the way out anyway!

## Day 14, Feb 10th 2018 [`attachShadow`](https://ijmccallum.github.io/30-days-of/MDN/attachShadow/)

Another simple one, part of the process in creating a shadow DOM. Probably about as basic an example as you can get here. More advanced stuff will come later!

## Day 15, Feb 11th 2018 [`querySelectorAll`](https://ijmccallum.github.io/30-days-of/MDN/querySelectorAll/)

The jQuery killer! Maybe. Just supplying that selector like interface in plain vanilla JS.

## Day 16, Feb 12th 2018 [`NodeList`](https://ijmccallum.github.io/30-days-of/MDN/NodeList/)

The list of nodes returned by something like querySelectorAll. Very much like an array - but not an array. This just plays with a few of the properties / functions that come with a NodeList to see what's what with it.

## Day 17, Feb 13th 2018 [`Object.Freeze`](https://ijmccallum.github.io/30-days-of/MDN/Freeze/)

Doing immutable JS with plain vanilla JS! It makes the first 'layer' of key value pairs in an object 'frozen', though nested objects aren't affected. Also had a look at `Object.seal` - never even heard of that one!

## Day 18, Feb 14th 2018 [`Console`](https://ijmccallum.github.io/30-days-of/MDN/Console/)

All the things console! I use it every day, but it still had some hidden gems - particularly console.assert. Seems like it would be a good easy way to gently introduce testing to a team who hasn't started writing tests yet (*cough* work *cough*). Also trace! That'll be an interesting one for the more functional projects!

## Day 19, Feb 15th 2018 [`getUserMedia`](https://ijmccallum.github.io/30-days-of/MDN/getUserMedia/)

Request video from a camera and audio from a mic (if there is one). Another super simple one. I think the fun with this would be piping the media through some crazy effects.

## Day 20, Feb 16th 2018 [`matchMedia`](https://ijmccallum.github.io/30-days-of/MDN/matchMedia/)

Media query events! I'm guessing under the hood this is driven off the same thing that drives css media queries. So, very likley, we have access to the same ones! (Don't take my word for it, try it!)

## Day 21, Feb 17th 2018 [`hasFocus`](https://ijmccallum.github.io/30-days-of/MDN/hasFocus/)

A teeny one but probably a useful one one day! Lets you know if the user is focused on the current page. Would probably be nice to give some kind of visual indication of focus. It's super easy! Also a lead in to the Page_Visibility_API which I'll have to gieva whirl in a future day.

## Day 22, Feb 18th 2018 [`DOMImplementation`](https://ijmccallum.github.io/30-days-of/MDN/DOMImplementation/)
Creating DOMs! Mad - the examples look to use this as a way of replacing the content of an iframe. Not sure why, unless maybe you were looking to maybe polyfill shadow dom?

## Day 23, Feb 19th 2018 [`createRange`](https://ijmccallum.github.io/30-days-of/MDN/Range/)
Pretty much all the examples online create ranges from `document.selection.createRange()`. Granted that seems the most intuitive use case. I was curious about how to do it manually so that's what I've done! The second properties I'm not yet sure what they do, more experimentation / reading would be required, but a randomly interesting one none the less.

## Day 24, Feb 20th 2018 [`Selection`](https://ijmccallum.github.io/30-days-of/MDN/Selection/)
Dealing with the text you highlight, or click into. This gives a way to know where in a paragraph you're interacting and workes accross elements. So were you to build a browser based text editor of some kind with something like syntax highlighting, this is a possible tool that could come in really handy!

## Day 25, Feb 21st 2018 [`Streams`](https://ijmccallum.github.io/30-days-of/MDN/Streams/)
Whoa - this is probably the most ambitious one I've tried yet! Think I'll do a double and spend tomorrow on streams too. Today was just reading up on it and trying to read one. Currently I'm just getting one giant "chunk" though I have a suspision it's not actually a chunk - more a completion. There's a pipe through thing I've not dug into that looks to be the key.

## Day 26, Feb 22nd 2018 [`MutationObserver`](https://ijmccallum.github.io/30-days-of/MDN/MutationObserver/)
Register an event listener for changes in the dom below a given element. Don't really need to say much more than that really - it's lovely!

## Day 27, Feb 23rd 2018 [`history`](https://ijmccallum.github.io/30-days-of/MDN/history/)
The browser utility that'll be driving things like react router. Control history flow, add, replace, generally manipulate the users current history. You could have a bit of fun with this one for sure!

## Day 28, Feb 24th 2018 [`fullscreen`](https://ijmccallum.github.io/30-days-of/MDN/Fullscreen/)
Going fullscreen! Will only do it on a user interaction and it's only running through vendor prefixes (as of this writing) which is a pain, but at least it's achievable! 

Future ideas:

 - [window.performance](https://developer.mozilla.org/en-US/docs/Web/API/PerformancePaintTiming)
 - https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
 - document.selection
 - Streams
 - node
 - element properties
 - https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap


Future 30 days of idea: jargon / concepts

 - overloading
 - polymorphism
 - btrees
 - hash tables