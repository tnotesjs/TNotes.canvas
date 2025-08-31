/**
 * - 创建一个 canvas 元素并演示 ctx.globalCompositeOperation 效果
 * - 重点关注核心逻辑 core logic 部分
 * @param {string} op - globalCompositeOperation 的属性值
 * @param {string} [desc] - 对该操作效果的描述
 */
const composite = (op, desc) => {
  const canvasContainer = document.querySelector('.canvas-container')
  const canvasBox = document.createElement('div')
  canvasBox.style.display = 'flex'
  canvasBox.style.flexDirection = 'column'
  canvasBox.style.alignItems = 'center'

  const canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 200

  const ctx = canvas.getContext('2d')

  // add title
  const title = document.createElement('h3')
  title.textContent = op
  title.style.margin = '10px 0 5px 0'

  // add description
  const description = document.createElement('p')
  description.textContent = desc || ''
  description.style.maxWidth = '200px'

  canvasBox.append(canvas)
  canvasBox.append(title)
  canvasBox.append(description)
  canvasContainer.append(canvasBox)

  // #region - core logic
  ctx.fillStyle = 'blue'
  ctx.fillRect(10, 10, 100, 100)

  ctx.globalCompositeOperation = op

  ctx.fillStyle = 'red'
  ctx.fillRect(50, 50, 100, 100)
  // #endregion - core logic
}
