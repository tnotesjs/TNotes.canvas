# [0043. 给图像添加阴影](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0043.%20%E7%BB%99%E5%9B%BE%E5%83%8F%E6%B7%BB%E5%8A%A0%E9%98%B4%E5%BD%B1)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 📒 shadow](#2--shadow)
- [3. 💻 demos.1 - 使用阴影](#3--demos1---使用阴影)
- [4. 💻 demos.2 - 结合渐变效果，绘制一个立体的小球](#4--demos2---结合渐变效果绘制一个立体的小球)

<!-- endregion:toc -->

## 1. 📝 概述

- 掌握阴影相关属性的基本使用

## 2. 📒 shadow

- 跟 css 中的 `box-shadow` 类似，canvas 也可以给盒子添加阴影。

| 属性            | 描述                                 |
| --------------- | ------------------------------------ |
| `shadowColor`   | 设置阴影的颜色                       |
| `shadowBlur`    | 设置阴影的模糊程度，值越大阴影越模糊 |
| `shadowOffsetX` | 设置阴影的水平偏移量                 |
| `shadowOffsetY` | 设置阴影的垂直偏移量                 |

## 3. 💻 demos.1 - 使用阴影

::: code-group

<<< ./demos/1/1.html {19-29} [1.html]

:::

- 最终效果：
  - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-02-11.png)

## 4. 💻 demos.2 - 结合渐变效果，绘制一个立体的小球

::: code-group

<<< ./demos/2/1.html {19-35} [1.html]

:::

- 模拟场景：光源在左前方，阴影在右后方。
- 最终效果：
  - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-02-24.png)
