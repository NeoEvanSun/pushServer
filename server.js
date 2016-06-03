var express = require("express");
var app = express();

app.use(express.static(__dirname + "/files"));

app.get("/getAndroidApp",function(req,res,next){
  res.download("./files/androidApp.apk","肇源麻将.apk");
})

app.listen(3000,function(){
  console.log("server is listening on 3000");
})
