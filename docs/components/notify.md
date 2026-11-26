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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `show` | `boolean` | `false` |
| `type` | `NvNotifyType` | `'danger'` |
| `message` | `Numeric` | `''` |
| `duration` | `number` | `3000` |
| `color` | `string` | `''` |
| `background` | `string` | `''` |
| `position` | `NvNotifyPosition` | `'top'` |
| `z-index` | `number` | `3100` |
| `safe-area-inset-top` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:show` | `value: boolean` |
| `click` | `event: unknown` |
| `close` | `-` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
