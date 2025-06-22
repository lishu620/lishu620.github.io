---
title: 部署Hext博客主页
date: 2025-6-21
updated: 2025-06-22
categories: 璃殊折腾记 VPS
tags:
  - 璃殊折腾记
  - VPS
top: 1
---
由于之前使用的是基于 `docusaurus`的博客，现在准备切换为 `valaxy`主页，提升阅读性

## 部署valaxy主页

[官方文档](https://github.com/YunYouJun/valaxy/blob/main/README.zh-CN.md)

### 在本地初始化项目

只需运行以下命令来初始化博客：

```shell
# pnpm (推荐)
pnpm create valaxy
# npm
# npm init valaxy
# yarn
# yarn create valaxy
```

选择blog模式

输入博客名字

![1750608073484](https://mlishu.xyz/post/deploy_web/1750608073484.png)

确认后选择pnpm模式

之后就会自动启动项目

![1750524661484](image/部署新博客主页/1750524661484.png)

进入主页

![1750524717589](image/部署新博客主页/1750524717589.png)

### 个性化修改

打开根目录下的 `site.config.ts`文件

前面的配置可以入下图

```ts
lang : 'zh-CN',
  title: '璃殊的小站',
  subtitle: 'All at sea.',
  description: '希望能成为一个有趣的人',
  author: {
    name: '璃殊',
    avatar: '/images/avatar.jpg',
    status: {
      emoji: '😣',
    },
  },
  url: 'https://www.mlishu.xyz/',
  mediumZoom: { enable: true },
```

稍微修改一下就完成了

### 上传并部署

将本地网页上传

![1750526264504](image/部署新博客主页/1750526264504.png)
