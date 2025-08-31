const results = []

const cardCount = 3
let scratchedCount = 0

// 随机生成 3 个结果
for (let i = 0; i < cardCount; i++) {
  results.push(Math.random() < 0.5 ? '谢谢惠顾' : '再来一瓶')
}

const cardsContainer = document.getElementById('cards')
const stats = document.getElementById('stats')

// 渲染 3 张卡片
results.forEach((result, index) => {
  const card = document.createElement('div')
  card.className = 'card'

  const resultDiv = document.createElement('div')
  resultDiv.className = 'result'
  resultDiv.innerText = result
  card.appendChild(resultDiv)

  const canvas = document.createElement('canvas')
  canvas.width = 300
  canvas.height = 200
  card.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#bbb'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.globalCompositeOperation = 'destination-out'
  ctx.lineWidth = 20
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  let scratched = false

  canvas.onmousedown = function (e) {
    ctx.moveTo(e.offsetX, e.offsetY)

    canvas.onmousemove = function (e) {
      ctx.lineTo(e.offsetX, e.offsetY)
      ctx.stroke()

      if (!scratched) {
        scratched = true
        scratchedCount++
        updateStats()
      }
    }

    canvas.onmouseup = canvas.onmouseout = function () {
      canvas.onmousemove = null
      canvas.onmouseout = null
    }
  }

  cardsContainer.appendChild(card)
})

function updateStats() {
  const winCount = results.filter(
    (r, i) => scratchedCount > i && r === '再来一瓶'
  ).length
  const loseCount = results.filter(
    (r, i) => scratchedCount > i && r === '谢谢惠顾'
  ).length
  const total = results.length

  if (scratchedCount === total) {
    stats.innerText = `已完成所有抽奖 ✅ 中奖数量：${winCount}，谢谢惠顾数量：${loseCount}`
  } else {
    stats.innerText = `正在刮奖中 ⏳ 中奖数量：${winCount}，待刮数量：${
      total - scratchedCount
    }，谢谢惠顾数量：${loseCount}`
  }
}

// 初始化状态
updateStats()
