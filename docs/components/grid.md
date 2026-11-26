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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `column-num` | 每行展示的宫格列数 | `Numeric` | `4` |
| `icon-size` | 图标大小 | `Numeric` | `28` |
| `gutter` | 子元素之间的间距 | `Numeric` | `0` |
| `border` | 是否显示边框 | `boolean` | `true` |
| `center` | 是否使内容垂直居中 | `boolean` | `true` |
| `square` | 是否为方形样式 | `boolean` | `false` |
| `clickable` | 是否开启点击反馈效果 | `boolean` | `false` |
| `direction` | 排列或弹出方向 | `NvGridDirection` | `'vertical'` |
| `reverse` | 是否调换宫格图标与文字的上下顺序 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-grid-item>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 展示文字内容 | `string` | `''` |
| `icon` | 图标名称或图片链接 | `string` | `''` |
| `icon-color` | 图标颜色 | `string` | `''` |
| `dot` | 是否显示右上角小红点 | `boolean` | `false` |
| `badge` | 图标右上角徽标内容 | `Numeric` | `undefined` |
| `url` | 点击后跳转的页面路由地址 | `string` | `''` |
| `link-type` | 页面路由跳转方式（navigateTo / redirectTo / switchTab / reLaunch） | `'navigateTo' \| 'redirectTo' \| 'reLaunch' \| 'switchTab'` | `'navigateTo'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |
| `icon` | 自定义图标内容 |
| `text` | 自定义宫格文字内容 |

</div>
