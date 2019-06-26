import React from 'react'
import PropTypes from 'prop-types'  //Proptypes -> propTypes on code

// functional component
 const Navbar = (props) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon} /> &nbsp; Github Finder
            </h1>
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
