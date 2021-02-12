import Link from 'next/link'

const Upload = () =>{
    return(
    <div>
    <div class="container">
            <div class="row" style={{marginTop: 100}}>
                <div class="col-lg-1"></div>
                <div class="col-lg-6">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" id="link-tab" data-toggle="tab" href="#link" role="tab" aria-controls="link"
                            aria-selected="true">Youtube Bağlantısı</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" id="upload-tab" data-toggle="tab" href="#upload" role="tab" aria-controls="upload"
                            aria-selected="false">Dosya Yükle</a>
                        </li>
                      </ul>
                      <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="link" role="tabpanel" aria-labelledby="link-tab">
                            <form class="border border-light p-5">

                                <div class="text-center">
                                    <p class="h4 mb-4">Youtube Bağlantısı</p>
                                    <p>Youtube video bağlantısını giriniz.</p>
                                </div>
                            
                                <input class="form-control mb-4" id="linkInput" type="text" placeholder="https://youtu.be/"/>
                            
                              <Link href="/result"><button class="btn btn-info btn-block" type="submit"><a style={{textDecoration: "none", color:"white"}}>Gönder</a></button></Link>  
                            </form>
                        </div>
                        <div class="tab-pane fade" id="upload" role="tabpanel" aria-labelledby="upload-tab">
                            <form class="border border-light p-5">

                                <div class="text-center">
                                    <p class="h4 mb-4">Dosya Yükle</p>
                                    <p>Ses ya da video dosyanızı mp3/mp4 formatında yükleyiniz.</p>
                                </div>
                            
                                <div class="input-group mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Yükle</span>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="fileInput" aria-describedby="fileInput"/>
                                        <label class="custom-file-label" for="fileInput">Dosya Adı</label>
                                    </div>
                                </div>
                            
                               <Link href="/result"><a  class="btn btn-info btn-block"  style={{textDecoration: "none", color:"white"}}>Gönder</a></Link> 
                            </form>
                        </div>
                      </div>
                </div>
                </div>
                </div> </div>

    )}
export default Upload