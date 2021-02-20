import React from 'react'
import Link from 'next/link'
import Login from '../components/Login'
import Register from '../components/Register'
import Image from 'next/image'

const HomePage = () => {
    return(
      <div className="index mt-5">
          <div className="container pt-5 border shadow">
          
              <ul class="nav nav-pills mb-3" style={{marginLeft: '30%'}} id="pills-tab" role="tablist">
                <li class="nav-item ">
                  <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">GIRIS YAP</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link float-lg-end" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">KAYDOL</a>
                </li>
            </ul>
        
            <div class="tab-content pl-5 pr-5" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Login/></div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Register/></div>
            </div>

            <Link href="/upload"><button className="mt-5">Yükleme Sayfasına Git</button></Link>

          </div>
          <div className="mt-5 img">
            <Image
            src="/speech.png"
            alt="Picture of the author"
            width={150}
            height={150}
            ></Image>
            <div className="card indexcard">
              <div className="p-5">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li> 
                <li> Praesent egestas nibh at dui egestas, tincidunt tempor ante aliquet. </li>
                <li>Quisque commodo scelerisque mi, eget lobortis nunc ornare aliquet.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li> 
                <li> Praesent egestas nibh at dui egestas, tincidunt tempor ante aliquet. </li>
                <li>Quisque commodo scelerisque mi, eget lobortis nunc ornare aliquet.</li>
                </div>
            </div>
          </div>
    </div>
    )
  }
  
  export default HomePage
