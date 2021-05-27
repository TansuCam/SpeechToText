import React from 'react'
import DataList from '../../components/DataList'
import {parseCookies} from 'nookies'

const Index = () => {
    return ( 
      <div>
            <DataList/>
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

    const res = await fetch('http://localhost:3000/api/users')
    const data = await res.json()

  
    return {
        props:{
          files: data
        }
    }
  }

  

  export default Index