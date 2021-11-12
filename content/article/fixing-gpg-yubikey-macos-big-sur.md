+++
title = "Fixing GPG Yubikey integration on macOS Big Sur"
date = 2020-11-28T13:47:48-05:00
draft = false
subtitle = "Or, getting rid of GPGTools"
categories = ["Tech"]
topics = ["gpg", "yubikey"]
toc = false
styles = ["syntax"]
syndicated = []
+++

I had some trouble after upgrading GPGTools to version 2020.2 on macOS
Big Sur, where it would ignore my Yubikey smart card and I couldn't unlock my
stuff.

<!--more-->

Every time I tried to use gpg (Yubikey inserted), I would get this
error:

    gpg: decryption failed: No secret key

This sent me into a wild rage, and after spending far too much time
trying to debug with no results, I switched tactics; remove GPGTools and
install gpg myself. While it's still early days, and I am by no means a
gpg expert (who is?), everything seems to be working fine.

Here's how I did it.

## Uninstall GPGTools

I downloaded the uninstaller from the GPGTools website; that's right, it
is *not* included in the standard GPGTools installation. Another reason
to ditch it.

https://gpgtools.tenderapp.com/kb/faq/uninstall-gpg-suite

## Install GPG

I used homebrew to install the required packages.

    brew install gpg pinentry-mac # pinentry-mac is needed for smart cards.

I also added the two packages to my [Brewfile][brewfile].

```diff
diff --git a/Brewfile b/Brewfile
index 683e138..9b0d988 100644
--- a/Brewfile
+++ b/Brewfile
@@ -13,6 +13,7 @@ brew "fzy"
 brew "git"
 brew "git-delta"
 brew "git-standup"
+brew "gpg"
 brew "hugo"
 brew "imagemagick"
 brew "isync"
@@ -27,6 +28,7 @@ brew "pandoc"
 brew "par"
 brew "pass"
 brew "pianobar"
+brew "pinentry-mac"
 brew "rename"
 brew "ripgrep"
 brew "rust"
```

## Configure GPG

The gpg installation added a `.gnupg/` configuration directory to my
home folder. After some research, I added a few lines to `gpg.conf` and
`gpg-agent.conf`.

```sh
# ~/.gnupg/gpg.conf
ask-cert-level
use-agent
auto-key-retrieve
no-emit-version
default-key D81A4957BAF06BCA6E060EE5461C015E032EF9CB # use your key

# ~/.gnupg/gpg-agent.conf
pinentry-program /usr/local/bin/pinentry-mac
default-cache-ttl 600
max-cache-ttl 7200
debug-level basic
log-file $HOME/.gnupg/gpg-agent.log # helpful for debugging
```

I was making progress, but when I tried to use gpg I would get this
error:

    gpg: OpenPGP card not available: No SmartCard daemon

This one took some time to figure out. I checked
my homebrew installation, and scdaemon existed at
`/usr/local/Cellar/gnupg/2.2.25/libexec/scdaemon`.

I eventually figured out I needed a scdaemon configuration file, and I
needed to pass in the name of my smart card there.

macOS comes with a command line tool for testing smart cards (PC/SC),
which I used to get the machine name of my smart card.

I inserted my Yubikey and ran `pcsctest`, which gave me this output:

    MUSCLE PC/SC Lite Test Program

    Testing SCardEstablishContext    : Command successful.
    Testing SCardGetStatusChange
    Please insert a working reader   : Command successful.
    Testing SCardListReaders         : Command successful.
    Reader 01: Yubico YubiKey OTP+FIDO+CCID
    Enter the reader number          :

The "Reader" line is what we're interested in. I copied the name of my
smart card, killed `pcsctest` with a <kbd>Ctrl-c</kbd>, and pasted to a
file called `scdaemon.conf`.

```sh
# ~/.gnupg/scdaemon.conf
reader-port "Yubico YubiKey OTP+FIDO+CCID"
```

## Finishing up

I had to restart gpg agent before my change would take effect.

    killall gpg-agent
    gpg-agent --daemon --homedir $HOME/.gnupg

And that's it, things are working for me again, and I got to replace a
large dependency (GPGTools) with a slightly smaller one (GPG).

### Other resources

Some links I found helpful in my journey to figuring this out.

- https://dev.to/wes/how2-using-gpg-on-macos-without-gpgtools-428f
- https://miki725.com/crypto/2018/12/23/gpg-mac-yubikey.html
- https://blog.programster.org/yubikey-link-with-gpg

[brewfile]: https://github.com/bronzehedwick/dotfiles/blob/master/Brewfile
