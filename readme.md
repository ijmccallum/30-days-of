# 30 days of MDN

Goal: every day have a peruse through the [MDN list of Web APIs](https://developer.mozilla.org/en-US/docs/Web/API), pick one, have a read about it, give it a shot!

## Day 1, Jan 28th 2018: [`AnalyserNode`](https://ijmccallum.github.io/30-days-of/MDN/AnalyserNode/)

From the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). Audi processing happens within an [audio context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) - it's a graph of [Audio Nodes](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that do various things. One of those things is to process the audio data, for that we have the [AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode).

## Day 2, Jan 29th 2018: [`Float32Array`](https://ijmccallum.github.io/30-days-of/MDN/Float32Array/)

One of the [Globals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) available to JS. Specifically a type of [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) which can be used to "see" into a [buffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (a fixed length array of raw binary). Also to edit buffers. Seems to be all about buffers really!

## Day 3, Jan 30th 2018: [`CustomEvent`](https://ijmccallum.github.io/30-days-of/MDN/CustomEvent)

It is what it's named, a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent). One good use would be to [replace JS callbacks for UI component events](https://css-tricks.com/custom-events-are-pretty-cool/). Eg `document.getElementById('modal').addEventListener('modalOpened', () => { /* disable scrolling! */ })` as opposed to asking the modal JS to call a callback you pass it.

## Day 4, Jan 31st 2018: [`requestIdleCallback`](https://ijmccallum.github.io/30-days-of/MDN/requestIdleCallback)

You've got some non-priority JS to run, pop it in a function and pass that to [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback). It's like saying, hey browser - whenever you've got time, no pressure, give that a bash. (They're also cancelable! Which I find cool :)

## Day 5, Feb 1st 2018: [`requestAnimationFrame`](https://ijmccallum.github.io/30-days-of/MDN/requestAnimationFrame)

Pass it some animatino code, it tries to run it 60 times a second. Note that although MDN says it will match the frame rate I'm pretty sure it won't for 120fps screens - because if it did, old things might break (old things that assume 60fps).

## Day 6, Feb 2nd 2018: [`pageEvents`](https://ijmccallum.github.io/30-days-of/MDN/pageEvents)

Just scroll through the [events list on MDN](https://developer.mozilla.org/en-US/docs/Web/Events) - it's a little bit bonkers. I pulled out a few that would be of interest to performance work. The others will just have to wait for their turn!

## Day 7, Feb 3rd 2018: [`mini-site-generator`](https://www.npmjs.com/package/mini-site-generator)

That's not an MDN thing! Nope, you're right. I got sucked into building a static site generator! One of those shower ideas struck and I couldn't help myself. Giving myself an MDN pass for today, that was some good work!

## Day 8, Feb 4th 2018: [`performance`](https://ijmccallum.github.io/30-days-of/MDN/performance)

Another MDN pass day. After building that static site generator yesterday it would seem pretty silly not to use it for my own static site. So over from [Harp](http://harpjs.com/) it goes. Then into performance I dive, have a look at [the results](https://ijmccallum.github.io/30-days-of/MDN/performance)!

## Day 9, Feb 5th 2018 [`Notifications`](https://ijmccallum.github.io/30-days-of/MDN/Notifications)

Desktop [notifications](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API) - those annoying things that all the websites now want to ask your permission for. Well we can do them too!

Future ideas:

 - [MediaDevices.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) ?replaces navigator.getUserMedia?
 - [window.performance](https://developer.mozilla.org/en-US/docs/Web/API/PerformancePaintTiming)
 - Streams