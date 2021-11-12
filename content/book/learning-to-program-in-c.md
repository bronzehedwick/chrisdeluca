+++
title = "Learning to Program in C"
subtitle = ""
date = 2019-12-23T13:06:23-05:00
draft = false
author = "Thomas Plum"
genre = "Computer"
length = ""

[read]
  start = 2019-12-23T13:06:23-05:00
  end = 2020-05-05T06:59:49-05:00
+++

## Binary integers

To calculate binary integers, assign each number an incrementing value, working right to left. The increment doubles the previous value, starting at 1. For example 1, 2, 4, 8, 16, 32, and so on. Isolate every one of those values represented by a 1, ignoring 0, and add all those together. That is the integer value.

    10010101

      1| 0| 0| 1|0|1|0|1
    128|  |  |16| |4| |1

    128 + 16 + 4 + 1 = 149

In signed values, the far left bit (high-order bit) is the negative/positive number indicator. If that bit is 0, the number is positive, 1 and it's negative.

## Operators

`#define` is a constant in the compiler. Evaluates the program and replaces `#define`s first. Convention is uppercase.

Header files end in `.h` and contain `#define`s and includes, and are included at the top of the `.c` files via `#include`. This is a way to abstract conventions and presumably revise them.

### Precedence and Associativity

If data is too big for it's type, it is increased behind the scenes to the next type, called Promotion. Promotion also happens with arithmetic and assignment to the largest type in the duo.

`sprintf` - receiving array must be long enough for content or it will overrun into other memory.

Overflow is possible with `+`, `-`, `*`, `++`, `--`, `<<`.
