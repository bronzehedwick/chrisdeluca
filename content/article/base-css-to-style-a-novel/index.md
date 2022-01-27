+++
title = "Base CSS to Style a Novel"
date = 2022-01-26T19:09:39-05:00
draft = false
subtitle = ""
categories = ["Tech"]
topics = ["css"]
toc = false
styles = ["syntax"]
syndicated = []
+++

I'm working on a short novel, which got me thinking about typesetting
(naturally). There's as many ways to style a book as there are a webpage
[citation needed], but there's rules and conventions just the same. I'm
a web developer by trade, so I decided to try my hand at styling a novel
in CSS.

<!--more-->

Here, then, is my attempt at a minimal, base stylesheet that captures
many standard print conventions. The goal here is to have something that
looks good out of the box, is a solid base to build on top of if need
be, and most importantly, looks like a novel.

Something pleasant I discovered is that browser defaults are largely
what you want for a novel, which is unsurprising when you think about
the history of the web platform starting in academia.

I've annotated my code with explanations for each rule, below;
you can <a download href="./documents/novel.css">download
a copy of the code here</a>, and you can see the [results in
Codepen](https://codepen.io/bronzehedwick/pen/xxPbPwX).

```css
/*! https://chrisdeluca.me/article/base-css-to-style-a-novel
    License: MIT
 */
body {
    /**
     * Starting with the hard stuff: fonts. I chose Palatino because it's a
     * classic serif font that's loaded on many systems by default. This would
     * be the first thing to change to customize the look and feel. The rest of
     * the rules are written using font-relative units, so changing the font
     * family here wont change the other sizing ratios.
     */
    font-family: Palatino, serif;
    /**
     * The standard base font size for print is 12pt, which equals 16px, the
     * browser default. I increased the value by 2 points since Palatino runs
     * small, so this should probably go back to 12pt if the font family is
     * different.
     */
    font-size: 14pt;
    /**
     * Increase the line height to 1.6 times the font size. The browser default is
     * much smaller, about 1.2 times the font size on desktop browsers, which
     * feels cramped—more like a textbook than a novel. The value 1.6 is
     * somewhat arbitrary, so play around with it, but do make sure the value
     * is unitless. See:
     * https://css-tricks.com/almanac/properties/l/line-height/#aa-unitless-line-heights
     */
    line-height: 1.6;
    /**
     * Novels are the definition of a long read, so I' doing everyone's eyes a
     * solid by optimizing for legibility, aka glyph clarity, rather than
     * render speed or correctness, which are either secondary or irrelevant,
     * depending on the medium.
     */
    text-rendering: optimizeLegibility;
    /**
     * Remove any top margin and center the content. Our headings will take
     * care of any needed vertical spacing, and making sure content is centered
     * is a nice win for readability on large browser windows.
     */
    margin: 0 auto;
    /**
     * The ideal line length for readability is, depending on the study you're
     * citing and the font, between 50–75 characters. I'm more or less
     * splitting the difference. I use the lesser known ch unit—equal to the
     * width of the font's "0" character—for horizontal spacing like this, as
     * it feels natural and is easy to reference without doing extra math.
     * Since the zero character is usually one of, if not the, widest character
     * in a font, the exact number of characters per line will be slightly more
     * than the given value, which is perfectly acceptable. I'm also setting
     * this as a max-width instead of a width, since we want our content to
     * wrap nicely if the screen size is smaller than the desired value, rather
     * than being cut off.
     */
    max-width: 65ch;
}

/**
 * Use the semantic <header> tag to mark up the title page. This text is always
 * centered, and, if we're outputting to printed media, we want this to be on
 * it's own page.
 */
header {
    text-align: center;
    break-after: page;
}

/**
 * Headings, aka for chapters or sections, should be spaced apart from all
 * other content, but should be closer to the content they define. For example,
 * the heading "Chapter 2" should be closer to the content of chapter 2 than to
 * chapter 1's content, to show its association. Setting these values in ems
 * lets us define all the headings in one sweepingly consistent declaration.
 */
h1, h2, h3, h4, h5, h6 {
    margin-top: 2em;
    margin-bottom: 1em;
}

/**
 * A new chapter should always start on a new page in printed media. Since the
 * title of the book would be an <h1>, I'm assuming only <h2>s are chapter
 * titles. Any heading below an <h2> would be a section title of some sort, and
 * not warrant a new page (and probably wouldn't appear in a novel, anyway,
 * being relegated to more formally structured content like textbooks).
 */
h2 {
    break-before: page;
}

/**
 * Browsers default to "web style" paragraph delineation, aka whitespace
 * between each one. Most books are not set this way, instead using text
 * indentation (see below). Get rid of that space between.
 */
p {
    margin: 0;
}

/**
 * "Book style" paragraph delineation uses indentation for each paragraph after
 * the first. Presumably, you don't need the indentation for the first
 * paragraph, since there's a chapter heading or whitespace or just not text
 * above it to indicate that what you're reading is, indeed, a paragraph. The
 * same is true for any other non-paragraph element, aka a list or an image.
 * Using the adjacent sibling combinator, we match every paragraph that follows
 * another paragraph, and add our text indent. This is conceptually different
 * but has the same effect here as giving every paragraph a text indent, and
 * then removing it for :first-of-type. For the indent itself, a value of about
 * two characters is pretty common in print, but occasionally I've seen four is
 * used as well.
 */
p + p {
    text-indent: 2ch;
}

/**
 * The horizontal rule element, now appropriately re-appropriated as the
 * thematic break element. Thematic breaks take many forms in different
 * printings—a plain horizontal line, a decorative, squiggly line, a glyph
 * that looks like a cross between a heart and a radish (this thing: ❧)—but
 * the most simple display, and one that will often be present even within
 * books that feature a fancy break as well, is plain old whitespace. We could
 * achieve this with empty paragraph tags, or a couple of <br> tags, but that's
 * not semantic, is hard to type in markdown, and makes me want to vomit.
 * We can do better.
 */
hr {
    border: none;
    margin-bottom: 2em;
}

/**
 * What if we want a "harder" thematic break than just plain whitespace? As
 * mentioned above, you'll see this in novels a fair amount, mixing both
 * whitespace and a visual thematic break. Again, airing on the side
 * of simplicity and commonness, I' using the "three stars" break, which is
 * three star symbols centered at a slightly larger font size. This could have
 * been implemented with a class, but I opted for a data attribute so I could
 * only style <hr> elements (enforcing semantics) while not increasing the
 * specificity too much.
 */
hr[data-break="hard"] {
    /**
     * Increase the font size a bit, using ems to keep ratios consistent. A
     * visible thematic break should be, well, visible, and having it at the
     * same size as the text diminishes it somehow.
     */
    font-size: 1.25em;
    /**
     * Add spacing above and below. I set with ems, as this inherits the larger
     * font size we set above, giving this a little bit more room.
     */
    margin: 1em auto;
    /**
     * Browser defaults for the <hr> element are a grey color, receding the
     * content into the background, but we want our break to stand out (it's a
     * break after all), and we want it to work in print. Although this will
     * probably always be black, I use the currentColor keyword to pick up
     * whatever the text color is as future proofing (dark mode, anyone?)
     */
    color: currentColor;
    /**
     * Center that thematic break. The stars are added using pseudo content,
     * which default to inline display, so we don't need anything fancier than
     * text-align here.
     */
    text-align: center;
}

/**
 * Actually add the stars in, using pseudo content.
 */
hr[data-break="hard"]::before {
    content: "* * *";
}
```
