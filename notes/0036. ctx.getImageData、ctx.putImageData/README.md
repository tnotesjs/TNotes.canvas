# [0036. ctx.getImageData、ctx.putImageData](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0036.%20ctx.getImageData%E3%80%81ctx.putImageData)

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
- 注意跨域问题
  - 本节的 demos 中使用了 `ctx.getImageData` 读取图片数据，可以通过使用 `open with live server` 的方式来打开资源预览效果。若直接以本地文件的形式打开，会报跨域错误。
  - 读取图像数据是敏感操作，当我们以直接使用浏览器打开本地文件（`file://`）方式打开页面时，`ctx.getImageData` 会抛出 `cross-origin` 异常。这个问题可以通过 `Live Server` 来解决。
  - 这是浏览器的同源策略（CORS）安全机制导致的限制，需要在 HTTP 服务器环境下才能正常访问图像像素数据。

## 3. 📒 `ctx.getImageData`、`ctx.putImageData`

- `ctx.getImageData`、`ctx.putImageData` 这俩 API 的功能很强大。
  - 拿到了整个图像的所有像素点数据，能玩出很多效果 —— 这涉及到“数字图像处理”和“计算机图形学”的相关知识，笔记中仅对 demos 中实现的数字图像处理的最终效果做了简单的说明。
- **一些必要的 RGB 通道基础知识补充**
  - RGB 是颜色的三种基本分量：
    - `R (Red)`：红色通道，值范围 0-255
    - `G (Green)`：绿色通道，值范围 0-255
    - `B (Blue)`：蓝色通道，值范围 0-255
    - `A (Alpha)`：透明度通道，值范围 0-255（0 为完全透明，255 为完全不透明）
  - 每个像素点的颜色由这四个分量组合而成，存储在 `imageData.data` 数组中，每 4 个连续元素表示一个像素点的 `RGBA` 值。
    - 在 demos 中使用循环来处理图像数据的时候，循环变量步长为 4 👉 `i += 4` 就是这个原因。
- demos 中的图像操作原理简介：

::: code-group

```javascript [置灰原理]
// 置灰是将彩色图像转换为灰度图像的过程：计算 RGB 三个通道的平均值
const avg = (r + g + b) / 3
// 将 RGB 三个通道都设置为平均值，实现灰度效果
imageData.data[i] = avg // R
imageData.data[i + 1] = avg // G
imageData.data[i + 2] = avg // B

// 更精确的灰度计算通常使用加权平均：
const gray = 0.299 * r + 0.587 * g + 0.114 * b
// 这样处理后，原本不同颜色的像素点都变成了相同明暗的灰色，从而实现去色效果。
```

```javascript [反色处理原理]
// 反色（反相）是将每个像素的颜色值进行反转：将每个颜色通道值用 255 减去原值
imageData.data[i] = 255 - r // R 反相
imageData.data[i + 1] = 255 - g // G 反相
imageData.data[i + 2] = 255 - b // B 反相

// 原理是：对于每个颜色分量，用最大值 255 减去原值，得到互补色。例如：
// - 原色 (255, 0, 0) 红色 → 反色 (0, 255, 255) 青色
// - 原色 (0, 255, 0) 绿色 → 反色 (255, 0, 255) 洋红
// - 原色 (0, 0, 255) 蓝色 → 反色 (255, 255, 0) 黄色
```

```javascript [置蓝原理]
// 置蓝是增强图像蓝色分量的处理：增强蓝色通道，减弱红色和绿色通道
imageData.data[i] = r * 0.3 // 降低红色分量
imageData.data[i + 1] = g * 0.5 // 降低绿色分量
imageData.data[i + 2] = b * 2 // 增强蓝色分量，超过 255 时需要限制
// 在示例中通过调整各通道的权重来营造偏蓝的色调效果。
// 也可以通过增加蓝色分量、减少红色和绿色分量来实现冷色调效果。
// 举一反三，如果要实现置红、置绿，也是同样的套路。
```

- 以上提到的这些图像处理操作都是基于对 `imageData.data` 数组中像素值的数学运算来实现的，通过对 RGB 各分量的不同操作可以实现丰富的图像特效。

:::

## 4. 🔍 查看素材原图

- 翻了翻相册，随便儿找了张图作为以下 demos 的素材。
- ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-50-13.png)
- Footprints
  - 这是在上海租的第四个房子的照片儿…… 呆了一年左右

## 5. 💻 demos.1 - 置灰

::: code-group

<<< ./demos/1/1.js {}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-50-46.png)
- 注意 `cross-origin` 报错 - **跨域限制问题**
  - 当直接用浏览器打开本地文件（`file://` 协议）时，浏览器的安全策略会阻止 JavaScript 访问图像像素数据：
    - `ctx.getImageData()` 方法需要从图像中读取像素信息
    - 浏览器将此操作视为潜在的安全风险，会抛出跨域错误
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-28-22-05-46.png)
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-28-22-07-44.png)

## 6. 💻 demos.2 - 图像反色处理

::: code-group

<<< ./demos/2/1.js {}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-51-02.png)

## 7. 💻 demos.3 - 置蓝

::: code-group

<<< ./demos/3/1.js {}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-51-17.png)

## 8. 🔗 References

- [MDN - CanvasRenderingContext2D: getImageData() method][1]，读图片数据。
- [MDN - CanvasRenderingContext2D: putImageData() method][2]，写图片数据。

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
[2]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData
