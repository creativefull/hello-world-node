var http = require('http');
var port = 3000;

http.createServer(function(req,res) {
	console.log("%d permintaan di terima", process.pid);
	res.writeHead(200, {'Content-Type' : 'text/plain'})
	res.end("Hello world\n");
}).listen(port);

console.log("%d Berjalan pada %d", process.pid, port);