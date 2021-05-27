const Price = () =>{

    return (
  <div>
      <div className="section section-md py-5">
        <div className="container">
            <div className="row mt-4">

                         <div className="col-lg-4 mt-5" > 
                            <div className="card mt-1">
                                <div className="card text-center">
                                    <header className="card-header border-0 text-white" style={{backgroundImage:'linear-gradient(-45deg, #4d93d5, #1a466f)'}}>
                                        <div className="pricing-value border-white p-2">
                                        <h1 className="font-weight-bold">100 Token</h1>
                                        <h3 className=" font-medium">₺10</h3>
                                           
                                        </div>
                                    </header>
                                    <div className="card-body p-4">
                                        <ul className="list-group mb-4 p-2">
                                        <h5 className="p-4">Sistemde kullanabilmeniz için <b>100 Token</b> hesabınıza tanımlanır.</h5>
                                        </ul>
                                        <button type="button" className="btn btn-block font-weight-bold animate-up-2 text-white rounded-pill"
                                            tabindex="0" style={{backgroundImage:'linear-gradient(-45deg, #4d93d5, #1a466f)'}}><span className="fas fa-coins fa-lg  mr-3"></span>Token Al</button>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4" > 
                            <div className="card mt-1">
                                <div className="card text-center">
                                    <header className="card-header border-0 text-white" style={{backgroundImage:'linear-gradient(-45deg, #85468c, #241326)'}}>
                                       
                                        <div className="pricing-value border-white p-2 ">
                                        <h1 className="font-weight-bold">1000 Token</h1>
                                        <h3 className=" font-medium">₺85</h3>
                                        </div>
                                    </header>
                                    <div className="card-body p-4">
                                        <ul className="list-group mb-4 p-2">
                                        <h5 className="p-4">Sistemde kullanabilmeniz için <b>1000 Token</b> hesabınıza tanımlanır.</h5>
                                        </ul>
                                        <button type="button" className="btn btn-block font-weight-bold animate-up-2 text-white rounded-pill"
                                            tabindex="0" style={{backgroundImage:'linear-gradient(-45deg, #85468c, #241326)'}}><span className="fas fa-coins fa-lg mr-3"></span>Token Al</button>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 mt-5" > 
                            <div className="card mt-1">
                                <div className="card text-center">
                                    <header className="card-header border-0 text-white" style={{backgroundImage:'linear-gradient(-45deg, #4d93d5, #1a466f)'}}>
                                       
                                        <div className="pricing-value border-white p-2">
                                        <h1 className="font-weight-bold">500 Token</h1>
                                        <h3 className=" font-medium">₺45</h3>
                                        </div>
                                    </header>
                                    <div className="card-body p-4">
                                       <h5 className="p-4">Sistemde kullanabilmeniz için <b>500 Token</b> hesabınıza tanımlanır.</h5>
                                        <button type="button" className="btn btn-block font-weight-bold animate-up-2 text-white rounded-pill"
                                            tabindex="0" style={{backgroundImage:'linear-gradient(-45deg, #4d93d5, #1a466f)'}}><span className="fas fa-coins fa-lg mr-3"></span>Token Al</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>      
            </div>

                
      </div> </div>
    )
}
export default Price