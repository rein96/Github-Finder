import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

// this.props = loading + users

// functional component
const Users = (props) => {

    if (props.loading === true) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {props.users.map( user => (    //props.users from App.js
                    <UserItem key={user.id} user={user} />  //user + key -> props to UserItem
                ))}
                
            </div>
        )
    }

    
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired, //bool = boolean
}


// style object -> outside class
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
