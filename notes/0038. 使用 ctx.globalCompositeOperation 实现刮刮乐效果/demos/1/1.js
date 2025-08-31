const canvas = document.createElement('canvas')
canvas.width = 300
canvas.height = 200
document.body.append(canvas)

const ctx = canvas.getContext('2d')

// 绘制填充矩形，将结果盖住。
ctx.beginPath()
ctx.fillStyle = '#ccc'
ctx.fillRect(0, 0, 300, 200)

ctx.globalCompositeOperation = 'destination-out'
// destination-out 旧图形和新图形在不重叠的部分显示，重叠的部分透明。
// 这意味着如果在旧图形上绘制新图形，重叠的部分会被删除。

ctx.beginPath()
// ctx.strokeStyle = '#fff' // 这里是否设置颜色都可以
ctx.lineWidth = 20
ctx.lineCap = 'round'
ctx.lineJoin = 'round'

canvas.onmousedown = function (e) {
  ctx.moveTo(e.offsetX, e.offsetY)

  // 按下鼠标之后就不断地画线
  canvas.onmousemove = function (e) {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
  }

  canvas.onmouseup = canvas.onmouseout = function () {
    canvas.onmousemove = null
    canvas.onmouseout = null
  }
}
