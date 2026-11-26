---
title: SubmitBar 提交订单栏
demoPath: "/pages/nova-demo/business?comp=submit-bar&title=SubmitBar%20%E6%8F%90%E4%BA%A4%E8%AE%A2%E5%8D%95%E6%A0%8F"
---

# SubmitBar 提交订单栏

<div class="nv-doc-card">

## 介绍

`nv-submit-bar` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('submit-bar')" class="sec">
          <text class="sec-title">SubmitBar 提交订单栏</text>
          <nv-submit-bar
            :price="3050"
            button-text="提交订单"
            tip="你的收货地址支持同城配送"
            :fixed="false"
            :safe-area-inset-bottom="false"
            @submit="showSuccessToast('已提交订单')"
          />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-submit-bar>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `price` | `number` | `undefined` |
| `decimal-length` | `number` | `2` |
| `label` | `string` | `'合计：'` |
| `suffix-label` | `string` | `''` |
| `text-align` | `'right' \| 'left'` | `'right'` |
| `button-text` | `string` | `'提交订单'` |
| `button-type` | `NvSubmitBarButtonType` | `'danger'` |
| `button-color` | `string` | `''` |
| `tip` | `string` | `''` |
| `tip-icon` | `string` | `''` |
| `disabled` | `boolean` | `false` |
| `loading` | `boolean` | `false` |
| `currency` | `string` | `'¥'` |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `placeholder` | `boolean` | `false` |
| `fixed` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `submit` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `top` | 自定义 `top` 区域内容 |
| `tip` | 自定义 `tip` 区域内容 |
| `default` | 默认内容插槽 |
| `button` | 自定义 `button` 区域内容 |

</div>
