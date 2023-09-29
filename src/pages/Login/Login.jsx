import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [myUser, setMyUser] = useState([])

    
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    console.log(myUser);

    const handleLogin = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) =>{
            const user = result.user;
            setMyUser(user)
            
        })
        .catch((error) =>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    const handleSignOut = ()=>{
        signOut(auth)
        .then((result)=>{
            console.log(result);
            setMyUser(null)
        })
        .catch((error) =>{
            console.log(error.message);
        })
    }
    const handleGithubLogin = () =>{
        signInWithPopup(auth, GithubProvider)
        .then(result => {
            const user = result.user
            console.log(user);
            setMyUser(user)
        })
        .catch(error =>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    return (
        <div className="text-center mt-10">
            <div className="mb-10">
                {myUser ? <button onClick={handleSignOut} className="btn btn-success">Sign Out</button> :
                <div className="flex justify-center gap-5 ">
                    <button onClick={handleLogin} className="btn btn-success">Login with Google</button>
                    <button onClick={handleGithubLogin}  className="btn btn-success">Login with GitHub</button>
                    
                </div>
                }

            </div>
            <div>
                {
                    myUser && <div>
                        <h3>User: {myUser.displayName}</h3>
                        <p>Email: {myUser.email}</p>
                        
                    </div>
                }
            </div>
            
        </div>
    );
};

export default Login;