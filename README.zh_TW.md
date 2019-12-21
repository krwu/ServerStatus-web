# Web UI for ServerStatus

[English](README.md) | [简体中文](README.zh_CN.md) | **繁體中文**

本專案是為 [BotoX's ServerStatus](HTTPs://github.com/BotoX/ServerStatus/) 開發的前端展示介面.

[![Build Status](https://travis-ci.com/krwu/ServerStatus-web.svg?branch=master)](https://travis-ci.com/krwu/ServerStatus-web)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/krwu/ServerStatus-Web)
[![GitHub All Releases](https://img.shields.io/github/downloads/krwu/ServerStatus-web/total)](https://github.com/krwu/ServerStatus-web/releases)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub](https://img.shields.io/github/license/krwu/ServerStatus-web)](https://github.com/krwu/ServerStatus-web/blob/master/COPYING.txt)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/krwu/ServerStatus-Web/react)


## 演示：

[HTTPs://udev.bid/sergate/]（HTTPs://udev.bid/sergate/）

## 使用方法：

你必須首先成功安裝和運行 [BotoX's ServerStatus](HTTPs://github.com/BotoX/ServerStatus/)。 因為這個專案僅僅是一個可以隨插即用的可替換的 web 介面。

- ### **使用預編譯版：**

1. 從 [release 頁面](HTTPs://github.com/krwu/ServerStatus-web/releases)下載最新的預編譯壓縮包。
2. 解壓下載的檔。
3. 把 `sergate` 目錄下的所有檔上傳到你的 ServerStatus 的 web 目錄（推薦操作：你可以先刪除**原目錄**下除了 `json/status.json` 以外的所有檔）。

- ### **自行編譯：**

1. 你需要安裝有 Node.js, npm 或者 yarn.
2. 克隆本專案，或者下載打包的原始程式碼到你的機器。
3. 進入專案根目錄（或解壓後的資料夾）。
4. 通過 npm(推薦) 或者 yarn 安裝依賴項。
5. 執行 `npm run build` 來編譯 web 檔：
    ```bash
    git 克隆HTTPs://github.com/krwu/ServerStatus-web.git
    cd ./伺服器狀態-Web/
    ## 你也可以用 yarn 代替下面的 npm
    npm i
    npm 運行生成
    ```
6. 把 `build` 目錄下的所有檔上傳到你的 ServerStatus 的 web 目錄（推薦操作：你可以先刪除**原目錄**下除了 `json/status.json` 以外的所有檔）。


