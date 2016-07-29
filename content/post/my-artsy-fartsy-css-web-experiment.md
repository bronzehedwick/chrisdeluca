---
categories:
  - Art
  - Tech
tags:
  - CSS
date: '2014-09-18'
summary: A web experiment drawn entirely in CSS.
title: My artsy-fartsy css web experiment
---


The other day I had some time in between work and an improv show I was doing that night, so to pass the time, I created a simple web experiment in CSS.

I call it, [Day and Night](http://bronzehedwick.com/nightandday/).

The quick pitch is that you can control the sun with your mouse, and if you bring the sun down behind the hills in the foreground, the scene changes from day to night.

{{< figure src="/images/night_and_day.png" alt="Night and Day screenshot" caption="Night and Day screenshot" link="http://bronzehedwick.com/nightandday/" >}}

The experiment is written entirely in HTML, CSS, and JavaScript. You can check out the [code on GitHub](https://github.com/bronzehedwick/nightandday).

## The Guts and Gears

The HTML is very simple. There's a div for the sun, and both hills, and the body serves as the sky.

{{< highlight html >}}
<body id="sky" class="sky">
  <div id="sun" class="sun"></div>
  <div class="hills-wrapper">
    <div id="hill-background" class="hill-background"></div>
    <div id="hill-foreground" class="hill-foreground"></div>
  </div>
</body>
{{< /highlight >}}

I used Sass to keep my styles organized and badass, and I used percentage widths and heights for all the elements, except for the sun, to keep things mobile friendly.

Next, I stuck the hills to the bottom of the page.

{{< highlight scss >}}
.hills-wrapper {
  position: relative;
}
.hill-background,
.hill-foreground {
  position: fixed;
  width: 100%;
  bottom: 0;
}
{{< /highlight >}}

I made use of `border-radius` to make the hills look like, well, hills, instead of color swatches, in addition to the sun, to make it look round instead of dumb.

I wrote a color scheme for day and night, taking advantage of the compass `shade` mixin as much as looked good. I also made use of adjoining classes to define the night colors (stay tuned for how they're utilized in a moment), to a) keep things clean and easy to read, and b) to flip a big ol' bird to IE6 (seriously, why does [CSSLint](http://csslint.net) still consider them a bad practice? Let IE6 die!).

{{< highlight scss >}}
/* variables */
$night_sky : #001f3f;
$night_clouds : shade($clouds, 70%);
$night_grass : shade($grass, 70%);
/* classes */
.sky.night { background-color: $night_sky; }
.clouds.night { background-color: $night_clouds; }
.hill-background.night { background-color: darken($night_grass, 3); }
.hill-foreground.night { background-color: $night_grass; }
{{< /highlight >}}

Moving on the the JavaScript, I first attached the sun div to mouse movement. Hello `addEventListener` firing on `mousemove`.

{{< highlight javascript >}}
// Mouse move event listener.
document.addEventListener('mousemove', function(e) {
  var top = e.clientY - 100,
  left = e.clientX - 100,
  aboveTheHills;
  // Stick the sun to the cursor.
  sun.setAttribute('style', 'left:' + left + 'px;top:' + top + 'px');
{{< /highlight >}}

Finally, I needed to detect if the sun was below the hills. The method I came up with isn't perfect, since the sun can still be peaking out from behind the rounded hills, but it would be way to hard to teach the DOM how to "see" if the sun was visible.

However, my solution does consistantly change from day to night, no matter the screen size, with the power of math!

{{< highlight javascript >}}
 // Detect night.
aboveTheHills = window.innerHeight - hillBg.clientHeight + (sun.clientHeight / 2);
if (e.clientY > aboveTheHills) {
  // It's night.
  sky.className = 'sky night';
  hillBg.className = 'hill-background night';
  hillFg.className = 'hill-foreground night';
}
else {
  // It's day.
  sky.className = 'sky';
  hillBg.className = 'hill-background';
  hillFg.className = 'hill-foreground';
}
{{< /highlight >}}

Finish it off by adding a `background-color` transition to all the effected elements, and you get to be the god of the sun!
