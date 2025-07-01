---
title: 【Horizon】第2章-AD和DNS配置
slug: horizon-addns
date: 2025-3-22
authors: mlishu
tags: [云计算, Windows, Horizon]
keywords: [cloud-computer, Windows, Horizon]
---
【Horizon】第2章-AD和DNS配置

<!-- truncate -->

首先需要安装Windows Server系统，可以通过下面的链接访问

[配置Windows Server 2022](/blog/config-windows-server)

## 安装功能

修改计算机名为：`Nadl-AD-Master`和 `Nadl-AD-Slave`

在进行配置之前，首先要保证主从服务器NTP时钟同步

在主从服务器中添加 `AD域控制器`和 `DNS`

## 配置主从DNS

在这一步之前，建议先配置主从AD域，会自动创建DNS主区域

### 配置主DNS

![1742634534476](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634534476.png)

在 `DNS管理器`中新建反向查找区域

![1742634564111](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634564111.png)

这里我们创建主要区域

![1742634585269](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634585269.png)

这里选择在域控制器中运行

![1742634606131](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634606131.png)

进行IPv4解析

![1742634634995](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634634995.png)

创建网段

![1742634654465](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634654465.png)

默认配置即可

![1742634672199](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634672199.png)

创建完成了，此时我们并不需要手动将方向配置信息写入，一会直接在正向文件配置中，自动配置对应方向解析文件

### 配置从DNS

我们只需要在从服务器上配置 `辅助区域`

![1742634773253](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634773253.png)

其他配置和主DNS一样

只有这里指向主DNS服务器

![1742634826772](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634826772.png)

剩下都是下一步就行

### 验证配置

![1742634867472](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634867472.png)

## 配置主从AD域

### 配置主AD域

打开服务器管理，找到右上角的小旗子图标，点击后，可以看到部署后配置，虽说我们安装了AD域服务角色和功能，但是如果没有配置AD域，那这台服务器还不是AD域服务器，只有安装配置了AD域服务器，这台服务器才是真正的AD域服务器

![1742632399074](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742632399074.png)

选择部署操作，因为这台域控制器，作为云计算中的主服务器，所以我们选择第三个 `添加新林`

根域名：`nadl.local`，当然了，这里的域名可以根据自己的需要求填定

![1742632416997](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742632416997.png)

可以看到新林和根域的功能级别版本最高的也就是 `Windows Server 2016`

这个域控功能版本，不是Windows系统版本，我们现在的Windows Server系统版本是2022

![1742632518272](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742632518272.png)

在这里，可以看到域名系统DNS服务器，默认是勾选的，这个不是我们手动勾选的

后文解释：DSRM

![1742632661658](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742632661658.png)

DNS选项，配置时，报无法创建该DNS服务器委派，这个直接跳过即可

![1742632738670](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742632738670.png)

确保为域分配置了NetBIOS名称，并在必要时更改该名称

下面的配置默认下一步即可

![1742632764024](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742632764024.png)

点击安装

![1742632788008](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742632788008.png)

域控服务器配置完成之后，会自动重启服务

重新启动之后，可以看到登录就不一样了

NetBIOS名称加用户名

![1742633175694](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742633175694.png)

### 配置从AD域

配置从AD域的时候要注意：首选DNS服务器要配置为主AD域的IP地址：`172.16.1.66`。备用DNS也就是从AD域的IP地址

将从AD域提升为域控制器

![1742633824904](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742633824904.png)

提升域控制器

![1742633846558](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742633846558.png)

然后 `将域控制器添加到现有域`，然后输入域名 `nadl.local`

![1742633909598](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742633909598.png)

这时会跳出来提供凭据，就是主域的用户名和密码

注意，这里前面一定要加上主域的NetBIOS名称\主域的域管理员，然后再输入域管理员密码

![1742633979363](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742633979363.png)

然后选择域

![1742633995285](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742633995285.png)

输入DSRM密码

![1742634029875](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634029875.png)

默认下一步

![1742634050882](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634050882.png)

这里也非常关键，指定其他复制选项，这里我们要选择主域，因为这台从域控制器需要从主域控制器上来同步域用户的配置文件等

![1742634082565](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634082565.png)

后面默认就行了

![1742634097538](https://www.mlishu.xyz/images/blog/CloudComputer/12-addns/1742634097538.png)

### **验证**配置

备域控制器，加完域之后，这时我们也可以使用主域控制器的域管理员登录到这个从域服务器上

链接文章：[【Horizon】第3章-配置Windows AD](/blog/config-windows-ad)

## 后文解释

### DSRM

键入目录服务还原模式DSRM密码？

键入目录服务还原模式（Directory Services Restore Mode，DSRM）密码是在安装域控制器时设置的密码，用于进入目录服务还原模式。目录服务还原模式是 Windows Server 中的一种特殊模式，用于修复域控制器出现问题时的紧急恢复操作。

DSRM密码的作用：

1.紧急恢复：当域控制器遇到严重问题，例如无法正常启动或域数据库损坏时，管理员可以使用 DSRM 密码登录目录服务还原模式，进行紧急修复和恢复操作。

2.目录服务维护：进入目录服务还原模式后，管理员可以执行一些高级维护任务，如进行数据库修复、进行域控制器的系统状态还原等操作。

3.重置域管理员密码：在目录服务还原模式下，管理员也可以重置遗忘的域管理员密码，以便重新获得管理员权限。

4.安全性：DSRM 密码的设置增强了系统的安全性，确保只有授权人员才能进入目录服务还原模式并执行相关操作。

5.DSRM密码是用于进入目录服务还原模式的凭据，具有紧急修复、维护和重置密码等功能，是保障域控制器安全和稳定运行的重要措施之一。

### NetBIOS

NetBIOS 的作用：

1.计算机标识：NetBIOS 名称是用于标识计算机在局域网中的唯一名称，通过 NetBIOS 名称可以识别和访问其他计算机。

2.名称解析：NetBIOS 名称与 IP 地址之间的解析是通过 NetBIOS Name Service (NBNS) 或 Windows Internet Name Service (WINS) 来实现的。当计算机需要与其他计算机通信时，会通过 NetBIOS 名称解析为对应的 IP 地址。

3.计算机通信：NetBIOS 协议提供了一种计算机之间进行通信的机制，包括文件共享、打印机共享、消息传递等功能。

4.旧系统兼容*：在早期的 Windows 网络中，NetBIOS 是主要的计算机通信协议，因此一些旧系统和应用程序仍然依赖于 NetBIOS。

5.NetBIOS 名称解析缓存：类似于 DNS 缓存，计算机会缓存已解析的 NetBIOS 名称和对应的 IP 地址，提高通信效率。

6.虽然 NetBIOS 是一种传统的协议，但在一些特定场景下仍然具有重要作用。通过为域分配并管理良好的 NetBIOS 名称，可以确保域内计算机之间能够正确识别和通信，提高网络的可靠性和稳定性。
