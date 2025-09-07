# [0016. ctx.textBaseline、ctx.textAlign](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0016.%20ctx.textBaseline%E3%80%81ctx.textAlign)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - 设置文本的对齐方式](#3--demos1---设置文本的对齐方式)
- [4. 🔗 引用](#4--引用)

<!-- endregion:toc -->

## 1. 🎯 目标

- 学会使用 [`ctx.textAlign`][2] 设置文本的 **水平** 对齐方式
- 学会使用 [`ctx.textBaseline`][1] 设置文本的 **垂直** 对齐方式

## 2. 🫧 评价

- 很简单的俩 API，扫一眼 demos 即可。
- 笔记中的 demos 提供了参考锚点，可以结合文案跟锚点的相对位置关系来帮助理解，更加直观。

## 3. 💻 demos.1 - 设置文本的对齐方式

::: code-group

<<< ./demos/1/1.html {16-26}

<<< ./demos/1/2.html {16-27}

:::

::: swiper

![1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-23-20-10.png)

![2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-23-20-23.png)

:::

## 4. 🔗 引用

- [CanvasRenderingContext2D.textBaseline 属性][1]
  - 设置文本的 **垂直** 对齐方式。
- [CanvasRenderingContext2D.textAlign 属性][2]
  - 设置文本的 **水平** 对齐方式。

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline
[2]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign
