# canvas

<!-- region:toc -->

  - [1. canvas 学习资源](#1-canvas-学习资源)
  - [2. 初始 canvas](#2-初始-canvas)
  - [3. 开始使用 canvas](#3-开始使用-canvas)
  - [4. 线条 - line](#4-线条---line)
  - [5. 文本 - text](#5-文本---text)
  - [6. 矩形 - rect](#6-矩形---rect)
  - [7. 圆弧 - arc](#7-圆弧---arc)
  - [8. 路径 - path](#8-路径---path)
  - [9. 阴影 - shadow](#9-阴影---shadow)
  - [10. 渐变 - gradient](#10-渐变---gradient)
  - [11. 滤镜 - filter](#11-滤镜---filter)
  - [12. 画布状态的存取 - save&restore](#12-画布状态的存取---saverestore)
  - [13. 图像 - image](#13-图像---image)
  - [14. 坐标系 - coordinate system](#14-坐标系---coordinate-system)
  - [15. 动画效果 - Animation](#15-动画效果---animation)
  - [16. 小游戏](#16-小游戏)

<!-- endregion:toc -->

## 1. canvas 学习资源

- [x] [0053. canvas 学习资源](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0053.%20canvas%20%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90/README.md)
- [x] [0056. canvas 在线学习 - 菜鸟教程](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0056.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B/README.md)
- [x] [0052. canvas 在线学习 - 掘金](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0052.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20%E6%8E%98%E9%87%91/README.md)
- [x] [0054. canvas 在线学习 - MDN Canvas tutorial](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0054.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20MDN%20Canvas%20tutorial/README.md)
- [x] [0055. canvas 在线学习 - HTML Canvas Deep Dive](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0055.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20HTML%20Canvas%20Deep%20Dive/README.md)

## 2. 初始 canvas

- [x] [0001. 初始 canvas](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0001.%20%E5%88%9D%E5%A7%8B%20canvas/README.md)

## 3. 开始使用 canvas

- [x] [0057. 汇总开始学习 canvas 之前需要掌握的一些基础知识](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0057.%20%E6%B1%87%E6%80%BB%E5%BC%80%E5%A7%8B%E5%AD%A6%E4%B9%A0%20canvas%20%E4%B9%8B%E5%89%8D%E9%9C%80%E8%A6%81%E6%8E%8C%E6%8F%A1%E7%9A%84%E4%B8%80%E4%BA%9B%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/README.md)
- [x] [0002. 判断浏览器是否支持 canvas](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0002.%20%E5%88%A4%E6%96%AD%E6%B5%8F%E8%A7%88%E5%99%A8%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81%20canvas/README.md)
- [x] [0003. 区分 canvas 的 width、height 属性和 style 中设置的 width、height 值](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0003.%20%E5%8C%BA%E5%88%86%20canvas%20%E7%9A%84%20width%E3%80%81height%20%E5%B1%9E%E6%80%A7%E5%92%8C%20style%20%E4%B8%AD%E8%AE%BE%E7%BD%AE%E7%9A%84%20width%E3%80%81height%20%E5%80%BC/README.md)
- [x] [0005. canvas 的默认尺寸 300x150](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0005.%20canvas%20%E7%9A%84%E9%BB%98%E8%AE%A4%E5%B0%BA%E5%AF%B8%20300x150/README.md)
- [x] [0006. 使用 JSDoc 来标注 canvas 变量类型](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0006.%20%E4%BD%BF%E7%94%A8%20JSDoc%20%E6%9D%A5%E6%A0%87%E6%B3%A8%20canvas%20%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B/README.md)
- [x] [0017. 绘制网格](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0017.%20%E7%BB%98%E5%88%B6%E7%BD%91%E6%A0%BC/README.md)

## 4. 线条 - line

- [x] [0008. ctx.lineCap](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0008.%20ctx.lineCap/README.md)
- [x] [0009. ctx.lineDashOffset](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0009.%20ctx.lineDashOffset/README.md)
- [x] [0010. ctx.setLineDash](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0010.%20ctx.setLineDash/README.md)
- [x] [0011. ctx.miterLimit](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0011.%20ctx.miterLimit/README.md)
- [x] [0012. ctx.lineTo](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0012.%20ctx.lineTo/README.md)
- [x] [0013. ctx.lineJoin](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0013.%20ctx.lineJoin/README.md)

## 5. 文本 - text

- [x] [0014. ctx.fillText、ctx.strokeText](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0014.%20ctx.fillText%E3%80%81ctx.strokeText/README.md)
- [x] [0015. ctx.font](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0015.%20ctx.font/README.md)
- [x] [0016. ctx.textBaseline、ctx.textAlign](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0016.%20ctx.textBaseline%E3%80%81ctx.textAlign/README.md)

## 6. 矩形 - rect

- [x] [0018. ctx.fillRect](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0018.%20ctx.fillRect/README.md)
- [x] [0019. ctx.strokeRect](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0019.%20ctx.strokeRect/README.md)
- [x] [0020. ctx.roundRect](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0020.%20ctx.roundRect/README.md)
- [x] [0021. ctx.rect](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0021.%20ctx.rect/README.md)
- [x] [0004. ctx.clearRect](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0004.%20ctx.clearRect/README.md)

## 7. 圆弧 - arc

- [x] [0024. ctx.arc](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0024.%20ctx.arc/README.md)
- [x] [0026. ctx.ellipse](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0026.%20ctx.ellipse/README.md)
- [x] [0027. ctx.arcTo](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0027.%20ctx.arcTo/README.md)

## 8. 路径 - path

- [x] [0022. ctx.closePath](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0022.%20ctx.closePath/README.md)
- [x] [0023. ctx.beginPath](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0023.%20ctx.beginPath/README.md)
- [x] [0025. ctx.quadraticCurveTo、ctx.bezierCurveTo](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0025.%20ctx.quadraticCurveTo%E3%80%81ctx.bezierCurveTo/README.md)

## 9. 阴影 - shadow

- [x] [0043. ctx.shadow 系列](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0043.%20ctx.shadow%20%E7%B3%BB%E5%88%97/README.md)

## 10. 渐变 - gradient

- [x] [0040. ctx.createConicGradient](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0040.%20ctx.createConicGradient/README.md)
- [x] [0041. ctx.createLinearGradient](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0041.%20ctx.createLinearGradient/README.md)
- [x] [0042. ctx.createRadialGradient](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0042.%20ctx.createRadialGradient/README.md)

## 11. 滤镜 - filter

- [x] [0044. ctx.filter](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0044.%20ctx.filter/README.md)

## 12. 画布状态的存取 - save&restore

- [x] [0007. ctx.save、ctx.restore](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0007.%20ctx.save%E3%80%81ctx.restore/README.md)

## 13. 图像 - image

- [x] [0035. 使用 ctx.drawImage 引入图像](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0035.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E5%BC%95%E5%85%A5%E5%9B%BE%E5%83%8F/README.md)
- [x] [0031. ctx.clip](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0031.%20ctx.clip/README.md)
- [x] [0032. ctx.createPattern](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0032.%20ctx.createPattern/README.md)
- [x] [0033. ctx.drawImage](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0033.%20ctx.drawImage/README.md)
- [x] [0036. ctx.getImageData、ctx.putImageData](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0036.%20ctx.getImageData%E3%80%81ctx.putImageData/README.md)
- [x] [0037. ctx.globalCompositeOperation](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0037.%20ctx.globalCompositeOperation/README.md)
- [x] [0038. 使用 ctx.globalCompositeOperation 实现刮刮乐效果](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0038.%20%E4%BD%BF%E7%94%A8%20ctx.globalCompositeOperation%20%E5%AE%9E%E7%8E%B0%E5%88%AE%E5%88%AE%E4%B9%90%E6%95%88%E6%9E%9C/README.md)
- [x] [0039. 引用和下载 canvas 图像](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0039.%20%E5%BC%95%E7%94%A8%E5%92%8C%E4%B8%8B%E8%BD%BD%20canvas%20%E5%9B%BE%E5%83%8F/README.md)

## 14. 坐标系 - coordinate system

- [x] [0045. ctx.rotate](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0045.%20ctx.rotate/README.md)
- [x] [0048. ctx.translate](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0048.%20ctx.translate/README.md)
- [x] [0046. ctx.scale](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0046.%20ctx.scale/README.md)
- [x] [0047. ctx.transform](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0047.%20ctx.transform/README.md)

## 15. 动画效果 - Animation

- [x] [0028. 矩形边框旋转动画](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0028.%20%E7%9F%A9%E5%BD%A2%E8%BE%B9%E6%A1%86%E6%97%8B%E8%BD%AC%E5%8A%A8%E7%94%BB/README.md)
- [x] [0029. 线条穿梭动画](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0029.%20%E7%BA%BF%E6%9D%A1%E7%A9%BF%E6%A2%AD%E5%8A%A8%E7%94%BB/README.md)
- [x] [0030. 模拟进度条动画效果](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0030.%20%E6%A8%A1%E6%8B%9F%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C/README.md)
- [x] [0050. 实现动态时钟效果](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0050.%20%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E6%97%B6%E9%92%9F%E6%95%88%E6%9E%9C/README.md)
- [x] [0049. 模拟烟花效果](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0049.%20%E6%A8%A1%E6%8B%9F%E7%83%9F%E8%8A%B1%E6%95%88%E6%9E%9C/README.md)
- [x] [0034. 模拟太阳系效果](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0034.%20%E6%A8%A1%E6%8B%9F%E5%A4%AA%E9%98%B3%E7%B3%BB%E6%95%88%E6%9E%9C/README.md)

## 16. 小游戏

- [x] [0051. 贪吃蛇小游戏](https://github.com/tnotesjs/TNotes.canvas/tree/main/notes/0051.%20%E8%B4%AA%E5%90%83%E8%9B%87%E5%B0%8F%E6%B8%B8%E6%88%8F/README.md)
