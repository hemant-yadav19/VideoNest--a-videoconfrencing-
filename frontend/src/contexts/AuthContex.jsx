import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import httpStatus from "http-status";
export const AuthContext = createContext({});

const client = axios.create({
    baseURL: "http://localhost:8000"
})

export const AuthProvider = ({children})=>{
    const authContext = useContext(AuthContext);
    const [userData ,setUserData] = useState(authContext);
    const router = useNavigate();
    let [message, setMessage] = useState("");

    const handleLogin = async (userName,password) =>{
        try{
            let request = await client.post("/login",{
                userName:userName,
                password:password
            });
            if(request.status === httpStatus.OK){
                localStorage.setItem("token",request.data.token);
                setMessage(request.data.message);
            }
        } catch(err){
            throw err;
        }

    }
        const handleRegister = async (name,userName,password) =>{
        try{
            let request = await client.post("/register",{
                name:name,
                userName:userName,
                password:password
            })
            // console.log(request);
            // if(request.status === httpStatus.CREATED){
                return setMessage(request.data.message);
            // }
        } catch(err){
            throw err;
        }
        
    }
    const data = {
       message,setMessage, handleRegister,userData,setUserData,handleLogin
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

 