---
categories:
  - Tech
tags:
  - jekyll
  - shell
date: '2014-09-01'
summary: Automatically create Jekyll file names and meta data.
title: Automating Jekyll Post Creation
url: /2014/09/01/automating-jekyll-post-creation
---


[Jekyll](http://jekyllrb.com/) is a tool for static site generation, and it's what powers [Github pages](https://pages.github.com/), both of which generate and host this site, respectively. It's a fantastic tool for hackers to create simple, and fast (see static site, above) blogs using minimal configuration, the [Liquid templating engine](http://docs.shopify.com/themes/liquid-documentation/basics) for layout, and [markdown](https://help.github.com/articles/markdown-basics) for posts.

I had previously used [Wordpress](wordpress.org) as my blogging platform of choice, like so many others, and came to Jekyll because of it's simplicity, it's speed, and it's hackability, not to mention that as a Github user, you are entitled to a free Jekyll (or static HTML) site hosted on their blazing fast setup.

One minor pain point for me, is when creating a new post in Jekyll, you need to create a new file in the following convention: `title-of-your-post-year-month-day.md`. In addition, each post needs some meta data at the top of the markdown file.

Now, this could all be typed out each time without too much time being eaten up, but we're programmers, damn it, so why do things manually when they can be reasonably automated? To the shell!

{{< highlight bash >}}
#!/bin/bash
# Create a new post for a Jekyll blog.

cd /path/to/your/jekyll/repo/_posts

FILETILE=$(echo "$1" | tr " " "-" | tr '[:upper:]' '[:lower:]')
POSTDATE=$(\date +"%Y-%m-%d")
POSTNAME=$POSTDATE-$FILETILE.md
POSTBODY="---
layout:     post
title:      $1
date:       $POSTDATE $(\date +"%H:%M:%S")
summary:
categories:
---"

cat <<EOF >> $POSTNAME
$POSTBODY
EOF

open "$POSTNAME"
{{< /highlight >}}

This code is also available as a [gist](https://gist.github.com/bronzehedwick/050aea1d3971552ff243).

To use the script, just [download](https://gist.githubusercontent.com/bronzehedwick/050aea1d3971552ff243/raw/88b04a56b48d8298a0dd2e3be98a3707c20cd804/new_post.sh) it, modify the path on the `cd /path/to/your/jekyll/repo/_posts` line to point to your Jekyll installation's `_posts` directory, and save the script somewhere in your `PATH`.

Now, if you saved the file as `new_post` for example, you can call it like, `new_post "My Sick Blog Post"`, and an appropriately named file with most of the meta data filled out will appear in your `_posts` directory.

Not only that, but it will immediately launch the default editor for markdown files, so you can start writing straight away!

Enjoy. <span class="icon-rebel"></span>
