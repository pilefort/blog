---
title: "動画の拡張子やレンダリングを変更する方法"
tags: shell,movie
date: "2021-03-07 16:54:14"
category: "Shell"
---

動画の拡張子は次のようにして、変更できます。

```bash
$ ffmpeg -i base_file.mov output.mp4
```

動画をgifファイルへ変換することもできます。このとき、-rでレンダリング速度を指定できます。値を大きくすると、早送りになります。

```bash
$ ffmpeg -i base_file.mp4 -r 5 output.gif
```

26.5 GBの動画を圧縮して623 MBにしたい場合は次のような設定でできます。

```
ビットレート 1200 kb/s
フレームレート 30 fps
コーデック H265
```

```bash
$ ffmpeg -i base_file.mp4 -b:v 1200k -r 30 -vcodec libx265 output.mp4
```

ちなみに、滑らかに動く動画はフレームレート 60 fpsぐらいです。少しちらつく場合は30 fpxより小さいかもしれないので、確認が必要です。


