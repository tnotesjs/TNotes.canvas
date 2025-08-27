// 填充整个画布
{
  const canvas = document.createElement('canvas')
  drawGrid(canvas, 500, 500, 50)
  document.body.append(canvas)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()

  const pattern = ctx.createPattern(rhombus, 'repeat')
  // 使用 rhombus 来创建一个填充图案 pattern
  // repeat 表示填充整个画布

  ctx.fillStyle = pattern
  // 将 pattern 设置为填充样式

  ctx.rect(0, 0, canvas.width, canvas.height)
  ctx.fill()
}
