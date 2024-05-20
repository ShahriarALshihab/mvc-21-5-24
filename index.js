const config=require('./config/config'); 
const app=require('./app'); 
const connectDB=require('./config/db'); 

connectDB(); 

const PORT=config.app.port;



app.listen(PORT,()=>{
    console.log(`server is running on http://127.0.0.1:${PORT}`); 
})