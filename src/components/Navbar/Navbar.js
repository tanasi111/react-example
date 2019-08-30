import React from 'react';

const navbar = (props) => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/blog">Blog</a>
                </div>
            </div>
        </nav>
    );
}

export default navbar;
