import React from 'react';
import {Link} from 'react-router-dom'
function navbar() {
    return (
        <div>
             <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> DevelopersConnector</Link>
      </h1>
      <ul>
        <li>Developers</li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
        </div>
    )
}

export default navbar;
