# [0026. ctx.ellipse](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0026.%20ctx.ellipse)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - 使用 `ctx.ellipse` 绘制椭圆](#3--demos1---使用-ctxellipse-绘制椭圆)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `ctx.ellipse` 的基本使用。

## 2. 🫧 评价

- `ctx.ellipse` 用于绘制椭圆，它和绘制圆 `ctx.arc` 非常类似，区别在于椭圆它可以是一个非正圆，当它的两个半径是不同的值时就是一个非正圆。
- 正圆旋转是无意义的，转动前后的效果都是一样的，但是非正圆旋转就有意义了。

## 3. 💻 demos.1 - 使用 `ctx.ellipse` 绘制椭圆

::: code-group

<<< ./demos/1/1.html {16-64} [1.html]

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-10-57-32.png)
