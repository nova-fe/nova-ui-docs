---
title: Area 省市区选择
demoPath: "/pages/nova-demo/business?comp=area&title=Area%20%E7%9C%81%E5%B8%82%E5%8C%BA%E9%80%89%E6%8B%A9"
---

# Area 省市区选择

<div class="nv-doc-card">

## 介绍

`nv-area` 属于 Nova UI **业务组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('area')" class="sec">
          <text class="sec-title">Area 省市区选择（当前编码：{{ areaCode }}）</text>
          <view class="card-nopad">
            <nv-area v-model="areaCode" @confirm="onAreaConfirm" />
          </view>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-area>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 当前绑定值（支持 v-model） | `string` | `''` |
| `title` | 标题文案 | `string` | `'选择地区'` |
| `area-list` | 省市区数据列表（含 province_list / city_list / county_list） | `NvAreaList` | `() =&gt; DEFAULT_AREA_LIST` |
| `columns-num` | 省市区显示列数，3 为省市区、2 为省市、1 为省 | `number` | `3` |
| `confirm-button-text` | 确认按钮文字 | `string` | `'确认'` |
| `cancel-button-text` | 取消按钮文字 | `string` | `'取消'` |
| `item-height` | 选项行高（单位 px） | `number` | `44` |
| `visible-option-num` | 选择器可见的选项个数 | `number` | `5` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 更新组件绑定值（v-model） | `code: string` |
| `confirm` | 点击确认按钮时触发 | `payload: NvAreaChangePayload` |
| `cancel` | 点击取消按钮时触发 | `payload: NvAreaChangePayload` |
| `change` | 绑定值或选中项发生变化时触发 | `payload: NvAreaChangePayload` |

</div>
