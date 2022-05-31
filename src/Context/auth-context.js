import { createContext,useContext,useState,useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { app } from "../firebaseconfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";


const AuthContext=createContext();
const AuthProvider=({children})=>{

    const [userData,setUserData]=useState({});
    const navigate=useNavigate();
  

    useEffect(()=>{
        const auth=getAuth();
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setUserData(user)
                navigate("/notepage");
            }
            else{
                setUserData(user);
                navigate("/");
            }

        })

    },[])

    const signUpHandler = async(signupData)=>{
        console.log(signupData);
        try{
        const auth = getAuth(app);
        const {user} = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
        console.log(user); 
        setUserData(user);
        navigate("/notepage");
        toast("successFully LoggedIn",{icon:"✔"});
        }        
        catch(err){
            console.log(err,"error");
            toast("could not complete the request",{icon:"✔"});
        }

    } 

    const logInHandler=async(logInData)=>{
        try{
        const auth = getAuth(app);
        const {user} = await signInWithEmailAndPassword(auth, logInData.email, logInData.password);
        console.log(user); 
        setUserData(user);
        navigate("/notepage");
        toast("successFully LoggedIn",{icon:"✔"});
        }        
        catch(err){
            console.log(err,"error");
            toast("could not complete the request",{icon:"✔"});
        }

    } 

    const logOutHandler=async()=>{
        const auth=getAuth();
        try{
        signOut(auth).then(()=>{
            toast("successfully SignedOut",{icon:"✔"})
        })
    }
    catch(err)
    {
        console.log(err,"something went wrong");
    }

    }

    

    return <AuthContext.Provider value={{userData,setUserData,signUpHandler,logInHandler,logOutHandler}}>{children}</AuthContext.Provider>
}

const useAuth=()=>useContext(AuthContext);

export {AuthProvider,useAuth};