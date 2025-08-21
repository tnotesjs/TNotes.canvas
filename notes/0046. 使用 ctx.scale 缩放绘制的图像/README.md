# [0046. 使用 ctx.scale 缩放绘制的图像](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0046.%20%E4%BD%BF%E7%94%A8%20ctx.scale%20%E7%BC%A9%E6%94%BE%E7%BB%98%E5%88%B6%E7%9A%84%E5%9B%BE%E5%83%8F)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 🔗 References](#2--references)
- [3. 📒 notes](#3--notes)
- [4. 💻 demo1](#4--demo1)
- [5. 💻 demo2](#5--demo2)

<!-- endregion:toc -->

## 1. 📝 概述

ctx.scale 用于在画布上缩放绘制的图像。通过传入负数，还能实现坐标的翻转。

## 2. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale - MDN - CanvasRenderingContext2D：scale() 方法

## 3. 📒 notes

ctx.scale 用于在画布上缩放绘制的图像。

通过这个方法，你可以更改画布上图形的大小，而不改变图形本身的定义。

**注意：**

1. 这玩意儿不会对之前绘制的图像起作用。
2. 这玩意儿如果传入的参数是负数，那么将会导致坐标系反转。
3. 这种变换对后续的所有绘图操作都是有效的，直到画布的缩放状态被重置或修改。

## 4. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // ctx.scale 用于在画布上缩放绘制的图像。

      // 通过这个方法，你可以更改画布上图形的大小，而不改变图形本身的定义。

      // 注意：
      // 1. 这玩意儿不会对之前绘制的图像起作用。
      // 2. 这种变换对后续的所有绘图操作都是有效的，直到画布的缩放状态被重置或修改。

      const canvas = document.createElement('canvas')
      drawGrid(canvas, 300, 300, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.globalAlpha = 0.5

      // 绘制一个原始大小的红色矩形
      ctx.fillStyle = 'red'
      ctx.fillRect(10, 10, 50, 50)

      // 缩放画布
      ctx.scale(2, 2)
      // 横向缩放 2 倍，纵向缩放 2 倍

      // 在缩放后的画布上绘制一个蓝色矩形
      ctx.fillStyle = 'blue'
      ctx.fillRect(10, 10, 50, 50)

      // 两次在同一个位置绘制同样尺寸的矩形。
      // 在坐标被缩放后，这两个矩形绘制的位置和尺寸都是不一样的。
      // 主要原因在于坐标的刻度改变了，原坐标系的两个刻度相当于新坐标系的一个刻度。
    </script>
  </body>
</html>
```

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-15-05-25.png)

## 5. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // ctx.scale 这玩意儿如果传入的参数是负数，那么将会导致坐标系反转。

      const canvas = document.createElement('canvas')
      drawGrid(canvas, 500, 500, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.globalAlpha = 0.5

      // 将画布原点移至中心
      ctx.translate(canvas.width / 2, canvas.height / 2)

      // 辅助点 标注出原点
      ctx.fillStyle = 'blue'
      ctx.arc(0, 0, 10, 0, Math.PI * 2)
      ctx.fill()

      // 绘制一个原始大小的红色矩形
      ctx.fillStyle = 'red'
      ctx.fillRect(50, 50, 100, 100)

      // 水平翻转
      ctx.scale(-1, 1)
      // 由于坐标系被翻转，所以这里的 x 坐标的正方向（向右）指向了原来的负方向（向左）。

      // 绘制一个蓝色矩形，坐标和尺寸都跟前面的矩形一样。
      ctx.fillStyle = 'blue'
      ctx.fillRect(50, 50, 100, 100) // 注意这里的 x 坐标是负的
    </script>
  </body>
</html>
```

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-15-05-36.png)
