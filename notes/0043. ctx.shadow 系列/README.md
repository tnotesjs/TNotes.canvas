# [0043. ctx.shadow 系列](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0043.%20ctx.shadow%20%E7%B3%BB%E5%88%97)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 📒 shadow](#3--shadow)
- [4. 💻 demos.1 - 使用阴影](#4--demos1---使用阴影)
- [5. 💻 demos.2 - 结合渐变效果，绘制一个立体的小球](#5--demos2---结合渐变效果绘制一个立体的小球)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握阴影相关属性的基本使用

## 2. 🫧 评价

- `ctx.shadow` 一系列 API 跟 CSS 中的 `box-shadow` 很相似，都可以控制阴影的颜色、模糊程度、偏移量。

## 3. 📒 shadow

- 跟 css 中的 `box-shadow` 类似，canvas 也可以给盒子添加阴影。

| 属性            | 描述                                 |
| --------------- | ------------------------------------ |
| `shadowColor`   | 设置阴影的颜色                       |
| `shadowBlur`    | 设置阴影的模糊程度，值越大阴影越模糊 |
| `shadowOffsetX` | 设置阴影的水平偏移量                 |
| `shadowOffsetY` | 设置阴影的垂直偏移量                 |

## 4. 💻 demos.1 - 使用阴影

::: code-group

<<< ./demos/1/1.html {19-29} [1.html]

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-02-11.png)

## 5. 💻 demos.2 - 结合渐变效果，绘制一个立体的小球

::: code-group

<<< ./demos/2/1.html {19-35} [1.html]

:::

- 模拟场景：光源在左前方，阴影在右后方。
- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-02-24.png)
