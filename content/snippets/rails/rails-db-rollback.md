---
title: "Rails DBでのロールバック"
tags: rails,db,migration
date: "2021-02-14 01:59:52"
category: "Rails"
---

```
rails db:migrate:down VERSION=xxxxx
```

VERSIONはマイグレーションファイルの日付部分を記入する。
例) 20210101_xxxx.rbのマイグレーションを取り消したい場合は、VERSION=20210101となる。
