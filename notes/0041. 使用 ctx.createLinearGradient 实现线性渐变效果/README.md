# [0041. 使用 ctx.createLinearGradient 实现线性渐变效果](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0041.%20%E4%BD%BF%E7%94%A8%20ctx.createLinearGradient%20%E5%AE%9E%E7%8E%B0%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 💻 demos.1 - `createLinearGradient` 的基本使用](#2--demos1---createlineargradient-的基本使用)
- [3. 🔗 References](#3--references)

<!-- endregion:toc -->

## 1. 📝 概述

- 掌握 `createLinearGradient` 的基本使用

## 2. 💻 demos.1 - `createLinearGradient` 的基本使用

::: code-group

<<< ./demos/1/1.html {25-41,51-59,69-75} [1.html]

<<< ./demos/1/2.html {18-32} [2.html]

:::

- `1.html`
  - ![1](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-11-59-28.png)
  - `createLinearGradient(x0, y0, x1, y1)` 设置的渐变区域并不会因填充的区域而变化。
  - 比如你设置了 `(0, 0) -> (500, 0)` 的线性渐变，那么这个渐变的区间就是 `(0, 0) -> (500, 0)`，不会根据你绘制的矩形填充区域而改变。
- `2.html`
  - 对于线性渐变无法辐射到的区域，会直接沿用“终点”颜色。
  - 比如此时设置的线性渐变是 `(100, 0) -> (400, 0)`，这个区间无法覆盖矩形，对于无法辐射到的区域 `0-100` 和 `400-500` 直接沿用了线性渐变的“终点”颜色。
  - ![2](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-11-59-37.png)

## 3. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
  - MDN - `ctx.createLinearGradient`。
