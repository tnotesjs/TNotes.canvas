# [0021. ctx.rect](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0021.%20ctx.rect)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - 使用 `ctx.rect()` 来绘制一个填充路径](#3--demos1---使用-ctxrect-来绘制一个填充路径)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `ctx.rect()` 的基本使用

## 2. 🫧 评价

- 很简单的一个 API，扫一眼 demo 即可。
- 需要注意的是 `ctx.rect()` 描述的是一个矩形的路径，如果要绘制出矩形，还需要 `stoke`（描边） 或者 `fill`（填充）。

## 3. 💻 demos.1 - 使用 `ctx.rect()` 来绘制一个填充路径

::: code-group

<<< ./demos/1/1.html {17-29} [1.html]

:::

- 最终效果
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-00-48-50.png)
