# [0028. 矩形边框旋转动画](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0028.%20%E7%9F%A9%E5%BD%A2%E8%BE%B9%E6%A1%86%E6%97%8B%E8%BD%AC%E5%8A%A8%E7%94%BB)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 💻 demos.1 - 矩形轮廓旋转动画](#2--demos1---矩形轮廓旋转动画)

<!-- endregion:toc -->

## 1. 📝 概述

- 🎯 目标
  - 读懂 demo
- 🫧 评价
  - `lineDashOffset` 设置虚线的位移，不仅可以作用于直线上，也可以在折线、曲线上。
  - 如果你想要让线条沿着绘制的路线动起来，都可以尝试下 `lineDashOffset`。

## 2. 💻 demos.1 - 矩形轮廓旋转动画

::: code-group

<<< ./demos/1/1.html {18-43}

:::

- 原理：
  - 通过不断设置虚线的位移 `lineDashOffset` 来实现的动画效果。
- 最终效果：
  - ![gif](assets/矩形边框旋转动画.gif)
