# [0045. ctx.rotate](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0045.%20ctx.rotate)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 📒 `ctx.rotate`](#3--ctxrotate)
- [4. 💻 demos.1 - 理解 `ctx.rotate` 旋转的一些特性](#4--demos1---理解-ctxrotate-旋转的一些特性)
- [5. 🔗 References](#5--references)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `ctx.rotate` 的基本使用

## 2. 🫧 评价

- `ctx.rotate` 旋转的是整个坐标系。
- ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-24-21-13-34.png)

## 3. 📒 `ctx.rotate`

- `ctx.rotate` 用于旋转画布的当前绘图。
- 旋转不会对之前绘制好的内容有影响。
- 旋转的角度单位是弧度。
- 旋转默认是基于画布的原点来旋转的。
- 这种旋转会影响到之后所有的绘制操作，直到画布的变换状态被重置或者再次修改。
- 每次的旋转都是基于当前的坐标轴已旋转的角度进一步旋转的。

## 4. 💻 demos.1 - 理解 `ctx.rotate` 旋转的一些特性

::: code-group

<<< ./demos/1/1.html {20-54}

:::

- 最终效果：
  - ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-23-07-36-06.png)

## 5. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate
  - MDN - CanvasRenderingContext2D：rotate() 方法。
