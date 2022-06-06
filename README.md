# node-react-mongo
《Node+MongoDB+React项目实战开发》 笔记

## Node基础
### module.exports require

### 系统模块
- fs文件操作模块
```js
fs.readFile(path,encode,callback)
fs.writeFile(path,content,callback)
```
- http模块网络服务模块
- os 操作系统信息模块
```js
```
- path路径处理模块
```js
// path可以抹平不同操作系统的文件系统的差异
// path.join() 用来拼接文件路径
// __dirname 获取绝对路径
path.join(__dirname,'file.txt') 
// 这个获取绝对路径
```


### gulp
- 项目上线,HTML，CSS,JS文件压缩合并
- 语法转换（es6, less, scss）等
- 公共文件抽离，开发阶段的热更新
gulp基于流（stream）的自动化构建工具。webpack是一个文件打包工具，可以把项目中各种JS，CSS等打包合并为一个或者多个文件，主要用于模块化方案和预编译模块方案