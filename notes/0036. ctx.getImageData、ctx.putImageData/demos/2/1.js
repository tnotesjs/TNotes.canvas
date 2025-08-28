const canvas = document.createElement('canvas')
canvas.width = 800
canvas.height = 800
document.body.append(canvas)

const ctx = canvas.getContext('2d')

const img = new Image()
img.src = '../common/home.png'
img.onload = function () {
  ctx.drawImage(img, 0, 0)

  const imageData = ctx.getImageData(0, 0, img.width, img.height)
  for (let i = 0; i < imageData.data.length; i += 4) {
    const r = imageData.data[i]
    const g = imageData.data[i + 1]
    const b = imageData.data[i + 2]

    // 图像反色处理
    imageData.data[i] = 255 - r
    imageData.data[i + 1] = 255 - g
    imageData.data[i + 2] = 255 - b
  }
  ctx.putImageData(imageData, 0, 0)
}
