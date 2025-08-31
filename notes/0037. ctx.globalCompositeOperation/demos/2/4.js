// darken 在重叠部分选择较暗的颜色，使图像整体显得更暗。
{
  const canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 200
  document.body.append(canvas)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = 'blue'
  ctx.fillRect(10, 10, 100, 100)

  ctx.globalCompositeOperation = 'darken'

  ctx.fillStyle = 'red'
  ctx.fillRect(50, 50, 100, 100)
}
