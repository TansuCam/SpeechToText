import File from "../../models/File"
import initDB from '../../helpers/initDB'

export default (req, res) => {
    const _id = req.body._id;
    initDB();
    File.deleteOne({_id}, (err, son)=> {
        if (err) {
            res.status(500).send("An Error Occurred");
        } else {
            res.status(200).send(son.deletedCount);
        }
    })
}

