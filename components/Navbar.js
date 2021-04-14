import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'

const Navbar = () =>{

    const router = useRouter()

    const cookieuser = parseCookies()
    const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""

    function isActive(route){
        if(route==router.pathname){
            return "active"
        }
        else return ""
    }

    return(
               
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark " style={{height:80, backgroundImage:'linear-gradient(114deg, #008bd1, #1149b0)'}}>
            <Link href="/"><a className="navbar-brand"><em className="fas fa-microphone-alt mr-2" style={{fontSize: "1.8em"}}></em> Speech To Text</a></Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul className="navbar-nav ml-auto">
                
            {user.role != 'admin' &&
            <>
                <li className={isActive("/about")} className="nav-item mr-3" >
                <Link href="/about"><a className="nav-link" >
                    <em className="fas fa-users"></em> Hakkımızda
                    <span className="sr-only">(current)</span>
                </a></Link>
                </li>
                <li className={isActive("/price")}  className="nav-item mr-3"><Link href="/price">
               <a className="nav-link">
                    <em className="fas fa-lira-sign"></em> Fiyatlar</a></Link>
                </li>
            </>
            }
            {user.role == 'admin' &&
            <>
                <span className={isActive("/admin/settings")} className="nav-item mr-3" >
                <Link href="/admin/settings"><a className="nav-link" >
                    <em className="far fa-edit"></em> Düzenle
                    <span className="sr-only">(current)</span>
                </a></Link>
                </span>
                <li className="nav-item dropdown">
                    <span style={{cursor:'pointer'}} className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <em className="fas fa-user-cog"></em> Yönetici </span>
                    <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                        <button className="dropdown-item" 
                            onClick={()=>{
                                cookie.remove('token')
                                cookie.remove('user')
                                router.push('/')
                          }}
                        ><em className="fas fa-sign-out-alt"></em> Çıkış</button>
                    </div>
                    </li>
            </>
            }
            {user.role == 'user' &&
            <>
                <li className="nav-item dropdown mr-3">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <em className="fas fa-user"></em> Profil </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <Link href="/myfolder"><a className="dropdown-item"><em className="fas fa-folder mr-2"></em> Dosyalarım</a></Link> 
                    <button className="dropdown-item" style={{marginLeft:-14}}
                        onClick={()=>{
                            cookie.remove('token')
                            cookie.remove('user')
                            router.push('/')
                        }}
                    ><em className="fas fa-sign-out-alt mr-2"></em> Çıkış</button>
                </div>
                </li>
            </>
            }
    </ul>
  </div>
</nav>
    )
}

export default Navbar