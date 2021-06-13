import React from 'react'
import {parseCookies} from 'nookies'
import PriceCards from '../components/Price'
import User from '../models/User'

const Price = (props) => {
    return (
       <PriceCards props={props} />
    
    )
  }
  export async function getServerSideProps(ctx){
    const cookie = parseCookies(ctx)
    const user =  cookie.user ? JSON.parse(cookie.user) : ""
    if(user.role == 'admin'){
        const {res} = ctx
        res.writeHead(302,{Location:"/"})
        res.end()
    }
    const userstoken = await User.findById(user._id)
    return {
      props: {
        id: user._id,
        tokenAmount: userstoken.token,
      }
    }
  }
  
  export default Price