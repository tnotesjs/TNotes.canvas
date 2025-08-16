# [0044. 使用 ctx.filter 实现滤镜效果](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0044.%20%E4%BD%BF%E7%94%A8%20ctx.filter%20%E5%AE%9E%E7%8E%B0%E6%BB%A4%E9%95%9C%E6%95%88%E6%9E%9C)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 📒 `ctx.filter`](#2--ctxfilter)
- [3. 💻 公共的辅助模块](#3--公共的辅助模块)
- [4. 💻 demos.1 - blur](#4--demos1---blur)
- [5. 💻 demos.2 - brightness](#5--demos2---brightness)
- [6. 💻 demos.3 - hue-rotate](#6--demos3---hue-rotate)
- [7. 💻 demos.4 - drop-shadow](#7--demos4---drop-shadow)
- [8. 💻 demos.5 - invert](#8--demos5---invert)
- [9. 💻 demos.6 - sepia](#9--demos6---sepia)
- [10. 💻 demos.7 - grayscale](#10--demos7---grayscale)
- [11. 💻 demos.8 - saturate](#11--demos8---saturate)
- [12. 💻 demos.9 - contrast](#12--demos9---contrast)
- [13. 💻 demos.10 - 使用 url 引用 svg 滤镜](#13--demos10---使用-url-引用-svg-滤镜)
- [14. 💻 demos.11 - opacity](#14--demos11---opacity)
- [15. 🔗 References](#15--references)

<!-- endregion:toc -->

## 1. 📝 概述

- 掌握 `ctx.filter` 的基本使用

## 2. 📒 `ctx.filter`

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

## 3. 💻 公共的辅助模块

- 事先准备一些公共的辅助模块：

::: code-group

<<< ./demos/common/createCanvas.js {9-11}

<<< ./demos/common/drawGrid.js

<<< ./demos/common/style.css

:::

## 4. 💻 demos.1 - blur

::: code-group

<<< ./demos/1/1.html {17-20}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-05-21.png)

## 5. 💻 demos.2 - brightness

::: code-group

<<< ./demos/2/1.html {17-24}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-05-31.png)

## 6. 💻 demos.3 - hue-rotate

::: code-group

<<< ./demos/3/1.html {17-27}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-05-41.png)

## 7. 💻 demos.4 - drop-shadow

::: code-group

<<< ./demos/4/1.html {17-24}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-05-51.png)

## 8. 💻 demos.5 - invert

::: code-group

<<< ./demos/5/1.html {17-28}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-06-02.png)

## 9. 💻 demos.6 - sepia

::: code-group

<<< ./demos/6/1.html {17-23}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-06-13.png)

## 10. 💻 demos.7 - grayscale

::: code-group

<<< ./demos/7/1.html {17-24}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-06-26.png)

## 11. 💻 demos.8 - saturate

::: code-group

<<< ./demos/8/1.html {17-24}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-06-37.png)

## 12. 💻 demos.9 - contrast

::: code-group

<<< ./demos/9/1.html {17-24}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-06-50.png)

## 13. 💻 demos.10 - 使用 url 引用 svg 滤镜

::: code-group

<<< ./demos/10/1.html {8-16,25-30}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-12-07-07.png)

## 14. 💻 demos.11 - opacity

::: code-group

<<< ./demos/11/1.html {17-24}

:::

![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-15-06-12-31.png)

## 15. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
  - MDN - `ctx.filter`
