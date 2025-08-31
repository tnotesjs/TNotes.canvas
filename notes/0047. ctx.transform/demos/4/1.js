const canvas = document.createElement('canvas')
drawGrid(canvas, 500, 200, 50)
document.body.append(canvas)
const ctx = canvas.getContext('2d')

ctx.globalAlpha = 0.8
ctx.lineWidth = 10

ctx.beginPath()
ctx.strokeStyle = 'blue'
ctx.moveTo(0, 0)
ctx.lineTo(200, 0)
ctx.stroke()

const cos = Math.cos((45 * Math.PI) / 180)
const sin = Math.sin((45 * Math.PI) / 180)

// 改变坐标系 - 实现旋转效果 旋转角度 45°
ctx.transform(cos, sin, -sin, cos, 0, 0)

ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.moveTo(0, 0)
ctx.lineTo(200, 0)
ctx.stroke()

// 改变坐标系 - 实现旋转效果 旋转角度 45°
ctx.transform(cos, sin, -sin, cos, 0, 0)

// 每次变化都是基于之前的效果累加
// 这次是第二次旋转 45°，相当于一共旋转了 90°。

ctx.beginPath()
ctx.strokeStyle = 'orange'
ctx.moveTo(0, 0)
ctx.lineTo(200, 0)
ctx.stroke()
