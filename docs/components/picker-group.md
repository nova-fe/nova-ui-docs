---
title: PickerGroup 选择器组
demoPath: "/pages/nova-demo/form?comp=picker-group&title=PickerGroup%20%E9%80%89%E6%8B%A9%E5%99%A8%E7%BB%84"
---

# PickerGroup 选择器组

<div class="nv-doc-card">

## 介绍

`nv-picker-group` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('picker-group')" class="sec">
          <text class="sec-title">PickerGroup 选择器组（日期 + 时间分步选择）</text>
          <view class="card-nopad">
            <nv-picker-group
              title="预约时间"
              :tabs="['选择日期', '选择时间']"
              next-step-text="下一步"
              @confirm="showSuccessToast('已确认预约时间')"
            >
              <nv-date-picker v-model="dateVal" />
              <nv-time-picker v-model="timeVal" />
            </nv-picker-group>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-picker-group>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `title` | `string` | `''` |
| `tabs` | `string[]` | `() =&gt; []` |
| `next-step-text` | `string` | `''` |
| `confirm-button-text` | `string` | `'确认'` |
| `cancel-button-text` | `string` | `'取消'` |
| `active-tab` | `number` | `0` |
| `show-toolbar` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:activeTab` | `value: number` |
| `confirm` | `values: NvPickerConfirmEvent[]` |
| `cancel` | `values: NvPickerConfirmEvent[]` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
