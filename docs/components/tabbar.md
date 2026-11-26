---
title: Tabbar 标签栏
demoPath: "/pages/nova-demo/navigation?comp=tabbar&title=Tabbar%20%E6%A0%87%E7%AD%BE%E6%A0%8F"
---

# Tabbar 标签栏

<div class="nv-doc-card">

## 介绍

`nv-tabbar` / `nv-tabbar-item` 属于 Nova UI **导航组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('tabbar')" class="sec">
          <text class="sec-title">Tabbar 标签栏</text>
          <nv-tabbar v-model="activeTabbar" :fixed="false" :safe-area-inset-bottom="false">
            <nv-tabbar-item icon="home-o" text="首页" />
            <nv-tabbar-item icon="search" text="发现" dot />
            <nv-tabbar-item icon="friends-o" text="社区" :badge="5" />
            <nv-tabbar-item icon="user-o" text="我的" />
          </nv-tabbar>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-tabbar>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `Numeric` | `0` |
| `fixed` | `boolean` | `true` |
| `border` | `boolean` | `true` |
| `z-index` | `Numeric` | `100` |
| `active-color` | `string` | `''` |
| `inactive-color` | `string` | `''` |
| `placeholder` | `boolean` | `false` |
| `safe-area-inset-bottom` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: Numeric` |
| `change` | `value: Numeric` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-tabbar-item>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `name` | `Numeric` | `undefined` |
| `icon` | `string` | `''` |
| `dot` | `boolean` | `false` |
| `badge` | `Numeric` | `undefined` |
| `text` | `string` | `''` |
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
| `icon` | 自定义 `icon` 区域内容 |
| `default` | 默认内容插槽 |

</div>
