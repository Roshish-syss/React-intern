import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const navItem=[
      {
        name:"Home",
        path:"/"
      },
      {
        name:"About Us",
        path:"/about"
    },
      {
        name:"Contact Us",
        path:"/contact"
      },
      {
      name:"Login",
      path:"/login"
      }
    ];

  return (
    <div className='flex justify-evenly items-center py-5 bg-amber-100 w-screen h-fit'>
      <h1>Lunar Intern</h1>
       <div className='flex gap-5'>
        {
          navItem?.map((data,index)=>{
            return (
                <div key={index}>
                  <Link className='text-black' to={data?.path}>
                         {data?.name}
                  </Link>
                </div>
            )
          })
        }
       </div>
       <div className='w-15 h-15 relative cursor-pointer  bg-gray-300 rounded-full flex justify-center items-center p-2'>
       <img className='w-full h-full relative' 
       src="./Images/user-avatar.png" alt="user avatar" />
       </div>
    </div>
  )
}

export default Navbar