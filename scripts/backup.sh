#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

if [ ! -d /Volumes/Backups/Projects ]; then
  exit 0
fi

rsync --archive --delete-excluded /Users/chris/Sites/chrisdeluca/content/ /Volumes/Backups/Projects/chrisdeluca.me_content
