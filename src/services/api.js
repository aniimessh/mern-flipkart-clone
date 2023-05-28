import axios from "axios";
const URL = 'http://localhost:8000';
export async function UserSignUp(data){
    try{
        return await axios.post(`${URL}/signup`, data)
    }catch(err){
        console.log("Error While calling Signup()")
        console.log(err.message)
    }
}

export async function UserLogin(data){
    try{
        return await axios.post(`${URL}/login`, data)
    }catch(err){
        console.log("Error While calling Login()")
        console.log(err.message)
        return err.response;
    }
}