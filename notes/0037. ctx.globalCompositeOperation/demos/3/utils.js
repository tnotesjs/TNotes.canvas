/**
 * lightMix 工具函数
 *
 * 在 canvas2 上绘制三个不同颜色的圆形，并设置混合模式为 lighter，
 * 使得重叠区域产生光效混合。最后绘制一个红色矩形。
 *
 * 依赖全局变量 canvas2（HTMLCanvasElement）
 */
const lightMix = () => {
  const ctx = canvas2.getContext('2d')
  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  ctx.beginPath()
  ctx.fillStyle = 'rgba(255,0,0,1)'
  ctx.arc(100, 200, 100, Math.PI * 2, 0, false)
  ctx.fill()
  ctx.beginPath()
  ctx.fillStyle = 'rgba(0,0,255,1)'
  ctx.arc(220, 200, 100, Math.PI * 2, 0, false)
  ctx.fill()
  ctx.beginPath()
  ctx.fillStyle = 'rgba(0,255,0,1)'
  ctx.arc(160, 100, 100, Math.PI * 2, 0, false)
  ctx.fill()
  ctx.restore()
  ctx.beginPath()
  ctx.fillStyle = '#f00'
  ctx.fillRect(0, 0, 30, 30)
  ctx.fill()
}

/**
 * colorSphere 工具函数
 *
 * 在 canvas1 上绘制一个彩色球体效果，通过创建多个渐变线段并旋转绘制实现。
 * 最后在指定位置绘制一个蓝色矩形。
 *
 * @param {any} element - 未使用参数
 * @returns {HTMLCanvasElement} 返回 canvas1 的 canvas 元素
 *
 * 依赖全局变量 canvas1（HTMLCanvasElement）和 Color 对象
 */
const colorSphere = (element) => {
  const ctx = canvas1.getContext('2d')
  const width = 360
  const halfWidth = width / 2
  const rotate = (1 / 360) * Math.PI * 2 // 每度的弧度
  const offset = 0 // 滚动条偏移
  const oleft = -20
  const otop = -20

  // 绘制360个渐变线段形成球体效果
  for (let n = 0; n <= 359; n++) {
    const gradient = ctx.createLinearGradient(
      oleft + halfWidth,
      otop,
      oleft + halfWidth,
      otop + halfWidth
    )
    const color = Color.HSV_RGB({ H: (n + 300) % 360, S: 100, V: 100 })
    gradient.addColorStop(0, 'rgba(0,0,0,0)')
    gradient.addColorStop(0.7, `rgba(${color.R}, ${color.G}, ${color.B}, 1)`)
    gradient.addColorStop(1, 'rgba(255,255,255,1)')
    ctx.beginPath()
    ctx.moveTo(oleft + halfWidth, otop)
    ctx.lineTo(oleft + halfWidth, otop + halfWidth)
    ctx.lineTo(oleft + halfWidth + 6, otop)
    ctx.fillStyle = gradient
    ctx.fill()
    ctx.translate(oleft + halfWidth, otop + halfWidth)
    ctx.rotate(rotate)
    ctx.translate(-(oleft + halfWidth), -(otop + halfWidth))
  }

  // 绘制蓝色矩形
  ctx.beginPath()
  ctx.fillStyle = '#00f'
  ctx.fillRect(15, 15, 30, 30)
  ctx.fill()
  return ctx.canvas
}

/**
 * HSV转RGB颜色空间转换函数
 *
 * 将HSV颜色值转换为RGB颜色值。
 * HSV颜色模型：H表示色调(0-360)，S表示饱和度(0-100)，V表示明度(0-100)
 *
 * @param {Object} o - HSV颜色对象
 * @param {number} o.H - 色调值 (0-360)
 * @param {number} o.S - 饱和度值 (0-100)
 * @param {number} o.V - 明度值 (0-100)
 * @returns {Object} 包含R、G、B属性的RGB颜色对象，每个值范围为0-255
 */
Color = {}
Color.HSV_RGB = (o) => {
  const S = o.S / 100
  let H = o.H / 360,
    V = o.V / 100
  let R, G
  let A, B, C, D

  // 当饱和度为0时，为灰度颜色
  if (S === 0) {
    R = G = B = Math.round(V * 255)
  } else {
    if (H >= 1) H = 0
    H *= 6
    D = H - Math.floor(H)
    A = Math.round(255 * V * (1 - S))
    B = Math.round(255 * V * (1 - S * D))
    C = Math.round(255 * V * (1 - S * (1 - D)))
    V = Math.round(255 * V)

    // 根据H值所在的区间计算RGB值
    switch (Math.floor(H)) {
      case 0:
        R = V
        G = C
        B = A
        break
      case 1:
        R = B
        G = V
        B = A
        break
      case 2:
        R = A
        G = V
        B = C
        break
      case 3:
        R = A
        G = B
        B = V
        break
      case 4:
        R = C
        G = A
        B = V
        break
      case 5:
        R = V
        G = A
        B = B
        break
    }
  }
  return { R, G, B }
}

/**
 * 创建交错图案函数
 *
 * 创建一个指定大小的交错图案，由两种颜色交替组成。
 *
 * @param {number} size - 图案单元格大小
 * @param {string} color1 - 第一种颜色
 * @param {string} color2 - 第二种颜色
 * @returns {CanvasPattern} 包含图案数据的CanvasPattern对象
 */
const createInterlace = (size, color1, color2) => {
  const proto = document.createElement('canvas').getContext('2d')
  proto.canvas.width = size * 2
  proto.canvas.height = size * 2

  // 绘制2x2的交错颜色格子
  proto.fillStyle = color1 // 左上角
  proto.fillRect(0, 0, size, size)
  proto.fillStyle = color2 // 右上角
  proto.fillRect(size, 0, size, size)
  proto.fillStyle = color2 // 左下角
  proto.fillRect(0, size, size, size)
  proto.fillStyle = color1 // 右下角
  proto.fillRect(size, size, size, size)

  const pattern = proto.createPattern(proto.canvas, 'repeat')
  pattern.data = proto.canvas.toDataURL()
  return pattern
}

// 创建8x8像素的交错图案，使用白色和浅灰色
const op_8x8 = createInterlace(8, '#FFF', '#eee')
