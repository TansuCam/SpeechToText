import {useState} from 'react'
import baseUrl from '../helpers/baseUrl' 
import { useRouter } from 'next/router'

const Register = () =>{
    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const router  = useRouter()

    const userSignup = async (e) =>{
        e.preventDefault()
        const res =   await fetch(`${baseUrl}/api/signup`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                surname,
                email,
                password
            })
        })
        const res2 = await res.json()
        if(res2.error){
            //Başarısız olduğuna dair ekranda mesaj gelecek
        }else{
            //Başarılı olduğuna dair ekranda mesaj gelecek
            router.push('/upload')
        }
    }

    return(
        <div className="Login">
        <div className=" pt-2 pl-2 pr-2">
        <form onSubmit={(e)=>userSignup(e)}>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
                    <label className="form-label" for="form3Example1">First name</label>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control"
                    value={surname} 
                    onChange={(e)=>setSurname(e.target.value)} />
                    <label className="form-label" for="form3Example2">Last name</label>
                </div>
                </div>
            </div>

            
            <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}/>
                <label className="form-label" for="form3Example3">Email address</label>
            </div>

            
            <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}/>
                <label className="form-label" for="form3Example4">Password</label>
            </div>

           

            <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

            </form>
        </div>
        </div>

    )}
export default Register