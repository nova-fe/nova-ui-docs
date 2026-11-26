---
title: ContactCard 联系人卡片
demoPath: "/pages/nova-demo/business?comp=contact-card&title=ContactCard%20%E8%81%94%E7%B3%BB%E4%BA%BA%E5%8D%A1%E7%89%87"
---

# ContactCard 联系人卡片

<div class="nv-doc-card">

## 介绍

`nv-contact-card` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('contact-card')" class="sec">
          <text class="sec-title">ContactCard 联系人卡片</text>
          <nv-contact-card type="add" @click="showToast('添加联系人')" />
          <view class="gap-sm" />
          <nv-contact-card type="edit" name="张三" tel="13800138000" @click="showToast('编辑联系人')" />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-contact-card>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `type` | `NvContactCardType` | `'add'` |
| `name` | `string` | `''` |
| `tel` | `string` | `''` |
| `add-text` | `string` | `'添加联系人'` |
| `editable` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

</div>
