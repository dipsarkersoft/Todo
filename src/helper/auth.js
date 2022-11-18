const jwt=require("jsonwebtoken")



exports.createToken = (user)=>{


     const payload = {
        "_id":user._id,
         "name":user.name,
         'email': user.email,
         'number': user.number,
         'username': user.username,
     };
 
     return jwt.sign(payload, process.env.TOKEN_SECRET, {
         expiresIn: '1h'
     });
 }