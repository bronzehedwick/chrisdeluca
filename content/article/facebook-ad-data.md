+++
title = "My Facebook Ad Data"
date = 2019-03-17T17:09:34-04:00
publishDate = 2019-03-18T09:00:00
draft = false
subtitle = ""
categories = [ "Tech" ]
topics = [ "Facebook", "Privacy" ]
toc = false
styles = []
+++

Today I downloaded all the data Facebook has on me, and started poking
through it. Since it's been the focus of every privacy scandal, I went
straight to the ad data. I found two items.

<!--more-->

1. My ad "interests", a simple keyword list
2. A file called `advertisers_who_uploaded_a_contact_list_with_your_information.json`

Now, Facebook made more than [4 billion dollars last
year][facebook-profit], and their business model is built entirely on
[selling user behavior to advertisers][facebook-business-model], so it
seems impossible that not only is this all the data they have on me, but
that it's also this simplistic. Be that as it may, let's take it at face
value.

## My "interests"

There are 39 "topics" that Facebook has identified as one of my
interests. I've been on Facebook since 2010, but was never a heavy user,
and have cut back significantly in the past several years, so the data
is pleasantly skewed.

Here's the whole list.

1. Alternative dance
2. Alternative rock
3. American Gods (TV series)
4. Arts and music
5. Batman Begins
6. Blues rock
7. British blues
8. Casual game
9. Chillwave
10. Cillian Murphy
11. Cream (band)
12. Deathwish Inc.
13. Decorative arts
14. Dunce
15. Dune (novel)
16. Dungeons & Dragons
17. Emo (music)
18. Facebook
19. Folk art
20. Folk rock
21. Frank Herbert
22. Future (rapper)
23. Games
24. Glidden (paints)
25. Grunge
26. Hardcore punk
27. Hong Kong
28. Humans of New York
29. Indie rock
30. Ken Watanabe
31. Led Zeppelin
32. Mannequin
33. Paper
34. Pop music
35. Professional wrestling match types
36. Rock music
37. Studio
38. Tom Wilkinson
39. Wally Pfister

Without giving too much away (because why give advertisers a handout?),
I'd say I have a genuine interest in about half the listed topics, which
is honestly a pretty good (for them) error rate for the kind of dragnet
campaigns advertisers run on the web.

Yet some of these keywords are bonkers. Like "Studio". Studio? What ad
exec in their right mind wakes up and says, "You know who we need to
target? People with a keen interest in 'Studio'."

Here be the glories of the algorithm.

## The uploaded contact list

There are 1,349 "advertisers who uploaded a contact list with your
information." There's no indication on how many times this data was
uploaded, or where it was uploaded, or even what data was uploaded. It's
just a list of companies.

Some of the companies I recognize, like Airbnb and AARP (zing?), and
others I had to look up, like Ebates and ConversioBot (A shady cash loan
service and a shady chat bot service, respectively).

And some companies seemed to want to *really* cover their bases, like:

1. Toyota Escondido
2. Toyota Hawaii
3. Toyota Marin
4. Toyota of Bedford
5. Toyota Of Berkeley
6. Toyota of Braintree
7. Toyota of Cedar Park
8. Toyota of Dallas
9. Toyota of Des Moines
10. Toyota of Dothan
11. Toyota of Easley
12. Toyota of Fayetteville
13. Toyota of Fort Worth
14. Toyota of Hackensack
15. Toyota of Hollywood
16. Toyota of Irving
17. Toyota of Massapequa
18. Toyota of Melbourne
19. Toyota of Nashua
20. Toyota of Pharr
21. Toyota of Redlands
22. Toyota of Scranton
23. Toyota of Southern Maryland
24. Toyota of Stamford
25. Toyota of Surprise
26. Toyota of Tampa Bay
27. Toyota of Terre Haute
28. Toyota of Turnersville
29. Toyota of Wallingford
30. Toyota of York
31. Toyota Santa Monica
32. Toyota South

I sifted through the companies looking for anything overtly
political, since that's the [*really* big focus of Facebook's
scandals][facebook-election-meddling]. All I found was a single, lonely
company:

1. Conservative Party of New York State

I'm not entirely sure how I feel about it, but I can pretty safely say
they're barking up the wrong tree.

But remember, this data isn't just mine (as much as any of this data is
ours). It's yours, too, because these data talks about where I showed up
in a contact list, which includes however many other people.

Scary? Don't worry, things feel so much better from behind the wheel of
a brand new Toyota!

[facebook-profit]: https://www.theguardian.com/technology/2018/jan/31/facebook-profit-mark-zuckerberg
[facebook-business-model]: https://www.forbes.com/sites/lensherman/2018/04/16/why-facebook-will-never-change-its-business-model/#4dabf49864a7
[facebook-election-meddling]: https://theintercept.com/2018/03/14/facebook-election-meddling/
