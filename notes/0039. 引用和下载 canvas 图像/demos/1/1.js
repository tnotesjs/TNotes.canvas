/**
 * 绘制一个 canvas 靶心图案，作为 canvas 素材
 */
const canvas1 = createTargetCanvas()
/**
 * 引用 canvas1 素材来绘制一个新的 canvas
 */
const canvas2 = createDisplayCanvas(canvas1)
/**
 * 引用一张图片绘制到 canvas 中
 */
const canvas3 = createImageCanvas()

// 绑定下载事件，上述所有 canvas 都是可以被下载的
document.getElementById('bnt-1').onclick = createDownloadHandler(
  canvas1,
  'canvas1'
)
document.getElementById('bnt-2').onclick = createDownloadHandler(
  canvas2,
  'canvas2'
)
document.getElementById('bnt-3').onclick = createDownloadHandler(
  canvas3,
  'canvas3'
)

/**
 * canvas1 - 创建靶心 🎯 图案的 canvas
 * @returns {HTMLCanvasElement} 靶心图案 canvas
 */
function createTargetCanvas() {
  const canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 200
  document.body.append(canvas)

  const ctx = canvas.getContext('2d')

  // 绘制几个同心圆
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath()
    ctx.arc(100, 100, 20 * i, 0, Math.PI * 2)
    ctx.stroke()
  }

  // 经过圆心绘制十字线
  ctx.beginPath()
  ctx.moveTo(0, 100)
  ctx.lineTo(200, 100)
  ctx.moveTo(100, 0)
  ctx.lineTo(100, 200)
  ctx.stroke()

  return canvas
}

/**
 * canvas2 - 创建展示 canvas1 图像部分内容的 canvas
 * @param {HTMLCanvasElement} sourceCanvas - 源 canvas
 * @returns {HTMLCanvasElement} 展示 canvas
 */
function createDisplayCanvas(sourceCanvas) {
  const canvas = document.createElement('canvas')
  canvas.width = 400
  canvas.height = 400
  document.body.append(canvas)

  const ctx = canvas.getContext('2d')
  // 将 sourceCanvas 的一部分绘制到当前 canvas 上
  ctx.drawImage(sourceCanvas, 0, 0, 100, 100, 150, 150, 100, 100)

  return canvas
}

/**
 * canvas3 - 创建图片展示 canvas
 * @returns {HTMLCanvasElement} 图片展示 canvas
 */
function createImageCanvas() {
  const canvas = document.createElement('canvas')
  canvas.width = 800
  canvas.height = 400
  document.body.append(canvas)

  const ctx = canvas.getContext('2d')
  const img = new Image()

  img.onload = function () {
    ctx.drawImage(img, 0, 0, 600, 300)
  }

  img.src = './we.png'

  return canvas
}

/**
 * 创建下载处理器
 * @param {HTMLCanvasElement} canvas - 要下载的 canvas
 * @param {string} filename - 下载文件名
 * @returns {Function} 下载处理函数
 */
function createDownloadHandler(canvas, filename) {
  return function () {
    const url = canvas.toDataURL()
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}
