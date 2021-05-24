import initDB from '../../helpers/initDB'
import User from '../../models/User'
import bcrypt from 'bcryptjs'


initDB()

export default async (req,res)=>{
    const {name,surname,email,password} = req.body
    try{
        if(!name || !surname || !email || !password){
           return res.status(422).json({error:"Lütfen tüm alanları doldurunuz."})
        }    
        const user = await User.findOne({email})
        if(user){
            return res.status(422).json({error:"Bu mail adresiyle bir kullanıcı bulunmakta."})
        }  
        const hashedPassword= await bcrypt.hash(password,12)  
        const newUser = await new User({
            name,
            surname,
            email,
            password:hashedPassword
        }).save()
        console.log(newUser)
        res.status(201).json({message:"Kayıt Başarılı"})

    }catch(err){
        console.log(err)
    }
}