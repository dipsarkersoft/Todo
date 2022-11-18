const express=require("express")
const {veryfyToken}=require("../middleware/userVerify")

router=express.Router()


const {todoCreat,selectTodo,updateTodo,updateTodoStatus,selectTodoByStatus,selectTodoByDate,todORemove}=require('../controllers/todo')





//todo
router.post("/creatTodo",veryfyToken,todoCreat)
router.get("/selectTodo",veryfyToken,selectTodo)
router.post("/updateTodo",veryfyToken,updateTodo)
router.post("/updateTodoStatus",veryfyToken,updateTodoStatus)
router.post("/selectTodoByStatus",veryfyToken,selectTodoByStatus)
router.post("/selectTodoByDate",veryfyToken,selectTodoByDate)
router.post("/todoRemove",veryfyToken,todORemove)


module.exports=router