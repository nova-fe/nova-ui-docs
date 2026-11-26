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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `content` | 展示文本内容 | `string` | `''` |
| `rows` | 展示的最大行数，超出后折叠显示省略号 | `Numeric` | `1` |
| `expand-text` | 展开按钮文案 | `string` | `'展开'` |
| `collapse-text` | 收起按钮文案 | `string` | `'收起'` |
| `dots` | 文本省略号字符 | `string` | `'...'` |
| `position` | 省略位置，可选值为 start / middle / end | `'end' \| 'start' \| 'middle'` | `'end'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click-action` | 点击展开或收起操作按钮时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `action` | 自定义右侧操作按钮区域内容 |

### 方法（Expose）

| 方法名 | 说明 |
| --- | --- |
| `toggle` | 切换展开/收起或选中/未选中状态 |

</div>
