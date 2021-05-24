import React from 'react'
import {parseCookies} from 'nookies'

const Settings = () => {
    return( 
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-5">
            <form>
              
              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example1">Telefon</label>
                <input type="text" id="form4Example1" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example1">E-posta Adresi</label>
                <input type="text" id="form4Example1" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example2">-----</label>
                <input type="email" id="form4Example2" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example3">Hakkımızda</label>
                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
              </div>


              <button type="submit" className="btn btn-primary btn-block mb-4">Güncelle</button>
            </form>          
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5"> 
        <form>
              
              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example1">Basit Plan Ücreti</label>
                <input type="text" id="form4Example1" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example1">Özel Plan Ücreti</label>
                <input type="text" id="form4Example1" className="form-control" />
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">Güncelle</button>
            </form>          
             </div>
      </div>
     

    </div>
    )
}
  export async function getServerSideProps(ctx){
    const {token} = parseCookies(ctx)
    const cookie = parseCookies(ctx)
    const user =  cookie.user ? JSON.parse(cookie.user) : ""
    if(!token || user.role == 'user' || user.role == '' ){
        const {res} = ctx
        res.writeHead(302,{Location:"/"})
        res.end()
    }
  
  
    return {
        props:{}
    }
  }

  export default Settings