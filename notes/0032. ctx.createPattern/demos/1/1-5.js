// 填充指定区域
{
  const canvas = document.createElement('canvas')
  drawGrid(canvas, 500, 500, 50)
  document.body.append(canvas)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()

  const pattern = ctx.createPattern(rhombus, 'repeat')
  ctx.fillStyle = pattern

  ctx.rect(100, 100, 100, 100)
  ctx.fill()

  ctx.beginPath()
  ctx.rect(75, 300, 100, 100)
  ctx.fill()
}
// pattern 是基于画布坐标系的原点开始计算的，绝对位置，并不会随着图形的移动而发生变化。
