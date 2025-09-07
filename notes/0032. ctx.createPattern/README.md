# [0032. ctx.createPattern](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0032.%20ctx.createPattern)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - `ctx.createPattern` 的基本使用](#3--demos1---ctxcreatepattern-的基本使用)
- [4. 🔗 引用](#4--引用)

<!-- endregion:toc -->

## 1. 🎯 目标

- 理解 `ctx.createPattern` 的填充机制

## 2. 🫧 评价

- [ctx.createPattern][1] 把 demos.1 看懂即可。
- 重点在于理解填充的机制，这可能和你常规印象中的填充机制不一样，比如填充图像的位置、描边的填充机制。
- **填充的图像位置是禁止的**
  - **填充的图案是禁止的，并不会随着我们绘制的图案而移动。**
  - 我们在使用填充的时候，其实是指定哪一块区域可以看到已经准备好的填充图案。如果这块区域看不到填充图案的话，那么填充看起来就是无效的。
- **描边填充机制**
  - **描边填充的时候会从描边的中心向两侧扩散来应用填充图案，每一侧填充的宽度是固定的，值为 lineWidth / 2。**

## 3. 💻 demos.1 - `ctx.createPattern` 的基本使用

::: code-group

<<< ./demos/1/1.html {}

<<< ./demos/1/1-1.js {}

<<< ./demos/1/1-2.js {}

<<< ./demos/1/1-3.js {}

<<< ./demos/1/1-4.js {}

<<< ./demos/1/1-5.js {}

<<< ./demos/1/1-6.js {}

:::

- 首先绘制了一个菱形的 icon，这个 icon 用于后续的填充素材。然后一共绘制了若干示例，下面是所有示例汇总的最终效果。
- ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-37-37.png)

## 4. 🔗 引用

- [MDN - CanvasRenderingContext2D: createPattern() method][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern
