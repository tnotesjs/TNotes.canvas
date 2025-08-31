const canvas = document.createElement('canvas')
drawGrid(canvas, 500, 500, 50)
document.body.append(canvas)
const ctx = canvas.getContext('2d')

ctx.beginPath()

const drawRect = (x, y, w, h) => ctx.rect(x, y, w, h)

// 绘制蓝色矩形
ctx.fillStyle = 'blue'
drawRect(50, 50, 100, 50)

// 改变坐标系 - 将横纵各移动 100
ctx.transform(1, 0, 0, 1, 100, 100)

// 绘制改变坐标系后的红色矩形
ctx.fillStyle = 'red'
drawRect(50, 50, 100, 50) // 使用跟绘制蓝色矩形时，相同的位置和尺寸参数。
