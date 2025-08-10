# [0004. 使用 ctx.clearRect 清除画布](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0004.%20%E4%BD%BF%E7%94%A8%20ctx.clearRect%20%E6%B8%85%E9%99%A4%E7%94%BB%E5%B8%83)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 📒 `ctx.clearRect`](#2--ctxclearrect)
- [3. 💻 demos.1 - 掌握 `ctx.clearRect` 的基本使用](#3--demos1---掌握-ctxclearrect-的基本使用)

<!-- endregion:toc -->

## 1. 📝 概述

- 掌握 `ctx.clearRect` 的基本使用
- 了解 `ctx.clearRect` 的应用场景

## 2. 📒 `ctx.clearRect`

- **理解擦除的本质**
  - `ctx.clearRect(x, y, width, height)` 用于在 canvas 上清除指定的矩形区域，使该区域完全透明。
  - 需要理解 `ctx.clearRect` 清除画布的本质是让指定区域 **透明**，而非真的将路径给擦掉了。
- **应用场景**
  - 这个方法对于动画和游戏开发中的图形更新特别有用，它允许开发者清除旧的图像帧，从而在同一位置绘制新的帧。

| 应用场景 | 说明                                               |
| -------- | -------------------------------------------------- |
| 动画     | 在每个动画帧开始时清除旧的画面内容。               |
| 游戏开发 | 清除移动对象留下的轨迹，比如角色、弹药或其他元素。 |
| 用户界面 | 在用户界面元素变动时，清除旧元素的区域以更新界面。 |

## 3. 💻 demos.1 - 掌握 `ctx.clearRect` 的基本使用

::: code-group

<<< ./demos/1/1.html [1.html]

<<< ./demos/1/2.html {25} [2.html]

<<< ./demos/1/3.html {26} [3.html]

<<< ./demos/1/4.html {38} [4.html]

:::

::: swiper

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-22-50-14.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-22-51-05.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-22-51-24.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-22-51-38.png)

:::
