import File from "../../models/File"
import multer from "multer"
import nextConnect from "next-connect"
import jwt from "jsonwebtoken"
import path from "path"
import initDB from '../../helpers/initDB'
import googleSTT from '../../helpers/googleSTT'

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

        const newFile = new File({
            name,
            path,
            user
        }).save(function(err, newFile) {
            if (err) console.log(err);

            console.log(newFile);
            /*newFile
            {
                transcript: 'İşleniyor...',
                _id: 60762efc8112771fc893aadb,
                name: 'oie_Frt4qvgtkrrB.png',
                path: './uploads\\user-1618358012204.png',
                user: 604f995a5e64373ee8ec19e9,
                createdAt: 2021-04-13T23:53:32.206Z,
                updatedAt: 2021-04-13T23:53:32.206Z,
                __v: 0
                }
            */
            googleSTT(res, newFile);
        });
    });
});

export default apiRoute;

export const config = {
    api: {
      bodyParser: false,
    },
  };