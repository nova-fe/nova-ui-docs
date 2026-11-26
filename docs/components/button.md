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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 按钮类型，可选值为 primary / success / warning / danger / default | `NvButtonType` | `'default'` |
| `size` | 按钮尺寸，可选值为 large / normal / small / mini | `NvButtonSize` | `'normal'` |
| `text` | 按钮文字（等价于默认插槽） | `string` | `''` |
| `color` | 按钮颜色（支持单色与 linear-gradient 渐变色） | `string` | `''` |
| `icon` | 图标名称或图片链接 | `string` | `''` |
| `icon-position` | 图标相对于文字的位置，可选值为 left / right | `'left' \| 'right'` | `'left'` |
| `plain` | 是否为朴素（描边镂空）样式 | `boolean` | `false` |
| `hairline` | 是否使用 0.5px 细边框 | `boolean` | `false` |
| `square` | 是否为方形样式 | `boolean` | `false` |
| `round` | 是否为圆角样式 | `boolean` | `false` |
| `block` | 是否为块级元素（宽度 100%） | `boolean` | `false` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `loading` | 是否显示为加载状态 | `boolean` | `false` |
| `loading-text` | 加载过程中的提示文字 | `string` | `''` |
| `loading-size` | 加载图标尺寸 | `Numeric` | `16` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `text-class` | 按钮文字自定义类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
