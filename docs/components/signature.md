---
title: Signature 签名
demoPath: "/pages/nova-demo/form?comp=signature&title=Signature%20%E7%AD%BE%E5%90%8D"
---

# Signature 签名

<div class="nv-doc-card">

## 介绍

`nv-signature` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('signature')" class="sec">
          <text class="sec-title">Signature 签名（支持手指 / 鼠标直接绘制）</text>
          <view class="card-nopad">
            <nv-signature :height="200" @submit="onSignSubmit" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-signature>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `type` | `NvSignatureType` | `'png'` |
| `pen-color` | `string` | `'#000000'` |
| `line-width` | `number` | `3` |
| `background-color` | `string` | `'#ffffff'` |
| `placeholder` | `string` | `'请在此区域手写签名'` |
| `clear-button-text` | `string` | `'清空'` |
| `confirm-button-text` | `string` | `'确认'` |
| `height` | `Numeric` | `200` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `start` | `-` |
| `signing` | `event: unknown` |
| `end` | `-` |
| `clear` | `-` |
| `submit` | `payload: NvSignatureSubmitPayload` |

### 方法（Expose）

通过 `ref` 可调用：`clear()`、`submit()`、`resize()`

</div>
