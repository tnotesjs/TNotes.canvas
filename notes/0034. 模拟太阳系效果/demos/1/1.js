let sun
let earth
let moon
let ctx

function init() {
  let canvas = document.querySelector('#solar')
  ctx = canvas.getContext('2d')

  // 初始化天体对象
  sun = { radius: 50, color: '#FFD700' }
  earth = { radius: 12, color: '#1E90FF' }
  moon = { radius: 3.5, color: '#C0C0C0' }

  draw()
}

function drawSun() {
  ctx.save()
  ctx.beginPath()
  ctx.arc(150, 150, sun.radius, 0, 2 * Math.PI)
  ctx.fillStyle = sun.color
  ctx.fill()

  ctx.restore()
}

function drawEarth(x, y) {
  ctx.save()
  ctx.beginPath()
  ctx.arc(x, y, earth.radius, 0, 2 * Math.PI)
  ctx.fillStyle = earth.color
  ctx.fill()

  ctx.restore()
}

function drawMoon(x, y) {
  ctx.save()
  ctx.beginPath()
  ctx.arc(x, y, moon.radius, 0, 2 * Math.PI)
  ctx.fillStyle = moon.color
  ctx.fill()

  ctx.restore()
}

function draw() {
  // 每次重绘前清空画布
  ctx.clearRect(0, 0, 300, 300)

  // 绘制太阳
  drawSun()

  ctx.save()
  ctx.translate(150, 150)

  // 绘制地球轨道
  ctx.beginPath()
  ctx.strokeStyle = 'orange'
  ctx.arc(0, 0, 100, 0, 2 * Math.PI)
  ctx.stroke()

  let time = new Date()
  // 计算地球位置
  // 假定地球 60s 转一圈（绕着太阳）
  const earthAngle =
    ((2 * Math.PI) / 60) * time.getSeconds() + // 计算基于秒数的角度变化
    ((2 * Math.PI) / 60000) * time.getMilliseconds() // 计算基于毫秒的精细角度变化
  ctx.rotate(earthAngle)
  ctx.translate(100, 0)

  // 绘制地球
  drawEarth(0, 0)

  // 绘制月球轨道
  ctx.beginPath()
  ctx.strokeStyle = 'gray'
  ctx.arc(0, 0, 40, 0, 2 * Math.PI)
  ctx.stroke()

  // 计算月球位置
  // 假定月球 6s 旋转一圈（绕着地球）
  const moonAngle =
    ((2 * Math.PI) / 6) * time.getSeconds() + // 计算基于秒数的角度变化
    ((2 * Math.PI) / 6000) * time.getMilliseconds() // 计算基于毫秒的精细角度变化
  ctx.rotate(moonAngle)
  ctx.translate(40, 0)

  // 绘制月球
  drawMoon(0, 0)

  ctx.restore()

  requestAnimationFrame(draw)
}

init()
