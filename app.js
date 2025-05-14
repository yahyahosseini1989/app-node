const http = require('http')

const server = http.createServer((req, res) => {
	// console.log('req.url :>> ', req.url);
	// console.log('req.method :>> ', req.method);
	// console.log('req.headers :>> ', req.headers);
	res.write('Hello NodeJs')
	res.end()
})

server.listen(8000)