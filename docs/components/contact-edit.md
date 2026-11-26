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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `contact-info` | 联系人初始信息对象 | `NvContactEditInfo` | `() =&gt; ({` |
| `is-edit` | 是否为编辑模式（为 true 时显示删除按钮） | `boolean` | `-` |
| `is-saving` | 保存按钮是否处于加载状态 | `boolean` | `-` |
| `is-deleting` | 删除按钮是否处于加载状态 | `boolean` | `-` |
| `show-set-default` | 是否显示“设为默认”开关 | `boolean` | `-` |
| `set-default-label` | “设为默认联系人”开关栏文案 | `string` | `-` |
| `custom-class` | 自定义根节点额外类名 | `string` | `-` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `-` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `save` | 点击保存按钮时触发 | `info: NvContactEditResult` |
| `delete` | 点击删除按钮或按键时触发 | `info: NvContactEditResult` |
| `change-default` | 切换“设为默认”开关时触发 | `value: boolean` |

</div>
