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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `title` | `string` | `''` |
| `left-text` | `string` | `''` |
| `right-text` | `string` | `''` |
| `left-arrow` | `boolean` | `false` |
| `border` | `boolean` | `true` |
| `fixed` | `boolean` | `false` |
| `placeholder` | `boolean` | `false` |
| `z-index` | `Numeric` | `100` |
| `safe-area-inset-top` | `boolean` | `false` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click-left` | `event: unknown` |
| `click-right` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left` | 自定义 `left` 区域内容 |
| `title` | 自定义 `title` 区域内容 |
| `right` | 自定义 `right` 区域内容 |

</div>
