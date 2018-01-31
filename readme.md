# 30 days of MDN

Goal: every day have a peruse through the [MDN list of Web APIs](https://developer.mozilla.org/en-US/docs/Web/API), pick one, have a read about it, give it a shot!

## Day 1, Jan 28th 2018: [`AnalyserNode`](https://ijmccallum.github.io/30-days-of/MDN/AnalyserNode/)

From the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). Audi processing happens within an [audio context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) - it's a graph of [Audio Nodes](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that do various things. One of those things is to process the audio data, for that we have the [AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode).

## Day 2, Jan 29th 2018: [`Float32Array`](https://ijmccallum.github.io/30-days-of/MDN/Float32Array/)

One of the [Globals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) available to JS. Specifically a type of [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) which can be used to "see" into a [buffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (a fixed length array of raw binary). Also to edit buffers. Seems to be all about buffers really!

## Day 3, Jan 30th 2018: [`CustomEvent`](https://ijmccallum.github.io/30-days-of/MDN/CustomEvent)

It is what it's named, a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent). One good use would be to [replace JS callbacks for UI component events](https://css-tricks.com/custom-events-are-pretty-cool/). Eg `document.getElementById('modal').addEventListener('modalOpened', () => { /* disable scrolling! */ })` as opposed to asking the modal JS to call a callback you pass it.

Future ideas:

 - [MediaDevices.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) ?replaces navigator.getUserMedia?