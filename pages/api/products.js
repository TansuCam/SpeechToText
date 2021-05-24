import initDB from '../../helpers/initDB'

initDB()
export default (req,res)=>{
    res.json({message:"hello world!"})
}