import logo from './logo.svg';
import './App.css';
import { Layout } from './Pages/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import Login from './Pages/Login';
import { UpdateUser } from './Pages/UpdateUser';
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <div className="">
      <Layout/>
      <Routes>
        <Route path='/home' element={<Home/>}>Home</Route>
        <Route path='/login' element={<Login/>}>Login</Route>
        <Route path='/updateUser/:userid' element={<UpdateUser/>}>Update User</Route>
        <Route path='/addProduct' element={<AddProduct/>}>Update User</Route>
      </Routes>
    </div>
  );
}

export default App;
