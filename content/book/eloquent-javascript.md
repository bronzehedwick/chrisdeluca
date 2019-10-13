+++
title = "Eloquent Javascript"
subtitle = ""
date = 2019-10-13T12:55:59-04:00
draft = false
author = ""
genre = ""

[read]
  start = 2018-10-13T12:55:59-04:00
  end = ""
+++

## Chapter 6. The Secret Life of Objects

> All properties that we create by simply assigning to them are enumerable.
> The standard properties in Object.prototype are all nonenumerable,
> which is why they do not show up in such a for/in loop.

A clear way of articulating this. When you assign a new value, it
is always enumerable, unless you pull something specific to tell JS
otherwise, aka `Object.defineProperty`.
