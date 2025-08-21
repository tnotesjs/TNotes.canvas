# [0018. 使用 ctx.fillRect 绘制矩形](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0018.%20%E4%BD%BF%E7%94%A8%20ctx.fillRect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 📒 `ctx.fillRect`](#2--ctxfillrect)
- [3. 💻 demos.1 - 使用 `ctx.fillRect` 来绘制填充矩形](#3--demos1---使用-ctxfillrect-来绘制填充矩形)

<!-- endregion:toc -->

## 1. 📝 概述

- 学会使用 `ctx.fillRect()` 来绘制一个填充矩形。

## 2. 📒 `ctx.fillRect`

- `ctx.fillRect(x, y, width, height)`
  - `(x, y)` 表示从哪个点开始绘制；
  - `width, height` 表示绘制的矩形的尺寸；
- `fillRect` 顾名思义，这玩意儿绘制的是一个填充矩形。当你没有指定填充样式 `ctx.fillStyle` 的时候，默认将会绘制一个黑色的填充矩形。

## 3. 💻 demos.1 - 使用 `ctx.fillRect` 来绘制填充矩形

::: code-group

<<< ./demos/1/1.html {17-21} [1.html]

<<< ./demos/1/2.html {17-19} [2.html]

:::

- `1.html` 绘制一个默认的黑色填充矩形
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-00-45-56.png)
- `2.html` 指定绘制矩形的颜色
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-00-46-11.png)
