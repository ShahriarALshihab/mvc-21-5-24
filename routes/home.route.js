const express=require('express'); 
const { getHome } = require('../controller/home.controll');

const route=express.Router(); 

route.get('/',getHome); 

module.exports=route; 