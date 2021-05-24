import Link from 'next/link'
import Router from 'next/router';
import baseUrl from '../helpers/baseUrl'

const Upload = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
       /* fetch(`${baseUrl}/api/upload`,{
            method: 'POST',
            body: data,
        }).then(Router.push('/myfolder'));*/
    }
    return(

               
                <div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" style={{display: "none"}}>
                          <a className="nav-link disabled" id="link-tab" data-toggle="tab" href="#link" role="tab" aria-controls="link"
                            aria-selected="true">Youtube Bağlantısı</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" id="upload-tab" data-toggle="tab" href="#upload" role="tab" aria-controls="upload"
                            aria-selected="false">Dosya Yükle</a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="link" role="tabpanel" aria-labelledby="link-tab">
                            <form className="border border-light p-5">

                                <div className="text-center">
                                    <p className="h4 mb-4">Youtube Bağlantısı</p>
                                    <p>Youtube video bağlantısını giriniz.</p>
                                </div>
                            
                                <input className="form-control mb-4" id="linkInput" type="text" placeholder="https://youtu.be/"/>
                            
                              <Link href="/result"><button className="btn btn-info btn-block" type="submit"><a style={{textDecoration: "none", color:"white"}}>Gönder</a></button></Link>  
                            </form>
                        </div>
                        <div className="tab-pane fade show active" id="upload" role="tabpanel" aria-labelledby="upload-tab">
                            <form className="border border-light p-5" onSubmit={(e) => handleSubmit(e)}>

                                <div className="text-center">
                                    <p className="h4 mb-4">Dosya Yükle</p>
                                    <p>Ses ya da video dosyanızı mp3/mp4 formatında yükleyiniz.</p>
                                </div>
                            
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Yükle</span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="fileInput" name="sound" aria-describedby="fileInput"/>
                                        <label className="custom-file-label" for="fileInput">Dosya Adı</label>
                                    </div>
                                </div>
                            
                                <button type="submit" className="btn btn-primary btn-block mb-4" data-toggle="modal" data-target="#exampleModalCenter">Transkript Al</button>
                            </form>
                        </div>
                      </div>

                    {/*Modal*/}
                    <div class="modal fade"  id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered"  role="document">
                        <div class="modal-content" style={{background: 'linear-gradient(114deg, #008bd1, #1149b0)'}}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <div>
                                <div class="row">
                                <div class="col-md-7 ">
                                    <h5 className="white-text"><strong>Gelişmiş Seçenek</strong></h5>
                                    <div className="ml-3">
                                    <p><i class="fas fa-check-circle mr-2"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <p><i class="fas fa-check-circle mr-2"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                                <div class="col-md-5"><Link href="/myfolder"><button className="btn btn-secondary mt-5 "  >40 Token Öde</button></Link></div>
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <div class="row">
                                <div class="col-md-7 ">
                                    <h5 className="white-text"><strong>Standart Seçenek</strong></h5>
                                    <div className="ml-3">
                                    <p><i class="fas fa-check-circle mr-2"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <p><i class="fas fa-check-circle mr-2"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                                <div class="col-md-5"><button className="btn btn-warning mt-5">40 Token Öde</button></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/*Modal*/}
                </div>
             

    )}

export default Upload