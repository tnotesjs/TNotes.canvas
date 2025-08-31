// screen 重叠部分采用补色相乘的方式处理，使颜色值更亮，产生高光效果。
{
  const canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 200
  document.body.append(canvas)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = 'blue'
  ctx.fillRect(10, 10, 100, 100)

  ctx.globalCompositeOperation = 'screen'

  ctx.fillStyle = 'red'
  ctx.fillRect(50, 50, 100, 100)
}
