import Layout from '../components/Layout'
import React from 'react'
function MyApp({Component, pagePropps}){
 
        return(
        <Layout title=" | SpeechToText">
              <Component {...pagePropps}/>
        </Layout>
        
  
    )


}
export default MyApp