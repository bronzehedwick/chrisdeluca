+++
title = "Record Collection"
date = 2017-09-29T18:41:26-04:00
draft = false
scripts = [
  "vendor/tablesort.min.js",
  "tablesort-custom.js"
]

[[resources]]
  name = "table"
  src = "spreadsheets/vinyl.csv"
+++

{{< csv-to-table "table" >}}
