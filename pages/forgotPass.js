import React from 'react'
import {parseCookies} from 'nookies'
import Image from 'next/image'

const ForgotPass = () => {
    return( 
    <div className="container mt-5" style={{marginBottom:'5.7%'}}>
      <div className="row mt-2">
        <div className="col-md-5">
        <Image
            src="/forgot-pass.jpg"
            alt="Picture of the author"
            width={550}
            height={550}
            ></Image>    
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 mt-3"> 
        <span className="mb-2" style={{color:'#16255C',fontWeight:'bold',fontSize:55}}>Şifremi &#160;&#160;&#160;&#160;&#160;&#160;Unuttum</span>
        <form>
              
              <div className="form-outline mb-4 mt-4">
                <label className="form-label" for="form4Example1">E-Posta Adresi</label>
                <input type="text" id="form4Example1" className="form-control" />
              </div>

              <button type="submit" className="btn btn-block rounded-pill mb-4 text-white" style={{backgroundColor:'#FF5D8E',fontSize:15,fontWeight:'bold'}}>Şifremi Değiştir</button>
            </form>          
             </div>
      </div>
     

    </div>
    )
}

  export default ForgotPass