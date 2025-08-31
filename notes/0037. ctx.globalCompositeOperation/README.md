# [0037. ctx.globalCompositeOperation](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0037.%20ctx.globalCompositeOperation)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 📒 `ctx.globalCompositeOperation`](#3--ctxglobalcompositeoperation)
- [4. 💻 demos common 模块简介](#4--demos-common-模块简介)
- [5. 💻 demos.1 - source & destination](#5--demos1---source--destination)
- [6. 💻 demos.2 - 颜色合成](#6--demos2---颜色合成)
- [7. 💻 demos.3 - MDN 官方示例](#7--demos3---mdn-官方示例)
- [8. 🔗 References](#8--references)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `ctx.globalCompositeOperation` 的基本使用
- 了解每个模式的大致效果
- 知道在什么场景下使用哪种模式

## 2. 🫧 评价

- 先熟悉几个重要词汇：
  - composite（合成）表示合成操作，可选值见笔记中的表格
  - source（源）指的是你正尝试在画布上绘制的新图形或图像
  - destination（目标）指的是画布上已经存在的图形或图像。
  - 有助于对 `ctx.globalCompositeOperation` 的相关属性值（`source-over`、`destination-in`……）的理解。
- demos 评价：
  - demos.1 比较好理解，可以结合最终效果对比着一个个属性值看即可。
  - demos.2 涉及到了颜色合成，比如更亮 lighter、更暗 darken、颜色盘 hue 等等和颜色相关的操作，不要求掌握具体的混合模式算法。
  - demos.3 是 MDN 官方的示例，将所有的属性值都汇总到了一起来对比效果。
- **不同的混合模式采用不同的算法来计算源图像和目标图像像素的颜色值**。
- **不要求掌握具体的算法**
  - 这些算法的具体实现由浏览器引擎处理，作为开发者，我们只需了解其效果和应用场景即可。
  - 结合笔记中提到的 demos，对各混合模式最终呈现的效果有个初步的大致印象。
  - 目前还看不理解不同的混合模式的颜色具体是如何计算出来的，也没查过相应的算法，若感兴趣，可自行查阅。
- **实际使用步骤**
  - 在实际使用中，可以通过测试不同模式，看看哪个模式能达到所需的视觉效果，就用哪个模式。
  - 再具体一些，比如：
  - 【1】如果你的需求是让合成的区域更亮一些，能想到 `lighter` 这个值就行了；
  - 【2】如果你的需求是让合成的区域更暗一些，能想到 `darken` 这个值就行了；
  - 至于如何微调就先甭想了。
  - 补充：若确实有微调的需求，可以尝试从 `source`、`destination` 入手，比如使用 `ctx.getImageData` 获取到源、目标图像的所有像素信息，再进行像素计算进行微调，并结合 `ctx.globalCompositeOperation` 设置不同的混合模式来预览效果。

## 3. 📒 `ctx.globalCompositeOperation`

- `ctx.globalCompositeOperation`
  - 在画布上绘制新图形时，`ctx.globalCompositeOperation` 用于设置要在绘制新图形时使用的合成操作的类型。
  - 通过改变 `ctx.globalCompositeOperation` 属性的值，你可以定义新图形应该如何与已有图形相结合。
  - 从代码书写层面，需要掌握 `ctx.globalCompositeOperation` 的写法。至于最终渲染效果的一些细节先不管，这部分的内容涉及到图形合成技术相关的专业知识。
  - 应用场景就比较多了，能实现一些惊艳的效果，比如 —— 刮刮乐“橡皮擦”效果，就是使用 `destination-out` 在原图上面绘制新的图形，把原图形中的图案给擦掉。
- **属性值列表**

| 属性值 | 描述 |
| --- | --- |
| `source-over` | 默认设置，在现有画布上绘制新图形 |
| `source-in` | 仅在新形状和目标画布重叠的地方绘制新形状，其他都是透明的 |
| `source-out` | 在不与现有画布内容重叠的地方绘制新图形 |
| `source-atop` | 只在与现有画布内容重叠的地方绘制新图形 |
| `destination-over` | 在现有画布内容的后面绘制新的图形 |
| `destination-in` | 仅保留现有画布内容和新形状重叠的部分，其他都是透明的 |
| `destination-out` | 仅保留现有画布内容和新形状不重叠的部分 |
| `destination-atop` | 仅保留现有画布内容和新形状重叠的部分，新形状在现有画布内容的后面绘制 |
| `lighter` | 两个重叠图形的颜色通过颜色值相加来确定 |
| `copy` | 只显示新图形 |
| `xor` | 形状在重叠处变为透明，并在其他地方正常绘制 |
| `multiply` | 将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片 |
| `screen` | 像素被倒转、相乘、再倒转，结果是一幅更明亮的图片（与 multiply 相反） |
| `overlay` | multiply 和 screen 的结合，原本暗的地方更暗，原本亮的地方更亮 |
| `darken` | 保留两个图层中最暗的像素 |
| `lighten` | 保留两个图层中最亮的像素 |
| `color-dodge` | 将底层除以顶层的反置 |
| `color-burn` | 将反置的底层除以顶层，然后将结果反过来 |
| `hard-light` | 类似于 overlay，multiply 和 screen 的结合——但上下图层互换了 |
| `soft-light` | 柔和版本的 hard-light，纯黑或纯白不会导致纯黑或纯白 |
| `difference` | 从顶层减去底层（或反之亦然），始终得到正值 |
| `exclusion` | 与 difference 类似，但对比度较低 |
| `hue` | 保留底层的亮度（luma）和色度（chroma），同时采用顶层的色调（hue） |
| `saturation` | 保留底层的亮度和色调，同时采用顶层的色度 |
| `color` | 保留了底层的亮度，同时采用了顶层的色调和色度 |
| `luminosity` | 保持底层的色调和色度，同时采用顶层的亮度 |

## 4. 💻 demos common 模块简介

::: code-group

<<< ./demos/common/composite.js {35-43}

:::

- `composite` 是一个辅助函数，封装一些通用的逻辑，以便后续 demos 使用。
- 重点关注核心逻辑 core logic 部分即可。

## 5. 💻 demos.1 - source & destination

::: code-group

<<< ./demos/1/1.js

<<< ./demos/1/1.html

:::

- ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-30-15-39-44.png)

## 6. 💻 demos.2 - 颜色合成

::: code-group

<<< ./demos/2/1.js

<<< ./demos/2/1.html

:::

- ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-30-15-39-13.png)

## 7. 💻 demos.3 - MDN 官方示例

::: code-group

<<< ./demos/3/global.js

<<< ./demos/3/main.js

<<< ./demos/3/utils.js

<<< ./demos/3/1.html

:::

1. `source-over` `source-in` `source-out` `source-atop`
2. `destination-over` `destination-in` `destination-out` `destination-atop`
3. `lighter` `copy` `xor` `multiply`
4. `screen` `overlay` `darken` `lighten`
5. `color-dodge` `color-burn` `hard-light` `soft-light`
6. `difference` `exclusion` `hue` `saturation`
7. `color` `luminosity`

::: swiper

![1](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-31-10-21-20.png)

![2](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-31-10-21-40.png)

![3](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-31-10-22-19.png)

![4](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-31-10-22-35.png)

![5](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-31-10-22-42.png)

![6](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-31-10-22-52.png)

![7](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-31-10-23-01.png)

:::

## 8. 🔗 References

- [MDN - ctx.globalCompositeOperation][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
