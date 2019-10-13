+++
title = "Learning Javascript Design Patterns"
subtitle = ""
date = 2019-10-12T12:58:29-04:00
draft = false
author = "Addy Osmani"
genre = ""
toc = true

[read]
  start = 2019-10-12T12:58:29-04:00
  end = ""
+++

## 2. What Is a Pattern?

> Patterns don’t solve all design problems, nor do they replace good software
> designers, however, they do support them.

Patterns support good developers. The next question is, what makes a
good dev? Seems squishy but extremely important.

> Patterns add to a developers vocabulary, which makes communication faster.

This is a great maybe hidden benefit. Communication between developers
is paramount. The next question is, for those who are not familiar with
the same patterns, how do you communicate them? Very context specific.

## We Already Use Patterns Every Day

> It’s actually the third option by a factor of 8 to 10 times the
> alternatives.

`getElementsByClassName` is faster than `querySelectorAll` by a factor
of 8–10.

## “Pattern”-ity Testing, Proto-Patterns, and the Rule of Three

> …patterns generally focus on addressing a visually identifiable
> structure—i.e., we should be able to visually depict the structure that
> results from the pattern in practice.

Interesting. I’m not sure I quite grasp this yet, but it makes sense at
a high level. Use a pattern (something abstract) to generalize something
that is visually concrete, so you’re not putting an abstraction on top
of an abstraction. At least that’s my takeaway. Could be making my own
assumptions.

> “proto-pattern”: a pattern that has not yet been known to pass the “pattern”-ity tests.

50 pages in and we’ve got our first sex joke. Good to know what a proto
pattern is tho. A pattern that has not been tested. Couches in the
language of Mory Povich.

> Alternatively, the individual(s) sharing the pattern may not have the time
> or interest of going through the “pattern”-ity process and might release a
> short description of their proto-pattern instead. Brief descriptions or
> snippets of this type of pattern are known as patlets.

Patlets? Weird. Is there some formal pattern naming body? Why is this so
formal, and so silly?

> Patterns are not supposed to just capture principles or strategies. They
> need to capture solutions.

Patterns capture solutions, not principles.

> …design patterns usually provide solutions to problems indirectly…

This is necessary to solve more challenging problems. Not sure how that
relates yet. Probably need a more concrete example first.

> Describes a proven concept.

Patterns must be proven. This makes inherent sense. You can’t fly by
speculation. I guess this needs to be stated, since were in the business
of taking the guesswork out of things.

> Describes a relationship. In some cases, it may appear that a pattern
> describes a type of module. […]

This is incomprehensible to me. So many vague terms that I don’t know
the definition of in this context.

> Many proto-patterns are actually quite good.

Some examples of a pattern vs a proto pattern would be useful. I know
there will be bone fide patterns, since that’s in the name, but I’m
hoping for some proto patterns examples later on in the book.

> One of additional requirement for a pattern to be valid is that it display
> some recurring phenomenon.

Makes sense. You can’t make a pattern (something inherently repeatable)
from a one off thing.

## The Structure of a Design Pattern

> [A pattern needs] A context. A system of forces that arises in that
> context. A configuration that allows these forces to resolve themselves in
> context

This is entirely too abstract to extract any meaning from at this point.
Hoping for more examples to make this concrete.

## Writing Design Patterns

> …we should consider writing down some of the aspects of the code that we
> believe fall under a pattern…

Take notes about code that might fall into a pattern. Write down which
patterns it might apply in.

> [Patterns] are primarily there to serve the developers using them and should not force changes to behavior in the user experience that would not be incurred without the use of a pattern.

Patterns serve developers, and should not change end users experience.

---

All Excerpts From

_Osmani, Addy. “Learning JavaScript Design Patterns.” O’Reilly Media, 2012-07-08. Apple Books._

This material may be protected by copyright.
