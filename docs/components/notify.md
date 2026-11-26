---
title: Notify 消息通知
demoPath: "/pages/nova-demo/feedback?comp=notify&title=Notify%20%E6%B6%88%E6%81%AF%E9%80%9A%E7%9F%A5"
---

# Notify 消息通知

<div class="nv-doc-card">

## 介绍

`nv-notify` 属于 Nova UI **反馈组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('notify')" class="sec-flat">
          <nv-cell-group title="Notify 消息通知" inset>
            <nv-cell title="主要通知" is-link @click="onNotify('primary')" />
            <nv-cell title="成功通知" is-link @click="onNotify('success')" />
            <nv-cell title="危险通知" is-link @click="onNotify('danger')" />
            <nv-cell title="警告通知" is-link @click="onNotify('warning')" />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-notify>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `false` |
| `type` | 通知类型，可选值为 primary / success / warning / danger | `NvNotifyType` | `'danger'` |
| `message` | 提示内容文案 | `Numeric` | `''` |
| `duration` | 自动关闭延时（单位 ms），0 表示不会自动关闭 | `number` | `3000` |
| `color` | 颜色值（支持十六进制、RGB 及主题色） | `string` | `''` |
| `background` | 背景色 | `string` | `''` |
| `position` | 弹出位置，可选值为 top / bottom | `NvNotifyPosition` | `'top'` |
| `z-index` | 组件层级 z-index | `number` | `3100` |
| `safe-area-inset-top` | 是否开启顶部安全区适配 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:show` | 更新显示状态（v-model:show） | `value: boolean` |
| `click` | 点击组件时触发 | `event: unknown` |
| `close` | 关闭组件或弹层时触发 | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
