# [0005. canvas 的默认尺寸 300x150](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0005.%20canvas%20%E7%9A%84%E9%BB%98%E8%AE%A4%E5%B0%BA%E5%AF%B8%20300x150)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 💻 demos.1 - 理解 canvas 盒模型](#2--demos1---理解-canvas-盒模型)

<!-- endregion:toc -->

## 1. 🎯 目标

- `<canvas>` 盒模型
  - 知道 `<canvas>` 默认是 `300x150` 的行盒即可。

## 2. 💻 demos.1 - 理解 canvas 盒模型

::: code-group

<<< ./demos/1/1.html [1.html]

:::

- 如果你仅仅创建了一个 `canvas`，但是并没有指定它的 `width`、`height`，那么这个 `canvas` 的默认尺寸是 `300 * 150`。
- **最终的渲染结果**
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-22-58-50.png)
  - 从最终的渲染结果（并行显示）来看，会发现其实 canvas 并非块盒。
- **盒模型**
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-22-59-01.png)
