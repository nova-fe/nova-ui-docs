---
title: Rate 评分
demoPath: "/pages/nova-demo/form?comp=rate&title=Rate%20%E8%AF%84%E5%88%86"
---

# Rate 评分

<div class="nv-doc-card">

## 介绍

`nv-rate` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('rate')" class="sec">
          <text class="sec-title">Rate 评分（当前：{{ rateVal }} 星）</text>
          <view class="card">
            <nv-rate v-model="rateVal" allow-half :size="24" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-rate>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `number` | `0` |
| `count` | 图标总数量 | `number` | `5` |
| `size` | 尺寸大小 | `Numeric` | `20` |
| `gutter` | 子元素之间的间距 | `Numeric` | `4` |
| `color` | 颜色值（支持十六进制、RGB 及主题色） | `string` | `'#ee0a24'` |
| `void-color` | 未选中状态图标颜色 | `string` | `'#c8c9cc'` |
| `disabled-color` | 禁用状态下的颜色 | `string` | `'#c8c9cc'` |
| `icon` | 图标名称或图片链接 | `string` | `'star'` |
| `void-icon` | 未选中状态图标名称 | `string` | `'star-o'` |
| `allow-half` | 是否允许半星选择 | `boolean` | `false` |
| `readonly` | 是否为只读状态（不可编辑但保持正常展示样式） | `boolean` | `false` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `clearable` | 是否启用清除图标，点击可清空当前值 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: number` |
| `change` | 绑定值或选中项发生变化时触发 | `value: number` |

</div>
