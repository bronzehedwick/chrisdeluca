+++
date = "2017-02-09T19:30:58-05:00"
title = "Practical Internet Security"
subtitle = "Effective security measures for the uninitiated"
toc = true
topics = [
  "security"
]
categories = [
  "Tech"
]
+++

Welcome internet traveler, you've found your way to my guide on how to improve
your online security. Already feel confident in your security abilities? Then
get lost! I don't need that kind of arrogance around here, especially when I'm
trying to sound smart. The rest of you nice, humble people, read on.

<!--more-->

{{< figure src="/images/internetsecurity.jpg" attr="Image credit: Ania Stypulkowski" >}}

No discussion of security can be complete, so I have focused on the most common
threats that the majority of folks will encounter and easy and effective
solutions for them. However, despite what diet commercials tell us, nothing
worthwhile comes without effort. If you're serious about improving your
security, it will take at the very least some focus and attention.

## Article Series

This article is part of a series of posts dealing with internet security and
privacy. Collect 'em all! :bug:

1. [Security vs Privacy on the Internet]({{< relref "article/security-vs-privacy-on-the-internet.md" >}})
2. [Practical Internet Security]({{< relref "article/practical-internet-security.md" >}})
3. Practical Internet Privacy (forthcoming)

## Threat misconceptions

Are you a person? If so, chances are good that your idea of what's going to kick
your ass online is wrong. How's that for an introduction? Always lead with
insulting your audience, I always say (to an empty room).

But I digress.

Many folks implicitly believe that they just need to stay ahead of a sweaty
teenage anarchist who's real good at guessing passwords, and their accounts will
be safe. Or, if you're on the more paranoid side, you might think you need to
keep away from some shady hacker collective that has a personal vendetta against
*you*.

Both of these scenarios, and most likely that other one you're thinking of right
now, doesn't really happen much, if at all.
No one is sitting there guessing your password (no human, at least).

So what does happen?

## Common threats

The vast majority of the time, hacks to your online life come in three forms:

1. Automated scripts combing for weak passwords, in bulk.
2. A large site's database being hacked.
3. You're tricked into giving some dipstick access.

In the first two cases, the attacks rely on a high degree of automation, using a
<dfn title="Remember those?">computer</dfn> to randomly guess millions of
passwords until they find yours. Most passwords can be cracked in this way in
seconds. Attackers aren't targeting you specifically, instead hitting thousands,
millions, or even more than millions of accounts at once. Even in the third
case, the attacker is trying countless people with the same trick, looking for
that perfect sap. Yes, even when you get hacked, you're just a number.

If you already knew that, please see my introductory paragraph (geez).

## Improving your security

Okay, here it is, what you've been waiting for: actual steps to make your
digital life more secure. Before we dive in, a few words on how to implement
these new strategies, taken from experience.

I recommend making improvements incrementally, strategy by strategy, account by
account. It can be tempting to try to "solve" security all at once, however this
approach is usually overwhelming, and lots of times leads to burn out.
Ultimately, this leads to less security, not more.

A more measured, incremental approach is many times more successful, and more
accurately reflects that security isn't an end-goal, but rather a continuing
process. Thems the breaks.

### 1. Two factor authentication

Two factor authentication just might be the biggest bang for the buck in terms
of boosting your internet security.

Two factor authentication is an additional layer of security on top of your
password. It works by requiring a code sent to another device---like
your phone---via text, an app, or voodoo magic (still in beta). This code
regenerates every few minutes, making it very hard to hack without your second
device.

This means that if an attacker cracks your password, they still need to get that
time-sensitive code from your phone to get into your account. This is usually a
big enough deterrent that the attacker stops right there.

Many popular sites support two factor authentication, but you might want to
start with the biggest ones, and any site that handles your money.

The big tech giants all offer comprehensive guides on how to setup two factor on
their platform, the links for which are listed below, because I'm nice.

* [Google](https://www.google.com/landing/2step/)
* [Facebook](https://www.facebook.com/note.php?note_id=10150172618258920)
* [Apple](https://support.apple.com/en-us/HT204915)
* [Microsoft](https://support.office.com/en-us/article/Set-up-multi-factor-authentication-for-Office-365-users-8f0454b2-f51a-4d9c-bcde-2c48e41621c6)
* [Amazon](https://www.amazon.com/gp/help/customer/display.html?nodeId=201962420)
* [Twitter](https://blog.twitter.com/2013/getting-started-with-login-verification)

You can see an extensive list of services that provide two factor authentication over at
[twofactorauth.org](https://twofactorauth.org/).

### 2. Passwords

Admit it, your password sucks. It uses words from the dictionary, doesn't use
special characters, and is just your social security number. Well, good news;
you're not alone.

A data analysis company, SplashData, reviews publicly leaked databases for the
most popular passwords every year, and every year, there's a common trend. See if
you can spot it. Here's the top five of 2016:

1. 123456
2. password
3. 12345
4. 12345678
5. qwerty

Yep, they're all terrible. And lazy. And can be cracked instantly. Why?
Partially because they're simple for a computer to guess, but mostly because
they're public knowledge to attackers, too. Their programs can guess these first.

The problem is, a strong password that takes way too long for a computer to
guess for it to be worth it for a hacker (think years), is really hard for a
human to remember. So what's the solution, other than replacing passwords which
will happen but not for a while?

#### Password manager

I can hear the groans already.

"I don't wanna use a password manager, it's so much woooork!" You scream
hypothetically, writhing in privilege.

"Besides," you whine, "I already turned on two factor authentication, I'm fine!"

Well, congratulations, person-I-made-up-for-convenience, for turning on two
factor authentication, but if two factor is the only thing you have reasonably
protecting your account, it's only single factor authentication, which defeats
the purpose. Passwords, however unfortunately, still matter.

{{< figure src="/images/passwordmanager.jpg" attr="Image credit: Ania Stypulkowski" >}}

How do password managers improve your security? They leverage the same thing
attackers use to crack your accounts to protect them: a computer. Can't
remember 200 unique and secure passwords for all your online accounts? I don't
blame you. So let the computer do what it does best: hard, boring crap humans
are bad at. Like generating and remembering lots of passwords.

* [Last Pass](https://www.lastpass.com/) has a free tier, and is only $12 a year
for all the features (syncing to multiple devices and such), so it's pretty
affordable.
* [Dash Lane](http://dashlane.com/), while more expensive, offers a smoother user
experience, from all accounts.
* For the more adventurous and cost concious, there's the free and open source
[Keepass](http://keepass.info/).
* If you're a hacker, go ahead and use [Passwordstore](https://www.passwordstore.org/).

#### Improving passwords

Don't want to take the plunge into a password manager, or want to know how to
write a better password for your password manager? There are many different
strategies out there, but the one that is the most human-friendly while
balencing strong security is not using a pass*word* at all, but rather a
pass*phrase*.

A passphrase is just what it sounds like, a whole sentence instead of a word.
While longer than a password, they're easier for a human to remember than some
random string of characters, and many times easier even than a bad password.
We think in sentences, not in individual words.

It should be pretty long, and, if you can manager it, contain upper and lower
case letter, numbers and special characters, but it can be more natural to
remember.

For your next password, instead of something like, `password`, try
something like, `This is my really gr8t passphrase, you weirdo goof balls!`[^1]

### 3. Knowledge is power

Think you've been the victim of a hack? Suspicious that your private details
might be leaked to the general public? Read this far and are somehow not
concerned about this?

Regardless, how can you really be sure if you have been hacked, or which
accounts have been broken into? That's where a very useful personal project by a
Microsoft engineer comes in handy: [Have I been Pwned](https://haveibeenpwned.com/).

The site searches through all the publicly leaked databases from big sites that
have been hacked. You just enter your email address, and it will come back with
all the compromised sites that that email appears in.
In all likelihood, there will be multiple results (there were around 9 for me).

This should give you a better idea what passwords to change first.

You can even sign up for email alerts if your email address is found in future
data breaches. It's all around a great service, and it's free (although the
author accept donations).

Please note that this site does *not* hack sites, it just aggregates data that
has already been publicly leaked. As such, it is very ethical, but also will not
know about a security breach that isn't publicly available, which can sometimes
take years after the event itself.

### 4. Update your software

Software developers and attackers are in a constant arms race to find holes in
software, and depending on which side you're on, plug them or poke through them.
In that way, it's a lot like the E.R., except in addition to the doctor patching
victims up, there's another guy poking their wounds. Not my best analogy, I
admit.

Anyway, it's important to stay on top of software updates to your operating
system (Windows, macOS), and your other installed applications. Luckily, this is
now pretty painless. Just click the button. Yay, you won!

### 5. Check the URL

The last important thing to do to improve your security is to be careful of
being tricked into giving up your account information.

There are countless scams out there, and many of them are easy to see through,
like a message from someone you don't know asking for your login to help their
sick grandpa (somehow, someone keeps falling for this kind of stuff...).

However, some scams have become more sophisticated, usually masquerading as a
legitimate source, like Google or your Uncle Steve. Sometimes, it's easy to
tell, like if they outright ask for your password (a Google or an Uncle Steve
would never do this), but others are trickier.

{{< figure src="/images/scams.jpg" attr="Image credit: Ania Stypulkowski" >}}

One scam going around was a page that looked exactly like the Google login page,
which tricked users into entering their password and even their two factor
authentication code to a malicious dingwad. How can you tell the difference?

Consider these safe examples:

1. `https://www.google.com`
2. `https://whoops.google.com`

And these unsafe examples:

1. `https://google.whoops.com`
2. `https://whoops.com/google`

What makes them different?

Any words coming *before* the domain you expect, in this case, `google`, separated
by dots, is a <dfn title='"...a subdomain is a domain that is a part of a main domain." - Wikipedia'>subdomain</dfn>, and is owned by the same company
that owns the domain (e.g. `google`). The domain is the word that comes right
before the <dfn title='"A top-level domain (TLD) is one of the domains at the highest level in the hierarchical Domain Name System of the Internet." - Wikipedia'>top-level domain</dfn>, e.g. `.com`, `.net`, or `.pizzarat`. Using this logic, we can highlight the main domain in each of our examples.

Highlighted safe examples:

1. <code>https\://www.<mark>google</mark>.com</code>
2. <code>https\://whoops.<mark>google</mark>.com</code>

Highlighted unsafe examples:

1. <code>https\://google.<mark>whoops</mark>.com</code>
2. <code>https\://<mark>whoops</mark>.com/google</code>

And voilà! Now you too can play Whoops vs Google! It's great at parties.

## Questions

Perfect! That means you don't already know all this stuff, and I stand a good
chance of sounding smart.

I don't host comments on this site, but feel free to contact me from the social
media networks listed via the icons below, or on my [about page]({{< relref "page/about.md" >}}).

[^1]: Obviously, don't actually use this passphrase.
[mark-tapes]: https://www.nytimes.com/2016/06/23/technology/personaltech/mark-zuckerberg-covers-his-laptop-camera-you-should-consider-it-too.html?_r=0
[fbi-tapes]: http://www.npr.org/sections/thetwo-way/2016/04/08/473548674/why-the-fbi-director-puts-tape-over-his-webcam
