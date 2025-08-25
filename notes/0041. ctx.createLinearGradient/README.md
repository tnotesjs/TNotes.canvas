# [0041. ctx.createLinearGradient](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0041.%20ctx.createLinearGradient)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - `createLinearGradient` 的基本使用](#3--demos1---createlineargradient-的基本使用)
- [4. 🔗 References](#4--references)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `createLinearGradient` 的基本使用

## 2. 🫧 评价

- 线性渐变，就是指定两点的坐标，从开始到结束位置上的各个阶段都可以配置颜色。
- 对于两点沿线方向未覆盖的区域，会自动沿用终点颜色。

## 3. 💻 demos.1 - `createLinearGradient` 的基本使用

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

## 4. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
  - MDN - `ctx.createLinearGradient`。
