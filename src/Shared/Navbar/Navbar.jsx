import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const {user,logOut}=useAuth()
  const handleLogout=async()=>{
      try {
        await logOut()
      } catch (error) {
        console.log(error)
      }
  }
  
    const list=<>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/menu'}>Our Menu</Link></li>
    <li><Link to={'/contact-us'}>Contact Us</Link></li>
    <li><Link to={`/our-shop/salad`}>Our Shop</Link></li>
    {
      user? <li><button onClick={handleLogout} >Logout</button></li>   : <li><Link to={`/login`}>Login</Link></li>
    }

    </>

    return (
        <div className="navbar fixed z-10 text-white bg-[#15151580] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {list}
      </ul>
    </div>
    <div className='flex flex-col justify-center items-center'>
   <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
   <span className='tracking-wider'>Restaurant</span>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;