+++
title = "Mac OS X Lord of the Rings calendar"
date = "2014-12-16"
summary = "Important dates in The Lord of the Rings for the Mac terminal"
categories = [ "Tutorials" ]
topics = [
  "Tech",
  "Shell"
]
+++

A quick, fun tip for Mac and command line users who are fans of _The Lord of the Rings_;<!--more--> Mac OS X ships with the BSD command line calendars, which show important dates in history for various interests. Among the likely candidates of holidays, famous birthdays, and music, there's a little easter egg for all the fantasy nerds out there (and let's be honest, if you know how to work a terminal, chances are you've read a fantasy novel or two). That's right, important dates in _The Lord of the Rings_.

Someone must have spend a good amount of time in the appendixes to figure out these fourty-plus events. To see if today is one of those events, just run this command.

### bash/zsh:

``` bash
cat /usr/share/calendar/calendar.lotr | grep $(date +"%m/%d")
```

### fish:

``` bash
cat /usr/share/calendar/calendar.lotr | grep (date +"%m/%d")
```

Or maybe you'd like to setup a function that calls the command for easy use, or to add to your login message? While we're at it, why don't we throw in a few more calendars as well.

**Update:**
I added `-A 0` to the `calendar` command, which limits the display to only events that happened on todays date, instead of tomorrow and yesterday, as well.

### bash/zsh:

``` bash
today() {
  calendar -A 0 -f /usr/share/calendar/calendar.birthday
  calendar -A 0 -f /usr/share/calendar/calendar.computer
  calendar -A 0 -f /usr/share/calendar/calendar.history
  calendar -A 0 -f /usr/share/calendar/calendar.music
  calendar -A 0 -f /usr/share/calendar/calendar.lotr
}
```

### fish:

``` fish
function today
  calendar -A 0 -f /usr/share/calendar/calendar.birthday
  calendar -A 0 -f /usr/share/calendar/calendar.computer
  calendar -A 0 -f /usr/share/calendar/calendar.history
  calendar -A 0 -f /usr/share/calendar/calendar.music
  calendar -A 0 -f /usr/share/calendar/calendar.lotr
end
```
