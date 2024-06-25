import React, { useState } from 'react'
import { LOGIN_API, SIGNUP_API } from '../utils/constants.js';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
   const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
   const [login, setLogin] = useState(true);
   const navigate = useNavigate();
   function handleChange(e) {
      setFormData((oldFormData) => {
         return { ...oldFormData, [e.target.name]: e.target.value }
      })
   }
   async function onSubmit(e) {
      e.preventDefault();
      try {
         if (login) {
            var response = await fetch(LOGIN_API, {
            method: "POST",
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email: formData.email,
               password: formData.password
            }),
            });
            if (response.status === 200) {
               const data = await response.json();
               console.log(data);
               navigate('/movies');
            } else {
               //TODO handel login error here
            }
         } else {
            var response = await fetch(SIGNUP_API, {
               method: "POST",
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  fullName: formData.fullName,
                  email: formData.email,
                  password: formData.password
               }),
            })
            //TODO add check for  status code should be 200
            const data = await response.json();
            console.log(data);
            navigate('/movies');
         }

      } catch (error) {
         console.log(error.message);
      }
   }
   return (
      <>
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
               />
               <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  {login ? "Sign in to your account" : " Signup for an account"} 
               </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <form className="space-y-6" onSubmit={onSubmit}>
                  {!login && <div>
                     <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                        User Name
                     </label>
                     <div className="mt-2">
                        <input
                           id="fullName"
                           name="fullName"
                           type="text"
                           autoComplete="fullName"
                           value={formData.fullName}
                           onChange={handleChange}
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>}

                  <div>
                     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                     </label>
                     <div className="mt-2">
                        <input
                           id="email"
                           name="email"
                           type="email"
                           autoComplete="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                           Password
                        </label>
                        <div className="text-sm">
                           <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                              Forgot password?
                           </a>
                        </div>
                     </div>
                     <div className="mt-2">
                        <input
                           id="password"
                           name="password"
                           type="password"
                           autoComplete="current-password"
                           value={formData.password}
                           onChange={handleChange}
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        onSubmit={onSubmit}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                     >
                        {login ? " Sign in" : "Sign up"}
                     </button>
                  </div>
               </form>
               <Link to="/movies"> Go to Dashboard</Link>
               <p className="mt-10 text-center text-sm text-gray-500">
                  {login ? "Not a member? " : "Already a member ? "}
                  <button onClick={() => { setLogin(!login) }} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                     {login ? " Sign Up Now" : " Sign In"}
                  </button>
               </p>
            </div>
         </div>
      </>
   );
}

export default Login;