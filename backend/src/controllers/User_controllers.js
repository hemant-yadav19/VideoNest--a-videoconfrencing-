import  user  from "../models/user_models.js";

import httpStatus from "http-status";
import bcrypt from "bcrypt";
import crypto from "crypto";




export const register = async (req,res) =>{
    const {name,userName,password} = req.body;
    // console.log(name,userName,password);
    try {

        const existingUser  = await user.findOne({userName});
        if(existingUser){
            return res.status(404).json({message:"user already registered"});
        }
        if(!name || !userName|| !password){
            return res.json({message:"all feilds required"});
        }

        const hashPassword = await bcrypt.hash(password,10);

        const newUser = new user({
            name:name,
            userName:userName,
             password:hashPassword
        })

        await newUser.save();

        return res.json({message:"user registered succefully... :)"});


    } catch (err) {
        return res.status(500).json({message:err.message});
    }
}
export const login = async (req,res) =>{
    const {userName,password} = req.body;
    if(!userName || !password){
        return res.json({message:"invalid credentials"});   
    }
    try {
        const User = await user.findOne({userName});
        console.log(User)
        if(!User){
            return res.status(404).json({message:"user not found"});
        }

        if( await bcrypt.compare(password,User.password)){
            const token=crypto.randomBytes(20).toString("hex");
            User.token=token;
            await User.save();
            return res.status(httpStatus.OK).json({message:"loggedin successfull"});

        }



    } catch (err) {
        return res.status(500).json({message:err.message});
    }
}





































// const login = async(req,res) =>{
//     const {username,password} = req.body;
//     if(!username || !password) {
//         return res.status(402).json({message:"please provide valid username or password"});
//     }
//     try{
//         const User  = await user.findOne({username});
//         if(!User){
//             return res.status(httpStatus.NOT_FOUND).json({message:"invalid ceredentials"})
//         }

//         if(bcrypt.compare(password,User.password)){
//             let token = crypto.randomBytes(20).toString("hex");
//             User.token=token;
//             await User.save();
//             res.status(httpStatus.OK).json({message:{token:token}});           
//         }
//     } catch(e){
//         return res.status(500).json({message:`something went wrong ${e}`});
//     }
// }   
// const register = async(req,res) =>{
//     const {name,username,password} = req.body;

//     try{
//         const existingUser = await user.findOne({username});
//         if(existingUser){
//             return res.status(httpStatus.FOUND).json({message:"user already registerd"}); 
//         }

//         const hashPassword = await bcrypt.hash(password,10);

//         const newRegister = new user({
//             name:name,
//             username:username,
//             password:hashPassword
//         })

//         await newRegister.save();
//         res.status(httpStatus.CREATED).json({message:"user registered successfully"});
//     } catch(e){
//         return res.json({message:`something went wrong ${e}`});
//     }
// }


// export {login , register};