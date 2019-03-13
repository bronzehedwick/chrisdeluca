+++
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}
draft = false

[[resources]]
  name = "headerJpg"
  src = "images/header.jpg"
  [resources.params]
    alt = ""
    title = ""

[[resources]]
  name = "headerPng"
  src = "images/header.png"
  [resources.params]
    alt = ""
    title = ""

[[resources]]
  name = "headerSvg"
  src = "images/header.svg"
  [resources.params]
    title = ""
    description = ""
+++
