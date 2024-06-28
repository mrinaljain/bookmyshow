import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';

function MovieLayout() {
   return (
      <>
         <Header />
         <Outlet />
      </>
   )
}

export default MovieLayout;