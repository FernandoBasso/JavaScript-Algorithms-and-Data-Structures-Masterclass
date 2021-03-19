#!/usr/bin/env bash

##
# Extract lib functions with their JSDoc headers to a single file.
#
# I some times need this file for other purposes, like pasting functions
# in the online solution checkers.
##

if [ -z "$1" ] ; then
	printf 2>&1 '%s\n' \
		'Provide ‘js’ or ‘ts’ as the extension parameter.'
	exit 1
fi

ext="$1"

outfile="./libutils.$ext"

##
# First, let's truncate the output file so we clear out contents from
# any previous extractions.
#
# See ‘help :’ for help on the “Null command”.
#

: > "$outfile"

##
# Run through each file in `lib/' and extract each function together
# with their JSDoc header and save everything in `outfile'.
#
# Get each file and extract everything between the opening JSDoc marker
# the end ‘}’ which closes the function following the doc header.
#
#   /**
#    ...
#   }
#
# The second sed invocation appends one empty line before and after each
# file read so they do not get glued together in the output file.
#

files=(lib/*"$ext")

for file in "${files[@]}" ; do
	sed -n '\:^/\*\*:,\:^}$:p' < "$file" | \
		sed -e '1 s/^/\n/' -e '$ s/$/\n/' >> "$outfile"
done

printf '\nSUCCESS: file ‘%s’ created!\n' "$outfile"
