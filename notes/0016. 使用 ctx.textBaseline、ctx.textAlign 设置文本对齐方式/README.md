# [0016. 使用 ctx.textBaseline、ctx.textAlign 设置文本对齐方式](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0016.%20%E4%BD%BF%E7%94%A8%20ctx.textBaseline%E3%80%81ctx.textAlign%20%E8%AE%BE%E7%BD%AE%E6%96%87%E6%9C%AC%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 💻 demos.1 - 设置文本的对齐方式](#2--demos1---设置文本的对齐方式)
- [3. 🔗 References](#3--references)

<!-- endregion:toc -->

## 1. 📝 概述

```markmap

- 💡 文本对齐方式
  - ctx.textAlign 设置文本的 **水平** 对齐方式
  - ctx.textBaseline 设置文本的 **垂直** 对齐方式

```

## 2. 💻 demos.1 - 设置文本的对齐方式

::: code-group

<<< ./demos/1/1.html {16-26}

<<< ./demos/1/2.html {16-27}

:::

- `1.html`
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-23-20-10.png)
- `2.html`
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-23-20-23.png)

## 3. 🔗 References

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline
  - MDN，textBaseline 设置文本的 **垂直** 对齐方式。
- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign
  - MDN，textAlign 设置文本的 **水平** 对齐方式。
