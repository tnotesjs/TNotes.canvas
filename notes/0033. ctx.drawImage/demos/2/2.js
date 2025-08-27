const canvas = document.createElement('canvas')
canvas.width = 500
canvas.height = 500
document.body.append(canvas)

const ctx = canvas.getContext('2d')

const img = new Image()
img.src = './run.png'
img.onload = function () {
  let i = 0
  function show() {
    ctx.clearRect(0, 0, 500, 500)
    ctx.drawImage(
      img,
      // 从 (i * 94, 0) 位置开始截取宽度为 94 高度为 img.height 的图片
      i * 94,
      0,
      94,
      img.height,
      // 从 (0, 0) 位置开始绘制宽度为 94 高度为 img.height 的图片
      // 相当于原地奔跑
      0,
      0,
      94,
      img.height
    )
    i++
    if (i == 5) {
      i = 0
    }
  }

  setInterval(show, 1000 / 30) // 调节动画速度
}
