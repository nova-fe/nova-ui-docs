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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `NvBarrageItem[]` | `() =&gt; []` |
| `auto-play` | 是否自动播放弹幕 | `boolean` | `true` |
| `rows` | 弹幕轨道行数 | `number` | `4` |
| `top` | 弹幕区域距离顶部的初始偏移（单位 px） | `number` | `10` |
| `duration` | 单条弹幕完整滚过屏幕的时长（单位 ms） | `number` | `4000` |
| `delay` | 延迟时间 | `number` | `300` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `play` | 开始/继续播放弹幕 |
| `pause` | 暂停播放（弹幕滚动或倒计时） |

</div>
