# [0011. ctx.miterLimit](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0011.%20ctx.miterLimit)

<!-- region:toc -->

- [1. 目标](#1-目标)
- [2. 评价](#2-评价)
- [3. `miterLimit`](#3-miterlimit)
- [4. demos.1 - `miterLimit` 的基本使用](#4-demos1---miterlimit-的基本使用)
- [5. 引用](#5-引用)

<!-- endregion:toc -->

## 1. 目标

- `miterLimit` 的基本使用

## 2. 评价

- `miterLimit` 的作用非常简单，一言以蔽之 —— 约束角的尖锐程度。
- 越大的值意味着允许越尖锐的角。
- 若角的尖锐程度超过了 `miterLimit` 设置的阈值，那么 `miter` 尖角就会自动转为 `bevel` 平角。
- `miterLimit` 有计算公式，它的值跟 `miterLength`（斜接长度）、`lineWidth`（线条宽度）有关。

## 3. `miterLimit`

- `miterLimit` 控制的是角从 `miter` 类型变为 `bevel` 类型的阈值。
- 本节介绍的内容，和下面这个公式有关。

$$
\text{miterLimit} = \frac{\text{miterLength（斜接长度）}}{\text{lineWidth（线条宽度）}}
$$

- 通过下面这张图，认识 `lineWidth`、`miterLength` 表示的分别是哪部分的尺寸。
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-23-11-03.png)
- 通过下面这张图，认识什么是 `round`、`miter`、`bevel`
  - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-18-20-14-47.png)
- `ctx.miterLimit`
  - `ctx.miterLimit` 是 HTML5 Canvas 2D API 中的一个属性，用于设置或返回当两条线相交时接合处的最大斜接长度（miter length）。
  - 斜接长度是指在两条线相交形成尖角时，内角顶点到外角顶点的距离。
  - 这个属性主要用于控制具有 miter 接合类型的线条边角的外观。
- 越大越尖、越小越平
  - `miterLimit` 值是一个大于等于 `1` 的数字，它表示允许的最大斜接长度与线条宽度的比率，默认值通常是 `10`。
  - 如果斜接长度超过 `miterLimit` 的值，边角会以 `lineJoin` 的 `]` 类型来显示。
  - 当 `miterLimit` 设置得较小，如接近于 `1` 时，只要相交角稍微尖锐一点，接合方式就会从 `miter` 转为 `bevel`。
  - 当 `miterLimit` 设置得较大时，即使是非常尖锐的角，接合处也会尝试保持 `miter` 类型，可能导致角部分非常尖长。
- 应用场景
  - 如果角度非常尖锐，斜接长度可能会异常长，导致图形显示不理想。
  - 比如，当线条比较粗，折线夹角比较小的时候，`lineJoin` 的 `miter` 设置形成的尖就会很长，这时候可以利用该属性来控制尖角的长短。
  - `miterLimit` 属性允许你设置一个阈值，超过这个值的斜接长度会自动转换为 bevel 类型的接合，即切去尖角部分。
- 小结
  - 角可以尖、可以长，但是得有个度，这个度就是 `miterLimit`。
  - 换算公式： $miterLimit = miterLength / lineWidth$

## 4. demos.1 - `miterLimit` 的基本使用

::: code-group

<<< ./demos/1/1.html {20-58}

<<< ./demos/1/2.html {20-43}

:::

- `1.html`
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-23-11-26.png)
- `2.html`
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-03-23-11-54.png)

## 5. 引用

- [CanvasRenderingContext2D.miterLimit 属性][1]

[1]: https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit
