---
title: Highlight 高亮文本
demoPath: "/pages/nova-demo/display?comp=highlight&title=Highlight%20%E9%AB%98%E4%BA%AE%E6%96%87%E6%9C%AC"
---

# Highlight 高亮文本

<div class="nv-doc-card">

## 介绍

`nv-highlight` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('highlight')" class="sec">
          <text class="sec-title">Highlight 高亮文本</text>
          <view class="card">
            <nv-highlight keywords="蒸汽模式" source-string="Nova UI 专为 uni-app x 蒸汽模式跨 6 端打造" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-highlight>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `keywords` | `string \| string[]` | `''` |
| `source-string` | `string` | `''` |
| `case-sensitive` | `boolean` | `false` |
| `auto-escape` | `boolean` | `true` |
| `highlight-class` | `string` | `''` |
| `unhighlight-class` | `string` | `''` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

</div>
