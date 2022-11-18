
const todo=require("../models/todo")



exports.todoCreatServices=async(todoListData)=>{
    return await todo.create(todoListData)

}

exports.todoSelectServices=async(username)=>{
     return await todo.find({username})
 
 }

exports.todoUpdateServices=async(id,todoListData)=>{

     return await todo.updateOne({id},{$set:todoListData})
 }


exports.todoStatusUpdateServices=async(id,todoStatus)=>{

    return await todo.updateOne({id},{$set:todoStatus},{runValidators:true})
}


exports.todoSelectByStatus=async(TodoStatus)=>{
    return await todo.find({TodoStatus})

}

exports.todoSelectByDate=async(fromDate,toDate)=>{
    return await todo.find({createdAt:{$gte:new Date(fromDate),$lte:new Date(toDate)}})

}



exports.removeTodoServices=async(_id)=>{

     return await todo.deleteOne({_id})
 }