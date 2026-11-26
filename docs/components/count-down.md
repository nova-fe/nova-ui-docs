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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `time` | 倒计时总时长（单位 ms） | `number` | `0` |
| `format` | 倒计时时间格式化模板（如 DD 天 HH 时 mm 分 ss 秒） | `string` | `'HH:mm:ss'` |
| `auto-start` | 是否自动开始 | `boolean` | `true` |
| `millisecond` | 是否开启毫秒级渲染 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `change` | 绑定值或选中项发生变化时触发 | `current: NvCountDownTime` |
| `finish` | 全部选项选择完成或倒计时结束时触发 | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `start` | 开始运行（启动倒计时或翻滚文本动画） |
| `pause` | 暂停播放（弹幕滚动或倒计时） |
| `reset` | 重置组件状态（重置日历选中、倒计时或翻滚文本） |

</div>
