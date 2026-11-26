---
title: Switch 开关
demoPath: "/pages/nova-demo/form?comp=switch&title=Switch%20%E5%BC%80%E5%85%B3"
---

# Switch 开关

<div class="nv-doc-card">

## 介绍

`nv-switch` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('switch')" class="sec">
          <text class="sec-title">Switch 开关</text>
          <view class="card">
            <nv-space :size="16" align="center">
              <nv-switch v-model="switchVal" />
              <nv-switch v-model="switchVal" active-color="#07c160" />
              <nv-switch :model-value="true" loading />
              <nv-switch :model-value="true" disabled />
            </nv-space>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-switch>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `unknown` | `false` |
| `active-value` | 打开状态时对应的绑定值 | `unknown` | `true` |
| `inactive-value` | 关闭状态时对应的绑定值 | `unknown` | `false` |
| `loading` | 是否显示为加载状态 | `boolean` | `false` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `size` | 尺寸大小 | `Numeric` | `26` |
| `active-color` | 选中/激活状态的颜色 | `string` | `''` |
| `inactive-color` | 未选中/未激活状态的颜色 | `string` | `''` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: unknown` |
| `change` | 绑定值或选中项发生变化时触发 | `value: unknown` |

</div>
