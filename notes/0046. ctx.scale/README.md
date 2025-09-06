# [0046. ctx.scale](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0046.%20ctx.scale)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 📒 `ctx.scale`](#3--ctxscale)
- [4. 💻 demos.1 - `ctx.scale` 的基本使用](#4--demos1---ctxscale-的基本使用)
- [5. 🔗 References](#5--references)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `ctx.scale` 的基本使用

## 2. 🫧 评价

- 坐标系变换原理：`scale()` 并不会改变图形本身，而是 **变换整个绘图坐标系**：
  - 原点 `(0,0)` 不变
  - 单位长度被缩放
  - 所有后续绘制都基于这个“被拉伸”的坐标系
- 可以理解为：画布被“拉伸”了，你画的东西自然也跟着变大或变小。
- `ctx.scale` 在实际开发中还蛮实用的，比如做缩放预览、高清适配或者手势放大时，一行代码就能让后续在画布上绘制的内容按比例缩放、实现镜像效果（水平翻转、垂直翻转）等。
- 不过得小心它会“污染”后续绘制，记得用 `save()` 和 `restore()` 把作用范围锁住，在绘制完需要缩放的图形后，记得恢复到 `scale` 之前的状态，尽量不要污染后续的绘制操作。

## 3. 📒 `ctx.scale`

- [`ctx.scale`][1] 用于在画布上缩放绘制的图像。

```js
ctx.scale(sx, sy)
```

- 参数说明：
  - `sx`：x 轴方向的缩放因子（scale factor）
  - `sy`：y 轴方向的缩放因子（scale factor）
  - 注意：`sy` 是可选的。如果未提供，则默认与 `sx` 相同（即等比缩放）。
- 通过这个方法，你可以更改画布上图形的大小，而不改变图形本身的定义。
- 常用于：放大细节、创建镜像、适配不同分辨率、实现缩放动画等。
- 不会对之前绘制的图像起作用，但会影响所有后续绘制操作。
- 如果传入的参数是负数，那么将会导致坐标系反转，从而实现水平翻转、垂直翻转的效果。
- 这种变换对后续的所有绘图操作都是有效的，直到画布的缩放状态被重置或修改，因此建议配合 `save()` / `restore()` 使用，比如，可以在缩放坐标系之前保存一下状态，完成绘制之后再恢复状态。
- 常见用法：

| 用法                  | 说明                                  |
| --------------------- | ------------------------------------- |
| `ctx.scale(1, -1)`    | 垂直翻转（常用于将 y 轴改为向上为正） |
| `ctx.scale(-1, 1)`    | 水平翻转                              |
| `ctx.scale(0.5, 0.5)` | 整体缩小为原来的一半（适合做缩略图）  |

## 4. 💻 demos.1 - `ctx.scale` 的基本使用

::: code-group

<<< ./demos/1/1.html {20-35}

<<< ./demos/1/2.html {20-59}

<<< ./demos/1/3.html {20-47}

:::

::: swiper

![1](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-15-05-25.png)

![2](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-24-22-18-23.png)

![3](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-24-22-18-30.png)

:::

- `1.html` 缩放效果
- `2.html` 镜像效果
- `3.html` 对比 `2.html`，理解 `ctx.save()`、`ctx.restore()` 在这种坐标变换效果中起到的作用 —— 避免“污染”后续绘图环境。

## 5. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale
- MDN - CanvasRenderingContext2D：scale() 方法

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale
