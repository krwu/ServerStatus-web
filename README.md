# Web UI for ServerStatus

**English** | [简体中文](README.zh_CN.md)

This is a web ui for [BotoX's ServerStatus](https://github.com/BotoX/ServerStatus/).

[![Build Status](https://travis-ci.com/krwu/ServerStatus-web.svg?branch=master)](https://travis-ci.com/krwu/ServerStatus-web)
[![codebeat badge](https://codebeat.co/badges/038ea692-7cec-47dc-add2-2a59b6a5d89c)](https://codebeat.co/projects/github-com-krwu-serverstatus-web-master)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/krwu/serverstatus-web.svg)
[![downloads](https://img.shields.io/github/downloads/krwu/ServerStatus-web/total)](https://github.com/krwu/ServerStatus-web/releases)
[![GitHub](https://img.shields.io/github/license/krwu/ServerStatus-web)](https://github.com/krwu/ServerStatus-web/blob/master/COPYING.txt)

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

   ```bash
   git clone https://github.com/krwu/ServerStatus-web.git
   cd ./ServerStatus-web/
   ## you can also run "yarn" instead of the next command
   npm i
   npm run build
   ```

6. Copy all files in the `build` directory to your web directory of ServerStatus(you can delete all files except `json/status.json` in it, this is recommended).

---

## Special thanks

[![Jetbrains Logo](https://krwu.github.io/img/jetbrains.svg)](https://www.jetbrains.com/?from=WebUiForServerStatus)

Thanks to [Jetbrains](https://www.jetbrains.com/?from=WebUiForServerStatus) for supporting this small open source project! I used WebStorm and PhpStorm for years, they are the best tools!
