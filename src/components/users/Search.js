import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        text: '',

    }

    // optional
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    onChange = (event) => {
        this.setState( { [event.target.name]: event.target.value } )  // this.setState( {text: event.target.value } )
        // event.target.name is related to <input name="text" />
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.text);

        if (this.state.text === '' ) {
            this.props.setAlert('Please enter something on the search bar :)', 'light');  //from App.js
        } else {
            // call searchUsers() from App.js
            this.props.searchUsers(this.state.text);

            // clear the form and state
            this.setState( { text: '' } )
        }   

        

    }

    render() {
        // const { showClear, clearUsers } = this.props;    //optional
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                    type="text" 
                    name="text" 
                    placeholder="Search Github users here..." 
                    onChange={this.onChange}
                    value={this.state.text}  
                    />

                    <input type="submit" value="Search" className="btn btn-dark btn-block"   />
                </form>
                {/* To show button CLEAR USERS or remove it, this.props.showClear = false || true from App.js */}
                    {this.props.showClear === true ? <button className="btn btn-light btn-block" onClick={this.props.clearUsers}> Clear users </button> : ''}
                
            </div>
        )
    }
}

export default Search
