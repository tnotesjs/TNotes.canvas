# [0002. 判断浏览器是否支持 canvas](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0002.%20%E5%88%A4%E6%96%AD%E6%B5%8F%E8%A7%88%E5%99%A8%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81%20canvas)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 💻 demos.1 - 判断浏览器是否支持 canvas 的两种方式](#2--demos1---判断浏览器是否支持-canvas-的两种方式)

<!-- endregion:toc -->

## 1. 📝 概述

- 掌握判断浏览器是否支持 canvas 的两种方式。

## 2. 💻 demos.1 - 判断浏览器是否支持 canvas 的两种方式

::: code-group

<<< ./demos/1/1.html {16,20-23} [1.html]

:::

- ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-07-20-12-00-13.png)
- 因为当前环境的浏览器支持 canvas，所以：
  - 打开这个页面后，你将会看到一个空白的界面，不会显示 `<canvas>` 标签中的内容：“您的浏览器版本过低，不支持 canvas，请升级浏览器或更换浏览器”；
  - 在 devtools 中的 console 模块中输出了 `浏览器支持canvas`，这说明 `canvas.getContext` 是存在的，也证明了 canvas 是支持的；
