import { parseCookies } from 'nookies'
import jwt from "jsonwebtoken"
import File from "../models/File"
import initDB from "../helpers/initDB"
import baseUrl from "../helpers/baseUrl"
import Router from 'next/router'

const delFile = (_id) => {
    fetch(`${baseUrl}/api/delFile`,{
        method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                _id
            })
    }).then(Router.reload())
}

const MyFolder = ({ files, user }) => {
    return (
<<<<<<< HEAD
        <div className="container limiter mt-5" style={{ marginBottom: '23%' }}>
=======
        <div className="container limiter mt-5" style={{ marginBottom: '23%' }} >
>>>>>>> 166e3eca1d4cfd426ceb1a863c64881280a04e28
            <blockquote className="blockquote bq-primary" style={{ marginLeft: 11 }}>

                <h3 className="bq-title">Dosyalarınız Bizimle Güvende {user.name} <i className="fas fa-angle-double-right"></i></h3>
            </blockquote>
            <div>
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Dosya Adı</th>
                            <th scope="col">Tarih</th>
                            <th scope="col">Sonuç</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            files.map((file) => {
                                return (<tr>
                                    <td>{file.name}</td>
                                    <td>{file.createdAt}</td>
                                    <td>{file.transcript}</td>
                                    <td><button type="button" className="btn btn-sm btn-danger" value={file._id} onClick={(e) => delFile(e.target.value)}>SİL</button></td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>


    )
}

export async function getServerSideProps(ctx) {
    initDB()
    const { token } = parseCookies(ctx)
    const cookie = parseCookies(ctx)
    const user = cookie.user ? JSON.parse(cookie.user) : ""
    if (!token || user.role == 'admin' || user.role == '') {
        const { res } = ctx
        res.writeHead(302, { Location: "/" })
        res.end()
    } else if (token) {
        const usr = jwt.decode(token).userId;
        const data = await File.find({ user: usr, hidden: {$ne: true} }, '_id name createdAt transcript', { sort: { createdAt: -1 } }).exec();
        const files = JSON.parse(JSON.stringify(data));
        return {
            props: {
                files,
                user
            }
        }
    }
}

export default MyFolder