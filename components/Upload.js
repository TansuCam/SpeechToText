import Link from 'next/link'

const Upload = () =>{
    return(

               
                <div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="link-tab" data-toggle="tab" href="#link" role="tab" aria-controls="link"
                            aria-selected="true">Youtube Bağlantısı</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="upload-tab" data-toggle="tab" href="#upload" role="tab" aria-controls="upload"
                            aria-selected="false">Dosya Yükle</a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="link" role="tabpanel" aria-labelledby="link-tab">
                            <form className="border border-light p-5">

                                <div className="text-center">
                                    <p className="h4 mb-4">Youtube Bağlantısı</p>
                                    <p>Youtube video bağlantısını giriniz.</p>
                                </div>
                            
                                <input className="form-control mb-4" id="linkInput" type="text" placeholder="https://youtu.be/"/>
                            
                              <Link href="/result"><button className="btn btn-info btn-block" type="submit"><a style={{textDecoration: "none", color:"white"}}>Gönder</a></button></Link>  
                            </form>
                        </div>
                        <div className="tab-pane fade" id="upload" role="tabpanel" aria-labelledby="upload-tab">
                            <form className="border border-light p-5">

                                <div className="text-center">
                                    <p className="h4 mb-4">Dosya Yükle</p>
                                    <p>Ses ya da video dosyanızı mp3/mp4 formatında yükleyiniz.</p>
                                </div>
                            
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Yükle</span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="fileInput" aria-describedby="fileInput"/>
                                        <label className="custom-file-label" for="fileInput">Dosya Adı</label>
                                    </div>
                                </div>
                            
                               <Link href="/result"><a  className="btn btn-info btn-block"  style={{textDecoration: "none", color:"white"}}>Gönder</a></Link> 
                            </form>
                        </div>
                      </div>
                </div>
             

    )}

export default Upload