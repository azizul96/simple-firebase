import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-center my-5">
            <nav>
                <ul className="text-lg font-bold flex justify-center items-center gap-5">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                        isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                        }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({ isActive, isPending }) =>
                        isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                        }>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/loginWithGoogle" className={({ isActive, isPending }) =>
                        isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                        }>Login With Google</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/register" className={({ isActive, isPending }) =>
                        isActive
                        ? "text-red-600 underline"
                        : isPending
                        ? "pending"
                        : ""
                        }>Register</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;