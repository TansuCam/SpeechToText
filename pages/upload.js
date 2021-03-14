import React from 'react'
import Uploads from '../components/Upload'
import Card from '../components/Card'
import {parseCookies} from 'nookies'

const Upload = () => {
    return <div className="container" style={{marginTop:100}}>
      <div className="row">
      <div className="col-lg-1"></div>
      <div  className="col-lg-6"><Uploads/></div>
      <div  className="col-lg-5"><Card/></div>
    </div>
    </div>
  }
  
  export async function getServerSideProps(ctx){
    const {token} = parseCookies(ctx)
    if(!token){
        const {res} = ctx
        res.writeHead(302,{Location:"/"})
        res.end()
    }
  
    return {
        props:{}
    }
  }

  export default Upload