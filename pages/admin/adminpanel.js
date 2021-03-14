import React from 'react'
import {parseCookies} from 'nookies'

const Index = () => {
    return (  

    <div className="container mt-5">
      
     <table class="table align-middle">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Adı</th>
      <th scope="col">Soyadı</th>
      <th scope="col">Email</th>
      <th scope="col">Kullanım</th>
      <th scope="col">Kalan</th>
      <th scope="col">Ücret</th>
      <th scope="col">İşlem</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Sit</td>
      <td>Amet</td>
      <td>Amet</td>
      <td>Amet</td>
      <td>Amet</td>
      <td>Amet</td>
      <td>
        <button type="button" class="btn btn-danger btn-sm px-3">
          <i class="fas fa-times"></i>
        </button>
      </td>
    </tr>
    
  </tbody>
</table>

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
  
  
    return {
        props:{}
    }
  }

  export default Index