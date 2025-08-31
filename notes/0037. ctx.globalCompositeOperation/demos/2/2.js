// multiply 重叠部分的颜色值相乘，结果更暗，增加色彩的饱和度。
{
  const canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 200
  document.body.append(canvas)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = 'blue'
  ctx.fillRect(10, 10, 100, 100)

  ctx.globalCompositeOperation = 'multiply'

  ctx.fillStyle = 'red'
  ctx.fillRect(50, 50, 100, 100)
}
