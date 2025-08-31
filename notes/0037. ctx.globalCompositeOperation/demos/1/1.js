composite('source-over', '（默认值） 在现有画布上绘制新图形。')
// ctx.globalCompositeOperation = 'source-over'
// 这条语句有 or 没有都是一样的，因为默认值就是 source-over。

composite(
  'source-in',
  '仅在新形状和目标画布重叠的地方绘制新形状，其他都是透明的。'
)

composite('source-out', '在不与现有画布内容重叠的地方绘制新图形。')

composite('source-atop', '只在与现有画布内容重叠的地方绘制新图形。')

composite('destination-over', '在现有画布内容的后面绘制新的图形。')

composite(
  'destination-in',
  '仅保留现有画布内容和新形状重叠的部分，其他都是透明的。'
)

composite('destination-out', '仅保留现有画布内容和新形状不重叠的部分。')

composite(
  'destination-atop',
  '仅保留现有画布内容和新形状重叠的部分，新形状在现有画布内容的后面绘制。'
)

composite('lighter', '两个重叠图形的颜色通过颜色值相加来确定。')

composite('copy', '只显示新图形。')

composite('xor', '形状在重叠处变为透明，并在其他地方正常绘制。')
