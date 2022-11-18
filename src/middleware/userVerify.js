const jwt =require('jsonwebtoken');



exports.veryfyToken=(req,res,next)=>{

try{ 

    const tokenKey=req.headers["authorization"]
   
   const decoded=jwt.verify(tokenKey, process.env.TOKEN_SECRET);
    const {username}=decoded
    req.username=username
    next()
   


}
catch(error){
    res.status(200).json({
        message:error.message
    })
}
}