---
title: 构建Hadoop系统
date: 2025-07-24
updated: 2025-07-24
categories: 璃殊折腾记
tags:
  - 璃殊折腾记
  - 网络技术
  - Hadoop
top: 2
---
## 配置Debian
在这里我们选用Debian作为Hadoop的运行环境，首先我们需要安装Debian12.X，安装过程不再赘述。
### 修改IP地址
原本的Debian的IP地址为DHCP获取，我们需要将其修改为静态的`192.168.64.181`，修改方法如下：
输入`sudo vi /etc/network/interfaces`
将文件内容修改为：
```bash
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug ens33
iface ens33 inet static
address 192.168.64.182
netmask 255.255.255.0
gateway 192.168.64.2

```
启用修改：
输入`sudo systemctl restart networking.service`

### 修改主机名
输入`sudo hostnamectl hostname hadoop1`
同理修改hadoop2

### 配置Hadoop用户
