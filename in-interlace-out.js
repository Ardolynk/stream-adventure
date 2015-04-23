var split = require('split')
var through = require('through2')

var isEven = false
var stream = through(function(buffer, _, next) {
  var str = buffer.toString()
  this.push((isEven ? str.toUpperCase() : str.toLowerCase()) + '\n')
  isEven = !isEven;
  next()
})

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout)
