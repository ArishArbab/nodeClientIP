var express = require("express")
var getIP = require('ipware')().get_ip;

var app = express();

app.get('/',function(req,res){
    res.sendFile('pages/index.html' , { root : __dirname})
});

app.get('/ip',function(req,res){
    var ipInfo = getIP(req);
    res.setHeader('Content-Type', 'application/json');
    var json = JSON.stringify(ipInfo);
    res.send(json);
});

var port = process.env.PORT || 8080

app.listen(port,function () {
    console.log("Listening...")
});
