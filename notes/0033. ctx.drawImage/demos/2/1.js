const canvas = document.createElement('canvas')
drawGrid(canvas, 500, 150, 50)
document.body.append(canvas)

const ctx = canvas.getContext('2d')

ctx.globalAlpha = 0.5

const img = new Image()
img.src = './run.png'
img.onload = function () {
  ctx.drawImage(img, 0, 0)
}
// 图像宽度的计算过程：
// 在使用的素材图片 run.png 中。
// 结合坐标系，估算各个图像的大致坐标范围是 90 ～ 100 的宽度。
// 开发时不断微调，最终确定每个图像的宽度为 94 比较合适。

// 实际上如果图像是负责 UI 的同事丢给你的话，可以直接问他们图像的间隔是多少。
// 比如直接让对方设计成 100 的宽度，这样你就不用自己去估算了。
