---
title: NavBar 导航栏
demoPath: "/pages/nova-demo/navigation?comp=nav-bar&title=NavBar%20%E5%AF%BC%E8%88%AA%E6%A0%8F"
---

# NavBar 导航栏

<div class="nv-doc-card">

## 介绍

`nv-nav-bar` 属于 Nova UI **导航组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('nav-bar')">
          <nv-nav-bar
            title="导航栏标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onBack"
            @click-right="showToast('点击右侧按钮')"
          />
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-nav-bar>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 标题文案 | `string` | `''` |
| `left-text` | 导航栏左侧文案 | `string` | `''` |
| `right-text` | 导航栏右侧文案 | `string` | `''` |
| `left-arrow` | 是否显示导航栏左侧返回箭头 | `boolean` | `false` |
| `border` | 是否显示边框 | `boolean` | `true` |
| `fixed` | 是否固定定位在顶部或底部 | `boolean` | `false` |
| `placeholder` | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | `boolean` | `false` |
| `z-index` | 组件层级 z-index | `Numeric` | `100` |
| `safe-area-inset-top` | 是否开启顶部安全区适配 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click-left` | 点击导航栏左侧区域时触发 | `event: unknown` |
| `click-right` | 点击导航栏右侧区域时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left` | 自定义左侧区域内容 |
| `title` | 自定义标题区域内容 |
| `right` | 自定义右侧区域内容 |

</div>
