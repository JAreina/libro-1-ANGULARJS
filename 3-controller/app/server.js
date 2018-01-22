var express = require('express'),
app
= express();
app.use(express. static (__dirname+'/'))
.get('*', function (req, res){
res.sendFile('/index.html', {root:__dirname});
}).listen(3000);
console.log("SERVIDOR EN http://localhost:3000")
