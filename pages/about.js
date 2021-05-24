import React from 'react'
import {parseCookies} from 'nookies'

const About = () => {
    return <div>
      <h1>About</h1>

    </div>
  }
  export async function getServerSideProps(ctx){
    const cookie = parseCookies(ctx)
    const user =  cookie.user ? JSON.parse(cookie.user) : ""
    if(user.role == 'admin'){
        const {res} = ctx
        res.writeHead(302,{Location:"/"})
        res.end()
    }
  
    return {
        props:{}
    }
  }
  
  export default About