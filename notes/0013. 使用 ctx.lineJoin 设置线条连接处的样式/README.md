# [0013. 使用 ctx.lineJoin 设置线条连接处的样式](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0013.%20%E4%BD%BF%E7%94%A8%20ctx.lineJoin%20%E8%AE%BE%E7%BD%AE%E7%BA%BF%E6%9D%A1%E8%BF%9E%E6%8E%A5%E5%A4%84%E7%9A%84%E6%A0%B7%E5%BC%8F)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 💻 demo](#2--demo)

<!-- endregion:toc -->

## 1. 📝 概述

- 知识点：
  - 学会使用 `ctx.lineJoin` 设置线条连接处的样式。
- 评价：
  - `lineJoin` 设置的是线条连接点处的角样式，可选值：
    - miter `>` 尖角
    - round `)` 圆角
    - bevel `]` 平角、斜角
  - 看一张图就明白了：
    - ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-18-20-14-47.png)

## 2. 💻 demo

::: code-group

<<< ./demos/1/1.html {20-46}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-23-15-35.png)
