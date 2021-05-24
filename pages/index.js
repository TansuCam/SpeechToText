import React from 'react'
import Link from 'next/link'
import Login from '../components/Login'
import Register from '../components/Register'
import Image from 'next/image'

const HomePage = () => {
    return(
      <div className="index mt-5">
          <div className="container pt-5  ">
          
              <ul className="nav nav-pills mb-3" style={{marginLeft: '30%'}} id="pills-tab" role="tablist">
                <li className="nav-item ">
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">GIRIS YAP</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link float-lg-end" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">KAYDOL</a>
                </li>
            </ul>
        
            <div className="tab-content pl-5 pr-5" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Login/></div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Register/></div>
            </div>

          </div>
          <div className="img">
            <Image
            src="/indexpage.png"
            alt="Picture of the author"
            width={500}
            height={500}
            ></Image>
           
          </div>
    </div>
    )
  }
  
  export default HomePage
