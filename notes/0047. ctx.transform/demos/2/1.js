const canvas = document.createElement('canvas')
drawGrid(canvas, 500, 200, 50)
document.body.append(canvas)
const ctx = canvas.getContext('2d')

ctx.beginPath()

// 绘制蓝色矩形
ctx.fillStyle = 'blue'
ctx.fillRect(100, 100, 100, 50)
// 从 x 为 100，y 为 100 的位置开始
// 画一个横向长度为 100 纵向长度为 50 的矩形

// 改变坐标系 - 横向放大 2 倍，纵向缩小 0.5 倍。
ctx.transform(2, 0, 0, 0.5, 0, 0)

// 绘制改变坐标系后的红色矩形
ctx.fillStyle = 'red'
ctx.fillRect(100, 100, 100, 50)
// 从 x 为 2 * 100，y 为 0.5 * 100 的位置开始
// 画一个横向长度为 2 * 100 纵向长度为 0.5 * 50 的矩形
