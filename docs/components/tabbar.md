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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `Numeric` | `0` |
| `fixed` | 是否固定定位在顶部或底部 | `boolean` | `true` |
| `border` | 是否显示边框 | `boolean` | `true` |
| `z-index` | 组件层级 z-index | `Numeric` | `100` |
| `active-color` | 选中/激活状态的颜色 | `string` | `''` |
| `inactive-color` | 未选中/未激活状态的颜色 | `string` | `''` |
| `placeholder` | 固定在底部时，是否在标签位置生成一个等高的占位元素 | `boolean` | `false` |
| `safe-area-inset-bottom` | 是否开启底部安全区适配（iPhone X 等全面屏） | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: Numeric` |
| `change` | 绑定值或选中项发生变化时触发 | `value: Numeric` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>

<div class="nv-doc-card">

## API — `<nv-tabbar-item>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 唯一标识符名称 | `Numeric` | `undefined` |
| `icon` | 图标名称或图片链接 | `string` | `''` |
| `dot` | 是否显示右上角小红点 | `boolean` | `false` |
| `badge` | 图标右上角徽标内容 | `Numeric` | `undefined` |
| `text` | 展示文字内容 | `string` | `''` |
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
| `icon` | 自定义图标内容 |
| `default` | 默认内容插槽 |

</div>
