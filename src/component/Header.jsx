import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
const Header = () => {
  const [extendNavbar,setExtendNavbar] = useState(false)
  console.log(extendNavbar);
  return (
    <div className="bg-green-400 text-black h-20">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="h-20 flex items-center">
          <h1 className="text-4xl font-bold">Logo</h1>
        </div>  
        <div className="flex gap-6">
          <ul className={`lg:static gap-6 text-xl flex flex-col lg:flex-row lg:items-center duration-700 absolute ${extendNavbar?"left-5 top-24" : "left-[-150px] top-24"}`}>
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Career</li>
            <li className="hover:text-blue-400 cursor-pointer">Login</li>
            <li className="hover:text-blue-400 cursor-pointer">SignUp</li>
          </ul>
          <div className="text-yellow-400 flex lg:hidden h-20 items-center" onClick={()=>{setExtendNavbar((currentState => !currentState))}}>
           {
            extendNavbar ?  <ClearIcon/> : <MenuIcon/>
           }
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Header
