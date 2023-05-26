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