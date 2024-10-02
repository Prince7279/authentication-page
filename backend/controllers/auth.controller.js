import { User } from "../models/user.model.js";
import bcryptjs  from 'bcryptjs';
import { generateVerificationCode } from "../utils/generateVerificationCode.js";


export const signup = async(req,res) =>{

    const{email,password,name} = req.body;
try {

    if(!email || !password  || !name){


       throw new Error("ALL fields are required");
    
} 
const userAlreadyExists = await User.findOne({email});
if(userAlreadyExists){
    return res.status(400).json({success: false, message: "User aleredy exists"});
}

const hashedPassword = await bcryptjs.hash(password, 10);
const verificationCode = generateVerificationCode(); 
const user= new User({
    email,
    password:hashedPassword,
    name,
})
}
catch (error) {
   res.status(400).json({success: false, message: error.message});

}
}


export const login= async(req,res) =>{
res.send("login route");
}


export const logout = async(req,res) =>{
res.send("logout route");
}