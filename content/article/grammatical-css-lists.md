+++
categories = ["Tech"]
date = "2017-04-25T20:10:19-04:00"
draft = false
subtitle = "Quick, specific styling tip"
title = "Grammatical CSS Lists"
toc = false
topics = [
  "CSS"
]
styles = ["syntax"]
+++



## The Situation

You have a list of items that you need to render with comma separation, and
an "and" at the end.

<!--more-->

For example:

`Cookies, rice, and farts`.

## The Problem

This display is traditionally done in business logic, creating
more complexity than this simple output warrants.

## The Solution

We can use pure CSS, using well supported pseudo-classes and pseudo-content.
Behold!

### HTML

```html
<ul class="list">
  <li class="item">Cookies</li>
  <li class="item">rice</li>
  <li class="item">farts</li>
</ul>
```

### CSS

```css
/* Boilerplate to inline the list. */
.item {
  list-style-type: none;
  display: inline-block;
}

/* Add a comma after each item. */
.item::after {
  content: ', ';
}

/* Add the word "and" between the last two items. */
.item:last-of-type::before {
  content: ' and ';
}

/* Remove the comma after the last item. */
.item:last-of-type::after {
  content: '';
}
```

## Takeaway

The beauty of this solution is that it's simple, idiomatic, and declarative,
and has the added benefit of taking a hard stand on oxford commas.

I use this solution here on this site for the "Topics" display. If it worked for
my little blog, it'll work for *anything* else![^1]

[^1]: The opinions expressed on my blog are not necessarily endorsed by me.

