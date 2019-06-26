import React from 'react'
import PropTypes from 'prop-types'


// functional component (because stateless)
// we don't need render()
const UserItem = (props) => {
// const UserItesm = ( {user: { login, avatar_url, html_url }} )  [ALTERNATIVE]
    // props.user = {  }
    const { login, avatar_url, html_url } = props.user;     //this.props.user (class) -> props.user (functional)

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }}/>

        {/* props.user.login = Github user name */}
            <h3> {login} </h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1"> More </a>

            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
