import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
    const {user} = useAuth()
    return (
        <div className=" flex flex-col gap-3 items-start   ">
                                {/* Navbar menu content here */}
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'btn btn-primary  w-full ' : 'btn btn-ghost  w-full'}>About</NavLink>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? 'btn btn-primary  w-full'  : 'btn btn-ghost  w-full'}>Contact</NavLink>
                                {
                                    user?.email ? (
                                    <button className="btn btn-ghost  w-full">Logout
                                    </button>)
                                    :
                                    (<NavLink to="/login" className={({ isActive }) => isActive ? 'btn btn-primary  w-full' : 'btn btn-ghost  w-full'}>Login</NavLink>)
                                }
                            </div>
    );
};

export default Sidebar;