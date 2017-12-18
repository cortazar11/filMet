var express=require("express")
var multer  = require('multer')
var upload=multer({ dest: './uploads/'}).single('upl');


var app=express()


app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html')

})


app.post('/',upload,function(req,res){
  console.log(req.file)
  res.end(JSON.stringify({'size':req.file.size}))

    })





var listener=app.listen(3000)
