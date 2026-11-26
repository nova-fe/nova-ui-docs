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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `current-rate` | `number` | `undefined` |
| `rate` | `number` | `100` |
| `size` | `Numeric` | `100` |
| `color` | `string` | `'#1989fa'` |
| `layer-color` | `string` | `'#ebedf0'` |
| `fill` | `string` | `'none'` |
| `text` | `string` | `''` |
| `stroke-width` | `Numeric` | `40` |
| `clockwise` | `boolean` | `true` |
| `speed` | `number` | `0` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:currentRate` | `value: number` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
