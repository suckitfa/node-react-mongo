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