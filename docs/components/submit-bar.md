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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `price` | 价格数值（SubmitBar 单位为分，Card 为展示文本） | `number` | `undefined` |
| `decimal-length` | 保留的小数位数 | `number` | `2` |
| `label` | 标题/标签文本 | `string` | `'合计：'` |
| `suffix-label` | 价格右侧后缀文案 | `string` | `''` |
| `text-align` | 价格文案对齐方式，可选值为 left / right | `'right' \| 'left'` | `'right'` |
| `button-text` | 提交按钮文字 | `string` | `'提交订单'` |
| `button-type` | 提交按钮类型，可选值为 primary / success / warning / danger / default | `NvSubmitBarButtonType` | `'danger'` |
| `button-color` | 提交按钮背景颜色（支持渐变色） | `string` | `''` |
| `tip` | 订单栏顶部提示文案 | `string` | `''` |
| `tip-icon` | 订单栏顶部提示左侧图标名称 | `string` | `''` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `loading` | 是否显示为加载状态 | `boolean` | `false` |
| `currency` | 货币符号（默认 ¥） | `string` | `'¥'` |
| `safe-area-inset-bottom` | 是否开启底部安全区适配（iPhone X 等全面屏） | `boolean` | `true` |
| `placeholder` | 占位提示文字或是否生成等高占位元素 | `boolean` | `false` |
| `fixed` | 是否固定定位在顶部或底部 | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `submit` | 提交表单、确认签名或点击提交订单按钮时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `top` | 自定义顶部扩展区域 |
| `tip` | 自定义订单栏顶部提示区域 |
| `default` | 默认内容插槽 |
| `button` | 自定义按钮区域内容 |

</div>
