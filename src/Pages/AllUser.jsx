import React,{useEffect} from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AllUser = () => {
    const [users,setUsers]=useState("");
    const navigate = useNavigate();
    const getAlluser=async()=>{
        // e.preventDefault();
        const response = await fetch('/users')
          const data = await response.json()
          if (data) {
            // navigate("/profile");
            // console.log(data['users']);
           
            setUsers(data['users']);
          }
    }
    
    //Updata user

    const updateUser=async(id)=>{
        console.log(id);
        navigate(`/updateUser/${id}`);
    }
    const deleteUser=async(id)=>{
        console.log(id)
        const response = await fetch(`/users?deleteid=${id}`, {
            method: 'post',
            headers: {
              'Content-type': 'application/json'
            },
           
          })
          const data = await response.json()
          if (data) {
            // navigate("/profile");
            getAlluser();
            console.log(data);
          }
    }
    useEffect(() => {
    getAlluser();
    }, [])
  return (
    <div>
        {users?users.map((e,i)=>{
            return(
                <div key={i}>
                   <p> {users[i]['name']?users[i]['name']:users[i]['u_fname']} &nbsp; &nbsp;&nbsp;
                    {users[i]['email']?users[i]['email']:users[i]['u_email']} &nbsp;&nbsp;&nbsp;
                    {users[i]['mobile']?users[i]['mobile']:users[i]['u_mobile']} &nbsp;
                    {/* {users[i]['isAdmin']?users[i]['isAdmin']:users[i]['isAdmin']} &nbsp; */}
                      <button onClick={(e)=>updateUser(users[i]['_id'])} >Update</button>
                    <button  onClick={(e)=>deleteUser(users[i]['_id'])}>delete</button></p>
                   
                   
                </div>
            )
        }):"Data Loading..."}
    </div>
  )
}
