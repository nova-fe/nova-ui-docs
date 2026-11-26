---
title: TextEllipsis 文本省略
demoPath: "/pages/nova-demo/display?comp=text-ellipsis&title=TextEllipsis%20%E6%96%87%E6%9C%AC%E7%9C%81%E7%95%A5"
---

# TextEllipsis 文本省略

<div class="nv-doc-card">

## 介绍

`nv-text-ellipsis` 属于 Nova UI **展示组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('text-ellipsis')" class="sec">
          <text class="sec-title">TextEllipsis 文本省略</text>
          <view class="card">
            <nv-text-ellipsis
              :rows="2"
              content="这是一段很长的文本用于演示多行文本省略与展开收起切换功能，在 App 蒸汽模式下自动使用原生 max-lines，在 Web 与小程序端使用 line-clamp 实现跨端一致截断。"
            />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-text-ellipsis>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `content` | `string` | `''` |
| `rows` | `Numeric` | `1` |
| `expand-text` | `string` | `'展开'` |
| `collapse-text` | `string` | `'收起'` |
| `dots` | `string` | `'...'` |
| `position` | `'end' \| 'start' \| 'middle'` | `'end'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click-action` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `action` | 自定义 `action` 区域内容 |

### 方法（Expose）

通过 `ref` 可调用：`toggle()`

</div>
