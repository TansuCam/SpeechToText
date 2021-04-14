import {parseCookies} from 'nookies'
import jwt from "jsonwebtoken"
import File from "../models/File"
import initDB from '../helpers/initDB'


const MyFolder = ({ files }) => {
    return (
      <div className="container limiter mt-5" style={{marginBottom:'23%'}}>
            <blockquote className="blockquote bq-primary" style={{marginLeft: 11}}>
    
                <h3 className="bq-title">Dosyalarınız Bizimle Güvende  <i className="fas fa-angle-double-right"></i></h3>
              </blockquote>
            <div>
             <table className="table align-middle">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Dosya Adı</th>
                    <th scope="col">Tarih</th>
                    <th scope="col">Sonuç</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                    <th scope="row">1</th>
                    <td>Sit</td>
                    <td>Amet</td>
                    <td>Amet</td>
                    <td>
                        <div className="btn-group" style={{marginTop: -10}}>
                            <button
                                type="button"
                                className="btn btn-sm btn-danger dropdown-toggle"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Action
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            </div>
                    </td>
                    </tr>
                    
                    {files}
                    
                </tbody>
                </table>
                    </div>
                    </div>   

    
    )
  }

  export async function getServerSideProps(ctx){
    initDB()
    const {token} = parseCookies(ctx)
    const cookie = parseCookies(ctx)
    const user =  cookie.user ? JSON.parse(cookie.user) : ""
    if(!token || user.role == 'admin' || user.role == '' ){
        const {res} = ctx
        res.writeHead(302,{Location:"/"})
        res.end()
    } else if (token) {
        const user =  jwt.decode(token).userId;
        const data = await File.find({user}, '-_id name createdAt transcript').exec();
        const files = JSON.parse(JSON.stringify(data));
        return {
            props:{ files }
        }
    }
  }

  export default MyFolder