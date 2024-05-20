const mongoose=require('mongoose');

const fileSchema= mongoose.Schema({
    filename:{
        type:String,
        required: true
    },
    path:{
        type:String,
        required:true
    },
    mimetype:{
        type:String,
        required:true
    },
}); 

module.exports=mongoose.model('File',fileSchema)

