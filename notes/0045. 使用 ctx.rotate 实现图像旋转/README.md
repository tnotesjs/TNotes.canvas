# [0045. 使用 ctx.rotate 实现图像旋转](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0045.%20%E4%BD%BF%E7%94%A8%20ctx.rotate%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E5%83%8F%E6%97%8B%E8%BD%AC)

<!-- region:toc -->

- [1. 🫧 评价](#1--评价)
- [2. 📒 `ctx.rotate`](#2--ctxrotate)
- [3. 💻 demos.1 - 理解 `ctx.rotate` 旋转的一些特性](#3--demos1---理解-ctxrotate-旋转的一些特性)
- [4. 🔗 References](#4--references)

<!-- endregion:toc -->

## 1. 🫧 评价

- 🎯 目标：
  - 掌握 `ctx.rotate` 的基本使用
- 🫧 评价：
  - 需要理解旋转的一些基本特性。

## 2. 📒 `ctx.rotate`

- `ctx.rotate` 用于旋转画布的当前绘图。
- 旋转不会对之前绘制好的内容有影响。
- 旋转的角度单位是弧度。
- 旋转默认是基于画布的原点来旋转的。
- 这种旋转会影响到之后所有的绘制操作，直到画布的变换状态被重置或者再次修改。
- 每次的旋转都是基于当前的坐标轴已旋转的角度进一步旋转的。

## 3. 💻 demos.1 - 理解 `ctx.rotate` 旋转的一些特性

::: code-group

<<< ./demos/1/1.html {20-54}

:::

- 最终效果：
  - ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-23-07-36-06.png)

## 4. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate
  - MDN - CanvasRenderingContext2D：rotate() 方法。
