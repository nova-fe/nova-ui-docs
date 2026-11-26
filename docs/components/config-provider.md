---
title: ConfigProvider 全局配置
demoPath: "/pages/nova-demo/basic?comp=config-provider&title=ConfigProvider%20%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE"
---

# ConfigProvider 全局配置

<div class="nv-doc-card">

## 介绍

`nv-config-provider` 属于 Nova UI **基础组件**，原生支持 **uni-app x 蒸汽模式（Android / iOS）**、**Web / H5**、**微信小程序** 与 **支付宝小程序**，开箱即用 Easycom 零注册引入。

</div>

<div class="nv-doc-card">

## 代码演示

```html
<view v-if="isShow('config-provider')" class="sec">
          <text class="sec-title">ConfigProvider 全局配置</text>
          <nv-space :size="10" wrap>
            <nv-button size="small" type="primary" round @click="themeMode = themeMode === 'light' ? 'dark' : 'light'">
              {{ themeMode === 'light' ? '切换暗黑模式' : '切换亮色模式' }}
            </nv-button>
            <nv-button size="small" plain round @click="purple = !purple">
              {{ purple ? '恢复默认蓝' : '切换品牌紫' }}
            </nv-button>
          </nv-space>
        </view>
```

</div>

<div class="nv-doc-card">

## API — `<nv-config-provider>`

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `theme` | 全局或局部主题模式，可选值为 light / dark | `NvThemeMode` | `'light'` |
| `theme-vars` | 自定义 CSS 主题变量对象（Design Tokens 覆写） | `NvThemeVars` | `undefined` |
| `custom-class` | 自定义根节点额外类名 | `string` | `''` |
| `custom-style` | 自定义根节点内联样式 | `StyleInput` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 默认内容插槽 |

</div>
