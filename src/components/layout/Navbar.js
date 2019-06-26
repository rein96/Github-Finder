import React from 'react';
import PropTypes from 'prop-types';  //Proptypes -> propTypes on code
import { Link } from 'react-router-dom';    //use curly bracket { Link } because it doesn't "export default" on react-router-dom

// functional component
 const Navbar = (props) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon} /> &nbsp; Github Finder
            </h1>

            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                    {/* use Link instead of <a href>, because Link keep App.js STATE */}
                <li>
                    <Link to='/about'> About </Link>
                </li>
            </ul>
        </nav>
    );
}


Navbar.defaultProps = {     // This give a default props value
    title: 'This is Default title',
    icon: 'fab fa-github'
};

Navbar.propTypes = {    // This gives a warning when the type is not same
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar
