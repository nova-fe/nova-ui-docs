---
title: Cell 单元格
demoPath: "/pages/nova-demo/basic?comp=cell&title=Cell%20%E5%8D%95%E5%85%83%E6%A0%BC"
---

# Cell 单元格

<div class="nv-doc-card">

## 介绍

`nv-cell` / `nv-cell-group` 属于 Nova UI **基础组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('cell')" class="sec-flat">
          <nv-cell-group title="Cell 单元格（基础 / 图标 / 箭头 / 卡片风格）" inset>
            <nv-cell title="单元格" value="内容" icon="home-o" />
            <nv-cell title="带描述信息" value="详情" label="支持亮暗主题与自动隐藏末项分割线" is-link @click="showToast('点击单元格')" />
            <nv-cell title="必填大号单元格" value="内容" size="large" required center is-link />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-cell>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `title` | `Numeric` | `''` |
| `value` | `Numeric` | `''` |
| `label` | `string` | `''` |
| `icon` | `string` | `''` |
| `size` | `'normal' \| 'large'` | `'normal'` |
| `border` | `boolean` | `true` |
| `clickable` | `boolean` | `false` |
| `is-link` | `boolean` | `false` |
| `required` | `boolean` | `false` |
| `center` | `boolean` | `false` |
| `arrow-direction` | `'right' \| 'left' \| 'up' \| 'down'` | `'right'` |
| `url` | `string` | `''` |
| `link-type` | `'navigateTo' \| 'redirectTo' \| 'reLaunch' \| 'switchTab'` | `'navigateTo'` |
| `custom-class` | `string` | `''` |
| `title-class` | `string` | `''` |
| `value-class` | `string` | `''` |
| `label-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `click` | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `icon` | 自定义 `icon` 区域内容 |
| `title` | 自定义 `title` 区域内容 |
| `label` | 自定义 `label` 区域内容 |
| `value` | 自定义 `value` 区域内容 |
| `default` | 默认内容插槽 |
| `right-icon` | 自定义 `right-icon` 区域内容 |
| `extra` | 自定义 `extra` 区域内容 |

</div>

<div class="nv-doc-card">

## API — `<nv-cell-group>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `title` | `string` | `''` |
| `inset` | `boolean` | `false` |
| `border` | `boolean` | `true` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `title` | 自定义 `title` 区域内容 |
| `default` | 默认内容插槽 |

</div>
