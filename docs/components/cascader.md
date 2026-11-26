---
title: Cascader 级联选择
demoPath: "/pages/nova-demo/form?comp=cascader&title=Cascader%20%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9"
---

# Cascader 级联选择

<div class="nv-doc-card">

## 介绍

`nv-cascader` 属于 Nova UI **表单组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('cascader')" class="sec">
          <text class="sec-title">Cascader 级联选择</text>
          <nv-cell-group inset>
            <nv-cell title="弹窗选择地区" :value="cascaderText" is-link @click="showCascader = true" />
          </nv-cell-group>
          <view class="gap-md" />
          <text class="sec-title">直接展示级联面板</text>
          <view class="card-nopad">
            <nv-cascader
              v-model="cascaderVal"
              title="请选择所在地区"
              :closeable="false"
              :options="cascaderOptions"
              @finish="onCascaderFinish"
            />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-cascader>`

### Props

| 参数 | 类型 | 默认值 |
| --- | --- | --- |
| `model-value` | `Numeric` | `''` |
| `title` | `string` | `''` |
| `options` | `NvCascaderOption[]` | `() =&gt; []` |
| `placeholder` | `string` | `'请选择'` |
| `active-color` | `string` | `''` |
| `closeable` | `boolean` | `true` |
| `show-header` | `boolean` | `true` |
| `close-icon` | `string` | `'cross'` |
| `field-names` | `NvCascaderFieldNames` | `() =&gt; ({` |
| `custom-class` | `string` | `-` |
| `custom-style` | `StyleInput` | `-` |

### Events

| 事件名 | 回调参数 |
| --- | --- |
| `update:modelValue` | `value: Numeric` |
| `change` | `payload: NvCascaderEventPayload` |
| `finish` | `payload: NvCascaderEventPayload` |
| `close` | `-` |
| `click-tab` | `tabIndex: number, title: string` |

</div>
