---
title: Uploader 文件上传
demoPath: "/pages/nova-demo/form?comp=uploader&title=Uploader%20%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0"
---

# Uploader 文件上传

<div class="nv-doc-card">

## 介绍

`nv-uploader` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('uploader')" class="sec">
          <text class="sec-title">Uploader 文件上传</text>
          <view class="card">
            <nv-uploader v-model="fileList" :max-count="3" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-uploader>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `NvUploaderFileItem[]` | `() =&gt; []` |
| `accept` | `string` | `'image'` |
| `multiple` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |
| `deletable` | `boolean` | `true` |
| `max-count` | `number` | `Infinity` |
| `preview-image` | `boolean` | `true` |
| `preview-size` | `Numeric` | `80` |
| `upload-text` | `string` | `''` |
| `upload-icon` | `string` | `'photograph'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: NvUploaderFileItem[]` |
| `after-read` | `file: NvUploaderFileItem \| NvUploaderFileItem[]` |
| `delete` | `file: NvUploaderFileItem, detail: { index: number }` |
| `click-preview` | `file: NvUploaderFileItem, detail: { index: number }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
