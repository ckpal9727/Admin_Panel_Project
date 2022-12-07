import React from 'react'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'

export const UpdateUser = () => {

    const[u_fname,setName]=useState("");
    const[u_email,setEmail]=useState("");
    const[u_mobile,setMobile]=useState("");
    const[u_password,setPassword]=useState("");

    const param=useParams();
    // console.log(param.userid);

    //Get single user info
    const getUserData=async()=>{
        const response = await fetch(`/users?userid=${param.userid}`)
          const data = await response.json()
          if (data) {
            // navigate("/profile");
            // console.log(data['u_fname']);         
            setName(data['u_fname']);
            setEmail(data['u_email']);
            setMobile(data['u_mobile']);
            setPassword(data['u_password']);
          }else{
            console.log("data not found");
          }
    }


    //Update user Infor

    const updateUserProfile=async(id)=>{
        const response = await fetch(`/users?updateid=${id}`, {
            method: 'post',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              u_fname, u_password,u_mobile
            })
          })
          const data = await response.json()
          if (data) {
            // navigate("/profile");
            console.log(data);
          }
        
    }

    useEffect(() => {
        getUserData();
    }, [])
    
  return (
    <div>
        Name : <input type="text" value={u_fname} onChange={(e)=>setName(e.target.value)}/>
        Email : <input type="text" value={u_email} onChange={(e)=>setEmail(e.target.value)} readOnly={true}/>
        Mobile : <input type="text" value={u_mobile} onChange={(e)=>setMobile(e.target.value)}/>
        Password : <input type="text" value={u_password} onChange={(e)=>setPassword(e.target.value)}/>

        <input type="button" value="Update Profile"  onClick={(e)=>updateUserProfile(param.userid)}/>
    </div>
  )
}
