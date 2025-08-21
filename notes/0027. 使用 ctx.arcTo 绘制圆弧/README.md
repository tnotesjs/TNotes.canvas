# [0027. 使用 ctx.arcTo 绘制圆弧](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0027.%20%E4%BD%BF%E7%94%A8%20ctx.arcTo%20%E7%BB%98%E5%88%B6%E5%9C%86%E5%BC%A7)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 💻 demos.1 - 使用 `ctx.arcTo` 绘制圆弧](#2--demos1---使用-ctxarcto-绘制圆弧)

<!-- endregion:toc -->

## 1. 📝 概述

- 学会使用 `ctx.arcTo` 绘制圆弧。

## 2. 💻 demos.1 - 使用 `ctx.arcTo` 绘制圆弧

::: code-group

<<< ./demos/1/1.html {17-25,28-52} [1.html]

<<< ./demos/1/2.html {17-25,28-42} [2.html]

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-10-58-45.png)
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-10-58-53.png)
- **注意：**
  - 传入的参数并不决定绘制的线条的起点 or 终点，而仅仅是起到决定圆弧弧度的作用，这一点可以从 `2.html` 看出。
