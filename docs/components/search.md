---
title: Search 搜索
demoPath: "/pages/nova-demo/form?comp=search&title=Search%20%E6%90%9C%E7%B4%A2"
---

# Search 搜索

<div class="nv-doc-card">

## 介绍

`nv-search` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('search')" class="sec">
          <text class="sec-title">Search 搜索</text>
          <nv-search v-model="searchVal" show-action placeholder="请输入搜索关键词" @search="onSearch" />
          <view class="gap-sm" />
          <nv-search v-model="searchVal" shape="round" background="#4fc08d" placeholder="圆角自定义背景" />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-search>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `string` | `''` |
| `label` | `string` | `''` |
| `shape` | `'square' \| 'round'` | `'square'` |
| `background` | `string` | `'#ffffff'` |
| `maxlength` | `number` | `-1` |
| `placeholder` | `string` | `'请输入搜索关键词'` |
| `clearable` | `boolean` | `true` |
| `show-action` | `boolean` | `false` |
| `action-text` | `string` | `'取消'` |
| `disabled` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |
| `input-align` | `'left' \| 'center' \| 'right'` | `'left'` |
| `left-icon` | `string` | `'search'` |
| `right-icon` | `string` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: string` |
| `search` | `value: string` |
| `cancel` | `-` |
| `clear` | `event: unknown` |
| `focus` | `event: unknown` |
| `blur` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left` | 自定义 `left` 区域内容 |
| `label` | 自定义 `label` 区域内容 |
| `left-icon` | 自定义 `left-icon` 区域内容 |
| `right-icon` | 自定义 `right-icon` 区域内容 |
| `action` | 自定义 `action` 区域内容 |

</div>
