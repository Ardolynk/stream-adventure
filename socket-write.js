var ws = require('websocket-stream')
var wsStream = ws('ws://localhost:8099')
wsStream.write("hello\n")
