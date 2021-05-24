import initDB from '../../helpers/initDB'
import User from '../../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

initDB()

export default async (req,res)=>{
    const {email,password} = req.body
    try{
        if(!email || !password){
           return res.status(422).json({error:"Lütfen tüm alanları doldurunuz."})
        }    
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({error:"Bu mail adresiyle bir kullanıcı bulunmamakta."})
        }
        const doMatch =  await bcrypt.compare(password,user.password)
        if(doMatch){
            const token =  jwt.sign({userId:user._id},""+process.env.JWT_SECRET,{
                 expiresIn:"24h"
             })
             const {name,role,email} = user
             res.status(201).json({token,user:{name,role,email}})
         }else{
            return res.status(401).json({error:"Email ya da şifre eşleşmiyor."})
         }
        }catch(err){
            console.log(err)
        }
}