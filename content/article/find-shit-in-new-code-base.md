+++
title = "Finding shit in a new code base"
date = 2013-08-07T22:58:22-04:00
draft = false
subtitle = ""
categories = [ "Tech" ]
topics = [ "drupal", "git" ]
toc = true
styles = []
+++

When a developer moves to a new company, one of the biggest transitions is adapting to the new code base. While most companies will be understanding of newcomers making their way into the rigorous complexities of unknown machine-speak, that slack isn't limitless, and it's important to understand the code quickly. It is, after all, the point of the developer's employment.

<!--more-->

However, understanding anything, much less all the working parts of a production level code base, takes time. You get there through practice; "front loading" your brain by reading all the code up front may work for some - and let me be clear, it certainly can't hurt - but for me, I only get a top-glaze of understanding. Real knowledge comes from doing. That is, working with the code.

But what happens when you are still building your knowledge of the code base, and you have to fix something? Or build a new feature? Or take something out? Thankfully, we work with computers, and we have many great tools at our disposal to quickly find the code we're looking for. And, as an added bonus, these tools can be used any time, even when you're not new. If that's not future proof, I don't know what is.

Spanfeller Group is a [Drupal](https://www.drupal.org/ "Drupal Content Management System") shop, so some of the examples are specific to that platform. We also use [git](http://git-scm.com "Fast version control") and mostly run Unix-like platforms (Mac, Linux), and all the examples use the Unix Command Line. If you're on Windows, I would highly suggest installing [cygwin](http://www.cygwin.com "Unix command line on Windows"). If the thought of using the command line gives you the creeps, I would humbly ask that you read one or two examples before running for the hills; you may have a change of heart. If not, the hills will always be there.

So without further adieu, let's dive into some killer ways to find what you're looking for, fast.

git grep
--------

Anyone who has been even briefly introduced to their inner CLI nerd probably knows about grep, the swiss army knife of searching within multiple text files. With a fairly straightforward invocation, you can search recursively through directories, and get line numbers to boot.

```sh
grep -rn [pattern] .
```

However, it's 2013, and we've made some serious progress as a file-searching society. Enter [git grep](http://git-scm.com/docs/git-grep "Light-speed file searching"). As you might think, it only works inside git repositories, but it has many distinct advantages over traditional grep. For starters, it's faster. A lot faster. Because it uses git's internal file index, searches are blisteringly speedy. It also does not search inside `.git` directories, or any patterns matched by `.gitignore` by default, which really cuts down on junk results. Also by default, git-grep is recursive, so you won't have to throw in an `-r` switch, and it comes with color results turned on, so you can more easily see you matches.

So to search your repository for a preprocess function called "mytheme\_preprocess\_node", you would run the following:

```sh
git grep -n "mytheme_preprocess_node"
```

The `-n` switch turns on line numbers for the search matches. To turn them on permanently, run this command from your terminal:

```sh
git config --global grep.lineNumber true
```

Now you can run the `git grep` command above without the `-n` switch, and still get line numbers. Some other useful switches are `-i`, which makes your search case insensitive, `-I`, which ignores binary files, and `-p`, which shows the function name of the match. This last example is smart, knowing if the match is the function name, or if the match is inside a function, and prints the information accordingly.

ack
---

`git grep` is great, but what if you need more flexibility? Or you need to find something outside of a git repo? You could go back to `grep`, or you could use [ack](http://beyondgrep.com "Better than grep"). Ack is grep, but built for programmers. Like `git grep`, it is recursive and uses colors by default, and also uses the [Perl regex engine](http://perldoc.perl.org/perlre.html "Syntax description for Perl regex"), which many people find more powerful and intuitive than the standard grep regex. It also ignores `.git`, `.svn`, `.hg` directories, and binary files, among other unwanted data that would normally be searched. While not quite as fast as git grep, it is still much faster than regular grep.

[Installing ack](http://beyondgrep.com/install/ "Official ack installation guide") is easy. You can install from [CPAN](http://search.cpan.org/dist/ack "Perl module"), through [Homebrew](http://mxcl.github.com/homebrew/ "The missing package manager for OS X") or MacPorts on the Mac, or through the package manager on major Linux distributions. A caveat for Debian and derivitive distributions (Ubuntu, Mint, etc), the package is called ack-grep, so to keep your fingers typing less, you can rename the package locally with this command:

```sh
sudo dpkg-divert --local --divert /usr/bin/ack --rename --add /usr/bin/ack-grep
```

Using ack is simple:

```sh
ack "mytheme_preprocess_node"
```

The results will be returned in color, separated by file, and with line numbers by default.

Unlike grep or git grep, ack searches work off of a file type white list, only searching the files that appear in that list. Ack ships with pretty sane defaults, including a wide range of programming languages. However, to tell it about Drupal-specific file types, as well as some relatively newer types such as sass (and python, for some reason), you'll need to do a little configuration. Nothing heavy, just copy the below into a new file, and save it as `.ackrc` in your home directory.

```sh
# Custom types and abbreviatinos.
--type-set=py=.py
--type-set=sass=.sass
--type-set=coffee=.coffee
--type-set=module=.module
--type-set=info=.info
--type-set=inc=.inc
```

You can follow that pattern for any new file types you may want to add. Just like git grep, you can add the `-i` switch to ignore case, and `-l` just prints the file names containing the matches. The one ack option I use the most without question, however, is the ability to limit search by file type. This is incredibly powerful. Frequently, I find myself needing to search for a CSS class I found in the source code, but I don't want style definitions, just where it's being printed in the template. No problem! Just use ack to filter out CSS results.

```sh
ack --no-css "myclass"
```

You can also limit your search to a single file type.

```sh
ack --type=css "myclass"
```

Saves me tons of time, all the time.

drush
-----

So far, we've focused solely on searching inside files, and while that's hugely important, it's hardly the whole story. This is where folks not running Drupal can tune out.

If you do work with Drupal, and aren't familiar with [drush](https://www.drupal.org/project/drush "Drupal command line tool"), you owe it to yourself to check it out. Most of it's extensive feature set is outside the scope of this post, but in very brief summery, drush is a tool to maintain and manipulate your Drupal installation from the command line.

To install on Unix-like systems, you can use pear.

```sh
pear channel-discover pear.drush.org
pear install drush/drush
```

On the Mac, you can also use Homebrew, and it is in many Linux distribution's package managers. There is also an installation guide [for Windows](http://drush.org/drush_windows_installer "Install drush on Windows").

Once you have drush installed, you can find valuable information about your Drupal instance with a few keystrokes. Navigate inside your Drupal installation (it doesn't matter where), and run:

```sh
drush st
```

That will give you a high-level view of your Drupal installation, including Drupal version, database information, and currently enabled theme.

How about if you need to find out what modules are installed? Normally, you would have to sift through the modules page, looking for enabled checkboxes. With drush, you can cut to the chase.

```sh
drush pml | ack "Enabled" | less
```

The `pml` parameter lists all the modules currently available, and piping it to ack sorts on all that are enabled. The final pipe to less just gives us a nice pager if are results are long. You can also sort on "Disabled" and "Not installed".

The sites at Spanfeller run a lot of modules, some of which we probably don't need. To get a count of how many modules are in the code base, I ran the following command:

```sh
drush pml | wc -l
```

Or, for only enabled modules:

```sh
drush pml | ack "Enabled" | wc -l
```

`wc` stands for "Word Count", and the `-l` parameter counts lines. Subtract 4 from the final result, since the drush output adds some lines for formatting and information. 

You can also get more detailed information about the modules you have in your code base quickly. Say you wanted to get information about the `views` module, you would run:

```sh
drush pmi views
```

For the module release information, use:

```sh
drush rl views
```

And for the module release notes, run:

```sh
drush rln views
```

One last convenient drush trick, is using it to connect to your database CLI. Say you've figured out all you can from the code, and you need to poke around in the database. Normally, you would `less` or `vi` the `settings.php` file, find the database details, then run your connection command. Something like `myusql -umyuser -pmypass mydatabasename`, for mysql.

With drush, you could run `drush st` to save you from manually looking at `settings.php`, but we can take it a step further.

```sh
drush sql-cli
```

Run that baby, and you will be automatically dropped into a sql command line using the credentials from `settings.php`. Pretty sweet, right?

Wrap it up
----------

That's about it. Hopefully these tips and tricks are useful to someone, and all the text-based command line goodness has convinced the GUI inclined of it's merits. If not, the hills are calling.
