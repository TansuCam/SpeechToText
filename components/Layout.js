import Navbar from './Navbar'
import Head from 'next/head'

const layout = ({children}) =>{
    return(
        <>
        <Head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet"/>
            <link rel="stylesheet" href="./style.css"/>

          

        </Head>
        <Navbar/>
        
       <div className="container"> </div>
            {children} 
            
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>  </>
        
    
       
    )
}
export default layout