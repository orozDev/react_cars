import React from 'react'
import '../../css/style.css'
import Content from './pages/Content';
import ItemCar from './pages/ItemCar';
import CarsByType from './pages/CarsByType';
import NotFoundPage from './errors/NotFoundPage';
import Profile from '../auth/Profile';
import Registration from '../auth/Registration';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

function Main() {
  const { isAuth, token, login, logout } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/profile" element={isAuth ?<Profile /> :<NotFoundPage/>} />
          <Route path="/cars/:id" element={<ItemCar />} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/types_of_cars/:id" element={<CarsByType />} />
          <Route path="*" element={<NotFoundPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default Main