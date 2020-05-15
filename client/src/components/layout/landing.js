import React from 'react';
import {Link} from 'react-router-dom'

function landing() {
    return (
        <div>
             <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
          <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default landing;
