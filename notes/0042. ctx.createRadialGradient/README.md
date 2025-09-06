# [0042. ctx.createRadialGradient](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0042.%20ctx.createRadialGradient)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 📒 `ctx.createRadialGradient`](#3--ctxcreateradialgradient)
- [4. 💻 demos.1 - `ctx.createRadialGradient` 的基本使用](#4--demos1---ctxcreateradialgradient-的基本使用)
- [5. 🔗 References](#5--references)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `ctx.createRadialGradient` 的基本使用

## 2. 🫧 评价

- 镜像渐变 `ctx.createRadialGradient` 的创建非常简单，就是定义俩圆（圆心坐标 + 半斤长度，这意味着需要传入 6 个参数），从圆 1 边缘到圆 2 边缘实现渐变效果。
- 不要把镜像渐变 `ctx.createRadialGradient` 和锥形渐变 `ctx.createConicGradient` 搞错了，要能够区分开两种效果。
- ![svg](./assets/1.svg)

## 3. 📒 `ctx.createRadialGradient`

- `ctx.createRadialGradient` 用于创建径向渐变（或称为放射状渐变）。
- `createRadialGradient(x0, y0, r0, x1, y1, r1)`
  - `x0, y0, r0` 圆 1
  - `x1, y1, r1` 圆 2
  - 渐变效果将从圆 1 的边缘开始渐变到圆 2 的边缘。

## 4. 💻 demos.1 - `ctx.createRadialGradient` 的基本使用

::: code-group

<<< ./demos/1/1.html {26-47,58-69} [1.html]

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-01-09.png)

## 5. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
  - MDN - `ctx.createRadialGradient`
