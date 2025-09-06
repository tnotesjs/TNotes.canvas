# [0006. 使用 JSDoc 来标注 canvas 变量类型](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0006.%20%E4%BD%BF%E7%94%A8%20JSDoc%20%E6%9D%A5%E6%A0%87%E6%B3%A8%20canvas%20%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)

<!-- region:toc -->

- [1. 🎯 目录](#1--目录)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.2 - 创建新的 canvas](#3--demos2---创建新的-canvas)
- [4. 💻 demos.1 - 查询已有的 canvas](#4--demos1---查询已有的-canvas)

<!-- endregion:toc -->

## 1. 🎯 目录

- 学会使用 JSDoc 注释来标注 canvas 变量类型，以获取更好的 vscode 智能提示。

## 2. 🫧 评价

- 如果是通过 JS 创建的 canvas 元素对象，那么默认是带有 vscode 的智能提示的。
- 如果是通过 DOM 查询获取到的 canvas 元素对象，那么 vscode 的智能提示会丢失，这时候若想要获取更加友好的智能提示，就需要通过 JSDoc 来手动标注类型信息了。

## 3. 💻 demos.2 - 创建新的 canvas

::: code-group

<<< ./demos/2/1.html {10-13} [1.html]

:::

- 如果想要获取到 IDE 的智能提示，有些教程中的做法是推荐你使用 `createElement` 的方式来创建 `canvas`，这么做的目的是为了获取到更有好的智能提示。
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-23-01-15.png)
  - 此时 IDE 能够推断出 canvas 变量的类型，因此它能够非常智能地给予咱们提示。
  - 比如，你输入 `canvas.getcon` 就会提示出对应的 API，此时直接按下 tap 或者回车键，即可快速生成内容。
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-23-01-33.png)
- 但是，有些情况下，我们的 canvas 并非通过 `document.createElement('canvas')` 这种方式来创建的，而是显示地写在 html 中的标签 `<canvas></canvas>`，这时如果还想获取智能提示，可以通过 JSDoc 注释来解决。

## 4. 💻 demos.1 - 查询已有的 canvas

::: code-group

<<< ./demos/1/1.html {20} [1.html]

:::

- 如果你页面上如果已经有了 canvas 标签，然后你通过查询页面元素的方式（比如 `document.getElementById('c')`）找到这个标签，此时默认是没有智能提示的，这个问题可以通过 JSDoc 标注的方式来解决。
- 智能提示：
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-23-00-31.png)
