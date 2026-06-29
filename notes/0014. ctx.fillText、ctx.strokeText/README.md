# [0014. ctx.fillText、ctx.strokeText](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0014.%20ctx.fillText%E3%80%81ctx.strokeText)

<!-- region:toc -->

- [1. 目标](#1-目标)
- [2. `ctx.fillText`、`ctx.strokeText`](#2-ctxfilltextctxstroketext)
- [3. demos.1 - `ctx.fillText` 和 `ctx.strokeText` 的基本使用](#3-demos1---ctxfilltext-和-ctxstroketext-的基本使用)

<!-- endregion:toc -->

## 1. 目标

- 掌握 `ctx.fillText` 和 `ctx.strokeText` 的基本使用

## 2. `ctx.fillText`、`ctx.strokeText`

- `ctx.fillText(text, x, y[, maxWidth])` 绘制填充文本
- `ctx.strokeText(text, x, y[, maxWidth])` 绘制描边文本
- 最多可以接收 4 个参数，分别表示：
  1. 文本内容
  2. 文本的横坐标
  3. 文本的纵坐标
  4. 文本的总宽度

## 3. demos.1 - `ctx.fillText` 和 `ctx.strokeText` 的基本使用

::: code-group

<<< ./demos/1/1.html {16-29}

:::

- ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-23-17-30.png)

::: code-group

<<< ./demos/1/2.html {16-26}

:::

- ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-23-17-40.png)

::: code-group

<<< ./demos/1/3.html {17-26}

:::

- ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-23-17-53.png)
