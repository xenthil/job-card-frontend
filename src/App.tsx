import React,{ lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Loadable from './components/Loadable'
// const Login = Loadable(lazy(() => import('./pages/Login')));
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Client from './pages/client/Client'
import AddAndEditClient from './pages/client/AddAndEditClient'
import ProtectedRoute from './utils/ProtectedRoute'


import './App.css';


function App(): React.ReactElement {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
             <Route path="login" element={<Login/>} />
             <Route path="register" element={<Register/>} />
             <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home/>} />
                <Route path="home" element={<Home/>} />
                <Route path="client" element={<Client/>} />
                <Route path="addClient" element={<AddAndEditClient/>} />
                <Route path="editClient" element={<AddAndEditClient/>} />
             </Route>
             <Route path="*" element={<NotFound/>} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
