import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { LOGOUT, OPTIONS } from '../utils/constants';

function HomeLayout() {
   const navigate = useNavigate();
   const handleLogout = async () => {
      try {
         const response = await fetch(LOGOUT, OPTIONS);
         // if (response.status === 200) {
         const data = await response.json();
         console.log('logout data', data);
         navigate("/");
         // }

      } catch (error) {

      }

   }
   return (
      <>
         <header className='flex items-center justify-between px-5'>
            <img
               className='w-32'
               src="https://miro.medium.com/v2/resize:fit:1035/1*9WJgQmBw6FIxe8wypznWfQ.jpeg"
            />
            <nav
               className='mr-auto pl-4'>
               <Link>Category</Link>
               <Link>Category</Link>
               <Link>Category</Link>
               <Link>Category</Link>
               <Link>Category</Link>
            </nav>
            <div>
               <Link
                  to="add"
                  className='bg-blue-200 border px-3 py-1 rounded'>
                  Add Movie
               </Link>
               <Link
                  to="/profile"
                  className='bg-blue-200 border px-3 py-1 rounded'>
                  Profile
               </Link>
               <button
                  onClick={handleLogout}
                  className='bg-blue-200 border px-2  rounded'>
                  Sign Out
               </button>
            </div>

         </header>
         <Outlet />
      </>
   )
}

export default HomeLayout;