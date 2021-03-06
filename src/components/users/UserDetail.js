import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
    <Route exact path='/user/:login' render={ props => (
        <UserDetail {...props} getUser={this.getUser} user={this.state.userDetail} loading={this.state.loading}  />
    )} />
 */

class UserDetail extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login)   // <Route exact path='/user/:login
        this.props.getUserRepos(this.props.match.params.login)   
    }

    // optional
    static propTypes = {
        loading: PropTypes.bool,
        userDetail : PropTypes.object.isRequired,
        repos:PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    }

    render() {
        const { 
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.userDetail   //userDetail from App.js

        const { loading } = this.props;

        if(this.props.loading === true) {
            return <Spinner />
        } else {
            return (
                <Fragment>
                    <Link to='/' className="btn btn-light">
                        Back To Search
                    </Link>

                    

                    <div className="card grid-2">
                        <div className="all-center">
                            <img src={avatar_url} className="round-img" alt="" style={ { width: '150px' } }  />
                            <h1> {name} </h1>
                            <p> Location : {location} </p>
                            <p> Hireable: {hireable === true ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger"  /> } </p>
                        </div>

                        <div>

                            { bio ? (
                                <Fragment>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </Fragment> 
                            ) : 'No bio from this user'}

                            {/* {bio && (
                                <Fragment>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </Fragment> 
                            )} */}

                            <a href={html_url} className="btn btn-dark my-1" > Visit Github Profile </a>

                            <ul>
                                <li>
                                    { login ? <Fragment> <strong> Username: {login} </strong>  </Fragment>  : '' }
                                </li>

                                <li>
                                    { company ? <Fragment> <strong> Company: {company} </strong>  </Fragment>  : '' }
                                </li>

                                <li>
                                    { blog ? <Fragment> <strong> Website : {blog} </strong>  </Fragment>  : '' }
                                </li>
                            </ul>
                        </div>

                        <div className="card text-center" style={ {width: '520px'} }>
                            <div className="badge badge-primary">Followers: {followers} </div>
                            <div className="badge badge-success">Following: {following} </div>
                            <div className="badge badge-light">Public Repos: {public_repos} </div>
                            <div className="badge badge-dark">Public Gists: {public_gists} </div>
                        </div>

                    </div>

                    <Repos repos={this.props.repos} />
                </Fragment>


            )
        }

        
    }
}

export default UserDetail
