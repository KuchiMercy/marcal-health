import { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";


const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const clickHandler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div>
      
      <nav className="my-3 box-border bg-white shadow-md flex justify-between md:items-center flex-wrap mt-0 py-2 px-5 fixed top-0 w-full z-10">
      
      <div className="font-bold text-2xl">
          <span className="text-secondary">M</span>arc
          <span className="text-secondary">a</span>l
        </div>
        
        <div className={toggleNav ? "flex flex-col md:inline" : "hidden md:inline"}>
          <NavLink className="nav-btn" onClick={clickHandler} to="/">
            HOME
          </NavLink>
          <NavLink className="nav-btn" onClick={clickHandler} to="/department">
            DEPARTMENT
          </NavLink>
          <NavLink className="nav-btn" onClick={clickHandler} to="/doctors">
            DOCTORS
          </NavLink>
          <NavLink className="nav-btn" onClick={clickHandler} to="/contact">
            CONTACT
          </NavLink>
        </div>
        <div> 
          {/* Empty Div  */}
          </div>
          <button
        className="text-2xl inline md:hidden self-start text-black outline-none"
        onClick={clickHandler}
      >
        {toggleNav ? <AiOutlineClose /> : <FaBars />}
      </button>
      </nav>
     
    </div>
  );
};

export default Navbar;
