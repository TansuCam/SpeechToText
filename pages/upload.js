import React from 'react'
import Uploads from '../components/Upload'
import Card from '../components/Card'
import {parseCookies} from 'nookies'

const Upload = () => {
    return (<div className="container" style={{marginTop:100,marginBottom:'10%'}}>
      <div className="row">
      <div className="col-lg-1"></div>
      <div  className="col-lg-6"><Uploads/></div>
      <div  className="col-lg-5"><Card/></div>
    </div>
    </div>)
  }
  
  export async function getServerSideProps(ctx){
    const {token} = parseCookies(ctx)
    const cookie = parseCookies(ctx)
    const user =  cookie.user ? JSON.parse(cookie.user) : ""
    if(!token || user.role == 'admin' || user.role == '' ){
        const {res} = ctx
        res.writeHead(302,{Location:"/"})
        res.end()
    }
  
    return {
        props:{}
    }
  }

  export default Upload