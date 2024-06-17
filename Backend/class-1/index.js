const http = require("http");
const fs = require("fs");
const os = require("os");


const server = http.createServer((req,res) => {
    switch (req.url){
        case "/":
            res.end("Hey welcome to my server");
            break;
            case "/contact":
            res.end("Hey welcome to my contact page");
            break;
            case "/about":
            res.end("Hey welcome to my about page");
            break;
            default:
            res.end("404 page not found");
            break;
    }
});

const port =  2541;
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

