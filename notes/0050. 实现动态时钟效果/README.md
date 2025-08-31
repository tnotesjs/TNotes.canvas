# [0050. 实现动态时钟效果](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0050.%20%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E6%97%B6%E9%92%9F%E6%95%88%E6%9E%9C)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - 动态始终效果实现源码](#3--demos1---动态始终效果实现源码)

<!-- endregion:toc -->

## 1. 🎯 目标

- 理解 canvas 时钟效果的实现逻辑

## 2. 🫧 评价

- 动态时钟的最终实现效果
  - ![gif](./assets/0050-实现动态时钟效果.gif)
- UI 随便写写，重点在于理解 canvas 时钟效果的实现逻辑。

## 3. 💻 demos.1 - 动态始终效果实现源码

::: code-group

<<< ./demos/1/index.js {2-51,55-125}

<<< ./demos/1/index.css {}

<<< ./demos/1/index.html {}

:::

- html、css 没啥可说的，核心逻辑都在 js 中。
- js 主要由两个部分
  1. 静态部分：绘制时钟背景，这一部分主要就是绘制时钟背景所需要的各个组件。
  2. 动态部分：绘制动态的指针，这一部分主要通过 js 来控制 3 个指针的转向，每秒更新一次。
