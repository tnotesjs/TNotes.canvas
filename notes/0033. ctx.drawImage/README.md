# [0033. ctx.drawImage](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0033.%20ctx.drawImage)

<!-- region:toc -->

- [📂 TNotes.yuque](https://www.yuque.com/tdahuyou/tnotes.yuque/)
  - [TNotes.yuque.canvas.0033](https://www.yuque.com/tdahuyou/tnotes.yuque/canvas.0033)
- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - 处理视频图像](#3--demos1---处理视频图像)
- [4. 💻 demos.2 - 实现人物奔跑动画效果](#4--demos2---实现人物奔跑动画效果)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `ctx.drawImage` 的基本使用
- 通过 `demos.1` 了解 `ctx.drawImage` 的一些特殊用法 - 比如视频图像处理
- 通过 `demos.2` 能够理解人物的运动原理 - 本质上使用的是 `ctx.drawImage` 的“截图”功能

## 2. 🫧 评价

- 视频处理
  - 可以使用 `ctx.drawImage` 来处理视频图像，这个功能点有些 🐂 🍺，水应该蛮深的（至少目前对于视频处理这一块，还是技术盲区）。
  - 可以将视频数据作为 `ctx.drawImage` 的第一个参数传入，将会绘制视频当前播放帧的图像，并且可以使用 canvas 技术来对图像做一些额外的处理，实现一些特殊效果。
  - 获取到视频图像数据后，结合 canvas 技术会有不少玩法。比如：
    - 可以对视频图像加一个滤镜、裁剪效果。
    - 由于 canvas 本身就是一张图片，你可以设置一个下载图片的钩子，想要获取某一帧图像时，执行钩子即可。
- 使用 `ctx.drawImage` 实现人物奔跑动画效果
  - 人物的运动原理本质上使用的是 `ctx.drawImage` 的“截图”功能，然后再加一个定时器，实现定时截图，就好比一个幻灯片在不断切换一样。
- 备注：
  - 视频素材随便上网找即可，丢到 github 之前已将所有 `*.mp4` 资源给忽略了。
  - 如果需要获取 demos.1 中的素材，可以上 `TNotes.yuque - canvas.0033` 获取。

## 3. 💻 demos.1 - 处理视频图像

::: code-group

<<< ./demos/1/1.html {}

<<< ./demos/1/1.js {}

:::

- 最终效果：
  - ![gif](./assets/1.gif)
  - 上面是原始视频。
  - 下面是获取到的视频图像，并对获取到的视频图像进行了一些处理。

## 4. 💻 demos.2 - 实现人物奔跑动画效果

::: code-group

<<< ./demos/2/1.js {}

<<< ./demos/2/2.js {}

<<< ./demos/2/3.js {}

:::

::: swiper

![1 素材](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-40-47.png)

![2 原地跑](./assets/使用%20ctx.drawImage%20实现人物奔跑动画效果-原地跑.gif)

![3 向前跑](./assets/使用%20ctx.drawImage%20实现人物奔跑动画效果-向前跑.gif)

:::
