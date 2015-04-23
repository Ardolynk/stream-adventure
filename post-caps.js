var http = require('http')
var through = require('through2')

http.createServer(function(request, response) {
  if(request.method == 'POST') {
    request.pipe(through(function(content, _, next) {
      this.push(content.toString().toUpperCase())
      next()
    })).pipe(response)
  }
  else res.end('send me a POST\n');
}).listen(parseInt(process.argv[2]))
