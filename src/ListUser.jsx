import { useState,useEffect,useContext } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import { ThemeContext } from "./components/ThemeContext";

export default function ListUser(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const { state,dispatch } = useContext(ThemeContext);
    
    useEffect(()=>{
        fetchUsers();
        console.log(`Theme saat ini: ${state.theme}`);
    },[state.theme]);

    async function fetchUsers(){
        try{
            const url='https://jsonplaceholder.typicode.com/users';
            const response = await axios.get(url);
            setUsers(response.data);
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }


    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return(
        <div>
            <h1>List User</h1>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}