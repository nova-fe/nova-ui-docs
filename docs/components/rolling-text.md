---
title: RollingText 翻滚文本
demoPath: "/pages/nova-demo/display?comp=rolling-text&title=RollingText%20%E7%BF%BB%E6%BB%9A%E6%96%87%E6%9C%AC"
---

# RollingText 翻滚文本

<div class="nv-doc-card">

## 介绍

`nv-rolling-text` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('rolling-text')" class="sec">
          <text class="sec-title">RollingText 翻滚文本</text>
          <view class="card">
            <nv-space :size="14" align="center">
              <nv-rolling-text ref="rollingRef" :start-num="0" :target-num="432" :height="32" />
              <nv-button size="small" plain @click="restartRolling">重新翻滚</nv-button>
            </nv-space>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-rolling-text>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `start-num` | 翻滚起始数字 | `number` | `0` |
| `target-num` | 翻滚目标数字 | `number` | `0` |
| `text-list` | 自定义翻滚文本内容数组 | `string[]` | `() =&gt; []` |
| `duration` | 动画或展示持续时长 | `number` | `2` |
| `auto-start` | 是否自动开始 | `boolean` | `true` |
| `direction` | 排列或弹出方向 | `'up' \| 'down'` | `'down'` |
| `height` | 组件高度 | `number` | `40` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `start` | 开始运行（启动倒计时或翻滚文本动画） |
| `reset` | 重置组件状态（重置日历选中、倒计时或翻滚文本） |

</div>
