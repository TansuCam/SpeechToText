import {useState} from 'react'
import baseUrl from '../helpers/baseUrl'
import cookie from 'js-cookie'
import {useRouter} from 'next/router'
import {parseCookies} from 'nookies'

const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router  = useRouter()
    const userLogin = async (e)=>{
        e.preventDefault()
        const res =  await fetch(`${baseUrl}/api/login`,{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const res2 = await res.json()
        if(res2.error){
            //Başarısız olduğuna dair ekranda mesaj gelecek
        }else{
            //Başarılı olduğuna dair ekranda mesaj gelecek
            console.log(res2)
            cookie.set('token',res2.token)
            cookie.set('user',res2.user)
            const cookieuser = parseCookies()
            const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""
            if(user.role == 'user'){
                router.push('/upload')
            }else if(user.role == 'admin'){
                router.push('/admin/adminpanel')
            }

        }
    }
    return(
        <div>
        <div className="pt-2 pl-2 pr-2">
        <form onSubmit={(e)=>userLogin(e)}>
  
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <label className="form-label" for="form2Example1">Email address</label>
            </div>


            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)} />
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