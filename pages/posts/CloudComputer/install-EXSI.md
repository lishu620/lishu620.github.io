---
title: 【VMware】安装EXSI8底层系统
slug: Install-EXSI8-underlying-system
date: 2025-3-21
authors: mlishu
tags: [云计算, VMware]
keywords: [cloud-computer, VMware]
---
<!-- truncate -->

准备工作

EXSI版本：`VMware-VMvisor-Installer-8.0U2-22380479.x86_64.iso`

主机：`VMware Workstation Pro 17`

## 硬件配置

CPU:4X

DIMM:8GiB

Disk:150GiB

Net:NAT

## 安装流程

大部分操作都可以直接下一步，没有很多需要配置的地方

然后自动DHCP了网络

![1742570573577](https://www.mlishu.xyz/images/blog/CloudComputer/01-installEXSI/1742570573577.png)

这里我选择配置静态

## 配置系统

输入IP便可进入系统

![1742570626934](https://www.mlishu.xyz/images/blog/CloudComputer/01-installEXSI/1742570626934.png)

输入账号和密码进入系统

### 添加许可证

EXSI8许可证

```
4V492-44210-48830-931GK-2PRJ4
```
