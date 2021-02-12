import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'

const Navbar = () =>{

    const router = useRouter()
    function isActive(route){
        if(route==router.pathname){
            return "active"
        }
        else return ""
    }

    return(
               
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark blue-gradient" style={{height:80}}>
            <Link href="/"><a className="navbar-brand"><em className="fas fa-microphone-alt mr-2" style={{fontSize: "1.8em"}}></em> Speech To Text</a></Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul className="navbar-nav ml-auto">
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
                <li className="nav-item dropdown mr-3">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <em className="fas fa-user"></em> Profil </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                  <Link href="/myfolder"><a className="dropdown-item"><em className="fas fa-folder mr-2"></em> Dosyalarım</a></Link> 
                    <a className="dropdown-item" href="#"><em className="fas fa-sign-out-alt mr-2"></em> Çıkış</a>
                </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar