# [0025. ctx.quadraticCurveTo、ctx.bezierCurveTo](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0025.%20ctx.quadraticCurveTo%E3%80%81ctx.bezierCurveTo)

<!-- region:toc -->

- [📂 TNotes.yuque](https://www.yuque.com/tdahuyou/tnotes.yuque/)
  - [TNotes.yuque.canvas.0025](https://www.yuque.com/tdahuyou/tnotes.yuque/canvas.0025)
- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 📒 二次、三次贝塞尔曲线绘制原理](#3--二次三次贝塞尔曲线绘制原理)
- [4. 💻 demos.1 - 二次贝塞尔曲线](#4--demos1---二次贝塞尔曲线)
- [5. 💻 demos.2 - 三次贝塞尔曲线](#5--demos2---三次贝塞尔曲线)
- [6. 🔗 引用](#6--引用)

<!-- endregion:toc -->

## 1. 🎯 目标

- 学会如何使用 `ctx.quadraticCurveTo`、`ctx.bezierCurveTo` 绘制贝塞尔曲线

## 2. 🫧 评价

- `ctx.quadraticCurveTo`、`ctx.bezierCurveTo` 这俩 API 的使用很简单，无非就是传入 2 个点还是 3 个点。
- 重点在于理解贝塞尔曲线的绘制原理，理解原理后，自然就理解这俩 API 应该如何使用了。
- 通过笔记中对“二次、三次贝塞尔曲线绘制原理”的简介，能够理解 demos 中绘制出的曲线形状为啥长这样即可。
- 笔记中提到的绘制公式，简单过一眼就行，感兴趣的话，也可以在纸上试着画一下，知道比例关系分别是哪些边比哪些边。

## 3. 📒 二次、三次贝塞尔曲线绘制原理

- 贝塞尔曲线的相关内容，是个通用的知识点，在学习 canvas、svg、css 等跟 UI 绘图相关的技术时都会接触到。
  - 在 canvas、svg 中，我们通过指定起点、终点和控制点的坐标，来绘制二次、三次贝塞尔曲线。
  - 在 css 中，我们也可以通过 chrome devtools 来手动调节动画效果或过渡效果的变化贝塞尔曲线。
- 二次贝塞尔曲线的绘制原理
  - ![img](./assets/二阶贝塞尔曲线.gif)
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-10-50-27.png)
  - 假设：
    - `x1 = P0，P01 之间的距离`
    - `x2 = P0，P1 之间的距离`
    - `x3 = P1，P12 之间的距离`
    - `x4 = P1，P2 之间的距离`
    - `x5 = P01，P02 之间的距离`
    - `x6 = P01，P12 之间的距离`
  - 存在一个参数 t，使得上述 x 满足以下条件：
    - `t = x1 / x2`
    - `t = x3 / x4`
    - `t = x5 / x6`
  - 按照上述规则不难推断出：
    - 如果 t 是 0，那么 P02 位于起点 P0 位置；
    - 如果 t 是 1，那么 P02 位于终点 P2 位置；
    - 当 t 介于 0-1 之间时，可以通过上述规则找到 P02 点的位置；
    - 这意味着，当 t 从 0 变到 1 时，会获得无数个 P02 点，这就形成了一个光滑的曲线 —— 由无数个 P02 点连成的曲线；
  - 上述就是二次贝塞尔曲线的绘制原理。
- 三次贝塞尔曲线绘制原理
  - ![img](./assets/三阶贝塞尔曲线.gif)
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-10-52-06.png)
  - 二次贝塞尔曲线有一个控制点，三次贝塞尔曲线有两个控制点。在理解了二次贝塞尔曲线的绘制原理后，找葫芦画瓢，三次也是一样的。
  - 假设：
    - `x1 = P0，P01 之间的距离`
    - `x2 = P0，P1 之间的距离`
    - `x3 = P1，P12 之间的距离`
    - `x4 = P1，P2 之间的距离`
    - `x5 = P01，P02 之间的距离`
    - `x6 = P01，P12 之间的距离`
    - `x7 = P2，P23 之间的距离`
    - `x8 = P2，P3 之间的距离`
    - `x9 = P12，P13 之间的距离`
    - `x10 = P12，P23 之间的距离`
  - 存在一个参数 t，使得上述 x 满足以下条件：
    - `t = x1 / x2`
    - `t = x3 / x4`
    - `t = x5 / x6`
    - `t = x7 / x8`
    - `t = x9 / x10`
  - 按照上述规则不难推断出：
    - 如果 t 是 0，那么 P03 位于起点 P0 位置；
    - 如果 t 是 1，那么 P03 位于终点 P3 位置；
    - 当 t 介于 0-1 之间时，可以通过上述规则找到 P03 点的位置；
    - 这意味着，当 t 从 0 变到 1 时，会获得无数个 P03 点，这就形成了一个光滑的曲线 —— 由无数个 P03 点连成的曲线；

## 4. 💻 demos.1 - 二次贝塞尔曲线

::: code-group

<<< ./demos/1/1.html {28-39}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-10-53-14.png)

## 5. 💻 demos.2 - 三次贝塞尔曲线

::: code-group

<<< ./demos/2/1.html {31-42}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-10-53-26.png)

## 6. 🔗 引用

- [贝塞尔曲线原理（CSDN）][1]

[1]: https://blog.csdn.net/m0_37602827/article/details/118165217
