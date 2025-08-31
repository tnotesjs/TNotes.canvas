const canvas = document.createElement('canvas')
drawGrid(canvas, 500, 200, 50)
document.body.append(canvas)
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.globalAlpha = 0.8

ctx.fillStyle = 'blue'
ctx.fillRect(100, 100, 100, 50)

// 改变坐标系 - 实现倾斜效果
ctx.transform(1, 0, Math.tan((30 * Math.PI) / 180), 1, 0, 0)

ctx.fillStyle = 'red'
ctx.fillRect(100, 100, 100, 50)
