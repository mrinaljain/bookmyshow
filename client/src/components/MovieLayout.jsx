import React from 'react'
import { Outlet } from 'react-router-dom';

function MovieLayout() {
   return (
      <>
         <Outlet />
      </>
   )
}

export default MovieLayout;