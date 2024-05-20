const File=require('./../models/file.model'); 
const path=require('path'); 


const uploadFile=(req,res)=>{
    const {filename,path,mimetype}=req.file; 

    const newFile=new File({
        filename,
        path,
        mimetype
    }); 
    newFile.save()
     .then(()=>{
res.status(201).json(newFile)
     }).catch((err=>{
        res.status(500).json({error:err.message}); 
     }))
}; 

const getFiles=(req,res)=>{
    res.status(200).sendFile(path.join(__dirname+'./../views/file.html')); 
}
module.exports={uploadFile,getFiles}