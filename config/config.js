const config=require('dotenv').config(); 
 

const dev={
    app:{
        port:process.env.PORT|| 2000
    },
    db:{
        url:process.env.db_URL
    },
}; 

module.exports=dev; 