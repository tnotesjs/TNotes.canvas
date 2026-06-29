# [0022. ctx.closePath](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0022.%20ctx.closePath)

<!-- region:toc -->

- [1. 目标](#1-目标)
- [2. 评价](#2-评价)
- [3. demos.1 - 自动闭合 vs. 手动闭合](#3-demos1---自动闭合-vs-手动闭合)
- [4. demos.2 - 注意 `lineWidth`](#4-demos2---注意-linewidth)
- [5. 如果路径未闭合，可以被填充吗？](#5-如果路径未闭合可以被填充吗)
- [6. 引用](#6-引用)

<!-- endregion:toc -->

## 1. 目标

- `demos.1` - 了解手动闭合和自动闭合 `ctx.closePath()` 之间的区别
- `demos.2` - 了解路径如果没有设置自动闭合的话会导致什么问题

## 2. 评价

- `ctx.closePath()` 的基本使用蛮简单的，当你在绘图的过程中，如果最后需要将路径给闭合，只需要在结束前调用一下 `ctx.closePath()` 就完事儿。
- 注意，在 `demos.2` 中，绘制了一个非闭合的三角形，但是 `ctx.fill` 依旧可以填充出这个三角形，这涉及到两个核心要点：
  - 【1】canvas 在 fill 的时候会自动闭合路径
  - 【2】`fill-rule` 填充规则
- `fill-rule` 填充规则
  - 填充规则相关的知识点，这个知识点在 canvas、svg 等绘图相关的技术中打都会涉及到，是一个通识的知识点。
  - 想要了解更多有关 `fill-rule` 的内容，可以看看 References 中提到的：
    - [张鑫旭 老师的的文章 -> 搞懂 SVG/Canvas 中 nonzero 和 evenodd 填充规则][2]
    - [TNotes.canvas/notes/0031. ctx.cli][3]

## 3. demos.1 - 自动闭合 vs. 手动闭合

::: code-group

<<< ./demos/1/1.html {16-37}

:::

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-00-49-40.png)

## 4. demos.2 - 注意 `lineWidth`

::: code-group

<<< ./demos/2/1.html {16-43}

:::

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-15-20-34-45.png)

## 5. 如果路径未闭合，可以被填充吗？

- **Canvas 在 fill 时会自动闭合路径**
  - `fill()` 方法并不是只填充你画出来的线条，而是会把 **路径（path）当作一个区域** 来看。
  - 如果路径本身没有闭合，`fill()` 会 **隐式地从路径最后一个点连接回起始点**，形成一个封闭区域。
  - 以 `demos.2` 为例，哪怕你只画了两条线（直角 L 形），`fill()` 依然会帮你补上最后一条边，从终点 `(150,150)` 回到起点 `(50,50)`，从而构成一个三角形。
- **🤔 为什么 `demos.2` 路径并没有闭合，最终却会填充出一个三角形呢？**
  - 这跟填充规则 `fill-rule` 有关，填充规则有以下两种：
    - Nonzero rule 非零环绕规则，默认值；
    - Even–odd rule 奇偶填充规则；
  - 在 demos.2 这个示例中，无论我们用哪种填充规则，最终都会填充出一个一样的三角形。
  - 有关填充规则的详细说明，在 [0031. ctx.cli][3] 中有介绍。

## 6. 引用

- [搞懂 SVG/Canvas 中 nonzero 和 evenodd 填充规则 « 张鑫旭-鑫空间-鑫生活][2]
- [TNotes.svg/notes/0024. 使用属性 fill-rule 设置填充规则][1]
  - svg 中跟 fill-rule 相关的笔记
- [TNotes.canvas/notes/0031. ctx.cli][3]
  - 在介绍 `ctx.cli` 的笔记中，有对 `fill-rule` 的详细介绍

[1]: /TNotes.svg/notes/0024
[2]: https://www.zhangxinxu.com/wordpress/2018/10/nonzero-evenodd-fill-mode-rule/
[3]: /TNotes.canvas/notes/0031
