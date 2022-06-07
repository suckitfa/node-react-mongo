const http = require('http')
const querystrig = require('querystring')

const app = http.createServer()
app.listen('request',(req,res) => {
    let postParam = '';
    req.on('data',param => {
        postParam += param;
    })
    req.on('end', () => {
        console.log('querystring = ',querystring.parse(postParam))
    })
})
app.listen(5000)
console.log('http://localhost:5000')