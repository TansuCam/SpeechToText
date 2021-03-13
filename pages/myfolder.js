

const MyFolder = () => {
    return (
    <div>
      <div class="container limiter mt-5">
            <blockquote class="blockquote bq-primary" style={{marginLeft: 11}}>
                <h3 class="bq-title">Dosyalarınız Bizimle Güvende <i class="fas fa-angle-double-right"></i></h3>
              </blockquote>
            <div>
                <div class="wrap-table100 mt-5">
                    <div class="table100 ver1 m-b-110">
                        <div class="table100-head">
                            <table>
                                <thead>
                                    <tr class="row100 head">
                                        <th class="cell100 column1"></th>
                                        <th class="cell100 column2">Dosya Adı</th>
                                        <th class="cell100 column3">Süre</th>
                                        <th class="cell100 column4">Tarih</th>
                                        <th class="cell100 column5">Durum</th>
                                        
                                    </tr>
                                </thead>
                            </table>
                        </div>
    
                        <div class="table100-body js-pscroll">
                            <table>
                                <tbody>
                                    <tr class="row100 body">
                                        <td class="cell100 column1">
                                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"></button>
                                          
                                          <div class="dropdown-menu" style={{zIndex: 99}}>
                                            <a class="dropdown-item" href="#">Görüntüle</a>
                                            <a class="dropdown-item" href="#">İndir</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#" style={{backgroundColor: 'red', color: 'white'}}>Sil</a>
                                          </div>
                                        </td>
                                        <td class="cell100 column2">Ses Dosyası001</td>
                                        <td class="cell100 column3">35dk</td>
                                        <td class="cell100 column4">22.11.2020 / 20.01</td>
                                        <td class="cell100 column5">Yüklendi</td>
                                       
                                    </tr>
                                    <tr class="row100 body">
                                        <td class="cell100 column1">
                                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"></button>
                                          
                                          <div class="dropdown-menu" style={{zIndex: 99}}>
                                            <a class="dropdown-item" href="#">Görüntüle</a>
                                            <a class="dropdown-item" href="#">İndir</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#" style={{backgroundColor: 'red', color: 'white'}}>Sil</a>
                                          </div>
                                        </td>
                                        <td class="cell100 column2">Ses Dosyası001</td>
                                        <td class="cell100 column3">35dk</td>
                                        <td class="cell100 column4">22.11.2020 / 20.01</td>
                                        <td class="cell100 column5">Yüklendi</td>
                                       
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>   
                    </div>
                    </div>   

    </div>
    )
  }

  
  export default MyFolder