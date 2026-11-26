---
title: Button 按钮
demoPath: "/pages/nova-demo/basic?comp=button&title=Button%20%E6%8C%89%E9%92%AE"
---

# Button 按钮

<div class="nv-doc-card">

## 介绍

`nv-button` 属于 Nova UI **基础组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('button')" class="sec">
          <text class="sec-title">Button 按钮（类型 / 朴素 / 图标 / 加载 / 渐变）</text>
          <nv-space :size="8" wrap>
            <nv-button type="primary" @click="showToast('主要按钮')">主要按钮</nv-button>
            <nv-button type="success">成功按钮</nv-button>
            <nv-button type="default">默认按钮</nv-button>
            <nv-button type="warning">警告按钮</nv-button>
            <nv-button type="danger">危险按钮</nv-button>
            <nv-button type="primary" plain>朴素按钮</nv-button>
            <nv-button type="success" plain round>圆角朴素</nv-button>
            <nv-button type="primary" icon="plus" size="small">图标按钮</nv-button>
            <nv-button type="primary" loading loading-text="加载中" size="small" />
            <nv-button type="danger" disabled size="small">禁用态</nv-button>
            <nv-button color="linear-gradient(to right, #ff6034, #ee0a24)" round size="small">渐变按钮</nv-button>
          </nv-space>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-button>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `type` | `NvButtonType` | `'default'` |
| `size` | `NvButtonSize` | `'normal'` |
| `text` | `string` | `''` |
| `color` | `string` | `''` |
| `icon` | `string` | `''` |
| `icon-position` | `'left' \| 'right'` | `'left'` |
| `plain` | `boolean` | `false` |
| `hairline` | `boolean` | `false` |
| `square` | `boolean` | `false` |
| `round` | `boolean` | `false` |
| `block` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `loading` | `boolean` | `false` |
| `loading-text` | `string` | `''` |
| `loading-size` | `Numeric` | `16` |
| `custom-class` | `string` | `''` |
| `text-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
