const http = require('http')
const url = require('url')
const app = http.createServer();

app.on('request',function(req,res) {
    const method = req.method.toLowerCase();
    const pathname = url.parse(req.url).pathname
    res.writeHead(200,{
        'content-type':'text/html;charset=utf8'
    });
    if (method === 'get') {
        if (pathname === '/' || pathname === '/index') {
            res.end('首页')
        } else if(pathname === '/login') {
            res.end('登入页')
        } else {
            res.end('404-not found');
        }
    } else {
        res.end()
    }
})

app.listen(3000)
console.log('http://localhost:3000')