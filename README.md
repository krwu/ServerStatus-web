# Web UI for ServerStatus

**English** | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md)

This is a web ui for [BotoX's ServerStatus](https://github.com/BotoX/ServerStatus/).

[![Build Status](https://travis-ci.com/krwu/ServerStatus-web.svg?branch=master)](https://travis-ci.com/krwu/ServerStatus-web)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/krwu/ServerStatus-Web)
[![GitHub All Releases](https://img.shields.io/github/downloads/krwu/ServerStatus-web/total)](https://github.com/krwu/ServerStatus-web/releases)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub](https://img.shields.io/github/license/krwu/ServerStatus-web)](https://github.com/krwu/ServerStatus-web/blob/master/COPYING.txt)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/krwu/ServerStatus-Web/react)


## Live demo:

[https://udev.bid/sergate/](https://udev.bid/sergate/)

## Useage:

You MUST install and run [BotoX's ServerStatus](https://github.com/BotoX/ServerStatus/) first. This is just a drop-in replacement for its web interface.

### **With release version:**

1. Download the latest prebuilt files on the [release page](https://github.com/krwu/ServerStatus-web/releases).
2. Unzip the downloaded file.
3. Copy all files in `sergate` directory to your web directory of ServerStatus(you can delete all files except `json/status.json` in it, this is recommended).

### **Built by your self:**

1. You need Node.js, npm / yarn installed.
2. Clone the repo to your machine.
3. Enter the root directory of this project.
4. Install dependecies with npm / yarn.
5. Run `npm run build` to build web files.

    ``` bash
    git clone https://github.com/krwu/ServerStatus-web.git
    cd ./ServerStatus-web/
    ## you can also run "yarn" instead of the next command
    npm i
    npm run build
    ```
6. Copy all files in the `build` directory to your web directory of ServerStatus(you can delete all files except `json/status.json` in it, this is recommended).

