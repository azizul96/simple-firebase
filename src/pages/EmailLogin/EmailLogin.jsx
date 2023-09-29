import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const EmailLogin = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef(null)
    const auth = getAuth()

    

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        setError('')
        setSuccess('')

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setSuccess(result.user)
        })
        .catch(error =>{
            setError(error.message)
        })

    }
    const handleResetEmail = () =>{
        const email = emailRef.current.value
        if(!email){
            alert ('Please provide your email')
        }
        // eslint-disable-next-line no-useless-escape
        else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            alert("You have entered an invalid email address!")
        }
        
    }
    return (
        <div>
            <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" ref={emailRef} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a onClick={handleResetEmail} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-success">Login</button>
                        </div>
                    </form>
                </div>
                <div>
                    {
                    error && <p className="text-red-700 mt-5 text-center text-2xl">{error}</p>
                    }
                    {
                        success && <p className="text-green-700 mt-5 text-center text-2xl"> {"Login Successfully"}</p>
                    }
                </div>
                
                </div>
            </div>
            </div>
            <p className=" my-5 text-center">New to this website ? Please <Link className="underline" to="/register">Register</Link></p>
        </div>
    );
};

export default EmailLogin;