---
title: 主题定制
demoPath: "/pages/nova-demo/basic?comp=config-provider&title=ConfigProvider"
---

# 主题定制

<div class="nv-doc-card">

## 暗黑模式

使用 `<nv-config-provider>` 的 `theme` 属性即可一键切换亮色（`light`）与暗黑（`dark`）主题，所有组件和几何图标均会自动响应主题切换：

```html
<template>
  <nv-config-provider :theme="mode">
    <nv-button type="primary" round @click="toggle">
      {{ mode === 'light' ? '切换暗黑模式' : '切换亮色模式' }}
    </nv-button>
  </nv-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NvThemeMode } from '@/uni_modules/nova-ui/index'

const mode = ref<NvThemeMode>('light')
const toggle = () => {
  mode.value = mode.value === 'light' ? 'dark' : 'light'
}
</script>
```

</div>

<div class="nv-doc-card">

## 覆写 Design Tokens

通过 `theme-vars` 属性传入驼峰命名的主题变量即可实现全局或局部品牌色定制：

```html
<nv-config-provider
  :theme-vars="{
    primaryColor: '#7232dd',
    successColor: '#07c160',
    dangerColor: '#ee0a24'
  }"
>
  <nv-button type="primary">自定义品牌紫</nv-button>
</nv-config-provider>
```

### 常用主题变量

| 变量名 | 默认亮色值 | 默认暗黑值 | 说明 |
| --- | --- | --- | --- |
| `primaryColor` | `#1989fa` | `#1989fa` | 主题品牌色 |
| `successColor` | `#07c160` | `#07c160` | 成功色 |
| `warningColor` | `#ff976a` | `#ff976a` | 警告色 |
| `dangerColor` | `#ee0a24` | `#ee0a24` | 危险色 |
| `background` | `#f7f8fa` | `#000000` | 页面背景色 |
| `background2` | `#ffffff` | `#1c1c1e` | 卡片/容器背景色 |
| `textColor` | `#323233` | `#f5f5f5` | 主文字颜色 |
| `textColor2` | `#969799` | `#707070` | 次级文字颜色 |
| `borderColor` | `#ebedf0` | `#3a3a3c` | 边框与分割线颜色 |

</div>
