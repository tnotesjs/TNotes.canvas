composite('multiply', '将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。')

composite(
  'screen',
  '像素被倒转、相乘、再倒转，结果是一幅更明亮的图片（与 multiply 相反）。'
)

composite(
  'overlay',
  'multiply 和 screen 的结合，原本暗的地方更暗，原本亮的地方更亮。'
)

composite('darken', '保留两个图层中最暗的像素。')

composite('lighten', '保留两个图层中最亮的像素。')

composite('color-dodge', '将底层除以顶层的反置。')

composite('color-burn', '将反置的底层除以顶层，然后将结果反过来。')

composite(
  'hard-light',
  '类似于 overlay，multiply 和 screen 的结合——但上下图层互换了。'
)

composite('soft-light', '柔和版本的 hard-light，纯黑或纯白不会导致纯黑或纯白。')

composite('difference', '从顶层减去底层（或反之亦然），始终得到正值。')

composite('exclusion', '与 difference 类似，但对比度较低。')

composite(
  'hue',
  '保留底层的亮度（luma）和色度（chroma），同时采用顶层的色调（hue）。'
)

composite('saturation', '保留底层的亮度和色调，同时采用顶层的色度。')

composite('color', '保留了底层的亮度，同时采用了顶层的色调和色度。')

composite('luminosity', '保持底层的色调和色度，同时采用顶层的亮度。')
