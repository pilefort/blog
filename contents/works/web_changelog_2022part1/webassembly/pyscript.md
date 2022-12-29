## PyScript
PyScriptはブラウザ上でPythonを動かすためのフレームワークです[^pyscript]。PyScriptはCPythonをWebAssemblyに移植したPyodideという基盤の上に構築しており、HTMLやJavaScriptの資産と組み合わせてPythonを動かすことができます。

動かし方はheadでPyScriptを読み込み、py-scriptタグ内にpythonのコードを書いて実行します。以下ではπの近似値を求めるコードです[^pyscript_sample1]。py-scriptタグ内はPythonと同じ文法になるため、インデントも気をつける必要があります。

```html
<!-- index.html -->
<html lang='ja'>
<head>
  <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
  <script defer src="https://pyscript.net/latest/pyscript.js"></script>
</head>
<body>
<py-script>
  print("Let's compute π:")
  def wallis(n):
    pi = 2
    for i in range(1,n):
      pi *= 4 * i ** 2 / (4 * i ** 2 - 1)
    return pi

  pi = wallis(100000)
  s = f"π is approximately {pi:.3f}"
  print(s)
</py-script>
</body>
</html>
```

<figure>
  <img src='/images/web_changelog_2022part1/webassembly/pyscript_display_pi_value.png' alt='Pythonでπの近似値を計算し表示する例' width='500' height="500" />
  <figcaption>Pythonでπの近似値を計算し表示する例</figcaption>
</figure>

py-envタグで外部ライブラリを指定でき、NumPyやMatplotlibなどの機械学習・グラフプロットで使うライブラリも利用できます[^pyscript_sample2]。

```html
<!-- index.html -->
<html lang='ja'>
  <head>
    <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
    <script defer src="https://pyscript.net/latest/pyscript.js"></script>
    <py-env>
      - numpy
      - matplotlib
    </py-env>
  </head>

  <body>
    <h1>Let's plot random numbers</h1>
    <div id="plot"></div>
    <py-script output="plot">
      import matplotlib.pyplot as plt
      import numpy as np

      x = np.random.randn(1000)
      y = np.random.randn(1000)

      fig, ax = plt.subplots()
      ax.scatter(x, y)
      fig
    </py-script>
  </body>
</html>
```

<figure>
  <img src='/images/web_changelog_2022part1/webassembly/pyscript_display_random_plot_graph.png' alt='Pythonでランダムな数値の組からなるグラフを表示する例' width='500' height="500" />
  <figcaption>Pythonでランダムな数値の組からなるグラフを表示する例</figcaption>
</figure>

他にもJavaScriptと連携したサンプルなども公開されてます[^pyscript_demo][^pyscript_sample_code]。

[^pyscript]: [https://www.anaconda.com/blog/pyscript-python-in-the-browser](https://www.anaconda.com/blog/pyscript-python-in-the-browser)
[^pyscript_sample1]: [https://codepen.io/kusakabe-t/pen/yLvYzvp](https://codepen.io/kusakabe-t/pen/yLvYzvp)
[^pyscript_sample2]: [https://codepen.io/kusakabe-t/pen/BaYowxQ](https://codepen.io/kusakabe-t/pen/BaYowxQ)
[^pyscript_demo]: [https://pyscript.net/examples/](https://pyscript.net/examples/)
[^pyscript_sample_code]: [https://github.com/pyscript/pyscript/tree/main/examples](https://github.com/pyscript/pyscript/tree/main/examples)
