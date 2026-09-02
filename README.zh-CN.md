# AppDock

**用心打磨的小应用。**

[English](./README.md) · 简体中文 · [日本語](./README.ja.md)

AppDock 是一个不断扩展的小型应用集合。本仓库包含发布在 [appdock.link](https://appdock.link/) 的静态网站源代码。

## 关于 AppDock

AppDock 专注于制作功能克制、隐私友好、长期可用的小型工具。每款应用拥有独立的产品页面与稳定 URL，同时共享一致的品牌和设计原则。

当前产品：

- [朝夕体重](https://appdock.link/dailyWeight/)：每天分别记录晨间与晚间体重，查看日内变化和长期趋势，并通过加密 PNG 在本机完成备份与恢复。

## 仓库结构

- `/index.html`：AppDock 产品入口
- `/dailyWeight/`：朝夕体重产品介绍页
- `/assets/`：AppDock 品牌与公共资源
- `/CNAME`：GitHub Pages 自定义域名
- `/.nojekyll`：让 GitHub Pages 按原始静态文件发布

未来产品应放入独立目录，例如 `/otherApp/`，避免改变现有产品 URL。

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 4173
```

然后访问：

- `http://127.0.0.1:4173/`
- `http://127.0.0.1:4173/dailyWeight/`

## 发布方式

网站使用 GitHub Pages 托管。将默认分支的仓库根目录设置为 Pages 发布源，并保留 `CNAME` 中的 `appdock.link`。DNS 验证完成后，应启用 HTTPS。

## 隐私说明

本网站代码没有接入用户账号、提交表单、广告、行为追踪或分析脚本。托管服务、网络服务商与浏览器仍可能按照各自政策处理访问日志或技术信息。

## 知识产权与使用范围

除另有明确说明外，本仓库中的原创源代码、页面结构、视觉设计、文案、AppDock 品牌元素、图标及产品素材均保留全部权利。

公开访问本仓库不代表授予开源许可。除 GitHub 服务条款允许的平台功能、适用法律明确允许的情形，或获得权利人书面授权外，不得复制、修改、再发布、销售、商业使用本项目内容，或基于其制作衍生作品。不得使用 AppDock 的名称、标识或产品素材暗示官方授权、合作或关联关系。

第三方字体、工具、商标及其他第三方材料仍归各自权利人所有，并适用其原始许可或使用条款。

**Copyright © 2026 AppDock. All rights reserved.**

如需取得使用授权，请联系 [support@appdock.link](mailto:support@appdock.link) 或通过 [GitHub](https://github.com/LinHaobo0221) 联系。
