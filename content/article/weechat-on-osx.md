+++
date = "2016-08-06T17:08:43-04:00"
title = "weechat on osx"
draft = true
+++

<!--more-->
brew install weechat --with-aspell --with-curl --with-python --with-perl --with-ruby --with-lua --with-guile
https://gist.github.com/1stvamp/2158128
Use https://curl.haxx.se/download/curl-7.50.1.tar.bz2

Use `/usr/local/share` instead of `/usr/share`

```sh
#!/bin/bash

mkdir -p /tmp/curl-ca-bundle
cd /tmp/curl-ca-bundle
wget https://curl.haxx.se/download/curl-7.50.1.tar.bz2
tar xzf curl-7.50.1.tar.bz2
cd curl-7.50.1/lib/
./mk-ca-bundle.pl
if [ ! -d /usr/local/share/curl/ ]; then
  mkdir -p /usr/local/share/curl/
else
  mv /usr/local/share/curl/ca-bundle.crt /usr/local/share/curl/ca-bundle.crt.original
fi
mv ca-bundle.crt /usr/local/share/curl/ca-bundle.crt
echo
echo "Done!"
```
http://www.weechat.org/files/doc/weechat_faq.en.html
https://gist.github.com/pascalpoitras/8406501
http://weechat.org/
http://weechat.org/files/doc/stable/weechat_quickstart.en.html
http://zanshin.net/2015/01/10/a-guide-for-setting-up-weechat-and-bitlbee/
https://www.pcspinnt.de/2012/01/bitlbee-znc-and-weechat/
