+++
title = "Use Neovim as your man pager"
date = 2022-03-07T19:30:46-05:00
draft = false
subtitle = ""
categories = ["Tech"]
topics = ["neovim"]
toc = false
styles = ["syntax"]
syndicated = [
    "https://twitter.com/chrisjohndeluca/status/1501016034916114441",
    "https://dev.to/bronzehedwick/use-neovim-as-your-man-pager-3ilf",
    "https://mastodon.social/@bronzehedwick/107918505138058581"
]
+++

You may know that you can open man pages in a Neovim buffer with `:Man`.
However, you can also configure your shell to open manual pages in a
Neovim buffer when called from the command line.

<!--more-->

First, if you're unfamiliar, Neovim ships with the great [`:Man`][man]
command, which opens man pages in a nicely formatted buffer. These
buffers are normal Vim buffers, so come equipped with syntax
highlighting, can be easily searched, and links to other manual pages
can be followed with <kbd>C-]</kbd>.

```vim
" Open the git manual page.
:Man git
```

You can also open man pages invoked inside Neovim's terminal emulator
using this same man buffer with a little configuration.

```bash
# This opens a man buffer?
man git
```

The `man` command can be configured to render pages with any program,
controlled by the `$MANPAGER` environment variable.

We could set `$MANPAGER` to `nvim`, but that would cause nesting Neovim
instances if called from inside a Neovim `:terminal`.

To work around this, we'll need help from the [neovim-remote][nvr]
project (at least until Neovim core [adds `--remote`
back][remote-issue]). With that installed, we can call `nvr` inside
a Neovim terminal buffer to open the given file in the same Neovim
instance.

I personally would rather not launch a whole Neovim instance just
to render a man page if I'm not already inside Neovim, so for this
tip we'll add some detection code to only set the `$MANPAGER`
value inside Neovim. We can do this by checking the value of the
`$NVIM_LISTEN_ADDRESS` environment variable, which will only be set
inside an instance of Neovim.

We'll use the `-o` flag to open the man page in a new split, to help
retain the context of what you're working on.

In your bash/zsh config file:

```bash
if [ -n "${NVIM_LISTEN_ADDRESS+x}" ]; then
  export MANPAGER="/usr/local/bin/nvr -c 'Man!' -o -"
fi

```

Or for the fish shell:

```fish
if test -n "$NVIM_LISTEN_ADDRESS"
  set -x MANPAGER "/usr/local/bin/nvr -c 'Man!' -o -"
end
```

And that's it. Happy RTFM!

[man]: https://neovim.io/doc/user/filetype.html#:Man
[nvr]: https://github.com/mhinz/neovim-remote
[remote-issue]: https://github.com/neovim/neovim/issues/1750
