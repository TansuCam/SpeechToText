
const Login = () =>{
    return(
        <div className="Login">
        <div className=" pt-2 pl-2 pr-2">
        <form>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" for="form3Example1">First name</label>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" for="form3Example2">Last name</label>
                </div>
                </div>
            </div>

            
            <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" for="form3Example3">Email address</label>
            </div>

            
            <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" for="form3Example4">Password</label>
            </div>

           

            <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

            <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-github"></i>
                </button>
            </div>
            </form>
        </div>
        </div>

    )}
export default Login