import React from 'react'
import "./App.css"
import Footer from './Components/Footer'
import Header from './Components/Header'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home'
import Login from './Components/Login/Login'
import LoginCreate from './Components/Login/LoginCreate'
import { UserStorage } from './UserContext'
import User from './Components/User/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import UserPhotoPost from './Components/User/UserPhotoPost'
import UserStats from './Components/User/UserStats'
import Photo from './Components/Photo/Photo'
import NotFound from './Components/Helper/NotFound'
import UserProfile from './Components/User/UserProfile'




const App = () => {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Header/>
      
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/login/criar" element={<LoginCreate/>}/>
            <Route path="/conta" element={<ProtectedRoute><User/></ProtectedRoute>}/>


            <Route path="/conta/postar" element={<ProtectedRoute><UserPhotoPost/></ProtectedRoute>}/>
            <Route path="/conta/estatisticas" element={<ProtectedRoute><UserStats/></ProtectedRoute>}/>
            <Route path="/foto/:id" element={<Photo/>}/>
            <Route path="/perfil/:user" element={<UserProfile/>}/>
            <Route path="*" element={<NotFound/>}/>

        </Routes>

        <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App