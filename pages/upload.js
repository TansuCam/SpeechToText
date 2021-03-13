import React from 'react'
import Uploads from '../components/Upload'
import Card from '../components/Card'

const Upload = () => {
    return <div className="container" style={{marginTop:100}}>
      <div className="row">
      <div className="col-lg-1"></div>
      <div  className="col-lg-6"><Uploads/></div>
      <div  className="col-lg-5"><Card/></div>
    </div>
    </div>
  }
  
  export default Upload