const express=require("express")
const {veryfyToken}=require("../middleware/userVerify")

const {resister,login,updateUserData,deleteUser}=require("../controllers/user")

router=express.Router()


router.post("/resisterUser",resister)
router.get("/login",login)
router.post("/updatedata",veryfyToken,updateUserData)
router.post("/deleteuser",veryfyToken,deleteUser)






module.exports=router