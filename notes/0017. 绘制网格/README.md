# [0017. 绘制网格](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0017.%20%E7%BB%98%E5%88%B6%E7%BD%91%E6%A0%BC)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 封装 drawGrid](#3--封装-drawgrid)
- [4. 💻 demos.1 - 使用 `drawGrid` 来绘制坐标网格](#4--demos1---使用-drawgrid-来绘制坐标网格)
- [5. 💻 demos.2 - 画一个矩形](#5--demos2---画一个矩形)

<!-- endregion:toc -->

## 1. 🎯 目标

- 结合注释，能大致看懂 `drawGrid.js` 绘制网格的实现原理即可。

## 2. 🫧 评价

- 做一个可视化的网格，作为参考坐标系，以便更直观地查看坐标，主要是辅助学习用。
- 后续笔记中绘制的图形，会先调用 `drawGrid.js` 来绘制网格，再基于网格上的坐标参考线来绘制图形，图形的尺寸和位置等信息会尽量沿着网格线来绘制，以便更直观地了解到点位信息。
  - 比如，demos.2 绘制了一个矩形，在 `drawGrid.js` 绘制的坐标系的加持下，瞅一眼绘制矩形的代码 `ctx.fillRect(x, y, width, height)`，就能一目了然了。
- 其中 `drawGrid.js` 用到的一些知识点（比如 `ctx.beginPath()`、`ctx.save()`、`ctx.restore()` …… 等 API 的介绍），在后续文档中会介绍。

## 3. 💻 封装 drawGrid

::: code-group

<<< ./demos/common/drawGrid.js {} [common/drawGrid.js]

:::

- `drawGrid.js` 用到的一些知识点，在后续文档中会介绍。
- 这里提前将其丢到这里来介绍，是为了给后续内容做一个铺垫，将不可见的坐标可视化地绘制出来，参考着可视化的坐标来学习，效果也许会更好。毕竟类似 canvas 和 svg 这类的可视化技术，无时无刻不在跟不可见的坐标系打交道。

## 4. 💻 demos.1 - 使用 `drawGrid` 来绘制坐标网格

::: code-group

<<< ./demos/1/1.html {}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-23-22-09.png)

## 5. 💻 demos.2 - 画一个矩形

::: code-group

<<< ./demos/2/1.html {20-21}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-23-22-19.png)
