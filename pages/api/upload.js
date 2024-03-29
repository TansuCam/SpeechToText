import File from "../../models/File"
import multer from "multer"
import nextConnect from "next-connect"
import jwt from "jsonwebtoken"
import path from "path"
import initDB from '../../helpers/initDB'
import googleSTT from '../../helpers/googleSTT'
import mp3dur from "mp3-duration"

initDB()

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads');
        },
        filename: (req, file, cb) => {
            cb(null, 'user' + '-' + Date.now() + path.extname(file.originalname));
        }
    }),
});

const apiRoute = nextConnect({
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

const uploadMiddleware = upload.single('sound');

apiRoute.use(uploadMiddleware);

apiRoute.post((req, res) => {
    uploadMiddleware(req, res, err => {
        if (!req.file) {
            return res.send('Lütfen bir ses dosyası seçiniz.');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        const cookies = req.headers.cookie;
        const token = cookies.slice(cookies.indexOf('=') + 1, cookies.indexOf(';'));
        const user =  jwt.decode(token).userId;
        const path = req.file.destination + '\\' +  req.file.filename;
        const name = req.file.originalname;
        mp3dur(req.file.path, (err, dur) => {
            if (err) console.log("error: ", err);
            const duration = Math.floor(dur);
            const newFile = new File({
                name,
                path,
                user,
                duration
            }).save(function(err, newFile) {
                if (err) console.log(err);
                // Dosyalar ekranından yapılacak
                //googleSTT(res, newFile);
            });
        })
    });
});

export default apiRoute;

export const config = {
    api: {
      bodyParser: false,
    },
  };