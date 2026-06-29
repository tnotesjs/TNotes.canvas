# [0040. ctx.createConicGradient](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0040.%20ctx.createConicGradient)

<!-- region:toc -->

- [1. 目标](#1-目标)
- [2. 评价](#2-评价)
- [3. `ctx.createConicGradient(startAngle, x, y)`](#3-ctxcreateconicgradientstartangle-x-y)
- [4. demos.1](#4-demos1)
- [5. 引用](#5-引用)

<!-- endregion:toc -->

## 1. 目标

- 掌握 `ctx.createConicGradient` 的基本使用

## 2. 评价

- 锥形渐变，可以控制渐变的起始角度和圆心坐标。
- 设置好渐变效果之后再去绘制图形，当最后 `fill` 填充图形的时候，会自动应用上设置好的渐变效果。

## 3. `ctx.createConicGradient(startAngle, x, y)`

- `ctx.createConicGradient(startAngle, x, y)` 用于创建一个锥形渐变。
  - `startAngle` 渐变的起始角度
  - `x, y` 渐变的中心点坐标

## 4. demos.1

::: code-group

<<< ./demos/1/1.html {26-56} [1.html]

<<< ./demos/1/2.html {25-38} [2.html]

<<< ./demos/1/3.html {25-42} [3.html]

:::

::: swiper

![1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-58-04.png)

![2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-58-14.png)

![3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-58-27.png)

:::

## 5. 引用

- [CanvasRenderingContext2D.createConicGradient 方法][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createConicGradient
