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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 标题文案 | `Numeric` | `''` |
| `value` | 右侧内容或当前展示值 | `Numeric` | `''` |
| `label` | 标题/标签文本 | `string` | `''` |
| `icon` | 图标名称或图片链接 | `string` | `''` |
| `size` | 尺寸大小 | `'normal' \| 'large'` | `'normal'` |
| `border` | 是否显示边框 | `boolean` | `true` |
| `clickable` | 是否开启点击反馈效果 | `boolean` | `false` |
| `is-link` | 是否展示右侧箭头并开启点击反馈 | `boolean` | `false` |
| `required` | 是否显示表单必填星号 | `boolean` | `false` |
| `center` | 是否使内容垂直居中 | `boolean` | `false` |
| `arrow-direction` | 右侧箭头方向，可选值为 left / up / down / right | `'right' \| 'left' \| 'up' \| 'down'` | `'right'` |
| `url` | 点击后跳转的页面路由地址 | `string` | `''` |
| `link-type` | 页面路由跳转方式（navigateTo / redirectTo / switchTab / reLaunch） | `'navigateTo' \| 'redirectTo' \| 'reLaunch' \| 'switchTab'` | `'navigateTo'` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `title-class` | 标题自定义类名 | `string` | `''` |
| `value-class` | 右侧内容自定义类名 | `string` | `''` |
| `label-class` | 左侧标签自定义类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击组件时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `icon` | 自定义图标内容 |
| `title` | 自定义标题区域内容 |
| `label` | 自定义标签文字区域 |
| `value` | 自定义右侧内容区域 |
| `default` | 默认内容插槽 |
| `right-icon` | 自定义右侧图标内容 |
| `extra` | 自定义右侧额外扩展内容 |

</div>

<div class="nv-doc-card">

## API — `<nv-cell-group>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 标题文案 | `string` | `''` |
| `inset` | 是否展示为圆角卡片风格 | `boolean` | `false` |
| `border` | 是否显示边框 | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `title` | 自定义标题区域内容 |
| `default` | 默认内容插槽 |

</div>
