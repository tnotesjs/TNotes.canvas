const canvas = document.createElement('canvas')
canvas.width = 400
canvas.height = 400
document.body.append(canvas)

const ctx = canvas.getContext('2d')

const video = document.querySelector('video')
video.addEventListener('play', draw) // 当视频播放后，调用 draw 函数

ctx.arc(200, 200, 150, 0, Math.PI * 2)
ctx.clip()
// 表示裁剪出一个圆形区域

// 可以加一些滤镜效果（有关滤镜的相关知识点，在后续内容中会介绍。）
ctx.filter = 'blur(5px)' // 表示 5px 的模糊效果
ctx.filter = 'invert(0.8)' // 表示反色效果

function draw() {
  ctx.clearRect(0, 0, 400, 400)
  ctx.drawImage(video, 0, 0, 400, 400)
  requestAnimationFrame(draw)
}

// requestAnimationFrame 是一个用于创建平滑动画效果的浏览器 API
// 与浏览器的帧刷新率（通常是60次/秒，即每16.67毫秒一帧）同步

// requestAnimationFrame(draw)
// 请求浏览器在下次重新绘制之前调用 draw 函数，从而创建一个动画循环。
// 通常用于实现高效率的、平滑的动画效果。
