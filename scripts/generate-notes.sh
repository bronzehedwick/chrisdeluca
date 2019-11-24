#!/bin/bash

for (( c=$1; c<($1+$2); c++ ))
do
  {
    echo "+++"
    echo "title = 'Note on $(date -v "$c"d +%A\ %B\ %d\ %Y,\ at\ 1:00pm)'"
    echo "slug = '$(date -v "$c"d +%s)'"
    echo "publishdate = $(date -v "$c"d +%Y-%m-%dT13:00:00%z)"
    echo "draft = true"
    echo "syndicated = []"
    echo "+++"
    echo ""
  } > "/Volumes/Data/Projects/chrisdeluca.me_content/note/$(date -v "$c"d +%s).md"
done

# +++
# title = "Note on Sat Nov  2 11:05:41 EDT 2019"
# slug = "1572707141"
# publishdate = 2019-11-02T11:05:41-04:00
# draft = false
# syndicated = []
# +++
