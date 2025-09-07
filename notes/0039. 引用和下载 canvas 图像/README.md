# [0039. 引用和下载 canvas 图像](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0039.%20%E5%BC%95%E7%94%A8%E5%92%8C%E4%B8%8B%E8%BD%BD%20canvas%20%E5%9B%BE%E5%83%8F)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - 实现 canvas 图像的一键下载](#3--demos1---实现-canvas-图像的一键下载)
- [4. 🤔 data url 是什么？为什么将其赋值给 a 元素的 href 属性之后就能实现一键下载了呢？](#4--data-url-是什么为什么将其赋值给-a-元素的-href-属性之后就能实现一键下载了呢)
  - [4.1. Data URL 简介](#41-data-url-简介)
  - [4.2. 为什么赋值给 a 元素的 href 能实现下载？](#42-为什么赋值给-a-元素的-href-能实现下载)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 🎯 目标

- 知道如何引用已有的 canvas 图像
- 知道如何实现一键下载 canvas 图像

## 2. 🫧 评价

- canvas 本身也是图像，可以被下载，可以被引用。
- 你可以将 canvas 就看做是一个白色的画布，然后你可以通过 canvas 提供的一些 API 在这个画布上绘图，绘图完毕后你可以在别的 canvas 中复用这张图片，可以对它进行二次编辑，也可以下载这张图片。
- 核心 API：
  - 引用已有的 canvas：`ctx.drawImage(image, x, y, width, height)`，image 就是被引用的 canvas。
  - 一键下载 canvas：`canvas.toDataURL(type, encoderOptions)`，用于将 Canvas 的内容转换为数据 URL（也称为 Data URI），将其赋值给 a 元素的 href 属性，从而实现一键下载。
- 如果不清楚 Data URL 是什么，可以看看笔记中记录的 AI 关于 Data URL 的回复。

## 3. 💻 demos.1 - 实现 canvas 图像的一键下载

- 图片素材：

::: swiper

![we](./demos/1/we.png)

:::

::: code-group

<<< ./demos/1/1.js {70-71,106}

<<< ./demos/1/1.html {}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-11-56-45.png)
- 注意：
  - 如果要下载 canvas3，需要以 live server 的形式来启动，否则会报跨域错误。
  - 图片访问跨域的问题在 [0036. ctx.getImageData、ctx.putImageData][1] 笔记中也有提及，都是一个道理 —— 读取图像数据是敏感操作，当我们以直接使用浏览器打开本地文件（`file://`）方式打开页面时，访问图片数据就会抛出 `cross-origin` 跨域错误。

## 4. 🤔 data url 是什么？为什么将其赋值给 a 元素的 href 属性之后就能实现一键下载了呢？

### 4.1. Data URL 简介

- `Data URL`
  - Data URL（数据统一资源定位符）是一种允许我们在 URL 中直接嵌入数据的 URI 方案。它由 RFC 2397 定义，格式如下：

```txt
data:[<mediatype>][;base64],<data>
```

- Data URL 组成部分：
  1. **`data:`** - 协议标识符
  2. **`[<mediatype>]`** - 可选的媒体类型（如 `image/png`、`text/html` 等）
  3. **`;base64`** - 可选的编码方式（base64 编码）
  4. **`<data>`** - 实际的数据内容
- 示例：

```javascript
// PNG 图像的 Data URL
'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'

// 纯文本的 Data URL
'data:text/plain;charset=utf-8,Hello%20World'

// HTML 内容的 Data URL
'data:text/html,<html><body><h1>Hello</h1></body></html>'
```

### 4.2. 为什么赋值给 a 元素的 href 能实现下载？

- 浏览器原生支持
  - 当浏览器遇到 Data URL 时，会自动解析其中的数据并识别其类型。
  - 对于图像等可下载内容，浏览器会将其视为有效的资源链接。
- HTML5 下载属性

```html
<a href="data:image/png;base64,..." download="filename.png">下载图片</a>
```

- 关键在于 `download` 属性：
  - 告诉浏览器这是一个下载链接，而不是导航链接
  - 指定下载文件的默认文件名
  - 浏览器会触发下载对话框而不是直接显示内容
- 在 `demos.1` 中：

```javascript
function createDownloadHandler(canvas, filename) {
  return function () {
    const url = canvas.toDataURL() // 生成 Data URL
    const a = document.createElement('a')
    a.href = url // 设置链接地址
    a.download = filename // 指定下载文件名
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click() // 模拟点击触发下载
    document.body.removeChild(a)
  }
}
```

- 工作流程：
  1. `canvas.toDataURL()` 生成包含图像数据的 Data URL
  2. 创建一个隐藏的 `<a>` 元素
  3. 将 Data URL 赋值给 `a.href`
  4. 设置 `a.download` 指定文件名
  5. 通过 `a.click()` 触发浏览器的下载行为
  6. 下载完成后移除临时的 `<a>` 元素
- 这种方式的优势是简单高效，不需要服务器参与，直接在客户端完成图像下载功能。

## 5. 🔗 引用

- [0036. ctx.getImageData、ctx.putImageData][1]

[1]: /TNotes.canvas/notes/0036
