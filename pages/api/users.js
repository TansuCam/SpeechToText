import initDB from '../../helpers/initDB'
import Files from '../../models/File'

initDB()

export default (req,res)=>{
   
    Files.find().populate('user').exec().then(users=>{
        res.status(200).json(users)
    })

}