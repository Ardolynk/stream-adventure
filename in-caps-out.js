var through = require('through2')
var stream = through(function(buffer, _, next) {
  this.push(buffer.toString().toUpperCase())
  next()
})

process.stdin.pipe(stream).pipe(process.stdout)
