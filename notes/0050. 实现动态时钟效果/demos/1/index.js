// #region 绘制时钟背景
const clock_bg_canvas = document.createElement('canvas')
document.body.append(clock_bg_canvas)
clock_bg_canvas.width = 400
clock_bg_canvas.height = 400

let ctx = clock_bg_canvas.getContext('2d')

// 移动原点置容器中心，以便后续绘制操作。
ctx.translate(200, 200)

// 绘制小时刻度
ctx.strokeStyle = 'black'
ctx.lineWidth = 8
for (let i = 0; i < 12; i++) {
  ctx.beginPath()
  ctx.moveTo(0, -200)
  ctx.lineTo(0, -180)
  ctx.stroke()
  ctx.rotate((Math.PI * 2) / 12)
  // 将一圈分为 12 份，每次旋转都是基于上次的位置来旋转的。
  // 一共旋转 12 次，绘制 12 个刻度点。
}

// 绘制分钟刻度
ctx.strokeStyle = 'gray'
ctx.lineWidth = 4
for (let i = 0; i < 60; i++) {
  // 每个小时刻度之间再绘制 5 个分钟刻度，分别表示 10、20、30、40、50 分。
  if (i % 5 != 0) {
    ctx.beginPath()
    ctx.moveTo(0, -200)
    ctx.lineTo(0, -190)
    ctx.stroke()
  }
  ctx.rotate((Math.PI * 2) / 60)
}

// 绘制小时数字
ctx.font = '20px sans-serif'
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillStyle = 'black'
const r = 160
const angle = (Math.PI * 2) / 12 // 每小时所占的角度，单位为弧度
for (let i = 0; i < 12; i++) {
  const text = i == 0 ? 12 : i
  const x = Math.sin(angle * i) * r
  const y = -Math.cos(angle * i) * r
  ctx.fillText(text, x, y)
}
// #endregion 绘制时钟背景

// #region 绘制动态的指针
const canvas = document.createElement('canvas')
document.body.append(canvas)
canvas.width = 400
canvas.height = 400
ctx = canvas.getContext('2d')

ctx.translate(200, 200)

function start() {
  // 清除画布
  ctx.clearRect(-200, -200, canvas.width, canvas.height)

  // 获得当前时间的时分秒，分别计算表针旋转角度
  const now = new Date()
  const hour = now.getHours() % 12
  const minute = now.getMinutes()
  const second = now.getSeconds()
  const millisecond = now.getMilliseconds()

  // 绘制时针
  ctx.save()
  // 考虑分钟和秒钟对时针位置的影响，实现平滑过渡
  ctx.rotate(
    ((hour * 3600 + minute * 60 + second) * Math.PI * 2) / (60 * 60 * 12)
  )
  ctx.beginPath()
  ctx.moveTo(-5, 10)
  ctx.lineTo(-5, -100)
  // 使用贝塞尔曲线绘制一个心形
  ctx.quadraticCurveTo(-15, -100, 0, -120)
  ctx.quadraticCurveTo(15, -100, 5, -100)
  ctx.lineTo(5, 10)
  ctx.closePath()
  ctx.stroke()
  ctx.fill()
  ctx.restore()

  // 绘制分针
  ctx.save()
  // 考虑秒钟对分针位置的影响，实现平滑过渡
  ctx.rotate(((minute * 60 + second) * Math.PI * 2) / 3600)
  ctx.lineWidth = 6
  ctx.strokeStyle = 'gray'
  ctx.beginPath()
  ctx.moveTo(0, 20)
  ctx.lineTo(0, -160)
  ctx.stroke()
  ctx.restore()

  // 绘制秒针
  ctx.save()
  // 考虑毫秒对秒针位置的影响，实现平滑过渡
  ctx.rotate(((Math.PI * 2) / 60) * (second + millisecond / 1000))
  ctx.lineWidth = 2
  ctx.strokeStyle = 'red'
  ctx.beginPath()
  ctx.moveTo(0, 30)
  ctx.lineTo(0, -190)
  ctx.stroke()
  ctx.restore()

  // 绘制圆心点
  ctx.save()
  ctx.beginPath()
  ctx.arc(0, 0, 6, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()

  // requestAnimationFrame(start) // 使用 requestAnimationFrame 可实现更流畅的动画效果
  setTimeout(start, 1000)
}
// #endregion 绘制动态的指针

// 启动时钟
start()
