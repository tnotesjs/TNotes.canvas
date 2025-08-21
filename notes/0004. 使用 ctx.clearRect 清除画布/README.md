# [0004. 使用 ctx.clearRect 清除画布](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0004.%20%E4%BD%BF%E7%94%A8%20ctx.clearRect%20%E6%B8%85%E9%99%A4%E7%94%BB%E5%B8%83)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 📒 `ctx.clearRect`](#2--ctxclearrect)
- [3. 💻 demos.1 - 掌握 `ctx.clearRect` 的基本使用](#3--demos1---掌握-ctxclearrect-的基本使用)
- [4. 💻 demos.2 - 运动的小球](#4--demos2---运动的小球)

<!-- endregion:toc -->

## 1. 📝 概述

- 🎯 目标
  - 掌握 `ctx.clearRect` 的基本使用
  - 了解 `ctx.clearRect` 的应用场景
- 🫧 评价
  - `ctx.clearRect` 是用来清除画布上指定的矩形区域的，有点儿类似画布上的橡皮擦。
  - 需要理解擦除的本质是让指定的矩形区域变透明，并不是把指定区域中的线条（line）或者路径（path）给删除。
  - 这个 API 常用来做动画效果，原理很简单 —— 不断地擦掉前一帧，然后绘制下一帧。

## 2. 📒 `ctx.clearRect`

- **理解擦除的本质**
  - `ctx.clearRect(x, y, width, height)` 用于清除 canvas 上指定矩形区域的像素内容，使其变为完全透明。
  - 需要注意的是，Canvas 是在重置像素数据为透明，从而实现“擦除”的视觉效果。
- **应用场景**
  - 这个方法对于动画和游戏开发中的图形更新特别有用，它允许开发者清除旧的图像帧，从而在同一位置绘制新的帧。

| 应用场景 | 说明 |
| --- | --- |
| 动画 | 在每一帧动画开始时调用 `clearRect` 清除前一帧的像素内容，确保只显示当前帧的图形，实现平滑运动效果。 |
| 游戏开发 | 避免移动的图形（如角色、子弹）在移动过程中留下残留像素（拖影），通过清除背景区域或整个画布来实现动态更新。 |
| 用户界面 | 当 Canvas 渲染的 UI 元素（如按钮、进度条、图表）状态变化时，先清除旧内容区域，再绘制新状态，保证界面及时更新。 |

## 3. 💻 demos.1 - 掌握 `ctx.clearRect` 的基本使用

::: code-group

<<< ./demos/1/1.html {16-32} [1.html]

<<< ./demos/1/2.html {25} [2.html]

<<< ./demos/1/3.html {26} [3.html]

<<< ./demos/1/4.html {38} [4.html]

:::

::: swiper

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-22-50-14.png)

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-22-51-05.png)

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-22-51-24.png)

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-22-51-38.png)

:::

## 4. 💻 demos.2 - 运动的小球

::: code-group

<<< ./demos/2/1.html {11-40}

:::

- ![svg](./assets/2.gif)
