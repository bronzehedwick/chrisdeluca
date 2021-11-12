+++
title = "Hand Drawn SVGs"
date = 2021-11-07T14:11:50-05:00
draft = false
subtitle = "An inperfect process in progress"
categories = ["Tech"]
topics = ["art"]
toc = false
styles = []
syndicated = []
+++

I've been trying to get a good workflow for drawing vector artwork that
has the spontaneity and roughness of hand drawn images.

<!--more-->

Since my digital medium of choice is the web, that means SVG is the only
output format in town. Which is perfect, since like everybody, I never
liked choice anyway.

There's some [interesting experiments][svg-pencil-effect] with giving
programmatically drawn SVGs a hand drawn quality, but I want to have the
artistic freedoms that come with actually drawing the images by hand,
not just the feel of being hand drawn.

All I need is a drawing program, and that's where everything falls
apart. In my experience, there's no drawing tool that combines the
expressiveness of drawing freehand that also natively handles SVG, or
even reliably outputs it.

Sure, Inkscape and Illustrator provide a lot of power, but they feel
more like drafting tools, not drawing tools.

I want the experience of drawing something free-hand, without
constraints or planning or thinking about the geometry.

The situation has me pining for the bad old days of Macromedia Flash,
which, everything else aside, still had the best vector drawing tool
for my money.

You could draw all the regular geometry that modern apps offer, but you
could also draw free hand. If you drew a closed shape free hand, the
tool would recognize the shape, allowing you to apply transforms or
color it in with a click.

the drawing
tools for SVGs do not have the same expressiveness.

Yet as much as I look back at the Flash drawing tool with rose-colored
glasses, I can't say it was perfect, either. For one, you had to draw
with a mouse, since this was before the days of good, relatively cheap
touch screens. That made the "free-hand" not quite free; mouse-hand,
more like. The lines didn't look the same.

Now I have access to a iPad with a pen, so I could draw my lines
there, then convert them to SVG. In fact, that feature is built into
several popular drawing applications. But, being curious and a software
developer, I decided to try a workflow that was at the same time more
low tech and involving more command line.

The workflow I tested: I started by drawing the image traditionally,
with a pencil on paper, then, after my sweet process was complete, ended
up with a full color SVG.

I started by drawing a lot of doodles using a drawing pencil and a
"light touch". What I mean by light touch is that I tried not to bore
down on the pencil stroke, and keep my lines light and "exploratory",
as my wife put it. This let me keep figuring out the drawing as I drew,
without being married to anything other than my wife. I kept my doodles
unrelated, just drawing whatever I felt my lines were creating already.

Once I was happy with that, I used one of my wife's fancy inking pens
to make a clear, dark line over my pencil strokes. The pencil was still
visible underneath the ink, but there's no mistaking where the "real"
line is.

I took that drawing, and photographed it on my iPhone 7 camera with
as bright light as I could manage. In fact, it's the same image (at a
higher resolution) as seen below.

I took that image and copied it to my Mac Mini, then into Acorn, which
is a streamlined, Mac-centric version of Photoshop that I find easier
to use. I adjusted the color levels to omit as many of the smudgy greys
from the paper and the pencil strokes as possible, while keeping the ink
lines relatively dark. Then, I switched the graphic to black and white,
as distinct from gray scale; every color is either black or white. I
played with those "sharpness" levels until all the remaining pencil
lines were white, and the ink lines were pure black. I saved the result,
below, as a `.bmp` file, for reasons that will become momentarily
apparent.

Remember that big `.bmp` mystery from just now? I mean, why
save it as such an archaic file type? Because a) it's an
uncompressed image type, and b) and most importantly, that's what
[Potrace](https://en.wikipedia.org/wiki/Potrace), the bitmap to vector
conversion tool expects (it can also ingest `.pnm` files as well, but
honestly I have no idea what those are and I haven't been bothered to
look them up).

Potrace is an open source tool used at the command line, that is also
part of other commercial and non-commercial software, such as the afore
mentioned Inkscape. I actively enjoy the command line, so I don't mind
the "unglamorous" interface. I told the program to output SVGs (it can
also do EPS and Postscript), and it worked flawlessly. It only operates
on black and white images, but I already knew that so everything was
going just fine.

    potrace --backend svg my-image.bmp --output my-image.svg

[svg-pencil-effect]: https://heredragonsabound.blogspot.com/2020/02/creating-pencil-effect-in-svg.html
