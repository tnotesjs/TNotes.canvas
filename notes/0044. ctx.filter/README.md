# [0044. ctx.filter](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0044.%20ctx.filter)

<!-- region:toc -->

- [1. 目标](#1-目标)
- [2. 评价](#2-评价)
- [3. `ctx.filter`](#3-ctxfilter)
- [4. 公共的辅助模块](#4-公共的辅助模块)
- [5. demos.1 - blur](#5-demos1---blur)
- [6. demos.2 - brightness](#6-demos2---brightness)
- [7. demos.3 - hue-rotate](#7-demos3---hue-rotate)
- [8. demos.4 - drop-shadow](#8-demos4---drop-shadow)
- [9. demos.5 - invert](#9-demos5---invert)
- [10. demos.6 - sepia](#10-demos6---sepia)
- [11. demos.7 - grayscale](#11-demos7---grayscale)
- [12. demos.8 - saturate](#12-demos8---saturate)
- [13. demos.9 - contrast](#13-demos9---contrast)
- [14. demos.10 - 使用 url 引用 svg 滤镜](#14-demos10---使用-url-引用-svg-滤镜)
- [15. demos.11 - opacity](#15-demos11---opacity)
- [16. 引用](#16-引用)

<!-- endregion:toc -->

## 1. 目标

- 掌握 `ctx.filter` 的基本使用

## 2. 评价

- `ctx.filter` 是用来设置画布上图像的滤镜效果的，可选值比较多，快速过一遍 demos 了解大致都有哪些效果即可。
- 也可以结合笔记中提供的表格来快速了解渐变效果都有哪些。

## 3. `ctx.filter`

- `ctx.filter` 用于设置滤镜效果，跟 css 中的滤镜语法、功能都非常类似。

| `ctx.filter`  | 描述                                                |
| ------------- | --------------------------------------------------- |
| `blur`        | 对图像应用高斯模糊效果，参数为模糊半径              |
| `brightness`  | 调整图像的亮度，参数为倍数或百分比                  |
| `hue-rotate`  | 调整图像的色相，参数为角度值                        |
| `drop-shadow` | 为图像添加投影效果，类似于 box-shadow               |
| `invert`      | 反转图像的颜色，参数为百分比                        |
| `sepia`       | 将图像转换为棕褐色调，参数为百分比                  |
| `grayscale`   | 将图像转换为灰度图，参数为百分比                    |
| `saturate`    | 调整图像的饱和度，参数为倍数                        |
| `contrast`    | 调整图像的对比度，参数为倍数或百分比                |
| `url()`       | 引用 SVG 滤镜资源，通过 URL 引用定义在 SVG 中的滤镜 |
| `opacity`     | 调整图像的不透明度，参数为百分比                    |

## 4. 公共的辅助模块

- 事先准备一些公共的辅助模块：

::: code-group

<<< ./demos/common/createCanvas.js {9-11}

<<< ./demos/common/drawGrid.js

<<< ./demos/common/style.css

:::

## 5. demos.1 - blur

::: code-group

<<< ./demos/1/1.html {17-20}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-05-21.png)

## 6. demos.2 - brightness

::: code-group

<<< ./demos/2/1.html {17-24}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-05-31.png)

## 7. demos.3 - hue-rotate

::: code-group

<<< ./demos/3/1.html {17-27}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-05-41.png)

## 8. demos.4 - drop-shadow

::: code-group

<<< ./demos/4/1.html {17-24}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-05-51.png)

## 9. demos.5 - invert

::: code-group

<<< ./demos/5/1.html {17-28}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-06-02.png)

## 10. demos.6 - sepia

::: code-group

<<< ./demos/6/1.html {17-23}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-06-13.png)

## 11. demos.7 - grayscale

::: code-group

<<< ./demos/7/1.html {17-24}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-06-26.png)

## 12. demos.8 - saturate

::: code-group

<<< ./demos/8/1.html {17-24}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-06-37.png)

## 13. demos.9 - contrast

::: code-group

<<< ./demos/9/1.html {17-24}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-06-50.png)

## 14. demos.10 - 使用 url 引用 svg 滤镜

::: code-group

<<< ./demos/10/1.html {8-16,25-30}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-12-07-07.png)

## 15. demos.11 - opacity

::: code-group

<<< ./demos/11/1.html {17-24}

:::

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-15-06-12-31.png)

## 16. 引用

- [CanvasRenderingContext2D.filter 属性][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
