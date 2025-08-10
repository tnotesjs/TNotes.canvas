# [0057. 开始使用 canvas 概述](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0057.%20%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8%20canvas%20%E6%A6%82%E8%BF%B0)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 📒 开始学习 `canvas` 绘图之前需要了解的一些基础知识点](#2--开始学习-canvas-绘图之前需要了解的一些基础知识点)

<!-- endregion:toc -->

## 1. 📝 概述

- 了解学习 canvas 绘图之前需要掌握的一些基础知识。

## 2. 📒 开始学习 `canvas` 绘图之前需要了解的一些基础知识点

| 基础知识 | 描述 |
| --- | --- |
| 判断浏览器是否支持 canvas | 做法 1：使用 js 创建一个 canvas 元素，检查 `getContext('2d')` 是否存在，比如：`!!document.createElement('canvas').getContext('2d')` |
|  | 做法 2：直接在 html 中书写 `<canvas>` 标签，如果浏览器不支持 canvas，则会显示 canvas 中的内容，比如：`<canvas>您的浏览器版本过低，不支持canvas，请升级浏览器或更换浏览器</canvas>`【不常用】 |
| 设置 canvas 画布尺寸 | 可通过 canvas 元素自身的 width、height 属性来设置画布尺寸【推荐做法】； |
|  | 可通过 css 中的 width、height 来设置画布尺寸【不推荐的做法】； |
| canvas 盒模型 | canvas 默认是一个尺寸为 `300 * 150` 的行盒 |
| 智能提示问题 | 使用 vscode 编写 canvas 可以通过 JSDOC 注释 `/** @type {HTMLCanvasElement} */` 来显示标注变量类型为 canvas 元素以获取编辑器提供的智能提示 |
