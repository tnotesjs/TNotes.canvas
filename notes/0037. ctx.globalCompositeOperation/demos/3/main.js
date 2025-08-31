// 主程序：在页面加载时，该代码设置并运行示例
window.onload = () => {
  // sRGB 中的 lum
  const lum = {
    r: 0.33,
    g: 0.33,
    b: 0.33,
  }
  // 调整画布大小
  canvas1.width = width
  canvas1.height = height
  canvas2.width = width
  canvas2.height = height
  lightMix()
  colorSphere()
  runComposite()
  return
}

/**
 * 创建一个新的画布元素
 * @returns {HTMLCanvasElement} 配置好样式和尺寸的画布元素
 */
function createCanvas() {
  const canvas = document.createElement('canvas')
  canvas.style.background = `url(${op_8x8.data})`
  canvas.style.border = '1px solid #000'
  canvas.style.margin = '5px'
  canvas.width = width / 2
  canvas.height = height / 2
  return canvas
}

/**
 * 运行并展示各种全局合成操作的效果
 * 该函数会创建一个描述列表(dl)，遍历所有全局合成操作模式，
 * 并为每种模式创建三幅画布：目标画布、源画布和合成结果画布
 */
function runComposite() {
  const dl = document.createElement('dl')
  document.body.appendChild(dl)
  while (gco.length) {
    const pop = gco.pop()
    const dt = document.createElement('dt')
    dt.textContent = pop
    dl.appendChild(dt)
    const dd = document.createElement('dd')
    const p = document.createElement('p')
    p.textContent = gcoText.pop()
    dd.appendChild(p)

    const canvasToDrawOn = createCanvas()
    const canvasToDrawFrom = createCanvas()
    const canvasToDrawResult = createCanvas()

    // 绘制合成结果
    let ctx = canvasToDrawResult.getContext('2d')
    ctx.clearRect(0, 0, width, height)
    ctx.save()
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2)
    ctx.globalCompositeOperation = pop
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2)
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = 'rgba(0,0,0,0.8)'
    ctx.fillRect(0, height / 2 - 20, width / 2, 20)
    ctx.fillStyle = '#FFF'
    ctx.font = '14px arial'
    ctx.fillText(pop, 5, height / 2 - 5)
    ctx.restore()

    // 绘制目标画布（现有内容）
    ctx = canvasToDrawOn.getContext('2d')
    ctx.clearRect(0, 0, width, height)
    ctx.save()
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2)
    ctx.fillStyle = 'rgba(0,0,0,0.8)'
    ctx.fillRect(0, height / 2 - 20, width / 2, 20)
    ctx.fillStyle = '#FFF'
    ctx.font = '14px arial'
    ctx.fillText('现有内容', 5, height / 2 - 5)
    ctx.restore()

    // 绘制源画布（新内容）
    ctx = canvasToDrawFrom.getContext('2d')
    ctx.clearRect(0, 0, width, height)
    ctx.save()
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2)
    ctx.fillStyle = 'rgba(0,0,0,0.8)'
    ctx.fillRect(0, height / 2 - 20, width / 2, 20)
    ctx.fillStyle = '#FFF'
    ctx.font = '14px arial'
    ctx.fillText('新内容', 5, height / 2 - 5)
    ctx.restore()

    dd.appendChild(canvasToDrawOn)
    dd.appendChild(canvasToDrawFrom)
    dd.appendChild(canvasToDrawResult)

    dl.appendChild(dd)
  }
}
