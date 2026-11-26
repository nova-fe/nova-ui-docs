---
title: Grid 宫格
demoPath: "/pages/nova-demo/navigation?comp=grid&title=Grid%20%E5%AE%AB%E6%A0%BC"
---

# Grid 宫格

<div class="nv-doc-card">

## 介绍

`nv-grid` / `nv-grid-item` 属于 Nova UI **导航组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('grid')" class="sec">
          <text class="sec-title">Grid 宫格</text>
          <nv-grid :column-num="4">
            <nv-grid-item icon="photo-o" text="文字" />
            <nv-grid-item icon="home-o" text="首页" :badge="3" />
            <nv-grid-item icon="cart-o" text="购物车" dot />
            <nv-grid-item icon="setting-o" text="设置" />
          </nv-grid>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-grid>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `column-num` | `Numeric` | `4` |
| `icon-size` | `Numeric` | `28` |
| `gutter` | `Numeric` | `0` |
| `border` | `boolean` | `true` |
| `center` | `boolean` | `true` |
| `square` | `boolean` | `false` |
| `clickable` | `boolean` | `false` |
| `direction` | `NvGridDirection` | `'vertical'` |
| `reverse` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-grid-item>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `text` | `string` | `''` |
| `icon` | `string` | `''` |
| `icon-color` | `string` | `''` |
| `dot` | `boolean` | `false` |
| `badge` | `Numeric` | `undefined` |
| `url` | `string` | `''` |
| `link-type` | `'navigateTo' \| 'redirectTo' \| 'reLaunch' \| 'switchTab'` | `'navigateTo'` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |
| `icon` | 自定义 `icon` 区域内容 |
| `text` | 自定义 `text` 区域内容 |

</div>
