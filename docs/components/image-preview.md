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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `false` |
| `images` | 需要预览的图片 URL 数组 | `string[]` | `() =&gt; []` |
| `start-position` | 图片预览初始索引位置（从 0 开始） | `number` | `0` |
| `show-index` | 是否显示顶部页码指示器 | `boolean` | `true` |
| `loop` | 是否开启循环滑动 | `boolean` | `true` |
| `closeable` | 是否显示关闭图标 | `boolean` | `false` |
| `close-on-click-image` | 点击预览图片时是否关闭图片预览 | `boolean` | `true` |
| `close-on-click-overlay` | 点击遮罩层时是否自动关闭 | `boolean` | `true` |
| `z-index` | 组件层级 z-index | `number` | `3200` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:show` | 更新显示状态（v-model:show） | `value: boolean` |
| `change` | 绑定值或选中项发生变化时触发 | `index: number` |
| `close` | 关闭组件或弹层时触发 | `payload: { index: number; url: string }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `index` | 自定义顶部页码显示内容 |
| `cover` | 自定义覆盖在图片预览顶部的自定义内容 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `swipeTo` | 切换到指定索引位置 |

</div>
