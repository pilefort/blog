## C++互換の新しい言語 Carbon
　CarbonはJavaScriptに対するTypeScript, Javaに対するKotlinのような立ち位置を目指している言語だそうです[^carbon]。パフォーマンスを落とさず、既存のC++プロジェクトに、ジェネリクス、クラス、継承、メモリ安全性やシンプルな構文などを導入できるようです。

　C++とCarbonを共存させて書くこともできるらしく今後のどのようになっていくか気になるところです。以下サンプルコードです[^carbon_sample]。ちなみに、拡張子はまだ決まってない[^cpp_extension]ようで、試して使うこともできません。

```cpp
// C++ code used in both Carbon and C++:
struct Circle {
  float r;
};

// Carbon exposing a function for C++:
package Geometry api;
import Cpp library "circle.h";
import Math;

fn PrintTotalArea(circles: Slice(Cpp.Circle)) {
  var area: f32 = 0;
  for (c: Cpp.Circle in circles) {
    area += Math.Pi * c.r * c.r;
  }
  Print("Total area: {0}", area);
}

// C++ calling Carbon:
#include <vector>
#include "circle.h"
#include "geometry.carbon.h"auto main(int argc, char** argv) -> int {
  std::vector<Circle> circles = {{1.0}, {2.0}};
  // Carbon's `Slice` supports implicit construction from `std::vector`,
  // similar to `std::span`.
  Geometry::PrintTotalArea(circles);
  return 0;
}
```

[^carbon]: [https://github.com/carbon-language/carbon-lang](https://github.com/carbon-language/carbon-lang)
[^carbon_sample]: [https://github.com/carbon-language/carbon-lang/blob/trunk/docs/images/snippets.md#mixed](https://github.com/carbon-language/carbon-lang/blob/trunk/docs/images/snippets.md#mixed)
[^cpp_extension]: [https://github.com/carbon-language/carbon-lang/discussions/1597](https://github.com/carbon-language/carbon-lang/discussions/1597)
