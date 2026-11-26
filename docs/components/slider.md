---
title: Slider 滑块
demoPath: "/pages/nova-demo/form?comp=slider&title=Slider%20%E6%BB%91%E5%9D%97"
---

# Slider 滑块

<div class="nv-doc-card">

## 介绍

`nv-slider` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('slider')" class="sec">
          <text class="sec-title">Slider 滑块（当前：{{ sliderVal }}）</text>
          <view class="card">
            <nv-slider v-model="sliderVal" />
            <view class="gap-md" />
            <text class="sub-label">双滑块区间：{{ rangeSliderVal[0] }} - {{ rangeSliderVal[1] }}</text>
            <nv-slider v-model="rangeSliderVal" range active-color="#ee0a24" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-slider>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `NvSliderValue` | `0` |
| `min` | 最小允许值 | `number` | `0` |
| `max` | 最大允许值或最大可选数量 | `number` | `100` |
| `step` | 每次增减变化的步长 | `number` | `1` |
| `bar-height` | 进度条高度 | `Numeric` | `2` |
| `button-size` | 按钮尺寸 | `Numeric` | `24` |
| `active-color` | 选中/激活状态的颜色 | `string` | `''` |
| `inactive-color` | 未选中/未激活状态的颜色 | `string` | `''` |
| `range` | 是否开启双滑块范围选择模式 | `boolean` | `false` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `readonly` | 是否为只读状态（不可编辑但保持正常展示样式） | `boolean` | `false` |
| `vertical` | 是否为垂直方向排列/滑动 | `boolean` | `false` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: NvSliderValue` |
| `change` | 绑定值或选中项发生变化时触发 | `value: NvSliderValue` |
| `drag-start` | 开始拖动滑块时触发 | `event: unknown` |
| `drag-end` | 结束拖动滑块时触发 | `event: unknown` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `left-button` | 自定义双滑块左侧滑块按钮 |
| `button` | 自定义按钮区域内容 |
| `right-button` | 自定义双滑块右侧滑块按钮 |

</div>
