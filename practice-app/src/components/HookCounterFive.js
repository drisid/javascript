import React, {useState} from "react";
import userDetails from "../jsxpractice";

function FormCounter()
{
    const [user, setUser] = useState({name : '' , password: ''})

    
    return(
            <div>
                    Username : 
                    <input type = "text" value = {user.name} onChange = {e => {setUser({...user, name : e.target.value})}} />

                    Password :
                    <input type = "password" value = {user.password} onChange = {e => {setUser({...user, password : e.target.value})}} />

             </div>
    )
}

export default FormCounter