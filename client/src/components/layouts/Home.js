import React from 'react';
import { NavLink} from 'react-router-dom';

const Home = () => {
return (
    <div className="App">
         <NavLink to="/login" className="nav-link">Book Your Tickets Now</NavLink>
    </div>
)
    

}

export default Home;