import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard() {
   return (
      <Link to="22" className='w-[17%] rounded-md'>
         <div >
            <img
               className='rounded-md'
               src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAzMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363650-fbquplkyju-portrait.jpg"} />
            <h3 className='font-light'>Chandu Champion</h3>
            <p className='text-gray-400 font-extralight text-sm'>Biography/Drama/Sports</p>
         </div>
      </Link>
   )
}

export default MovieCard;