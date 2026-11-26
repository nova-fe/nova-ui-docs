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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `thumb` | 商品左侧缩略图地址 | `string` | `''` |
| `title` | 标题文案 | `string` | `''` |
| `desc` | 商品描述信息 | `string` | `''` |
| `tag` | 图片左上角角标文字 | `string` | `''` |
| `num` | 商品数量 | `Numeric` | `''` |
| `price` | 价格数值（SubmitBar 单位为分，Card 为展示文本） | `Numeric` | `''` |
| `origin-price` | 商品划线原价 | `Numeric` | `''` |
| `currency` | 货币符号（默认 ¥） | `string` | `'¥'` |
| `centered` | 内容是否垂直居中 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click-thumb` | 点击商品缩略图时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `thumb` | 自定义商品左侧缩略图区域 |
| `title` | 自定义标题区域内容 |
| `desc` | 自定义描述信息区域 |
| `tags` | 自定义商品卡片标签区域 |
| `price` | 自定义商品价格区域 |
| `origin-price` | 自定义商品划线原价区域 |
| `num` | 自定义商品数量区域 |
| `bottom` | 自定义商品卡片底部内容 |
| `footer` | 自定义卡片底部操作栏内容 |

</div>
