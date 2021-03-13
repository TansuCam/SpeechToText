import Layout from '../components/Layout'
import React from 'react'
function MyApp({Component, pagePropps}){
 
        return(
        <Layout>
              <Component {...pagePropps}/>
        </Layout>
        
  
    )


}
export default MyApp