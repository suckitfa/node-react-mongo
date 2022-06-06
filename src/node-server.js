const http = require('http')
const url = require('url')

const app = http.createServer();
app.on('request',(req,res) => {
    console.log(req.headers)
    console.log(req.url)
    // console.log(req.url)
    // console.log(req.method)
    // console.log(req)
    res.writeHead(200,{
        'content-type':"text/html;charset=utf8"
    })
    res.end(`欢迎! url = ${req.url}`)
})

app.listen(3000);
console.log('http://localhost:3000')