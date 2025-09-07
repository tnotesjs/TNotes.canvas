# [0035. 使用 ctx.drawImage 引入图像](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0035.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E5%BC%95%E5%85%A5%E5%9B%BE%E5%83%8F)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - 保持图片原始尺寸](#3--demos1---保持图片原始尺寸)
- [4. 💻 demos.2 - 约束图片尺寸](#4--demos2---约束图片尺寸)
- [5. 💻 demos.3 - 裁剪图片](#5--demos3---裁剪图片)
- [6. 🔗 引用](#6--引用)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `ctx.drawImage` 的基本使用

## 2. 🫧 评价

- `ctx.drawImage` draw 表示画，Image 表示图片，顾名思义，这 API 是用来画图片的。
- `ctx.drawImage` 常见有 3 种写法，其中“截图”功能比较 🐂 🍺，可以玩出很多花样。
- 你可以自由裁剪图片的某一部分矩形区域来显示，实现仅展示一张图片的局部效果，在制作一些简单的连续的动画效果时特别有用。

```markmap
- [drawImage](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - drawImage(image, dx, dy)
    - 将图像（image）绘制到 canvas 上，图像左上角位于（dx, dy）。
    - 这种写法图像将按照原尺寸展示。
  - drawImage(image, dx, dy, dWidth, dHeight)
    - 将图像（image）绘制到 canvas 上，并调整图像的大小到 dWidth 和 dHeight，图像左上角位于(dx, dy)。
    - 这种写法可以手动约束图像的尺寸，若图像的原始宽高比和我们设置的比例不一样，那么图像会被拉伸。
  - drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    - 从源图像（image）中截取一个矩形区域 (sx, sy, sWidth, sHeight)，并将该区域缩放后绘制到 canvas 上的矩形区域 (dx, dy, dWidth, dHeight)。
    - 这种写法可以理解为“截图”效果，可以选择性地展示这张图中我们希望展示的部分。
    - 可用于做动画。
    - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-12-01-13-42.png)
  - 动画效果
    - 每间隔一段指定的时间
    - 在指定的区域
    - 展示指定的图像
```

## 3. 💻 demos.1 - 保持图片原始尺寸

::: code-group

<<< ./demos/1/1.html {25} [1.html]

:::

- 最终效果
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-47-57.png)

## 4. 💻 demos.2 - 约束图片尺寸

::: code-group

<<< ./demos/2/1.html {29} [1.html]

:::

- 最终效果
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-48-03.png)

## 5. 💻 demos.3 - 裁剪图片

::: code-group

<<< ./demos/3/1.html {26} [1.html]

:::

- `ctx.globalAlpha = 0.5` 设置为半透明的效果，以便查看坐标。
- 最终效果
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-48-10.png)

## 6. 🔗 引用

- [CanvasRenderingContext2D.drawImage 方法][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/**drawImage**
