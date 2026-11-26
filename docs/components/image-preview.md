---
title: ImagePreview 图片预览
demoPath: "/pages/nova-demo/display?comp=image-preview&title=ImagePreview%20%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88"
---

# ImagePreview 图片预览

<div class="nv-doc-card">

## 介绍

`nv-image-preview` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('image-preview')" class="sec">
          <text class="sec-title">ImagePreview 图片预览</text>
          <view class="card">
            <nv-button size="small" type="primary" @click="onPreview">点击预览图片</nv-button>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-image-preview>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `show` | `boolean` | `false` |
| `images` | `string[]` | `() =&gt; []` |
| `start-position` | `number` | `0` |
| `show-index` | `boolean` | `true` |
| `loop` | `boolean` | `true` |
| `closeable` | `boolean` | `false` |
| `close-on-click-image` | `boolean` | `true` |
| `close-on-click-overlay` | `boolean` | `true` |
| `z-index` | `number` | `3200` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:show` | `value: boolean` |
| `change` | `index: number` |
| `close` | `payload: { index: number; url: string }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `index` | 自定义 `index` 区域内容 |
| `cover` | 自定义 `cover` 区域内容 |

### 方法（Expose）

通过 `ref` 可调用：`swipeTo()`

</div>
