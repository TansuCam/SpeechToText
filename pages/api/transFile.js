import User from "../../models/User";
import File from "../../models/File";
import initDB from "../../helpers/initDB";
import googleSTT from "../../helpers/googleSTT";

initDB()
export default async (req,res)=>{
    const {fileId, userId} = req.body;
    
    const user = await User.findById(userId);
    const file = await File.findById(fileId);

    if (file.duration > user.token) {
        res.json({ error: "Yetersiz token." })
    } else {
        user.token -= file.duration;
        await User.updateOne({_id: userId}, user);
        const result = googleSTT(res, file);
    }
}