const http = require('http')
var getUrl = null;
const server = http.createServer((req,res)=>{
    console.log('request made')
    getUrl = req.url
})

server.listen(8000,'localhost',()=>{
    console.log("server active on port 8000");
})

function router(url){
    switch (url){
        case '/' :{
            break
        }
        case '/about' :{
            break
        }
        default :{
            break
        }
    }
}



