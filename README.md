# Gulp

## 当下的前端开发

- 不再是简简单单的使用HTML+CSS+JavaScript这些简单的技术构建网页应用程序了
- 我们要提高效率，就必须减少重复的工作
- 使用less之类预处理的CSS coffeescript
- 提供开发阶段的便利，开发阶段更快捷
- 现在的开发行业优质的开发人员是不应该将精力放在这些重复性质的工作上
- Gulp就是一种可以自动化完成我们开发过程中大量的重复工作
    + 预处理语言的编译
    + js css html 压缩混淆
    + 图片体积优化
- 除gulp之外还有一些类似的自动化工具，比如grunt
- what how why

## Gulp简介

- 当下最流行的自动化工具
    + 什么是自动化构建工具？
    + 自动完成一系列重复的操作
        * less → css
        * coffeescript → js
        * css压缩
        * js混淆
        * html压缩
        * img尺寸优化
        * 。。。。
- 链接：
    + [官网](http://gulpjs.com/)
    + [中文网](http://www.gulpjs.com.cn/)

- gulp的包既包含工具，也包含一些编程的API


## 准备工作

- 安装Node.js
    + Node.js 给前端带来了一场工业革命
    + http://npm.taobao.org/
    + 安装完成过后可以通过命令行工具node -v
    + 安装nodejs过程会自动安装npm(node packages manager)
    + npm 3 以前的版本文件依赖是层级依赖
    + npm 3 以后依赖关系改为平行依赖（windows上路径过长问题）
    + gulp本身是node的模块
- 安装 gulp 命令行工具
    + `npm install -g gulp`
    + -g 指的是在全局作用域中安装
    + 测试命令 gulp -v
- 初始化 gulp 项目
    + 在本地安装gulp包
    + npm install gulp --save
- 创建任务 - gulpfile.js
    + gulpfile.js 就是gulp的主文件

## 基本使用

- 定义一个任务
- 复制单个文件
- 复制多个文件
- [globs匹配语法](https://github.com/isaacs/node-glob)
    + src/\*
    + src/\*/\*
    + src/\*\*/\*
    + src/\*.jpg
    + src/\*.{jpg,png}
    + 多个globs
        * ['src/\*.{jpg,png}','a/a.html']
- 排除某些文件
    + !xxxxx
- 默认任务
    + gulp 中的任务名有个特殊值 default
- 文件监视自动执行任务

## 常用插件

- [编译 Less：gulp-less](https://www.npmjs.com/package/gulp-less)
- [编译 Jade: gulp-jade](https://www.npmjs.com/package/gulp-jade)
- [创建本地服务器：gulp-connect](https://www.npmjs.com/package/gulp-connect)
- [合并文件：gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [最小化 js 文件：gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [重命名文件：gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [最小化 css 文件：gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
- [压缩html文件 gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)
- [最小化图像：gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)


