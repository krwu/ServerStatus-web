# Web UI for ServerStatus

[English](README.md) | **简体中文**

本项目是为 [BotoX's ServerStatus](https://github.com/BotoX/ServerStatus/) 开发的前端展示界面.

[![Build Status](https://app.travis-ci.com/krwu/ServerStatus-web.svg?token=ewwsqHUp5uN7kb98qTjg&branch=master)](https://app.travis-ci.com/github/krwu/ServerStatus-web)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/krwu/ServerStatus-Web)
[![GitHub All Releases](https://img.shields.io/github/downloads/krwu/ServerStatus-web/total)](https://github.com/krwu/ServerStatus-web/releases)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub](https://img.shields.io/github/license/krwu/ServerStatus-web)](https://github.com/krwu/ServerStatus-web/blob/master/COPYING.txt)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/krwu/ServerStatus-Web/react)

## 演示：

[https://udev.bid/sergate/](https://udev.bid/sergate/)

## 使用方法：

你必须首先成功安装和运行 [BotoX's ServerStatus](https://github.com/BotoX/ServerStatus/)。因为这个项目仅仅是一个可以即插即用的可替换的 web 界面。

### **使用预编译版：**

1. 从 [release 页面](https://github.com/krwu/ServerStatus-web/releases)下载最新的预编译压缩包。
2. 解压下载的文件。
3. 把 `sergate` 目录下的所有文件上传到你的 ServerStatus 的 web 目录（推荐操作：你可以先删除**原目录**下除了 `json/status.json` 以外的所有文件）。

### **自己编译：**

1. 你需要安装有 Node.js, npm 或者 yarn.
2. 克隆本项目，或者下载打包的源代码到你的机器。
3. 进入项目根目录（或解压后的文件夹）。
4. 通过 npm(推荐) 或者 yarn 安装依赖项。
5. 执行 `npm run build` 来编译 web 文件：
   ```bash
   git clone https://github.com/krwu/ServerStatus-web.git
   cd ./ServerStatus-web/
   ## 你也可以用 yarn 代替下面的 npm
   npm i
   npm run build
   ```
6. 把 `build` 目录下的所有文件上传到你的 ServerStatus 的 web 目录（推荐操作：你可以先删除**原目录**下除了 `json/status.json` 以外的所有文件）。

---

## 特别鸣谢

[![Jetbrains Logo](https://krwu.github.io/img/jetbrains.svg)](https://www.jetbrains.com/?from=WebUiForServerStatus)

非常感谢 [Jetbrains](https://www.jetbrains.com/?from=WebUiForServerStatus) 对这个小小开源项目的支持！我一直是 PhpStorm 和 WebStorm 的死忠粉，它们是最棒的开发工具。
