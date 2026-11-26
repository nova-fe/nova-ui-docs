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

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `show` | `boolean` | `false` |
| `type` | `NvToastType` | `'text'` |
| `message` | `Numeric` | `''` |
| `position` | `NvToastPosition` | `'middle'` |
| `duration` | `number` | `2000` |
| `forbid-click` | `boolean` | `false` |
| `icon` | `string` | `''` |
| `z-index` | `number` | `3000` |
| `custom-class` | `string` | `''` |
| `custom-style` | `StyleInput` | `''` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:show` | `value: boolean` |
| `close` | `-` |

</div>
