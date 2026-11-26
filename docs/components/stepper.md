---
title: Stepper 步进器
demoPath: "/pages/nova-demo/form?comp=stepper&title=Stepper%20%E6%AD%A5%E8%BF%9B%E5%99%A8"
---

# Stepper 步进器

<div class="nv-doc-card">

## 介绍

`nv-stepper` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('stepper')" class="sec">
          <text class="sec-title">Stepper 步进器</text>
          <view class="card">
            <view class="row-item">
              <text class="row-label">默认样式</text>
              <nv-stepper v-model="stepperVal" />
            </view>
            <view class="row-item">
              <text class="row-label">圆角风格</text>
              <nv-stepper v-model="stepperVal" theme="round" />
            </view>
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-stepper>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `Numeric` | `1` |
| `min` | 最小允许值 | `Numeric` | `1` |
| `max` | 最大允许值或最大可选数量 | `Numeric` | `Infinity` |
| `step` | 每次增减变化的步长 | `Numeric` | `1` |
| `name` | 唯一标识符名称 | `Numeric` | `''` |
| `input-width` | 步进器输入框宽度 | `Numeric` | `32` |
| `button-size` | 按钮尺寸 | `Numeric` | `28` |
| `decimal-length` | 保留的小数位数 | `number` | `undefined` |
| `theme` | 步进器风格，可选值为 default / round | `'default' \| 'round'` | `'default'` |
| `integer` | 是否只允许输入整数 | `boolean` | `false` |
| `disabled` | 是否禁用当前组件 | `boolean` | `false` |
| `disable-plus` | 是否禁用增加按钮 | `boolean` | `false` |
| `disable-minus` | 是否禁用减少按钮 | `boolean` | `false` |
| `disable-input` | 是否禁用输入框输入 | `boolean` | `false` |
| `show-plus` | 是否显示增加按钮 | `boolean` | `true` |
| `show-minus` | 是否显示减少按钮 | `boolean` | `true` |
| `show-input` | 是否显示步进器中间输入框 | `boolean` | `true` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `value: Numeric` |
| `change` | 绑定值或选中项发生变化时触发 | `value: Numeric, detail: { name: Numeric }` |
| `plus` | 点击增加按钮时触发 | `-` |
| `minus` | 点击减少按钮时触发 | `-` |
| `overlimit` | 点击已处于边界值禁用的增减按钮时触发 | `type: 'plus' \| 'minus'` |

</div>
