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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `NvUploaderFileItem[]` | `() =&gt; []` |
| `accept` | 允许上传的文件类型（如 image/*） | `string` | `'image'` |
| `multiple` | 是否开启文件多选上传 | `boolean` | `false` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `readonly` | 是否为只读状态（不可编辑但保持正常展示样式） | `boolean` | `false` |
| `deletable` | 是否展示删除按钮 | `boolean` | `true` |
| `max-count` | 文件上传最大数量限制 | `number` | `Infinity` |
| `preview-image` | 是否在上传完成后展示预览图 | `boolean` | `true` |
| `preview-size` | 预览图与上传区域的尺寸 | `Numeric` | `80` |
| `upload-text` | 上传区域下方提示文字 | `string` | `''` |
| `upload-icon` | 上传区域中间图标名称 | `string` | `'photograph'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: NvUploaderFileItem[]` |
| `after-read` | 文件读取完成后触发的回调 | `file: NvUploaderFileItem \| NvUploaderFileItem[]` |
| `delete` | 点击删除按钮或按键时触发 | `file: NvUploaderFileItem, detail: { index: number }` |
| `click-preview` | 点击预览图片时触发 | `file: NvUploaderFileItem, detail: { index: number }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
