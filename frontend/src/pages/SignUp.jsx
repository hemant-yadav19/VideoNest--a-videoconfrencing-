import React, { useContext, useState } from 'react'
import "../App.css";
import { AuthContext } from '../contexts/AuthContex';
export default function SignUp() {
    let [FormState, setFormState] = useState(1);
    let [name , setName] = useState("");
    let [userName , setUserName] = useState("");
    let [password , setPassword] = useState("");
    

    const {handleRegister,handleLogin,message} = useContext(AuthContext);
        console.log(message);
    let handleAuth = async (e)=>{
        e.preventDefault();
        try{
            if(FormState === 0){
                let result = await handleLogin(name,password);
                // setMessage(result);
            }
            if(FormState === 1){
                let result = await handleRegister(name,userName,password);
                    // setMessage(result);
                    
            }   
        } catch(err){
            return err.response.data.message;
         
        }
    }
   
    return (
        
     <div className='registerContainer'>   
    
    <div className='registerForm'>
            
        
        <form>

            <div className='registerButtons'>
                
            <button style={FormState===0?{backgroundColor:"#0047AB"}:{color:"black",border:"none"}} onClick={(e)=>{e.preventDefault(); setFormState(0)}}>SignIn</button>
            <button style={FormState===1?{backgroundColor:"#0047AB"}:{color:"black",border:"none"}} onClick={(e)=>{e.preventDefault(); setFormState(1)}}>SignUp</button>
            </div>
                <p style={{padding:"1rem"}}>{message}</p>
            <input
            placeholder='Enter Name'
            onChange={(e)=>setName(e.target.value)}
            /><br/>
            {FormState === 1?
            <input
            placeholder='Enter UserName'
             onChange={(e)=>setUserName(e.target.value)}
            /> : <></>}<br/>
            <input
            placeholder='Password'
             onChange={(e)=>setPassword(e.target.value)}
            /><br/>
            <div className="registerButtons2">
           {FormState === 1?
           <button onClick={handleAuth}>Register</button>
             : <button onClick={handleAuth}>Login</button>}</div>
        </form>
    </div>
</div>
  )
}
