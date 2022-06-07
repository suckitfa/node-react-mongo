const http = require('http')
const url = require('url')

const app = http.createServer();
app.on('request',(req,res) => {
    // console.log(req.url)
    if (req.url === '/favicon.icon') return;
    else if (/person/.test(req.url)) {
        res.writeHead(200,{
            'content-type':'text/html;charset=utf8'
        });
        let {query,pathname} = url.parse(req.url,true);
        res.write(query.name);
        res.write(':')
        res.write(query.age)
        res.end();
    } else {
        res.writeHead(200,{
            'content-type':'text/html;charset=utf8'
        });
        res.end(`<h1>欢迎</h1>`)
    }
})
app.listen(5001)
console.log('http://localhost:5001')