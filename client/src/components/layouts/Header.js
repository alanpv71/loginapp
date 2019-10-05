import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => {
return (
    <div className="App">



        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
               
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/register" className="nav-link">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>  
    </div>
)
    

}

export default Header;