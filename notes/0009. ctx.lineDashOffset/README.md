# [0009. ctx.lineDashOffset](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0009.%20ctx.lineDashOffset)

<!-- region:toc -->

- [1. 目标](#1-目标)
- [2. 评价](#2-评价)
- [3. `ctx.lineDashOffset`](#3-ctxlinedashoffset)
- [4. demos.1 - 使用 `ctx.lineDashOffset` 设置虚线的偏移量](#4-demos1---使用-ctxlinedashoffset-设置虚线的偏移量)

<!-- endregion:toc -->

## 1. 目标

- 掌握 `ctx.lineDashOffset` 的基本使用

## 2. 评价

- `ctx.lineDashOffset` 是用来设置线段的偏移方向的，值可以是正数或者负数，正负号决定了偏移的方向。
- 类似这样改变位置的属性，往往都可以用来做动画效果。
- `lineDashOffset` 设置虚线的位移，不仅可以作用于直线上，也可以在折线、曲线上。
- 如果你想要让线条沿着绘制的路线动起来，都可以尝试下 `lineDashOffset`。

## 3. `ctx.lineDashOffset`

- 动画
  - `lineDashOffset` 这个属性常用于实现线条相关的动画效果。
  - 有不少跟 **线条移动相关的动画**，就是使用这个属性来实现的。
- 方向
  - 正数：往左边偏移 <-
  - 负数：往右边偏移 ->

## 4. demos.1 - 使用 `ctx.lineDashOffset` 设置虚线的偏移量

::: code-group

<<< ./demos/1/1.html {16-44}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-23-07-43.png)
  - 一共 3 根线：
    - 第 1 根线作为参考
    - 第 2 根线向右偏移 50 个单位
    - 第 3 根线向左偏移 20 个单位
  - 越界自动截断
    - 这 3 根线绘制的横向（x 轴）有效区域是 [50, 450]，越界的部分将会自动截断隐藏。
