---
title: Empty 空状态
demoPath: "/pages/nova-demo/display?comp=empty&title=Empty%20%E7%A9%BA%E7%8A%B6%E6%80%81"
---

# Empty 空状态

<div class="nv-doc-card">

## 介绍

`nv-empty` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('empty')" class="sec">
          <text class="sec-title">Empty 空状态</text>
          <view class="card">
            <nv-empty description="暂无数据示例" :image-size="88" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-empty>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `image` | `'default' \| 'error' \| 'network' \| 'search' \| string` | `'default'` |
| `image-size` | `Numeric \| [Numeric, Numeric]` | `120` |
| `description` | `string` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `image` | 自定义 `image` 区域内容 |
| `description` | 自定义 `description` 区域内容 |
| `default` | 默认内容插槽 |

</div>
