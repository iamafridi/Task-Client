import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logout } = useAuth()
    console.log(user);
    return (
        <div className=" flex gap-3 items-center">
            {/* Navbar menu content here */}
            <NavLink to="/about" className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Contact</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Services</NavLink>
            {user?.email ?
                (<button className="btn btn-ghost btn-sm" onClick={logout}>Logout</button>)
                :
                (
                    <NavLink to="/login" className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>
                )
            }
        </div>
    );
};

export default Navbar;