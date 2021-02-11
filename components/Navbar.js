const Navbar = () =>{
    return(
               
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark blue-gradient" style={{height:80}}>
             <a class="navbar-brand" href="#"><em class="fas fa-microphone-alt mr-2" style={{fontSize: "1.8em"}}></em> Speech To Text</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active mr-3">
                <a className="nav-link" href="#">
                    <em className="fas fa-users"></em> Hakkımızda
                    <span className="sr-only">(current)</span>
                </a>
                </li>
                <li className="nav-item mr-3">
                <a className="nav-link" href="#">
                    <em className="fas fa-lira-sign"></em> Fiyatlar</a>
                </li>
                <li className="nav-item dropdown mr-3">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <em className="fas fa-user"></em> Profil </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                    <a className="dropdown-item" href="myfolder.html"><em class="fas fa-folder mr-2"></em> Dosyalarım</a>
                    <a className="dropdown-item" href="#"><em class="fas fa-sign-out-alt mr-2"></em> Çıkış</a>
                </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar