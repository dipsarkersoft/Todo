 
 const {todoCreatServices,todoSelectServices,todoUpdateServices,
     todoStatusUpdateServices,todoSelectByStatus,todoSelectByDate,removeTodoServices}=

    require('../services/todo')




exports.todoCreat=async(req,res)=>{
    
     try{  

          const username=req.username
          const{TodoSubject,TodoDescription}=req.body
          const todoListData ={TodoSubject,TodoDescription,username}
          const todoList=await todoCreatServices(todoListData)

            res.status(200).json({
            status: 'success',
            message: 'Successfully create todo list',
            data: todoList
        })}
        
        catch (error) {
        res.status(500).json({
            status: 'fail',
           message:error.message
        })  
               
               
     }



}


exports.selectTodo=async(req,res)=>{
     
     try{
          const username=req.username
          const result=await todoSelectServices(username)

          res.status(200).json({
               status: 'success',
               message: 'Successfullyfind todo list',
               data: result
           })

     }
     catch(error){
          res.status(200).json({
               status: 'failed',
               message: 'TODO unavailable',
               data: error.message})
     }

}

 
exports.updateTodo=async(req,res)=>{

     try{
          const id=req.body._id
          const {TodoSubject,TodoDescription}=req.body
          const todoListData={TodoSubject,TodoDescription}


          const result=await todoUpdateServices(id,todoListData)

          res.status(200).json({
               status: 'success',
               message: ' todo list update Sucessfull'
               
           })


     }
     catch (error){console.log(error)
          res.status(401).json({
               status: 'failed',
               message: ' todo list update failed',
               data: error.message})
     }
}


exports.updateTodoStatus=async(req,res)=>{

     try{
          const id=req.body._id
          const {TodoStatus}=req.body
          const todoStatus={TodoStatus}


          const result=await todoStatusUpdateServices(id,todoStatus)

          res.status(200).json({
               status: 'success',
               message: ' todo list update Sucessfull'
               
           })


     }
     catch (error){
             res.status(401).json({
               status: 'failed',
               message: ' todo list update failed',
               data: error.message})
     }
}


exports.selectTodoByStatus=async(req,res)=>{
     
     try{
          const TodoStatus=req.body.TodoStatus
          const result=await todoSelectByStatus(TodoStatus)

          res.status(200).json({
               status: 'success',
               message: 'Successfullyfind todo list',
               data: result
           })

     }
     catch(error){
          res.status(200).json({
               
               status: 'failed',
               message: 'TODO unavailable',
               data: error.message})
     }

}

exports.selectTodoByDate=async(req,res)=>{
     
     try{
          const fromDate=req.body.fromDate
          const toDate=req.body.toDate
          
          const result=await todoSelectByDate(fromDate,toDate)

          
          res.status(200).json({
               status: 'success',
               message: 'Successfullyfind todo list',
               data: result
           })

     }


     catch(error){
          res.status(200).json({
          
               status: 'failed',
               message: 'TODO unavailable',
               data: error.message})
     }

}


exports.todORemove=async(req,res)=>{
     try{
          const {_id}=req.body
          const result=await removeTodoServices(_id) 
          res.status(200).json({
               status: 'success',
               message: ' todo delete Sucessfull'
               
           })
     }
     catch(error){
          res.status(401).json({
               status: 'success',
               message: ' todo delete failed',
               data:error.message
     })
}}
