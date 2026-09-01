const http=require('http');
const port=8000;
const server=http.createServer((req,res)=>{
    res.end("First Node.js Server")
})

server.listen(port,()=>{
    console.log(`Server is running on port at http://localhost:${port}`);
}
)