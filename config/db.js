const mongoose=require('mongoose'); 
const config=require('./config'); 

const dbURL=config.db.url; 

const connectDB=async()=>{
    try{   
        await mongoose.connect(dbURL)
        console.log(`connection success!`)
    }catch(err){
              console.log(err.message); 
        }

    
}

module.exports=connectDB; 
