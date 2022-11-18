const user=require("../models/user")

exports.resisterServices=async(data)=>{
     const result=await user.create(data)
}

exports.loginUser=async(username)=>{
     

     return await user.findOne({username})
}


exports.updatedataServices=async(username,data)=>{
       

     return await user.updateOne({username},{$set:data} )
}

exports.deleteuser=async(username)=>{
    return await user.deleteOne({username})
}