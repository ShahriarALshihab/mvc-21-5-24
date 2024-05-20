 const multer=require('multer'); 

 const path=require('path'); 

 const storage=multer.diskStorage({
    destination:'./uploads',
    filename:(req,file,cb)=>{
        cb(null,file.filename+'-'+Date.now()+path.extname(file.originalname))
    }
 }); 

 const upload=multer({storage:storage,
    //limits:{fileSize:1000000},
    // fileFilter:(req,file,cb)=>{
    //     checkFileType(file,cb); 
    // }
 }).single('file'); 

 //check file type

//  checkFileType=(file,cb)=>{
//     //allowed ext
//     const filetypes=/jpeg|jpg|png|gif|pdf/; 

//     //check ext
//     const extname=filetypes.test(path.extname(file.originalname).toLowerCase()); 

//     //check mime
//     const mimetype=filetypes.test(file.mimetype); 

//     if(mimetype && extname){
//         return cb(null,true); 
//     }else{
//         cb('error:Images only!'); 
//     }
//  }

 module.exports=upload; 

