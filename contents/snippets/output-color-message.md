---
title: "文字の色を変えて出力する方法"
tags: ["shell"]
date: "2021-03-07 16:50:54"
---

```shell
$ printf '\e[1;31m this is red message'
$ printf '\e[1;32m this is green message'
$ printf '\e[1;33m this is yellow message'
$ printf '\e[1;34m this is blue message'
$ printf '\e[1;35m this is purple message'
$ printf '\e[1;36m this is light blue message'
$ printf '\e[1;37m this is gray message'
```

<img src="../images/output-color-message/1.png" alt="test" width="445" height="255" />
