
import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard';
import Login from './Auth/Login';
import Register from './Auth/Register';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Menu from './screens/Menu';
import UserDashboard from './User/UserDashboard';
import Pnf from './Util/Pnf';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './middleware/ProtectedRoute';
import { GlobalContext } from '../GlobalContext';
import Explore from './screens/Explore';
import Navbar from './screens/Menu';


function Main(props) {

  const context = useContext(GlobalContext)

  const [isLogged, setIsLogged] = context.authApi.isLogged;
  const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
  const [isUser, setIsUser] = context.authApi.isUser;

  return (
   <Router>
    <Navbar/>
    <ToastContainer autoClose={5000} position='top-center' />
    <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>} />
        <Route path={'/explore'} element={<Explore/>} />
        <Route path={'/contact'} element={<Contact/>} />
        <Route path={'/login'} element={<Login/>} /> 
        <Route path={'/register'} element={<Register/>} />
        <Route path={'/user/dashboard'} element={
                                                               <ProtectedRoute auth={isLogged}>
                                                                     <UserDashboard />
                                                               </ProtectedRoute>
                                                                    } />
        <Route path={'/admin/dashboard'} element={
                                                           <ProtectedRoute auth={isLogged}>
                                                                 <AdminDashboard />
                                                           </ProtectedRoute>
                                                                                } />
        <Route path={'/*'} element={<Pnf/>} />
    </Routes>
     
   </Router>
  )
}

export default Main
