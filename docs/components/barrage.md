---
title: Barrage 弹幕
demoPath: "/pages/nova-demo/feedback?comp=barrage&title=Barrage%20%E5%BC%B9%E5%B9%95"
---

# Barrage 弹幕

<div class="nv-doc-card">

## 介绍

`nv-barrage` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('barrage')" class="sec">
          <text class="sec-title">Barrage 弹幕</text>
          <view class="barrage-wrap">
            <nv-barrage v-model="barrageList" :rows="3">
              <view class="barrage-stage">
                <text class="barrage-hint">弹幕容器</text>
              </view>
            </nv-barrage>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-barrage>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `NvBarrageItem[]` | `() =&gt; []` |
| `auto-play` | `boolean` | `true` |
| `rows` | `number` | `4` |
| `top` | `number` | `10` |
| `duration` | `number` | `4000` |
| `delay` | `number` | `300` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

通过 `ref` 可调用：`play()`、`pause()`

</div>
