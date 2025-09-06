# [0051. 贪吃蛇小游戏](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0051.%20%E8%B4%AA%E5%90%83%E8%9B%87%E5%B0%8F%E6%B8%B8%E6%88%8F)

<!-- region:toc -->

- [1. 🎯 目标](#1--目标)
- [2. 🫧 评价](#2--评价)
- [3. 📒 贪吃蛇小游戏 - 实现原理分析](#3--贪吃蛇小游戏---实现原理分析)
- [4. 💻 demos.1 - 贪吃蛇小游戏](#4--demos1---贪吃蛇小游戏)

<!-- endregion:toc -->

## 1. 🎯 目标

- 理解 canvas 贪吃蛇小游戏的实现的基本原理

## 2. 🫧 评价

- 如果不知道咋写，可以先结合笔记中的原理分析来看看实现思路。
- 贪吃蛇小游戏 - 最终效果
  - ![gif](./assets/0051-贪吃蛇小游戏.gif)

## 3. 📒 贪吃蛇小游戏 - 实现原理分析

- 核心要理解以下逻辑的实现：
  - 蛇的移动逻辑
    - 蛇头的移动
    - 蛇身的移动（重点）
  - 蛇吃食物的逻辑（重点）
  - 游戏的结束判定逻辑（重点）
- **蛇头移动**
  - **方向判断**：根据蛇当前的方向，蛇头的位置会更新。这可以通过一个 `switch` 语句来实现，通过检查 `this.direction` 的值（即蛇的当前方向），然后根据方向来改变蛇头的 `x` 或 `y` 坐标值。
  - 每个方向对应一个坐标轴的变化：
    - `ARROW_RIGHT`: `x` 坐标增加一个单元格的距离，表示向右移动。
    - `ARROW_DOWN`: `y` 坐标增加一个单元格的距离，表示向下移动。
    - `ARROW_LEFT`: `x` 坐标减少一个单元格的距离，表示向左移动。
    - `ARROW_UP`: `y` 坐标减少一个单元格的距离，表示向上移动。
  - **位置更新**：更新位置后，蛇头的新位置存储在 `this.head.x` 和 `this.head.y` 中。
    - 注意，「坐标的更新」和「界面的渲染」是两个步骤。
    - 坐标位置的更新并不意味着在界面上看到蛇头的位置发生了移动。当你看到界面上蛇头的位置发生了变化，这意味着重新绘制 `draw` 了。
    - 每次移动 `move` 的时候都是先更新坐标 `x`、`y`，做完 **【一系列处理】** 之后，最后才重新绘制 `draw` 更新界面。
      - 这里提到的一 **【系列处理】** 主要是不同情况下的判定和处理，可能的情况包括：是否吃到了食物、是否撞到了自己、是否撞到了边界。
      - 比如，撞到自己或者边界，意味着游戏结束，接下来就没必要再重新绘制 `draw` 更新页面状态了；如果是吃到了食物，那么需要增加 `body` 的长度。
- **游戏结束检查**
  - **出界检查** `isOutOfBounds`：如果蛇头的下一步位置超出了画布的边界（游戏区域），游戏结束。
  - **自身碰撞检查** `isCollidingWithSelf`：如果蛇头的下一步位置与蛇身的任何部分重叠（通过查看网格状态 `gridState` 判断），则游戏也会结束。
- **吃食物**
  - **吃食物检查** `isEatingFood`：如果蛇头的新位置与食物的位置相同，蛇将吃掉食物。
  - 这会导致蛇的得分增加，并且在蛇身的前端添加一个新的身体部分（即蛇变长）。
  - 本质：**交换食物和蛇头的位置，将食物变为蛇身**。
  - ![svg](./assets/1.svg)
- **蛇身移动** `moveBody`
  - 情况 1：游戏结束
    - body 不动
  - 情况 2：吃到食物
    - 吃食物的场景上述已经分析，就是交换蛇头和食物的位置，原有的蛇身可以不动（如果按照上述吃食物的逻辑来处理），也可以动（原有蛇身沿着蛇头方向移动，将吃到的食物丢到蛇尾），具体看咋处理。
  - 情况 3：没吃到食物
    - 如果蛇没有吃到食物，蛇身需要更新来跟随蛇头移动。
    - 这是通过移除蛇身数组的最后一个元素（尾部），并将其位置设置为蛇头移动前的位置，然后将这个元素插入到数组的开头来实现的。这样，蛇身的每个部分都跟随前一个向前移动，从而实现整体的流畅移动。
    - body 移动的本质：**将 body 数组的最后一项（蛇身的尾部）移除，将其插入到 body 数组的开头（蛇身的头部）**。
    - ![svg](./assets/2.svg)
- **动画和速度调节**
  - 蛇的移动是通过使用 **定时器** `setTimeout` 周期性地调用 `move` 函数来实现的，定时器的时间间隔越小，移动的速度就越快。
  - 我们可以通过积分大小来调节时间间隔，比如让蛇的移动速度随着得分增加而降低，从而增加移动速度，使游戏难度逐渐增大。
- **核心逻辑拆解**
  - 以下是 `demos.1` 中 js 部分的一些核心逻辑

::: code-group

```javascript [常量]
// 键盘方向键值
const ARROW_LEFT = 'ArrowLeft'
const ARROW_UP = 'ArrowUp'
const ARROW_RIGHT = 'ArrowRight'
const ARROW_DOWN = 'ArrowDown'

// 网格中的元素类型
const CELL_TYPE_SPACE = 0 // 0 表示空
const CELL_TYPE_SNAKE = 1 // 1 表示蛇
const CELL_TYPE_FOOD = 2 // 2 表示食物

// 单元格颜色
const CELL_COLOR_SNAKE_HEAD = 'red'
const CELL_COLOR_SNAKE_BODY = 'pink'
const CELL_COLOR_FOOD = 'orange'
```

```javascript [画布初始化]
const canvasBoard = document.createElement('canvas')
canvasBoard.width = 400
canvasBoard.height = 400
document.body.append(canvasBoard)
const ctxBoard = canvasBoard.getContext('2d')

const canvasGame = document.createElement('canvas')
canvasGame.width = 400
canvasGame.height = 400
document.body.append(canvasGame)
const ctxGame = canvasGame.getContext('2d')
```

```javascript [网格数据初始化]
const gridSize = 20
const gridState = {}
function initializeGrid() {
  for (let row = 0; row < canvasBoard.width / gridSize; row++) {
    for (let col = 0; col < canvasBoard.height / gridSize; col++) {
      gridState[`${row * gridSize}-${col * gridSize}`] = CELL_TYPE_SPACE
    }
  }
}
initializeGrid()
```

```javascript [绘制网格棋盘]
// 这一部分，可以理解为准备游戏地图。
function drawGrid() {
  ctxBoard.save()
  ctxBoard.strokeStyle = '#ccc'
  for (let line = 0; line < canvasBoard.width / gridSize; line++) {
    ctxBoard.beginPath()
    ctxBoard.moveTo(gridSize * line, 0)
    ctxBoard.lineTo(gridSize * line, canvasBoard.height)
    ctxBoard.stroke()

    ctxBoard.beginPath()
    ctxBoard.moveTo(0, gridSize * line)
    ctxBoard.lineTo(canvasBoard.width, gridSize * line)
    ctxBoard.stroke()
  }
  ctxBoard.restore()
}
drawGrid()
```

```javascript [蛇和食物的基类]
class Square {
  constructor(x, y, cell_type, cell_color) {
    this.x = x
    this.y = y
    this.previousX = x
    this.previousY = y
    this.cell_color = cell_color
    this.cell_type = cell_type
  }

  static width = gridSize
  static height = gridSize

  draw() {
    gridState[`${this.previousX}-${this.previousY}`] = CELL_TYPE_SPACE
    gridState[`${this.x}-${this.y}`] = this.cell_type

    ctxGame.clearRect(
      this.previousX,
      this.previousY,
      Square.width,
      Square.height
    )
    this.previousX = this.x
    this.previousY = this.y
    ctxGame.save()
    ctxGame.beginPath()
    ctxGame.fillStyle = this.cell_color
    ctxGame.fillRect(this.x, this.y, Square.width, Square.height)
    ctxGame.restore()
  }
}
```

```javascript [贪吃蛇]
// 贪吃蛇 Snake 类中的逻辑，是整个游戏的核心。
class Snake {
  // 构造函数初始化蛇的位置、方向、头部和身体
  constructor(x, y, direction = 'ArrowRight') {
    this.x = x * gridSize // 横坐标初始化，根据网格大小调整
    this.y = y * gridSize // 纵坐标初始化，根据网格大小调整
    this.direction = direction // 初始方向
    this.head = new Square(
      this.x,
      this.y,
      CELL_TYPE_SNAKE,
      CELL_COLOR_SNAKE_HEAD
    ) // 创建蛇头部的实例
    this.body = [] // 蛇的身体部分数组
    this.score = 0 // 初始化得分
  }

  // 绘制蛇的头部和身体
  draw() {
    this.head.draw() // 绘制蛇头
    this.body.forEach((segment) => segment.draw()) // 绘制蛇身体的每一个部分
  }

  // 控制蛇的移动逻辑
  move() {
    // 根据蛇的当前方向更新蛇头的位置
    switch (this.direction) {
      case ARROW_RIGHT:
        this.head.x += gridSize
        break
      case ARROW_DOWN:
        this.head.y += gridSize
        break
      case ARROW_LEFT:
        this.head.x -= gridSize
        break
      case ARROW_UP:
        this.head.y -= gridSize
        break
    }

    // 检查游戏是否结束（出界或撞到自己）
    if (this.isOutOfBounds() || this.isCollidingWithSelf()) {
      console.log('游戏结束！最终得分：' + this.score) // 弹出游戏结束信息
      return
    }

    // 检查蛇是否吃到食物
    if (this.isEatingFood()) {
      this.score += 10 // 增加分数
      const newSegment = new Square(
        this.head.previousX,
        this.head.previousY,
        CELL_TYPE_SNAKE,
        CELL_COLOR_SNAKE_BODY
      ) // 创建新的身体部分
      this.body.unshift(newSegment) // 将新部分添加到蛇身体的前端
      generateFood() // 重新生成食物
    } else {
      this.moveBody() // 移动身体
    }

    this.draw() // 重绘蛇的新状态

    setTimeout(() => {
      this.move() // 延迟调用move方法，以创建动画效果
    }, 200 - this.score / 2) // 移动速度随分数增加而增快
  }

  // 检查蛇是否出界
  isOutOfBounds() {
    return (
      this.head.x < 0 ||
      this.head.y < 0 ||
      this.head.x >= canvasGame.width ||
      this.head.y >= canvasGame.height
    )
  }

  // 检查蛇是否撞到了自己
  isCollidingWithSelf() {
    return gridState[`${this.head.x}-${this.head.y}`] === CELL_TYPE_SNAKE
  }

  // 检查蛇是否吃到了食物
  isEatingFood() {
    return this.head.x === currentFood.x && this.head.y === currentFood.y
  }

  // 移动蛇身体的逻辑
  // 把尾巴切掉一个格子
  // 然后在头部插入一个格子
  moveBody() {
    if (this.body.length > 0) {
      const tailSegment = this.body.pop() // 移除尾部
      tailSegment.x = this.head.previousX // 更新尾部位置到之前头部的位置
      tailSegment.y = this.head.previousY
      this.body.unshift(tailSegment) // 将尾部添加到头部位置，实现身体的“移动”
    }
  }
}
```

:::

## 4. 💻 demos.1 - 贪吃蛇小游戏

::: code-group

<<< ./demos/1/index.js {}

<<< ./demos/1/index.css {}

<<< ./demos/1/index.html {}

:::
