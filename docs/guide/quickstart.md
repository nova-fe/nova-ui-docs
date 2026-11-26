---
title: 快速上手
demoPath: "/pages/nova-demo/basic"
---

# 快速上手

<div class="nv-doc-card">

## 环境要求

- **HBuilderX 5.38+**（uni-app x 蒸汽模式）
- 工程 `manifest.json` 启用蒸汽模式与样式隔离 2.0：

```json
{
  "uni-app-x": {
    "vapor": true,
    "styleIsolationVersion": "2"
  }
}
```

</div>

<div class="nv-doc-card">

## 安装组件库

### 方式一：通过 npm 安装（推荐）

```bash
npm install nova-ui-x
# 或 pnpm add nova-ui-x
```

安装完成后，在项目根目录 `pages.json` 中配置 `easycom` 映射，即可按需自动编译所有 `<nv-*>` 组件：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^nv-(.*)": "nova-ui-x/components/nv-$1/nv-$1.uvue"
    }
  }
}
```

### 方式二：通过 `uni_modules` 目录引入

从 [nova-fe/nova-ui](https://github.com/nova-fe/nova-ui) 克隆或下载源码，将 `uni_modules/nova-ui` 复制到你的 uni-app x 工程根目录的 `uni_modules/` 下（无需配置 `pages.json`）：

```bash
git clone https://github.com/nova-fe/nova-ui.git
cp -R nova-ui/uni_modules/nova-ui /path/to/your-project/uni_modules/
```

</div>

<div class="nv-doc-card">

## 引入全局主题样式

在 `App.uvue` 中引入主题变量与内置工具类：

```scss
// npm 安装方式
@import 'nova-ui-x/theme.scss';

// 或 uni_modules 引入方式
// @import '@/uni_modules/nova-ui/theme.scss';
```

</div>

<div class="nv-doc-card">

## 使用组件（Easycom 自动引入）

Nova UI 遵循 DCloud Easycom 规范，所有组件均以 `nv-` 为前缀，无需手动 `import` 注册，直接在 `.uvue` 模板中使用即可：

```html
<template>
  <nv-config-provider :theme="theme">
    <view class="page">
      <nv-button type="primary" round @click="onSubmit">提交</nv-button>

      <nv-cell-group inset title="账号登录">
        <nv-field v-model="username" label="用户名" placeholder="请输入用户名" clearable />
        <nv-field
          v-model="password"
          label="密码"
          type="password"
          placeholder="请输入密码"
          show-password-toggle
        />
      </nv-cell-group>

      <!-- 指令式反馈挂载点 -->
      <nv-portal />
    </view>
  </nv-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showSuccessToast, type NvThemeMode } from 'nova-ui-x'
// 如使用 uni_modules 方式：
// import { showSuccessToast, type NvThemeMode } from '@/uni_modules/nova-ui/index'

const theme = ref<NvThemeMode>('light')
const username = ref('')
const password = ref('')

const onSubmit = () => {
  showSuccessToast('提交成功')
}
</script>
```

</div>
