+++
date = "2017-04-29T21:18:39-05:00"
title = "Practical Internet Privacy"
subtitle = "Privacy: It Matters"
toc = true
topics = [
  "Privacy"
]
categories = [
  "Tech"
]
draft = false
+++

Welcome, Internet folks! If you've been following along, this is the final post
in my [three]({{< relref "/article/security-vs-privacy-on-the-internet.md" >}})
[part]({{< relref "/article/practical-internet-security.md" >}}) series on basic
Internet security and privacy. In this article, we're going to get into improving
and---just as importantly---*understanding* Internet privacy.

<!--more-->

If you're unsure about what privacy on the Internet is, please read my first
article in this series, [Security vs Privacy on the Internet]({{< relref "/article/security-vs-privacy-on-the-internet.md" >}}).

**A word of warning**: as the third and final chapter of this series, it is also
the longest and least focused. This "cram-it-all-in-part-three" approach will be
familiar to anyone who watched *The Lord of the Rings: The Return Of the King*.
While this article is similar to that movie in almost every respect, I will try
to keep false-endings and ghost armies to a minimum.

{{< figure src="/images/ghost-army.jpg" alt="Ghost army from The Lord of The Rings: Return of the King" caption="Ghosts are green." >}}

## TL;DR

Don't have time to read a long-ass article? Skip straight to the [collected
resources]({{< relref "#resources" >}}).


## Why privacy matters

Why should you care about Internet privacy? Unless you've been burned by your
loose digital info, it's hard to feel like it's important.
Especially when ignoring it is so easy and rewarding: you get real benefits from
the services you surrender your data to.

However, there is also real harm that comes from lack of privacy. Even if you
think you have nothing to hide, [you probably don't mean that](https://tutanota.com/blog/posts/nothing-to-hide).

{{< figure src="/images/data.jpg" alt="Data cat" attr="Image credit: Ania Stypulkowski" >}}

If nothing else, much of the personally identifying information collected about
you is done invisibly. That disenfranchises you, the user, by removing
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



### 2. Behavior tracking

Almost every website contains hidden code that tracks your interactions,
collecting an incredible amount of personal data. For example, the most
popular web analytics tool by far, Google Analytics, collects all your usage
habits from across *every site it is installed* to create a centralized profile
of who you are and what you like.

{{< figure src="/images/blocker.jpg" alt="Ad blocker cat" attr="Image credit: Ania Stypulkowski" >}}

The only way to prevent this type of data collection is a good blocker. A
blocker can also give you insight into what types of scripts are trying to
track you, shining a light on the previously hidden.


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

    <p>However, it is only available for Chrome and Firefox, on desktop and Android.
    If you use a different browser, see the below options.</p>

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
    Android browsers.</p>

    <p>The downside to this plugin is that it's interface isn't as simple as
    Privacy Badger's.</p>

    <p>Note that there is another plugin confusingly named uBlock, which has
    nothing to do with uBlock Origin. Use uBlock Origin.</p>

    <p>Because they are a little buried, here's the download links for <a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm">Chrome</a>,
    <a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/">Firefox</a>, <a href="https://www.microsoft.com/en-us/store/p/app/9nblggh444l4">Edge</a>, and <a href="https://github.com/el1t/uBlock-Safari/releases">Safari</a>.</p>
  </dd>

  <dt><a href="https://itunes.apple.com/us/app/firefox-focus-privacy-browser/id1055677337?mt=8">Firefox Focus</a></dt>
  <dd>
    <img src="/images/firefox-focus.jpg" alt="Firefox Focus Logo">
  </dd>
  <dd>
    <p>For iOS, Firefox Focus is hands down my recommended blocker.</p>

    <p>Run by the non-profit Mozilla Foundation, Firefox Focus is both a <a
    href="{{< relref "#2-private-browsing-is-not-really-private" >}}">private
    browser</a> by default (but see above), and ad/tracking blocker.</p>

    <p>While the private browsing is nice, the blocker is the real reason to
    download. Even if you don't use the Firefox Focus browser itself, the
    blocker can be integrated into Safari, so you won't have to change your
    browsing habits.</p>
  </dd>
</dl>


#### Won't blocking hurt businesses?

Yes and no.

Yes, in the short term, blocking ads will hurt a business's bottom
line. However, the tech industry is a place where failing to innovate is a death
sentence. If a company cannot adapt to shifting user demands (in this case, not
being tracked), they weren't going to make it much longer, anyway.


### 3. Private browsing is not really private

That's right, the private browsing, or incognito mode, in your browser isn't
really private. What is this foul deception, you cry? Have you been *lied* to?
Not really, but the name only tells part of the story.

{{< figure class="align-right" src="/images/incognitomode.jpg" alt="Incognito cat" attr="Image credit: Ania Stypulkowski" >}}

Private browsing does not record history, and has a separate database for
cookies and other web storage. This does *not* prevent your data from being
collected by outside parties. It just means other people who use that same
browser on that same computer won't be able to see what sites you've visited.


### 4. Secure website connections

A quickly growing number of websites use an encrypted connection, what's called
HTTPS. This makes it very difficult for someone to snoop on the data you send
back and forth from your browser to a website while it's in transit.

Many browsers (but not IE/Edge and Safari) display a lock icon when the
connection uses HTTPS.

While not all websites support HTTPS on every page, you can force HTTPS by using
a browser plugin called [HTTPS
Everywhere](https://www.eff.org/https-everywhere).

HTTPS deals only with connections, so while it protects your data while it's
being sent, it's encryption ends once your data reaches it's destination (either
your computer or the server). While you at least have control over your own
device, you need to trust the site your sending your data to that they are
protecting your data properly.


### 4. Messaging

Have something sensitive you want to send, like a credit card number, or your
old live journals? [Don't use email](http://www.digitaltrends.com/computing/can-email-ever-be-secure/);
it's the Internet equivalent of sky-writing. Not to mention, popular email
solutions like Gmail read all your email to build a consumer profile on you to
deliver to buyers and governments.

{{< figure src="/images/opensource.jpg" alt="Open source cat" attr="Image credit: Ania Stypulkowski" >}}

Instead, use a encrypted messaging platform. The most secure at the time of this
writing is an application called [Signal](https://whispersystems.org/), which
comes highly recommended. Signal is run by a non-profit, and uses open source,
regularly audited security practices.

WhatsApp is also a fairly good alternative, and it actually uses some of
Signal's technology under the hood. However, it's not a private as Signal, as
WhatsApp shares some data with it's parent Facebook.


### 5. Be careful on public wifi

Free public Wifi usually is free because they track everything you do on them
and then sell that information. Library networks are also monitored by the FBI.
Unless you subscribe to a VPN or use the Tor browser, don't do anything on a
public Wifi network you don't want every corporation to know. Yeah, even that
one you hate. You know the one.

{{< figure src="/images/publicwifi.jpg" alt="Public Wifi cat" attr="Image credit: Ania Stypulkowski" >}}


## Resources

* [Note to Self](http://www.wnyc.org/story/privacy-paradox-launch/)
* [Online Safety](http://chayn.co/safety/)
* [Terms of Service; Don't Read](https://tosdr.org/)
* [Panopticlick](https://panopticlick.eff.org/)
* [You Think You Have Nothing to Hide? Think Again](https://tutanota.com/blog/posts/nothing-to-hide)
* [The Electronic Frontier Foundation](https://www.eff.org)
* [Do Not Track](http://donottrack.us)
* [Signal](https://whispersystems.org/)


## Questions

If you have any questions on any of this, please don't hesitate to reach out to
me on any of the [social networks I use]({{< relref "/page/about.md#i-m-technically-social" >}}).


## Wrapping up

I'd like to take a moment to thank Ania Stypulkowski, who has provided all the
lovely artwork you've seen throughout these posts. Please visit her interwebs places.

**Surprise!**

:ghost: :ghost: :ghost: :ghost: :ghost: :ghost: :ghost: :ghost: :ghost: :ghost:

Ghost army.
