---
title: Area 省市区选择
demoPath: "/pages/nova-demo/business?comp=area&title=Area%20%E7%9C%81%E5%B8%82%E5%8C%BA%E9%80%89%E6%8B%A9"
---

# Area 省市区选择

<div class="nv-doc-card">

## 介绍

`nv-area` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('area')" class="sec">
          <text class="sec-title">Area 省市区选择（当前编码：{{ areaCode }}）</text>
          <view class="card-nopad">
            <nv-area v-model="areaCode" @confirm="onAreaConfirm" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-area>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `string` | `''` |
| `title` | `string` | `'选择地区'` |
| `area-list` | `NvAreaList` | `() =&gt; DEFAULT_AREA_LIST` |
| `columns-num` | `number` | `3` |
| `confirm-button-text` | `string` | `'确认'` |
| `cancel-button-text` | `string` | `'取消'` |
| `item-height` | `number` | `44` |
| `visible-option-num` | `number` | `5` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `code: string` |
| `confirm` | `payload: NvAreaChangePayload` |
| `cancel` | `payload: NvAreaChangePayload` |
| `change` | `payload: NvAreaChangePayload` |

</div>
