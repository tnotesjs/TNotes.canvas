# [0007. 使用 ctx.save 和 ctx.restore 保存和恢复画布状态](https://github.com/Tdahuyou/TNotes.canvas/tree/main/notes/0007.%20%E4%BD%BF%E7%94%A8%20ctx.save%20%E5%92%8C%20ctx.restore%20%E4%BF%9D%E5%AD%98%E5%92%8C%E6%81%A2%E5%A4%8D%E7%94%BB%E5%B8%83%E7%8A%B6%E6%80%81)

<!-- region:toc -->

- [1. 🫧 评价](#1--评价)
- [2. 📒 `ctx.save` 和 `ctx.restore`](#2--ctxsave-和-ctxrestore)
- [3. 💻 demos.2 - 辅助方法 `drawGrid`](#3--demos2---辅助方法-drawgrid)
- [4. 💻 demos.1 - 画布状态的保存和恢复](#4--demos1---画布状态的保存和恢复)
- [5. 🔗 References](#5--references)

<!-- endregion:toc -->

## 1. 🫧 评价

- 🎯 目标
  - 掌握 `ctx.save` 和 `ctx.restore` 的基本用法。
  - 知道画布状态的存储结构是栈结构，遵循 LIFO 规则。【细节】
- 🫧 评价
  - 画笔状态的存储和恢复还是比较常见的操作，需要掌握一些常见的写法。

## 2. 📒 `ctx.save` 和 `ctx.restore`

- `ctx.save()` 和 `ctx.restore()` 方法用于保存和恢复画布（Canvas）的状态。
- `ctx.save()`
  - 这个方法用于保存当前画布的所有状态。
  - 这里说的状态，包括：
    - 描边样式 `ctx.strokeStyle`
    - 填充样式 `ctx.fillStyle`
    - 线条样式 `ctx.lineWidth`
    - 文本样式 `ctx.font`
    - 裁剪 `ctx.clip`
    - ……
- `ctx.restore()`
  - 这个方法用于恢复 **最近一次** 通过 `ctx.save()` 保存的画布状态。
  - 你可以调用多次 `ctx.save()` 来保存多个状态，并按照栈的后进先出（LIFO）顺序通过 `ctx.restore()` 来恢复这些状态。
- 使用场景
  - 在你需要暂时改变绘图样式、变换或者路径，而后又想恢复到之前状态的情况下特别有用。
  - 基本步骤：
    - 1️⃣ 存 `ctx.save()`
    - 2️⃣ 改 `ctx.xxx = xxx`
    - 3️⃣ 复原 `ctx.restore()`

```javascript
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

// ……
// 在每个绘图的方法中，我们可能会需要调整画笔的状态，比如改变一些描边的粗细、颜色等等。
// 但是这些信息的修改我们希望是局部的，不要对全局造成影响。
// 此时，就可以使用上述这种做法来管理画笔的状态。
// 基本步骤：
// 1. 在绘图之前，暂存画笔开始状态信息。ctx.store()
// 2. 自定义画笔状态来实现绘图。
// 3. 本次绘制逻辑结束，恢复画笔到开始状态。ctx.restore()

function draw1() {
  // 1️⃣ 第一步 存下当前的画笔状态
  ctx.save()

  // 2️⃣ 第二步 修改画笔状态，绘制图形
  // ……

  // 3️⃣ 第三步 重置回第一步的画笔状态
  ctx.restore()
}

function draw2() {
  // 1️⃣ 第一步 存下当前的画笔状态
  ctx.save()

  // 2️⃣ 第二步 修改画笔状态，绘制图形
  // ……

  // 3️⃣ 第三步 重置回第一步的画笔状态
  ctx.restore()
}
```

## 3. 💻 demos.2 - 辅助方法 `drawGrid`

::: code-group

<<< ./demos/2/1.js {23,42} [drawGrid]

<<< ./demos/2/1.html {13,16}

:::

- 这是 `common/drawGrid.js` 模块的源码实现，其中对于画布状态的修改是局部的，出了这个方法之后，画布状态会恢复到调用这个方法之前的状态。
- 基本做法就是上述提到的：
  - 1️⃣ 存 `ctx.save()`
  - 2️⃣ 改 `ctx.xxx = xxx`
  - 3️⃣ 复原 `ctx.restore()`
- 如果将 `1.html` 中的 `drawGrid(canvas, 200, 100, 50)` 注释掉，最终渲染的结果如下：
  - ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-18-12-19-02.png)
- 如果将 `1.html` 中的 `drawGrid(canvas, 200, 100, 50)` 恢复，最终渲染的结果如下：
  - ![图 1](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-18-12-19-16.png)
  - 会发现中间调用 `drawGrid` 完成网格绘制，对最终绘制的文案 `hello world` 的样式并无影响。
- 如果将 `drawGrid` 方法中的 `ctx.restore()` 给注释掉，最终渲染的结果如下：
  - ![图 2](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-18-12-19-23.png)
  - 会发现发现中间调用 `drawGrid` 完成网格绘制，由于其对 `ctx.font` 做了修改，导致了对最终绘制的文案 `hello world` 的样式造成了影响。
- `ctx.save()` 和 `ctx.restore()` 的作用是保存和恢复画布的状态，实现一个 “局部画布状态” 的效果，函数内、外的画布状态隔离。

## 4. 💻 demos.1 - 画布状态的保存和恢复

::: code-group

<<< ./demos/1/1.html {20-47}

:::

- 状态的存储结构是堆栈的结构，遵循 LIFO（Last In First Out） 的原则。
- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-10-03-23-05-01.png)

## 5. 🔗 References

- https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/save
  - `ctx.save()`
- https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/restore
  - `ctx.restore()`
