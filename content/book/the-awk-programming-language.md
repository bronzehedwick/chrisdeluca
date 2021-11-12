+++
title = "The AWK Programming Language"
subtitle = ""
date = 2020-06-29T09:46:44-04:00
draft = false
author = "Alfred V. Aho, Brian W. Kernighan & Peter J. Weinberger"
genre = "Programming"
length = ""

[read]
  start = 2020-06-29T09:46:44-04:00
  end = 2020-08-13T09:04:11-04:00
  gaveup = true
+++

This was really helpful to read even the first chapter of. It's very powerful but really well explained and easy to grasp; finally all those somewhat magic one liners I'd been using make sense!

## Chapter 1: An AWK Tutorial

AWK programs loop over every line in the input and apply the program to each line. They are linewise. They only have two data types: strings and numbers.

Each AWK program is in the form of `pattern { action }`. The pattern is a way to filter lines processed. The action is what the program actually does.

If pattern is blank, it will match all lines.

Example pattern: `$3 > 0` matches if the third field is greater than 0. Can also be a regular expression, by wrapping in `/`.

Fields by default are spaces. To change, use `-F`.

AWK exposes default variables.

1. `$0` equals the entire line.
2. `$1...$9` are fields one through 9.
3. `NR` is the line number.
4. `NF` is the number of fields in the line.

You can apply math between fields via the standard operators (`+-*/%`).

The proper shebang for an AWK file is `/usr/bin/awk -f`.

`print` function prints fields or literals. Separate values via commas.

`printf` function works similar to C version.

`BEGIN` and `END` are special constructs that allow you to put content or processing at the top or bottom of the program results.

You can have any number of `pattern { action }` constructs, separated by new lines.

You can also define/redefine variables on the fly, simply by assigning to them. No initialization needed. Data type is automatically inferred. Here is an example program to count the number of LPs listed on this site from the records CSV:

```awk
$4 == "LP" { lps = lps + 1 }
END { print lps }
```

AWK provides built-in functions, including `length()`, which counts the number of characters in the string passed in.

> Each program in this chapter has been a sequence of pattern-action
> statements. Awk tests every input line against the patterns, and when a
> pattern matches, performs the corresponding action. Patterns can involve
> numeric and string comparisons, and actions can include computation and
> formatted printing. Besides reading through your input files automatically,
> awk splits each input line into fields. It also provides a number of built-in
> variables and functions, and lets you define your own as well. With this
> combination of features, quite a few useful computations can be expressed by
> short programs - many of the details that would be needed in another language
> are handled implicitly in an awk program.
