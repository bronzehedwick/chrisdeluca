+++
title = "Eloquent Javascript"
subtitle = ""
date = 2019-10-13T12:55:59-04:00
draft = false
author = "Marijn Haverbeke"
genre = "Computers"

[read]
  start = 2018-10-13T12:55:59-04:00
  end = 2020-08-13T09:06:05-04:00
  gaveup = true
+++

I never went to school for computer science, learning on the job and in my spare time through articles, videos, and experience.

This was great, forcing me to learn practical, pragmatic approaches fast, but did leave some classic theory to be inferred.

Since I had never done it formally, I decided to work through _Eloquent Javascript_, a beginners introduction to programming.

It's very well written and dense, which I like a lot. I maintain a repo with my solutions to the end-of-chapter practice exorcises enforced by tests, https://github.com/bronzehedwick/eloquent-js-exercises, which I've been slowly working through.

Below are some notes.

## Chapter 6. The Secret Life of Objects

> All properties that we create by simply assigning to them are enumerable.
> The standard properties in Object.prototype are all nonenumerable,
> which is why they do not show up in such a for/in loop.

A clear way of articulating this. When you assign a new value, it
is always enumerable, unless you pull something specific to tell JS
otherwise, aka `Object.defineProperty`.
