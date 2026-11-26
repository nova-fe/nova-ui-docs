---
title: Circle 环形进度条
demoPath: "/pages/nova-demo/display?comp=circle&title=Circle%20%E7%8E%AF%E5%BD%A2%E8%BF%9B%E5%BA%A6%E6%9D%A1"
---

# Circle 环形进度条

<div class="nv-doc-card">

## 介绍

`nv-circle` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('circle')" class="sec">
          <text class="sec-title">Circle 环形进度条</text>
          <view class="card">
            <nv-space :size="18" align="center">
              <nv-circle v-model:current-rate="circleRate" :rate="circleTarget" :size="90" :text="`${circleTarget}%`" />
              <nv-button size="small" type="primary" @click="circleTarget = Math.min(100, circleTarget + 10)">+10%</nv-button>
              <nv-button size="small" plain @click="circleTarget = Math.max(0, circleTarget - 10)">-10%</nv-button>
            </nv-space>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-circle>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `current-rate` | 当前实时进度（支持 v-model:current-rate） | `number` | `undefined` |
| `rate` | 目标进度百分比（0 ~ 100） | `number` | `100` |
| `size` | 尺寸大小 | `Numeric` | `100` |
| `color` | 颜色值（支持十六进制、RGB 及主题色） | `string` | `'#1989fa'` |
| `layer-color` | 环形进度条轨道底色 | `string` | `'#ebedf0'` |
| `fill` | 环形内部填充颜色 | `string` | `'none'` |
| `text` | 展示文字内容 | `string` | `''` |
| `stroke-width` | 进度条粗细 | `Numeric` | `40` |
| `clockwise` | 是否按顺时针方向增长进度 | `boolean` | `true` |
| `speed` | 动画速度（Circular 进度速度或 NoticeBar 滚动速率 px/s） | `number` | `0` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:currentRate` | 实时同步环形进度条当前进度（v-model:current-rate） | `value: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
