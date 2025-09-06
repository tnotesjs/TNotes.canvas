# [0047. ctx.transform](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0047.%20ctx.transform)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 📒 `ctx.transform`](#3--ctxtransform)
- [4. 💻 demos.1 - 坐标系平移](#4--demos1---坐标系平移)
- [5. 💻 demos.2 - 坐标系缩放](#5--demos2---坐标系缩放)
- [6. 💻 demos.3 - 坐标系倾斜](#6--demos3---坐标系倾斜)
- [7. 💻 demos.4 - 坐标系旋转](#7--demos4---坐标系旋转)
- [8. 🤔 扩展：“仿射变换（Affine Transformation）” 是什么？](#8--扩展仿射变换affine-transformation-是什么)
- [9. 🔗 References](#9--references)

<!-- endregion:toc -->

## 1. 🎯 目标

- 掌握 `ctx.transform` 的基本使用
- 了解 `ctx.transform` 坐标系的转换公式（不要求背，能结合公式看懂 demos 的坐标系的转换即可）
- 理解 `ctx.transform`、`ctx.setTransform` 之间的区别
- 知道如何重置转换后的坐标系
- 知道如何使用 `ctx.transform` 来实现平移 `ctx.translate`、缩放 `ctx.scale` 和旋转 `ctx.rotate` 的效果

## 2. 🫧 评价

- `ctx.transform` 很强大，可以实现很多转换效果，它允许你通过修改坐标系来实现平移、旋转、缩放以及更复杂的线性变换。
- 对坐标系的操作，比如：平移 `translate()`、缩放 `scale()` 和旋转 `rotate()`，它们都可以通过 `transform` 来实现，如果你更倾向于使用 `transform` 来控制坐标系，那么你可以直接抛弃它们。
  - `demos.1`、`demos.2`、`demos.4` 就使用了 `transform` 来分别模拟了 `translate()`、`scale()` 和 `rotate()` 的效果。
- **1️⃣ 公式简单**
  - 转换公式其实非常简单，传入 6 个参数，分别表示 `a`, `b`, `c`, `d`, `e`, `f`，这些参数将决定原坐标 $(x, y)$ 转换后的新坐标 $(x', y')$。
  - $x' = ax + cy + e$
  - $y' = bx + dy + f$
  - 不难发现，如果你已经知道了用户传入的 6 个参数的值，那么你可以非常轻松地将任意一点套入公式，计算出新坐标 $(x', y')$。
  - 所以说转换公式是简单的，根据公式，你可以非常轻松地计算出新坐标 $(x', y')$。
- **2️⃣ 难在应用**
  - **🤔 这里提到的“难在应用”是什么意思？**
  - 就是当你有了一个转换需求后，应该 **传什么样的参数** 才能满足我们需要的转换需求呢？

## 3. 📒 `ctx.transform`

- **`ctx.transform`**
  - `ctx.transform` 很强大，可以实现很多转换效果，比如：平移 `translate()`、缩放 `scale()` 和旋转 `rotate()`，它们都可以通过 `transform` 来实现。
- **`ctx.transform` 的坐标转换计算公式**
  - 所谓的变换就是将原坐标按照一定的变换公式（逻辑），变换成一个新坐标，比如：如果一个点原始坐标为 $(x, y)$，则经过变换后的坐标为：$(ax + cy + e, bx + dy + f)$。
  - `ctx.transform(a, b, c, d, e, f)` 这里的参数对应于变换矩阵的组成部分，具体如下：

$$
\begin{bmatrix}
x' \\
y' \\
1
\end{bmatrix}
=
\begin{bmatrix}
a & c & e \\
b & d & f \\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
x \\
y \\
1
\end{bmatrix}
=>
\begin{aligned}
x' &= ax + cy + e \\
y' &= bx + dy + f \\
1 &= 0x + 0y + 1
\end{aligned}
$$

| 参数 | 变换矩阵中的位置 | 作用 |
| --- | --- | --- |
| a | 第 1 行，第 1 列 | 控制画布的 **水平缩放**（当 `b = 0`、`c = 0` 时） |
| b | 第 2 行，第 1 列 | 控制画布的 **水平倾斜**（当 `a = 1`、`d = 1` 时） |
| c | 第 1 行，第 2 列 | 控制画布的 **垂直倾斜**（当 `a = 1`、`d = 1` 时） |
| d | 第 2 行，第 2 列 | 控制画布的 **垂直缩放**（当 `b = 0`、`c = 0` 时） |
| e | 第 1 行，第 3 列 | 控制画布的 **水平平移**（当 `a = 1`、`b = 0`、`c = 0`、`d = 1` 时） |
| f | 第 2 行，第 3 列 | 控制画布的 **垂直平移** （当 `a = 1`、`b = 0`、`c = 0`、`d = 1` 时 |

- **累积**
  - `transform()` 方法会与当前坐标相乘，当前坐标可能是已经转换后的，因此它的效果是累积的。
  - **🆚 对比 `setTransform()`**
    - `setTransform()` 也用于设置变换矩阵，但它会重置当前的变换矩阵再设置新的矩阵，而不是累积应用。
    - 如果要重置变换矩阵到默认状态，可以使用 `ctx.setTransform(1, 0, 0, 1, 0, 0)` - 将 a、d 置 1，其他值都置 0。根据公式，不难发现这条语句执行之后，`x' = x`、`y' = y`，相当于坐标系被重置了。
- **`transform` 方法的通用性**
  - `transform(a, b, c, d, e, f)` 是一个通用的矩阵变换方法，它允许你直接操作仿射变换矩阵的所有元素（缩放、旋转、平移、倾斜等）。
  - 其他方法如 `translate()`、`scale()` 和 `rotate()` 都是特定场景下 `ctx.transform` 的简化版本。这些方法的行为与 `transform` 完全一致，并且它们的效果可以通过 `transform` 实现。
    - **`translate(tx, ty)`**：相当于调用 `transform(1, 0, 0, 1, tx, ty)`。
    - **`scale(sx, sy)`**：相当于调用 `transform(sx, 0, 0, sy, 0, 0)`。
    - **`rotate(angle)`**：相当于调用

```js
const cos = Math.cos(angle)
const sin = Math.sin(angle)
ctx.transform(cos, sin, -sin, cos, 0, 0)
```

## 4. 💻 demos.1 - 坐标系平移

::: code-group

<<< ./demos/1/1.js {14-15}

<<< ./demos/1/1.html {}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-15-11-05.png)

## 5. 💻 demos.2 - 坐标系缩放

::: code-group

<<< ./demos/2/1.js {14-15}

<<< ./demos/2/1.html {}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-15-11-15.png)

## 6. 💻 demos.3 - 坐标系倾斜

::: code-group

<<< ./demos/3/1.js {12-13}

<<< ./demos/3/1.html {}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-15-11-25.png)

## 7. 💻 demos.4 - 坐标系旋转

::: code-group

<<< ./demos/4/1.js {19,28}

<<< ./demos/4/1.html {}

:::

- 最终效果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-04-15-11-36.png)

## 8. 🤔 扩展：“仿射变换（Affine Transformation）” 是什么？

::: tip

- 在查阅资料时，看到了这样的描述 —— `ctx.transform()` 是用来做仿射变换的。
- “仿射变换” 这个词是首次听说，便在此简单记录一下。

:::

- “仿射”
  - “仿射”是一个数学和几何学中的术语，来源于拉丁文 **"affinis"**，意思是“相关的”或“相连的”。在数学中，“仿射”通常用于描述一种特殊的几何变换——**仿射变换**。
  - “仿射”这个词的本质是描述一种保持点之间 **线性关系** 和 **平行性** 的变换。
  - “仿射”比单纯的线性变换更通用，因为它允许平移操作。
- [**仿射变换（Affine Transformation）**][2]
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-31-23-19-18.png)
  - 仿射变换是一种几何变换，它保持点之间的线性关系和平行性，但不一定会保持角度、长度或面积不变。换句话说，经过仿射变换后：
    - 直线仍然是直线。
    - 平行线仍然是平行线。
    - 点的共线性（三点共线）和比例关系（线段的比例）保持不变。
- **常见仿射变换**
  - **平移（Translation）**：将图形整体移动到另一个位置。
  - **旋转（Rotation）**：绕某一点旋转图形。
  - **缩放（Scaling）**：放大或缩小图形。
  - **倾斜（Shear）**：使图形发生扭曲，但保持平行线不变。
- **仿射变换的特点**
  - 仿射变换的核心特点是它结合了 **线性变换**（如旋转、缩放、倾斜）和 **平移** 操作。具体来说：
  - 它可以表示为一个矩阵运算（通常是齐次坐标下的 3x3 或 4x4 矩阵）。
  - 它不会改变图形的基本拓扑结构（如点、线、面的关系），但会改变几何属性（如角度、长度、面积等）。

```txt
例如：在二维空间中，仿射变换可以用以下形式表示：

x' = a * x + c * y + e
y' = b * x + d * y + f

(x, y) 是原始点的坐标
(x', y') 是变换后的点的坐标
a, b, c, d, e, f 是变换参数
```

- **与线性变换的区别**
  - 仿射变换和线性变换的主要区别在于是否包含 **平移** 操作：
    - **线性变换**：只涉及旋转、缩放和倾斜等操作，且原点保持不变。
    - **仿射变换**：在线性变换的基础上增加了平移操作，因此可以处理任意位置的变换。
  - 例如：
    - 线性变换的例子：将一个正方形旋转 90 度。
    - 仿射变换的例子：将一个正方形旋转 90 度并移动到另一个位置。
- **仿射空间**
  - “仿射”还用于描述一种特殊的几何空间——**仿射空间**（Affine Space）。仿射空间类似于向量空间，但它没有固定的原点。也就是说：
    - 在仿射空间中，你可以定义点和点之间的差值（向量），但不能直接对点进行加法运算。
    - 仿射空间更适合描述实际的物理世界，因为现实中的物体并没有固定的“原点”。
- **应用领域**
  - 仿射变换在许多领域都有广泛的应用，包括：
  - **计算机图形学**：用于图像的缩放、旋转、平移和变形。
  - **图像处理**：用于校正图像的几何失真（如倾斜的文档扫描）。
  - **机器人学**：用于描述刚体运动（包括旋转和平移）。
  - **地理信息系统（GIS）**：用于地图投影和坐标转换。
  - **机器学习**：在数据预处理中，仿射变换常用于归一化或标准化数据。

## 9. 🔗 References

- [MDN - CanvasRenderingContext2D：transform() 方法][1]
- [维基百科 - 仿射变换][2]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform
[2]: https://zh.wikipedia.org/zh-hans/%E4%BB%BF%E5%B0%84%E5%8F%98%E6%8D%A2
