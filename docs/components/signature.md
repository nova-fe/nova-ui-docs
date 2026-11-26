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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 组件类型样式 | `NvSignatureType` | `'png'` |
| `pen-color` | 签名画笔颜色 | `string` | `'#000000'` |
| `line-width` | 线条宽度（签名笔触粗细或标签页指示条宽度） | `number` | `3` |
| `background-color` | 画布背景色 | `string` | `'#ffffff'` |
| `placeholder` | 占位提示文字或是否生成等高占位元素 | `string` | `'请在此区域手写签名'` |
| `clear-button-text` | 清空按钮文字 | `string` | `'清空'` |
| `confirm-button-text` | 确认按钮文字 | `string` | `'确认'` |
| `height` | 组件高度 | `Numeric` | `200` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `start` | 手写签名开始绘制一笔时触发 | `-` |
| `signing` | 手写签名绘制过程中持续触发 | `event: unknown` |
| `end` | 手写签名结束绘制一笔时触发 | `-` |
| `clear` | 点击清空按钮时触发 | `-` |
| `submit` | 提交表单、确认签名或点击提交订单按钮时触发 | `payload: NvSignatureSubmitPayload` |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `clear` | 清空当前手写签名画布内容 |
| `submit` | 提交表单（触发校验与 submit 事件）或导出当前签名图片 |
| `resize` | 重新测量画布尺寸并刷新手写签名画板 |

</div>
