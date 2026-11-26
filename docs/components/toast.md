---
title: Toast 轻提示
demoPath: "/pages/nova-demo/basic?comp=toast&title=Toast%20%E8%BD%BB%E6%8F%90%E7%A4%BA"
---

# Toast 轻提示

<div class="nv-doc-card">

## 介绍

`nv-toast` 属于 Nova UI **基础组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('toast')" class="sec-flat">
          <nv-cell-group title="Toast 轻提示（文字 / 成功 / 失败 / 加载）" inset>
            <nv-cell title="文字提示" is-link @click="showToast('这是一条文字轻提示')" />
            <nv-cell title="成功提示" is-link @click="showSuccessToast('操作成功')" />
            <nv-cell title="失败提示" is-link @click="showFailToast('操作失败')" />
            <nv-cell title="加载提示" is-link @click="onLoading" />
          </nv-cell-group>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-toast>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示组件（支持 v-model:show） | `boolean` | `false` |
| `type` | 提示类型，可选值为 text / loading / success / fail | `NvToastType` | `'text'` |
| `message` | 提示内容文案 | `Numeric` | `''` |
| `position` | 展示位置，可选值为 middle / top / bottom | `NvToastPosition` | `'middle'` |
| `duration` | 自动关闭延时（单位 ms），0 表示不会自动关闭 | `number` | `2000` |
| `forbid-click` | 展示轻提示时是否禁止背景点击穿透 | `boolean` | `false` |
| `icon` | 图标名称或图片链接 | `string` | `''` |
| `z-index` | 组件层级 z-index | `number` | `3000` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:show` | 更新显示状态（v-model:show） | `value: boolean` |
| `close` | 关闭组件或弹层时触发 | `-` |

</div>
