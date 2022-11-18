const user=require("../services/user")
const auth=require("../helper/auth")
const {userVerify}=require("../middleware/userVerify")




exports.resister=async(req,res)=>{
    try{ const data=req.body

     const result=await user.resisterServices(data)
      
       
      res.status(201).json({
          status:"Sucess",
          message:"Congrats,info save Sucess"
          // ,data:data
      })

    }
      catch(error){
          res.status(401).json({
               status:"failed",
               message:"Sorry,data save failed"})

      }
}


exports.login=async(req,res)=>{
  try{
    const userName=req.body.username
    const password=req.body.password

    const result=await user.loginUser(userName)
    
      if(!result){
          
        return res.status(400).json({
            status:"sucess",
            message:"Data find failed"
            
           })}

     const isPasswordValid =result.comparePassword(password,result.password);  

     if(!isPasswordValid){

       return res.status(400).json({
          status:"sucess",
          message:"Password is nor correct"
          
         })}
         

        else{
          result.password=undefined
          const token=auth.createToken(result)
          
          res.status(200).json({
          status: 'success',
          message: "successfully logged in",
          data: {result,token}})}
          }
  
  catch(error){
         res.status(404).json({
          status:"failed",
          message:"Data find failed",
         data:error.message})
  } }



exports.updateUserData=async(req,res)=>{

    try{  
          const username=req.username
          const data=req.body
          const update=await user.updatedataServices(username,data)
  
           res.status(200).json({
            status: 'success',
            message: "successfully logged in",
            data:update
            })}
            
    
    catch(error){
           res.status(404).json({
            status:"failed",
            message:"Data find failed",
           data:error.message})
    }
  }
  



  exports.deleteUser=async(req,res)=>{
    try{
      const username=req.username
      const result=await user.deleteuser(username) 
      res.status(201).json({
        status:"sucess",
        message:"Data delete sucess"
      })
    }
    catch(error){
      res.status(401).json({
        status:"failed",
        message:error.message})
    }
  }