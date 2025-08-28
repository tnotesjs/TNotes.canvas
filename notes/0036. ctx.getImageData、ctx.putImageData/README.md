# [0036. ctx.getImageData、ctx.putImageData](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0036.%20ctx.getImageData%E3%80%81ctx.putImageData)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 📒 `ctx.getImageData`、`ctx.putImageData`](#3--ctxgetimagedatactxputimagedata)
- [4. 🔍 查看素材原图](#4--查看素材原图)
- [5. 💻 demos.1 - 置灰](#5--demos1---置灰)
- [6. 💻 demos.2 - 图像反色处理](#6--demos2---图像反色处理)
- [7. 💻 demos.3 - 置蓝](#7--demos3---置蓝)
- [8. 🔗 References](#8--references)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `ctx.getImageData`、`ctx.putImageData` 的基本使用

## 2. 🫧 评价

- 先对 `ctx.getImageData`、`ctx.putImageData` 的使用有个基本的了解即可。想要玩 6️⃣ 它们，还需要去学习图像颜色处理的更多知识。
- 文档中提到的示例，处理逻辑都是：
  - 【1】先读图片数据 `ctx.getImageData`
  - 【2】再对图片数据进行修改
  - 【3】最后将修改后的数据写入图片 `ctx.putImageData`

## 3. 📒 `ctx.getImageData`、`ctx.putImageData`

- `ctx.getImageData`、`ctx.putImageData` 这俩 API 的功能很强大。
  - 拿到了整个图像的所有像素点数据，能玩出很多效果。

## 4. 🔍 查看素材原图

- ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-11-50-13.png)
- 备注：这是在上海租的第四个房子的照片儿…… 呆了一年左右

## 5. 💻 demos.1 - 置灰

::: code-group

<<< ./demos/1/1.js {}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-11-50-46.png)

## 6. 💻 demos.2 - 图像反色处理

::: code-group

<<< ./demos/2/1.js {}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-11-51-02.png)

## 7. 💻 demos.3 - 置蓝

::: code-group

<<< ./demos/3/1.js {}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-11-51-17.png)

## 8. 🔗 References

- [MDN - CanvasRenderingContext2D: getImageData() method][1]，读图片数据。
- [MDN - CanvasRenderingContext2D: putImageData() method][2]，写图片数据。

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
[2]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData
