import {parseCookies} from 'nookies'
/* dosya adı süre tarih durum */
const MyFolder = () => {
    return (
    
      <div class="container limiter mt-5">
            <blockquote class="blockquote bq-primary" style={{marginLeft: 11}}>
                <h3 class="bq-title">Dosyalarınız Bizimle Güvende <i class="fas fa-angle-double-right"></i></h3>
              </blockquote>
            <div>
             <table class="table align-middle">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Dosya Adı</th>
                    <th scope="col">Süre</th>
                    <th scope="col">Tarih</th>
                    <th scope="col">Durum</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                    <th scope="row">1</th>
                    <td>Sit</td>
                    <td>Amet</td>
                    <td>Amet</td>
                    <td>
                        <div class="btn-group" style={{marginTop: -10}}>
                            <button
                                type="button"
                                class="btn btn-sm btn-danger dropdown-toggle"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            </div>
                    </td>
                    </tr>

                    
                    
                </tbody>
                </table>
                    </div>
                    </div>   

    
    )
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

  export default MyFolder