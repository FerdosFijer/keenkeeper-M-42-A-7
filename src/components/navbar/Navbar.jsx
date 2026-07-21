import { LuClock3 } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router";

const Navbar = () => {
 const links =(
    <>
    <li>
      <NavLink to={"/"} className={({isActive}) => `btn btn-ghost font-semibold mr-1 ${isActive ? "bg-teal-800 border border-teal-800 text-white" : "text-slate-500"}` }><RiHome2Line /> Home</NavLink>
    </li>
    <li>
      <NavLink to={"/bc"}className={({isActive}) => `btn btn-ghost font-semibold mr-1 ${isActive ? "bg-teal-800 border border-teal-800 text-white" : "text-slate-500"}`}> <LuClock3 /> Timelne</NavLink>
    </li>
    <li>
      <NavLink to={"/sc"}className={ ({isActive}) => `font-semibold mr-1 ${isActive ? "btn btn-ghost bg-teal-800 border border-teal-800 text-white" : "text-slate-500"}`}><TfiStatsUp /> Stats</NavLink>
    </li>
    </>
  )
    return (
<div className=" bg-base-100 shadow-sm ">
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
           {links}
          </ul>
        </div>
        <h2 className="font-bold text-xl  lg:text-3xl">Keen<span className='text-teal-800'>Keeper</span> </h2>
      </div>
     
      <div className="navbar-end gap-4 ">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
    </div>
    </div>
    );
};

export default Navbar;