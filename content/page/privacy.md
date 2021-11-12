+++
title = "Privacy"
date = 2019-10-27T18:45:45-04:00
draft = false
menu = [ 'footer' ]
+++

Privacy is a fundamental [human right](https://www.schneier.com/essays/archives/2006/05/the_eternal_value_of.html), and one I take seriously.

I collect standard web server error and access logs. These are used for debugging purposes. They contain your IP address, your user agent string, and the time the session occurred. Each record looks something like this:

    192.168.1.1 - - [27/Oct/2019:18:27:53 -0400] "GET /note/1572028360/ HTTP/2.0" 200 7080 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36" "-"

These logs are kept for 30 days, then permanently deleted.

That's it. Stay safe out there.
