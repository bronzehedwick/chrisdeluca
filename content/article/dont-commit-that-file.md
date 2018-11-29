+++
title = "Don't commit that file!"
date = 2018-11-28T20:05:36-05:00
draft = false
subtitle = " A git hooks story"
categories = [ "Tech" ]
topics = [ "git" ]
toc = false
styles = []
+++

I wrote a small git `pre-commit` hook to prevent committing certain files.
There are more words to this, but if you're impatient, you can [skip right to
the goods](#the-code).

<!--more-->

At work, we have some configuration files tracked in git that we modify locally
to enable debugging options. We don't want to ignore these files and have to
manage them in a different system outside of git, but we also don't want the
debugging options checked in.

So we keep the files tracked in git, and modify them on our local systems, and
try to remember not to check in those debugging options.

After the debugging changes ended up in a pull request of mine, I had an idea:
since I'm a computer programmer, what if I could _use_ my computer to save
myself from myself? It was just crazy enough to work.

What I really wanted was for git to prevent me from committing changes to these
files, physically if necessary. The answer: [git
hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

Git hooks are custom scripts that run inside your local repository when one of
several actions is taken, like committing, and merging, and the like. They're
very powerful, since they can be any script that runs in a shell, but like most
things in computer science, they still can't throw a punch. That meant my
script would need to throw an error instead to keep me from committing those
debugging changes.

A few minutes later I had cobbled together a git `pre-commit` hook script that
prevents any of the unwanted files from being changed. The pre commit hook
runs, as the name heavily implies, *before* the commit happens, so if one of
the no-no files is in the changeset, I get a nice big error when I run `git
commit`.

Here's what I came up with:

<a name="the-code"></a>

```sh
#!/bin/sh
#
# This script prevents specific file modifications from taking place.
# We want certain config files checked into git so that builds work on a clone,
# *and* we need to modify these files locally to enable debug options.
# This leads to a scenario where we can accidentally check in the config files
# with our local debug options checked in. This script prevents that.

# Get current revision to check against.
if git rev-parse --verify HEAD >/dev/null 2>&1
then
  against=HEAD
else
  # Initial commit: diff against an empty tree object
  against="$(git hash-object -t tree /dev/null)"
fi

# Redirect output to stderr.
exec 1>&2

# Test staged files against the files we don't want to check in,
# and abort if found.
git diff --cached --name-only "$against" | while read -r file;
do
  if test "$file" == "path/to/my/unchanagble/file.yml";
  then
    echo "Don't check in file.yml. Aborting!"
    exit 1
  fi

  if test "$file" == "some/other/file.php";
  then
    echo "Don't check in file.php. Aborting!"
    exit 1
  fi

  # Repeat pattern as necessary.
done
```

The magic sauce is near the end; I loop over the output of `git diff --cached
--name-only`, which shows the name of each staged file, and check if the file
name matches one of the files I don't want to commit. If the file matches,
`exit` with a non-zero status, and git will happily prevent me from making that
commit. Hooray!
