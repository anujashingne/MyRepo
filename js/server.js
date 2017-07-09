var express = require('express'); 
var path = require('path'),
    fs = require('fs'),
	multer= require('multer');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
var Storage = multer.diskStorage({
     destination: function(req, file, callback) {
         callback(null, "./Images");
     },
     filename: function(req, file, callback) {
         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
     }
 });
app.listen(3000,function(){
	console.log("The server is started");
});
 var upload = multer({
     storage: Storage
 }).array("myvideo", 3); //Field name and max count
 
app.post("/uploadVideo", function(req, resp){
	console.log("request received");
	upload(req, resp, function(){
	});
	resp.send("video received");
	
});

app.get("", function(req, resp){
	
	resp.send("Server started");
}); 