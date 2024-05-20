const express=require('express'); 

const fileRoute=require('./routes/file.route'); 
const homeRoute=require('./routes/home.route'); 
const app=express(); 

 //middlewares
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

//routes
app.use('/api',fileRoute);
app.use('/',homeRoute);

//error handling
app.use((req,res,next)=>{
    res.status(404).json({
        message:'404 Not Found!!',
    })
}); 

app.use((req,res)=>{
    res.status(500).json({
        message:'SERVER ERROR!',
    })
}); 


module.exports=app; 