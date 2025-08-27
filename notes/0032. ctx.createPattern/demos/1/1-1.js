// 菱形
rhombus = document.createElement('canvas')
rhombus.width = 50
rhombus.height = 50
document.body.append(rhombus)
const ctx1 = rhombus.getContext('2d')

ctx1.moveTo(0, rhombus.width / 2)
ctx1.lineTo(rhombus.height / 2, 0)
ctx1.lineTo(rhombus.height, rhombus.width / 2)
ctx1.lineTo(rhombus.height / 2, rhombus.width)
ctx1.closePath()
ctx1.fill()
