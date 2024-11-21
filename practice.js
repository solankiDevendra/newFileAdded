const http = require("http");
const server = http.createServer((req, resp) => {
  console.log(req.url, req.method);
  if(req.url==='/home'){
    resp.write('<h1>Home called </h1>')
    return resp.end();
  }else if(req.url === '/men'){
    resp.write('<h1>Men Section called .....</h1>')
    return resp.end();
  }else if(req.url === '/women'){
    resp.write('<h1>Women Section Called......</h1>')
    return resp.end();
  }else if(req.url === '/cart'){
    resp.write('<h1>Cart Section called.....</h1>')
    return resp.end();
  }
  resp.write(`
           <html lang="en">
<head>
    <title>Myntra</title>
</head>
<body>
    <nav>
    <ul>
    <li>
    <a href="/home">Home</a>
    <a href="/men">Men</a>
    <a href="/women">Women</a>
    <a href="/cart">Cart</a>
    </li>
    </ul>
</nav>
</body>
</html>
        `);
        return resp.end();
});


const PORT = 3002;
server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`)
})
