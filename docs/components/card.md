---
title: Card 商品卡片
demoPath: "/pages/nova-demo/business?comp=card&title=Card%20%E5%95%86%E5%93%81%E5%8D%A1%E7%89%87"
---

# Card 商品卡片

<div class="nv-doc-card">

## 介绍

`nv-card` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('card')" class="sec">
          <text class="sec-title">Card 商品卡片</text>
          <nv-card
            num="2"
            price="29.90"
            origin-price="59.00"
            desc="uni-app x 蒸汽模式全端通用商品卡片"
            title="Nova UI 旗舰版组件库示例商品"
            tag="热卖"
            thumb="/static/logo.png"
          />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-card>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `thumb` | `string` | `''` |
| `title` | `string` | `''` |
| `desc` | `string` | `''` |
| `tag` | `string` | `''` |
| `num` | `Numeric` | `''` |
| `price` | `Numeric` | `''` |
| `origin-price` | `Numeric` | `''` |
| `currency` | `string` | `'¥'` |
| `centered` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click-thumb` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `thumb` | 自定义 `thumb` 区域内容 |
| `title` | 自定义 `title` 区域内容 |
| `desc` | 自定义 `desc` 区域内容 |
| `tags` | 自定义 `tags` 区域内容 |
| `price` | 自定义 `price` 区域内容 |
| `origin-price` | 自定义 `origin-price` 区域内容 |
| `num` | 自定义 `num` 区域内容 |
| `bottom` | 自定义 `bottom` 区域内容 |
| `footer` | 自定义 `footer` 区域内容 |

</div>
