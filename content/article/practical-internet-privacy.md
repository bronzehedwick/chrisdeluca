+++
date = "2017-01-22T12:19:22-05:00"
title = "Practical Internet Privacy"
subtitle = "Privacy: It Matters"
toc = true
topics = [
  "privacy"
]
categories = [
  "Tech"
]
draft = true
+++

Welcome, Internet folks! If you've been following along, this is the final post
in my [three]({{< relref "article/security-vs-privacy-on-the-internet.md" >}})
[part]({{< relref "article/practical-internet-security.md" >}}) series on basic
Internet security and privacy. In this article, we're going to get into improving
and---just as importantly---*understanding* Internet privacy.

If you're unsure about what privacy on the Internet is, please read my first
article in this series, [Security vs Privacy on the Internet]({{< relref "article/security-vs-privacy-on-the-internet.md" >}}).

**A word of warning**: as the third and final chapter of this series, it is also the longest and least focused. This "cram-it-all-in-part-three" approach will be
familiar to anyone who watched *The Lord of the Rings: The Return Of the King*.
While this article is similar to that movie in almost every respect, I will try
to keep false-endings and ghost armies to a minimum.

## TL;DR

Don't have time to read a long-ass article? Skip straight to the [collected
resources]({{< relref "#resources" >}}).


## Why privacy matters

Why should you care about Internet privacy? Unless you've had first hand
experience of something bad happening to you because of loose information,
it's hard to feel like it's important. Especially when ignoring it is so easy
and rewarding: you get real benefits from the services you surrender your
information to.

However, there is also real harm that comes from lack of privacy. From the
tangible, like targeted harassment, to the less so, like an overall decrease in
freedom of speech. This should be a concern to anyone who believes in democratic
freedom.

Even if you think you have nothing to hide, [you probably don't mean that](you probably don't mean that).

If nothing else, much of the personally identifying information collected about
you is done invisibly, your agreement to allowing it buried deep in a Terms of
Service document nobody read. That disenfranchises you, the user, by removing
your control over *your* data.


## Improving your privacy

After that Orwellian last paragraph, what can we actually do to take back our
online privacy? Below is an explanation of some methods to do just that, as well
as the types of invasions they protect against.


### 1. The Golden Rule

The first step to better privacy is understanding the lay of the land. It's
nothing fancy, just common-sense economics.

> If you're not paying for the product, you are the product.

That is to say, no for-profit company is giving away their service.
If you aren't paying them directly, they still need to make their money.
Given how valuable your data is, it's very likely that any service you get for
free is reselling your personal data.

Keep that in mind as we delve into the specifics.


### 2. Private browsing is not really private

Just does not record your history, it does not block anything else.


### X. Behavior tracking

Ads and other hidden web analytics on most pages track an incredible amount of
personal data. For example, the most popular web analytics tool, Google
Analytics, collects all your usage habits from across *every site it is
installed* to create a centralized profile of who you are for sale. Saying
Google Analytics is the most popular tool of it's kind doesn't quite put it into
perspective, however. Since it's free, and very useful to publishers, by some
estimates it is [installed on 90% of websites]().

Not all of this will apply to you if you live in the European Union, as they
have stronger privacy protections. However, they are weakening, and enforcement
is not always a given.

The only way to prevent this type of data collection is a good tracking or ad blocker.


#### Recommended blockers

There are a lot of blockers on the market, some of the most popular being
AdBlock Plus and Ghostery. *Do not use these blockers*. While reasonably well
functioning tools, they are also businesses that offer free services. What are
you giving up to use these tools?

AdBlock Plus let's advertisers pay to unblock their ads, bringing with them
whatever tracking they include, a common business model among ad blockers.
Ghostery actually resells the data it collects about you to pay it's bills,
pretty much defeating it's whole purpose.

This section is called "Recommended blockers", not "Watch out for shitty
blockers", so which ones should you actually use?

<dl>
  <dt><a href="https://www.eff.org/privacybadger">Privacy Badger</a></dt>
  <dd><img src="/images/privacy-badger.png" alt="Privacy Badger Logo"></dd>
  <dd>
    <p>Privacy Badger is a browser plugin with a large community run
    database of trackers to block. Free to use, with a simple interface,
    it is run by the non-profit
    <a href="https://www.eff.org">Electronic Frontier Foundation</a>,
    a reputable Internet advocacy group.</p>

    <p>However, it is only available for Chrome and Firefox, on desktop and Android,
    however. If you use a different browser, see the below options.</p>

    <p>Note that when using Privacy Badger you should enable
    <a href="http://donottrack.us">enable "Do Not Track"</a> to make sure
    everything is blocked.</p>
  </dd>

  <dt><a href="https://github.com/gorhill/uBlock/#installation">uBlock Origin</a></dt>
  <dd>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewbox="0 0 128 128"><defs><linearGradient id="a"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient></defs><g fill="maroon" stroke="#fff" stroke-linecap="round"><path d="M447.834 669.1c-80.63-57.032-80.63-57.032-80.63-199.61 34.555 0 46.074 0 80.63-28.515m0 228.124c80.63-57.032 80.63-57.032 80.63-199.61-34.555 0-46.074 0-80.63-28.515" transform="matrix(-.69452 0 0 .5611 375.03 -247.43)" stroke-width="1.602" stroke-linejoin="round"/></g><g transform="translate(-17.873 -17.325)" font-weight="400" letter-spacing="0" word-spacing="0" stroke="#fff"><ellipse style="text-align:center;line-height:125%;-inkscape-font-specification:Ubuntu" cx="102.123" cy="81.325" rx="12" ry="12" transform="matrix(1.33333 0 0 1.33333 -42.29 -31.108)" font-size="100.219" text-anchor="middle" fill="none" stroke-width="6" font-family="Ubuntu"/><path style="-inkscape-font-specification:Ubuntu" d="M81.725 81.472c0 11.02-4.99 16.03-15.97 16.03s-15.972-5.01-15.972-16.03V57.43h7.985V81.47c0 7.013 1 8.014 7.986 8.014 6.987 0 7.986-1 7.986-8.014V57.43h7.985z" font-family="Ubuntu" stroke="none" transform="scale(1.0018 .9982)" font-size="73.201" fill="#fff" stroke-width="2"/></g></svg>
  </dd>
  <dd>
    <p>uBlock Origin is another browser plugin that blocks many different types
    of trackers, including ads. It is open source and run by a group of
    volunteers, and has the advantage of running on all major desktop and
    Android browsers (again, if you're looking for iOS, see below).</p>

    <p>The downside to this plugin is it's a bit harder to install, and
    while offering a lot more bells a whistles, is harder to configure than
    Privacy Badger.</p>

    <p>Note that there is another plugin confusingly named uBlock, which has
    nothing to do with uBlock Origin. Use uBlock Origin.</p>
  </dd>

  <dt><a href="https://itunes.apple.com/us/app/firefox-focus-privacy-browser/id1055677337?mt=8">Firefox Focus</a></dt>
  <dd>
    <img src="/images/firefox-focus.jpg" alt="Firefox Focus Logo">
  </dd>
  <dd>
    <p>If you have an iPhone, Firefox Focus is hands down my recommended
    ad/tracking blocker.</p>

    <p>Run by the non-profit Mozilla Foundation, Firefox Focus is both a <a
    href="{{< relref "#2-private-browsing-is-not-really-private" >}}">private
    browser</a> by default (but see above), and ad/tracking blocker.</p>

    <p>While the private browsing is nice, the blocker is the real reason to
    download. Even if you don't use the Firefox Focus browser itself, the
    blocker can be integrated into Safari, so you won't have to change your
    browsing habits.</p>
  </dd>
</dl>


#### Won't ad/tracking blocking hurt businesses?

No. Believe in American business. Why is it all of a sudden your responsibility?
Guilt?

### X. Secure website connections

* HTTPS concepts
* How to check
* HTTPS everywhere


### X. Messaging

* Signal
* Email is public


### X. Tape your camera

If you haven't heard of this, it must sound strange. But yes, tape your laptop
and phone camera, and open Skype or Photo Booth to make sure you can't see
anything through the lens. Why?

It's easier to attack your camera than it is to get into the rest of your
computer, and it's a popular method of information gathering. If an attacker got
in, it would be very hard to detect, since they could keep the camera light off,
even while recording.

But what could an attacker do with video from your camera, other than blackmail
you with footage of you whacking it to your vintage *My Little Pony* collection?
(That's a callback to the [first article]({{< relref "article/security-vs-privacy-on-the-internet.md" >}}),
new folks) You can't be sure until it happens, but
there's usually lots of identifying information about you that an attacker could
use, and they can just wait until the piece they need comes in view.

Before you get too scared, this type of attack would have be targeted at you
specifically, so it is much less likely to happen. However, the fallout from
such an attack is enormous, and the solve is so cheap and easy, it's really a no
brainier. If [Mark Zuckerberg][mark-tapes] and [FBI director][fbi-tapes] James
Comey both do it, you might as well, too.


### X. Location masking

* VPN
* Tor


### X. Paid alternatives

Paid alternatives to popular services.


## Why the stakes are higher in a Trump administration

* Obama was no saint when it comes to security
* Trump's pick for internet is real anti-free internet


## Resources

The Note to Self podcast has a really great, interactive series on taking back
your online privacy.

* [Note to Self](http://www.wnyc.org/story/privacy-paradox-launch/)
* [Online Safety](http://chayn.co/safety/)
* [Terms of Service; Don't Read](https://tosdr.org/)
* [Panopticlick](https://panopticlick.eff.org/)
* [You Think You Have Nothing to Hide? Think Again](https://tutanota.com/blog/posts/nothing-to-hide)
* [The Electronic Frontier Foundation](https://www.eff.org)
* [Do Not Track](http://donottrack.us)

## Questions

Some paragraph on this.


## Wrapping up

I'd like to take a moment to thank Ania Stypulkowski, who has provided all the
lovely artwork you've seen throughout these posts. Please visit her interwebs places.
