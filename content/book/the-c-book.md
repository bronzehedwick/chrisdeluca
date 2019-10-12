+++
title = "The C Book"
subtitle = ""
date = 2019-10-10T19:36:51-04:00
draft = false
author = "Mike Banahan, Declan Brady and Mark Doran, originally published by Addison Wesley"
genre = "Computer"

[read]
  start = 2019-10-01T19:36:51-04:00
  end = 2019-10-10T19:36:51-04:00
  gaveup = 4
+++

I wanted to get a basic grasp of C, but most of the resources listed in the C language IRC channel were pretty pricey. One resource, however, was completely free: _The C Book_. That sounded both authoritative _and_ cheap, so I started reading and taking notes.

It was only a few chapters in that I found out the book was out of date and only published for historical purposes.

I'm sure some of what I learned in my short stint with _The C Book_ is still relevant, but I don't want to risk polluting my head with wrong stuff.

Here then, are the notes I took.

## [1.1. The form of a C program](https://publications.gbdirect.co.uk//c_book/chapter1/form_of_a_c_program.html)

Each C library is first compiled, then all pieces are compiled together.

## [1.2. Functions](https://publications.gbdirect.co.uk//c_book/chapter1/functions.html)

The `main` function is special, and is the first function that gets run "magically" in your program. This is only the case in hosted environments, however. In non-hosted environments, the first function called is implementation dependent.

```c
#include <stdio.h>

/*
* Tell the compiler that we intend
* to use a function called show_message.
* It has no arguments and returns no value
* This is the "declaration".
*
*/

void show_message(void);
/*
* Another function, but this includes the body of
* the function. This is a "definition".
*/
main(){
     int count;

     count = 0;
     while(count < 10){
             show_message();
             count = count + 1;
     }

     return(0);
}

/*
* The body of the simple function.
* This is now a "definition".
*/
void show_message(void){
     printf("hello\n");
}
```
