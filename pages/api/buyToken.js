import initDB from '../../helpers/initDB'
import User from '../../models/User'

initDB()
export default async (req,res)=>{
    const {id, value} = JSON.parse(req.body);
    const user = await User.findById(id);
    user.token += Number(value);
    const result = await User.updateOne({_id: user._id}, user);
    res.json(JSON.stringify(result.n));
}