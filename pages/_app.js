import Layout from '../components/Layout'
function MyApp({Component, pagePropps}){
    return( 
        <Layout>
              <Component {...pagePropps}/>
        </Layout>
  
    )
}
export default MyApp