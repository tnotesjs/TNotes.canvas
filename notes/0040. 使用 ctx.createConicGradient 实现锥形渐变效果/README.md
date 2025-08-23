# [0040. 使用 ctx.createConicGradient 实现锥形渐变效果](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0040.%20%E4%BD%BF%E7%94%A8%20ctx.createConicGradient%20%E5%AE%9E%E7%8E%B0%E9%94%A5%E5%BD%A2%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C)

<!-- region:toc -->

- [1. 🫧 评价](#1--评价)
- [2. 📒 `ctx.createConicGradient(startAngle, x, y)`](#2--ctxcreateconicgradientstartangle-x-y)
- [3. 💻 demos.1](#3--demos1)
- [4. 🔗 References](#4--references)

<!-- endregion:toc -->

## 1. 🫧 评价

- 掌握 `ctx.createConicGradient` 的基本使用

## 2. 📒 `ctx.createConicGradient(startAngle, x, y)`

- `ctx.createConicGradient(startAngle, x, y)` 用于创建一个锥形渐变。
  - `startAngle` 渐变的起始角度
  - `x, y` 渐变的中心点坐标

## 3. 💻 demos.1

::: code-group

<<< ./demos/1/1.html {26-56} [1.html]

<<< ./demos/1/2.html {25-38} [2.html]

<<< ./demos/1/3.html {25-42} [3.html]

:::

::: swiper

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-11-58-04.png)

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-11-58-14.png)

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-11-58-27.png)

:::

## 4. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createConicGradient
  - MDN - `ctx.createConicGradient(startAngle, x, y)`
