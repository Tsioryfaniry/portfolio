import axios from "axios";
 
export let getUser = () =>{
    const userGeting = axios.get('http://localhost:3000/user').then(response =>{
        const data = response.data
        console.log(data);
        
    } )
    console.log(userGeting);
    
}

export const User={
    getUser
} 