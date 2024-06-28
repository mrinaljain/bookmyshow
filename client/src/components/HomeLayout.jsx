import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from './Header';

function HomeLayout() {
   return (
      <>
         <Header />
         <Outlet />
      </>
   )
}

export default HomeLayout;

// TODO: manageui as per user access