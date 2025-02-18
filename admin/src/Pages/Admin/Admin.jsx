import React from 'react';
import "./Admin.css";
import Slidebar from '../../Components/Slidebar/Slidebar';
import { Route,Routes } from 'react-router-dom';
import Add from '../../Components/Add/Add';
import List from '../../Components/List/List';

const Admin = () => {
  return (
    <div className=' flex  '>
    <Slidebar/>
    <Routes>
      <Route path='/addproduct' element={<Add/>}/>
      <Route path='/listproduct' element={<List/>}/>
    </Routes>
    </div>
  )
}

export default Admin