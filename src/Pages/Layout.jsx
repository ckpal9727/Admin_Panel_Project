import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export const Layout = () => {
    const linkStyle = {
        color:"Black" ,
        'text-decoration':"none"
        
      };
  return (
    <div>
        <nav>
            <ul className='navbar'>
                <li>
                    <Link style={linkStyle} to='/home'>Home</Link>
                </li>
                <li>
                    <Link style={linkStyle} to='/login'>Login</Link>
                </li>
                <li>
                    <Link style={linkStyle} to='/addProduct'>Add Product</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
