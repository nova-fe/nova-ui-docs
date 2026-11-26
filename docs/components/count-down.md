---
title: CountDown 倒计时
demoPath: "/pages/nova-demo/display?comp=count-down&title=CountDown%20%E5%80%92%E8%AE%A1%E6%97%B6"
---

# CountDown 倒计时

<div class="nv-doc-card">

## 介绍

`nv-count-down` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('count-down')" class="sec">
          <text class="sec-title">CountDown 倒计时</text>
          <view class="card">
            <nv-count-down :time="3600000" format="DD 天 HH 时 mm 分 ss 秒" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-count-down>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `time` | `number` | `0` |
| `format` | `string` | `'HH:mm:ss'` |
| `auto-start` | `boolean` | `true` |
| `millisecond` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `change` | `current: NvCountDownTime` |
| `finish` | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

通过 `ref` 可调用：`start()`、`pause()`、`reset()`

</div>
