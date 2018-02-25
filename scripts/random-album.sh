#!/bin/bash
# Generate a random album that I own.

DATA_FILE="$(git rev-parse --show-toplevel)/static/files/vinyl.csv"
# Save reference to all abums, minus the first line, which is meta data.
ALBUMS=$(sed '1d' "$DATA_FILE")
# Count the total amount of albums for future use.
TOTAL_ALBUMS=$(echo "$ALBUMS" | wc -l)
# Generate a random number between 1 and the total number of albums.
RANDOM_NUM=$(( 1 + RANDOM % TOTAL_ALBUMS ))
# Increment the random number for sed's syntax.
INCREMENTED_NUM=$(( 1 + RANDOM_NUM ))
# Display the album generated in pretty format (via column).
echo "$ALBUMS" | cut -d, -f2,3 | column -t -s ',' | sed -n "$RANDOM_NUM,$RANDOM_NUM p;$INCREMENTED_NUM q"
