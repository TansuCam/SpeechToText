
const Login = () =>{
    return(
        <div>
        <div className="pt-2 pl-2 pr-2">
        <form>
  
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="form-label" for="form2Example1">Email address</label>
            </div>


            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="form-label" for="form2Example2">Password</label>
            </div>


            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                    checked
                    />
                    <label className="form-check-label" for="form2Example3"> Remember me </label>
                </div>
                </div>

                <div className="col">
                
                <a href="#!">Forgot password?</a>
                </div>
            </div>

            
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

            </form>
        </div>
        </div>

    )}
export default Login