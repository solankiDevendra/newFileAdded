const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.setHeader('Content','text/html');
        res.write('<html>')
        res.write('<head><title>Home</title> <head/>')
        res.write('<body><h1>Welcom Our Home Page</h1></body>')
        res.write('<html>')
        return res.end();
    }else if(req.url === '/product'){
        res.setHeader('Content','text/html');
        res.write('<html>')
        res.write('<head><title>Home</title> <head/>')
        res.write('<body><h1>Welcom Our Product  Page</h1></body>')
        res.write('<html>')
        return res.end();
    } res.setHeader('Content','text/html');
    res.write('<html>')
    res.write('<head><title>Home</title> <head/>')
    res.write('<body><h1>Welcom Our Main Page</h1></body>')
    res.write('<html>')
    return res.end();
})

const PORT = 3002;
server.listen(PORT,()=>{
    console.log(`server running on address http://localhost:${PORT}`  )
})