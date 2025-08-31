// 全局值 - 这段代码设置了程序的其他部分使用的全局值。

/**
 * 创建两个 canvas 元素，用于后续绘图操作。
 */
const canvas1 = document.createElement('canvas')
const canvas2 = document.createElement('canvas')

/**
 * 定义全局合成操作（Global Composite Operation）的类型列表。
 * 这些值用于控制绘图时新图形与画布上已有内容的混合方式。
 * reverse() 用于倒序排列，可能为了视觉或逻辑展示需求。
 */
const gco = [
  'source-over',
  'source-in',
  'source-out',
  'source-atop',
  'destination-over',
  'destination-in',
  'destination-out',
  'destination-atop',
  'lighter',
  'copy',
  'xor',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
].reverse()

/**
 * 每个全局合成操作对应的中文说明文本。
 * 与 gco 数组一一对应，描述每种合成模式的行为特性。
 * 同样使用 reverse() 倒序以匹配 gco 的顺序。
 */
const gcoText = [
  '这是默认设置，并在现有画布上下文之上绘制新图形。',
  '新图形只在新图形和目标画布重叠的地方绘制。其他的都是透明的。',
  '在不与现有画布内容重叠的地方绘制新图形。',
  '新图形只在与现有画布内容重叠的地方绘制。',
  '在现有的画布内容后面绘制新的图形。',
  '现有的画布内容保持在新图形和现有画布内容重叠的位置。其他的都是透明的。',
  '现有内容保持在新图形不重叠的地方。',
  '现有的画布只保留与新图形重叠的部分，新的图形是在画布内容后面绘制的。',
  '两个重叠图形的颜色是通过颜色值相加来确定的。',
  '只显示新图形。',
  '图像中，那些重叠和正常绘制之外的其他地方是透明的。',
  '将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。',
  '像素被倒转，相乘，再倒转，结果是一幅更明亮的图片。',
  'multiply 和 screen 的结合，原本暗的地方更暗，原本亮的地方更亮。',
  '保留两个图层中最暗的像素。',
  '保留两个图层中最亮的像素。',
  '将底层除以顶层的反置。',
  '将反置的底层除以顶层，然后将结果反过来。',
  'multiply 和 screen 的结合，类似于叠加，但上下图层互换了。',
  '用顶层减去底层或者相反来得到一个正值。',
  '一个柔和版本的 hard-light。纯黑或纯白不会导致纯黑或纯白。',
  '和 difference 相似，但对比度较低。',
  '保留了底层的亮度和色度，同时采用了顶层的色调。',
  '保留底层的亮度和色调，同时采用顶层的色度。',
  '保留了底层的亮度，同时采用了顶层的色调和色度。',
  '保持底层的色调和色度，同时采用顶层的亮度。',
].reverse()

/**
 * 设置画布的宽度和高度。
 */
const width = 320
const height = 340
