---
title: ContactEdit 联系人编辑
demoPath: "/pages/nova-demo/business?comp=contact-edit&title=ContactEdit%20%E8%81%94%E7%B3%BB%E4%BA%BA%E7%BC%96%E8%BE%91"
---

# ContactEdit 联系人编辑

<div class="nv-doc-card">

## 介绍

`nv-contact-edit` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('contact-edit')" class="sec">
          <text class="sec-title">ContactEdit 联系人编辑</text>
          <view class="card-nopad">
            <nv-contact-edit
              :contact-info="{ name: '张三', tel: '13800138000' }"
              is-edit
              show-set-default
              @save="showSuccessToast('联系人已保存')"
              @delete="showToast('已删除')"
            />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-contact-edit>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `contact-info` | `NvContactEditInfo` | `() =&gt; ({` |
| `is-edit` | `boolean` | `-` |
| `is-saving` | `boolean` | `-` |
| `is-deleting` | `boolean` | `-` |
| `show-set-default` | `boolean` | `-` |
| `set-default-label` | `string` | `-` |
| `custom-class` | `string` | `-` |
| `custom-style` | `StyleInput` | `-` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `save` | `info: NvContactEditResult` |
| `delete` | `info: NvContactEditResult` |
| `change-default` | `value: boolean` |

</div>
