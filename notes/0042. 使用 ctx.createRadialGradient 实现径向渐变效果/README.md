# [0042. 使用 ctx.createRadialGradient 实现径向渐变效果](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0042.%20%E4%BD%BF%E7%94%A8%20ctx.createRadialGradient%20%E5%AE%9E%E7%8E%B0%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C)

<!-- region:toc -->

- [1. 🫧 评价](#1--评价)
- [2. 📒 `ctx.createRadialGradient`](#2--ctxcreateradialgradient)
- [3. 💻 demos.1 - `ctx.createRadialGradient` 的基本使用](#3--demos1---ctxcreateradialgradient-的基本使用)
- [4. 🔗 References](#4--references)

<!-- endregion:toc -->

## 1. 🫧 评价

- 掌握 `ctx.createRadialGradient` 的基本使用

## 2. 📒 `ctx.createRadialGradient`

- `ctx.createRadialGradient` 用于创建径向渐变（或称为放射状渐变）。
- `createRadialGradient(x0, y0, r0, x1, y1, r1)`
  - `x0, y0, r0` 圆 1
  - `x1, y1, r1` 圆 2
  - 渐变效果将从圆 1 的边缘开始渐变到圆 2 的边缘。

## 3. 💻 demos.1 - `ctx.createRadialGradient` 的基本使用

::: code-group

<<< ./demos/1/1.html {26-47,58-69} [1.html]

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-01-09.png)

## 4. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
  - MDN - `ctx.createRadialGradient`
