import React, { Component } from 'react'
import PropTypes from 'prop-types'  //Proptypes -> propTypes on code


export class Navbar extends Component {
    static defaultProps = {     // This give a default props value
        title: 'This is Default title',
        icon: 'fab fa-github'
    };

    static propTypes = {    // This gives a warning when the type is not same
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className='fab fa-github' /> &nbsp; Github Finder
                </h1>
            </nav>
        )
    }
}

export default Navbar
