// 填充 x 轴
{
  const canvas = document.createElement('canvas')
  drawGrid(canvas, 500, 500, 50)
  document.body.append(canvas)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()

  const pattern = ctx.createPattern(rhombus, 'repeat-x')
  // repeat-x 表示填充 x 轴

  ctx.fillStyle = pattern
  ctx.rect(0, 0, canvas.width, canvas.height)
  ctx.fill()
}
