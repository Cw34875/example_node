var Http = require('http'),
    Fs = require('fs'),
    Path = require('path'),
    Url = require('url'),
    Mime = require('mime-types')

const HOST = '127.0.0.1',
      PORT = 8088


// create server
Http.createServer((request, response) => {
    console.log(`Received request to serve ${request.url}`)
    var filename = Url.parse(request.url).pathname,
        fullPath = Path.join(__dirname, filename + (filename.endsWith('/') ? 'index.html' : ''))

    if (Fs.existsSync(fullPath)) {
        Fs.readFile(fullPath, 'binary', function(err, file) {
            if (err) {
                response.writeHeader(500, { 'Content-Type': 'text/plain' })
                response.write(err)
                response.end()
            }
            else {
                response.writeHeader(200, { 'Content-Type': Mime.lookup(fullPath) })
                response.write(file, 'binary')
                response.end()
            }
        });
    }
    else {
        response.writeHeader(404, { 'Content-Type': 'text/plain' })
        response.write(`Cannot serve file ${request.url}`)
        response.end()
    }
}).listen(PORT, HOST, () => {
    console.log(`Server Running on http://${HOST}:${PORT}/`)
})
