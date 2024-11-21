const http = require('http')
const fs = require('fs')
const server = http.createServer((req, resp)=>{
    console.log(req.url, req.methode, req.headers)
    if(req.url==="/"){
    resp.setHeader('conatent', 'text/html')
      resp.write('<html>')
      resp.write('<head><title>input</title></head>')
      resp.write('<body>')
      resp.write('<form action="/submit" method="POST">')
      resp.write('<lable>Enter Your Name</lable><br />')
      resp.write('<input type="text" placeholder="Enter Name" /><br /><br />')
      resp.write('<lable>Enter Your Name</lable><br/>')
      resp.write('<input type="text" placeholder="Enter Mobile" />')
      resp.write('<input type="submit" value="submit" >' )
      resp.write('</form>')
      resp.write('</body>')
    resp.write('<html>')
    return resp.end();
}else if(req.url.toLocaleLowerCase() === "/submit" && req.method === "POST"){
      fs.writeFileSync('user.txt', 'Devendra');
      resp.statusCode = 302;
      resp.setHeader('Location', '/')
}
})

const PORT =3002;
server.listen(PORT,()=>{
    console.log(`server running on address http://localhost:${PORT}`)
})