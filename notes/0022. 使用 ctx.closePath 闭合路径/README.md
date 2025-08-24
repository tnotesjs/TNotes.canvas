# [0022. 使用 ctx.closePath 闭合路径](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0022.%20%E4%BD%BF%E7%94%A8%20ctx.closePath%20%E9%97%AD%E5%90%88%E8%B7%AF%E5%BE%84)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - 自动闭合 vs. 手动闭合](#3--demos1---自动闭合-vs-手动闭合)
- [4. 💻 demos.2 - 注意 `lineWidth`](#4--demos2---注意-linewidth)
- [5. 🤔 为什么 `demos.2` 路径并没有闭合，最终却会填充出一个三角形呢？](#5--为什么-demos2-路径并没有闭合最终却会填充出一个三角形呢)
- [6. 🔗 References](#6--references)

<!-- endregion:toc -->

## 1. 🎯 目标

- demos.1 - 了解手动闭合和自动闭合 `ctx.closePath()` 之间的区别
- demos.2 - 了解路径如果没有设置自动闭合的话会导致什么问题

## 2. 🫧 评价

- 除了介绍 `ctx.closePath()` 之外，笔记中还提到了一个“fill-rule”的概念，这个知识点在 canvas、svg 等绘图相关的技术中打都会涉及到，想要了解详情的话，可以看看链接中提到的“张鑫旭”的文档。

## 3. 💻 demos.1 - 自动闭合 vs. 手动闭合

::: code-group

<<< ./demos/1/1.html {16-37}

:::

![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-04-00-49-40.png)

## 4. 💻 demos.2 - 注意 `lineWidth`

::: code-group

<<< ./demos/2/1.html {16-43}

:::

![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-15-20-34-45.png)

## 5. 🤔 为什么 `demos.2` 路径并没有闭合，最终却会填充出一个三角形呢？

- 这跟填充规则 `fill-rule` 有关，填充规则有以下两种：
  - Nonzero rule 非零环绕规则，默认值；
  - Even–odd rule 奇偶填充规则；
- canvas、svg 都会遇到这个填充的问题，对于填充规则的相关说明，在 [TNotes.svg/notes/0024][1] 中有介绍。

## 6. 🔗 References

[1]: /TNotes.svg/notes/0024

- [TNotes.svg/notes/0024. 使用属性 fill-rule 设置填充规则](/TNotes.svg/notes/0024)
- https://www.zhangxinxu.com/wordpress/2018/10/nonzero-evenodd-fill-mode-rule/
  - 搞懂 SVG/Canvas 中 nonzero 和 evenodd 填充规则 « 张鑫旭-鑫空间-鑫生活。
