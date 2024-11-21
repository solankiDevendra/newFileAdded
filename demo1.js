const http = require('http')

const server = http.createServer((req, resp)=>{
    
    console.log(req.url, req.method, req.headers);
    resp.setHeader('Content','text/html');
    resp.write('<html>')
    resp.write('<head><title>Complete Coding</title></head>')
    resp.write('<body><h1>My Reapose data of Server </h1></body>')
    resp.write('</html>')
    resp.end();

});

const PORT = 3002;
server.listen(PORT,()=>{
    console.log(`server running on addredd  http://localhost:${PORT}`)
})