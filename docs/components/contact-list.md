---
title: ContactList 联系人列表
demoPath: "/pages/nova-demo/business?comp=contact-list&title=ContactList%20%E8%81%94%E7%B3%BB%E4%BA%BA%E5%88%97%E8%A1%A8"
---

# ContactList 联系人列表

<div class="nv-doc-card">

## 介绍

`nv-contact-list` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('contact-list')" class="sec">
          <text class="sec-title">ContactList 联系人列表</text>
          <nv-contact-list v-model="chosenContact" :list="contactList" @add="showToast('新建联系人')" />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-contact-list>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `Numeric` | `''` |
| `list` | `NvContactListItem[]` | `() =&gt; []` |
| `add-text` | `string` | `'新建联系人'` |
| `default-tag-text` | `string` | `'默认'` |
| `fixed` | `boolean` | `false` |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `id: Numeric` |
| `add` | `-` |
| `edit` | `item: NvContactListItem, index: number` |
| `select` | `item: NvContactListItem, index: number` |

</div>
