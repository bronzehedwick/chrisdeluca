+++
title = "Pain and Pleasure"
date = 2018-04-29T18:19:11-04:00
draft = false
subtitle = "My History with Drupal"
categories = [ "Tech" ]
topics = [ "Drupal" ]
toc = false
styles = []
+++

*This is not meant to be a take down piece, and I realize I'm not providing any
direct solutions. I wouldn't be writing about Drupal if I didn't care about it.
My hope is that my thoughts will prove useful in a much larger discussion.*

---

<!--more-->

I've been working with Drupal professionally since around 2011, and had
experimented with it on and off for a few years before that. I was introduced to
it on a fluke. I asked a programmer friend what I could use to help my mom build
a website, and he suggested Drupal.

I had no real programming experience, and was teaching myself HTML and CSS
through crappy tutorial sites and trial and error. The other options I had
explored for website building were various horrendous website builders bundled
with shared hosting providers, and Wordpress, which, at the time, seemed only
suited for blogs. Other options existed, but they all required a lot more
technical knowledge than I had, and I was scared off.

## Pleasure

Drupal was a revelation. Without writing any code, I could snap together modules
to create complex functionality. I remember reading the documentation on
Drupal's modular architecture, and feeling like I was interacting with a serious
tool. I only understood about half of it, even after a few readings, but that
contributed to the mystique that I was touching real power.

I built that first iteration of my mom's website in Drupal 5, using modules for
calendars and email notifications. No CCK, no Views; nothing much that a modern
Drupal site would recognize, but it worked, and I was happy. I was hooked.

As I started my career in software at a small mobile games company, I advocated
for Drupal for their company website, replacing Joomla. Again, I was able to
single-handedly build their site by snapping together modules. At that point I
had some programming skills, but I never touched Drupal's code. I didn't need
to.

Eventually I went on to work at various media-centric companies that were
already using Drupal in production, and had teams of experienced Drupal
developers. While mainly focusing on the front end, I started having to write
Drupal code as a matter of necessity to interact with the theme layer, and since
the teams were small, I was given more responsibility in writing more "backend"
Drupal code. Although, to my eye, "backend" Drupal code, and "frontend" Drupal
code looked pretty similar…you find the place you want to hook into, write logic
to modify the behavior, and send the data along.

## Pain

This is when I first started chafing against Drupal. I had no concept of
"developer experience" or any thoughts on programming architecture, but I could
hear the senior devs talk about it, and they seemed fairly annoyed with Drupal.
I figured my pains with it were just me learning to program, but hearing them
talk made the down sides more "real". Ironically, the issues with Drupal stemmed
from the very things that drew me to it in the first place: the ability to do
amazing things without touching code. Turns out, that comes with a price once
you *do* start touching code.

The main problems I encountered, as compared to other platforms or solving
problems outside a framework/CMS were:

1. Poor documentation
2. Runaway complexity
3. Unattractive problems

Let me explain.

### Documentation

Drupal's documentation is spotty at best. I am blowing nobody's mind saying
this. It is a well worn problem area. However, the effects are still tangible.
It can be really frustrating to figure something out.

Imagine you're a new developer and you're trying to build a simple site, and
you're evaluating CMSs. You have the most need for documentation to help you
figure it all out. If that doesn't pan out, since the site is relatively simple,
it could be easier just redo everything in Wordpress. This decision will likely
shape the rest of your career.

One of my biggest complaints with the documentation is that even when it is
accurate and up to date (and exists at all), it lots of times only explains
*what* something does, not *why*. That second part is critical to developing a
deeper understanding of any system.

### Runaway complexity

Drupal is insanely complex. That is often touted as an advantage, and there
certainly are upsides, but it also hurts adoption and developer experience, and
probably is a major reason why the documentation is sub-par.

Drupal has been around for a long time, and as a general purpose CMS, is bound
to pick up a vast technical scope. This doesn't change how painful it can be to
try and program an otherwise simple mechanism, but now has to be routed around a
byzantine labyrinth of sub-systems. You end up finishing your trivial feature,
but not without half-jokingly dreaming of redoing the site in hand-coded HTML.

This problem has gotten somewhat better with Drupal 8, as it aligns with the PHP
community more generally, but there's still so much domain knowledge associated
with coding for Drupal, things you just have to *know*.

### Unattractive problems

More broadly, the kind of problems you solve in Drupal are too often not fun.
This might seem trivial, but I think this is hugely important. Without a good
developer experience, eventually folks flee the system. This is partly a problem
with frameworks in general, but with something as venerable as Drupal that tries
to be all things to all people, it's especially problematic.

If I were coding in raw PHP, using a library, or something else less opinionated
than an entire framework, the problem you have to solve is *the thing itself*.

For example, if you're tasked with outputting an HTML table from an uploaded CSV
file, starting from nothing, you have some interesting problems to solve. How
will you accept user input? How will you parse the CSV file? What method will
you use to render the eventual output?

While Drupal makes all of this much easier, the actual task you as a developer
are left with is glue code. If there's a problem, the problem will be with
Drupal; getting the right hook, the right syntax, the right incantation for
Drupal to be happy with what you've glued together. That's not a fun problem.

Obviously, once you level-up a bit in your Drupal programming knowledge, you
start writing modules that provide a more logically direct solution, however
this takes a good amount of investment to get to that point. Even then, much of
your day-to-day will still be glue code.

## Conclusion

I have hopefully expressed myself well, and it comes across that I have a lot
love for Drupal and the community, and that my criticisms are taken as fair and
in the spirit of constructive feedback.

I look forward to working with Drupal now and in the future. Thanks for reading.
