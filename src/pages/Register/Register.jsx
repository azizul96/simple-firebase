import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [typePass, setTypePass] = useState(false)


    const auth = getAuth(app)

    const HandleRegister = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termAccept = e.target.checkbox.checked
        

        setError('')
        setSuccess('')

        if(password.length < 4){
            setError("Password should be at least 4 character or longer")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setError("Should have one Uppercase Character")
            return
        }
        else if(!termAccept){
            setError("Please Accept Our Terms and Condition")
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setSuccess(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className=" container mx-auto px-5 ">
            <h1 className=" text-3xl font-bold mt-20 mb-5 text-center">Please Register</h1>
            <div className="w-2/4 mx-auto" >
                <form onSubmit={HandleRegister} className="">
                    <input className="w-full px-5 py-2 mb-4 border-2 border-orange-500 rounded-md" type="email" name="email" id="" placeholder="Your Email" />
                    <div className="relative">
                    <input className="w-full px-5 py-2 mb-4 border-2 border-orange-500 rounded-md" type={typePass ? "text" : "password"  } name="password" id="" placeholder="Password" />
                    <span onClick={()=> setTypePass(!typePass)} className="absolute text-2xl text-purple-700 top-2 right-2 cursor-pointer">{typePass ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>}</span>
                    </div>
                    <div className="mb-5">
                        <input type="checkbox" name="checkbox" id="terms" placeholder=" Please"/>
                        <label className="ml-2" htmlFor="terms">Accept Our Terms and Condition</label>
                    </div>
                    <input className="btn btn-success w-full" type="submit" value="Register" />
                </form>

            </div>
            {
                error && <p className="text-red-700 mt-5 text-center text-2xl">{error}</p>
            }
            {
                success && <p className="text-green-700 mt-5 text-center text-2xl"> {"Created Successfully"}</p>
            }
            <div>
            <p className=" my-5 text-center">Already have an account ? Please <Link className="underline" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;