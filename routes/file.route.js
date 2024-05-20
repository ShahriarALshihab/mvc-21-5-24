const express=require('express'); 
const route=express.Router();

const upload=require('../middlewares/upload'); 
const { uploadFile, getFiles} = require('../controller/file.controll');

route.post('/upload',upload,uploadFile); 
route.get('/upload',getFiles); 

module.exports=route