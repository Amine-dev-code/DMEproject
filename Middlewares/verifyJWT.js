const jwt=require('jsonwebtoken')
require('dotenv').config()
//const cookieParser = require('cookie-parser');

const verifyJWT=async(req,res,next)=>{
const token=req.cookies.jwt;
//const authheader=req.headers['authorization']
if(!token)
res.sendStatus(401);
//const token=authheader.split(' ')[1];
jwt.verify(token,process.env.TOKEN_SECRET,(err,decoded)=>{
    if(err) return res.sendStatus(403)
    req.user=decoded.email;
    next()
})

}

module.exports=verifyJWT