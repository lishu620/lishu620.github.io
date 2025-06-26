---
title: 部署Valaxy博客主页
date: 2025-06-21
updated: 2025-06-22
categories: 璃殊折腾记
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

<img src="http://img.mlishu.xyz/i/2025/06/23/68582d268d8cc.png" alt="1750524256291.png" title="1750524256291.png" />

输入博客名字

<img src="http://img.mlishu.xyz/i/2025/06/23/68582d38c1964.png" alt="1750524288656.png" title="1750524288656.png" />

确认后选择pnpm模式

之后就会自动启动项目

<img src="http://img.mlishu.xyz/i/2025/06/23/68582d2711987.png" alt="1750524661484.png" title="1750524661484.png" />

进入主页

<img src="https://img.mlishu.xyz/i/2025/06/23/68582f640045f.png" alt="1750524717589.png" title="1750524717589.png" />

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

<img src="http://img.mlishu.xyz/i/2025/06/23/68582d27b4a31.png" alt="1750526264504.png" title="1750526264504.png" />
