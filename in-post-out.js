var http = require('http')
var request = require('request')

// http.createServer(function(req, res) {
//   if(req.method == 'POST') {
//     req.pipe(res)
//   }
//   else {
//     res.end('POST to me!')
//   }
// }).listen(8099)

process.stdin.pipe(request.post('http://localhost:8099')).pipe(process.stdout)
