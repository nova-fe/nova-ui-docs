# Nova UI Docs

> 🌐 **在线文档地址**：[https://nova-fe.github.io/nova-ui-docs/](https://nova-fe.github.io/nova-ui-docs/)

[Nova UI](https://github.com/nova-fe/nova-ui) 官方组件库文档站点，基于 **VuePress 2 + Vite** 构建，参考 Vant 4 三栏式文档布局，右侧内置真实可交互的移动端组件实时预览模拟器。

## 本地开发

```bash
# 安装依赖
npm install

# 启动本地开发预览
npm run docs:dev

# 构建静态站点（输出到 docs/.vuepress/dist）
npm run docs:build
```

## 文档特性

- **Vant 4 风格三栏布局**：左侧全量 81 类组件分类导航 + 中间卡片式文档内容 + 右侧悬浮移动端真机模拟器。
- **实时组件联动预览**：切换左侧任意组件文档时，右侧模拟器自动同步跳转到对应的真实 Nova UI 交互示例。
- **源码级 API 文档**：内置生成脚本 `scripts/generate-docs.mjs`，自动解析组件源码中的 `Props` / `Events` / `Expose` / 示例代码。
- **GitHub Pages 自动部署**：已内置 `.github/workflows/deploy.yml`，推送至 `main` 分支后自动构建发布。
