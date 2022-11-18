const mongoose=require("mongoose")

const todoSchema=mongoose.Schema({
     username:String,
     TodoSubject:String,
     TodoDescription:String,
     TodoStatus:{type: String,
          default:"new",

             enum:{
            values:["verified","new"]
               
     }}
     
},{timestamps:true,versionKey:false})

const todo=mongoose.model("todo",todoSchema)
module.exports=todo