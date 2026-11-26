---
title: ActionBar 动作栏
demoPath: "/pages/nova-demo/navigation?comp=action-bar&title=ActionBar%20%E5%8A%A8%E4%BD%9C%E6%A0%8F"
---

# ActionBar 动作栏

<div class="nv-doc-card">

## 介绍

`nv-action-bar` / `nv-action-bar-icon` / `nv-action-bar-button` 属于 Nova UI **导航组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('action-bar')" class="sec">
          <text class="sec-title">ActionBar 动作栏</text>
          <nv-action-bar :safe-area-inset-bottom="false">
            <nv-action-bar-icon icon="chat-o" text="客服" @click="showToast('客服')" />
            <nv-action-bar-icon icon="cart-o" text="购物车" :badge="2" />
            <nv-action-bar-button type="warning" text="加入购物车" @click="showToast('已加购')" />
            <nv-action-bar-button type="danger" text="立即购买" @click="showToast('立即购买')" />
          </nv-action-bar>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-action-bar>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `placeholder` | `boolean` | `false` |
| `z-index` | `Numeric` | `100` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-action-bar-icon>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `text` | `string` | `''` |
| `icon` | `string` | `''` |
| `color` | `string` | `''` |
| `dot` | `boolean` | `false` |
| `badge` | `Numeric` | `undefined` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `icon` | 自定义 `icon` 区域内容 |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-action-bar-button>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `type` | `NvActionBarButtonType` | `'danger'` |
| `text` | `string` | `''` |
| `color` | `string` | `''` |
| `icon` | `string` | `''` |
| `disabled` | `boolean` | `false` |
| `loading` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
