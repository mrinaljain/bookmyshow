import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserLogout } from '../api/user.api';

function HomeLayout() {
   const navigate = useNavigate();
   const handleLogout = async () => {
      try {
         //?axios API call
         const response = await UserLogout();
         if (response.data.success) {
            localStorage.removeItem("token");
            navigate("/");
         }
      } catch (error) {
         console.log(error.message);
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

// TODO: manageui as per user access