// 填充描边区域
{
  const canvas = document.createElement('canvas')
  drawGrid(canvas, 500, 500, 50)
  document.body.append(canvas)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()

  const pattern = ctx.createPattern(rhombus, 'repeat')
  ctx.strokeStyle = pattern

  ctx.beginPath()
  ctx.lineWidth = 100
  ctx.rect(100, 100, 300, 300)
  ctx.stroke()
}
// ctx.lineWidth 这玩意儿设置的描边宽度，作用到图形上时，分别向两侧扩散 lineWidth / 2 的距离。
// 开始绘制的菱形的 width 和 height 都是 50
// 在这个示例中，lineWidth 是 100，相当于两个菱形
// 最终效果会看到两个菱形的尺寸用来填充 rect 的边框
// 并且是沿着 rect 边框的中心线向两侧扩散来填充的
