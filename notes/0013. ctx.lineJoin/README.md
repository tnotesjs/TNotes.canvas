# [0013. ctx.lineJoin](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0013.%20ctx.lineJoin)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - 使用 `ctx.lineJoin` 设置线条连接处的样式](#3--demos1---使用-ctxlinejoin-设置线条连接处的样式)

<!-- endregion:toc -->

## 1. 🎯 目标

- 学会使用 `ctx.lineJoin` 设置线条连接处的样式。

## 2. 🫧 评价

- `lineJoin` 设置的是线条连接点处的角样式，可选值：
  - miter `>` 尖角
  - round `)` 圆角
  - bevel `]` 平角、斜角
- 看一张图就明白了：
  - ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-18-20-14-47.png)

## 3. 💻 demos.1 - 使用 `ctx.lineJoin` 设置线条连接处的样式

::: code-group

<<< ./demos/1/1.html {20-46}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-23-15-35.png)
