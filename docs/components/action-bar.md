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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `safe-area-inset-bottom` | 是否开启底部安全区适配（iPhone X 等全面屏） | `boolean` | `true` |
| `placeholder` | 固定在底部时，是否在底部生成一个等高的占位元素 | `boolean` | `false` |
| `z-index` | 组件层级 z-index | `Numeric` | `100` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-action-bar-icon>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 展示文字内容 | `string` | `''` |
| `icon` | 图标名称或图片链接 | `string` | `''` |
| `color` | 颜色值（支持十六进制、RGB 及主题色） | `string` | `''` |
| `dot` | 是否显示右上角小红点 | `boolean` | `false` |
| `badge` | 图标右上角徽标内容 | `Numeric` | `undefined` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `icon` | 自定义图标内容 |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-action-bar-button>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 组件类型样式 | `NvActionBarButtonType` | `'danger'` |
| `text` | 展示文字内容 | `string` | `''` |
| `color` | 颜色值（支持十六进制、RGB 及主题色） | `string` | `''` |
| `icon` | 图标名称或图片链接 | `string` | `''` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `loading` | 是否显示为加载状态 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
