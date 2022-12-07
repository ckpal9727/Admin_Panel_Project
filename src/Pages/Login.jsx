import React, { useState } from "react";
import { Form } from "react-router-dom";





export default function Login() {

    
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

 async function handleSubmit(event) {
console.log("presed submit");
    event.preventDefault();
    const response = await fetch('/users/login', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email, password
        })
      })
      const data = await response.json()
      if (data) {
        // navigate("/profile");
        console.log(data);
      }

  }

  return (

    <div className="">

<form onSubmit={handleSubmit}>
            <div>
                Email: <input tye="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
                password: <input tye="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
                <button type="submit">Login</button>
            </div>
      </form>

    </div>

  );

}